import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import './entrar.css'
import { cacheLogIn, checkLoggedIn } from '../../utils/login'
import { URL_API } from '../../config/app-config'

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

    axios.post(`${URL_API}/professor/auth`, body, {
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
        <div className="entrar-background"></div>
      </section>
    </div>
  )
}

export default Entrar
