import { Notification } from 'rsuite'

function send(type, title, description) {
  let config = {
    title,
    description,
    placement: 'bottomRight'
  }

  let notify = {
    warning: Notification.warning,
    error: Notification.error,
    success: Notification.success,
    default: Notification.open
  }

  if(notify[type]) {
    notify[type](config)
  } else {
    notify.default(config)
  }
}

export default {
  send
}
