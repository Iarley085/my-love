// --- CONFIGURAÇÃO: DEFINA A DATA DE INÍCIO DO NAMORO AQUI ---
// Formato: Ano, Mês (0=Jan, 1=Fev, ... 11=Dez), Dia, Hora, Minuto, Segundo
const dataInicioNamoro = new Date(2023, 3, 7, 0o0, 0o7, 0); // Exemplo: 15 de janeiro de 2023, 10:30:00
// -----------------------------------------------------------------

// Elementos HTML onde o contador será exibido
const anosSpan = document.getElementById('anos');
const mesesSpan = document.getElementById('meses');
const diasSpan = document.getElementById('dias');
const horasSpan = document.getElementById('horas');
const minutosSpan = document.getElementById('minutos');
const segundosSpan = document.getElementById('segundos');
const dataInicioTextoSpan = document.getElementById('dataInicioTexto');

// Função para formatar números com dois dígitos (ex: 01, 05, 12)
function formatarDoisDigitos(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Exibe a data de início no texto
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

    // Cálculos
    const segundosTotais = Math.floor(diferencaMs / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    // Para anos e meses, a contagem é um pouco mais complexa devido aos diferentes dias nos meses/anos bissextos.
    // A abordagem mais precisa é iterar ou usar a diferença de datas.
    // Vamos usar uma abordagem mais simples aqui, que calcula com base na data exata para dias, horas, minutos, segundos,
    // e uma estimativa para meses e anos.

    // Calculando anos e meses com mais precisão
    let anos = agora.getFullYear() - dataInicioNamoro.getFullYear();
    let meses = agora.getMonth() - dataInicioNamoro.getMonth();
    let dias = agora.getDate() - dataInicioNamoro.getDate();

    if (dias < 0) {
        meses--;
        // Calcula os dias no mês anterior
        const diaNoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias = diaNoMesAnterior + dias;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Calculando horas, minutos e segundos restantes
    const segundos = segundosTotais % 60;
    const minutos = minutosTotais % 60;
    const horas = horasTotais % 24;


    // Atualiza o HTML
    anosSpan.textContent = formatarDoisDigitos(anos);
    mesesSpan.textContent = formatarDoisDigitos(meses);
    diasSpan.textContent = formatarDoisDigitos(dias);
    horasSpan.textContent = formatarDoisDigitos(horas);
    minutosSpan.textContent = formatarDoisDigitos(minutos);
    segundosSpan.textContent = formatarDoisDigitos(segundos);
}

// Atualiza o contador imediatamente e depois a cada segundo
atualizarContador();
setInterval(atualizarContador, 1000); // Atualiza a cada 1 segundo (1000 milissegundos)