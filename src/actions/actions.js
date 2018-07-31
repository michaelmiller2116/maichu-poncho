const cartURL = 'https://maichu-server.herokuapp.com/cart'
const ponchoURL = 'https://maichu-server.herokuapp.com/ponchos'

exports.getPonchos = () => {
  return fetch(ponchoURL)
    .then(res => res.json())
    .catch(err => console.log(err))
}

exports.getCart = () => {
  return fetch(cartURL)
    .then(res => res.json())
    .catch(err => console.log(err))
}

exports.deletePoncho = (id) => {
  return fetch(`${ponchoURL}/${id}`, {
    method: 'delete'
  }).then(data => data.text())
}

exports.deleteItem = id => {
  return fetch(`${cartURL}/${id}`, {
    method: 'delete'
  }).then(data => data.text())
}

exports.addCartItem = (formData) => {
  return fetch(cartURL, {
    method: 'post',
    body: formData,
    headers: ({'content-type': 'application/json'})
  }).catch(err => console.log(err))
}




