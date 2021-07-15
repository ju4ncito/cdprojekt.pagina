function carrito_add (pid) {
  fetch('/cart/add', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({ pid, cant: 1 }), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      if (response.msg === 'OK') {
        alert('Agregamos el producto')
        const cant = parseInt(document.getElementById('carrito_cant').innerHTML)
        document.getElementById('carrito_cant').innerHTML = cant + 1
      } else {
        alert('No se pudo agregar el producto')
      }
    })

}
