import React from 'react'

import PropTypes from 'prop-types'

import './cadastro2.css'

const Cadastro2 = (props) => {
  return (
    <div
      data-modal="practices"
      className={`cadastro2-cadastro ${props.rootClassName} `}
    >
      <div className="cadastro2-nova-turma">
        <div className="cadastro2-container">
          <div className="cadastro2-container01">
            <form className="cadastro2-form">
              <div className="cadastro2-container02">
                <h1>{props.heading}</h1>
              </div>
              <div className="cadastro2-container03">
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder={props.textinput_placeholder}
                  className="enter-text input"
                />
              </div>
              <div className="cadastro2-container04">
                <label htmlFor="data_nasc" className="cadastro2-text1">
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
              <div className="cadastro2-container05">
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder={props.textinput_placeholder1}
                  className="enter-text input"
                />
              </div>
              <div className="cadastro2-container06">
                <input
                  type="tel"
                  required
                  autoFocus
                  placeholder={props.textinput_placeholder2}
                  className="enter-text input"
                />
              </div>
              <div className="cadastro2-container07">
                <div className="cadastro2-container08">
                  <input type="radio" id="ativo" name="radio" />
                  <label htmlFor="ativo" className="cadastro2-text2">
                    {props.text1}
                  </label>
                </div>
                <div className="cadastro2-container09">
                  <input type="radio" id="ativo" name="radio" />
                  <label htmlFor="ativo" className="cadastro2-text3">
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
      </div>
    </div>
  )
}

Cadastro2.defaultProps = {
  text2: 'Inativo',
  textinput_placeholder2: 'Telefone',
  text1: 'Ativo',
  heading: 'Cadastro Novo Aluno',
  textinput_placeholder: 'Nome Completo',
  text: 'Data de Nascimento',
  textinput_placeholder1: 'Email',
  rootClassName: '',
}

Cadastro2.propTypes = {
  text2: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Cadastro2
