import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../../components/navigation/navigation-links'
import './perfil.css'

import { cacheLogOut, checkLoggedIn } from '../../utils/login'
import Header from '../../components/header/header'

const Perfil = (props) => {

  const history = useHistory()
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(checkLoggedIn())

    if(checkLoggedIn() == undefined){
      history.push("/")
    }

  }, [])

  return (
    <div className="perfil-container">
      <Helmet>
        <title>Perfil - Classtool</title>
        <meta property="og:title" content="Perfil - Classtool" />
      </Helmet>
      <section className="perfil-hero">
        <div className="perfil-container01">
          <div className="perfil-container02">
            <div className="perfil-container03">
              <div className="perfil-container04">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="perfil-image"
                />
                <div className="perfil-container05">
                  <h1>Meu perfil</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="perfil-container06">
            <div className="perfil-container07">
              <form className="perfil-form">
                <div className="perfil-container08">
                  <div className="perfil-container09">
                    <input
                      type="text"
                      disabled
                      placeholder="Nome"
                      className="perfil-textinput enter-text input"
                    />
                  </div>
                  <div className="perfil-container10">
                    <input
                      type="text"
                      disabled
                      placeholder="Email"
                      className="perfil-textinput1 enter-text input"
                    />
                  </div>
                  <div className="perfil-container11">
                    <input
                      type="text"
                      disabled
                      placeholder="Senha"
                      className="perfil-textinput2 enter-text input"
                    />
                  </div>
                  <div className="perfil-container12">
                    <button type="button" className="button button-main">
                      Editar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Perfil
