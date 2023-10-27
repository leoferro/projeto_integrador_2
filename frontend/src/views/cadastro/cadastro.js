import React from 'react'
import { Helmet } from 'react-helmet'

import './cadastro.css'
import CadastroForm from '../../components/auth/cadastro-form'

const Cadastro = (props) => {
  return (
    <div className="cadastro-container">
      <Helmet>
        <title>Cadastro - Classtool</title>
        <meta property="og:title" content="Cadastro - Classtool" />
      </Helmet>
      <section className="cadastro-hero">
        <div className="cadastro-main">
          <div className="cadastro-content">
            <div className="cadastro-heading">
              <h1 className="cadastro-header">
                A ferramenta de organização que todo professor precisa.
              </h1>
            </div>
          </div>
          <div className="cadastro-container3">
            <CadastroForm />
          </div>
        </div>
        <div className="cadastro-features">
          <div className="cadastro-content1"></div>
        </div>
        <div className="cadastro-background"></div>
      </section>
    </div>
  )
}

export default Cadastro
