import * as React from "react"

import error404 from '../assets/images/404.svg';
import Layout from '../components/Layout'

// markup
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Layout>

        <section id="content" className="text-center bg-black">
          <h1 className="pt-4 mb-0 ff-poppins text-white">Upps!!! no se encontró nada!!</h1>
          <img className="w-img h-auto position-relative" style={{ top: "-65px" }} src={error404} alt="Página-no-encontrada"></img>
        </section>

      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage
