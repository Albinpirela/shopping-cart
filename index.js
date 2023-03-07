const productos = [
  {
    nombre: 'Producto 1',
    precio: 99.99
  },
  {
    nombre: 'Producto 2',
    precio: 149.99
  },
  {
    nombre: 'Producto 3',
    precio: 199.99
  }
  {
    nombre: 'Producto 4',
    precio: 199.99
  }
  {
    nombre: 'Producto 5',
    precio: 199.99
  }
  {
    nombre: 'Producto 6',
    precio: 199.99
  }
];

const carrito = [];

function agregarProducto(index) {
  carrito.push(productos[index]);
  actualizarCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoEl = document.querySelector('.carrito ul');
  const totalEl = document.querySelector('.carrito p:last-child');
  let total = 0;
  carritoEl.innerHTML = '';
  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      eliminarProducto(index);
    });
    li.appendChild(botonEliminar);
    carritoEl.appendChild(li);
    total += producto.precio;
  });
  totalEl.textContent = `Total: $${total}`;
}
