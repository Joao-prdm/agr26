// ==========================================
// 1. LÓGICA DA CALCULADORA DE ÁGUA
// ==========================================
function calcularAgua() {
    const hectares = parseFloat(document.getElementById('hectares').value);
    const resultadoDiv = document.getElementById('resultado-calculo');
    
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    // Média estimada de gasto diário por hectare (em litros)
    const gastoTradicionalPorHectare = 4500; 
    // Gotejamento economiza cerca de 40%
    const economiaPercentual = 0.40;

    const consumoTradicional = hectares * gastoTradicionalPorHectare;
    const aguaEconomizada = consumoTradicional * economiaPercentual;
    const consumoSustentavel = consumoTradicional - aguaEconomizada;

    // Atualiza os valores na tela formata com pontos de milhar
    document.getElementById('cons-tradicional').innerText = consumoTradicional.toLocaleString('pt-BR');
    document.getElementById('cons-sustentavel').innerText = consumoSustentavel.toLocaleString('pt-BR');
    document.getElementById('economia').innerText = aguaEconomizada.toLocaleString('pt-BR');

    // Mostra a div de resultados
    resultadoDiv.classList.remove('hidden');
}

// ==========================================
// 2. LÓGICA DO MAPA INTERATIVO DO PARANÁ
// ==========================================
const dadosRegioes = {
    noroeste: {
        titulo: "Região Noroeste (Polo de Mandioca e Carne)",
        texto: "Historicamente forte na pecuária de corte, hoje destaca-se na produção sustentável de mandioca e cana-de-açúcar. Práticas de rotação de culturas e recuperação de pastagens degradadas ditam o ritmo ecológico aqui."
    },
    norte: {
        titulo: "Região Norte (Café, Grãos e Laranja)",
        texto: "Berço da rota do café. Atualmente lidera em tecnologia aplicada à soja e ao milho. Utiliza em larga escala o Manejo Integrado de Pragas (MIP) reduzindo drasticamente o uso de defensivos químicos."
    },
    oeste: {
        titulo: "Região Oeste (Gigante dos Grãos e Proteína Animal)",
        texto: "Destaque nacional em cooperativismo, produção de aves, suínos e grãos. Referência no uso de **Biodigestores**, transformando os dejetos animais da suinocultura em biogás e energia limpa."
    },
    centro: {
        titulo: "Região Centro-Sul (Madeira e Grãos de Inverno)",
        texto: "Grande produtora de cevada, trigo e silvicultura (madeira reflorestada). O foco sustentável está no manejo de florestas plantadas certificadas, evitando a pressão sobre matas nativas."
    },
    leste: {
        titulo: "Região Leste / RMC (Cinturão Verde e Orgânicos)",
        texto: "Responsável pelo abastecimento de hortifrúti da capital. É o polo pioneiro do Paraná em agricultura orgânica e agroecologia familiar, minimizando a pegada de carbono no transporte."
    }
};

function infoRegiao(regiaoKey) {
    const painel = document.getElementById('info-mapa');
    const dados = dadosRegioes[regiaoKey];

    painel.innerHTML = `
        <h3 style="color: #e65100;">${dados.titulo}</h3>
        <p style="margin-top: 10px; line-height: 1.5;">${dados.texto}</p>
    `;
}

// ==========================================
// 3. LÓGICA DO SIMULADOR DE ENERGIA SUSTENTÁVEL
// ==========================================
function atualizarEnergia(valor) {
    // Atualiza o texto da porcentagem
    document.getElementById('porcentagem-energia').innerText = valor + "%";

    const statusConta = document.getElementById('status-conta');
    const statusCo2 = document.getElementById('status-co2');

    // Cálculos fictícios proporcionais para feedback visual
    const reducaoFinanceira = valor * 0.95; // Até 95% de economia na conta
    const co2Evitado = (valor * 0.15).toFixed(1); // Até 15 toneladas

    statusConta.innerText = `Redução de ${reducaoFinanceira.toFixed(0)}% na tarifa`;
    statusCo2.innerText = `Evita ${co2Evitado} toneladas de CO₂/ano`;
}