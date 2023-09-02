import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Cadastro01 from '../components/cadastro01'
import './cadastro.css'

const Cadastro = (props) => {
  return (
    <div className="cadastro-container">
      <Helmet>
        <title>Cadastro - Classtool</title>
        <meta property="og:title" content="Cadastro - Classtool" />
      </Helmet>
      <section className="cadastro-hero">
        <header data-thq="thq-navbar" className="cadastro-navbar">
          <div className="cadastro-left">
            <Link to='/'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="cadastro-logo"
              />
            </Link>
            <nav className="cadastro-links">
              <a href="/#planner" className="cadastro-link">
                Sobre
              </a>
              <a href="/#Finance" className="cadastro-link1">Ferramentas</a>
              <a href="/#faq" className="cadastro-link2">FAQ</a>
            </nav>
          </div>
        </header>
        <div className="cadastro-main">
          <div className="cadastro-content">
            <div className="cadastro-heading">
              <h1 className="cadastro-header">
                A ferramenta de organização que todo professor precisa.
              </h1>
            </div>
          </div>
          <div className="cadastro-container3">
            <Cadastro01></Cadastro01>
          </div>
        </div>
        <div className="cadastro-features">
          <div className="cadastro-content1"></div>
        </div>
        <div className="cadastro-background"></div>
        <div className="cadastro-footer">
          <div className="cadastro-left1">
            <div className="cadastro-brand">
              <Link to='/'>
                <img
                  alt="image"
                  src="/Icons/logo_transparent-300h.png"
                  className="cadastro-image2"
                />
              </Link>
            </div>
          </div>
          <p className="cadastro-text5">
            Aplicação desenvolvida pelos alunos do eixo computação da Universidade
            Virtual de São Paulo.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Cadastro
