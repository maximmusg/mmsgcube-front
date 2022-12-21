import React from 'react'
import Layout from '../components/Layout'
import Cubo from '../components/cubo'
import styles from '../styles/grid.module.css'


export default function Tienda({cubos}) {

  console.log(cubos)

  return (
    <div>
      <Layout
        title={'Tienda'}
      >
        <main  className='contenedor'>
          <h1 className="heading">Nuestra colección</h1>
          
          <div className={styles.grid} >
            {
              cubos?.map(cubo => (
                <Cubo
                  key={cubo.id}
                  cubo={cubo.attributes}
                />
              ))
           }
          </div>

        </main>
      </Layout>
    </div>
  )
}


// export async function getStaticProps(){
//   const respuesta = await fetch(` ${process.env.API_URL}/cubos?populate=imagen`)
//   const {data: cubos} = await respuesta.json()


//   return {
//     props: {
//       cubos
//     }
//   }
// }

export async function getServerSideProps(){
  const respuesta = await fetch(` ${process.env.API_URL}/cubos?populate=imagen`)
  const {data: cubos} = await respuesta.json()

  return {
    props: {
      cubos 
    }
  }
}



