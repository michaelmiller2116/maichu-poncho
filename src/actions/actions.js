const brandURL = "http://localhost:5000/brands"
const ponchoURL = "http://localhost:5000/ponchos"


exports.getPonchos = () => {
  return fetch(ponchoURL)
    .then(res => res.json())
    .catch(err => console.log(err))
}

exports.deletePoncho = (id) => {
  return fetch(`${ponchoURL}/${id}`, {
    method: "delete"
  }).then(data => data.text())
}



exports.addPoncho = (formData) => {
  return fetch(ponchoURL, {
    method: "post",
    body: formData,
    headers: ({'content-type': 'application/json'})
  }).catch(err => console.log(err))
}


