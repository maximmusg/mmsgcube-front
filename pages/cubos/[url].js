import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/cubos.module.css'
import Layout from "../../components/Layout"


export default function Producto({cubo, agregarCarrito}) {

    const [cantidad, setCantidad] = useState(0)
    const {nombre, descripcion, imagen, precio} = cubo[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
            alert('Cantidad no valida')
            return
        }

        //construir objeto
        const cuboSeleccionado = {
            id: cubo[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        //pasando la informacion
        agregarCarrito(cuboSeleccionado)
    }

  return (
    <Layout
        title={`${nombre}`}
    >
        <div className={styles.cubos} >
        <Image src={imagen.data.attributes.url} width={200} height={200} alt='hola' />

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <form 
                onSubmit={handleSubmit}
                className={styles.formulario}
            >
                <label htmlFor="cantidad">Cantidad</label>
                <select 
                    onChange={ e => setCantidad(+e.target.value) } 
                    id="cantidad"
                >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                </select>
                <input type="submit" value="Agregar al carrito" />
            </form>
        </div>
        </div>
    </Layout>
    
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/cubos`)
    const { data } = await respuesta.json()

    const paths = data.map(cubo => ({
        params : {
            url: cubo.attributes.url
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    console.log(url)

    const respuesta = await fetch(`${process.env.API_URL}/cubos?filters[url]=${url}&populate=imagen`)
    const { data: cubo } = await respuesta.json()

    // console.log(data)

    return{
        props: {
            cubo
        }
    }
}

// export async function getServerSideProps({query: {url}}) {

//     console.log(url)

//     const respuesta = await fetch(`${process.env.API_URL}/cubos?filters[url]=${url}&populate=imagen`)
//     const { data: cubo } = await respuesta.json()

//     // console.log(data)

//     return{
//         props: {
//             cubo
//         }
//     }
// }