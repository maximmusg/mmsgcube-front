import Image from "next/image"
import Link from "next/link"
import styles from '../styles/cubos.module.css'

export default function ListadoCubos({cubo}) {
 
  const { descripcion, imagen, nombre, precio, url} = cubo

  return (
    // <div>{nombre}</div>
    <div className={styles.cubos} >
      <Image src={imagen.data.attributes.url} width={200} height={200}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/cubos/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}
