import React from 'react'

import PropTypes from 'prop-types'

import Cadastro02 from './cadastro02'
import './cadastro1.css'

const Cadastro1 = (props) => {
  return (
    <div
      data-modal="practices"
      className={`cadastro1-cadastro ${props.rootClassName} `}
    >
      <div className="cadastro1-nova-turma">
        <div className="cadastro1-container">
          <Cadastro02></Cadastro02>
        </div>
      </div>
    </div>
  )
}

Cadastro1.defaultProps = {
  rootClassName: '',
}

Cadastro1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Cadastro1
