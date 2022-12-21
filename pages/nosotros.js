import React from 'react'
import Layout from '../components/Layout'
// import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export default function nosotros() {
  return (

    <Layout 
      title={'Nosotros'}
      description="Sobre nosotros, MMSGcube"
    >
    <main className='contenedor'>
      <h1 className='heading'> Nosotros </h1>
      <div className={styles.contenido}>
        <Image layout='responsive' width={1000} height={800} src="/img/header.jpg" alt='Imagen sobre nosotros'/>
        <div>
          <p> - MMSGcube - surge de la idea que cada persona pudiera resolver un cubo, sin importar el método o el tiempo que se haga, surge de que sean aprovechados sus beneficios y difundida la cultura rubik. Nace de la idea de que obtener un cubo de cualquier tipo y armarlo debería de ser tan accesible como sea posible.</p>
          <p> MMSGcube Es tu tienda especializada en la venta de Cubos Magicos Online, encontrarás gran variedad de productos, todos ellos relacionados con el Mundo del Cubo Rubik y demas rompecabezas. <br/> Podrás utilizar las categorías o el buscador para encontrar tus cubos de una manera sencilla</p>
        </div>
      </div>
    </main>
</Layout>

   
  )
}