let perguntas = [
  {
    texto: "Qual das opções é comum na vida do campo?",
    opcoes: ["Shopping", "Trator", "Prédio alto", "Semáforo"],
    correta: 1
  },
  {
    texto: "Qual a característica da vida no campo?",
    opcoes: ["Calmaria", "Contato com a natureza", "Trânsito intenso", "Produção agrícola"],
    correta: 2
  },
  {
    texto: "Qual a vantagem de viver no campo?",
    opcoes: ["Ar mais limpo", "Mais shoppings", "Transporte público", "Mais empregos formais"],
    correta: 0
  },
  {
    texto: "qual atividade dessas é comum na cidade?",
    opcoes: ["Pecuária", "Agricultura", "Indústria", "Criação de gado"],
    correta: 2
  },
  {
    texto: "o campo geralmente possui:",
    opcoes: ["Prédios altos", "Fazendas", "Avenidas movimentadas", "Estádios grandes"],
    correta: 1
  }
];

let etapa = 0;
let pontuacao = 0;
let respondido = false;
let opcaoSelecionada = -1;

function setup() {
  createCanvas(700, 400);
  textAlign(LEFT, CENTER);
  textSize(18);
}

function draw() {
  background(240);

  if (etapa < perguntas.length) {
    mostrarPergunta(perguntas[etapa]);
  } else {
    mostrarResultado();
  }
}

function mostrarPergunta(p) {
  fill(20);
  textSize(20);
  text("Pergunta " + (etapa + 1) + " de " + perguntas.length, 20, 20);
  textSize(24);
  text(p.texto, 20, 60);

  for (let i = 0; i < p.opcoes.length; i++) {
    let y = 120 + i * 60;

    if (respondido) {
      if (i === p.correta) {
        fill(0, 200, 0); // Verde: certa
      } else if (i === opcaoSelecionada) {
        fill(200, 0, 0); // Vermelha: errada
      } else {
        fill(180);
      }
    } else {
      fill(100);
    }

    rect(20, y - 20, width - 40, 50, 10);
    fill(255);
    textSize(20);
    text(p.opcoes[i], 30, y + 5);
  }
}

function mousePressed() {
  if (etapa >= perguntas.length) return;

  let p = perguntas[etapa];
  for (let i = 0; i < p.opcoes.length; i++) {
    let y = 120 + i * 60;
    if (
      mouseX > 20 && mouseX < width - 20 &&
      mouseY > y - 20 && mouseY < y + 30 &&
      !respondido
    ) {
      opcaoSelecionada = i;
      respondido = true;

      if (i === p.correta) {
        pontuacao++;
      }

      // Avança após 1.2 segundos
      setTimeout(() => {
        etapa++;
        opcaoSelecionada = -1;
        respondido = false;
      }, 1200);
    }
  }
}

function mostrarResultado() {
  background(50, 150, 200);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Quiz Concluído!", width / 2, height / 2 - 40);
  textSize(26);
  text(`Você acertou ${pontuacao} de ${perguntas.length} perguntas.`, width / 2, height / 2 + 10);
}
