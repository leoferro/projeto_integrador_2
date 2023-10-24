import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/perfil"className="navigation-links-text">{props.text}</Link>
      <Link to="/planners" className="navigation-links-text">{props.text1}</Link>
      <Link to="/pagamentos" className="navigation-links-text">{props.text2}</Link>
      <Link to="/turmas" className="navigation-links-text">{props.text3}</Link>
      <Link to="/alunos" className="navigation-links-text">{props.text4}</Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'About',
  text1: 'Features',
  text2: 'Pricing',
  text3: 'Team',
  text4: 'Blog',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
