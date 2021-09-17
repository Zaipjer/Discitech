import React from 'react'

// Components
import Layout from '../components/Layout'
import Header from '../components/Header';
import Nosotros from '../components/Nosotros';
import Servicios from '../components/Servicios';
import Contact from '../components/Contact';

// markup
const IndexPage = () => {

  return (
    <React.Fragment>
      <Layout>

        <Header />
        <Nosotros />
        <Servicios />
        <Contact />

      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
