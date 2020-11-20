export function newsAction(item) {
  return {
    type: 'NEWS',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      item
    }
  }
}


