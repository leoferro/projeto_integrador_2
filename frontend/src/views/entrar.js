import React, { useState, useEffect } from 'react'
import { Link,  useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import './entrar.css'
import { cacheLogIn, checkLoggedIn } from '../utils/login'

const Entrar = (props) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const history = useHistory()

  useEffect(() => {
    if(checkLoggedIn()){
      history.push("/planners")
    }
  }, [])


  const handleCadastro =  async e => {
    e.preventDefault();

    const body = {
      email: email,
      senha: senha
    }

    axios.post('http://localhost:8000/professor/auth', body, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      cacheLogIn(response.data)
      history.push("/planners")
    }).catch(error => {
      alert("Failed to Login: Incorrect Email or Password")
      console.log(error)
    })

    setEmail('')
    setSenha('')

  }

  return (
    <div className="entrar-container">
      <Helmet>
        <title>Entrar - Classtool</title>
        <meta property="og:title" content="Entrar - Classtool" />
      </Helmet>
      <section className="entrar-hero">
        <header data-thq="thq-navbar" className="entrar-navbar">
          <div className="entrar-left">
            <Link to='/'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="entrar-logo"
              />
            </Link>
            <nav className="entrar-links">
              <a href="/#planner" className="entrar-link">
                Sobre
              </a>
              <a href="/#Finance" className="entrar-link1"> 
              Ferramentas
              </a>
              <a href="/#faq" className="entrar-link2">FAQ</a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="entrar-right"></div>
          <div className="entrar-container1"></div>
          <div data-thq="thq-burger-menu" className="entrar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="entrar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="entrar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="entrar-nav"
            >
              <div className="entrar-container2">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="entrar-image"
                />
                <div data-thq="thq-close-menu" className="entrar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="entrar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="entrar-nav1"
              >
                <span className="entrar-text">Features</span>
                <span className="entrar-text1">How it works</span>
                <span className="entrar-text2">Prices</span>
                <span className="entrar-text3">Contact</span>
                <button className="entrar-book button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="entrar-image1"
                  />
                  <span className="entrar-text4">Book an appointment</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
        <div className="entrar-main">
          <div className="entrar-content">
            <div className="entrar-heading">
              <h1 className="entrar-header">
                A ferramenta de organização que todo professor precisa.
              </h1>
            </div>
          </div>
          <div className="entrar-container3">
            <form className="entrar-form" onSubmit={handleCadastro}>
              <div className="entrar-container4"></div>
              <div className="entrar-container5">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={e => {setEmail(e.target.value)}}
                  placeholder="Email"
                  autoComplete="email"
                  className="entrar-textinput enter-text input"
                />
              </div>
              <div className="entrar-container6">
                <input
                  type="password"
                  required
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  placeholder="Senha"
                  className="entrar-textinput1 input"
                />
              </div>
              <button name="signup" type="submit" className="button">
                <span className="entrar-text5 button button-main">
                  <span>Entrar</span>
                  <br></br>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="entrar-features">
          <div className="entrar-content1"></div>
        </div>
        <div className="entrar-background"></div>
      </section>
      <div className="entrar-footer">
        <div className="entrar-left1">
          <div className="entrar-brand">
            <Link to='/'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="entrar-image2"
              />
            </Link>
          </div>
          <div className="entrar-legal"></div>
        </div>
        <p className="entrar-text8">
          Aplicação desenvolvida pelos alunos do eixo computação da Universidade
          Virtual de São Paulo.
        </p>
        <div className="entrar-legal1">
          <div className="entrar-row">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="entrar-copyright2">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Entrar
