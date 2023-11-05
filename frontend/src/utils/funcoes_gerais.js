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
        1: "Segunda-feira",
        2: "Terça-feira",
        3: "Quarta-feira",
        4: "Quinta-feira",
        5: "Sexta-feira",
        6: "Sábado",
        7: "Domingo",
    }

    return dias[diaSemana];
}

export const exibeDataInternacional = (data) => {
    // retorna 2023-10-30
    if (data) {
        // data vem em formato Date
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = (data.getMonth() + 1).toString().padStart(2, "0");
        const ano = data.getFullYear();
        return `${ano}-${mes}-${dia}`;
    }
}

export const exibeDataNacional = (data) => {
    // retorna 30/10/2023
    if (data) {
        // adiciona 3 horas
        data.setHours(data.getHours() + 3);
        // data vem em formato Date
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = (data.getMonth() + 1).toString().padStart(2, "0");
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}