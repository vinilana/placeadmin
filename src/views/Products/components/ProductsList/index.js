import React, { PureComponent } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { withFirebase } from '../../../../highOrderComponents/Firebase'

class ProductsList extends PureComponent {

  productsRef = this.props.firebase.doGetReferenceOfDocumentsFromCollection('products')

  state = {
    list: null
  }

  handleMountList = (querySnapshot) => {
    let list = []
    querySnapshot.forEach(function(doc) {
      list.push({...doc.data(), id: doc.id})
    })

    this.setState({
      list
    })
  }

  handleEdit = (id) => {
    this.props.onEdit(id)
  }

  handleDeleteItem = (id) => {
    this.productsRef.doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });

  }

  componentDidMount() {
    this.listener = this.productsRef.orderBy("name").limit(100).onSnapshot(querySnapshot => {
      this.handleMountList(querySnapshot)
    })

    this.productsRef.orderBy("name").limit(100).get()
      .then((querySnapshot) => {
        this.handleMountList(querySnapshot)
      })
  }

  componentWillUnmount() {
    this.productsRef.onSnapshot(function () {});
    this.listener = null
  }

  render() {
    return (
      <List>
        {this.state.list && this.state.list.map((item, key) => (
          <ListItem key={key} onClick={() => this.handleEdit(item.id)} role={undefined} dense button>
            <ListItemText primary={item.name} />
            <ListItemText primary={item.price} />
            <ListItemText primary={item.amount} />
            <ListItemText primary={item.unit} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => this.handleEdit(item.id)} aria-label="Editar">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => this.handleDeleteItem(item.id)} aria-label="Deletar">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    )
  }

}

export default withFirebase(ProductsList)
