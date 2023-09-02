import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Classtool</title>
        <meta property="og:title" content="Classtool" />
      </Helmet>
      <section className="home-intro">
        <div className="home-container01">
          <header data-thq="thq-navbar" className="home-navbar">
            <div className="home-left">
              <Link to='/'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="home-logo"
              />
              </Link>
              
              <nav className="home-links">
                <a href="#planner" className="home-link">
                  Sobre
                </a>
                <a href="#Finance" className="home-link1">
                  Ferramentas
                </a>
                <a href="#faq" className="home-link2">
                  Perguntas frequentes
                </a>
              </nav>
            </div>
          </header>
          <div className="home-main">
            <div className="home-content">
              <div className="home-heading">
                <h1 className="home-header">
                  A ferramenta de organização que todo professor precisa.
                </h1>
                <p className="home-caption">
                  Com essa aplicação você pode organizar suas tarefas diárias,
                  semanais e mensais em um formato planner para tornar seu
                  trabalho ainda melhor.
                </p>
              </div>
              <Link to='/cadastro'>
                <button className="home-book button button-main">
                  <span>Cadastrar agora</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="home-container02">
            <div className="home-container03">
              <Link to='/entrar'>
                <button className="home-button button button-main">
                  Já tenho cadastro
                </button>
              </Link>
            </div>
            <div className="home-image">
              <img
                alt="image"
                src="/professorpi-500h.png"
                loading="eager"
                className="home-image1"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="home-features">
        <div className="home-content1"></div>
      </div>
      <section id="planner" className="home-planner">
        <div className="home-heading1">
          <h2 className="home-text01">Seu planner semanal</h2>
          <p className="home-text02">
            Aqui você consegue cadastrar suas aulas semanais e visualizar em um
            formato de planner semanal ou mensal.
          </p>
        </div>
        <img
          alt="image"
          src="/Icons/plannersemanal-1000w.png"
          className="home-image2"
        />
      </section>
      <section id="Finance" className="home-finance">
        <div className="home-heading2">
          <h2 className="home-text03">Controle seus pagamentos</h2>
          <p className="home-text04">
            Por aqui você consegue registrar de um jeito fácil seus recebimentos
            e consultar status de pagamento.
          </p>
        </div>
        <div className="home-list">
          <div className="home-item">
            <div className="home-content2">
              <div className="home-details">
                <p className="home-quick-description">
                  Já pensou em como visualizar de uma maneira intuitiva o seu
                  fluxo de caixa?
                </p>
              </div>
              <img
                alt="image"
                src="/controles-financeiros-400h.jpg"
                className="home-image3"
              />
            </div>
          </div>
          <div className="home-item1">
            <div className="home-image4">
              <img
                alt="image"
                src="/pagamento-1500w.jpg"
                className="home-image5"
              />
            </div>
            <div className="home-content3">
              <p className="home-quick-description1">
                Ter seus pagamentos sempre em dia é importante para você e o
                ClassTool te ajuda com isso.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-divisor">
        <div className="home-content4"></div>
      </div>
      <section id="faq" className="home-faq">
        <div className="home-container04">
          <div className="home-container05">
            <h2 className="home-text05">
              <span>Perguntas-frequentes</span>
              <br></br>
            </h2>
          </div>
          <div className="home-container06">
            <div className="perguntaeresposta">
              <div className="pergunta">
                <h1>O que é a ClassTool?</h1>
              </div>
              <div className="home-container09">
                <span className="home-text09">
                  <span>
                    A ClassTool é uma website desenvolvido para atuar como uma
                    ferramenta gratuita organizacional na área educacional.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container10 perguntaeresposta">
              <div className="home-container11 pergunta">
                <h1>Qual é o público alvo da ClassTool? </h1>
              </div>
              <div className="home-container12">
                <span className="home-text14">
                  <span>
                    Professores autônomos que desejam gerenciar suas aulas,
                    controlar os pagamentos dos seus alunos, bem como outras
                    tarefas do seu cotidiano.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container13 perguntaeresposta">
              <div className="home-container14">
                <h1>Como a ClassTool pode te ajudar?</h1>
              </div>
              <div className="home-container15">
                <span className="home-text19">
                  <span>
                    A ClassTool permite você visualizar a sua agenda em um
                    formato de planner diário, semanal ou mensal, monitorar os
                    pagamentos dos seus alunos e também consultar informações
                    das suas turmas de maneira fácil e intuitiva.
                  </span>
                  <br className="home-text21"></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container16 perguntaeresposta">
              <div className="home-container17">
                <h1>
                  <span>Como eu acesso as funcionalidades da ClassTool?</span>
                  <br></br>
                  <br></br>
                </h1>
              </div>
              <div className="home-container18">
                <span className="home-text28">
                  <span>
                    Para acessar os conteúdos da ClassTool você precisa ter uma
                    conta ativa na nossa plataforma. Para criar uma conta basta
                    clicar em &quot;cadastrar agora&quot; e preencher seus
                    dados.
                  </span>
                  <br className="home-text30"></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container19 perguntaeresposta">
              <div className="home-container20">
                <h1>
                  <span>Tenho uma sugestão, onde devo enviá-las?</span>
                  <br></br>
                  <br></br>
                </h1>
              </div>
              <div className="home-container21">
                <span className="home-text37">
                  <span>
                    Você pode enviar para o nosso email
                    contato@classtool.com.br.
                  </span>
                  <br className="home-text39"></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <Link to='/cadastro'>
              <img
                alt="image"
                src="/Icons/logo_transparent-300h.png"
                className="home-image6"
              />
            </Link>
          </div>
        </div>
        <p className="home-text41">
          Aplicação desenvolvida pelos alunos do eixo computação da Universidade
          Virtual de São Paulo.
        </p>
      </div>
    </div>
  )
}

export default Home
