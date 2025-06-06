const dataInicioNamoro = new Date(2023, 3, 7, 0o0, 0o7, 0);

const anosSpan = document.getElementById('anos');
const mesesSpan = document.getElementById('meses');
const diasSpan = document.getElementById('dias');
const horasSpan = document.getElementById('horas');
const minutosSpan = document.getElementById('minutos');
const segundosSpan = document.getElementById('segundos');
const dataInicioTextoSpan = document.getElementById('dataInicioTexto');

function formatarDoisDigitos(numero) {
    return numero < 10 ? '0' + numero : numero;
}

dataInicioTextoSpan.textContent = dataInicioNamoro.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});


function atualizarContador() {
    const agora = new Date();
    const diferencaMs = agora.getTime() - dataInicioNamoro.getTime(); // Diferença em milissegundos

    const segundosTotais = Math.floor(diferencaMs / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    let anos = agora.getFullYear() - dataInicioNamoro.getFullYear();
    let meses = agora.getMonth() - dataInicioNamoro.getMonth();
    let dias = agora.getDate() - dataInicioNamoro.getDate();

    if (dias < 0) {
        meses--;

        const diaNoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias = diaNoMesAnterior + dias;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }


    const segundos = segundosTotais % 60;
    const minutos = minutosTotais % 60;
    const horas = horasTotais % 24;



    anosSpan.textContent = formatarDoisDigitos(anos);
    mesesSpan.textContent = formatarDoisDigitos(meses);
    diasSpan.textContent = formatarDoisDigitos(dias);
    horasSpan.textContent = formatarDoisDigitos(horas);
    minutosSpan.textContent = formatarDoisDigitos(minutos);
    segundosSpan.textContent = formatarDoisDigitos(segundos);
}


atualizarContador();
setInterval(atualizarContador, 1000);

