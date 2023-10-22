export const exibePeriodoData = (dataInicial, dataFinal) => {
    if (dataInicial && dataFinal) {
        const dataInicialFormatada = dataInicial.split("-").reverse().join("/");
        const dataFinalFormatada = dataFinal.split("-").reverse().join("/");
        return `${dataInicialFormatada} - ${dataFinalFormatada}`;
    }
}

export const exibePeriodoHora = (horaInicial, horaFinal) => {
    // vem no formato 00:00:00 e retorna 00:00 - 00:00
    if (horaInicial && horaFinal) {
        const horaInicialFormatada = horaInicial.split(":").slice(0, 2).join(":");
        const horaFinalFormatada = horaFinal.split(":").slice(0, 2).join(":");
        return `${horaInicialFormatada} - ${horaFinalFormatada}`;
    }
}

export const exibeDiaSemana = (diaSemana) => {
    const dias = {
        1: "Segunda",
        2: "Terça",
        3: "Quarta",
        4: "Quinta",
        5: "Sexta",
        6: "Sábado",
        7: "Domingo",
    }

    return dias[diaSemana];
}