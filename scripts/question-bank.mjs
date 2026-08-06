#!/usr/bin/env node
/**
 * Generates docs/BANCO-DE-QUESTOES.md — the complete, self-contained question
 * bank of Math Dojo in Portuguese: project context (so any reviewer, human or
 * AI, understands WHY each question exists), every normal-mode lesson (to
 * judge whether reading alone teaches the drill), every ninja passage WITHOUT
 * answers in the body, and a full answer key (gabarito) with the sensei
 * explanations at the end.
 *
 * Run from the repo root:  node scripts/question-bank.mjs
 */
import { execSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "mdojo-bank-"));

execSync(
  `node_modules/.bin/tsc src/data/belts.ts src/data/ninjaBelts.ts src/data/ninja.ts src/data/ninja/*.ts src/engine/problemGenerator.ts src/types.ts --ignoreConfig --outDir ${out} --module commonjs --target es2020 --moduleResolution node --esModuleInterop --skipLibCheck || true`,
  { stdio: "pipe" },
);

const { belts } = require(join(out, "data/belts.js"));
const { ninjaBelts } = require(join(out, "data/ninjaBelts.js"));

const L = "pt";
const lines = [];
const push = (s = "") => lines.push(s);

function fmtAnswer(p) {
  if (p.secondaryAnswer === undefined) return String(p.answer);
  switch (p.secondaryFormat) {
    case "fraction":
      return `${p.answer}/${p.secondaryAnswer}`;
    case "decimal":
      return `${p.answer}.${String(p.secondaryAnswer).padStart(p.secondaryDigits ?? 1, "0")}`;
    case "pair":
      return `${p.answer}, ${p.secondaryAnswer}`;
    case "radical":
      return `${p.answer}√${p.secondaryAnswer}`;
    default:
      return `${p.answer} R ${p.secondaryAnswer}`;
  }
}

// ---------------------------------------------------------------------------
push("# Math Dojo — Banco de Questões e Lições");
push();
push("> Gerado automaticamente a partir dos dados do jogo (`node scripts/question-bank.mjs`).");
push("> Idioma deste documento: português. Todo o conteúdo também existe em inglês e espanhol no jogo.");
push();
push("## Contexto para quem for revisar (humano ou IA)");
push();
push("O Math Dojo (playmathdojo.com) é um jogo gratuito de prática de matemática por faixas de artes marciais, da soma até Cálculo I, com o objetivo declarado de levar uma pessoa do zero até o nível de passar num vestibular de elite (ITA/Poli) e chegar bem na faculdade — além da matemática que um programador usa. Ele tem **duas jornadas**:");
push();
push("1. **Modo Normal** — constrói o reflexo. Cada faixa se divide em graus; cada grau tem uma **lição de auto-estudo** (introdução + exemplo resolvido + passos) seguida de um drill de páginas com problemas **gerados infinitamente**. A pessoa só avança dominando (80% de acerto por página). As lições estão neste documento para responder a uma pergunta específica: **lendo só a lição, uma pessoa consegue fazer o drill daquele grau? A explicação é clara e a dificuldade progride bem?**");
push();
push("2. **Modo Ninja** — prova que a pessoa sabe ler um problema. As mesmas faixas, refeitas como **enunciados fixos de interpretação de texto**, com comprimento e dificuldade crescendo por faixa (a 'régua do treinador', abaixo). As questões estão neste documento **sem as respostas no corpo** — o gabarito completo está no final — justamente para que um revisor (ou outra IA) possa tentar resolvê-las e avaliar se estão no nível.");
push();
push("### A régua do treinador (padrão de qualidade dos enunciados ninja)");
push();
push("- **Branca/Azul/Roxa/Marrom** (aritmética): 1-3 frases, cotidiano simples, números-isca leves para treinar atenção.");
push("- **Verde/Preta** (números, frações, equações, funções): um parágrafo sólido (~45-75 palavras); a operação nunca é nomeada; a pergunta pede uma grandeza do mundo real; iscas de atenção.");
push("- **Vermelha** (geometria/trig): ~70-100 palavras; o leitor reconhece a estrutura (Pitágoras, razão trigonométrica) sozinho; valores notáveis que o modo normal ensinou (sen 30° = 1/2) NÃO são entregues.");
push("- **Dourada/Digital/Coral** (nível ITA): 2 parágrafos (~100-160 palavras); NENHUMA técnica entregue (nada de fórmula pronta ou frase-instrução — o modo normal já ensinou a técnica; só convenções arbitrárias como π = 22/7 aparecem, como dado); **iscas-tentação** em vez de iscas-ruído: valores que produzem uma resposta errada 'limpa' pelo caminho errado clássico (multiplicar a leitura final pelo tempo em vez de integrar, somar os intervalos em vez do MMC, usar o denominador errado numa probabilidade); a pergunta final é uma decisão operacional.");
push();
push("Cada questão das faixas Dourada/Digital/Coral carrega também uma **explicação do sensei** (no gabarito): ela nomeia a armadilha e o caminho correto SEM dar o número final — no jogo, ela aparece no primeiro erro (a resposta em si só aparece do segundo erro em diante, para a nova tentativa ser real).");
push();
push("### O que pedimos a um revisor");
push();
push("1. Tente resolver as questões ninja só pela leitura — o gabarito está no final para conferência.");
push("2. Avalie por faixa: o nível está certo? A armadilha é conceitual (tenta um caminho errado) ou é só ruído? Alguma questão ficou ambígua, com dado faltando, ou com resposta discutível?");
push("3. Nas lições do modo normal: a explicação basta para fazer o drill? A progressão entre graus está suave?");
push();
push("---");
push();

