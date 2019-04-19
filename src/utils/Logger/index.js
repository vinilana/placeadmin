const Logger = () => {
  if(process.env.NODE_ENV === 'development') {
    return {
      log: (message) => console.log('APP LOG: ', message),
      info: (message) => console.info('APP INFO: ', message),
      error: (message) => console.error('APP ERROR: ', message),
    }
  } else {
    return {
      log: () => {},
      info: () => {},
      error: () => {}
    }
  }
}

export const logger = new Logger()

export default Logger