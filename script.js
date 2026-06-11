// --- Lógica da Página Inicial (Mapa Interativo do PR) ---
const regioesPR = {
    oeste: {
        titulo: "Região Oeste (Toledo, Cascavel)",
        texto: "Polo nacional da suinocultura e avicultura. O grande destaque ambiental aqui é o uso de biodigestores. O biogás gerado pelos dejetos dos animais produz energia elétrica suficiente para abastecer centenas de propriedades e até frotas de veículos cooperativos."
    },
    norte: {
        titulo: "Região Norte (Londrina, Maringá, Rolândia)",
        texto: "Berço do Plantio Direto no Brasil. As terras de solo vermelho fértil (conhecida como 'terra roxa') sofreram muita erosão no passado. Hoje, com a rotação de culturas (soja e milho safrinha) e a manutenção da palhada, é um exemplo global de conservação de solo."
    },
    campos: {
        titulo: "Campos Gerais (Ponta Grossa, Castro)",
        texto: "Capital nacional do leite e referência em tecnologia. Aqui, propriedades de alta precisão garantem que as vacas produzam mais em menos espaço, com uma pegada de carbono baixíssima devido ao controle rigoroso da dieta dos animais e gestão de resíduos."
    },
    sul: {
        titulo: "Região Sul (Guarapuava, União da Vitória)",
        texto: "Destaque para o sistema ILPF (Integração Lavoura-Pecuária-Floresta) e a extração sustentável da Erva-Mate sob a sombra de araucárias nativas. Aqui, o agronegócio protege a floresta enquanto gera renda."
    }
};

function mostrarRegiao(regiao) {
    const painel = document.getElementById('info-regiao');
    if(painel) {
        painel.style.opacity = 0;
        setTimeout(() => {
            painel.innerHTML = `
                <h3 style="color: #006633; margin-bottom: 10px;">${regioesPR[regiao].titulo}</h3>
                <p>${regioesPR[regiao].texto}</p>
            `;
            painel.style.opacity = 1;
        }, 300);
    }
}

// --- Lógica da Calculadora (calculadora.html) ---

function calcularBiogas() {
    const input = document.getElementById('qtdSuinos').value;
    const divResultado = document.getElementById('resultado-biogas');
    
    if (input <= 0 || input === "") {
        divResultado.innerHTML = "Por favor, insira um número válido de suínos.";
        return;
    }

    // Cálculo base aproximado: 1 suíno gera ~0.14 m3 de biogás/dia, que gera ~0.20 kWh/dia de energia.
    const kwhPorDia = (input * 0.20).toFixed(2);
    const kwhPorAno = (kwhPorDia * 365).toFixed(2);

    divResultado.innerHTML = `🌿 Incrível! ${input} suínos podem gerar <strong>${kwhPorDia} kWh por dia</strong> ou <strong>${kwhPorAno} kWh por ano</strong>.<br> Isso é suficiente para iluminar e abastecer máquinas de uma propriedade rural sustentável!`;
}

function calcularCarbono() {
    const input = document.getElementById('qtdHectares').value;
    const divResultado = document.getElementById('resultado-carbono');
    
    if (input <= 0 || input === "") {
        divResultado.innerHTML = "Por favor, insira um número válido de hectares.";
        return;
    }

    // Cálculo base aproximado: O Plantio Direto sequestra em média 0.5 a 1 tonelada de Carbono por hectare/ano em comparação ao solo arado.
    const co2Evitado = (input * 0.75).toFixed(2); // média de 0.75 toneladas

    divResultado.innerHTML = `🌍 Muito bom! Em ${input} hectares de Plantio Direto, você ajuda a sequestrar aproximadamente <strong>${co2Evitado} toneladas de CO2 por ano</strong>.<br> Além de evitar que a terra fértil vá embora com as chuvas paranaenses.`;
}