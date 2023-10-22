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

  const eventss = [
    {
      title: "Recurring Event",
      start: moment().startOf("day").add(2, "hours").toDate(),
      end: moment().startOf("day").add(4, "hours").toDate(),
      allDay: false,
      rrule: {
        freq: "weekly",
        interval: 1,
        byweekday: [moment().day("Monday").weekday()],
      },
    },
  ];

  console.log("RECEBI EVENTOS", eventos)

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
        };

        eventosFormatados.push(eventoFormatado);
      } else if (evento.data) {
        const data = moment(evento.data);

        const eventoFormatado = {
          title: `Pagamento ${evento.aluno.nome}`,
          start: data.toDate(),
          end: data.toDate(),
          allDay: true,
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
        eventPropGetter={() => ({ className: "read-only-event" })}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Agenda;
