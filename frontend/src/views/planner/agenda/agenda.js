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
  // pagamentos virao com data

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
      } else if (evento.data) {
        const data = moment(evento.data);

        const eventoFormatado = {
          title: `Pagamento ${evento.aluno.nome}`,
          start: data.toDate(),
          end: data.toDate(),
          allDay: true,
          color: 'green'
        };

        eventosFormatados.push(eventoFormatado);
      }
      console.log("EVENTS => ", eventosFormatados);
      setEvents(eventosFormatados);
    });
  }, [eventos]);

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
