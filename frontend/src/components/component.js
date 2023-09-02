import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container01">
        <form className="component-form">
          <div className="component-container02">
            <h1>{props.heading}</h1>
          </div>
          <div className="component-container03">
            <input
              type="text"
              required
              autoFocus
              placeholder={props.textinput_placeholder}
              className="enter-text input"
            />
          </div>
          <div className="component-container04">
            <label htmlFor="data_nasc" className="component-text1">
              {props.text}
            </label>
            <input
              type="date"
              id="data_nasc"
              required
              autoFocus
              className="enter-text input"
            />
          </div>
          <div className="component-container05">
            <input
              type="email"
              required
              autoFocus
              placeholder={props.textinput_placeholder1}
              className="enter-text input"
            />
          </div>
          <div className="component-container06">
            <input
              type="tel"
              required
              autoFocus
              placeholder={props.textinput_placeholder2}
              className="enter-text input"
            />
          </div>
          <div className="component-container07">
            <div className="component-container08">
              <input type="radio" id="ativo" name="radio" />
              <label htmlFor="ativo" className="component-text2">
                {props.text1}
              </label>
            </div>
            <div className="component-container09">
              <input type="radio" id="ativo" name="radio" />
              <label htmlFor="ativo" className="component-text3">
                {props.text2}
              </label>
            </div>
          </div>
          <button name="signup" type="submit" className="button">
            <span className="button button-main">
              <span>Cadastrar</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Data de Nascimento',
  textinput_placeholder: 'Nome Completo',
  rootClassName: '',
  heading: 'Cadastro Novo Aluno',
  text1: 'Ativo',
  textinput_placeholder2: 'Telefone',
  text2: 'Inativo',
  textinput_placeholder1: 'Email',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
}

export default AppComponent
