import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import traducao from "./traducao";
import "moment/locale/pt-br";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./agenda.css";

const Agenda = ({ eventos }) => {
  const [events, setEvents] = useState();
  const localizer = momentLocalizer(moment);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: event.color,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return {
      style
    };
  };
  // os eventos podem ser turmas (aulas) ou pagamentos

  // turmas virao com horario_inicial, horario_final, dia_semana
  // pagamentos virao com data_pagamento

  useEffect(() => {
    const eventosFormatados = [];
    if(!eventos) return;
    eventos.forEach((evento) => {
      if (evento.horario_inicial) {
        // o horario_inicial e horario_final sao strings no formato hh:mm
        const horarioInicial = moment(evento.horario_inicial, "HH:mm");
        const horarioFinal = moment(evento.horario_final, "HH:mm");

        // o dia_semana é um numero de 1 a 7, onde 1 é segunda e 7 é domingo
        const diaSemana = evento.dia_semana;

        const eventoFormatado = {
          title: `${evento.disciplina}`,
          start: horarioInicial
            .day(diaSemana)
            .toDate(),
          end: horarioFinal
            .day(diaSemana)
            .toDate(),
          allDay: false,
          color: 'blue'
        };

        // loop para adicionar aulas recorrentes
        let initialDate = moment(eventoFormatado.start);
        let finalDate = moment(eventoFormatado.start).add(1, "month");
        while (finalDate.isAfter(initialDate)) {
          const novoEvento = {
            ...eventoFormatado,
            start: initialDate.toDate(),
            end: initialDate.hour(horarioFinal.hour()).minute(horarioFinal.minute()).toDate(),
          };
          eventosFormatados.push(novoEvento);
          initialDate = initialDate.add(1, "week");
        }

        // aqui também vamos inserir o vencimento de pagamento da turma
        // nós temos apenas o dia do vencimento, então vamos adicionar só no mês atual
        const dataVencimento = moment().date(evento.vencimento);
        const eventoVencimento = {
          title: `${evento.disciplina} - Vencimento`,
          start: dataVencimento.toDate(),
          end: dataVencimento.toDate(),
          allDay: true,
          color: 'red'
        };

        eventosFormatados.push(eventoVencimento);

      } else if (evento.data_pagamento) {
        const data = moment(evento.data_pagamento, "YYYY-MM-DD");

        const eventoFormatado = {
          title: `${alunoTurmaPagamento(evento.aluno_id)} (${turmaPagamento(evento.aluno_id)})`,
          start: data.toDate(),
          end: data.toDate(),
          allDay: true,
          color: 'green'
        };

        eventosFormatados.push(eventoFormatado);
      }
      setEvents(eventosFormatados);
    });
  }, [eventos]);

  const alunoTurmaPagamento = (aluno_id) => {
    const turma = eventos.find((t) => t.alunos && t.alunos.find((a) => a.id === aluno_id));
    const aluno = turma.alunos.find((a) => a.id === aluno_id);
    return aluno.nome.split(" ")[0];
  }

  const turmaPagamento = (aluno_id) => {
    const turma = eventos.find((t) => t.alunos && t.alunos.find((a) => a.id === aluno_id));
    return turma.disciplina;
  }

  return (
    <div className="agenda">
      <Calendar
        messages={traducao}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["day", "week", "month"]}
        selectable={false}
        eventPropGetter={eventStyleGetter}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Agenda;
