import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Pagina404() {
  return (
    <Layout
        title='Pagina No encontrada'
    >
        <p className='error' >Pagina No encontrada</p>
        <Link href='/' className='error-enlace'>
           Ir a Inicio
        </Link>
    </Layout>
  )
}