// ---------------------------------------------------------------------------
push("# PARTE 1 — Modo Normal: lições por faixa");
push();
push("*(Os drills do modo normal são gerados na hora — infinitos —, então listamos a lição de cada grau e seu exemplo resolvido, que é o material de ensino. A pergunta a avaliar: só com isso, dá para fazer o drill?)*");
push();

for (const belt of belts) {
  push(`## ${belt.name[L]} — ${belt.operationLabel[L]}`);
  push();
  push(`*${belt.tagline[L]}*`);
  push();
  for (const s of belt.stripes) {
    const deg = s.degree ? `${s.degree.name[L]} · ` : "";
    push(`### [${s.id}] ${deg}${s.title[L]}`);
    push();
    push(`**Resumo:** ${s.summary[L]}`);
    push();
    push(`**Lição:** ${s.lesson.intro[L]}`);
    push();
    const ex = s.lesson.example;
    const exText = (ex.promptL10n?.[L] ?? ex.prompt).replace(/\n/g, " ");
    const label = ex.isEquation ? (ex.equationLabel ?? "x =") : "=";
    push(`**Exemplo resolvido:** ${exText || "(diagrama)"} → ${label} ${fmtAnswer(ex)}`);
    push();
    push("**Passos ensinados:**");
    s.lesson.steps.forEach((st, i) => push(`${i + 1}. ${st.text[L].replace(/\{\{|\}\}/g, "")}`));
    push();
    push(
      `*Maestria: ${s.mastery.pagesToMaster} página(s) de ${s.mastery.problemsPerPage} problemas · ${Math.round(s.mastery.passAccuracy * 100)}% de acerto · alvo ${s.mastery.targetTimeSec}s/questão.*`,
    );
    push();
  }
}

// ---------------------------------------------------------------------------
push("---");
push();
push("# PARTE 2 — Modo Ninja: as questões (sem respostas)");
push();
push("*(Cada grau ninja é uma página única com o banco abaixo embaralhado. A Prova Ninja de cada faixa sorteia 1 questão de cada grau. Gabarito completo na Parte 3.)*");
push();

const key = [];
for (const belt of ninjaBelts) {
  push(`## ${belt.name[L]} — ${belt.operationLabel[L]}`);
  push();
  push(`*${belt.tagline[L]}*`);
  push();
  for (const s of belt.stripes) {
    if (s.id.endsWith("-exam")) {
      push(`### [${s.id}] ${s.title[L]} — sorteia 1 questão de cada grau acima, a cada tentativa.`);
      push();
      continue;
    }
    push(`### [${s.id}] ${s.title[L]}`);
    push();
    push(`*${s.lesson.intro[L]}*`);
    push();
    const probs = s.generate(0);
    // generate() shuffles — sort by text so the doc (and its numbering) is stable
    probs.sort((a, b) => a.promptL10n[L].localeCompare(b.promptL10n[L]));
    probs.forEach((p, i) => {
      const qid = `${s.id}#${i + 1}`;
      push(`**${qid}** — ${p.promptL10n[L].replace(/\n\n/g, "\n> ")}`);
      push();
      key.push({ qid, answer: fmtAnswer(p), explanation: p.explanation?.[L] });
    });
  }
}

// ---------------------------------------------------------------------------
push("---");
push();
push("# PARTE 3 — GABARITO (com explicações do sensei quando existem)");
push();
for (const k of key) {
  push(`- **${k.qid}** → ${k.answer}${k.explanation ? ` — *${k.explanation}*` : ""}`);
}
push();

mkdirSync("docs", { recursive: true });
writeFileSync("docs/BANCO-DE-QUESTOES.md", lines.join("\n"));
console.log(`docs/BANCO-DE-QUESTOES.md gerado: ${lines.length} linhas, ${key.length} questões ninja no gabarito.`);
