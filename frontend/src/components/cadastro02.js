import React, { useState } from 'react'

import axios from 'axios'
import PropTypes, { number, string } from 'prop-types'

import './cadastro02.css'
import { checkLoggedIn } from '../utils/login'


const Cadastro02 = (props) => {

  const [disciplina, setDisciplina] = useState('')
  const [horaInicioAula, setHoraInicioAula] = useState('00')
  const [horaFimAula, setHoraFimAula] = useState('00')
  const [minutoInicioAula, setMinutoInicioAula] = useState('00')
  const [minutoFimAula, setMinutoFimAula] = useState('00')
  const [valorHoraAula, setValorHoraAula] = useState()
  const [diaVencimento, setDiaVencimento] = useState(1)
  const [diaDaSemana, setDiaDaSemana] = useState(1)

  const user = checkLoggedIn()

  const updateMinuto = (event, setFunc) => {

    const regex = /^[0-5][0-9]$/;
    if (regex.test(event.target.value.slice(0,2).padStart(2, '0')))
        setFunc(event.target.value.slice(0,2).padStart(2, 0))

  }

  const updateHora = (event, setFunc) => {

    const regex = /^(2[0-3]|[01]?[0-9])$/;
    if (regex.test(event.target.value.slice(0,2).padStart(2, '0')))
      setFunc(event.target.value.slice(0,2).padStart(2, '0'))
  }

  const intLeadingZero = (value) => {
    if (value){
      return String(value).padStart(2, '0')
    }
  }

  const diasOptions = () => {
    let items = []
    for(let i = 1; i < 31; i++)
      items.push(<option key={i} value={i}>{i}</option>)

    return items
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform form validation if needed
    const disciplinaRequest = await axios.post(
      "http://localhost:8000/disciplina_search",
      {nome: disciplina},
      {headers: {'Content-Type': "application/json"}}
    ).then(response => {
      // Create Professor Disciplina Relationship
      const create_pdl = axios.post(
        "http://localhost:8000/pdl",
        {professor_id: user.id, disciplina_id: response.data.id},
        {headers:{'Content-Type': 'application/json'}}
      ).catch(error => {})

      return response.data
    }).catch( error => {
      // console.log("Create Disciplina", error)
      const response = axios.post(
        "http://localhost:8000/disciplina",
        {nome: disciplina, professor_id: user.id},
        {headers: {"Content-Type": "application/json"}}
      ).then(response => {
        return response.data
      }).catch( error => {
        alert("Failed to Create Disciplina")
        return error
      })

      return response
    })
  
    if (disciplinaRequest.response)
      return

    
    // Prepare the data for the request
    const data = {
      vencimento: diaVencimento,
      link_aula: "http://meet.google.com",
      mensalidade: valorHoraAula,
      horario_inicial: `${horaInicioAula}:${minutoInicioAula}`,
      horario_final: `${horaFimAula}:${minutoFimAula}`,
      dia_semana: diaDaSemana,
      disciplina_id: disciplinaRequest.id,
      professor_id: user.id,
    }
  
    try {
      // Send the request to the backend using Axios
      // console.log(data)
      const response = await axios.post('http://localhost:8000/turma', data, {headers: {'Content-Type': "application/json"}});
  
      // Handle the response from the backend
      // console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  
    // Clear the input field
    setDisciplina('');
  }


  return (
    <div className={`cadastro02-container ${props.rootClassName}`}>
      <form className="cadastro02-form">
        <div className="cadastro02-container1">
          <h1>Cadastro Nova Turma</h1>
        </div>
        <div className="cadastro02-container2">
          <input
            type="text"
            required
            autoFocus
            value = {disciplina}
            onChange={(event) => setDisciplina(event.target.value)}
            placeholder="Disciplina"
            className="enter-text input"
          />
        </div>
        <div className="cadastro02-container3">
          <label htmlFor="time01" className="cadastro02-text1">
            Início aula
          </label>
          <div className="cadastro02-container4">
            <select
              id="time01"
              required
              className="cadastro02-select"
              value={diaDaSemana}
              onChange={(event) => setDiaDaSemana(event.target.value)}
            >
              <option value="1">Segunda</option>
              <option value="2">Terça</option>
              <option value="3">Quarta</option>
              <option value="4">Quinta</option>
              <option value="5">Sexta</option>
              <option value="6">Sábado</option>
              <option value="7">Domingo</option>
            </select>
            <div className="cadastro02-container5">
              <input
                type="number"
                max="23"
                min="00"
                step="1"
                value={intLeadingZero(horaInicioAula)}
                required
                autoFocus
                placeholder="00"
                className="cadastro02-textinput1 enter-text input"
                onChange={(event) => updateHora(event, setHoraInicioAula)}
              />
              <span>:</span>
              <input
                type="number"
                max="59"
                min="00"
                step="1"
                value={intLeadingZero(minutoInicioAula)}

                required
                autoFocus
                placeholder="00"
                className="cadastro02-textinput2 enter-text input"
                onChange={(event) => updateMinuto(event, setMinutoInicioAula)}
              />
            </div>
            <button
              type="button"
              className="cadastro02-button button button-main"
            >
              +
            </button>
          </div>
        </div>
        <div className="cadastro02-container8">
          <label htmlFor="time01" className="cadastro02-text3">
            Horário fim da aula
          </label>
          <div className="cadastro02-container9">
            <div className="cadastro02-container5">
              <input
                type="number"
                max="23"
                min="00"
                step="1"
                value={intLeadingZero(horaFimAula)}
                required
                autoFocus
                placeholder="00"
                className="cadastro02-textinput3 enter-text input"
                onChange={(event) => updateHora(event, setHoraFimAula)}
              />
              <span>:</span>
              <input
                type="number"
                max="59"
                min="00"
                step="1"
                value={intLeadingZero(minutoFimAula)}
                required
                autoFocus
                placeholder="00"
                className="cadastro02-textinput4 enter-text input"
                onChange={(event) => updateMinuto(event, setMinutoFimAula)}
              />
            </div>
            <button
              type="button"
              className="cadastro02-button button button-main"
            >
              +
            </button>
          </div>
        </div>
        <div className="cadastro02-container6">
          <input
            step="0.01"
            //value='0.00'
            max= "1000"
            type="number"
            min="0.0"
            placeholder="Valor Hora aula"
            //title='This should be a number of 2 decimal places'
            value={valorHoraAula}
            className="cadastro02-textinput5 input"
            onChange={e => setValorHoraAula(Number(e.target.value).toLocaleString(
              undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}
            ))}
          />
        </div>
        <div className="cadastro02-container12">
          <label htmlFor="time01" className="cadastro02-text5">
            Dia do vencimento 
          </label>
          <select 
            id="selectVencimento" 
            className="cadastro02-select1"
            value={diaVencimento}
            onChange={e => {setDiaVencimento(Number(e.target.value))}}
          >
            {diasOptions()}
          </select>
        </div>
        <button name="signup" type="submit" className="button">
          <span className="button button-main" onClick={handleSubmit}>
            <span>Cadastrar</span>
            <br></br>
          </span>
        </button>
      </form>
      </div>
  )
}

Cadastro02.defaultProps = {
  text: 'Horários de Aula',
  textinput_placeholder4: '00',
  heading: 'Cadastro Nova Turma',
  textinput_placeholder: 'Disciplina',
  textinput_placeholder2: 'Dia de Vencimento',
  rootClassName: '',
  button: '+',
  textinput_placeholder3: '00',
  textinput_placeholder1: 'Valor por aula',
  text1: ':',
}

Cadastro02.propTypes = {
  text: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text1: PropTypes.string,
}

export default Cadastro02
