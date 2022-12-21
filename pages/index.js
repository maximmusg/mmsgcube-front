import Layout from '../components/Layout'
import Cubo from '../components/cubo'
import Post from '../components/post'
import Curso from '../components/curso'
import styles from '../styles/grid.module.css'

export default function Home({cubos, posts, curso}) {


  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Tienda, Blogs de cubos y mas'}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Coleccion</h1>
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

        {/* <Curso
          curso={curso}
        /> */}

        <section className='contenedor'>
           <h2 className='heading'>Blog</h2>
           <div className={styles.grid} >
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
      
    )
}


export async function getStaticProps() {
  const urlCubos = `${process.env.API_URL}/cubos?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [ resCubos, resPost, resCurso ] = await Promise.all([
    fetch(urlCubos),
    fetch(urlPost),
    fetch(urlCurso)
  ])

  const [ {data: cubos}, {data:posts}, {data:curso} ] = await Promise.all([
    resCubos.json(),
    resPost.json(),
    resCurso.json()
  ])

  return {
    props: {
      cubos,
      posts,
      curso
    }
  }
}