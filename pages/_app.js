import { useState, useEffect, use } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito,setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])


  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = cubo => {
    //comprobar si el cubo ya esta en el carrito
    if(carrito.some( cuboState => cuboState.id === cubo.id)) {
      //Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map( cuboState => {
        if( cuboState.id === cubo.id ) {
          cuboState.cantidad = cubo.cantidad
        }
        return cuboState;
      });
      //Se asigna el array
      setCarrito([...carritoActualizado])
      localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
      //En caso del que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, cubo])
      localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id )
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  const actualizarCantidad = cubo => {
    const carritoActualizado = carrito.map( cuboState => {
      if( cuboState.id === cubo.id ){
        cuboState.cantidad = parseInt(cubo.cantidad)
      }
      return cuboState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  return paginaLista ? <Component {...pageProps} 
    // auth={true}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  /> : null
}

export default MyApp
