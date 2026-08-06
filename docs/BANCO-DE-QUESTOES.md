# Math Dojo — Banco de Questões e Lições

> Gerado automaticamente a partir dos dados do jogo (`node scripts/question-bank.mjs`).
> Idioma deste documento: português. Todo o conteúdo também existe em inglês e espanhol no jogo.

## Contexto para quem for revisar (humano ou IA)

O Math Dojo (playmathdojo.com) é um jogo gratuito de prática de matemática por faixas de artes marciais, da soma até Cálculo I, com o objetivo declarado de levar uma pessoa do zero até o nível de passar num vestibular de elite (ITA/Poli) e chegar bem na faculdade — além da matemática que um programador usa. Ele tem **duas jornadas**:

1. **Modo Normal** — constrói o reflexo. Cada faixa se divide em graus; cada grau tem uma **lição de auto-estudo** (introdução + exemplo resolvido + passos) seguida de um drill de páginas com problemas **gerados infinitamente**. A pessoa só avança dominando (80% de acerto por página). As lições estão neste documento para responder a uma pergunta específica: **lendo só a lição, uma pessoa consegue fazer o drill daquele grau? A explicação é clara e a dificuldade progride bem?**

2. **Modo Ninja** — prova que a pessoa sabe ler um problema. As mesmas faixas, refeitas como **enunciados fixos de interpretação de texto**, com comprimento e dificuldade crescendo por faixa (a 'régua do treinador', abaixo). As questões estão neste documento **sem as respostas no corpo** — o gabarito completo está no final — justamente para que um revisor (ou outra IA) possa tentar resolvê-las e avaliar se estão no nível.

### A régua do treinador (padrão de qualidade dos enunciados ninja)

- **Branca/Azul/Roxa/Marrom** (aritmética): 1-3 frases, cotidiano simples, números-isca leves para treinar atenção.
- **Verde/Preta** (números, frações, equações, funções): um parágrafo sólido (~45-75 palavras); a operação nunca é nomeada; a pergunta pede uma grandeza do mundo real; iscas de atenção.
- **Vermelha** (geometria/trig): ~70-100 palavras; o leitor reconhece a estrutura (Pitágoras, razão trigonométrica) sozinho; valores notáveis que o modo normal ensinou (sen 30° = 1/2) NÃO são entregues.
- **Dourada/Digital/Coral** (nível ITA): 2 parágrafos (~100-160 palavras); NENHUMA técnica entregue (nada de fórmula pronta ou frase-instrução — o modo normal já ensinou a técnica; só convenções arbitrárias como π = 22/7 aparecem, como dado); **iscas-tentação** em vez de iscas-ruído: valores que produzem uma resposta errada 'limpa' pelo caminho errado clássico (multiplicar a leitura final pelo tempo em vez de integrar, somar os intervalos em vez do MMC, usar o denominador errado numa probabilidade); a pergunta final é uma decisão operacional.

Cada questão das faixas Dourada/Digital/Coral carrega também uma **explicação do sensei** (no gabarito): ela nomeia a armadilha e o caminho correto SEM dar o número final — no jogo, ela aparece no primeiro erro (a resposta em si só aparece do segundo erro em diante, para a nova tentativa ser real).

### O que pedimos a um revisor

1. Tente resolver as questões ninja só pela leitura — o gabarito está no final para conferência.
2. Avalie por faixa: o nível está certo? A armadilha é conceitual (tenta um caminho errado) ou é só ruído? Alguma questão ficou ambígua, com dado faltando, ou com resposta discutível?
3. Nas lições do modo normal: a explicação basta para fazer o drill? A progressão entre graus está suave?

---

# PARTE 1 — Modo Normal: lições por faixa

*(Os drills do modo normal são gerados na hora — infinitos —, então listamos a lição de cada grau e seu exemplo resolvido, que é o material de ensino. A pergunta a avaliar: só com isso, dá para fazer o drill?)*

## Faixa Branca — Soma

*Toda jornada no dojo começa aqui. Aprenda a somar com confiança.*

### [white-1] Somar até 10

**Resumo:** Dois números pequenos que nunca passam de 10.

**Lição:** Quando os dois números são pequenos, conte a partir do maior.

**Exemplo resolvido:** 6 + 3 → = 9

**Passos ensinados:**
1. Comece pelo número maior: 6.
2. Conte mais 3: 7, 8, 9.
3. 6 + 3 = 9.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [white-2] Somar até 20

**Resumo:** Passando de 10 usando o truque de 'completar 10'.

**Lição:** Quebre o segundo número em partes para completar o primeiro até 10 — isso é 'completar 10'.

**Exemplo resolvido:** 8 + 5 → = 13

**Passos ensinados:**
1. O 8 precisa de mais 2 para chegar a 10.
2. Separe o 5 em 2 + 3.
3. 8 + 2 = 10, depois 10 + 3 = 13.
4. 8 + 5 = 13.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [white-3] Somar três números

**Resumo:** Encadeie duas somas para juntar três números.

**Lição:** Some os dois primeiros números, depois some o terceiro a esse total.

**Exemplo resolvido:** 3 + 4 + 2 → = 9

**Passos ensinados:**
1. Some os dois primeiros: 3 + 4 = 7.
2. Some o terceiro a esse total: 7 + 2 = 9.
3. 3 + 4 + 2 = 9.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [white-4] Dois dígitos + um dígito, sem 'vai um'

**Resumo:** Some o dígito único direto nas unidades — a dezena não muda.

**Lição:** Só a coluna das unidades muda. Some o número pequeno ali e mantenha a dezena igual.

**Exemplo resolvido:** 34 + 5 → = 39

**Passos ensinados:**
1. Some nas unidades: 4 + 5 = 9.
2. A dezena continua: 3.
3. 34 + 5 = 39.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [white-5] Dois dígitos + um dígito, com 'vai um'

**Resumo:** Quando as unidades passam de 9, o 1 vai para a dezena.

**Lição:** Some as unidades primeiro. Se der 10 ou mais, leve o 1 para a dezena.

**Exemplo resolvido:** 38 + 5 → = 43

**Passos ensinados:**
1. Some as unidades: 8 + 5 = 13. Escreva o 3 e leve o 1.
2. Some o 1 que veio à dezena: 3 + 1 = 4.
3. 38 + 5 = 43.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [white-6] Dois dígitos, sem 'vai um'

**Resumo:** Alinhe as colunas e some unidades e dezenas separadamente.

**Lição:** Alinhe as dezenas e unidades, depois some cada coluna separadamente.

**Exemplo resolvido:** 34 + 25 → = 59

**Passos ensinados:**
1. Some a coluna das unidades: 4 + 5 = 9.
2. Some a coluna das dezenas: 3 + 2 = 5.
3. Junte tudo: 59.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [white-7] Dois dígitos, com 'vai um'

**Resumo:** Quando uma coluna passa de 9, o 1 'vai' para a próxima.

**Lição:** Quando as unidades somam 10 ou mais, leve o 1 extra para a coluna das dezenas.

**Exemplo resolvido:** 27 + 46 → = 73

**Passos ensinados:**
1. Some a coluna das unidades: 7 + 6 = 13. Escreva o 3 e leve o 1.
2. Some a coluna das dezenas: 2 + 4 + 1 (que veio) = 7.
3. 27 + 46 = 73.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 15s/questão.*

### [white-8] Três dígitos, sem 'vai um'

**Resumo:** Mesmo método das colunas, só mais uma: centena, dezena, unidade.

**Lição:** Alinhe centenas, dezenas e unidades, depois some cada coluna separadamente — igual antes, com mais uma coluna.

**Exemplo resolvido:** 213 + 154 → = 367

**Passos ensinados:**
1. Some as unidades: 3 + 4 = 7.
2. Some as dezenas: 1 + 5 = 6.
3. Some as centenas: 2 + 1 = 3.
4. 213 + 154 = 367.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [white-9] Três dígitos, um 'vai um'

**Resumo:** O 'vai um' passa para a próxima coluna, como sempre.

**Lição:** Trabalhe coluna por coluna. Se as unidades gerarem 'vai um', some esse 1 antes de ir para as centenas.

**Exemplo resolvido:** 217 + 156 → = 373

**Passos ensinados:**
1. Some as unidades: 7 + 6 = 13. Escreva o 3 e leve o 1.
2. Some as dezenas mais o que veio: 1 + 5 + 1 = 7.
3. Some as centenas: 2 + 1 = 3.
4. 217 + 156 = 373.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [white-10] Três dígitos, 'vai um' duplo

**Resumo:** O 'vai um' pode se repetir — das unidades pra dezena, e da dezena pra centena.

**Lição:** Às vezes um 'vai um' gera outro. Trabalhe coluna por coluna e leve o 1 sempre que uma coluna passar de 9.

**Exemplo resolvido:** 587 + 368 → = 955

**Passos ensinados:**
1. Some as unidades: 7 + 8 = 15. Escreva o 5 e leve o 1.
2. Some as dezenas mais o que veio: 8 + 6 + 1 = 15. Escreva o 5 e leve o 1 de novo.
3. Some as centenas mais o que veio: 5 + 3 + 1 = 9.
4. 587 + 368 = 955.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 24s/questão.*

### [white-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 10 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** 6 + 1 → = 7

**Passos ensinados:**
1. 10 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 10 problemas · 80% de acerto · alvo 24s/questão.*

## Faixa Azul — Subtração

*Subtraia com a mesma precisão passo a passo.*

### [blue-1] Subtrair até 10

**Resumo:** Tire um número pequeno sem nunca passar de zero.

**Lição:** Conte para trás a partir do número maior.

**Exemplo resolvido:** 9 - 3 → = 6

**Passos ensinados:**
1. Comece no 9.
2. Conte 3 para trás: 8, 7, 6.
3. 9 - 3 = 6.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [blue-2] Subtrair até 20

**Resumo:** Volte pelo 10 do mesmo jeito que você foi para frente.

**Lição:** Quebre o número que você está subtraindo em duas partes: o suficiente para levar o primeiro número até 10, depois o resto.

**Exemplo resolvido:** 15 - 8 → = 7

**Passos ensinados:**
1. O 15 precisa perder 5 para chegar a 10.
2. Separe o 8 em 5 + 3.
3. 15 - 5 = 10, depois 10 - 3 = 7.
4. 15 - 8 = 7.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [blue-3] Subtrair três números

**Resumo:** Encadeie duas subtrações.

**Lição:** Subtraia o segundo número primeiro, depois subtraia o terceiro do que sobrou.

**Exemplo resolvido:** 15 - 4 - 3 → = 8

**Passos ensinados:**
1. Subtraia os dois primeiros: 15 - 4 = 11.
2. Subtraia o terceiro disso: 11 - 3 = 8.
3. 15 - 4 - 3 = 8.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [blue-4] Dois dígitos − um dígito, sem 'emprestar'

**Resumo:** A unidade já é grande o suficiente — só subtraia direto.

**Lição:** Se a unidade for maior que o que você vai subtrair, é só tirar — a dezena não muda.

**Exemplo resolvido:** 47 - 5 → = 42

**Passos ensinados:**
1. Subtraia nas unidades: 7 - 5 = 2.
2. A dezena continua: 4.
3. 47 - 5 = 42.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [blue-5] Dois dígitos − um dígito, com 'emprestar'

**Resumo:** Quando a unidade é pequena demais, empreste 10 da dezena.

**Lição:** Se não der pra subtrair a unidade direto, empreste 1 dezena (10) e some com a unidade.

**Exemplo resolvido:** 42 - 7 → = 35

**Passos ensinados:**
1. 2 é menor que 7, então empreste 1 dezena: 12 - 7 = 5.
2. A dezena perde 1: 4 vira 3.
3. 42 - 7 = 35.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [blue-6] Dois dígitos, sem 'emprestar'

**Resumo:** Subtraia cada coluna separadamente, o de cima sempre maior.

**Lição:** Alinhe as dezenas e unidades, depois subtraia cada coluna separadamente.

**Exemplo resolvido:** 58 - 23 → = 35

**Passos ensinados:**
1. Subtraia as unidades: 8 - 3 = 5.
2. Subtraia as dezenas: 5 - 2 = 3.
3. 58 - 23 = 35.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [blue-7] Dois dígitos, com 'emprestar'

**Resumo:** Quando a unidade de cima é menor, empreste da dezena.

**Lição:** Se a unidade de cima for menor que a de baixo, empreste 1 dezena antes de subtrair.

**Exemplo resolvido:** 52 - 27 → = 25

**Passos ensinados:**
1. 2 é menor que 7, então empreste 1 dezena: 12 - 7 = 5.
2. A dezena perde 1: 5 - 1 = 4, depois 4 - 2 = 2.
3. 52 - 27 = 25.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 15s/questão.*

### [blue-8] Três dígitos, sem 'emprestar'

**Resumo:** Mesmo método das colunas, só mais uma: centena, dezena, unidade.

**Lição:** Alinhe centenas, dezenas e unidades, depois subtraia cada coluna separadamente.

**Exemplo resolvido:** 468 - 235 → = 233

**Passos ensinados:**
1. Subtraia as unidades: 8 - 5 = 3.
2. Subtraia as dezenas: 6 - 3 = 3.
3. Subtraia as centenas: 4 - 2 = 2.
4. 468 - 235 = 233.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [blue-9] Três dígitos, um 'emprestar'

**Resumo:** O empréstimo passa para a próxima coluna, como sempre.

**Lição:** Trabalhe coluna por coluna. Se a unidade precisar emprestar, tire 1 dezena antes de ir para as centenas.

**Exemplo resolvido:** 342 - 128 → = 214

**Passos ensinados:**
1. 2 é menor que 8, então empreste 1 dezena: 12 - 8 = 4.
2. A dezena perde 1: 4 - 1 = 3, depois 3 - 2 = 1.
3. Subtraia as centenas: 3 - 1 = 2.
4. 342 - 128 = 214.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [blue-10] Três dígitos, 'emprestar' duplo

**Resumo:** O empréstimo pode se repetir — das dezenas pras unidades, e das centenas pras dezenas.

**Lição:** Às vezes um empréstimo gera outro. Trabalhe coluna por coluna e empreste sempre que o dígito de cima for pequeno demais.

**Exemplo resolvido:** 523 - 357 → = 166

**Passos ensinados:**
1. 3 é menor que 7, então empreste 1 dezena: 13 - 7 = 6.
2. A dezena perde 1, vira 1, que é menor que 5 — empreste de novo: 11 - 5 = 6.
3. A centena perde 1: 5 - 1 = 4, depois 4 - 3 = 1.
4. 523 - 357 = 166.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 24s/questão.*

### [blue-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 10 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** 2 - 1 → = 1

**Passos ensinados:**
1. 10 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 10 problemas · 80% de acerto · alvo 24s/questão.*

## Faixa Roxa — Multiplicação

*Tabuada até virar puro instinto.*

### [purple-1] O que significa multiplicar

**Resumo:** Grupos iguais somados juntos — veja, depois diga como uma multiplicação.

**Lição:** Multiplicação significa somar grupos iguais. Veja os grupos abaixo, depois some tudo.

**Exemplo resolvido:** 5 × 3 → = 15

**Passos ensinados:**
1. Veja 3 grupos iguais de 5, como acima.
2. Some os grupos: 5 + 5 + 5 = 15.
3. É isso que 5 × 3 significa: 3 grupos de 5.
4. 5 × 3 = 15.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [purple-2] Tabuada do 3 e do 4

**Resumo:** Duas tabuadas que você constrói a partir do dobro.

**Lição:** ×3 é o dobro do número, mais o número de novo. ×4 é dobrar, e dobrar mais uma vez.

**Exemplo resolvido:** 4 × 7 → = 28

**Passos ensinados:**
1. Dobre o 7: 7 × 2 = 14.
2. Dobre de novo: 14 × 2 = 28.
3. Para ×3 é um dobro mais o número: 3 × 7 = 14 + 7 = 21.
4. 4 × 7 = 28.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [purple-3] Tabuada do 6, 7, 8 e 9

**Resumo:** Quebre uma conta difícil em duas mais fáceis.

**Lição:** Separe o número mais difícil em 5 mais o resto, resolva os dois e some.

**Exemplo resolvido:** 7 × 8 → = 56

**Passos ensinados:**
1. Separe o 8 em 5 + 3.
2. 7 × 5 = 35 e 7 × 3 = 21.
3. 35 + 21 = 56.
4. 7 × 8 = 56.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 7s/questão.*

### [purple-4] Todas as tabuadas, misturadas

**Resumo:** A tabuada completa, todas as contas de 2 a 10, sem separar por tabuada.

**Lição:** Tente lembrar a conta direto. Se travar, use o truque do ×9: multiplique por 10 e depois subtraia o número.

**Exemplo resolvido:** 6 × 9 → = 54

**Passos ensinados:**
1. Travou no ×9? Multiplique por 10 primeiro: 6 × 10 = 60.
2. Depois subtraia o número uma vez: 60 - 6 = 54.
3. 6 × 9 = 54.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [purple-5] Multiplicar por 10 e por 100

**Resumo:** O truque do zero funciona em qualquer número, não só nos de um dígito.

**Lição:** Multiplicar por 10 adiciona um zero. Multiplicar por 100 adiciona dois zeros — para qualquer número.

**Exemplo resolvido:** 23 × 100 → = 2300

**Passos ensinados:**
1. ×100 adiciona dois zeros.
2. 23 vira 2300.
3. 23 × 100 = 2300.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [purple-6] Dois dígitos × um dígito, sem 'vai um'

**Resumo:** Multiplique unidade e dezena separadamente, depois some.

**Lição:** Multiplique a unidade primeiro, depois a dezena, e junte — ainda sem precisar de 'vai um'.

**Exemplo resolvido:** 21 × 4 → = 84

**Passos ensinados:**
1. Multiplique a unidade: 1 × 4 = 4.
2. Multiplique a dezena: 2 × 4 = 8, ou seja, 80.
3. Some: 80 + 4 = 84.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [purple-7] Dois dígitos × um dígito, com 'vai um'

**Resumo:** Quando a multiplicação das unidades passa de 9, leve para a dezena.

**Lição:** Multiplique a unidade primeiro. Se der 10 ou mais, leve o extra para a multiplicação da dezena.

**Exemplo resolvido:** 24 × 3 → = 72

**Passos ensinados:**
1. Multiplique a unidade: 4 × 3 = 12. Escreva o 2 e leve o 1.
2. Multiplique a dezena: 2 × 3 = 6, mais o 1 que veio = 7.
3. 24 × 3 = 72.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [purple-8] Dois dígitos × dois dígitos

**Resumo:** Separe o segundo número em dezena e unidade, multiplique cada um e some.

**Lição:** Separe o segundo número em dezena mais unidade. Multiplique o primeiro número por cada parte e some os resultados.

**Exemplo resolvido:** 23 × 12 → = 276

**Passos ensinados:**
1. Separe o 12 em 10 + 2.
2. 23 × 10 = 230.
3. 23 × 2 = 46.
4. 230 + 46 = 276.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [purple-9] Três dígitos × um dígito

**Resumo:** Mesmo método do 'vai um', só mais uma coluna.

**Lição:** Multiplique unidade, depois dezena, depois centena — levando para a próxima coluna sempre que der 10 ou mais.

**Exemplo resolvido:** 213 × 4 → = 852

**Passos ensinados:**
1. Multiplique a unidade: 3 × 4 = 12. Escreva o 2 e leve o 1.
2. Multiplique a dezena: 1 × 4 = 4, mais o 1 que veio = 5.
3. Multiplique a centena: 2 × 4 = 8.
4. 213 × 4 = 852.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [purple-10] Três dígitos × dois dígitos

**Resumo:** O mesmo truque de separar e somar, em tamanho grande.

**Lição:** Separe o número de dois dígitos em dezena mais unidade. Multiplique o número de três dígitos por cada parte e some.

**Exemplo resolvido:** 213 × 24 → = 5112

**Passos ensinados:**
1. Separe o 24 em 20 + 4.
2. 213 × 20 = 4260.
3. 213 × 4 = 852.
4. 4260 + 852 = 5112.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 30s/questão.*

### [purple-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 10 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** 9 × 2 → = 18

**Passos ensinados:**
1. 10 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 10 problemas · 80% de acerto · alvo 30s/questão.*

## Faixa Marrom — Divisão

*Divida números com precisão, restos e tudo.*

### [brown-1] Divisão exata

**Resumo:** Separe um número em grupos iguais — é a multiplicação ao contrário.

**Lição:** A divisão separa um número em grupos iguais. Veja abaixo, e repare que combina com uma conta de multiplicação que você já sabe.

**Exemplo resolvido:** 42 ÷ 6 → = 7

**Passos ensinados:**
1. Imagine 42 coisas separadas em 6 grupos iguais, como acima.
2. Conte quantos ficam em cada grupo: 7.
3. Isso combina com uma multiplicação que você já sabe: 6 × 7 = 42 — a divisão é só a multiplicação ao contrário.
4. 42 ÷ 6 = 7.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [brown-2] Dividir com resto

**Resumo:** Ache o múltiplo mais próximo sem passar do número.

**Lição:** Ache o maior múltiplo do divisor que ainda cabe, depois veja o que sobra.

**Exemplo resolvido:** 23 ÷ 5 → = 4 R 3

**Passos ensinados:**
1. O maior múltiplo de 5 que cabe em 23 é 20 (5 × 4).
2. 23 − 20 = 3 que sobra.
3. 23 ÷ 5 = 4 R 3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [brown-3] Dividir por 10 e por 100

**Resumo:** O truque do zero funciona ao contrário também.

**Lição:** Dividir por 10 remove um zero. Dividir por 100 remove dois zeros.

**Exemplo resolvido:** 700 ÷ 100 → = 7

**Passos ensinados:**
1. ÷100 remove dois zeros.
2. 700 vira 7.
3. 700 ÷ 100 = 7.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [brown-4] Dois dígitos ÷ um dígito, sem resto

**Resumo:** Divida a dezena, depois a unidade, separadamente.

**Lição:** Divida o dígito da dezena pelo divisor, depois o da unidade, e junte.

**Exemplo resolvido:** 84 ÷ 4 → = 21

**Passos ensinados:**
1. Divida a dezena: 8 ÷ 4 = 2.
2. Divida a unidade: 4 ÷ 4 = 1.
3. 84 ÷ 4 = 21.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [brown-5] Dois dígitos ÷ um dígito, com resto

**Resumo:** Divida a dezena, desça a unidade, divida de novo.

**Lição:** Divida a dezena primeiro. O que sobrar se junta à unidade — depois divida esse número combinado.

**Exemplo resolvido:** 47 ÷ 3 → = 15 R 2

**Passos ensinados:**
1. Divida a dezena: 4 ÷ 3 = 1, resto 1.
2. Desça a unidade: 1 e 7 formam 17.
3. Divida de novo: 17 ÷ 3 = 5, resto 2.
4. 47 ÷ 3 = 15 R 2.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [brown-6] Três dígitos ÷ um dígito, sem resto

**Resumo:** Mesmo método das colunas, mais um dígito: centena, dezena, unidade.

**Lição:** Divida a centena, depois a dezena, depois a unidade — cada uma separadamente.

**Exemplo resolvido:** 936 ÷ 3 → = 312

**Passos ensinados:**
1. Divida a centena: 9 ÷ 3 = 3.
2. Divida a dezena: 3 ÷ 3 = 1.
3. Divida a unidade: 6 ÷ 3 = 2.
4. 936 ÷ 3 = 312.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [brown-7] Três dígitos ÷ um dígito, com resto

**Resumo:** Divisão longa: divida, multiplique, subtraia, desça o próximo, repita.

**Lição:** Trabalhe da esquerda para a direita. Depois de cada divisão, subtraia para achar o que sobra, depois desça o próximo dígito.

**Exemplo resolvido:** 137 ÷ 4 → = 34 R 1

**Passos ensinados:**
1. Divida 13 por 4: 3 vezes (4 × 3 = 12), resto 1.
2. Desça o 7: 1 e 7 formam 17.
3. Divida 17 por 4: 4 vezes (4 × 4 = 16), resto 1.
4. 137 ÷ 4 = 34 R 1.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [brown-8] Dividir por um número de dois dígitos

**Resumo:** Estime usando um múltiplo redondo próximo.

**Lição:** Arredonde o divisor para um múltiplo de 10 próximo para estimar quantas vezes ele cabe, depois confira multiplicando.

**Exemplo resolvido:** 84 ÷ 21 → = 4

**Passos ensinados:**
1. 21 é próximo de 20. Quantos 20 cabem em 84, aproximadamente? Uns 4.
2. Confira: 21 × 4 = 84. Exato!
3. 84 ÷ 21 = 4.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [brown-9] Três dígitos ÷ dois dígitos, sem resto

**Resumo:** O processo completo da divisão longa, mais um dígito.

**Lição:** Estime quantas vezes o divisor cabe nos primeiros dígitos, multiplique, subtraia, depois desça o último dígito e repita.

**Exemplo resolvido:** 276 ÷ 23 → = 12

**Passos ensinados:**
1. Quantas vezes o 23 cabe em 27? Uma vez: 23 × 1 = 23.
2. 27 − 23 = 4. Desça o 6: 46.
3. Quantas vezes o 23 cabe em 46? Duas vezes: 23 × 2 = 46.
4. 276 ÷ 23 = 12.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 26s/questão.*

### [brown-10] Três dígitos ÷ dois dígitos, com resto

**Resumo:** O processo completo da divisão longa, com resto e tudo.

**Lição:** Mesmo processo de antes — estime, multiplique, subtraia, desça — mas dessa vez não vai dividir certinho, então termine com o que sobrar.

**Exemplo resolvido:** 287 ÷ 23 → = 12 R 11

**Passos ensinados:**
1. Quantas vezes o 23 cabe em 28? Uma vez: 23 × 1 = 23.
2. 28 − 23 = 5. Desça o 7: 57.
3. Quantas vezes o 23 cabe em 57? Duas vezes: 23 × 2 = 46. Sobra 57 − 46 = 11.
4. 287 ÷ 23 = 12 R 11.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 32s/questão.*

### [brown-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 10 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** 16 ÷ 2 → = 8

**Passos ensinados:**
1. 10 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 10 problemas · 80% de acerto · alvo 32s/questão.*

## Faixa Verde — Potências · Porcentagens · Proporção

*Domine os próprios números — potências, raízes, primos, porcentagens e proporção.*

### [green-1] O que significa uma potência

**Resumo:** Elevar ao quadrado: multiplicar um número por ele mesmo.

**Lição:** O numerozinho em cima conta quantas cópias são multiplicadas. 4² significa 4 × 4 — duas cópias do 4.

**Exemplo resolvido:** 4² → = 16

**Passos ensinados:**
1. 4² significa 4 × 4 — imagine um quadrado de 4 fileiras com 4 em cada uma.
2. Multiplique: 4 × 4 = 16. Por isso se chama 'elevar ao quadrado'.
3. 4² = 16.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 6s/questão.*

### [green-2] Cubos e potências maiores

**Resumo:** Mais cópias na multiplicação — incluindo as potências de 2 e de 10.

**Lição:** Vá da esquerda para a direita, uma multiplicação de cada vez. Potências de 10 são um atalho: o expoente conta os zeros.

**Exemplo resolvido:** 2⁴ → = 16

**Passos ensinados:**
1. 2⁴ são quatro cópias: 2 × 2 × 2 × 2.
2. Encadeie: 2 × 2 = 4, depois 4 × 2 = 8, depois 8 × 2 = 16.
3. Atalho para o 10: 10³ = 1 seguido de 3 zeros = 1000.
4. 2⁴ = 16.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [green-3] Raiz quadrada

**Resumo:** O contrário do quadrado — que número vezes ele mesmo dá isso?

**Lição:** √49 pergunta: que número ao quadrado dá 49? Saber os quadrados de cor torna as raízes instantâneas.

**Exemplo resolvido:** √49 → = 7

**Passos ensinados:**
1. Pergunte ao contrário: ? × ? = 49.
2. Teste seus quadrados: 6² = 36 é pouco, 7² = 49 encaixa.
3. √49 = 7.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 7s/questão.*

### [green-4] Raiz cúbica

**Resumo:** Desfazendo um cubo — mais as raízes quadradas maiores de revisão.

**Lição:** ∛125 pergunta: que número multiplicado três vezes dá 125? Vale decorar os cubos perfeitos 8, 27, 64, 125, ...

**Exemplo resolvido:** ∛125 → = 5

**Passos ensinados:**
1. Pergunte ao contrário: ? × ? × ? = 125.
2. Teste os cubos: 4³ = 64 é pouco, 5³ = 5 × 5 × 5 = 125 encaixa.
3. ∛125 = 5.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [green-5] Primos e fatores

**Resumo:** Encontre o menor primo que divide um número.

**Lição:** Um primo só divide por 1 e por ele mesmo: 2, 3, 5, 7, 11, ... Para abrir um número, teste os primos em ordem: é par? → 2. A soma dos algarismos dá múltiplo de 3? → 3. Termina em 0 ou 5? → 5. Depois teste o 7.

**Exemplo resolvido:** Menor fator primo de 51 → = 3

**Passos ensinados:**
1. 51 é par? Não — então o 2 está fora.
2. Some os algarismos: 5 + 1 = 6, múltiplo de 3 — então 3 divide 51.
3. Confira: 51 ÷ 3 = 17. Menor fator primo: 3.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [green-6] MDC — máximo divisor comum

**Resumo:** O maior número que divide os dois ao mesmo tempo.

**Lição:** Comece pelos maiores divisores do número menor e vá descendo — o primeiro que também dividir o outro número vence.

**Exemplo resolvido:** MDC(24, 36) → = 12

**Passos ensinados:**
1. Divisores de 24, do maior para o menor: 24, 12, 8, 6, ...
2. 24 divide 36? Não. E 12? Sim: 36 = 12 × 3.
3. MDC(24, 36) = 12.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [green-7] MMC — mínimo múltiplo comum

**Resumo:** O primeiro número que aparece nas duas tabuadas.

**Lição:** Liste os múltiplos do número maior e pare no primeiro que o número menor também divide.

**Exemplo resolvido:** MMC(6, 8) → = 24

**Passos ensinados:**
1. Múltiplos de 8: 8, 16, 24, ...
2. 6 divide 8? Não. 16? Não. 24? Sim: 24 ÷ 6 = 4.
3. MMC(6, 8) = 24.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [green-8] As porcentagens fáceis

**Resumo:** 10%, 20%, 25%, 50%, 75% — cada uma é uma fração simples disfarçada.

**Lição:** Porcento significa 'a cada 100'. As fáceis são frações: 50% = metade, 25% = um quarto, 10% = um décimo, 75% = três quartos, 20% = um quinto.

**Exemplo resolvido:** 25% de 80 → = 20

**Passos ensinados:**
1. 25% é um quarto — uma parte de 4, como na barra acima.
2. Um quarto de 80: 80 ÷ 4 = 20.
3. 25% de 80 = 20.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [green-9] Qualquer porcentagem

**Resumo:** Monte qualquer porcentagem com blocos de 10% e metades de 5%.

**Lição:** Ache 10% primeiro (divida por 10), depois empilhe: 30% = 3 blocos de 10%. Para um 5, some meio bloco.

**Exemplo resolvido:** 30% de 140 → = 42

**Passos ensinados:**
1. 10% de 140 = 14.
2. 30% são três desses: 14 × 3 = 42.
3. 30% de 140 = 42.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [green-10] Acréscimo e desconto

**Resumo:** Preços sobem 20%, promoções cortam 25% — calcule o valor novo.

**Lição:** Ache primeiro o valor da porcentagem, depois some (acréscimo) ou subtraia (desconto) do original.

**Exemplo resolvido:** 80 + 25% → = 100

**Passos ensinados:**
1. 25% de 80 = 80 ÷ 4 = 20.
2. É um acréscimo, então some: 80 + 20 = 100.
3. 80 + 25% = 100.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [green-11] Proporção: regra de três

**Resumo:** Duas razões em equilíbrio — ache a parte que falta.

**Lição:** Em a : b = c : x, descubra por quanto o a foi multiplicado para virar c — o mesmo fator transforma b em x.

**Exemplo resolvido:** 2 : 5 = 6 : x → x = 15

**Passos ensinados:**
1. De 2 para 6 o fator é 3 (2 × 3 = 6).
2. Aplique o mesmo fator ao 5: 5 × 3 = 15.
3. x = 15.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [green-12] Notação científica

**Resumo:** Números grandes escritos curtos: um algarismo, uma vírgula e uma potência de 10.

**Lição:** O expoente diz quantas casas a vírgula anda para a direita. Preencha as casas vazias com zeros.

**Exemplo resolvido:** 3.4 × 10³ → = 3400

**Passos ensinados:**
1. O expoente é 3 — ande com a vírgula 3 casas para a direita.
2. 3,4 → 34 → 340 → 3400.
3. 3,4 × 10³ = 3400.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [green-13] Domínio dos números, tudo misturado

**Resumo:** Todas as habilidades da Faixa Verde em um treino só — de potências a porcentagens, sem avisar qual vem.

**Lição:** A prova da faixa: potências, raízes, primos, MDC, MMC, porcentagens, proporção e notação científica, tudo embaralhado. Leia cada conta com atenção antes de responder.

**Exemplo resolvido:** 75% de 40 → = 30

**Passos ensinados:**
1. Primeiro identifique a habilidade — essa é uma porcentagem fácil.
2. 75% é três quartos: 40 ÷ 4 = 10, depois 10 × 3 = 30.
3. 75% de 40 = 30.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [green-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 12 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** 12² → = 144

**Passos ensinados:**
1. 12 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

## Faixa Preta — Frações · Decimais · Álgebra · Equações · Funções

*Seis graus, um para cada pilar da matemática pré-universitária.*

### [black-1] Frações · O que significa uma fração

**Resumo:** Uma fração é partes de um todo — veja, depois nomeie.

**Lição:** O número de baixo é em quantas partes iguais o todo foi dividido. O número de cima é quantas dessas partes você tem.

**Exemplo resolvido:** (diagrama) → = 3/8

**Passos ensinados:**
1. A barra está dividida em 8 partes iguais — esse é o número de baixo.
2. 3 dessas partes estão pintadas — esse é o número de cima.
3. Escrito como fração: 3/8.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-2] Frações · Frações equivalentes

**Resumo:** A mesma quantidade, escrita com números diferentes.

**Lição:** Multiplique o de cima e o de baixo pelo mesmo número e o valor da fração não muda.

**Exemplo resolvido:** 1/2 = ?/6 → = 3

**Passos ensinados:**
1. Para transformar meios em sextos, multiplique o de baixo por 3 (2 × 3 = 6).
2. Faça o mesmo com o de cima: 1 × 3 = 3.
3. 1/2 = 3/6.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [black-3] Frações · Simplificar frações

**Resumo:** Reduza uma fração para os menores números equivalentes.

**Lição:** Ache um número que divide certinho o de cima e o de baixo, depois divida os dois por ele.

**Exemplo resolvido:** 8/12 → = 2/3

**Passos ensinados:**
1. O 4 divide certinho o 8 e o 12.
2. Divida os dois por 4: 8 ÷ 4 = 2, e 12 ÷ 4 = 3.
3. 8/12 = 2/3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-4] Frações · Fração de um número

**Resumo:** Divida um número inteiro em partes fracionárias.

**Lição:** Divida o número pelo de baixo, depois multiplique pelo de cima.

**Exemplo resolvido:** 3/4 × 20 → = 15

**Passos ensinados:**
1. Divida 20 pelo número de baixo: 20 ÷ 4 = 5.
2. Multiplique pelo número de cima: 5 × 3 = 15.
3. 3/4 × 20 = 15.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-5] Frações · Somar frações, mesmo denominador

**Resumo:** Quando os de baixo são iguais, só some os de cima.

**Lição:** Se duas frações têm o mesmo número de baixo, some os números de cima e mantenha o de baixo igual.

**Exemplo resolvido:** 2/7 + 3/7 → = 5/7

**Passos ensinados:**
1. Os de baixo já são iguais: 7.
2. Some os de cima: 2 + 3 = 5.
3. 2/7 + 3/7 = 5/7.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-6] Frações · Subtrair frações, mesmo denominador

**Resumo:** Mesma ideia, só que subtraindo os de cima.

**Lição:** Se duas frações têm o mesmo número de baixo, subtraia os números de cima e mantenha o de baixo igual.

**Exemplo resolvido:** 5/8 - 2/8 → = 3/8

**Passos ensinados:**
1. Os de baixo já são iguais: 8.
2. Subtraia os de cima: 5 - 2 = 3.
3. 5/8 - 2/8 = 3/8.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-7] Frações · Somar frações, denominadores diferentes

**Resumo:** Deixe os de baixo iguais primeiro, depois some como antes.

**Lição:** Transforme uma fração em uma equivalente que tenha o mesmo número de baixo da outra, depois some os de cima.

**Exemplo resolvido:** 1/2 + 1/4 → = 3/4

**Passos ensinados:**
1. 4 é o dobro de 2, então transforme 1/2 em quartos: 1 × 2 = 2, então 1/2 = 2/4.
2. Agora os dois de baixo são 4: 2/4 + 1/4.
3. Some os de cima: 2 + 1 = 3.
4. 1/2 + 1/4 = 3/4.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-8] Frações · Multiplicar frações

**Resumo:** Multiplique direto — cima vezes cima, baixo vezes baixo.

**Lição:** Aqui não precisa igualar os denominadores — só multiplique os números de cima entre si, depois os de baixo.

**Exemplo resolvido:** 2/3 × 3/4 → = 6/12

**Passos ensinados:**
1. Multiplique os de cima: 2 × 3 = 6.
2. Multiplique os de baixo: 3 × 4 = 12.
3. 2/3 × 3/4 = 6/12.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-9] Frações · Dividir frações

**Resumo:** Inverta a segunda fração, depois multiplique.

**Lição:** Dividir por uma fração é o mesmo que multiplicar por ela de cabeça para baixo.

**Exemplo resolvido:** 1/2 ÷ 1/4 → = 4/2

**Passos ensinados:**
1. Inverta 1/4 de cabeça para baixo: 4/1.
2. Multiplique: 1/2 × 4/1.
3. De cima: 1 × 4 = 4. De baixo: 2 × 1 = 2.
4. 1/2 ÷ 1/4 = 4/2.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-10] Frações · Número misto para fração imprópria

**Resumo:** Transforme um inteiro mais fração em uma única fração.

**Lição:** Multiplique o número inteiro pelo de baixo, some o de cima, e mantenha o mesmo de baixo.

**Exemplo resolvido:** 2 1/3 → = 7/3

**Passos ensinados:**
1. Multiplique o número inteiro pelo de baixo: 2 × 3 = 6.
2. Some o de cima: 6 + 1 = 7.
3. Mantenha o mesmo de baixo: 3.
4. 2 1/3 = 7/3.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-11] Decimais · O que significa um decimal

**Resumo:** Um decimal é uma fração de dez, escrita de um jeito novo.

**Lição:** O dígito depois do ponto decimal conta os décimos — quantas das 10 partes iguais você tem.

**Exemplo resolvido:** (diagrama) → = 0.3

**Passos ensinados:**
1. A barra está dividida em 10 partes iguais — décimos.
2. 3 dessas partes estão pintadas.
3. Escrito como decimal: 0.3.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-12] Decimais · Frações de dez como decimais

**Resumo:** Uma fração com 10 embaixo se converte direto.

**Lição:** O número de cima de uma fração de décimos vira o dígito decimal — sem precisar calcular.

**Exemplo resolvido:** 7/10 → = 0.7

**Passos ensinados:**
1. 7/10 significa 7 décimos.
2. Escreva o 7 logo depois do ponto decimal.
3. 7/10 = 0.7.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [black-13] Decimais · Números mistos com décimos como decimais

**Resumo:** O número inteiro fica, a fração vira a parte decimal.

**Lição:** Mantenha o número inteiro como está, e transforme a fração de décimos no dígito decimal depois do ponto.

**Exemplo resolvido:** 2 4/10 → = 2.4

**Passos ensinados:**
1. O número inteiro 2 fica igual.
2. 4/10 vira o dígito decimal: .4.
3. 2 4/10 = 2.4.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-14] Decimais · Somar decimais, sem 'vai um'

**Resumo:** Some os números inteiros e os décimos separadamente.

**Lição:** Alinhe os pontos decimais, depois some os números inteiros e os dígitos dos décimos separadamente.

**Exemplo resolvido:** 2.3 + 1.4 → = 3.7

**Passos ensinados:**
1. Some os inteiros: 2 + 1 = 3.
2. Some os décimos: 3 + 4 = 7.
3. 2.3 + 1.4 = 3.7.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-15] Decimais · Somar decimais, com 'vai um'

**Resumo:** Quando os décimos passam de 9, o 1 vai para os inteiros.

**Lição:** Some os décimos primeiro. Se der 10 ou mais, leve o 1 para a soma dos inteiros.

**Exemplo resolvido:** 2.7 + 1.6 → = 4.3

**Passos ensinados:**
1. Some os décimos: 7 + 6 = 13. Escreva o 3 e leve o 1.
2. Some os inteiros mais o que veio: 2 + 1 + 1 = 4.
3. 2.7 + 1.6 = 4.3.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-16] Decimais · Subtrair decimais, sem 'emprestar'

**Resumo:** Subtraia os números inteiros e os décimos separadamente.

**Lição:** Alinhe os pontos decimais, depois subtraia os números inteiros e os dígitos dos décimos separadamente.

**Exemplo resolvido:** 5.8 - 2.3 → = 3.5

**Passos ensinados:**
1. Subtraia os inteiros: 5 - 2 = 3.
2. Subtraia os décimos: 8 - 3 = 5.
3. 5.8 - 2.3 = 3.5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-17] Decimais · Subtrair decimais, com 'emprestar'

**Resumo:** Quando o décimo de cima é menor, empreste dos inteiros.

**Lição:** Se o décimo de cima for menor que o de baixo, empreste 1 inteiro (que vale 10 décimos) antes de subtrair.

**Exemplo resolvido:** 5.2 - 2.6 → = 2.6

**Passos ensinados:**
1. 2 é menor que 6, então empreste 1 inteiro: 12 - 6 = 6 décimos.
2. Os inteiros: 5 - 1 - 2 = 2.
3. 5.2 - 2.6 = 2.6.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-18] Decimais · Multiplicar decimais por 10 e por 100

**Resumo:** O ponto decimal se desloca para a direita.

**Lição:** Multiplicar por 10 desloca o ponto decimal uma casa para a direita. Multiplicar por 100 desloca duas casas.

**Exemplo resolvido:** 3.4 × 10 → = 34

**Passos ensinados:**
1. ×10 desloca o ponto uma casa para a direita.
2. 3.4 vira 34.
3. 3.4 × 10 = 34.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [black-18b] Decimais · Multiplicar decimais por inteiros

**Resumo:** Multiplique os décimos como inteiros, depois devolva o ponto.

**Lição:** Pense no decimal como décimos: 1.3 é 13 décimos. Multiplique, e a resposta também estará em décimos.

**Exemplo resolvido:** 1.3 × 4 → = 5.2

**Passos ensinados:**
1. 1.3 são 13 décimos.
2. Multiplique: 13 × 4 = 52 décimos.
3. 52 décimos são 5.2.
4. 1.3 × 4 = 5.2.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-19] Decimais · Dividir um número inteiro por 10

**Resumo:** O ponto decimal volta uma casa para a esquerda.

**Lição:** Dividir por 10 desloca o ponto decimal uma casa para a esquerda — o último dígito vira o décimo.

**Exemplo resolvido:** 47 ÷ 10 → = 4.7

**Passos ensinados:**
1. ÷10 desloca o ponto uma casa para a esquerda.
2. 47 vira 4.7.
3. 47 ÷ 10 = 4.7.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-19b] Decimais · Dividir decimais por inteiros

**Resumo:** Divida os décimos como inteiros, depois devolva o ponto.

**Lição:** Transforme o decimal em décimos, divida, e a resposta sai em décimos.

**Exemplo resolvido:** 5.2 ÷ 4 → = 1.3

**Passos ensinados:**
1. 5.2 são 52 décimos.
2. Divida: 52 ÷ 4 = 13 décimos.
3. 13 décimos são 1.3.
4. 5.2 ÷ 4 = 1.3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-19c] Decimais · O que significam os centésimos

**Resumo:** Duas casas depois do ponto — 5/100 é 0.05, não 0.5.

**Lição:** A segunda casa depois do ponto conta centésimos. Uma fração sobre 100 preenche exatamente duas casas — complete com zero se o número for pequeno.

**Exemplo resolvido:** 37/100 → = 0.37

**Passos ensinados:**
1. 37 centésimos preenche as duas casas depois do ponto: .37.
2. Sem parte inteira, fica 0.37. (E 5/100 seria 0.05 — complete o zero!)
3. 37/100 = 0.37.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-19d] Decimais · Somando com centésimos

**Resumo:** Alinhe os pontos — centésimos têm 'vai um' como as unidades.

**Lição:** Pense em centésimos: 1.25 são 125 centésimos. Some como inteiros, depois separe o total de volta no ponto.

**Exemplo resolvido:** 1.25 + 2.34 → = 3.59

**Passos ensinados:**
1. Em centésimos: 125 + 234 = 359.
2. 359 centésimos são 3 inteiros e 59 centésimos.
3. 1.25 + 2.34 = 3.59.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-20] Decimais · Arredondar decimais

**Resumo:** Arredonde para o inteiro mais próximo usando o dígito dos décimos.

**Lição:** Olhe o dígito dos décimos. Se for 5 ou mais, arredonde para cima. Se for menos de 5, arredonde para baixo.

**Exemplo resolvido:** 3.7 → = 4

**Passos ensinados:**
1. O dígito dos décimos é 7, que é 5 ou mais.
2. Arredonde para cima: 3 vira 4.
3. 3.7 arredonda para 4.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-21] Álgebra · O que significa uma variável

**Resumo:** Uma variável é só uma caixa que guarda um número.

**Lição:** Uma letra como x representa um número — às vezes é um mistério, mas aqui já foi revelado. Leia a figura e some o que ela vale.

**Exemplo resolvido:** (diagrama) → = 5

**Passos ensinados:**
1. A caixa está rotulada x, e foi revelado que ela guarda 3.
2. Some as unidades soltas: 3 + 2 = 5.
3. x + 2 = 5, quando x = 3.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-22] Álgebra · Avaliando expressões

**Resumo:** Troque a letra pelo número, depois faça a conta.

**Lição:** Depois de saber quanto vale x, troque cada x na expressão por esse número e resolva normalmente.

**Exemplo resolvido:** 3x + 2, x = 4 → = 14

**Passos ensinados:**
1. Troque x pelo valor: 3 × 4.
2. Multiplique: 3 × 4 = 12.
3. Some o resto: 12 + 2 = 14.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-23] Álgebra · Ordem das operações

**Resumo:** Multiplique e divida antes de somar ou subtrair.

**Lição:** A matemática se lê da esquerda para a direita, mas multiplicação e divisão sempre acontecem antes de soma e subtração — e o que está dentro de parênteses acontece primeiro de tudo.

**Exemplo resolvido:** 4 + 3 × 2 → = 10

**Passos ensinados:**
1. Multiplique primeiro: 3 × 2 = 6.
2. Depois some: 4 + 6 = 10.
3. 4 + 3 × 2 = 10, não 14 — multiplicação sempre vem primeiro.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-24] Álgebra · Números negativos na reta numérica

**Resumo:** Os números também podem ficar abaixo de zero.

**Lição:** Cada salto para a esquerda depois do zero continua contando — zero não é o fim da reta. Um sinal de menos só significa 'a direção oposta.'

**Exemplo resolvido:** (diagrama) → = -3

**Passos ensinados:**
1. Comece em 2 e dê 5 saltos para a esquerda, passando do zero.
2. Cada salto depois do zero continua contando: 0, -1, -2, -3.
3. Você cai em -3.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-25] Álgebra · Somando números inteiros, mesmo sinal

**Resumo:** Mesmo sinal? Some os tamanhos e mantenha o sinal.

**Lição:** Quando os dois números têm o mesmo sinal, some os tamanhos normalmente, depois dê à resposta esse mesmo sinal.

**Exemplo resolvido:** -4 + (-7) → = -11

**Passos ensinados:**
1. Os dois números são negativos — mesmo sinal.
2. Some os tamanhos: 4 + 7 = 11.
3. Mantenha o sinal negativo: -4 + (-7) = -11.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-26] Álgebra · Somando números inteiros, sinais diferentes

**Resumo:** Sinais diferentes? Subtraia os tamanhos, mantenha o sinal do maior.

**Lição:** Quando os sinais são diferentes, os números se cancelam em parte — ache a diferença entre os tamanhos, depois dê à resposta o sinal do número que era maior.

**Exemplo resolvido:** -8 + 3 → = -5

**Passos ensinados:**
1. Sinais diferentes — ache a diferença de tamanho: 8 - 3 = 5.
2. O 8 é maior e é negativo, então a resposta continua negativa.
3. -8 + 3 = -5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-27] Álgebra · Subtraindo números inteiros

**Resumo:** Subtrair é o mesmo que somar o oposto.

**Lição:** Toda subtração pode ser reescrita como somar um negativo — inverta o sinal do segundo número, depois some usando as regras que você já conhece.

**Exemplo resolvido:** 4 - 9 → = -5

**Passos ensinados:**
1. Transforme a subtração em soma do oposto: 4 - 9 vira 4 + (-9).
2. Agora some como antes: 4 + (-9) = -5.
3. 4 - 9 = -5.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-28] Álgebra · Combinando termos semelhantes

**Resumo:** Mesma variável? Só some ou subtraia os coeficientes.

**Lição:** Termos com exatamente a mesma variável são 'termos semelhantes' — o x só acompanha enquanto você soma ou subtrai os números na frente dele.

**Exemplo resolvido:** 5x + 3x → = 8

**Passos ensinados:**
1. Os dois termos têm x, então são 'termos semelhantes.'
2. Some os coeficientes: 5 + 3 = 8.
3. 5x + 3x = 8x.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-29] Álgebra · A propriedade distributiva

**Resumo:** Multiplique o número de fora por tudo que está dentro dos parênteses.

**Lição:** É o mesmo truque de dividir 23 × 4 em 20 × 4 + 3 × 4 lá da Faixa Roxa — só que agora uma variável ocupa o lugar de parte da soma.

**Exemplo resolvido:** 3(x + 4), x = 2 → = 18

**Passos ensinados:**
1. Multiplique 3 por cada parte de dentro: 3 × x e 3 × 4.
2. Substitua x = 2 primeiro: 3 × (2 + 4) = 3 × 6.
3. 3 × 6 = 18.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-30] Álgebra · Expressões de várias etapas

**Resumo:** Distribua, depois termine o resto — todas as habilidades de Álgebra em um problema.

**Lição:** Uma frase como 'quatro vezes a soma de um número e 3, menos 5' vira 4(x + 3) - 5. Depois de escrita como expressão, avaliá-la usa tudo desta faixa: substituição, ordem das operações, números negativos e distributiva.

**Exemplo resolvido:** 4(x + 3) - 5, x = -2 → = -1

**Passos ensinados:**
1. Substitua x = -2 dentro dos parênteses: 4(-2 + 3) - 5.
2. Some dentro primeiro: -2 + 3 = 1.
3. Distribua: 4 × 1 = 4, depois termine: 4 - 5 = -1.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 24s/questão.*

### [black-31] Equações · O que significa uma equação

**Resumo:** Uma equação é uma balança — os dois lados têm que ficar iguais.

**Lição:** A balança está nivelada porque os dois lados pesam o mesmo. Descubra quanto x precisa valer para manter o equilíbrio.

**Exemplo resolvido:** (diagrama) → = 4

**Passos ensinados:**
1. O lado esquerdo tem x mais 2 unidades. O lado direito tem 6 unidades.
2. Para a balança ficar equilibrada, x precisa cobrir a diferença: 6 - 2 = 4.
3. x = 4, pois 4 + 2 = 6.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-32] Equações · Equações de um passo: soma e subtração

**Resumo:** Desfaça a operação — subtraia o que foi somado, some o que foi subtraído.

**Lição:** O que foi feito com x, faça o oposto nos dois lados para deixar x sozinho.

**Exemplo resolvido:** x + 5 = 12 → x = 7

**Passos ensinados:**
1. x tem 5 somado a ele. Faça o oposto: subtraia 5 dos dois lados.
2. 12 - 5 = 7.
3. x = 7.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-33] Equações · Equações de um passo: multiplicação e divisão

**Resumo:** Desfaça a multiplicação com divisão, e a divisão com multiplicação.

**Lição:** x está sendo multiplicado por 4 — divida os dois lados por 4 para desfazer isso.

**Exemplo resolvido:** 4x = 20 → x = 5

**Passos ensinados:**
1. x é multiplicado por 4. Faça o oposto: divida os dois lados por 4.
2. 20 ÷ 4 = 5.
3. x = 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-34] Equações · Equações de dois passos

**Resumo:** Desfaça a soma ou subtração primeiro, depois a multiplicação ou divisão.

**Lição:** Trabalhe de trás para frente pela ordem das operações: desfaça a parte de +/- primeiro, depois a de ×/÷.

**Exemplo resolvido:** 3x + 4 = 19 → x = 5

**Passos ensinados:**
1. Desfaça o +4 primeiro: subtraia 4 dos dois lados. 19 - 4 = 15.
2. Agora desfaça o ×3: divida os dois lados por 3. 15 ÷ 3 = 5.
3. x = 5.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-35] Equações · Equações com soluções negativas

**Resumo:** Às vezes x precisa ser negativo para equilibrar a balança.

**Lição:** Resolva do mesmo jeito de antes — a resposta só acaba ficando abaixo de zero dessa vez.

**Exemplo resolvido:** 2x + 9 = 3 → x = -3

**Passos ensinados:**
1. Desfaça o +9 primeiro: 3 - 9 = -6.
2. Agora desfaça o ×2: -6 ÷ 2 = -3.
3. x = -3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-36] Equações · Variável nos dois lados

**Resumo:** Reúna os termos com x em um lado antes de resolver.

**Lição:** Quando x aparece nos dois lados, subtraia o termo com x menor dos dois lados primeiro — depois é uma equação normal de dois passos.

**Exemplo resolvido:** 5x + 2 = 2x + 11 → x = 3

**Passos ensinados:**
1. Subtraia 2x dos dois lados: 5x - 2x = 3x, e 2x - 2x = 0.
2. Agora é 3x + 2 = 11. Desfaça o +2: 11 - 2 = 9.
3. Desfaça o ×3: 9 ÷ 3 = 3. x = 3.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-37] Equações · Equações com distributiva

**Resumo:** Distribua primeiro, depois resolva normalmente.

**Lição:** Multiplique pelos parênteses primeiro — a mesma propriedade distributiva da Álgebra — depois é uma equação normal de dois passos.

**Exemplo resolvido:** 3(x + 2) = 21 → x = 5

**Passos ensinados:**
1. Distribua o 3: 3x + 6 = 21.
2. Desfaça o +6: 21 - 6 = 15.
3. Desfaça o ×3: 15 ÷ 3 = 5. x = 5.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-38] Equações · Combinando termos semelhantes primeiro

**Resumo:** Simplifique cada lado antes de começar a desfazer as operações.

**Lição:** Se um lado tem mais de um termo com x, combine-os em um único termo primeiro — o mesmo truque de combinar termos semelhantes da Álgebra.

**Exemplo resolvido:** 4x + 2x - 3 = 15 → x = 3

**Passos ensinados:**
1. Combine os termos com x: 4x + 2x = 6x.
2. Agora é 6x - 3 = 15. Desfaça o -3: 15 + 3 = 18.
3. Desfaça o ×6: 18 ÷ 6 = 3. x = 3.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-39] Equações · Distributiva com variável nos dois lados

**Resumo:** Distribua primeiro, depois reúna os termos com x.

**Lição:** Distribua os parênteses primeiro, depois trate como uma equação com variável nos dois lados.

**Exemplo resolvido:** 3(x + 2) = 4x + 4 → x = 2

**Passos ensinados:**
1. Distribua o 3: 3x + 6 = 4x + 4.
2. Subtraia 3x dos dois lados: 6 = x + 4.
3. Desfaça o +4: 6 - 4 = 2. x = 2.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [black-40] Equações · Equações de múltiplas etapas

**Resumo:** Distribua, combine, depois resolva — todas as habilidades de Equações em um problema.

**Lição:** Isso reúne tudo desta faixa: distribua os parênteses, simplifique cada lado, reúna os termos com x em um lado, depois desfaça os passos restantes.

**Exemplo resolvido:** 2(x + 3) - 4 = 3x - 3 → x = 5

**Passos ensinados:**
1. Distribua o 2: 2x + 6 - 4 = 3x - 3.
2. Simplifique o lado esquerdo: 2x + 2 = 3x - 3.
3. Subtraia 2x dos dois lados: 2 = x - 3. Desfaça o -3: 2 + 3 = 5. x = 5.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 28s/questão.*

### [black-41] Funções · O que significa uma função

**Resumo:** Uma função é uma máquina — coloca um número, sai outro número.

**Lição:** A máquina sempre aplica a mesma regra ao que entra. Leia a regra, aplique ao valor de entrada e descubra a saída.

**Exemplo resolvido:** (diagrama) → = 6

**Passos ensinados:**
1. A regra da máquina é × 2 — ela dobra o que entra.
2. Coloque 3: 3 × 2 = 6.
3. A saída é 6.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-42] Funções · Notação de função: avaliando f(x)

**Resumo:** f(x) só significa "o resultado quando você coloca x."

**Lição:** f(x) é só uma versão rotulada da máquina de antes — troque cada x pelo número dado e resolva normalmente.

**Exemplo resolvido:** f(x) = 3x + 2; f(4) → = 14

**Passos ensinados:**
1. Troque x por 4: f(4) = 3 × 4 + 2.
2. Multiplique: 3 × 4 = 12.
3. Some: 12 + 2 = 14. Então f(4) = 14.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-43] Funções · Avaliando f(x) com entradas negativas

**Resumo:** A mesma regra funciona não importa o sinal de x.

**Lição:** Substitua o valor negativo do mesmo jeito — só preste atenção nos sinais enquanto multiplica e soma.

**Exemplo resolvido:** f(x) = 2x + 5; f(-4) → = -3

**Passos ensinados:**
1. Troque x por -4: f(-4) = 2 × (-4) + 5.
2. Multiplique: 2 × (-4) = -8.
3. Some: -8 + 5 = -3. Então f(-4) = -3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [black-44] Funções · O que significa inclinação

**Resumo:** Inclinação é o quão íngreme uma reta é — subida sobre avanço.

**Lição:** Conte quantos degraus a escada sobe (a subida) e quantos ela avança (o avanço). Inclinação é subida sobre avanço.

**Exemplo resolvido:** (diagrama) → = 3/4

**Passos ensinados:**
1. Conte a subida (degraus para cima): 3.
2. Conte o avanço (degraus para o lado): 4.
3. Inclinação = subida/avanço = 3/4.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-45] Funções · Calculando a inclinação a partir de dois pontos

**Resumo:** Dois pontos são suficientes para achar a inclinação entre eles.

**Lição:** A subida é quanto y muda entre os dois pontos; o avanço é quanto x muda. Inclinação continua sendo subida sobre avanço.

**Exemplo resolvido:** (1, 2), (3, 5) → = 3/2

**Passos ensinados:**
1. Ache a subida: mudança em y = 5 - 2 = 3.
2. Ache o avanço: mudança em x = 3 - 1 = 2.
3. Inclinação = subida/avanço = 3/2.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-46] Funções · Achando o intercepto em y

**Resumo:** O intercepto em y é só o termo constante.

**Lição:** Uma reta cruza o eixo y exatamente onde x = 0. Para f(x) = ax + b, isso é sempre só b — sem precisar calcular depois que você vê o padrão.

**Exemplo resolvido:** f(x) = 3x + 7; f(0) → = 7

**Passos ensinados:**
1. O intercepto em y é onde a reta cruza o eixo y — isso acontece quando x = 0.
2. f(0) = 3 × 0 + 7 = 7.
3. O intercepto em y é 7 — é sempre só o termo constante.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [black-47] Funções · Achando o intercepto em x (o zero)

**Resumo:** O zero é onde a função cruza o eixo x — resolva como qualquer equação.

**Lição:** O intercepto em x (ou "zero") de uma função é a entrada que faz a saída ser 0. É exatamente a mesma habilidade de resolver uma equação da faixa passada — só iguale a função a 0 e resolva para x.

**Exemplo resolvido:** 2x - 8 = 0 → x = 4

**Passos ensinados:**
1. É onde f(x) = 2x - 8 cruza o zero — resolva como qualquer equação.
2. Desfaça o -8: some 8 nos dois lados. 0 + 8 = 8.
3. Agora é 2x = 8. Desfaça o ×2: 8 ÷ 2 = 4. x = 4.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [black-48] Funções · O que significa uma função quadrática

**Resumo:** Elevar ao quadrado deixa entradas negativas positivas — é isso que forma o U.

**Lição:** Em f(x) = x², tanto uma entrada positiva quanto a negativa correspondente dão a mesma saída, já que elevar ao quadrado remove o sinal. Marcando várias entradas, forma-se uma curva em U chamada parábola.

**Exemplo resolvido:** f(x) = x²; f(3) → = 9

**Passos ensinados:**
1. Elevar um número negativo ao quadrado dá um resultado positivo: (-2)² = 4, igual a 2² = 4.
2. Por isso o gráfico curva para cima nos dois lados — tem formato de U, chamado de parábola.
3. f(3) = 3² = 9.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-49] Funções · Avaliando funções quadráticas

**Resumo:** Eleve ao quadrado primeiro, depois multiplique, depois some — a ordem das operações continua valendo.

**Lição:** Uma quadrática completa tem três partes — um termo ao quadrado, um termo com x, e uma constante. Substitua e siga a ordem das operações como em qualquer expressão.

**Exemplo resolvido:** f(x) = x² + 3x - 4; f(2) → = 6

**Passos ensinados:**
1. Troque x por 2: f(2) = 2² + 3 × 2 - 4.
2. Eleve ao quadrado primeiro: 2² = 4. Depois multiplique: 3 × 2 = 6.
3. Some tudo: 4 + 6 - 4 = 6.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-50] Funções · Combinando duas funções

**Resumo:** Avalie cada função separadamente, depois some os resultados — todas as habilidades de Funções em um problema.

**Lição:** f e g são duas máquinas diferentes. Passe a mesma entrada por cada uma separadamente, depois combine as saídas — isso reúne avaliação linear e quadrática de toda essa faixa.

**Exemplo resolvido:** f(x) = 2x + 1, g(x) = x² - 3; f(3) + g(3) → = 13

**Passos ensinados:**
1. Avalie f(3): f(3) = 2 × 3 + 1 = 7.
2. Avalie g(3): g(3) = 3² - 3 = 9 - 3 = 6.
3. Some os resultados: 7 + 6 = 13.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 28s/questão.*

### [black-51] Pré-Cálculo · O que significa fatorar

**Resumo:** Multiplicar dois binômios preenche um retângulo com quatro partes.

**Lição:** A área do retângulo inteiro é x² mais as duas faixas do meio mais o cantinho — some as faixas do meio para achar o termo x combinado.

**Exemplo resolvido:** (diagrama) → = 7

**Passos ensinados:**
1. As duas partes do meio são 3x e 4x — juntas elas se combinam em um único termo x.
2. 3x + 4x = 7x.
3. (x + 3)(x + 4) = x² + 7x + 12.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-52] Pré-Cálculo · Fatorando trinômios: achando o par

**Resumo:** Ache dois números que multiplicam para c e somam para b.

**Lição:** Isso é o inverso do modelo de área: dado x² - bx + c, ache os dois números cujo produto é c e cuja soma é b.

**Exemplo resolvido:** x² - 7x + 12 → = 3, 4

**Passos ensinados:**
1. Procure dois números que multiplicam para 12: 3 × 4 = 12.
2. Confira que eles também somam 7: 3 + 4 = 7.
3. x² - 7x + 12 = (x - 3)(x - 4).

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 19s/questão.*

### [black-53] Pré-Cálculo · Resolvendo equações quadráticas por fatoração

**Resumo:** Fatore primeiro, depois cada parte separadamente é igual a zero.

**Lição:** Se duas coisas se multiplicam para dar zero, pelo menos uma delas precisa ser zero. Fatore a equação, depois iguale cada fator a zero separadamente.

**Exemplo resolvido:** x² - 7x + 12 = 0 → x = 3, 4

**Passos ensinados:**
1. Fatore: x² - 7x + 12 = (x - 3)(x - 4).
2. Para o produto ser zero, um fator precisa ser zero: x - 3 = 0 ou x - 4 = 0.
3. x = 3 ou x = 4.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 21s/questão.*

### [black-54] Pré-Cálculo · A fórmula de Bhaskara

**Resumo:** x = (b ± √(b² - 4c)) / 2 — uma fórmula que sempre funciona.

**Lição:** Fatorar nem sempre é fácil, mas essa fórmula sempre resolve x² - bx + c = 0, sem precisar adivinhar.

**Exemplo resolvido:** x² - 7x + 12 = 0 → x = 3, 4

**Passos ensinados:**
1. Aqui b = 7 e c = 12. Calcule o discriminante: b² - 4c = 49 - 48 = 1.
2. √1 = 1, então x = (7 ± 1) / 2.
3. x = 8/2 = 4, ou x = 6/2 = 3.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 26s/questão.*

### [black-55] Pré-Cálculo · Completando o quadrado

**Resumo:** Some (b/2)² para transformar x² + bx em um quadrado perfeito.

**Lição:** Pegue metade do coeficiente de x e eleve ao quadrado — essa é sempre a constante que transforma x² + bx em um trinômio quadrado perfeito.

**Exemplo resolvido:** x² + 6x + ___ → = 9

**Passos ensinados:**
1. Pegue metade do coeficiente de x: 6 ÷ 2 = 3.
2. Eleve ao quadrado: 3² = 9.
3. x² + 6x + 9 = (x + 3)², um quadrado perfeito.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-56] Pré-Cálculo · O discriminante

**Resumo:** b² - 4c diz quantas raízes reais existem.

**Lição:** O discriminante é a parte dentro da raiz quadrada na fórmula de Bhaskara. Positivo significa duas raízes reais, zero significa uma raiz repetida, negativo significa nenhuma raiz real.

**Exemplo resolvido:** x² - 5x + 3 → = 13

**Passos ensinados:**
1. b = 5, c = 3. Eleve b ao quadrado: 5² = 25.
2. Multiplique: 4 × 3 = 12.
3. Discriminante = 25 - 12 = 13 — positivo, então existem duas raízes reais.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-57] Pré-Cálculo · Simplificando raízes quadradas

**Resumo:** Tire o maior fator quadrado perfeito de dentro da raiz.

**Lição:** Divida o número dentro da raiz em um quadrado perfeito vezes o que sobra, depois tire a raiz do quadrado perfeito para fora.

**Exemplo resolvido:** √50 → = 5√2

**Passos ensinados:**
1. 50 = 25 × 2, e 25 é um quadrado perfeito: 5² = 25.
2. Tire o 5 de dentro da raiz: √50 = 5√2.
3. 5√2 já está simplificado — 2 não tem mais fatores quadrados.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [black-58] Pré-Cálculo · Propriedades das potências

**Resumo:** Multiplicar potências de mesma base soma os expoentes; dividir subtrai.

**Lição:** Quando a base é a mesma, multiplicar significa somar os expoentes, e dividir significa subtraí-los — sem precisar expandir nada.

**Exemplo resolvido:** x⁵ × x³ = xⁿ → = 8

**Passos ensinados:**
1. Mesma base (x), então some os expoentes: 5 + 3 = 8.
2. x⁵ × x³ = x⁸.
3. n = 8.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [black-59] Pré-Cálculo · Sistemas de equações lineares

**Resumo:** Some as equações para cancelar uma variável.

**Lição:** Quando uma equação tem +y e a outra tem -y, somá-las direto cancela o y completamente, deixando uma equação de um passo só para x.

**Exemplo resolvido:** x + y = 10, x - y = 4 → x, y = 7, 3

**Passos ensinados:**
1. Some as duas equações: (x + y) + (x - y) = 10 + 4, então 2x = 14.
2. x = 14 ÷ 2 = 7.
3. Substitua de volta: 7 + y = 10, então y = 3.

*Maestria: 9 página(s) de 12 problemas · 80% de acerto · alvo 23s/questão.*

### [black-60] Pré-Cálculo · Reorganizando, fatorando e resolvendo

**Resumo:** Coloque tudo de um lado primeiro, depois fatore e resolva — todas as habilidades de Pré-Cálculo em um problema.

**Lição:** Isso reúne tudo desta faixa: reorganize na forma padrão, fatore o trinômio, depois aplique a propriedade do produto zero.

**Exemplo resolvido:** x² - 7x = -12 → x = 3, 4

**Passos ensinados:**
1. Some 12 dos dois lados: x² - 7x + 12 = 0.
2. Fatore: (x - 3)(x - 4) = 0.
3. x = 3 ou x = 4.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 30s/questão.*

### [black-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 64 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** (diagrama) → = 1/7

**Passos ensinados:**
1. 64 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 64 problemas · 80% de acerto · alvo 30s/questão.*

## Faixa Vermelha — Geometria · Trigonometria

*Formas, espaço e ângulos — do perímetro ao seno e cosseno.*

### [red-1] Geometria Plana · Perímetro

**Resumo:** Dê a volta na figura — o perímetro é a distância total.

**Lição:** Um retângulo tem duas larguras e duas alturas. Some uma de cada, depois dobre.

**Exemplo resolvido:** Perímetro do retângulo 5 × 8 → = 26

**Passos ensinados:**
1. Uma largura mais uma altura: 5 + 8 = 13.
2. Cada lado aparece duas vezes, então dobre: 13 × 2 = 26.
3. Perímetro = 26.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [red-2] Geometria Plana · Área do retângulo

**Resumo:** Linhas vezes colunas — quantos quadradinhos cabem dentro.

**Lição:** A área conta quadradinhos. Um retângulo 7 × 9 tem 7 fileiras de 9 quadradinhos.

**Exemplo resolvido:** Área do retângulo 7 × 9 → = 63

**Passos ensinados:**
1. 7 fileiras, 9 quadradinhos em cada uma.
2. Multiplique: 7 × 9 = 63.
3. Área = 63.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [red-3] Geometria Plana · Área do triângulo

**Resumo:** Metade de um retângulo: base vezes altura, dividido por 2.

**Lição:** Todo triângulo é metade de algum retângulo. Multiplique base × altura, depois divida por 2.

**Exemplo resolvido:** Triângulo: base 10, altura 6 — área? → = 30

**Passos ensinados:**
1. O retângulo inteiro seria 10 × 6 = 60.
2. O triângulo é a metade: 60 ÷ 2 = 30.
3. Área = 30.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [red-4] Geometria Plana · Área do trapézio

**Resumo:** Tire a média das duas bases, depois multiplique pela altura.

**Lição:** Um trapézio tem uma base menor e uma maior. A área é a base média vezes a altura.

**Exemplo resolvido:** Trapézio: bases 4 e 8, altura 5 — área? → = 30

**Passos ensinados:**
1. Média das bases: (4 + 8) ÷ 2 = 6.
2. Multiplique pela altura: 6 × 5 = 30.
3. Área = 30.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-5] Geometria Plana · Ângulos do triângulo

**Resumo:** Os três ângulos sempre somam 180°.

**Lição:** Não importa o formato do triângulo, os ângulos somam 180°. Some os dois que você conhece e subtraia de 180.

**Exemplo resolvido:** Ângulos do triângulo: 50°, 60°, x° → x = 70

**Passos ensinados:**
1. Some os ângulos conhecidos: 50 + 60 = 110.
2. Subtraia de 180: 180 − 110 = 70.
3. x = 70°.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [red-6] Geometria Plana · Complementares e suplementares

**Resumo:** Pares que completam 90° ou 180°.

**Lição:** Ângulos complementares completam um ângulo reto (90°). Suplementares completam uma linha reta (180°). Subtraia o ângulo conhecido do total.

**Exemplo resolvido:** x + 120° = 180° → x = 60

**Passos ensinados:**
1. Os dois ângulos formam uma linha reta: 180° no total.
2. Subtraia o conhecido: 180 − 120 = 60.
3. x = 60°.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [red-7] Geometria Plana · Pitágoras: a hipotenusa

**Resumo:** Catetos ao quadrado, somados, depois a raiz.

**Lição:** No triângulo retângulo, a² + b² = c². Eleve os catetos ao quadrado, some, e tire a raiz para achar a hipotenusa.

**Exemplo resolvido:** (diagrama) → = 5

**Passos ensinados:**
1. Eleve os catetos ao quadrado: 3² = 9 e 4² = 16.
2. Some: 9 + 16 = 25.
3. Raiz quadrada: √25 = 5.
4. Hipotenusa = 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [red-8] Geometria Plana · Pitágoras: cateto que falta

**Resumo:** O mesmo teorema, ao contrário — subtraia em vez de somar.

**Lição:** Quando a hipotenusa é conhecida, o cateto que falta é √(c² − b²) — eleve, subtraia, tire a raiz.

**Exemplo resolvido:** (diagrama) → = 5

**Passos ensinados:**
1. Eleve o que você conhece: 13² = 169 e 12² = 144.
2. Subtraia: 169 − 144 = 25.
3. Raiz quadrada: √25 = 5.
4. Cateto = 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [red-9] Geometria Plana · Semelhança de triângulos

**Resumo:** Mesma forma, tamanho diferente — todo lado cresce pelo mesmo fator.

**Lição:** Ache o fator de escala com um par de lados correspondentes, depois aplique no lado que você quer.

**Exemplo resolvido:** Triângulos semelhantes — o lado 3 vira 6, o lado 5 vira x → x = 10

**Passos ensinados:**
1. Fator de escala: 6 ÷ 3 = 2.
2. Aplique no outro lado: 5 × 2 = 10.
3. x = 10.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-10] Geometria Plana · Geometria plana, tudo misturado

**Resumo:** Perímetros, áreas, ângulos, Pitágoras e semelhança — embaralhados.

**Lição:** Qualquer habilidade de geometria plana pode aparecer. Identifique qual fórmula o problema pede antes de calcular.

**Exemplo resolvido:** Triângulo: base 8, altura 5 — área? → = 20

**Passos ensinados:**
1. Identifique a habilidade: área do triângulo = base × altura ÷ 2.
2. 8 × 5 = 40, depois 40 ÷ 2 = 20.
3. Área = 20.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [red-11] Geometria Espacial · Volume do cubo

**Resumo:** Aresta × aresta × aresta — por isso se chama elevar ao cubo.

**Lição:** O volume conta cubinhos. Um cubo de aresta 4 empilha 4 camadas de 4 × 4 cubinhos.

**Exemplo resolvido:** Cubo de aresta 4 — volume? → = 64

**Passos ensinados:**
1. Uma camada: 4 × 4 = 16 cubinhos.
2. 4 camadas: 16 × 4 = 64.
3. Volume = 4³ = 64.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [red-12] Geometria Espacial · Volume do bloco

**Resumo:** Comprimento × largura × altura.

**Lição:** Um bloco retangular funciona como o cubo, mas cada direção tem seu tamanho. Multiplique os três.

**Exemplo resolvido:** Bloco 3 × 4 × 5 — volume? → = 60

**Passos ensinados:**
1. Camada da base: 3 × 4 = 12 cubinhos.
2. 5 camadas de altura: 12 × 5 = 60.
3. Volume = 60.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-13] Geometria Espacial · Área total do cubo

**Resumo:** Seis faces quadradas idênticas.

**Lição:** Desmonte um cubo e você tem 6 quadrados iguais. Ache a área de uma face e multiplique por seis.

**Exemplo resolvido:** Cubo de aresta 4 — área total? → = 96

**Passos ensinados:**
1. Uma face: 4² = 16.
2. Seis faces: 16 × 6 = 96.
3. Área total = 96.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-14] Geometria Espacial · Volume do cilindro

**Resumo:** Área do círculo vezes altura — com π = 22/7 tudo se cancela.

**Lição:** V = π r² h. Com r = 7 e π = 22/7, a área do círculo é 22/7 × 49 = 154 — depois é só multiplicar pela altura.

**Exemplo resolvido:** Cilindro: r = 7, h = 5 (π = 22/7) — volume? → = 770

**Passos ensinados:**
1. Área do círculo: 22/7 × 7² = 22 × 7 = 154.
2. Vezes a altura: 154 × 5 = 770.
3. Volume = 770.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [red-15] Geometria Espacial · Volume do cone

**Resumo:** Um terço do cilindro que o envolve.

**Lição:** Um cone enche exatamente um terço do cilindro correspondente: V = π r² h ÷ 3.

**Exemplo resolvido:** Cone: r = 7, h = 6 (π = 22/7) — volume? → = 308

**Passos ensinados:**
1. O cilindro inteiro: 154 × 6 = 924.
2. O cone é um terço: 924 ÷ 3 = 308.
3. Volume = 308.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [red-16] Geometria Espacial · Volume da pirâmide

**Resumo:** Um terço do bloco sobre a mesma base.

**Lição:** Como o cone, a pirâmide enche um terço do seu bloco: V = área da base × altura ÷ 3.

**Exemplo resolvido:** Pirâmide: base 5 × 6, altura 9 — volume? → = 90

**Passos ensinados:**
1. Área da base: 5 × 6 = 30.
2. Volume do bloco: 30 × 9 = 270. Pirâmide: 270 ÷ 3 = 90.
3. Volume = 90.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [red-17] Geometria Espacial · Geometria espacial, tudo misturado

**Resumo:** Cubos, blocos, cilindros, cones e pirâmides — embaralhados.

**Lição:** Qualquer sólido pode aparecer. Leia qual é a forma, lembre a fórmula, depois calcule.

**Exemplo resolvido:** Cubo de aresta 3 — volume? → = 27

**Passos ensinados:**
1. Identifique o sólido: um cubo, então volume = aresta³.
2. 3³ = 3 × 3 × 3 = 27.
3. Volume = 27.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [red-18] Trigonometria · O que significa o seno

**Resumo:** Cateto oposto sobre hipotenusa — leia direto do triângulo.

**Lição:** Para o ângulo θ, o seno compara o lado oposto a θ com a hipotenusa: sen θ = cateto oposto / hipotenusa.

**Exemplo resolvido:** sen θ = ? → = 3/5

**Passos ensinados:**
1. θ fica embaixo à direita — o lado oposto a ele é 3.
2. A hipotenusa (o lado inclinado) é 5.
3. sen θ = 3/5.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-19] Trigonometria · O que significa o cosseno

**Resumo:** Cateto adjacente sobre hipotenusa.

**Lição:** O cosseno usa o lado que encosta em θ (sem ser a hipotenusa): cos θ = cateto adjacente / hipotenusa.

**Exemplo resolvido:** cos θ = ? → = 4/5

**Passos ensinados:**
1. O lado que encosta em θ na base é 4.
2. A hipotenusa é 5.
3. cos θ = 4/5.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-20] Trigonometria · O que significa a tangente

**Resumo:** Oposto sobre adjacente — sem usar a hipotenusa.

**Lição:** A tangente compara os dois catetos: tg θ = oposto / adjacente. É também a inclinação que você viu em Funções.

**Exemplo resolvido:** tg θ = ? → = 3/4

**Passos ensinados:**
1. Cateto oposto: 3. Cateto adjacente: 4.
2. Divida: tg θ = 3/4.
3. tg θ = 3/4.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [red-21] Trigonometria · Os ângulos notáveis

**Resumo:** sen 30° = 1/2, tg 45° = 1, sen 90° = 1 — valores para saber de cor.

**Lição:** Alguns ângulos têm valores exatos e simples: sen 30° = cos 60° = 1/2, tg 45° = 1, sen 90° = cos 0° = 1. Multiplique pelo número dado.

**Exemplo resolvido:** 8 · sen 30° → = 4

**Passos ensinados:**
1. Lembre o valor: sen 30° = 1/2.
2. Multiplique: 8 × 1/2 = 4.
3. 8 · sen 30° = 4.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [red-22] Trigonometria · Do seno ao cosseno

**Resumo:** Reconheça a terna escondida e leia o outro cateto.

**Lição:** sen θ = 3/5 esconde um triângulo 3-4-5: oposto 3, hipotenusa 5, então o cateto adjacente é 4 — e cos θ = 4/5.

**Exemplo resolvido:** sen θ = 3/5 (θ agudo) — cos θ? → = 4/5

**Passos ensinados:**
1. Oposto 3, hipotenusa 5 — ache o cateto que falta com Pitágoras: √(25 − 9) = 4.
2. O cosseno é esse cateto sobre a hipotenusa: 4/5.
3. cos θ = 4/5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [red-23] Trigonometria · Achando um lado com trigonometria

**Resumo:** A razão mais um lado real revela os outros.

**Lição:** sen θ = 3/5 significa: a cada 5 unidades de hipotenusa, 3 de cateto oposto. Escale pela hipotenusa real.

**Exemplo resolvido:** sen θ = 3/5, hipotenusa 20 — cateto oposto? → = 12

**Passos ensinados:**
1. A hipotenusa real é 20 — isso é 5 × 4.
2. Escale o oposto do mesmo jeito: 3 × 4 = 12.
3. Cateto oposto = 12.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [red-24] Trigonometria · Radianos e graus

**Resumo:** π radianos é meia volta: 180°.

**Lição:** O fato-chave: π rad = 180°. Qualquer fração de π converte dividindo 180 do mesmo jeito.

**Exemplo resolvido:** π/3 rad em graus → = 60

**Passos ensinados:**
1. π rad = 180°.
2. Um terço disso: 180 ÷ 3 = 60.
3. π/3 = 60°.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [red-25] Trigonometria · De volta ao 1º quadrante

**Resumo:** Todo ângulo espelha um agudo — encontre-o.

**Lição:** Meça a distância do ângulo até o eixo horizontal (180° ou 360°). Essa distância é o espelho agudo dele — o ângulo de referência.

**Exemplo resolvido:** 150° reduzido ao 1º quadrante → = 30

**Passos ensinados:**
1. 150° fica no segundo quadrante, perto de 180°.
2. Distância até 180°: 180 − 150 = 30.
3. Ângulo de referência = 30°.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [red-26] Trigonometria · Trigonometria, tudo misturado

**Resumo:** Razões, ângulos notáveis, radianos e referências — embaralhados.

**Lição:** Qualquer habilidade de trigonometria pode aparecer. Veja primeiro se você está lendo um triângulo, lembrando um valor ou convertendo.

**Exemplo resolvido:** 10 · tg 45° → = 10

**Passos ensinados:**
1. Lembre o valor: tg 45° = 1.
2. Multiplique: 10 × 1 = 10.
3. 10 · tg 45° = 10.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [red-27] Prova da Faixa · Prova da Faixa Vermelha: tudo misturado

**Resumo:** Geometria plana, sólidos e trigonometria numa prova final.

**Lição:** A faixa inteira num treino só: áreas, ângulos, Pitágoras, volumes e razões trigonométricas. Identifique a habilidade, lembre a ferramenta, execute.

**Exemplo resolvido:** (diagrama) → = 10

**Passos ensinados:**
1. Identifique a habilidade: dois catetos conhecidos, falta a hipotenusa — Pitágoras.
2. 6² + 8² = 36 + 64 = 100, e √100 = 10.
3. Hipotenusa = 10.

*Maestria: 1 página(s) de 23 problemas · 80% de acerto · alvo 18s/questão.*

## Faixa Dourada — Logs · Sequências · Probabilidade · Matrizes · Complexos · Analítica

*O arsenal do vestibular — tudo o que as provas mais difíceis adoram cobrar.*

### [gold-1] Logaritmos e Exponenciais · Expoentes negativos

**Resumo:** Um menos no expoente vira a potência de cabeça para baixo.

**Lição:** b⁻ⁿ significa 1/bⁿ. Calcule a potência positiva primeiro, depois ponha 1 em cima.

**Exemplo resolvido:** 2⁻² → = 1/4

**Passos ensinados:**
1. A potência positiva: 2² = 4.
2. O menos inverte: 1/4.
3. 2⁻² = 1/4.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-2] Logaritmos e Exponenciais · Equações exponenciais

**Resumo:** Reconheça a potência: 2ˣ = 32 pergunta qual potência de 2 dá 32.

**Lição:** Suba pelas potências da base até chegar no alvo — o número de passos é o x.

**Exemplo resolvido:** 2ˣ = 32 → x = 5

**Passos ensinados:**
1. Potências de 2: 2, 4, 8, 16, 32.
2. 32 é a 5ª potência: 2⁵ = 32.
3. x = 5.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-3] Logaritmos e Exponenciais · O que significa um logaritmo

**Resumo:** log₂ 8 pergunta: 2 elevado a quanto dá 8?

**Lição:** Um logaritmo é uma caça ao expoente. log_b n é a potência que eleva b até chegar em n.

**Exemplo resolvido:** log₂ 8 → = 3

**Passos ensinados:**
1. Reescreva como pergunta: 2^? = 8.
2. 2 × 2 × 2 = 8, então o expoente é 3.
3. log₂ 8 = 3.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [gold-4] Logaritmos e Exponenciais · Logaritmo na base 10

**Resumo:** O log de uma potência de 10 só conta os zeros.

**Lição:** Quando não há base escrita, é base 10. log 1000 pergunta 10^? = 1000 — conte os zeros.

**Exemplo resolvido:** log 1000 → = 3

**Passos ensinados:**
1. 1000 tem 3 zeros.
2. 10³ = 1000, então log 1000 = 3.
3. log 1000 = 3.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 7s/questão.*

### [gold-5] Logaritmos e Exponenciais · A regra do produto

**Resumo:** log m + log n = log (m × n) — somar logs multiplica o que está dentro.

**Lição:** Mesma base? Somar os logs é o mesmo que um log só do produto. Multiplique o que está dentro e tire um log só.

**Exemplo resolvido:** log₂ 4 + log₂ 8 → = 5

**Passos ensinados:**
1. Multiplique o que está dentro: 4 × 8 = 32.
2. log₂ 32 = 5, pois 2⁵ = 32.
3. A resposta é 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-6] Logaritmos e Exponenciais · A regra do quociente

**Resumo:** log m − log n = log (m ÷ n).

**Lição:** Subtrair logs de mesma base divide o que está dentro. Divida primeiro, depois tire um log só.

**Exemplo resolvido:** log₂ 32 − log₂ 4 → = 3

**Passos ensinados:**
1. Divida o que está dentro: 32 ÷ 4 = 8.
2. log₂ 8 = 3, pois 2³ = 8.
3. A resposta é 3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-7] Logaritmos e Exponenciais · Resolvendo equações com log

**Resumo:** log₂ x = 5 se desfaz em x = 2⁵.

**Lição:** Uma equação com log é um expoente disfarçado: log_b x = k significa x = bᵏ. Reescreva e calcule a potência.

**Exemplo resolvido:** log₂ x = 5 → x = 32

**Passos ensinados:**
1. Reescreva como potência: x = 2⁵.
2. Calcule: 2⁵ = 32.
3. x = 32.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-8] Logaritmos e Exponenciais · Multiplicando logs

**Resumo:** Calcule cada log separado, depois multiplique os resultados.

**Lição:** Quando dois logs se multiplicam, não há regra de atalho — calcule cada um e multiplique as respostas.

**Exemplo resolvido:** log₂ 8 × log₃ 9 → = 6

**Passos ensinados:**
1. Primeiro log: log₂ 8 = 3.
2. Segundo log: log₃ 9 = 2.
3. Multiplique: 3 × 2 = 6.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-9] Logaritmos e Exponenciais · Exponenciais deslocadas

**Resumo:** 2ˣ⁺¹ = 16 — iguale os expoentes, depois tire o deslocamento.

**Lição:** Escreva o lado direito como potência da mesma base. Aí os expoentes têm que ser iguais — resolva essa equaçãozinha.

**Exemplo resolvido:** 2ˣ⁺¹ = 16 → x = 3

**Passos ensinados:**
1. 16 como potência de 2: 16 = 2⁴.
2. Iguale os expoentes: x + 1 = 4.
3. x = 3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-10] Logaritmos e Exponenciais · Logs e exponenciais, misturados

**Resumo:** Todas as habilidades de log e exponencial — embaralhadas.

**Lição:** Qualquer coisa deste nível pode aparecer: regras, equações, expoentes negativos. Identifique o formato primeiro.

**Exemplo resolvido:** log₅ 25 → = 2

**Passos ensinados:**
1. Pergunte: 5^? = 25.
2. 5² = 25, então a resposta é 2.
3. log₅ 25 = 2.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-11] Sequências (PA e PG) · Continuando uma PA

**Resumo:** Perceba o salto constante entre os termos.

**Lição:** Numa progressão aritmética cada termo cresce a mesma quantidade — a razão. Encontre-a, depois dê mais um salto.

**Exemplo resolvido:** 3, 7, 11, … → = 15

**Passos ensinados:**
1. O salto: 7 − 3 = 4 (e 11 − 7 = 4 também).
2. Mais um salto: 11 + 4 = 15.
3. Próximo termo: 15.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [gold-12] Sequências (PA e PG) · O termo geral da PA

**Resumo:** aₙ = a₁ + (n − 1)r — dê (n − 1) saltos de uma vez.

**Lição:** Para chegar ao 10º termo você dá 9 saltos a partir do 1º. Multiplique a razão por (n − 1) e some ao a₁.

**Exemplo resolvido:** PA: a₁ = 3, r = 4 — a₁₀? → = 39

**Passos ensinados:**
1. De a₁ até a₁₀ são 9 saltos: 9 × 4 = 36.
2. Some o início: 3 + 36 = 39.
3. a₁₀ = 39.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-13] Sequências (PA e PG) · Soma da PA

**Resumo:** Primeiro mais último, vezes a quantidade, dividido por 2 — o truque de Gauss.

**Lição:** Junte o primeiro termo com o último: todo par tem a mesma soma. São n/2 pares: Sₙ = n(a₁ + aₙ)/2.

**Exemplo resolvido:** PA: a₁ = 2, r = 3, n = 10 — soma S₁₀? → = 155

**Passos ensinados:**
1. Último termo: a₁₀ = 2 + 9 × 3 = 29.
2. Soma do par: 2 + 29 = 31. Dez termos → 5 pares: 31 × 5 = 155.
3. S₁₀ = 155.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [gold-14] Sequências (PA e PG) · Continuando uma PG

**Resumo:** Cada termo multiplica pela mesma razão.

**Lição:** Numa progressão geométrica o salto é uma multiplicação. Divida vizinhos para achar a razão, depois multiplique mais uma vez.

**Exemplo resolvido:** 2, 6, 18, … → = 54

**Passos ensinados:**
1. A razão: 6 ÷ 2 = 3 (e 18 ÷ 6 = 3).
2. Multiplique mais uma vez: 18 × 3 = 54.
3. Próximo termo: 54.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [gold-15] Sequências (PA e PG) · O termo geral da PG

**Resumo:** aₙ = a₁ · qⁿ⁻¹ — multiplique (n − 1) vezes de uma vez.

**Lição:** Chegar ao 5º termo significa multiplicar por q quatro vezes: a₅ = a₁ · q⁴. Calcule a potência primeiro.

**Exemplo resolvido:** PG: a₁ = 2, q = 3 — a₅? → = 162

**Passos ensinados:**
1. Quatro multiplicações: 3⁴ = 81.
2. Vezes o início: 2 × 81 = 162.
3. a₅ = 162.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-16] Sequências (PA e PG) · Soma da PG

**Resumo:** Com q = 2 a soma é a₁(2ⁿ − 1) — um a menos que a próxima potência.

**Lição:** Somas de dobros têm um atalho mágico: 1+2+4+…+2ⁿ⁻¹ = 2ⁿ − 1. Multiplique por a₁.

**Exemplo resolvido:** PG: a₁ = 3, q = 2, n = 5 — soma S₅? → = 93

**Passos ensinados:**
1. 2⁵ − 1 = 32 − 1 = 31.
2. Multiplique por a₁: 3 × 31 = 93.
3. S₅ = 93.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [gold-17] Sequências (PA e PG) · Soma da PG infinita

**Resumo:** Quando |q| < 1 a soma infinita converge: S = a₁ / (1 − q).

**Lição:** Dividir pela metade para sempre nunca passa de um limite. A soma infinita toda é só a₁ dividido por (1 − q).

**Exemplo resolvido:** PG infinita: a₁ = 8, q = 1/2 — soma? → = 16

**Passos ensinados:**
1. 1 − q = 1 − 1/2 = 1/2.
2. Divida: 8 ÷ 1/2 = 16.
3. S∞ = 16.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-18] Sequências (PA e PG) · Achando r e q

**Resumo:** Dois termos conhecidos definem a progressão inteira.

**Lição:** Entre a₁ e aₙ existem (n − 1) saltos. Divida a variação total pelo número de saltos (PA), ou pergunte qual razão elevada a (n − 1) faz isso (PG).

**Exemplo resolvido:** PA: a₁ = 5, a₇ = 23 — r? → d = 3

**Passos ensinados:**
1. Variação total: 23 − 5 = 18.
2. Saltos de a₁ até a₇: 6. Então r = 18 ÷ 6 = 3.
3. r = 3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-19] Sequências (PA e PG) · Sequências recursivas

**Resumo:** Cada termo nasce dos anteriores — como Fibonacci.

**Lição:** Quando cada termo é a soma dos dois anteriores, é só continuar somando vizinhos para estender a corrente.

**Exemplo resolvido:** 2, 3, 5, 8, 13, … → = 21

**Passos ensinados:**
1. Confira a regra: 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13. Cada termo soma os dois anteriores.
2. Próximo: 8 + 13 = 21.
3. Próximo termo: 21.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-20] Sequências (PA e PG) · Sequências, misturadas

**Resumo:** PAs, PGs, somas e recursões — embaralhadas.

**Lição:** Primeiro decida: o salto é uma soma (PA), uma multiplicação (PG), ou nasce dos termos anteriores? Depois aplique a ferramenta certa.

**Exemplo resolvido:** 4, 9, 14, … → = 19

**Passos ensinados:**
1. O salto é constante: +5 — uma PA.
2. 14 + 5 = 19.
3. Próximo termo: 19.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 15s/questão.*

### [gold-21] Combinatória e Probabilidade · O princípio multiplicativo

**Resumo:** Escolhas independentes se multiplicam.

**Lição:** Se uma escolha tem 4 opções e outra tem 3, juntas elas dão 4 × 3 combinações — cada opção combina com todas as outras.

**Exemplo resolvido:** 4 camisas, 3 calças — combinações? → = 12

**Passos ensinados:**
1. Cada uma das 4 camisas combina com cada uma das 3 calças.
2. Multiplique: 4 × 3 = 12.
3. 12 combinações.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [gold-22] Combinatória e Probabilidade · Fatorial

**Resumo:** n! multiplica todos os números de n até 1.

**Lição:** 5! conta as formas de enfileirar 5 coisas: 5 escolhas, depois 4, depois 3, 2, 1 — tudo multiplicado.

**Exemplo resolvido:** 5! → = 120

**Passos ensinados:**
1. 5 × 4 = 20, depois 20 × 3 = 60.
2. 60 × 2 = 120, e × 1 continua 120.
3. 5! = 120.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-23] Combinatória e Probabilidade · Quociente de fatoriais

**Resumo:** 6! ÷ 4! — cancele a cauda comum, multiplique o que sobrar.

**Lição:** Nunca calcule fatoriais gigantes. 6!/4! compartilha toda a cauda 4 × 3 × 2 × 1 — cancele, sobrando só 6 × 5.

**Exemplo resolvido:** 6! ÷ 4! → = 30

**Passos ensinados:**
1. 6! = 6 × 5 × 4! — o 4! cancela.
2. O que sobra: 6 × 5 = 30.
3. 6! ÷ 4! = 30.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-24] Combinatória e Probabilidade · Arranjos

**Resumo:** Escolha k de n onde a ordem importa — um produto decrescente.

**Lição:** Primeiro lugar: n opções. Segundo: n − 1. Multiplique k fatores decrescentes — um arranjo é só isso.

**Exemplo resolvido:** A(5, 2) → = 20

**Passos ensinados:**
1. Primeira escolha: 5 opções. Segunda: restam 4.
2. Multiplique: 5 × 4 = 20.
3. 20 arranjos.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-25] Combinatória e Probabilidade · Combinações

**Resumo:** A ordem não importa — divida os arranjos por k!.

**Lição:** Escolher uma dupla não é ranquear — AB e BA são a mesma escolha. Conte os arranjos e divida pelas k! ordens.

**Exemplo resolvido:** C(5, 2) → = 10

**Passos ensinados:**
1. Arranjos primeiro: 5 × 4 = 20.
2. Cada dupla foi contada 2! = 2 vezes: 20 ÷ 2 = 10.
3. C(5, 2) = 10.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-26] Combinatória e Probabilidade · Probabilidade com dados

**Resumo:** Casos favoráveis sobre casos totais, simplificado.

**Lição:** Um dado tem 6 faces igualmente prováveis. Conte as faces que satisfazem o evento, ponha sobre 6, e simplifique a fração.

**Exemplo resolvido:** P(dado > 4) → = 1/3

**Passos ensinados:**
1. Faces acima de 4: o 5 e o 6 — 2 faces.
2. 2/6 simplifica para 1/3.
3. P = 1/3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-27] Combinatória e Probabilidade · Eventos independentes

**Resumo:** "E" significa multiplicar as probabilidades.

**Lição:** Cara e depois cara de novo: cada moeda é 1/2, e eventos independentes se multiplicam — (1/2) × (1/2) = 1/4.

**Exemplo resolvido:** P(2 caras em 2 moedas) → = 1/4

**Passos ensinados:**
1. Cada moeda: P(cara) = 1/2.
2. Multiplique: 1/2 × 1/2 = 1/4.
3. P = 1/4.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-28] Combinatória e Probabilidade · O complementar

**Resumo:** P(não A) = 1 − P(A) — conte o que sobra.

**Lição:** "Não tirar 6" é mais fácil contando ao contrário: 5 das 6 faces servem.

**Exemplo resolvido:** P(dado NÃO = 6) → = 5/6

**Passos ensinados:**
1. Uma face é 6 — as outras 5 não são.
2. P = 5/6, já simplificado.
3. P = 5/6.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-29] Combinatória e Probabilidade · Sorteio na urna

**Resumo:** Bolas favoráveis sobre bolas totais.

**Lição:** Some todas as bolas para o denominador; a cor que você quer é o numerador. Simplifique.

**Exemplo resolvido:** 5 bolas vermelhas, 3 azuis — P(vermelha)? → = 5/8

**Passos ensinados:**
1. Total de bolas: 5 + 3 = 8.
2. Vermelhas: 5 de 8.
3. P = 5/8.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-30] Combinatória e Probabilidade · Combinatória e probabilidade, misturadas

**Resumo:** Fatoriais, arranjos, combinações e chance — embaralhados.

**Lição:** Faça duas perguntas primeiro: estou contando ou medindo chance? E a ordem importa? As respostas escolhem a ferramenta.

**Exemplo resolvido:** C(4, 2) → = 6

**Passos ensinados:**
1. A ordem não importa — combinações.
2. 4 × 3 = 12, depois 12 ÷ 2! = 6.
3. C(4, 2) = 6.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-31] Matrizes e Sistemas · Lendo uma matriz

**Resumo:** aᵢⱼ significa linha i, coluna j.

**Lição:** Escrevemos uma matriz 2×2 como [linha um / linha dois]. O elemento a₁₂ fica na linha 1, coluna 2 — linha primeiro, coluna depois.

**Exemplo resolvido:** [2 5 / 7 1] — a₁₂? → = 5

**Passos ensinados:**
1. A linha 1 é "2 5".
2. A coluna 2 dessa linha é 5.
3. a₁₂ = 5.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [gold-32] Matrizes e Sistemas · Determinante 2×2

**Resumo:** Produto da diagonal principal menos o da outra diagonal.

**Lição:** Para [a b / c d], o determinante é ad − bc: multiplique a diagonal que desce, subtraia o produto da que sobe.

**Exemplo resolvido:** det [2 5 / 7 1] → = -33

**Passos ensinados:**
1. Diagonal principal: 2 × 1 = 2.
2. Outra diagonal: 5 × 7 = 35.
3. Subtraia: 2 − 35 = −33.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-33] Matrizes e Sistemas · Quando o determinante é zero

**Resumo:** Ache o elemento que zera ad − bc.

**Lição:** Iguale ad − bc = 0 e resolva para o elemento desconhecido — uma linha vira múltiplo da outra.

**Exemplo resolvido:** det [2 3 / 6 x] = 0 → x = 9

**Passos ensinados:**
1. O determinante: 2x − 3 × 6 = 2x − 18.
2. Iguale a zero: 2x = 18, então x = 9.
3. x = 9.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-34] Matrizes e Sistemas · Determinante 3×3

**Resumo:** Expanda pela primeira linha — três continhas 2×2.

**Lição:** Cada elemento da linha 1 multiplica o determinante 2×2 do que sobra ao cobrir sua linha e coluna — com sinais +, −, +.

**Exemplo resolvido:** det [1 2 0 / 0 1 3 / 2 0 1] → = 13

**Passos ensinados:**
1. 1 × det[1 3 / 0 1] = 1 × 1.
2. − 2 × det[0 3 / 2 1] = −2 × (0 − 6) = 12.
3. + 0 × (…) = 0. Total: 1 + 12 + 0 = 13.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 30s/questão.*

### [gold-35] Matrizes e Sistemas · O traço

**Resumo:** Soma da diagonal principal — uma impressão digital rápida.

**Lição:** O traço soma o canto superior esquerdo com o inferior direito. Só isso — mas aparece em todo lugar na matemática avançada.

**Exemplo resolvido:** tr [4 2 / 1 7] → = 11

**Passos ensinados:**
1. Elementos da diagonal principal: 4 e 7.
2. Some: 4 + 7 = 11.
3. tr = 11.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [gold-36] Matrizes e Sistemas · Linha vezes coluna

**Resumo:** O produto escalar — o átomo da multiplicação de matrizes.

**Lição:** Multiplique posições correspondentes e some: [2 3] · [4 5]ᵀ = 2×4 + 3×5. Cada elemento de um produto de matrizes é um desses.

**Exemplo resolvido:** [2 3] · [4 5]ᵀ → = 23

**Passos ensinados:**
1. Primeiro par: 2 × 4 = 8.
2. Segundo par: 3 × 5 = 15. Some: 8 + 15 = 23.
3. Resultado: 23.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-37] Matrizes e Sistemas · Sistemas 2×2 gerais

**Resumo:** Some as equações para eliminar o y, depois substitua de volta.

**Lição:** Esses sistemas têm +y numa equação e −y na outra — somar as duas elimina o y na hora.

**Exemplo resolvido:** x + y = 7, 2x − y = 2 → x, y = 3, 4

**Passos ensinados:**
1. Some as equações: 3x = 9, então x = 3.
2. Substitua de volta: 3 + y = 7, então y = 4.
3. x = 3, y = 4.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [gold-38] Matrizes e Sistemas · Matrizes e sistemas, misturados

**Resumo:** Determinantes, traços, produtos escalares e sistemas — embaralhados.

**Lição:** Leia a notação primeiro: det é diagonais, tr é soma da diagonal, linha · coluna é multiplicar-e-somar.

**Exemplo resolvido:** det [3 1 / 2 4] → = 10

**Passos ensinados:**
1. Diagonal principal: 3 × 4 = 12.
2. Outra diagonal: 1 × 2 = 2. Subtraia: 12 − 2 = 10.
3. det = 10.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [gold-39] Polinômios e Números Complexos · Grau de um polinômio

**Resumo:** O maior expoente manda no polinômio.

**Lição:** Percorra todos os termos e pegue o maior expoente de x — esse número sozinho é o grau.

**Exemplo resolvido:** x⁵ − 3x² + 1 — grau? → = 5

**Passos ensinados:**
1. Expoentes presentes: 5, 2 e 0 (a constante).
2. O maior é 5.
3. Grau = 5.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 7s/questão.*

### [gold-40] Polinômios e Números Complexos · Valor numérico

**Resumo:** Substitua o x e siga a ordem das operações.

**Lição:** Troque todo x pelo número dado — potências primeiro, depois produtos, depois somas.

**Exemplo resolvido:** P(x) = x³ − 2x + 1; P(3) → = 22

**Passos ensinados:**
1. A potência: 3³ = 27.
2. O resto: −2 × 3 = −6, mais 1.
3. Total: 27 − 6 + 1 = 22.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [gold-41] Polinômios e Números Complexos · Teorema do resto

**Resumo:** Dividindo por (x − a)? O resto é simplesmente P(a).

**Lição:** Sem divisão longa: o resto de P(x) ÷ (x − a) é igual a P avaliado em a. É só substituir.

**Exemplo resolvido:** (x² + 3x + 5) ÷ (x − 2) — resto? → = 15

**Passos ensinados:**
1. O divisor é (x − 2), então avalie em x = 2.
2. P(2) = 4 + 6 + 5 = 15.
3. Resto = 15.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-42] Polinômios e Números Complexos · Girard: soma e produto

**Resumo:** Leia a soma e o produto das raízes direto dos coeficientes.

**Lição:** Para x² − Sx + P = 0, as raízes somam S e multiplicam P — sem precisar resolver.

**Exemplo resolvido:** x² − 7x + 10 = 0 — soma, produto das raízes? → S, P = 7, 10

**Passos ensinados:**
1. Soma = menos o coeficiente de x: −(−7) = 7.
2. Produto = o termo constante: 10.
3. Confira: 2 e 5 funcionam — 2 + 5 = 7, 2 × 5 = 10.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-43] Polinômios e Números Complexos · Girard para cúbicas

**Resumo:** A soma das três raízes é −b/a.

**Lição:** Em x³ + bx² + …, as raízes somam −b. Olhe o sinal do termo x² e inverta.

**Exemplo resolvido:** x³ − 6x² + 11x − 6 = 0 — soma das 3 raízes? → S = 6

**Passos ensinados:**
1. O coeficiente de x² é −6.
2. Inverta o sinal: soma = 6.
3. Confira: as raízes são 1, 2, 3 — e 1 + 2 + 3 = 6.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-44] Polinômios e Números Complexos · Potências de i

**Resumo:** i² = −1 e as potências repetem a cada 4 passos.

**Lição:** i, i² = −1, i³ = −i, i⁴ = 1, e aí repete. Divida o expoente por 4 e olhe o resto.

**Exemplo resolvido:** i⁴⁶ → = -1

**Passos ensinados:**
1. 46 ÷ 4 = 11 com resto 2.
2. Resto 2 significa i⁴⁶ = i² = −1.
3. i⁴⁶ = −1.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-45] Polinômios e Números Complexos · Somando números complexos

**Resumo:** Real com real, imaginário com imaginário.

**Lição:** Um número complexo tem duas partes independentes. Some as partes reais, depois as partes com i — elas nunca se misturam.

**Exemplo resolvido:** (3 + 2i) + (1 + 4i) = a + bi → a, b = 4, 6

**Passos ensinados:**
1. Partes reais: 3 + 1 = 4.
2. Partes imaginárias: 2 + 4 = 6.
3. Resultado: 4 + 6i.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-46] Polinômios e Números Complexos · Multiplicando complexos

**Resumo:** Distribua como binômios — e o i² vira −1.

**Lição:** Distribua tudo. O termo com i² troca de sinal e entra na parte real: (a+bi)(c+di) = (ac − bd) + (ad + bc)i.

**Exemplo resolvido:** (2 + i)(3 + 2i) = a + bi → a, b = 4, 7

**Passos ensinados:**
1. Distribua: 6 + 4i + 3i + 2i².
2. 2i² = −2, então a parte real é 6 − 2 = 4.
3. A parte com i: 4i + 3i = 7i. Resultado: 4 + 7i.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [gold-47] Polinômios e Números Complexos · Módulo de um complexo

**Resumo:** |a + bi| é a hipotenusa do triângulo (a, b).

**Lição:** Marque a + bi como o ponto (a, b). A distância até a origem é √(a² + b²) — Pitágoras de novo.

**Exemplo resolvido:** |3 + 4i| → = 5

**Passos ensinados:**
1. Eleve as partes: 3² + 4² = 9 + 16 = 25.
2. Raiz quadrada: √25 = 5.
3. |3 + 4i| = 5.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-48] Polinômios e Números Complexos · Polinômios e complexos, misturados

**Resumo:** Girard, restos, potências de i e módulos — embaralhados.

**Lição:** Procure a impressão digital: um i pede aritmética complexa, dividir por (x − a) pede substituição, uma quadrática pede Girard.

**Exemplo resolvido:** |6 + 8i| → = 10

**Passos ensinados:**
1. 6² + 8² = 36 + 64 = 100.
2. √100 = 10.
3. |6 + 8i| = 10.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [gold-49] Geometria Analítica · Distância entre pontos

**Resumo:** Cateto horizontal, cateto vertical, Pitágoras.

**Lição:** O segmento entre dois pontos é a hipotenusa de um triângulo retângulo: catetos Δx e Δy. d = √(Δx² + Δy²).

**Exemplo resolvido:** d((1, 2), (4, 6)) → = 5

**Passos ensinados:**
1. Δx = 4 − 1 = 3, Δy = 6 − 2 = 4.
2. √(3² + 4²) = √25 = 5.
3. d = 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [gold-50] Geometria Analítica · O ponto médio

**Resumo:** Média dos x, média dos y.

**Lição:** O ponto médio fica na metade de cada direção: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).

**Exemplo resolvido:** M((2, 4), (6, 10)) = (x, y) → x, y = 4, 7

**Passos ensinados:**
1. x: (2 + 6) ÷ 2 = 4.
2. y: (4 + 10) ÷ 2 = 7.
3. M = (4, 7).

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-51] Geometria Analítica · Inclinação, com sinal

**Resumo:** Variação de y sobre variação de x — retas que descem são negativas.

**Lição:** m = Δy / Δx. Se o y cai enquanto o x cresce, a inclinação sai negativa.

**Exemplo resolvido:** m: (1, 2) → (3, 8) → m = 3

**Passos ensinados:**
1. Δy = 8 − 2 = 6, Δx = 3 − 1 = 2.
2. m = 6 ÷ 2 = 3.
3. m = 3.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-52] Geometria Analítica · Reta passando por um ponto

**Resumo:** Substitua o ponto em y = mx + b e resolva para b.

**Lição:** Se a reta passa por (x, y), essas coordenadas satisfazem a equação. Substitua e o b fica sendo a única incógnita.

**Exemplo resolvido:** y = 2x + b passa por (3, 10) — b? → b = 4

**Passos ensinados:**
1. Substitua: 10 = 2 × 3 + b.
2. 10 = 6 + b, então b = 4.
3. b = 4.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-53] Geometria Analítica · Onde a reta corta o eixo x

**Resumo:** Iguale y = 0 e resolva.

**Lição:** No eixo x a altura é zero. Troque y por 0 e resolva a equaçãozinha para x.

**Exemplo resolvido:** y = 2x − 8 — corta o eixo x em? → x = 4

**Passos ensinados:**
1. Iguale y = 0: 0 = 2x − 8.
2. 2x = 8, então x = 4.
3. x = 4.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-54] Geometria Analítica · Retas perpendiculares

**Resumo:** Inverta a fração e troque o sinal.

**Lição:** Retas perpendiculares têm inclinações que multiplicam −1: m' = −1/m. Uma inclinação 1/4 vira −4.

**Exemplo resolvido:** Reta com inclinação 1/4 — inclinação da perpendicular? → m' = -4

**Passos ensinados:**
1. Inverta 1/4 para 4.
2. Troque o sinal: −4.
3. m' = −4.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [gold-55] Geometria Analítica · A equação da circunferência

**Resumo:** x² + y² = r² — o lado direito esconde o raio ao quadrado.

**Lição:** Todo ponto a distância r da origem satisfaz x² + y² = r². Tire a raiz quadrada do lado direito.

**Exemplo resolvido:** x² + y² = 49 — raio? → r = 7

**Passos ensinados:**
1. O lado direito é r² = 49.
2. r = √49 = 7.
3. r = 7.

*Maestria: 5 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [gold-56] Geometria Analítica · Centro da circunferência

**Resumo:** (x − a)² + (y − b)² = r² — o centro é (a, b), com sinais invertidos.

**Lição:** O que está sendo subtraído dentro dos parênteses é a coordenada do centro. (y + 2)² significa b = −2 — inverta o sinal que você vê.

**Exemplo resolvido:** (x − 3)² + (y + 2)² = 25 — centro? → x, y = 3, -2

**Passos ensinados:**
1. (x − 3)²: o x do centro é 3.
2. (y + 2)² é (y − (−2))²: o y do centro é −2.
3. Centro = (3, −2).

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-57] Geometria Analítica · Raio por um ponto

**Resumo:** O raio é a distância do centro a qualquer ponto da circunferência.

**Lição:** Centro na origem, ponto na circunferência dado — o raio é só a fórmula da distância de novo.

**Exemplo resolvido:** Circunferência de centro (0, 0) passando por (6, 8) — raio? → r = 10

**Passos ensinados:**
1. r² = 6² + 8² = 36 + 64 = 100.
2. r = √100 = 10.
3. r = 10.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-58] Geometria Analítica · Geometria analítica, misturada

**Resumo:** Distâncias, pontos médios, retas e circunferências — embaralhados.

**Lição:** Tudo do plano se mistura aqui. Leia a notação — d(…) é distância, M(…) é ponto médio, equação com x² + y² é circunferência.

**Exemplo resolvido:** d((0, 0), (3, 4)) → = 5

**Passos ensinados:**
1. Catetos: 3 e 4.
2. √(9 + 16) = √25 = 5.
3. d = 5.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [gold-60] Inequações e Módulo · Inequações de um passo

**Resumo:** Resolva como equação — a resposta é uma fronteira, não um ponto.

**Lição:** x + 5 < 12 funciona igual a x + 5 = 12: desfaça o +5 dos dois lados. O sinal < só vai junto.

**Exemplo resolvido:** x + 5 < 12 → x < 7

**Passos ensinados:**
1. Subtraia 5 dos dois lados.
2. 12 − 5 = 7, e o sinal fica como está.
3. x < 7.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [gold-61] Inequações e Módulo · Dividindo uma inequação

**Resumo:** Divida por um número positivo — o sinal não muda.

**Lição:** 3x ≤ 21: divida os dois lados por 3. Dividir por positivo mantém a desigualdade apontando para o mesmo lado.

**Exemplo resolvido:** 3x ≤ 21 → x ≤ 7

**Passos ensinados:**
1. Divida os dois lados por 3.
2. 21 ÷ 3 = 7.
3. x ≤ 7.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [gold-62] Inequações e Módulo · A troca de sinal

**Resumo:** Divida por negativo e a desigualdade vira.

**Lição:** A pegadinha clássica: −2x < 10 dividido por −2 dá x > −5. Multiplicar ou dividir por negativo inverte < em >.

**Exemplo resolvido:** −2x < 10 → x > -5

**Passos ensinados:**
1. Divida os dois lados por −2: 10 ÷ (−2) = −5.
2. Dividir por negativo vira o sinal: < vira >.
3. x > −5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-63] Inequações e Módulo · Inequações de dois passos

**Resumo:** Desfaça a constante primeiro, depois o coeficiente.

**Lição:** Mesma rotina das equações de dois passos: mova a constante, depois divida — de olho na troca de sinal.

**Exemplo resolvido:** 2x − 4 > 10 → x > 7

**Passos ensinados:**
1. Some 4: 2x > 14.
2. Divida por 2 (positivo, sem virar): x > 14 ÷ 2 = 7.
3. x > 7.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-64] Inequações e Módulo · Módulo (valor absoluto)

**Resumo:** |n| é a distância até o zero — sempre positivo.

**Lição:** As barras tiram o sinal: |−7| = 7. Calcule o que está dentro primeiro, depois descarte o menos.

**Exemplo resolvido:** |5 − 12| → = 7

**Passos ensinados:**
1. Dentro primeiro: 5 − 12 = −7.
2. Distância até o zero: |−7| = 7.
3. |5 − 12| = 7.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 8s/questão.*

### [gold-65] Inequações e Módulo · Equações com módulo

**Resumo:** |x − a| = r significa duas respostas: a − r e a + r.

**Lição:** "Distância de a igual a r" aponta para os dois lados da reta. Ande r para a esquerda e r para a direita de a.

**Exemplo resolvido:** |x − 3| = 5 → x₁, x₂ = -2, 8

**Passos ensinados:**
1. x está a 5 de distância do 3.
2. Esquerda: 3 − 5 = −2. Direita: 3 + 5 = 8.
3. x = −2 ou x = 8.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [gold-66] Inequações e Módulo · Contando um intervalo

**Resumo:** Quantos inteiros moram entre as fronteiras — cuidado com < e ≤.

**Lição:** O < estrito exclui a ponta; o ≤ inclui. Ache o primeiro e o último inteiros permitidos e conte: último − primeiro + 1.

**Exemplo resolvido:** Quantos inteiros satisfazem 2 ≤ x < 7? → = 5

**Passos ensinados:**
1. Primeiro permitido: 2 (o ≤ inclui). Último permitido: 6 (o < exclui o 7).
2. Conte: 6 − 2 + 1 = 5.
3. 5 inteiros.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [gold-67] Inequações e Módulo · Inequações e módulo, misturados

**Resumo:** Fronteiras, trocas de sinal, distâncias e contagens — embaralhadas.

**Lição:** Observe duas coisas acima de tudo: coeficiente negativo vira o sinal, e barras significam distância — sempre positiva, muitas vezes com duas respostas.

**Exemplo resolvido:** |−9| → = 9

**Passos ensinados:**
1. As barras tiram o sinal.
2. |−9| = 9.
3. A resposta é 9.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 13s/questão.*

### [gold-59] Prova da Faixa · Prova da Faixa Dourada: tudo misturado

**Resumo:** Os sete níveis numa prova final — o simulado de vestibular.

**Lição:** Logs, sequências, probabilidade, matrizes, complexos e o plano — pode vir qualquer coisa. Nomeie o assunto antes de mexer nos números.

**Exemplo resolvido:** log₂ 16 → = 4

**Passos ensinados:**
1. Identifique o assunto: um logaritmo — caça ao expoente.
2. 2⁴ = 16, então a resposta é 4.
3. log₂ 16 = 4.

*Maestria: 1 página(s) de 59 problemas · 80% de acerto · alvo 30s/questão.*

## Faixa Digital — Binário · Módulo · Lógica · Grafos

*A matemática que roda dentro de todo computador — bases, bits, conjuntos e passos.*

### [digital-1] Binário para decimal

**Resumo:** Cada dígito binário é uma potência de 2 — some as que estão ligadas.

**Lição:** Lendo da direita para a esquerda, as casas valem 1, 2, 4, 8, 16… Um dígito 1 significa que aquela potência conta; um 0, que não.

**Exemplo resolvido:** 1011₂ em decimal → = 11

**Passos ensinados:**
1. Casas com 1: 8, 2 e 1 (o 4 está desligado).
2. Some: 8 + 2 + 1 = 11.
3. 1011₂ = 11.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [digital-2] Decimal para binário

**Resumo:** Quebre o número em potências de 2, da maior para a menor.

**Lição:** Pegue a maior potência de 2 que cabe, subtraia, repita. Escreva 1 para cada potência usada e 0 para as que pulou.

**Exemplo resolvido:** 13 em binário → = 1101

**Passos ensinados:**
1. 13 = 8 + 4 + 1 — as potências 8, 4 e 1 entram, o 2 fica de fora.
2. Da casa do 8 para baixo: 1 1 0 1.
3. 13 = 1101₂.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 16s/questão.*

### [digital-3] Potências de 2

**Resumo:** 256, 1024, 65536 — os números de que os computadores são feitos.

**Lição:** Cada dobro soma um no expoente. Decore os marcos: 2⁸ = 256, 2¹⁰ = 1024, 2¹⁶ = 65536 — e monte o resto dobrando ou dividindo.

**Exemplo resolvido:** 2¹⁰ → = 1024

**Passos ensinados:**
1. Marco: 2⁸ = 256.
2. Dobre duas vezes: 256 → 512 → 1024.
3. 2¹⁰ = 1024.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [digital-4] Hexadecimal para decimal

**Resumo:** Base 16: os dígitos vão de 0-9 e depois A-F, as casas valem 16.

**Lição:** Em 0x2F, o 2 está na casa dos dezesseis e F significa 15. Multiplique e some: 2 × 16 + 15.

**Exemplo resolvido:** 0x2F em decimal → = 47

**Passos ensinados:**
1. O 2 vale 2 × 16 = 32.
2. F é 15. Some: 32 + 15 = 47.
3. 0x2F = 47.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [digital-5] A operação módulo

**Resumo:** a mod b é o resto — o coração de relógios e hashes.

**Lição:** Divida, ignore o quociente, fique com a sobra. 17 mod 5: quanto sobra depois de tirar todos os 5 inteiros?

**Exemplo resolvido:** 17 mod 5 → = 2

**Passos ensinados:**
1. Cincos inteiros dentro de 17: 3 × 5 = 15.
2. Sobra: 17 − 15 = 2.
3. 17 mod 5 = 2.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [digital-6] Soma binária

**Resumo:** 1 + 1 = 10 — o 'vai um' é tudo.

**Lição:** A mesma conta em colunas que você conhece, mas a coluna estoura no 2 em vez de no 10. Ou converta para decimal, some, e volte.

**Exemplo resolvido:** 101₂ + 11₂ (resposta em binário) → = 1000

**Passos ensinados:**
1. Em decimal: 101₂ = 5 e 11₂ = 3.
2. 5 + 3 = 8, e 8 em binário é 1000.
3. 101₂ + 11₂ = 1000₂.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [digital-7] AND bit a bit

**Resumo:** Um bit sobrevive só onde os dois números o têm.

**Lição:** Escreva os dois números em binário e compare coluna por coluna: 1 AND 1 dá 1, qualquer outra coisa dá 0.

**Exemplo resolvido:** 6 AND 3 → = 2

**Passos ensinados:**
1. 6 = 110₂ e 3 = 011₂.
2. Só a coluna do meio tem 1 nos dois: 010₂ = 2.
3. 6 AND 3 = 2.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [digital-8] OR e XOR

**Resumo:** OR junta os bits; XOR guarda só as diferenças.

**Lição:** Coluna por coluna: OR dá 1 se qualquer bit for 1. XOR dá 1 só quando os bits são diferentes.

**Exemplo resolvido:** 6 XOR 3 → = 5

**Passos ensinados:**
1. 6 = 110₂ e 3 = 011₂.
2. Colunas diferentes: esquerda e direita — 101₂ = 5.
3. 6 XOR 3 = 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [digital-9] Deslocamento de bits

**Resumo:** << dobra, >> divide pela metade — um expoente por passo.

**Lição:** Deslocar para a esquerda acrescenta um 0 em binário — isso é dobrar. n << k multiplica n por 2ᵏ; n >> k divide.

**Exemplo resolvido:** 5 << 2 → = 20

**Passos ensinados:**
1. Dois deslocamentos à esquerda = multiplicar por 2² = 4.
2. 5 × 4 = 20.
3. 5 << 2 = 20.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 10s/questão.*

### [digital-10] Contando com bits

**Resumo:** n bits geram 2ⁿ valores — e 2ⁿ linhas na tabela-verdade.

**Lição:** Cada bit novo dobra as possibilidades. 3 variáveis que podem ser verdadeiro ou falso dão 2 × 2 × 2 = 8 combinações.

**Exemplo resolvido:** Tabela-verdade com 3 variáveis — quantas linhas? → = 8

**Passos ensinados:**
1. Cada variável dobra a contagem: 2 × 2 × 2.
2. 2³ = 8.
3. 8 linhas.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 9s/questão.*

### [digital-11] Conjuntos: tamanho da união

**Resumo:** Some os dois conjuntos e subtraia a interseção contada duas vezes.

**Lição:** |A ∪ B| = |A| + |B| − |A ∩ B|. A interseção foi contada nos dois conjuntos, então sai uma vez.

**Exemplo resolvido:** |A| = 12, |B| = 9, |A ∩ B| = 4 — |A ∪ B|? → = 17

**Passos ensinados:**
1. Some: 12 + 9 = 21.
2. Tire a interseção contada em dobro: 21 − 4 = 17.
3. |A ∪ B| = 17.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [digital-12] Seguindo uma recursão

**Resumo:** Cada valor nasce do anterior — percorra a corrente.

**Lição:** f(n) = f(n−1) + 5 diz: para o próximo valor, some 5. Comece em f(1) e avance — ou perceba que n−1 passos de +5 é só (n−1) × 5.

**Exemplo resolvido:** f(1) = 3, f(n) = f(n−1) + 5; f(6) → = 28

**Passos ensinados:**
1. De f(1) até f(6) são 5 passos de +5.
2. 3 + 5 × 5 = 3 + 25 = 28.
3. f(6) = 28.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [digital-13] Fatos de grafos

**Resumo:** Toda aresta toca dois vértices — os graus sempre somam 2 × arestas.

**Lição:** O lema do aperto de mão: somar o grau de todos os vértices conta cada aresta duas vezes. E o grafo completo Kₙ tem C(n, 2) arestas.

**Exemplo resolvido:** Grafo com 7 arestas — soma dos graus dos vértices? → = 14

**Passos ensinados:**
1. Cada aresta contribui para exatamente 2 vértices.
2. 7 × 2 = 14.
3. Soma dos graus = 14.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [digital-14] Contando passos

**Resumo:** Quantas vezes o loop roda? A semente do Big-O.

**Lição:** Loops aninhados multiplicam (n × n). Um loop triangular soma 1+2+…+n. Dividir pela metade até 1 leva log₂ n passos. Reconheça o padrão, depois calcule.

**Exemplo resolvido:** Loops aninhados, cada um de 1 a 8 — total de iterações? → = 64

**Passos ensinados:**
1. O loop interno roda 8 vezes para cada uma das 8 voltas do externo.
2. 8 × 8 = 64.
3. 64 iterações.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [digital-15] Prova da Faixa · Prova da Faixa Digital: tudo misturado

**Resumo:** Bases, bits, conjuntos, grafos e passos — a prova completa do programador.

**Lição:** Qualquer coisa desta faixa pode aparecer. Leia a notação — o subscrito ₂ é binário, 0x é hexadecimal, mod é resto.

**Exemplo resolvido:** 2⁸ → = 256

**Passos ensinados:**
1. Um marco das potências de 2.
2. 2⁸ = 256 — os valores de um byte.
3. 2⁸ = 256.

*Maestria: 1 página(s) de 14 problemas · 80% de acerto · alvo 18s/questão.*

## Faixa Coral — Cálculo I

*A faixa mais rara. Limites, derivadas e integrais.*

### [coral-1] O que significa um limite

**Resumo:** Um limite é o que f(x) se aproxima conforme x chega mais perto de um ponto.

**Lição:** Conforme x salta cada vez mais perto de um valor alvo, observe o que acontece com f(x) — isso é o limite. Para uma função suave como essa, você pode simplesmente substituir o valor alvo direto.

**Exemplo resolvido:** lim(x→2) 3x + 2 → = 8

**Passos ensinados:**
1. x está chegando cada vez mais perto de 2.
2. Como essa reta não tem quebras ou buracos, é só substituir: 3 × 2 + 2.
3. 3 × 2 + 2 = 8.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [coral-2] Avaliando limites por substituição direta

**Resumo:** Funções suaves deixam você simplesmente substituir o valor alvo.

**Lição:** O mesmo truque de substituição funciona para qualquer polinômio, não só retas — substitua o valor alvo no lugar de x e simplifique.

**Exemplo resolvido:** lim(x→2) x² - 3x + 1 → = -1

**Passos ensinados:**
1. Substitua x = 2 direto: 2² - 3 × 2 + 1.
2. Eleve ao quadrado primeiro: 2² = 4.
3. 4 - 6 + 1 = -1.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 14s/questão.*

### [coral-3] Avaliando limites algebricamente

**Resumo:** Fatore primeiro para cancelar a parte que está causando 0/0.

**Lição:** Substituir direto dá 0/0 aqui — isso é um sinal para fatorar o de cima primeiro. O fator que combina cancela, deixando algo em que você PODE substituir.

**Exemplo resolvido:** lim(x→3) (x² + 4x - 21) / (x - 3) → = 10

**Passos ensinados:**
1. Substituição direta dá 0/0 — fatore o numerador: x² + 4x - 21 = (x - 3)(x + 7).
2. Cancele o (x - 3) de cima e de baixo, deixando só (x + 7).
3. Agora substitua: 3 + 7 = 10.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 21s/questão.*

### [coral-4] O que significa uma derivada

**Resumo:** Uma derivada é a inclinação da reta tangente.

**Lição:** Uma derivada mede o quão íngreme uma função está subindo em cada ponto. Para uma reta, a inclinação nunca muda — é só a inclinação, igual você achou lá em Funções.

**Exemplo resolvido:** f(x) = 4x + 3, f'(x) = n → = 4

**Passos ensinados:**
1. A inclinação dessa reta é subida/avanço = 4/1 = 4.
2. A inclinação de uma reta nunca muda.
3. f'(x) = 4, para todo x.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [coral-5] A regra do poder para derivadas

**Resumo:** Traga o expoente para baixo como multiplicador, depois subtraia um dele.

**Lição:** Para qualquer potência de x, a derivada segue o mesmo padrão sempre: o expoente vira o novo coeficiente, e o expoente em si diminui em um.

**Exemplo resolvido:** f(x) = x⁵, f'(x) = n·x⁴ → = 5

**Passos ensinados:**
1. O expoente é 5 — traga-o para frente como multiplicador.
2. Subtraia um do expoente: 5 - 1 = 4.
3. f'(x) = 5x⁴, então n = 5.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [coral-6] Derivando polinômios

**Resumo:** Aplique a regra do poder em cada termo, depois substitua.

**Lição:** Derive cada termo separadamente usando a regra do poder, combine-os, depois avalie o resultado no ponto dado — a mesma abordagem em camadas de avaliar qualquer outra expressão.

**Exemplo resolvido:** f(x) = 3x² + 4x; f'(2) → = 16

**Passos ensinados:**
1. Derive cada termo: a derivada de 3x² é 6x, e a derivada de 4x é 4.
2. f'(x) = 6x + 4.
3. f'(2) = 6 × 2 + 4 = 16.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 20s/questão.*

### [coral-7] O que significa uma integral

**Resumo:** Some retângulos finos para aproximar a área sob uma curva.

**Lição:** A área de cada barra é só a altura dela vezes uma largura de 1. Some todas as barras e você tem uma aproximação da área total sob a curva — essa é a ideia central de uma integral.

**Exemplo resolvido:** (diagrama) → = 20

**Passos ensinados:**
1. Cada barra tem largura 1, então a área dela é só a altura.
2. Some as cinco alturas: 3 + 5 + 4 + 6 + 2.
3. 3 + 5 + 4 + 6 + 2 = 20.

*Maestria: 6 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [coral-8] Integração básica

**Resumo:** Integração inverte a regra do poder — some um ao expoente, depois divida por ele.

**Lição:** A integração desfaz a derivação: em vez de trazer o expoente para baixo, você aumenta ele em um, depois divide por esse mesmo número novo.

**Exemplo resolvido:** ∫x² dx = xⁿ/n → = 3

**Passos ensinados:**
1. Some um ao expoente: 2 + 1 = 3.
2. Divida por esse mesmo expoente novo.
3. ∫x² dx = x³/3, então n = 3.

*Maestria: 7 página(s) de 12 problemas · 80% de acerto · alvo 12s/questão.*

### [coral-9] Integrais definidas

**Resumo:** Ache a antiderivada, depois avalie nos dois limites e subtraia.

**Lição:** Uma integral definida tem dois limites. Ache a antiderivada primeiro, depois avalie no limite de cima e subtraia o valor no limite de baixo — essa diferença é a área de verdade.

**Exemplo resolvido:** ∫[1, 4] 2x dx → = 15

**Passos ensinados:**
1. A antiderivada de 2x é x².
2. Avalie no limite de cima: 4² = 16.
3. Subtraia o limite de baixo: 16 - 1² = 15.

*Maestria: 8 página(s) de 12 problemas · 80% de acerto · alvo 18s/questão.*

### [coral-10] Derivadas e integrais juntas

**Resumo:** Derive e avalie, depois integre e avalie — todas as habilidades da Faixa Coral em um problema.

**Lição:** Isso reúne tudo desta faixa: derive um polinômio e avalie num ponto, depois ache uma integral definida, e some os dois resultados.

**Exemplo resolvido:** f(x) = 2x² + 3x; f'(1) + ∫[0, 3] 2x dx → = 16

**Passos ensinados:**
1. Derive: f'(x) = 4x + 3. Avalie em 1: 4 + 3 = 7.
2. Integre: ∫2x dx = x². Avalie de 0 a 3: 9 - 0 = 9.
3. Some os dois resultados: 7 + 9 = 16.

*Maestria: 10 página(s) de 12 problemas · 80% de acerto · alvo 36s/questão.*

### [coral-exam] Prova da Faixa · Exame de graduação

**Resumo:** Uma questão de cada uma das 10 habilidades — passe e a faixa é sua.

**Lição:** A prova final da faixa: uma única página com uma questão por habilidade, na ordem em que você aprendeu — a dificuldade cresce até o fim. Sem repetição, sem enrolação.

**Exemplo resolvido:** lim(x→5) 4x + 8 → = 28

**Passos ensinados:**
1. 10 questões, uma para cada grau desta faixa.
2. Elas vêm na ordem de aprendizado, das fáceis primeiro — aqueça antes das difíceis chegarem.
3. Acerte 80%+ e a faixa é conquistada.

*Maestria: 1 página(s) de 10 problemas · 80% de acerto · alvo 36s/questão.*

---

# PARTE 2 — Modo Ninja: as questões (sem respostas)

*(Cada grau ninja é uma página única com o banco abaixo embaralhado. A Prova Ninja de cada faixa sorteia 1 questão de cada grau. Gabarito completo na Parte 3.)*

## Faixa Branca Ninja — Histórias de soma

*As mesmas somas — agora escondidas em historinhas. Leia, encontre, ataque.*

### [ninja-white-1] Primeiras missões

*Cada missão esconde uma soma. Encontre as duas quantidades sendo juntadas e some.*

**ninja-white-1#1** — Há 3 pássaros num fio. Chegam mais 2. Quantos pássaros agora?

**ninja-white-1#2** — Seu time faz 4 gols no primeiro tempo e 3 no segundo. Total de gols?

**ninja-white-1#3** — Um abrigo tem 2 cachorros e 6 gatos. Quantos animais no total?

**ninja-white-1#4** — Um ninja faz 5 flexões de manhã e 3 à noite. Quantas flexões?

**ninja-white-1#5** — Uma cesta tem 5 maçãs verdes e 4 vermelhas. Quantas maçãs?

**ninja-white-1#6** — Você enche 2 bexigas e seu amigo enche 4. Quantas bexigas juntas?

**ninja-white-1#7** — Você lê 6 páginas antes do jantar e 4 depois. Quantas páginas leu?

**ninja-white-1#8** — Você tem 3 figurinhas e ganha mais 4 numa troca. Quantas figurinhas agora?

### [ninja-white-2] Três de uma vez

*Algumas missões juntam três grupos. Some dois primeiro, depois traga o terceiro.*

**ninja-white-2#1** — No ônibus há 7 pessoas. No ponto, sobem mais 7. Quantas pessoas no ônibus?

**ninja-white-2#2** — Num jogo de tabuleiro você tira 4, depois 6, depois 5. Quantas casas anda no total?

**ninja-white-2#3** — Um canteiro recebe 5 mudas de tomate, 5 de alface e 6 de cenoura. Quantas mudas?

**ninja-white-2#4** — Um ninja treina 3 dias: 2 horas, 4 horas e 3 horas. Total de horas de treino?

**ninja-white-2#5** — Uma receita pede 7 morangos para a cobertura e 6 para o recheio. Quantos morangos?

**ninja-white-2#6** — Você coleta 8 conchas no sábado e 5 no domingo. Quantas conchas?

**ninja-white-2#7** — Você faz 6 katas na segunda, 2 na terça e 4 na quarta. Quantos katas nessa semana?

**ninja-white-2#8** — Você faz 9 pontos, sua irmã faz 8. Pontos juntos?

### [ninja-white-3] Dezenas em jogo

*Os números crescem para dois dígitos — a leitura continua igual. Cuidado com o vai-um.*

**ninja-white-3#1** — Sua playlist tem 36 músicas e você adiciona mais 22. Quantas músicas?

**ninja-white-3#2** — Um estacionamento tem 32 carros e 15 motos. Quantos veículos?

**ninja-white-3#3** — Um ninja salta 17 vezes na perna esquerda e 26 na direita. Total de saltos?

**ninja-white-3#4** — Um pote tem 45 balas, outro tem 38. Quantas balas nos dois potes?

**ninja-white-3#5** — Uma biblioteca empresta 28 livros de manhã e 34 à tarde. Quantos livros emprestados?

**ninja-white-3#6** — Uma padaria vende 56 pães antes do meio-dia e 29 depois. Quantos pães vendidos?

**ninja-white-3#7** — Você anda 18 minutos até a escola e 18 de volta. Quantos minutos andando?

**ninja-white-3#8** — Você tem 24 bolinhas de gude e ganha mais 13. Quantas bolinhas agora?

### [ninja-white-4] Bolsa de moedas

*As mesmas somas, agora com dinheiro. O total é o que sai da sua bolsa.*

**ninja-white-4#1** — A passagem custa R$ 5 na ida e R$ 5 na volta, mais um lanche de R$ 8. Total gasto?

**ninja-white-4#2** — A vovó te dá R$ 25 e o vovô te dá R$ 25. Quanto você recebeu?

**ninja-white-4#3** — O ingresso do cinema custa R$ 16 e a pipoca custa R$ 9. Quanto custa o passeio?

**ninja-white-4#4** — Um boné custa R$ 28 e as luvas custam R$ 14. Total do equipamento?

**ninja-white-4#5** — Um gibi custa R$ 18 e um pôster custa R$ 13. Custo total?

**ninja-white-4#6** — Um sanduíche custa R$ 12 e um suco custa R$ 7. Quanto pelos dois?

**ninja-white-4#7** — Você guarda R$ 15 em janeiro e R$ 24 em fevereiro. Quanto guardou?

**ninja-white-4#8** — Você vende limonada: R$ 23 no sábado, R$ 19 no domingo. Quanto ganhou?

### [ninja-white-5] Centenas

*As quantidades chegam às centenas agora. Alinhe as casas na cabeça — ou na lousa.*

**ninja-white-5#1** — Um avião voa 512 km, pousa, e voa mais 379 km. Distância voada?

**ninja-white-5#2** — Um clã ninja tem 128 alunos num dojo e 164 no outro. Quantos alunos?

**ninja-white-5#3** — Um estádio vende 234 ingressos na sexta e 145 no sábado. Ingressos vendidos?

**ninja-white-5#4** — Um jogo dá 150 pontos por fase. Você fecha uma fase e depois faz mais 235 pontos. Placar total?

**ninja-white-5#5** — Um vídeo tem 316 curtidas e ganha mais 172. Quantas curtidas agora?

**ninja-white-5#6** — Uma campanha arrecada 347 latas na semana 1 e 296 na semana 2. Latas arrecadadas?

**ninja-white-5#7** — Uma escola tem 268 alunos de manhã e 224 à tarde. Total de alunos?

**ninja-white-5#8** — Você anda 425 passos até o parque e 388 de volta. Quantos passos?

### [ninja-white-6] Números isca

*Um ninja de verdade ignora distrações. Cada história tem um número a mais que NÃO entra na soma.*

**ninja-white-6#1** — No 5º andar de um prédio, o apartamento 51 tem 3 quartos e o 52 tem 2. Quantos quartos nos dois apartamentos?

**ninja-white-6#2** — Num jogo de 90 minutos, seu time faz 2 gols no primeiro tempo e 3 no segundo. Total de gols?

**ninja-white-6#3** — Um ninja tem 14 anos e treina 45 minutos de taijutsu mais 35 minutos de meditação. Minutos de prática?

**ninja-white-6#4** — Um ônibus com 40 lugares leva 23 adultos e 14 crianças. Quantos passageiros?

**ninja-white-6#5** — Uma loja abre às 9h. Vende 126 camisetas na segunda e 158 na terça. Camisetas vendidas?

**ninja-white-6#6** — Uma receita serve 4 pessoas e usa 250 g de farinha mais 180 g de açúcar. Quantos gramas de ingredientes secos?

**ninja-white-6#7** — Você está na página 60 de um livro. Hoje leu 24 páginas e ontem leu 18. Quantas páginas nos dois dias?

**ninja-white-6#8** — Você tem 9 anos. Compra 12 canetas vermelhas e 15 azuis. Quantas canetas comprou?

### [ninja-white-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Azul Ninja — Histórias de subtração

*O que sobra, o que falta, quem tem mais — a subtração usa muitas máscaras.*

### [ninja-blue-1] O que sobra

*Estas missões tiram alguma coisa. Comece do total e remova o que saiu.*

**ninja-blue-1#1** — Há 10 velas num bolo e 6 são apagadas. Quantas continuam acesas?

**ninja-blue-1#2** — Há 12 jogadores no banco e 5 entram no jogo. Quantos ficam no banco?

**ninja-blue-1#3** — Um estacionamento tem 15 vagas e 9 estão ocupadas. Quantas vagas estão livres?

**ninja-blue-1#4** — Um ninja carrega 7 estrelas de arremesso e usa 2 no treino. Quantas restam?

**ninja-blue-1#5** — Uma árvore tem 8 laranjas. Você colhe 3. Quantas laranjas ficam na árvore?

**ninja-blue-1#6** — Uma pizza é cortada em 8 fatias e 3 são comidas. Quantas fatias restam?

**ninja-blue-1#7** — Você tem 9 biscoitos e come 4. Quantos biscoitos sobram?

**ninja-blue-1#8** — Você tinha 16 figurinhas e deu 7 para um amigo. Com quantas ficou?

### [ninja-blue-2] A diferença

*Aqui nada é tirado — duas quantidades são comparadas. A diferença entre elas é uma subtração.*

**ninja-blue-2#1** — A viagem tem 45 km e você já rodou 28 km. Quantos km faltam?

**ninja-blue-2#2** — O time A fez 73 pontos, o time B fez 68. Por quanto o time A venceu?

**ninja-blue-2#3** — Sua torre tem 18 blocos; a da sua irmã tem 11. Quantos blocos a sua tem a mais?

**ninja-blue-2#4** — Um guepardo corre a 110 km/h e um carro anda a 80 km/h. Quanto mais rápido é o guepardo?

**ninja-blue-2#5** — Um jogo custa 60 moedas e você tem 42. Quantas moedas faltam?

**ninja-blue-2#6** — Um livro tem 86 páginas, outro tem 52. Quantas páginas o primeiro tem a mais?

**ninja-blue-2#7** — Uma girafa tem 5 m e um cavalo tem 2 m. Quantos metros a girafa tem a mais?

**ninja-blue-2#8** — Você fez 14 pontos e seu amigo fez 9. Quantos pontos a mais você fez?

### [ninja-blue-3] Emprestando dezenas

*Estas exigem o 'emprestar'. Se a cabeça encher, a lousa está a um toque.*

**ninja-blue-3#1** — A bateria do celular estava em 100% e caiu para 34%. Quantos por cento foram usados?

**ninja-blue-3#2** — A linha de ônibus tem 43 paradas; você está na parada 26. Quantas paradas faltam?

**ninja-blue-3#3** — Dos 64 convidados, 27 já chegaram. Quantos ainda faltam?

**ninja-blue-3#4** — Um ninja precisa subir 85 degraus e já subiu 58. Quantos degraus faltam?

**ninja-blue-3#5** — Um texto tem 82 palavras e você já digitou 70. Quantas palavras faltam digitar?

**ninja-blue-3#6** — Uma caixa d'água tem 90 litros e 36 já foram usados. Quantos litros restam?

**ninja-blue-3#7** — Uma confeitaria faz 72 cupcakes e vende 48. Quantos sobram?

**ninja-blue-3#8** — Você tinha 51 bolinhas e perdeu 19 numa partida. Quantas bolinhas agora?

### [ninja-blue-4] O troco certo

*Troco é o que volta: o que você deu menos o que custou.*

**ninja-blue-4#1** — As compras custam R$ 76 e você paga com uma nota de R$ 100. Troco?

**ninja-blue-4#2** — Sua mesada é R$ 40. Depois do parque você tem R$ 12. Quanto custou o passeio?

**ninja-blue-4#3** — Um fone custa R$ 89. Você juntou R$ 67. Quanto ainda falta?

**ninja-blue-4#4** — Um ingresso custa R$ 52 com um cupom de R$ 9 de desconto. Quanto você paga?

**ninja-blue-4#5** — Um lanche custa R$ 13 e você paga com uma nota de R$ 20. Quanto de troco?

**ninja-blue-4#6** — Um livro custa R$ 34 e você entrega R$ 50. Qual é o troco?

**ninja-blue-4#7** — Você ganha R$ 60 lavando carros e gasta R$ 35 num presente. Quanto resta?

**ninja-blue-4#8** — Você tinha R$ 45 e comprou uma planta por R$ 28. Quanto dinheiro sobrou?

### [ninja-blue-5] Grandes quedas

*Agora centenas. Dois 'empresta' podem se encadear — vá coluna por coluna.*

**ninja-blue-5#1** — A biblioteca da escola tem 838 livros e 356 estão emprestados. Quantos estão nas estantes?

**ninja-blue-5#2** — Seu vídeo precisa de 1000 visualizações para um selo e tem 683. Quantas faltam?

**ninja-blue-5#3** — Trilha da montanha: 604 m de subida, você já subiu 418 m. Quantos metros até o topo?

**ninja-blue-5#4** — Um caminhão carrega 750 kg e entrega 425 kg na primeira parada. Quantos kg ainda carrega?

**ninja-blue-5#5** — Um celular custa R$ 920 e cai para R$ 785 na promoção. Quanto mais barato ficou?

**ninja-blue-5#6** — Um jogo tem 365 estrelas para coletar. Você tem 187. Quantas estrelas faltam?

**ninja-blue-5#7** — Um teatro tem 500 lugares e 342 ingressos foram vendidos. Quantos lugares vazios?

**ninja-blue-5#8** — Uma corrida tem 421 corredores e 269 já terminaram. Quantos ainda correm?

### [ninja-blue-6] Dois golpes

*Duas coisas saem do total, ou uma isca tenta entrar na sua conta. Leia duas vezes, ataque uma.*

**ninja-blue-6#1** — De 48 alunos em duas turmas de 24, 19 foram ao passeio. Quantos não foram?

**ninja-blue-6#2** — Um filme de 90 minutos: você viu 35 minutos ontem e 25 hoje. Quantos minutos faltam?

**ninja-blue-6#3** — Um padeiro começa às 6h com 144 pães, vende 87 e doa 31. Quantos pães restam?

**ninja-blue-6#4** — Um pote tem 60 balas. Na segunda você come 14, na terça 16. Quantas balas restam?

**ninja-blue-6#5** — Um tanque tem 200 litros. Uma mangueira tira 65 litros, outra tira 48. Litros restantes?

**ninja-blue-6#6** — Uma missão ninja começa com 100 pontos de energia. Escalar custa 37, lutar custa 26. Energia restante?

**ninja-blue-6#7** — Você tem 11 anos e 75 cartas. Troca 28 cartas com amigos. Com quantas cartas fica?

**ninja-blue-6#8** — Você tem R$ 80. Compra um tênis por R$ 45 e meias por R$ 12. Quanto sobra?

### [ninja-blue-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Roxa Ninja — Histórias de multiplicação

*Grupos iguais se escondem em todo lugar — caixas, fileiras, semanas, preços. Ache-os.*

### [ninja-purple-1] Grupos iguais

*Quando a mesma quantidade se repete, não some várias vezes — multiplique o grupo pelo número de grupos.*

**ninja-purple-1#1** — Cada aranha tem 8 patas. Quantas patas têm 5 aranhas?

**ninja-purple-1#2** — Cada bicicleta tem 2 rodas. Quantas rodas em 7 bicicletas?

**ninja-purple-1#3** — Cada mão tem 5 dedos. Quantos dedos em 9 mãos?

**ninja-purple-1#4** — Cada mesa acomoda 4 pessoas. Quantas pessoas em 6 mesas?

**ninja-purple-1#5** — Um fardo tem 6 caixinhas de suco. Quantas caixinhas em 4 fardos?

**ninja-purple-1#6** — Um ninja dá 9 chutes por rodada, em 3 rodadas. Quantos chutes?

**ninja-purple-1#7** — Uma cartela tem 10 figurinhas. Quantas figurinhas em 8 cartelas?

**ninja-purple-1#8** — Uma cartela tem 12 ovos. Quantos ovos em 3 cartelas?

### [ninja-purple-2] Fileiras e colunas

*Cadeiras num salão, azulejos no chão, pés de alface na horta: conte uma fileira e multiplique pelo número de fileiras.*

**ninja-purple-2#1** — Um cinema tem 9 fileiras de 8 poltronas. Quantas poltronas?

**ninja-purple-2#2** — Um estacionamento tem 3 andares com 10 vagas cada. Quantas vagas?

**ninja-purple-2#3** — Um tabuleiro de xadrez tem 8 casas por 8. Quantas casas?

**ninja-purple-2#4** — Uma bandeja de ovos é 6 por 5. Quantos ovos cabem?

**ninja-purple-2#5** — Uma barra de chocolate tem 6 quadradinhos por 4. Quantos quadradinhos?

**ninja-purple-2#6** — Uma horta tem 7 fileiras com 6 pés de alface cada. Quantos pés?

**ninja-purple-2#7** — Uma página do álbum cabe 4 fileiras de 7 figurinhas. Quantas por página?

**ninja-purple-2#8** — Uma parede leva 5 fileiras de 9 azulejos. Quantos azulejos?

### [ninja-purple-3] Etiquetas de preço

*Comprando várias unidades da mesma coisa? Multiplique o preço pela quantidade.*

**ninja-purple-3#1** — Cada rifa custa R$ 3. Você vende 25 rifas. Quanto arrecadou?

**ninja-purple-3#2** — Cada sorvete custa R$ 8. Sua turma compra 7. Total?

**ninja-purple-3#3** — Ingressos custam R$ 16 cada. Quanto para uma família de 4?

**ninja-purple-3#4** — Um caderno custa R$ 7. Quanto custam 6 cadernos?

**ninja-purple-3#5** — Um vaso custa R$ 12. Quanto custam 4 vasos?

**ninja-purple-3#6** — Uma fatia de pizza custa R$ 6. O time come 12 fatias. Conta total?

**ninja-purple-3#7** — Uma passagem custa R$ 5. Quanto custam 9 passagens?

**ninja-purple-3#8** — Uma skin custa R$ 15. Quanto custam 3 skins?

### [ninja-purple-4] Matemática do calendário

*Uma semana tem 7 dias, uma hora tem 60 minutos, um dia tem 24 horas. Tempo repetido é multiplicação.*

**ninja-purple-4#1** — Quantas horas há em 3 dias?

**ninja-purple-4#2** — Quantos dias há em 8 semanas?

**ninja-purple-4#3** — Um ninja dorme 8 horas por noite. Quantas horas numa semana?

**ninja-purple-4#4** — Uma aula dura 45 minutos. Quanto duram 4 aulas?

**ninja-purple-4#5** — Uma série lança 2 episódios por semana. Quantos episódios em 26 semanas?

**ninja-purple-4#6** — Você guarda R$ 20 por mês. Quanto em 12 meses?

**ninja-purple-4#7** — Você lê 15 páginas por noite. Quantas páginas em 9 noites?

**ninja-purple-4#8** — Você treina 30 minutos por dia. Quantos minutos em 6 dias?

### [ninja-purple-5] Cargas maiores

*Os fatores crescem. Quebre em partes (dezenas e unidades) ou rabisque na lousa.*

**ninja-purple-5#1** — Cada andar de um hotel tem 26 quartos. O hotel tem 9 andares. Quantos quartos?

**ninja-purple-5#2** — Cada ônibus escolar leva 42 alunos. Quantos alunos em 5 ônibus?

**ninja-purple-5#3** — Um caminhão faz 14 viagens levando 32 engradados cada. Quantos engradados transportados?

**ninja-purple-5#4** — Um setor do estádio tem 48 assentos por fileira e 15 fileiras. Quantos assentos no setor?

**ninja-purple-5#5** — Um trabalhador ganha R$ 85 por dia. Quanto em 4 dias?

**ninja-purple-5#6** — Uma caixa tem 24 garrafas. Quantas garrafas em 6 caixas?

**ninja-purple-5#7** — Uma granja tem 17 cercados com 12 galinhas cada. Quantas galinhas?

**ninja-purple-5#8** — Uma impressora imprime 35 páginas por minuto. Quantas páginas em 8 minutos?

### [ninja-purple-6] Golpes combinados

*Missões reais encadeiam golpes: uma multiplicação monta o total, depois algo é somado ou pago. Ordem das operações, estilo ninja.*

**ninja-purple-6#1** — Cada uma das 7 fileiras tem 14 cadeiras, mas 11 cadeiras estão quebradas. Quantas cadeiras utilizáveis?

**ninja-purple-6#2** — Ingressos custam R$ 9 cada. Um grupo de 6 paga com R$ 100. Troco?

**ninja-purple-6#3** — Um ninja treina 25 minutos por dia durante 5 dias, mais uma sessão longa de 40 minutos. Minutos totais?

**ninja-purple-6#4** — Um time de 5 jogadores faz 12 pontos cada, mais 9 pontos de bônus. Pontos totais?

**ninja-purple-6#5** — Uma biblioteca tem 6 estantes de 45 livros e recebe 30 livros novos. Total de livros?

**ninja-purple-6#6** — Você assa 4 formas de 12 biscoitos e dá 15. Quantos biscoitos sobram?

**ninja-purple-6#7** — Você compra 3 cadernos a R$ 8 cada e paga com R$ 30. Quanto de troco?

**ninja-purple-6#8** — Você vende 8 pulseiras a R$ 7 cada. O material custou R$ 20. Qual foi o lucro?

### [ninja-purple-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Marrom Ninja — Histórias de divisão

*Repartir por igual, empacotar em grupos, dividir a conta — a divisão está em tudo.*

### [ninja-brown-1] Partes justas

*Repartir por igual é dividir: o total repartido pelo número de pessoas.*

**ninja-brown-1#1** — 18 balas são divididas igualmente entre 3 amigos. Quantas balas para cada um?

**ninja-brown-1#2** — 4 ninjas dividem 32 estrelas de treino por igual. Estrelas para cada ninja?

**ninja-brown-1#3** — 40 jogadores formam 8 times iguais. Jogadores por time?

**ninja-brown-1#4** — 54 figurinhas preenchem 6 páginas iguais do álbum. Figurinhas por página?

**ninja-brown-1#5** — Um mês de 28 dias é dividido em semanas de 7 dias. Quantas semanas?

**ninja-brown-1#6** — Uma conta de R$ 45 é dividida entre 5 amigos. Quanto cada um paga?

**ninja-brown-1#7** — Uma pizza com 24 fatias é dividida entre 6 pessoas. Fatias por pessoa?

**ninja-brown-1#8** — Uma professora divide 35 lápis entre 5 mesas. Lápis por mesa?

### [ninja-brown-2] Quantos grupos

*Agora o tamanho do grupo é conhecido e a pergunta é quantos grupos o total forma. Ainda é divisão!*

**ninja-brown-2#1** — 48 alunos viajam em vans de 12 lugares. Quantas vans são necessárias?

**ninja-brown-2#2** — Um álbum de 72 fotos mostra 9 fotos por página. Quantas páginas?

**ninja-brown-2#3** — Um confeiteiro usa 8 maçãs por torta. Com 56 maçãs, quantas tortas?

**ninja-brown-2#4** — Um filme de 96 minutos é dividido em episódios de 8 minutos num resumo. Quantos episódios?

**ninja-brown-2#5** — Um ninja dá 60 chutes em séries de 10. Quantas séries?

**ninja-brown-2#6** — Uma corda de 63 m é cortada em pedaços de 9 m. Quantos pedaços?

**ninja-brown-2#7** — Você guarda R$ 15 por semana. Quantas semanas para juntar R$ 90?

**ninja-brown-2#8** — Você tem 30 ovos e cartelas que cabem 6. Quantas cartelas você enche?

### [ninja-brown-3] Sobras

*Leia com atenção o que se pede: às vezes é quantos grupos completos, às vezes é o que SOBRA.*

**ninja-brown-3#1** — 23 cupcakes são embalados em caixas de 4. Quantos cupcakes ficam fora de caixa completa?

**ninja-brown-3#2** — 38 cadeiras são organizadas em fileiras de 6. Quantas fileiras completas?

**ninja-brown-3#3** — 67 livros são empilhados em pilhas de 8. Quantas pilhas completas?

**ninja-brown-3#4** — 85 alunos formam times de 11. Quantos alunos ficam sem time?

**ninja-brown-3#5** — Uma balsa leva 9 carros por viagem. Com 75 carros na fila, quantas viagens COMPLETAS ela faz?

**ninja-brown-3#6** — Uma fita de 50 cm é cortada em tiras de 9 cm. Quantos cm de fita sobram?

**ninja-brown-3#7** — Você distribui 52 cartas para 7 jogadores, o máximo igual para cada. Quantas cartas sobram?

**ninja-brown-3#8** — Você tem R$ 94 e jogos custam R$ 12 cada. Depois de comprar o máximo possível, quanto dinheiro sobra?

### [ninja-brown-4] Preço por unidade

*Se 6 coisas iguais custam um total, uma custa o total dividido por 6. É assim que se comparam ofertas.*

**ninja-brown-4#1** — 12 barras de chocolate iguais custam R$ 96. Quanto custa uma barra?

**ninja-brown-4#2** — 4 amigos alugam uma quadra por R$ 92 e racham por igual. Quanto cada um paga?

**ninja-brown-4#3** — 6 canecas iguais custam R$ 54 no total. Preço de uma caneca?

**ninja-brown-4#4** — Um pacote com 8 pilhas custa R$ 32. Preço por pilha?

**ninja-brown-4#5** — Um plano de streaming de 3 meses custa R$ 45. Custo por mês?

**ninja-brown-4#6** — Um saco de 5 kg de arroz custa R$ 40. Preço por kg?

**ninja-brown-4#7** — Uma dúzia de rosas custa R$ 84. Preço por rosa?

**ninja-brown-4#8** — Você paga R$ 63 por 7 ingressos. Preço por ingresso?

### [ninja-brown-5] Missões longas

*Dividendos maiores agora. Vá tirando centenas e dezenas — ou faça a divisão longa na lousa.*

**ninja-brown-5#1** — 252 alunos são divididos em 6 grupos iguais para a feira. Alunos por grupo?

**ninja-brown-5#2** — 612 maçãs são divididas entre 12 barracas da feira. Maçãs por barraca?

**ninja-brown-5#3** — Um gamer ganha 855 de XP em 15 missões iguais. XP por missão?

**ninja-brown-5#4** — Um prêmio de R$ 360 é dividido entre 4 vencedores. Quanto para cada?

**ninja-brown-5#5** — Um relatório de 500 páginas é impresso em 5 volumes iguais. Páginas por volume?

**ninja-brown-5#6** — Uma fábrica embala 792 garrafas em engradados de 8. Quantos engradados?

**ninja-brown-5#7** — Uma viagem de 434 km é dividida igualmente em 7 dias. Km por dia?

**ninja-brown-5#8** — Você deve R$ 315 e paga em 9 parcelas iguais. Quanto é cada parcela?

### [ninja-brown-6] O golpe completo

*Estas missões pedem dois golpes: montar um total (multiplicar ou somar) e depois repartir. Um passo de cada vez.*

**ninja-brown-6#1** — 3 pizzas de 8 fatias são divididas entre 6 pessoas. Fatias por pessoa?

**ninja-brown-6#2** — 7 amigos coletam 322 latas e cada um carrega uma parte igual. Latas por amigo?

**ninja-brown-6#3** — A vovó assa 6 dúzias de biscoitos para 9 netos, divididos por igual. Biscoitos por neto?

**ninja-brown-6#4** — Uma corrida de 5 voltas de 400 m é dividida em 8 trechos iguais de revezamento. Metros por trecho?

**ninja-brown-6#5** — Uma equipe de 4 ninjas completa 5 missões de R$ 60 cada e divide o pagamento por igual. Quanto por ninja?

**ninja-brown-6#6** — Uma escola pede 8 caixas com 24 sucos para 3 turmas dividirem por igual. Sucos por turma?

**ninja-brown-6#7** — Você compra 2 pacotes de 36 figurinhas e divide tudo com um amigo. Quantas figurinhas cada?

**ninja-brown-6#8** — Você trabalha 4 horas a R$ 18 por hora e guarda metade. Quanto vai para a poupança?

### [ninja-brown-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Verde Ninja — Potências · Porcentagem · Proporção na vida real

*Descontos, receitas, luzes piscando — o domínio dos números encontra o mundo real.*

### [ninja-green-1] Quadrados e cubos

*Um quadrado de ladrilhos é um número ao quadrado; uma caixa de blocos é um cubo; algo que dobra sem parar é uma potência de 2.*

**ninja-green-1#1** — A loja de presentes embrulha as amostras de perfume em caixinhas cúbicas de papelão grosso, cada uma medindo 4 cm em todas as arestas. A gerente precisa do volume interno para saber quanta espuma de proteção colocar dentro, e já tem 12 caixas vazias esperando no balcão. Qual é o volume de uma caixa, em cm³?

**ninja-green-1#2** — Dona Inês vai enfim reformar o pequeno quintal onde seca suas ervas. O pedreiro mediu o espaço e viu que cabem exatamente 7 fileiras de ladrilhos, com 7 ladrilhos em cada fileira, além de 3 caixas de reserva para o caso de quebrar alguma peça. Antes de pagar a conta, ela quer saber o tamanho do pedido. Quantos ladrilhos cobrem o quintal?

**ninja-green-1#3** — Na farmácia do hospital, toda dose é anotada em mililitros, nunca em litros, e a estagiária aprendeu que um litro equivale a 10³ mililitros. Ela está preparando uma garrafa de 1 litro de soro fisiológico para a enfermaria do andar de cima e precisa escrever o volume no rótulo em mililitros. Quantos mililitros ela deve escrever?

**ninja-green-1#4** — Numa banca da feira de ciências sobre coisas que crescem sem controle, um estudante pega uma folha de papel e a dobra ao meio, depois ao meio de novo, repetindo o movimento 5 vezes até o papel ficar grosso demais para dobrar. Os visitantes chutam o resultado, e o melhor palpite ganha um bônus de 10 pontos. Quantas camadas de papel existem depois da última dobra?

**ninja-green-1#5** — O festival de dança da cidade termina com um grande número em grupo, e a coreógrafa quer seus 81 bailarinos dispostos num bloco quadrado perfeito na praça, com o mesmo número de pessoas em cada fileira e em cada coluna. O ensaio começa às 7 da noite e o bloco precisa estar pronto antes disso. Quantos bailarinos ficam em cada fileira?

**ninja-green-1#6** — Uma artista monta uma escultura para a praça da cidade colando 27 cubinhos idênticos até formar um único cubo grande e maciço, sem buracos e sem sobrar nenhum. Ela levou 4 dias só na colagem. Para encomendar a tinta, precisa saber quantos cubinhos ficam enfileirados em cada aresta do cubo pronto. Quantos são?

**ninja-green-1#7** — Uma associação de bairro comprou um terreno quadrado para montar uma horta comunitária, e a escritura informa que a área é de 144 m². Os voluntários querem esticar uma mangueira ao longo de um lado inteiro e precisam dessa medida antes de comprá-la na loja, onde a mangueira vem em rolos de 5 m. Quanto mede cada lado do terreno?

**ninja-green-1#8** — Uma turma de biologia deixa uma única bactéria numa placa de cultura aquecida às 8 da manhã, e a professora explica que essa espécie dobra a população a cada hora, sem falhar. Os alunos voltam para contar a colônia exatamente 6 horas depois, pouco antes de a placa ir para a geladeira. Partindo daquela 1 bactéria, quantas existem na volta?

### [ninja-green-2] Pontos de encontro

*Coisas que se repetem em ritmos diferentes se encontram no MMC. Repartir duas quantidades nos maiores pedaços iguais é o MDC.*

**ninja-green-2#1** — É segunda-feira de manhã no terminal e duas linhas de ônibus saem da plataforma exatamente no mesmo segundo. A partir daí a primeira parte a cada 6 minutos e a segunda a cada 8, enquanto uma terceira linha, que ninguém aqui está esperando, sai a cada 45. Em quantos minutos essas duas linhas voltam a partir juntas?

**ninja-green-2#2** — Na pista de um aeroporto pequeno, duas luzes de aviso dividem o mesmo poste: a vermelha pisca a cada 4 segundos e a azul a cada 10 segundos, e o registro da torre marca que as duas piscaram no mesmo instante agora há pouco. O mecânico quer filmar o próximo piscar simultâneo. Em quantos segundos elas piscam juntas de novo?

**ninja-green-2#3** — Numa padaria, dois timers foram ligados no mesmo instante: um toca a cada 15 minutos para conferir os fornos e o outro a cada 9 minutos para virar a massa. Eles acabaram de tocar juntos, e o padeiro quer tirar sua pausa do café na próxima vez em que os dois soarem ao mesmo tempo. Em quantos minutos isso vai acontecer?

**ninja-green-2#4** — O clube de futebol vai montar uma barraca de cachorro-quente no sábado. Os pães só vêm em pacotes de 12 e as salsichas só em pacotes de 8, e cada cachorro-quente leva exatamente um pão e uma salsicha. O tesoureiro se recusa a jogar qualquer coisa fora, então nada pode sobrar. Qual é o menor número de cachorros-quentes que dá para preparar?

**ninja-green-2#5** — Três amigos treinam na mesma pista, mas em ritmos bem diferentes: um completa a volta em 3 minutos, outro em 4 e o terceiro em 6. Todos cruzam a linha de largada juntos no início do treino e mantêm o ritmo constante pela hora inteira. Depois de quantos minutos os três cruzam a largada juntos outra vez?

**ninja-green-2#6** — Um grupo da igreja está montando cestas de frutas para doação e tem 24 maçãs e 36 peras sobre a mesa, além de um pacote de biscoitos que vai em toda cesta. Todas as cestas precisam ser idênticas, com o mesmo número de maçãs e o mesmo número de peras, e não pode sobrar fruta. Qual é o maior número de cestas que eles conseguem montar?

**ninja-green-2#7** — Uma banca de embrulhos terminou as festas com duas fitas sobrando, uma de 45 cm e outra de 60 cm. A dona quer cortar as duas em pedaços iguais para fazer laços na próxima temporada, com os pedaços mais compridos possíveis e sem desperdiçar absolutamente nada. Quanto mede cada pedaço?

**ninja-green-2#8** — Uma loja de materiais está orçando o piso de um depósito que mede 18 dm por 30 dm. O cliente quer ladrilhos quadrados, todos do mesmo tamanho, assentados sem cortar nenhum e cobrindo o piso exatamente. A loja trabalha com modelos de 2 dm até 9 dm. Qual é o lado do maior ladrilho quadrado que cabe exatamente?

### [ninja-green-3] Porcentagem do dia a dia

*Ache 10% dividindo por 10 e monte o resto. Veja se a pergunta pede o desconto ou o preço final.*

**ninja-green-3#1** — A loja de ferragens do bairro vende a mesma furadeira por R$ 150 há dois anos, mas o fornecedor acaba de anunciar um aumento de 10% a partir da próxima segunda. O dono está refazendo as etiquetas hoje à noite para que os clientes já vejam o valor novo logo pela manhã. Que preço deve constar na etiqueta nova?

**ninja-green-3#2** — A professora de música está preparando o concerto de fim de ano e informa que 30% dos 200 alunos matriculados na escola tocam algum instrumento, enquanto todos os demais cantam no coral. Ela precisa de uma cadeira para cada instrumentista, e o salão tem 150 cadeiras disponíveis. Quantos alunos tocam um instrumento?

**ninja-green-3#3** — A prova da autoescola tem 40 questões, e a folha de resultado diz que você acertou 90% delas, o suficiente para passar logo na primeira tentativa. Um amigo que fez a mesma prova às 8 da manhã quer saber sua pontuação exata em questões, não em porcentagem. Quantas questões você acertou?

**ninja-green-3#4** — De volta de um fim de semana no litoral, Camila conecta a câmera no notebook e encontra 48 fotos da viagem. Olhando uma a uma, percebe que 25% saíram tremidas por causa do vento forte, e quer apagar exatamente essas antes de mandar imprimir o álbum. Quantas fotos tremidas ela precisa apagar?

**ninja-green-3#5** — Depois de uma semana puxada, quatro colegas jantam no restaurante da esquina e a conta da comida fecha em R$ 90, impressa às 9 da noite. O serviço não está incluído, e o grupo decide deixar os 10% de gorjeta de praxe para o garçom que os atendeu a noite toda. Quanto eles deixam a mais sobre a mesa?

**ninja-green-3#6** — O cartão do seu banco devolve 5% de cada compra de supermercado como cashback, creditado na fatura do mês seguinte. Neste mês você gastou R$ 260 no supermercado e mais R$ 40 na farmácia, que o cartão não cobre de jeito nenhum. Quanto dinheiro volta para você pela compra do supermercado?

**ninja-green-3#7** — Sábado é dia de camisa no shopping, e a vitrine mostra a camisa que você quer há meses por R$ 80, enquanto todas as etiquetas daquela arara prometem um quarto de desconto até domingo. Você ainda vê um boné de R$ 35, mas o orçamento cobre uma peça só e a camisa ganha. Quanto sai da sua carteira no caixa?

**ninja-green-3#8** — Uma loja online anuncia o fone gamer que você acompanha há semanas por R$ 120, e hoje um cupom tira 15% desse preço para quem paga à vista. O frete custa R$ 9 e fica fora da promoção. Antes de decidir, você quer comparar com a loja da esquina. Quantos reais o cupom tira do preço?

### [ninja-green-4] Aumentos e promoções

*Aumento: some o valor da porcentagem. Desconto: subtraia. A pergunta sempre quer o valor DEPOIS da mudança.*

**ninja-green-4#1** — A família Ferreira pagava R$ 260 por mês de luz até instalar painéis solares no telhado, um investimento que reduziu essa conta em 25% logo no primeiro mês. A conta de água, de R$ 70, não mudou nada. Quanto passou a ser a nova conta de luz?

**ninja-green-4#2** — A promoção de inverno chegou à loja de jogos, e o título que você colocou na lista de desejos há três meses, marcado a R$ 60, agora está com um adesivo de 30% de desconto na prateleira. A edição de colecionador custa R$ 200 e está fora do alcance por enquanto. Quanto custa o jogo comum na promoção?

**ninja-green-4#3** — Depois de onze meses na oficina, Rafael enfim recebe a notícia que esperava: seu salário de R$ 1200 vai receber um aumento de 15% a partir de julho. O vale-transporte de R$ 90 continua exatamente igual ao de antes. Qual será o novo salário mensal dele?

**ninja-green-4#4** — Na loja de eletrodomésticos, a TV que você quer custa R$ 240 à vista, mas o vendedor explica que comprá-la parcelada deixa o preço 25% mais alto. Há também um suporte de parede de R$ 60 que você decide não levar. Se optar pelo parcelamento, qual é o preço da TV?

**ninja-green-4#5** — O contrato do pequeno apartamento está sendo renovado depois de dois anos, e o proprietário avisou que o aluguel de R$ 850 vai subir 10% já a partir do próximo mês. O condomínio continua em R$ 120 e é cobrado à parte, em outro boleto. Quanto passará a ser apenas o aluguel depois do aumento?

**ninja-green-4#6** — O órgão do censo publicou o relatório da última década de uma cidadezinha do vale: a população, que era de 4000 habitantes no início do período, cresceu 20% ao longo desses dez anos por causa da nova fábrica. O relatório cita ainda 300 casas construídas. Qual é a população agora?

**ninja-green-4#7** — Os ingressos para o show da banda saíam por R$ 90 quando as vendas abriram em março, mas, com as últimas cadeiras se esgotando, o preço dobrou, um aumento de 100% sobre o valor original. O estacionamento continua custando R$ 20, como sempre. Quanto custa um ingresso agora?

**ninja-green-4#8** — Planejando as férias de julho, Bruno encontra uma passagem para o litoral por R$ 480 e descobre que os pontos acumulados o ano todo dão 20% de desconto no valor do bilhete. O hotel, reservado à parte, custa R$ 600 e não tem desconto nenhum. Quanto ele paga pela passagem?

### [ninja-green-5] Regra de três

*Ache o fator de escala entre as duas situações (ou o valor de UMA unidade) e aplique.*

**ninja-green-5#1** — A bomba de irrigação da fazenda trabalha em ritmo perfeitamente constante e enche 500 L do reservatório em 2 horas. O produtor liga a bomba cedo e pretende deixá-la funcionando por 6 horas seguidas, até o sol ficar forte demais. Quantos litros a bomba terá bombeado?

**ninja-green-5#2** — A confeitaria da esquina segue uma regra fixa para os bolos de aniversário: uma dúzia de ovos dá exatamente para 3 bolos, nem mais nem menos. Nesta semana um escritório encomendou 8 bolos para uma festa na sexta, e o confeiteiro está montando a lista de compras agora. Quantos ovos ele precisa?

**ninja-green-5#3** — A ficha da receita do bolo da família serve 4 pessoas e pede 300 g de farinha, 2 ovos e uma pitada de sal. Neste domingo a mesa terá 8 pessoas, então Marta precisa ampliar a receita inteira mantendo exatamente o mesmo sabor. Quantos gramas de farinha ela deve usar?

**ninja-green-5#4** — Na estrada, sempre na mesma velocidade constante, um carro percorre 240 km usando 20 L de combustível. O motorista planeja uma viagem longa e quer encher o tanque completamente com 60 L antes de sair às 6 da manhã. Mantendo exatamente o mesmo consumo, quantos km ele consegue rodar?

**ninja-green-5#5** — Na papelaria ao lado da escola, 3 canetas iguais custam R$ 12, e o preço por caneta é o mesmo em qualquer quantidade. A professora quer levar 7 delas para a turma e ainda olha um caderno de R$ 15, que fica para outro dia. Quanto custarão as 7 canetas?

**ninja-green-5#6** — No mercado chique do centro, 6 kg de laranjas importadas custam R$ 90, e o preço por quilo não muda com a quantidade levada. A dona de uma casa de sucos quer comprar 10 kg para a semana inteira e tem R$ 200 na carteira. Quanto custarão os 10 kg?

**ninja-green-5#7** — O mapa turístico aberto sobre a mesa do hotel usa uma escala em que 1 cm no papel representa 50 km de estrada real. Com uma régua emprestada na recepção, Sofia mede a linha reta entre a cidade dela e a praia que quer visitar e encontra 7 cm. Quantos quilômetros reais são?

**ninja-green-5#8** — Um estúdio de fotografia imprime imagens que sempre mantêm a proporção de 4 para 3 entre largura e altura. Uma cliente pede uma ampliação da foto de formatura com 12 cm de largura, para caber num porta-retratos de madeira que ela já tem, sem que nada fique esticado. Qual será a altura da impressão, em centímetros?

### [ninja-green-6] Golpes numéricos

*Estas missões encadeiam golpes: uma raiz e um perímetro, um desconto e uma divisão, um MMC e uma contagem. Um passo de cada vez.*

**ninja-green-6#1** — A rifa do bairro paga um prêmio de R$ 300, mas o regulamento diz que metade desse valor vai direto para a escola local e só a outra metade é dividida entre os ganhadores. Você tem um bilhete que dá direito a 20% dessa metade restante. Quanto dinheiro você recebe?

**ninja-green-6#2** — Decidido a comprar uma moto usada, Lucas passou a guardar 15% do seu salário de R$ 2000 todos os meses, sem nunca mexer no que já separou. Ele começou em março e cumpriu a promessa por 4 meses seguidos, sem gastar nada do fundo. Quanto dinheiro ele juntou no total?

**ninja-green-6#3** — Duas balsas partem do mesmo cais às 8 da manhã, uma a cada 12 minutos e a outra a cada 18 minutos, mantendo esse horário o dia inteiro. Um fotógrafo quer registrar todos os momentos em que as duas partem no mesmo instante durante as próximas 3 horas, sem contar a partida inicial. Quantos momentos são?

**ninja-green-6#4** — O jornal da noite encerra com o desfile que percorreu a avenida no domingo e anuncia que 1,2 × 10⁴ pessoas assistiram das calçadas, com o apoio de 40 voluntários. O jornal do bairro quer esse número escrito por extenso para a capa de amanhã. Quantas pessoas foram ao desfile?

**ninja-green-6#5** — Três amigos decidem dar ao treinador a camisa oficial, que custa R$ 120 na loja do clube e está com 25% de desconto nesta semana. Eles combinam dividir o valor final em partes iguais entre si, sem contar os R$ 12 que já gastaram no cartão de felicitações. Quanto cada amigo paga?

**ninja-green-6#6** — Um canal de ciência explica que o novo satélite de observação gira ao redor do planeta a uma altura de 3,5 × 10² km da superfície, completando 16 órbitas por dia. Um espectador que está fazendo um trabalho escolar precisa copiar essa altitude no cartaz dele escrita por extenso. Quantos quilômetros são?

**ninja-green-6#7** — Um professor de educação física precisa dividir 91 alunos em times exatamente do mesmo tamanho para o torneio interclasses, com mais de 1 aluno por time e menos de 91, e ninguém de fora. Ele quer o maior número de times em quadra que conseguir formar. Quantos alunos terá cada time?

**ninja-green-6#8** — Uma escola vai cercar o jardim quadrado onde os alunos cultivam hortaliças, uma área de 196 m² segundo a planta desenhada no ano passado. A cerca precisa contornar os quatro lados inteiros, e o fornecedor vende o arame por metro. Quantos metros de cerca são necessários para contornar o jardim?

### [ninja-green-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Preta Ninja — Frações · Equações · Funções, aplicadas

*Monte a equação você mesmo — a história só te dá pistas.*

### [ninja-black-1] Frações em ação

*Uma fração DE um número é uma multiplicação. Quando a resposta for uma fração, dê na forma irredutível.*

**ninja-black-1#1** — A enfermeira da escola terminou o exame anual de visão numa turma de 35 alunos e anotou no relatório que 2/5 deles usam óculos para enxergar o quadro. A diretora precisa do número exato de alunos para a reunião com os pais no dia 12. Quantos alunos dessa turma usam óculos?

**ninja-black-1#2** — A padaria do bairro vende um bolo de limão cuja receita original, escrita pela avó da dona em 1975, usa 2/3 de xícara de açúcar para um único bolo. Para uma encomenda de casamento, a confeiteira precisa triplicar essa receita de uma vez só, mantendo todos os ingredientes na mesma proporção. Sem contar os 4 limões que também vai usar, quantas xícaras de açúcar a receita triplicada vai levar?

**ninja-black-1#3** — A professora de literatura pediu um relatório sobre um romance de 240 páginas, para entregar na sexta. Na quarta à noite, Helena confere o marcador e percebe que já leu 5/6 do livro, além das 4 páginas do prefácio, que não contam para o relatório. Para planejar a reta final, ela quer o número exato de páginas lidas. Quantas páginas são?

**ninja-black-1#4** — Começando uma rotina de corrida, Tiago sai de casa às 6 da manhã e corre 7/10 de quilômetro à beira do rio antes de parar para recuperar o fôlego num banco. Depois de 2 minutos de descanso, ele levanta e percorre mais 3/10 de quilômetro até a padaria, onde encerra o treino. Qual foi a distância total corrida, em quilômetros?

**ninja-black-1#5** — Depois da festa de aniversário no escritório, 3/4 do bolo de chocolate ainda estavam na bandeja, já que só apareceram 6 pessoas. Os dois colegas que ficaram para arrumar tudo combinam dividir o que sobrou em duas partes iguais e levar para casa. Considerando o bolo inteiro original, que fração dele fica com você?

**ninja-black-1#6** — Num domingo à noite em casa, Pedro começou um filme que dura exatamente 2 horas e o pausou quando a campainha tocou. Olhando a barra de progresso, viu que já tinha assistido a 3/4 do filme inteiro, enquanto o aplicativo ainda mostrava 3 episódios de outra série na fila. Para contar à irmã até onde chegou, ele precisa do tempo em minutos. Quantos minutos ele já assistiu?

**ninja-black-1#7** — O zelador de um prédio pequeno confere a caixa d'água toda manhã antes de abrir o portão. A caixa comporta 400 L quando está completamente cheia, e hoje o indicador de boia mostra que ela está com 5/8 da capacidade, dois dias depois do último abastecimento. Ele precisa anotar no livro de registro a quantidade exata de água, em litros, antes de ligar para o fornecedor. Quantos litros há na caixa?

**ninja-black-1#8** — Uma pizza grande chega para o grupo de estudos já cortada em 8 fatias iguais, e vocês dois resolvem anotar quem come o quê. Você pega 3/8 da pizza inteira enquanto revisa a matéria, e seu amigo come 2/8 durante o intervalo. O resto fica na caixa para o terceiro integrante do grupo, que só chega às 9. Que fração da pizza sobrou na caixa?

### [ninja-black-2] Feira dos decimais

*Pense em décimos e centésimos — 1,5 kg são 15 décimos. Dinheiro sempre tem duas casas.*

**ninja-black-2#1** — A turma de confeitaria está dobrando uma receita de biscoitos para a feira da escola e a instrutora pede a um aluno que pegue a manteiga na geladeira. A receita agora leva quatro tabletes de manteiga, cada um pesando 0,25 kg, além de 3 ovos que já esperam na bancada. A ficha de estoque é sempre preenchida em quilogramas. Quantos quilos de manteiga a receita usa?

**ninja-black-2#2** — Antes de uma excursão escolar à serra, cada aluno precisa pesar a mochila na porta do ginásio. Miguel coloca 2,4 kg de livros na mochila e depois acrescenta 1,8 kg de material, incluindo a capa de chuva e a garrafa de água. O professor avisa que tudo acima de 10 kg fica para trás. Qual é o peso total da mochila dele, em quilogramas?

**ninja-black-2#3** — No intervalo do almoço, Ana pede o prato do dia no restaurante perto do escritório e o recibo mostra um total de R$ 12,75, já com o suco. Ela entrega ao caixa uma única nota de R$ 20 e espera a impressão do comprovante. Havia ainda uma sobremesa de R$ 3 que ela decidiu dispensar hoje. Quanto de troco o caixa deve devolver?

**ninja-black-2#4** — O ano letivo está começando e a papelaria está cheia de pais fazendo listas. Clara escolhe cinco cadernos idênticos a R$ 3,20 cada um e devolve à prateleira um estojo de R$ 8, porque o orçamento está apertado neste mês. No caixa, ela quer o total dos cadernos antes de pagar. Quanto custam os cinco cadernos juntos?

**ninja-black-2#5** — O técnico de atletismo mantém uma ficha com os tempos de cada corredora nos 100 m rasos. No início da temporada, Júlia correu a prova em 12,8 s e, depois de três meses de treino, sua melhor marca caiu para 11,9 s no encontro regional. O recorde da equipe, que ela ainda não bateu, é de 11,2 s. Em quantos segundos o tempo dela melhorou?

**ninja-black-2#6** — Sábado de manhã na feira, a barraca de tomates exibe uma placa dizendo R$ 4,50 o quilo, o melhor preço do quarteirão inteiro. Dona Rita pede 3 kg para fazer o molho do almoço de família e ainda leva um maço de salsinha que o feirante dá de brinde. Antes de entregar o dinheiro, ela quer o valor exato dos tomates. Quanto ela vai pagar?

**ninja-black-2#7** — Saindo do aeroporto tarde da noite, Marcos pega o primeiro táxi da fila e o motorista explica a tarifa: uma bandeirada fixa de R$ 2,50 quando o taxímetro liga, mais R$ 1,50 por quilômetro rodado. O hotel fica a 5 km e o trajeto corre sem nenhum trânsito. Sem contar a gorjeta que ele possa deixar, quanto custa a corrida?

**ninja-black-2#8** — Um restaurante pequeno encomenda água para a semana e recebe um engradado com seis garrafas idênticas, cada uma com 1,5 L de água mineral. A gerente quer registrar o volume total desse engradado na planilha de estoque, onde tudo é anotado em litros, e já lançou 4 engradados de suco à parte. Quantos litros de água tem esse engradado?

### [ninja-black-3] Equações escondidas

*Chame a incógnita de x, traduza a frase numa equação e desfaça passo a passo.*

**ninja-black-3#1** — Na rodada de aquecimento de uma olimpíada de matemática, a questão 4 descreve um número inteiro misterioso em uma única linha: quando você soma esse número ao seu próprio dobro, o resultado é exatamente 27. Os alunos têm 5 minutos para responder e nenhuma calculadora é permitida na mesa. Qual é o número misterioso?

**ninja-black-3#2** — Numa noite de jogos em família, o tio desafia todo mundo com um enigma que diz ter aprendido quando tinha 12 anos. Ele pensa num número inteiro, dobra esse número, depois soma 5 ao resultado e anuncia que a resposta final é 17. Quem descobrir primeiro o número original ganha a última fatia de torta. Qual é o número que ele pensou?

**ninja-black-3#3** — O fotógrafo que prepara um álbum de família pergunta a idade dos dois primos para escrever no verso do retrato. A mãe responde que Maria é 4 anos mais velha que João e que, somando as duas idades, o total dá 26 anos. A terceira prima, de 20 anos, não aparece nessa foto. Quantos anos tem João?

**ninja-black-3#4** — O organizador de uma rifa preparou os bilhetes numerados e notou algo curioso nos três bilhetes que sobraram na caixa: os números são consecutivos, um logo depois do outro, e somando os três dá exatamente 48. Na caixa há ainda 2 bilhetes em branco, sem número nenhum. Qual é o menor desses três números?

**ninja-black-3#5** — Se preparando para um emprego novo, Diego vai à loja e escolhe 4 camisas exatamente do mesmo modelo e preço. No caixa, ele entrega uma nota de R$ 100 e a atendente devolve R$ 12 de troco, junto com um vale-desconto de R$ 5 para a próxima visita. Qual é o preço de cada camisa?

**ninja-black-3#6** — Um marceneiro está construindo um tampo de mesa retangular seguindo o esboço que o cliente mandou por mensagem. O esboço diz que o comprimento deve ser 6 unidades maior que a largura e que a tira de madeira que contorna toda a borda mede 44 unidades no total. O cliente pediu ainda 4 pés, que aqui não importam. Qual é a largura do tampo?

**ninja-black-3#7** — Uma biblioteca comunitária está recebendo uma doação e o voluntário da portaria confere tudo antes de assinar o recibo. A entrega traz 3 caixas lacradas iguais de livros mais 7 livros soltos levados na mão, e o bilhete anexo diz que a doação soma 31 livros. Todas as caixas têm exatamente a mesma quantidade. Quantos livros há dentro de cada caixa?

**ninja-black-3#8** — Voltando do hospital, dona Célia pegou um táxi cuja tarifa é uma bandeirada fixa de R$ 6 mais R$ 2 por quilômetro rodado. Ao chegar em casa, o taxímetro marcava um total de R$ 20, e ela pagou com duas notas. Agora ela quer conferir a distância registrada no recibo daquela noite. Quantos quilômetros teve a corrida?

### [ninja-black-4] A vida é uma função

*Uma parte fixa mais uma taxa vezes a quantidade: f(x) = b + ax. Às vezes você calcula, às vezes resolve ao contrário.*

**ninja-black-4#1** — A academia perto do escritório cobra uma taxa única de matrícula de R$ 50 na entrada e depois R$ 30 por cada mês de plano. Carlos decidiu treinar por 12 meses seguidos e pagou tudo adiantado para garantir o preço. O personal trainer, a R$ 80 a hora, não foi contratado. Qual é o custo total do ano inteiro?

**ninja-black-4#2** — A impressora do escritório foi abastecida na segunda com uma bandeja de 200 folhas de papel, e a equipe usa em média exatamente 15 folhas por dia útil. A secretária quer saber se o papel dura até a auditoria, contando 8 dias de uso normal, e ainda tem 2 resmas lacradas guardadas no armário. Quantas folhas sobrarão na bandeja depois desses 8 dias?

**ninja-black-4#3** — A operadora oferece um plano com uma mensalidade fixa de R$ 25 que já inclui ligações ilimitadas, mais R$ 2 por cada gigabyte de dados usado no mês. Em junho, Renata usou exatamente 6 GB navegando no ônibus, e ainda gastou R$ 9 num aplicativo de música, cobrado à parte. Quanto ficou a conta de telefone dela em junho?

**ninja-black-4#4** — Antes de um voo longo, Igor desconecta o notebook com a bateria marcando 80% e sabe, por experiência, que assistindo vídeos ela perde 5 pontos percentuais a cada hora de uso. O voo dura 11 horas, mas ele pretende trabalhar por 9 horas seguidas e só então dormir. Qual porcentagem a bateria vai marcar depois dessas 9 horas?

**ninja-black-4#5** — Para um projeto de ciências, Bianca plantou uma muda que media 12 cm no dia em que foi para o vaso, e já confirmou que ela cresce 3 cm a cada semana sob a lâmpada. O projeto precisa ser entregue depois de 6 semanas de observação, com uma foto tirada às 3 da tarde. Quantos centímetros a planta terá nesse dia?

**ninja-black-4#6** — Um aplicativo de corridas cobra um valor fixo de R$ 4 para abrir a viagem mais R$ 3 por quilômetro percorrido, sem taxa extra à noite. Na sexta passada, Paula pegou uma corrida até em casa e o app cobrou um total de R$ 25, que ela pagou no cartão. Ela quer conferir a distância antes de lançar a despesa no trabalho. Quantos quilômetros teve a viagem?

**ninja-black-4#7** — Um espaço de coworking oferece duas formas de pagar pela mesa: o plano A cobra R$ 10 fixos pelo dia mais R$ 4 por hora usada, enquanto o plano B não cobra nada de entrada e cobra R$ 6 por hora. Um freelancer que trabalha lá 3 dias por semana quer saber o ponto em que os dois planos custam exatamente o mesmo. Com quantas horas isso acontece?

**ninja-black-4#8** — Uma estação meteorológica na serra registra 6 °C no fim da tarde, e a previsão diz que a temperatura vai cair 2 °C a cada hora durante a noite, sem nenhum vento. O grupo que acampa ali quer saber quanto frio fará 5 horas depois, antes de decidir se acende o fogareiro. Que temperatura o termômetro vai marcar, em °C?

### [ninja-black-5] Terrenos quadráticos

*Quando a história dá um produto e uma relação, é uma quadrática. Cace dois números cuja soma e produto você conhece.*

**ninja-black-5#1** — Numa oficina sobre matemática antiga, a professora escreve no quadro um problema tirado de uma tábua babilônica: dois números inteiros positivos somam 10 e, multiplicados entre si, dão 21. Ela pede que a turma identifique o par e depois informe apenas o menor dos dois números. Qual é esse número menor?

**ninja-black-5#2** — Um chaveiro deixou um bilhete para o aprendiz com a combinação do cofre da oficina. Segundo o bilhete, a primeira parte do código é formada por dois números pares consecutivos cujo produto é exatamente 120, e o aprendiz deve digitar primeiro o menor deles. O cofre permite apenas 3 tentativas antes de travar. Qual é o menor desses dois números pares?

**ninja-black-5#3** — Uma família está comprando um lote retangular na saída da cidade, e o corretor mostra as medidas anotadas na planta: o comprimento do terreno é 3 m maior que a largura, e a área total registrada nos papéis é de 40 m². O anúncio está no ar há 30 dias sem nenhuma proposta. Qual é a largura do lote, em metros?

**ninja-black-5#4** — Uma gráfica está produzindo um pôster quadrado para um show, e o designer escreveu o lado do pôster como x + 3 centímetros no arquivo técnico. O cliente aprovou uma área final de exatamente 100 cm² para o quadrado impresso e encomendou 50 cópias. Que valor de x o operador deve digitar na ordem de serviço?

**ninja-black-5#5** — Uma paisagista está desenhando um jardim retangular para o pátio de um hotel, e o cliente impôs duas condições: o comprimento precisa ser exatamente o dobro da largura, e a área plantada deve totalizar 50 m². O projeto tem de ser entregue em 6 semanas, um prazo que não altera o formato. Qual é a largura do jardim, em metros?

**ninja-black-5#6** — Uma pintora encomendou uma tela quadrada para um retrato e a nota fiscal registra apenas a área da superfície: 169 cm². Para comprar a moldura de madeira, ela precisa da medida de um único lado, já que a loja vende as ripas por comprimento e cobra R$ 9 pelo corte. Quanto mede o lado da tela, em centímetros?

**ninja-black-5#7** — Uma revista de passatempos publicou um desafio no aniversário de 15 anos: encontrar dois números inteiros positivos cuja soma seja 15 e cujo produto seja 56. Quem enviar os dois números na ordem certa, o menor primeiro, concorre a um livro. A revista também trouxe 3 enigmas mais fáceis na mesma página. Que dois números são esses, o menor primeiro?

**ninja-black-5#8** — Uma sala de fuga esconde o código da porta final atrás de um bilhete deixado na escrivaninha. O bilhete diz que dois números inteiros consecutivos, um logo depois do outro, dão produto exatamente 72 quando multiplicados, e que o código é o menor dos dois. A equipe ainda tem 15 minutos no relógio. Qual é o número menor?

### [ninja-black-6] O desafio da faixa preta

*Qualquer pilar da faixa preta pode aparecer, às vezes dois de uma vez. Identifique a ferramenta antes de usar.*

**ninja-black-6#1** — A loja de brinquedos está esvaziando as prateleiras antes do inventário, e o jogo de tabuleiro que seu primo pediu, marcado a R$ 88, está na mesa de promoções sob uma placa anunciando 1/4 de desconto sobre o preço da etiqueta. Bem ao lado há um quebra-cabeça de 500 peças que você decide não levar. Quanto você entrega no caixa?

**ninja-black-6#2** — Dois irmãos encontram uma única barra de chocolate no armário e combinam uma regra antes de abrir: um terço da barra fica para o caçula, que tem 7 anos, e esse terço precisa ser dividido em duas metades iguais, uma para ele e outra para o primo que vem visitar. Considerando a barra inteira, que fração fica com o primo?

**ninja-black-6#3** — Dois serviços de streaming disputam o mesmo cliente. O serviço A cobra uma mensalidade de R$ 15 mais R$ 5 por cada filme alugado, enquanto o serviço B não cobra mensalidade e cobra R$ 10 por filme. Uma família que assiste a filmes junta às sextas quer saber com quantos filmes no mês os dois serviços custam exatamente o mesmo. Quantos filmes são?

**ninja-black-6#4** — O clube de matemática imprime um enigma no verso de cada cartão de encontro, e o desta semana diz o seguinte: pegue o número inteiro misterioso, dobre esse número, depois tire 9 do resultado, e o que resta é exatamente 15. O cartão traz ainda o número 4 da sala do encontro, que aqui não significa nada. Qual é o número misterioso?

**ninja-black-6#5** — Para o aniversário da filha, Vera prepara o ponche numa tigela de vidro grande sobre a mesa da cozinha. Ela despeja 1,75 L de suco de uva e depois acrescenta 2,25 L de água com gás, mexendo devagar para a espuma não transbordar. São 20 convidados, cada um com seu próprio copo. Quantos litros de ponche a tigela tem no final?

**ninja-black-6#6** — Revisando a fatura do cartão do mês passado, Sérgio encontra uma compra na loja de esportes em que pagou R$ 64 por um par de tênis de corrida depois de um desconto de 20% aplicado no caixa. Ele quer saber o preço impresso na etiqueta antes desse desconto, para comparar com uma oferta online de R$ 70. Qual era o preço original?

**ninja-black-6#7** — Um cadeado antigo de bicicleta na garagem abre com um número que o dono anotou anos atrás num pedaço de fita: é o menor de dois números inteiros consecutivos cujo produto é exatamente 132. Na fita também aparece o ano de 1998, quando a bicicleta foi comprada, que não faz parte nenhuma do código. Que número abre o cadeado?

**ninja-black-6#8** — Uma caixa d'água rachada no telhado de um prédio começa a manhã com 100 L dentro e perde 8 L a cada minuto pela rachadura, enquanto o encanador vem dirigindo do outro lado da cidade. O alarme dispara no momento em que o nível chega a 36 L, e o prédio tem 5 andares. Depois de quantos minutos o alarme toca?

### [ninja-black-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Vermelha Ninja — Geometria · Trigonometria no canteiro de obras

*Cercas, escadas, sombras e rampas — meça o mundo como um engenheiro.*

### [ninja-red-1] Cercas e pisos

*Cerca, moldura, pista: perímetro. Tinta, grama, ladrilho: área. Decida qual a história pede antes de calcular.*

**ninja-red-1#1** — A faixa de terra entre o prédio da escola e a calçada é estranha: vista de cima, suas duas bordas paralelas medem 6 m e 10 m, e a distância perpendicular entre essas bordas é de 5 m. Os alunos querem plantar temperos ali. Cada saco de terra custa R$ 7 e cobre apenas alguns metros quadrados.
> O fundo de sustentabilidade tem R$ 300 e o formulário que os alunos precisam assinar traz um único campo em branco: a superfície plantada. Que número entra nesse campo, em metros quadrados?

**ninja-red-1#2** — A pista que a escola construiu ao redor do pátio antigo se fecha em quatro lados retos de exatos 90 m cada, um ao longo de cada muro do pátio. O treino começa às seis da manhã, o treinador tem 18 atletas e um relógio que mede distância sozinho custa R$ 120 na loja de esportes.
> O treinador se recusa a comprar o relógio e escreve a série no quadro em voltas. Quantos metros um atleta corre em uma volta?

**ninja-red-1#3** — A sala de espera da clínica é um retângulo de 4 m por 5 m e o cliente escolheu peças quadradas de exatamente um metro de lado, então nada precisará ser cortado. Elas vêm em caixas de 6 a R$ 54 a caixa, e a clínica atende o bairro há 11 anos.
> A equipe começa na segunda-feira e não vai encomendar nenhuma peça a mais do que o piso engole. Quantas peças cobrem a sala?

**ninja-red-1#4** — Alice herdou uma faixa de terra na borda do distrito industrial e quer criar cabras ali, mas os animais fugiram duas vezes no inverno passado. A folha do agrimensor é seca: um retângulo perfeito, quinze metros de frente para a rua e nove metros de fundo. A tela soldada sai por R$ 14 o metro na loja de materiais da esquina.
> A audiência de zoneamento está marcada para 2027 e essa mesma loja cobra R$ 200 para entregar em qualquer ponto do distrito. Alice vai encomendar a tela num corte único, rente ao limite do terreno em todos os lados. Quantos metros ela precisa pedir?

**ninja-red-1#5** — O barco está atracado no porto antigo desde 1998 e a vela principal enfim será trocada. A nova é cortada como um triângulo: seis metros ao longo da retranca na base e oito metros de altura dessa base direto até o topo, no mastro. O tecido reforçado custa R$ 45 o metro quadrado.
> A oficina guarda um rolo de 15 m para reparos e o dono quer a conta antes de o pano ser desenrolado. Quantos metros quadrados de tecido a vela vai engolir?

**ninja-red-1#6** — O pintor contratado pela família Vargas cobra R$ 25 por hora e se recusa a começar antes que o cliente diga quanta superfície ele vai cobrir, porque cada lata da tinta escolhida — R$ 38 a lata — rende um número fixo de metros quadrados. Só a maior parede da sala será repintada: seis metros de largura, três metros até o teto, e nenhuma porta ou janela nessa face.
> A festa de formatura é no dia 12 e a tinta precisa ser comprada hoje. Quantos metros quadrados o cliente tem de informar?

**ninja-red-1#7** — O retrato que abre a exposição mede 30 cm por 20 cm e vai ser contornado por uma moldura fina de madeira que percorre toda a sua borda, com cantos em meia-esquadria. O marceneiro vende a tira por centímetro e tem 500 cm na prateleira; a mostra reúne 24 ampliações da colheita de 2019.
> A abertura é daqui a nove dias e o marceneiro vai cortar a tira desse único retrato antes de mexer em qualquer outro. Quantos centímetros ele precisa cortar?

**ninja-red-1#8** — O trecho retangular do campo abandonado que vai receber grama nova tem 25 m ao longo da linha lateral e 18 m de largura, e o fornecedor entrega os rolos a R$ 9 o metro quadrado, com pedido mínimo de 100 m². Três times amadores esperam por esse campo desde março.
> O zelador não consegue fechar o pedido sem o número que o fornecedor exige, e a copa regional começa em seis semanas. Quantos metros quadrados de grama ele precisa encomendar?

### [ninja-red-2] Caça aos ângulos

*Os ângulos do triângulo somam 180°; um canto é 90°; uma volta inteira é 360°. Descubra qual total a história usa.*

**ninja-red-2#1** — A guia de metal que o cozinheiro usa desde 1985 divide cada pizza em 8 porções idênticas, com cada corte indo do centro do círculo até a borda, de modo que as 8 aberturas no centro repartem por igual entre si a volta completa de 360°. Há 23 pedidos esperando no balcão hoje.
> A pizza grande sai por R$ 34 e um cliente reclama que a fatia dele parece mais estreita que a do irmão. Que abertura, em graus, cada porção deve ter no centro?

**ninja-red-2#2** — A tesoura do telhado da cabana tem dois lados inclinados de comprimento idêntico que se encontram na cumeeira, onde o carpinteiro mediu 40°. Como esses lados são gêmeos, os dois cantos apoiados no topo da parede também são gêmeos. As telhas que a tesoura vai sustentar pesam 250 kg e a madeira custou R$ 640.
> As chapas metálicas que prendem a tesoura foram encomendadas no dia 8 e precisam ser dobradas exatamente no ângulo desses cantos. Quantos graus mede cada um deles?

**ninja-red-2#3** — A vista lateral da rampa de carga prevista para o galpão 7 se fecha como um triângulo, e a folha de levantamento traz dois de seus cantos: 65° onde a rampa começa, na entrada, e 45° onde ela encontra a plataforma. O terceiro canto foi borrado pela chuva na folha de campo.
> As vigas de aço custam R$ 89 o metro e o desenho vence no dia 30, mas a serralheria não corta nada enquanto o canto que falta não for preenchido. Quantos graus ele mede?

**ninja-red-2#4** — Dois espelhos da bancada óptica são montados de modo que os ângulos que o feixe de laser faz com eles sejam complementares: postos lado a lado, fecham um ângulo reto de exatos 90°. O registro do técnico acrescenta uma única linha — o maior dos dois é precisamente o dobro do menor. O laser custou R$ 1.200 e a bancada tem 2 m.
> A calibração está marcada para o dia 19 e o suporte do ângulo menor precisa ser usinado primeiro. Quantos graus mede esse ângulo menor?

**ninja-red-2#5** — O eletricista apoia a escada de alumínio numa parede que sobe perfeitamente vertical a partir do piso plano da garagem, e o aplicativo de segurança do celular marca 62° entre a escada e o chão — dentro da faixa impressa no adesivo do fabricante. A luminária queimada fica a 4 m de altura; a garagem foi construída em 1976.
> Esse mesmo adesivo avisa que o ângulo entre a escada e a parede nunca deve cair abaixo de 25°, e a caixa de ferramentas dele, de 12 kg, permanece no chão. Que ângulo a escada faz com a parede?

**ninja-red-2#6** — O mostrador do relógio de estação que o relojoeiro restaura divide uma volta inteira, 360°, em doze marcas de hora iguais, e a peça saiu da fábrica em 1932. O aprendiz trava o mecanismo com o ponteiro dos minutos parado no 12 e o das horas parado no 3.
> O restauro foi orçado em R$ 480 e o dono quer o relógio de volta em 15 dias. Nesse instante congelado, qual é o ângulo entre os dois ponteiros?

**ninja-red-2#7** — O terreno triangular desenhado num mapa dos anos 1970 tem um canto esquadrejado em 90° perfeitos, confirmado com a estação total, e um segundo canto marcando 35°. O terceiro canto está ilegível sob uma mancha de café. O terreno está anunciado por R$ 52.000 e a taxa de levantamento é de R$ 300.
> O comprador não assina a escritura com um canto faltando na descrição, e o cartório fecha ao meio-dia. Quantos graus mede o canto ilegível?

**ninja-red-2#8** — Uma avenida diagonal corta uma rua que segue absolutamente reta por 3 km, sem uma única curva. No cruzamento, o topógrafo registrou 117° entre a avenida e um dos lados da rua reta, e deixou em branco o lado oposto desse mesmo cruzamento.
> A obra está orçada em R$ 75.000 e começa em maio, mas a programação do semáforo depende justamente da esquina para onde o trânsito de fato vira, que é a que continua em branco. Quantos graus mede esse ângulo restante?

### [ninja-red-3] O teorema da escada

*Parede, chão e escada formam um triângulo retângulo. Dois lados conhecidos, a² + b² = c² dá o terceiro.*

**ninja-red-3#1** — A linha está totalmente desenrolada em 13 m e o vento a mantém esticada em reta; o pai da menina, ao lado dela, mede a passos 5 m entre os pés da filha e o ponto da grama logo abaixo da pipa. O parque fecha às seis, a pipa custou R$ 9 e há outras 40 famílias no gramado.
> As árvores do fim do gramado têm 10 m e o pai quer saber se a pipa já passou delas. A quantos metros do chão ela está?

**ninja-red-3#2** — A parede da casa de 1994 sobe perfeitamente vertical a partir do piso molhado do quintal, e o pintor, seguindo a etiqueta colada na lateral da sua escada de 5 m, finca os pés dela a 3 m da base dessa parede. O balde dele leva 18 litros e a diária é de R$ 210.
> A veneziana que ele precisa alcançar fica bem na ponta de cima da escada, e o peitoril da janela corre a 3,5 m. A que altura da parede termina a escada, em metros?

**ninja-red-3#3** — A plataforma da nova rampa de skate fica 6 m acima do chão e sua face de madeira desce em uma única inclinação reta da borda de cima da plataforma até um ponto do chão a 8 m da base dela. O compensado custa R$ 23 a chapa e o prefeito prometeu a inauguração para dezembro.
> As chapas têm 2 m de largura e são assentadas uma após a outra ao longo dessa inclinação. Quantos metros tem a face inclinada?

**ninja-red-3#4** — O campo é um retângulo de 60 m por 80 m com caminhos calçados em dois de seus lados, e a estudante sempre atravessa do canto por onde entra direto até o canto oposto, onde fica o portão. O portão abre às 7:15 para os 340 alunos matriculados neste ano.
> A professora dela garante que o caminho calçado custa apenas 2 minutos a mais. Para encerrar a discussão, ela mede o próprio trajeto pela grama. Quantos metros ele tem?

**ninja-red-3#5** — O drone decola de uma marca de giz num estacionamento vazio com 22 minutos de bateria, voa 20 m para o leste, para para fotografar uma trinca no asfalto e então voa 21 m para o norte, na mesma altitude. A licença do operador foi renovada em 2024 e o equipamento custou R$ 1.500.
> O trecho de volta precisa ser feito em linha reta até a marca de giz. Quantos metros tem esse trecho?

**ninja-red-3#6** — O mastro está perpendicular ao chão plano e um único cabo de aço, de 25 m de ponta a ponta, vai do seu topo até um bloco de ancoragem enterrado a 7 m do pé dele. O bloco pesa 900 kg e a equipe tem 45 minutos de luz do dia.
> A antena de reposição precisa ser içada até o topo do mastro, e o cabo do guincho do caminhão tem 20 m. Quantos metros de altura tem o mastro?

**ninja-red-3#7** — O monitor em exposição mostra uma imagem visível de 40 cm de largura por 30 cm de altura, apoia-se num pedestal de 12 cm e traz a etiqueta de aniversário de R$ 349. Os clientes que mediram apenas a própria estante insistem em pedir o número que a indústria imprime na caixa, aquele tirado de um canto da imagem até o canto oposto.
> O vendedor precisa escrever esse número na etiqueta nova antes de a loja abrir. Quantos centímetros ele tem?

**ninja-red-3#8** — O terreno é um retângulo de 9 m por 12 m e o dono vai dividi-lo em dois pastos esticando um único arame reto de um canto até o canto oposto. O arame é vendido por metro a R$ 6 e a propriedade foi registrada em 2011 sob o número 87.
> A loja não corta arame duas vezes para o mesmo cliente, então o pedido precisa sair exato de primeira. Quantos metros de arame o dono compra?

### [ninja-red-4] Tanques e caixas

*Caixa: comprimento × largura × altura. Cilindro: círculo da base × altura (use π = 22/7 com raio 7). Cones e pirâmides: um terço disso.*

**ninja-red-4#1** — A caçamba do caminhão é uma caixa retangular de 4 m de comprimento, 2 m de largura e 3 m do piso da caçamba até a borda superior, e o motorista cobra R$ 180 por viagem mais R$ 12 de pedágio. O mestre de obras encomendou 5 viagens para a laje da fundação, que será concretada na semana que vem.
> O fornecedor vende areia por metro cúbico e não carrega um grão acima da borda. Quantos metros cúbicos viajam em uma viagem?

**ninja-red-4#2** — A cuba retangular da piscina do condomínio tem 8 m de comprimento, 5 m de largura e desce os mesmos 2 m em toda a extensão, sem parte rasa nenhuma. O prédio subiu em 1998, a reforma foi orçada em R$ 16.000 e só os azulejos levaram 14 dias para chegar.
> A companhia de água cobra uma tarifa especial pelo primeiro enchimento, e o formulário dela pergunta quanto a cuba comporta cheia até a borda, em metros cúbicos. Que número o síndico escreve?

**ninja-red-4#3** — A transportadora cobra estritamente por volume, e sua caixa padrão é um cubo de 60 cm de aresta. Hoje os embaladores vão carregar 35 delas num caminhão que parte às oito da manhã; cada caixa aguenta até 25 kg de livros e o cliente já pagou R$ 90 de fita.
> A linha da nota parte da capacidade de uma única caixa, em centímetros cúbicos, antes de qualquer multiplicação. Qual é essa capacidade?

**ninja-red-4#4** — Cada barril na adega da cervejaria é um cilindro reto revestido de aço inox: a base circular tem raio de 7 dm e o barril mede 10 dm da base à tampa. A casa foi fundada em 2009 e vende o barril cheio por R$ 760; o técnico trabalha com π = 22/7, o que faz a conta fechar exata.
> O formulário fiscal pede a capacidade de um barril em decímetros cúbicos. O que o técnico declara?

**ninja-red-4#5** — Cada peso de papel do kit corporativo de 200 sobe de uma base retangular de 9 cm por 10 cm até um único ponto 6 cm acima dela, com quatro faces planas inclinadas para dentro. A resina custa R$ 0,40 o centímetro cúbico e o cliente quer a entrega até o dia 15.
> O estúdio precifica a peça pela resina que ela engole, então o primeiro número necessário é quantos centímetros cúbicos uma peça consome. Qual é ele?

**ninja-red-4#6** — O copo que o fornecedor do festival está testando afunila de uma borda circular de raio 7 cm até um único ponto 12 cm abaixo dela, então precisa ficar em suporte e não sobre a mesa. Um pacote com 50 custa R$ 18, são esperados uns 5.000 visitantes no sábado e a embalagem indica π = 22/7.
> Os postos de água são dimensionados por quanto um copo cheio comporta, em centímetros cúbicos. Quanto é?

**ninja-red-4#7** — O reservatório que a cooperativa encomendou é um cubo: cada aresta, nas três direções, mede 3 m. Ele ficará sobre uma base de concreto de 1 m de altura, custou R$ 4.300 instalado e vai atender 12 famílias durante a estiagem. A cooperativa irriga o mesmo vale desde 1988.
> A placa lateral que traz a capacidade carimbada chegou riscada e ilegível, e a outorga de irrigação não sai sem esse número, em metros cúbicos. Qual é ele?

**ninja-red-4#8** — O tanque de vidro que o aquarista montou para a sala mede 40 cm de frente, 20 cm da frente ao fundo e 30 cm da base até a borda, e fica sobre uma mesa a 75 cm do chão. Ele cria peixes desde 2015; as placas custaram R$ 88 e o filtro que ele quer move 300 litros por hora.
> O condicionador de água da prateleira é dosado pela capacidade interna do tanque. Quantos centímetros cúbicos são essa capacidade?

### [ninja-red-5] Sombras e rampas

*A razão mais um lado real entrega o resto: sen = oposto/hip, cos = adjacente/hip, tg = oposto/adjacente.*

**ninja-red-5#1** — A escada extensível de 20 m está apoiada na parede vertical de treinamento e o instrumento no pé dela informa cos θ = 4/5 para o ângulo θ entre a escada e o chão — o valor que a equipe considera seguro. O caminhão carrega 2.000 litros de água e o exercício dura 45 minutos.
> O perímetro de segurança é isolado da parede até os pés da escada. A quantos metros da parede fica essa linha de cones?

**ninja-red-5#2** — A nova rampa lateral do shopping de 1996 sobe 3 m de altura a cada 4 m que avança pelo chão, número que o engenheiro anotou direto no croqui para que os carrinhos de entrega nunca encontrem um degrau. O corrimão custa R$ 54 o metro e a obra está marcada para o dia 9.
> A norma de acessibilidade é escrita inteiramente em termos de tg θ, então o croqui precisa ser traduzido antes de ir à prefeitura. Quanto vale tg θ dessa rampa, em forma de fração?

**ninja-red-5#3** — No instante em que o botânico fez a leitura, os raios de sol batiam no calçamento plano da praça a 45° e a sombra da árvore mais alta se estendia por 12 m, do pé do tronco até a ponta da sombra. A praça foi aberta em 1954 e tem 60 bancos.
> A prefeitura só poda árvores acima de 10 m, e o botânico não tem como subir nesta. Quantos metros ela tem?

**ninja-red-5#4** — No trecho de estrada que a ciclista registrou, o altímetro e o odômetro andaram juntos: cada metro de chão percorrido veio com exatamente um metro de subida, de baixo até em cima. A bicicleta dela pesa 9 kg, o passeio durou 80 minutos e o GPS fechou em 24 km.
> O regulamento da prova proíbe no percurso qualquer trecho mais íngreme que 40°. Que ângulo, em graus, esse trecho faz com a horizontal?

**ninja-red-5#5** — O cabo de aço vai reto por 18 m de uma âncora chumbada no chão até um ponto da torre de iluminação, encontrando o chão a 30°. A torre foi montada em 6 horas e o show vendeu 12.000 ingressos.
> A barra de luzes precisa ficar abaixo desse ponto de fixação. A quantos metros do chão ele está?

**ninja-red-5#6** — O cabo reto da tirolesa mede 26 m da plataforma de partida até o poste de chegada, e o laudo de segurança registra sen θ = 5/13 para o ângulo θ que o cabo faz com a horizontal. O parque já levou 4.000 visitantes desde a inauguração; o ingresso custa R$ 35 e o aluguel do capacete, R$ 8.
> O poste de chegada precisa ser baixo o bastante para o visitante descer com o pé direto no chão. Quantos metros de altura o cabo perde de uma ponta à outra?

**ninja-red-5#7** — O radar costeiro informa seus movimentos em radianos, como exige o manual de 2013: uma varredura da antena cobre π/6 antes de pausar, e o manual anota na mesma página que uma volta completa, 2π, corresponde a 360°. O equipamento consome 800 W e é revisado a cada 6 meses.
> A torre de controle registra tudo em graus e recusa o relatório do técnico em qualquer outra unidade. Que número ele lança para essa varredura?

**ninja-red-5#8** — Um dos novos estais vai reto por 14 m de uma âncora no chão até um ponto de fixação no mastro, abrindo 60° contra o próprio mastro. O mastro está de pé desde 1988 e o guindaste é alugado por R$ 900 ao dia.
> A equipe precisa prender uma braçadeira de aviso em volta do mastro logo abaixo desse ponto de fixação. Quantos metros de mastro há entre o chão e ele?

### [ninja-red-6] O canteiro de obras

*Obras de verdade encadeiam passos: calcule a área ou o comprimento primeiro, depois multiplique pelo preço ou converta a unidade.*

**ninja-red-6#1** — A lâmpada queimada fica exatamente 12 m acima da calçada, e a escada reta de 15 m da equipe é encostada na parede vertical até o topo parar bem na luminária. A van carrega 20 lâmpadas reserva, a lâmpada de reposição custa R$ 130 e o turno termina às onze.
> A calçada precisa ser isolada da parede até os pés da escada, e ela tem 8 m de largura. A quantos metros da parede esses pés vão parar?

**ninja-red-6#2** — A nova rampa de acesso da biblioteca precisa manter a inclinação legal de tg θ = 1/12 em todo o percurso, e o desenho aprovado avança 24 m em linha reta da calçada até a entrada. O corrimão custa R$ 60 o metro e a vistoria está marcada para o dia 14.
> A porta de entrada fica sobre um patamar, e o pedreiro precisa da altura que a rampa ganha para construí-lo. Quantos metros são?

**ninja-red-6#3** — A parede da sala tem 8 m de comprimento e 3 m de altura, e a cor anterior era tão escura que o pintor vai passar sobre a face inteira uma segunda vez, de ponta a ponta, antes de os inquilinos entrarem no dia 5. A tinta custa R$ 52 o balde e ele cobre cerca de 30 m² por hora.
> Ele cobra por superfície pintada, contando cada passagem separadamente. Quantos metros quadrados entram na nota?

**ninja-red-6#4** — A piscina do hotel, em serviço desde 1979, tem 10 m de comprimento, 4 m de largura e 2 m de profundidade de ponta a ponta, e a tabela da concessionária no mesmo formulário anota que 1 m³ = 1000 L. A água é cobrada a R$ 4 por mil litros e a bomba precisa de 9 horas para terminar o serviço.
> A declaração do primeiro enchimento tem de ser dada em LITROS. Que número o hotel declara?

**ninja-red-6#5** — A recepção da clínica aberta em 2008 é um retângulo de 6 m por 4 m, e o porcelanato escolhido para ela está cotado a R$ 12 o metro quadrado, com instalação incluída. As cadeiras de espera custam R$ 210 cada e o letreiro novo chega no dia 21.
> O contador só libera a linha do piso quando o número exato estiver preenchido, e a obra para se ela não for liberada hoje. Quantos reais custa o porcelanato dessa sala?

**ninja-red-6#6** — O lote é um retângulo de 20 m por 15 m e o serralheiro vai fechá-lo com painéis por toda a volta, deixando aberto só o trecho de 5 m da frente, onde depois entra o portão de correr comprado por R$ 1.900. A escritura foi assinada em 2022 e o muro dos vizinhos tem 3 m de altura.
> Os painéis são pedidos por metro e o fornecedor não aceita devolução. Quantos metros o serralheiro encomenda?

**ninja-red-6#7** — O oitão triangular acima da parede da frente da casa de campo tem 12 m de base e sobe 4 m até a cumeeira, e o revestimento tratado para ele sai a R$ 10 o metro quadrado. As telhas já custaram R$ 2.800 e a equipe de 5 pessoas termina em uma semana.
> O dono quer a linha do revestimento fechada antes de assinar qualquer coisa, e o fornecedor segura o preço só até sexta. Quantos reais o oitão vai custar?

**ninja-red-6#8** — O pátio do restaurante é quadrado e o agrimensor mediu sua superfície em exatos 81 m². As guias de granito, assentadas ao longo de cada lado desse quadrado, custam R$ 5 o metro instalado; o pátio comporta 16 mesas e cada guarda-sol custou R$ 240.
> O marmorista entrega na primeira segunda-feira do mês, cobra todo o percurso adiantado e não volta para assentar um metro que falte. Em quantos reais fica a guia?

### [ninja-red-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Dourada Ninja — Crescimento · Acaso · Sistemas — nível vestibular

*Juros, epidemias, senhas e coordenadas — a matemática que move o mundo.*

### [ninja-gold-1] Mundo exponencial

*Dobrar n vezes multiplica por 2ⁿ. O caminho de volta ('quantas dobradas?') é um logaritmo. Escalas log (pH, magnitude, dB) escondem potências de 10.*

**ninja-gold-1#1** — A amostra foi coletada abaixo de um emissário onde 2 fábricas despejam com licença, e o aparelho devolveu concentração de íons de hidrogênio igual a 10⁻³. O cabeçalho do formulário traz a convenção que o órgão usa desde que ele foi redigido: o pH é o logaritmo negativo, na base 10, dessa concentração. O segundo visor do aparelho mostra o expoente sozinho, −3, e um estagiário já copiou essa leitura na coluna errada; a tabela de referência lista 25 substâncias reguladas e uma multa de R$ 9.000 por infração.
> O formulário que o químico precisa assinar não tem campo para concentrações, só para pH, e o despejo é irregular abaixo de pH 5. Que valor ele lança?

**ninja-gold-1#2** — A bula do medicamento pós-operatório informa meia-vida de 6 horas: qualquer quantidade presente na corrente sanguínea num dado momento cai à metade seis horas depois. Um paciente de 72 kg recebeu uma dose única de 800 mg às oito da manhã e tem alta prevista para o 3º dia. A ala tem 14 leitos, e a enfermeira da noite deixou escrita na prancheta a regra de bolso dela: metade de qualquer dose some até o fim do primeiro dia.
> O farmacêutico só pode autorizar a segunda dose na manhã seguinte se restar menos de 60 mg da primeira circulando. Vinte e quatro horas depois daquela aplicação, quantos miligramas restam no paciente?

**ninja-gold-1#3** — A câmera que fotografou a placa foi instalada em 2018 e a gravação daquela noite guarda 240 quadros. O programa de tratamento oferece um único botão de zoom: a imagem abre em 1× e cada toque deixa a foto ampliada o dobro do que estava antes daquele toque. O laudo vence às cinco da tarde, e a estação ao lado oferece outra ferramenta: um cursor que soma 2× à ampliação a cada entalhe.
> O tribunal só aceita a imagem com um registro reprodutível, então a analista precisa declarar de antemão, antes de tocar no arquivo, quantos toques levam a foto do tamanho de abertura até os 64× em que a placa fica legível. Quantos toques são?

**ninja-gold-1#4** — A casa noturna abriu em 2021 e comporta 400 pessoas, e o medidor da consultora na divisa do terreno marca 30 dB acima do ruído de fundo da rua. O manual que ela cita no laudo mantém uma linha em negrito: cada 10 dB somados multiplicam por 10 a intensidade física do som. O acústico contratado pela casa já entregou ao juiz o número que prefere: 30 vezes, simples assim, uma para cada decibel. A multa em discussão é de R$ 12.000 e a audiência já foi adiada duas vezes.
> O advogado dos moradores quer uma frase que o juiz possa ler sem tabela, dizendo quanto a música é mais intensa que a rua que ela encobre, expresso como um único multiplicador. Por qual fator?

**ninja-gold-1#5** — A cepa que o laboratório testa cresce num gel nutritivo mantido a 37 °C, e a técnica semeou a placa com exatamente 2 células às nove da manhã. Ao longo dos 12 ensaios feitos neste semestre a colônia terminou cada hora completa três vezes maior do que estava quando aquela hora começou, e nada morreu. Uma placa de controle semeada na mesma manhã ganha fixas 3 células por hora, e a estufa custou R$ 4.600.
> A supervisora precisa decidir antes do almoço se congela a amostra: a placa fica ilegível acima de 200 células, e este lote de gel vale por 30 dias. Quantas células estarão na placa 4 horas depois da semeadura?

**ninja-gold-1#6** — Dois tremores foram registrados a 40 km um do outro na mesma falha, e o boletim do instituto traz a nota de rodapé que sempre imprime: um degrau inteiro na escala de magnitude significa dez vezes a energia liberada. O primeiro evento marcou magnitude 4 e durou 11 segundos; o segundo chegou a magnitude 6 e foi sentido em 3 cidades. A tabela-resumo no alto do boletim já imprime a diferença entre os dois eventos, 2 pontos de magnitude, e a rede de 18 estações funciona desde 2005.
> A assessoria de imprensa se recusa a publicar pontos de escala e o editor quer a comparação em números simples. Quantas vezes o segundo terremoto foi mais forte que o primeiro?

**ninja-gold-1#7** — Marina, 27 anos, quitou a última parcela de um financiamento estudantil de R$ 3.200 em dezembro e abriu conta numa corretora na mesma semana. Em janeiro aplicou R$ 500 num fundo agressivo de tecnologia cujo histórico o assessor chamou de anormal: ele fechou todos os anos com o dobro do valor com que abriu, e a projeção deste trimestre mantém a sequência viva. O banco da esquina havia oferecido a ela um plano de poupança que pagaria fixos R$ 2.000 sobre o mesmo depósito no mesmo período, e o aluguel dela é de R$ 850 por mês.
> Ela prometeu a si mesma não mexer na conta, e não haverá depósitos nem retiradas. O plano é tirar o dinheiro ao fim do quarto ano completo para pagar uma reforma de R$ 6.000. Quantos reais estarão ali?

**ninja-gold-1#8** — O avô morreu em 2014 e deixou R$ 1000 para cada irmão. O mais novo passou a parte dele para um fundo que fechou todos os anos do seu histórico de dez anos com o dobro do valor com que abriu; o mais velho comprou uma moto de R$ 7.300 e não para de mencionar os R$ 95 por mês que paga de seguro.
> No jantar de família o irmão mais novo declarou sua condição em voz alta: não mexe em nada, não acrescenta nada e tira o dinheiro no dia em que o saldo marcar R$ 8000 pela primeira vez — oito vezes o que ele pôs, como o mais velho repete sem parar do outro lado da mesa. Se o fundo mantiver o histórico, ao fim de qual ano completo ele saca?

### [ninja-gold-2] Padrões que pagam

*Passo constante: PA (aₙ = a₁ + (n−1)r, soma pelo pareamento de Gauss). Razão constante: PG. Uma PG que cai pela metade sem parar ainda tem total finito.*

**ninja-gold-2#1** — A árvore que a botânica acompanha há 7 anos ganha galhos num padrão estrito: o primeiro estágio deu 1 galho, o segundo deu 1 de novo, e daí em diante cada estágio dá tantos quanto os dois estágios anteriores somados — 2, depois 3, depois 5, depois 8, depois 13. O formulário da agência tem espaço para apenas sete estágios, e a última linha já preenchida termina em 13. Ela fotografa o exemplar a cada 15 dias e escreve num caderno comprado por R$ 12, já no 4º volume.
> O relatório dela vence antes de o oitavo estágio abrir, e a agência de fomento quer a previsão adiantada. Quantos galhos dá o oitavo estágio?

**ninja-gold-2#2** — A história que a professora conta é antiga: um mestre-escola do século XVIII, querendo uma hora de silêncio, mandou os alunos somarem todos os números inteiros de 1 a 100. O jovem Gauss largou a lousa poucos segundos depois com o número certo nela e nunca explicou como, motivo pelo qual o mestre continuou furioso. Um menino do fundo, seguro de si, já ofereceu cinco mil — cem números, diz ele, com média cinquenta. A turma de hoje tem 32 alunos, a prova vale 40 pontos e o sinal toca em 20 minutos.
> Antes que alguém abra um caderno ou pegue uma calculadora, a professora quer o mesmo número que Gauss escreveu naquela lousa, e ela espera com o giz na mão. Qual é?

**ninja-gold-2#3** — A pirâmide que o centro acadêmico monta tem 1 copo no topo, 2 no nível abaixo, 3 no seguinte, e assim por diante para baixo: cada nível carrega exatamente um copo a mais que o nível apoiado sobre ele. O nível de baixo é o décimo e tem 10 copos. A pirâmide do ano passado, todo mundo lembra, tinha 10 copos em cada um dos seus 10 níveis. A festa espera 180 pessoas e os copos vieram em pacotes de 24 a R$ 7 o pacote.
> Os organizadores têm três pacotes sobrando do ano passado e querem saber se só a pirâmide os esvazia. Quantos copos a pirâmide pronta usa?

**ninja-gold-2#4** — A professora soltou a bola de borracha de exatamente 128 cm, lidos numa régua colada à parede, e os 30 alunos a viram voltar até metade da altura de onde caiu, e repetir esse mesmo comportamento a cada impacto. Uma bola mais velha e murcha na prateleira perde fixos 24 cm de altura a cada impacto. A bola na mão dela custou R$ 6 e o teto da sala tem 3 m.
> A câmera lenta só resolve subidas acima de 5 cm, e a turma precisa anotar uma previsão antes de o vídeo rodar. Contando a primeira subida depois da soltada como o quique um, a que altura a bola chega no quarto quique, em centímetros?

**ninja-gold-2#5** — A sala do teatro se alarga em direção ao fundo, então o arquiteto desenhou a fileira 1 com 20 poltronas e deu a cada fileira seguinte 3 poltronas a mais que a da frente, até a última, a fileira 12. A estimativa rápida do empreiteiro, anotada a lápis na margem da planta, prevê 3 poltronas a mais para cada uma das 12 fileiras. A casa reconstruída tem pé-direito de 9 m, orçamento de R$ 220.000 e 40 anos de abandono nas costas.
> O corpo de bombeiros dimensiona a saída dos fundos apenas pela fileira mais larga e não carimba a planta sem esse número. Quantas poltronas tem a fileira 12?

**ninja-gold-2#6** — Em vez do notebook de R$ 2.400 que namorava desde 2023, Daniel abriu um envelope de reserva de emergência no mês em que seu contrato foi renovado. Colocou R$ 50 nele no primeiro mês e desde então aumenta o valor em R$ 10 sobre o mês anterior todo mês: R$ 60 no segundo, R$ 70 no terceiro, e assim sem pular nenhum. Um colega que faz o mesmo desafio põe fixos R$ 50 todo mês e nunca aumenta. A academia dele custa R$ 75 por mês e ele recebe no dia 5.
> Ele só mantém o plano se o envelope tiver R$ 900 ou mais no décimo mês. Quantos reais há nele depois do décimo depósito?

**ninja-gold-2#7** — O canal de culinária começou com um tripé de R$ 300 e fechou o mês passado com exatos 5000 inscritos. A cada doze meses desde o início, o público terminou o período com o dobro do tamanho com que começou, e as análises da plataforma não veem motivo para o ritmo mudar. Um canal rival do mesmo nicho ganha fixos 5.000 inscritos por ano e faz isso desde 2022. A criadora publica 2 vídeos por semana e recebe R$ 18 por mil visualizações.
> Um patrocinador só assina um contrato de três anos se o canal for projetado acima de 30.000 inscritos ao fim dele. Que número entra no contrato para o fim do terceiro ano?

**ninja-gold-2#8** — Solto uma única vez na abertura do museu, o pêndulo percorre um arco de 8 m na primeira passagem; o atrito deixa cada passagem seguinte com metade do arco da anterior, e o peso nunca chega a parar de fato. A legenda de rascunho do estagiário argumenta que, como o peso nunca para, número finito nenhum cabe na placa. O aparato foi instalado em 1997, a sala tem 12 m de largura e a visita guiada dura 50 minutos.
> O curador quer uma legenda com a distância total que o peso percorreria se fosse deixado balançando para sempre, e a placa tem espaço para dois dígitos. Quantos metros são?

### [ninja-gold-3] Contando as chances

*Ordem importa: arranjo. Não importa: combinação. Probabilidade = favoráveis sobre o total — e contar os dois lados é o trabalho de verdade.*

**ninja-gold-3#1** — A agência atende 3.200 clientes e o autoatendimento 24 horas vai receber um novo código de porta: 4 dígitos tirados de 0 a 9, com a regra de que um dígito já usado não pode aparecer de novo no mesmo código. Dois códigos com os mesmos dígitos em ordem diferente abrem portas diferentes e contam como códigos diferentes. O memorando lembra que o código antigo permitia repetir dígito e credita àquele esquema dez mil possibilidades. O consultor cobrou R$ 8.000 pelo estudo e a câmera do saguão guarda 30 dias de gravação.
> A área de conformidade só aprova o esquema se houver mais de 5.000 possibilidades. Quantos códigos a regra permite?

**ninja-gold-3#2** — A barraca da noite beneficente entrega ao jogador dois dados honestos, um vermelho e um azul, e paga quando as duas faces somam 7. Um painel sobre a barraca expõe as onze somas possíveis, de 2 a 12, lado a lado em quadros do mesmo tamanho. A ficha custa R$ 5, a barraca espera 300 jogadores e o prêmio é uma bicicleta avaliada em R$ 600.
> Os amigos perguntam a uma estudante que estudou probabilidade se vale a pena a ficha, e ela quer responder com um número para um único lançamento do par. Qual é a probabilidade dessa soma, em forma de fração?

**ninja-gold-3#3** — O baralho que a mágica usa é completo e comum, 52 cartas bem embaralhadas, 4 delas ases. Ela pede a um voluntário da plateia de 90 convidados que tire uma carta às cegas e promete devolver o ingresso de R$ 30 se ela for um ás. O discurso dela lembra a ele que o baralho tem 52 cartas e que só uma vai sair. O espetáculo está em turnê desde 2017 e hoje é a 200ª apresentação.
> Ela jura que não há truque de mão nesse número específico, então a carta é de fato aleatória, e o convidado quer saber o que está sendo oferecido a ele. Qual é a probabilidade de ele receber o ingresso de volta, em forma de fração?

**ninja-gold-3#4** — O globo guarda os números de 1 a 10 e o supermercado sorteia dois diferentes de uma vez todo sábado; um cupom que traz esses dois números ganha, não importa qual dos dois saia primeiro. Cada cupom custa R$ 2 e permite marcar exatamente um par. O registro do globo anota qual dos dois números saiu primeiro e imprime cada resultado ordenado numa linha própria. A loja abriu em 2016, imprime 900 cupons por semana e oferece um vale de R$ 700 como prêmio desta semana.
> Uma cliente marca um par, dobra o cupom dentro da bolsa e pergunta à caixa qual é de fato a chance dela nesse único sorteio de sábado. Qual é a probabilidade, em forma de fração?

**ninja-gold-3#5** — O logotipo embaralha as 5 letras de NINJA — N, I, N, J e A, cada uma usada uma vez — e a escola vai imprimir um cartão para cada arranjo que o olho consiga distinguir. Os dois N saíram da mesma matriz e são fisicamente idênticos, então trocá-los deixa um cartão que nenhum visitante diferenciaria do primeiro. A impressão custa R$ 3 por cartão; o salão comporta exatos 120 quadros, e a organizadora já deu como certo que a tiragem enche todos eles. A abertura é numa sexta-feira.
> A escola encomenda toda a tiragem num lote único para a exposição de 2026, sem repetir nenhum cartão na parede. Quantos cartões são?

**ninja-gold-3#6** — O menu fechado custa R$ 89 por cabeça e todo convidado sai com uma entrada, um prato principal e uma sobremesa na conta — nunca dois do mesmo tipo, nunca uma etapa pulada. O cardápio traz 5 entradas, 6 pratos principais e 4 sobremesas; os 30 vinhos são cobrados à parte e não pertencem a etapa nenhuma. A primeira prova da gráfica contou os 15 pratos do cardápio e compôs esse número. A cozinha vira 60 lugares por serviço e o livro está cheio para o dia 18.
> O cartaz dos quinze anos vai imprimir, em letras grandes acima da porta, o número de contas diferentes com que um convidado pode sair. Que número é esse?

**ninja-gold-3#7** — Oito corredores se alinham para os 400 m da final regional diante de 2.500 espectadores, e a folha da cerimônia tem três linhas — ouro, prata, bronze —, um nome em cada. Duas folhas com os mesmos três nomes em ordem diferente são duas folhas diferentes. O anuário do clube imprime, toda temporada, a lista de trios que poderiam dividir o pódio, em ordem alfabética e sem considerar quem fica em qual degrau. A inscrição custou R$ 40 por atleta e as medalhas foram cunhadas numa oficina a 20 km dali.
> A gráfica quer saber quantas versões poderiam sair daquela prova, supondo que não haja empates nem desistências, antes de acertar a impressora e rodar todas de uma vez. Quantas são?

**ninja-gold-3#8** — Seis voluntários constam da lista ativa da associação, e dois deles vão à reunião na prefeitura sobre um projeto de pavimentação de R$ 50.000. Os dois vão sentar com o mesmo poder e assinar a mesma ata, então uma folha com os nomes de Ana e Bruno é exatamente a mesma folha que uma com Bruno e Ana. O sistema antigo da associação ainda registra um primeiro e um segundo delegado, e listaria cada dupla duas vezes. Ela foi fundada em 2012, se reúne todo dia 10 e paga R$ 80 pelo salão.
> A secretária quer todas as duplas possíveis datilografadas antes da votação, uma por linha. Quantas linhas essa folha vai ter?

### [ninja-gold-4] Sistemas disfarçados

*Nomeie as incógnitas, escreva uma equação por pista e elimine. Vetores paralelos significam determinante zero.*

**ninja-gold-4#1** — A sessão de sábado lotou com dois preços na porta e mais nada: R$ 30 para adulto, R$ 15 para criança, sem descontos e sem cortesias. O tesoureiro contou 100 pessoas na catraca e R$ 2400 na gaveta, e conferiu os dois números duas vezes antes do depósito. A primeira anotação dele no comprovante trata a bilheteria como se todo lugar tivesse saído pelo preço de adulto. A peça durou 95 minutos, a casa pagou R$ 400 de iluminação e a equipe de limpeza, de 4 pessoas, ficou até a meia-noite.
> A programação do mês que vem depende de quem realmente veio — uma matinê se as crianças dominaram, uma sessão tardia caso contrário — e o gerente só tem esses dois totais para trabalhar. Quantas das 100 pessoas eram adultos?

**ninja-gold-4#2** — Cada ladrilho da malha de terreno é o paralelogramo fechado por dois vetores que partem do mesmo canto da grade; no ladrilho em análise eles são (3, 1) e (1, 4) em unidades da grade. Para esse ladrilho o log reportou 12, número que o engenheiro já desconfia ter vindo do caminho rápido de pré-visualização. A malha tem 4.096 ladrilhos, o orçamento por quadro é de 16 milissegundos e o estúdio licenciou o motor por R$ 25.000.
> A rotina de sombreamento pondera cada ladrilho pela superfície que ele de fato cobre na grade, e o engenheiro está conferindo esse valor à mão contra o que o log reportou para o mesmo ladrilho. Que superfície tem esse ladrilho?

**ninja-gold-4#3** — Dois papéis com as idades de um pai e de seu filho se misturaram às anotações do domicílio, mas o que o entrevistador escreveu na capa está legível: as duas idades juntas dão 50 anos, e o pai tem exatamente 30 anos a mais que o filho. Uma anotação a lápis na margem já tirou os trinta direto dos cinquenta. A família mora no número 78, ocupa a casa há 12 anos, paga R$ 640 de aluguel e consta na folha 19 do registro do distrito.
> O formulário do censo tem um campo ainda aberto, a idade do filho, e o recenseador não pode deixá-lo em branco. O que ele escreve?

**ninja-gold-4#4** — Durante a rotina de calibração, já testada 15 vezes, os dois segmentos do braço robótico precisam apontar em uma única e mesma direção, sem qualquer ângulo se abrindo entre eles. O primeiro segmento se move ao longo do vetor (2, 4); o segundo se move ao longo de (3, k), e k é a única linha do arquivo de configuração ainda vazia. O arquivo de backup ainda guarda a configuração de um braço mais antigo, cujos segmentos estavam escritos (2, 4) e (3, 5). A placa controladora custou R$ 890, a competição é em outubro e a equipe tem 11 integrantes.
> O braço se recusa a iniciar com esse campo em branco, e o técnico tem mais um horário de teste antes de a oficina fechar. Que valor k precisa ter?

**ninja-gold-4#5** — O desafio da revista esconde dois números inteiros atrás de duas linhas de texto: juntos dão 12, e a diferença entre o maior e o menor é 4. A seção de cartas brinca que metade das respostas recebidas até agora simplesmente partiu o doze ao meio. A revista, vendida em bancas desde 1990, custa R$ 6, tem 48 páginas e paga R$ 500 à primeira resposta correta sorteada do saco no dia 30.
> O cupom de resposta tem um único quadrinho, sem espaço para explicações, e pede apenas o maior dos dois números escondidos; respostas com os dois números preenchidos são descartadas na hora. O que vai no quadrinho?

**ninja-gold-4#6** — O pedido da feira de ciências deixa a escola com 3 cadernos de R$ 5 cada, 2 provetas de R$ 8 cada e 4 caixas de canetinhas de R$ 3 cada, e nada mais. Um rabisco no pé do pedido diz 16, os três preços de prateleira somados. A loja dá entrega grátis acima de R$ 100 e expõe um microscópio de R$ 250 que a escola dispensou este ano; a feira enche o ginásio com 400 visitantes e dura 2 dias.
> O tesoureiro precisa fechar a nota antes do dia 20 com o valor exato devido, porque a diretoria reembolsa até o centavo e devolve qualquer número arredondado. Quantos reais são?

**ninja-gold-4#7** — Um dos sprites da versão mobile é uma imagem perfeitamente quadrada, com 128 pixels de lado, guardada sem compressão nenhuma. A aba de memória já mostra 512 para esse sprite, o comprimento do contorno dele em pixels. O projeto tem 340 assets, o aparelho-alvo tem 4 GB de RAM, a renovação da licença custa R$ 1.100 e o servidor de build recusa qualquer coisa acima de 60 MB.
> O relatório de memória lista uma entrada para cada pixel do sprite, e o artista precisa preencher a contagem dessa única imagem, à mão, antes de a build passar na revisão de sexta-feira. Quantas entradas são?

**ninja-gold-4#8** — Um respingo apagou os preços individuais do quadro-negro da padaria e deixou de pé só duas linhas: 2 cafés e 1 pão deram R$ 10, e 1 café e 1 pão deram R$ 7. Um bilhete deixado na gaveta pelo antigo dono afirma que café e pão sempre tiveram o mesmo preço, um igual ao outro. A loja abre às seis, atende uns 250 clientes por dia e paga R$ 1.800 de aluguel.
> O primeiro cliente da manhã quer um café sozinho, sem pão, e o caixa novato — três dias de casa, com uma fila já se formando — precisa cobrar a partir do que sobrou no quadro. Quanto ele cobra?

### [ninja-gold-5] Impedância e raízes

*|a + bi| é uma distância (engenheiros elétricos vivem disso). Multiplicar por i gira 90°. Girard lê a soma das raízes nos coeficientes; o teorema do resto é P(a).*

**ninja-gold-5#1** — A dedução no quadro do laboratório de corrente alternada abre com a unidade imaginária i, a raiz quadrada de −1, a extensão dos reais que permite somar fasores como números comuns. Um colega duas fileiras à frente argumenta que um quadrado nunca pode dar negativo e já escreveu 1. A bancada entrega 110 V a 60 Hz, o multímetro sobre a mesa custou R$ 320 e 45 alunos estão copiando o quadro.
> A primeira linha eleva essa unidade ao quadrado, e o aluno não avança para a impedância enquanto o espaço à direita do sinal de igual não for preenchido corretamente, com sinal e tudo. Quanto vale i × i?

**ninja-gold-5#2** — A fase em teste coloca a base do jogador na origem de um plano complexo em que uma unidade é um metro do mundo do jogo, e larga um inimigo no ponto 8 + 6i. A sobreposição de depuração imprime 14 para esse inimigo, as duas coordenadas somadas. Um segundo inimigo patrulha a 30 unidades, a rodada dura 90 segundos e o estúdio gastou R$ 12.000 só no design de som dessa fase.
> O alerta dispara quando um inimigo chega a 12 m da base, e o desenvolvedor está conferindo esse primeiro inimigo à mão antes de confiar no código. A que distância da origem ele está?

**ninja-gold-5#3** — A oficina corta um quadrado de 1 cm em cada canto de uma chapa metálica e dobra as quatro abas para cima, o que deixa uma caixa aberta com 1 cm de altura, 8 cm de comprimento e 6 cm de largura. A ficha de corte anterior registra a chapa plana como 10 cm por 8 cm. A linha produz 500 unidades por dia, cada caixa é vendida por R$ 14 e o cliente encomendou 900 unidades para dezembro.
> A ficha de qualidade tem um campo restante: a capacidade que a caixa pronta comporta, em centímetros cúbicos, e o lote não sai da oficina enquanto um inspetor não assinar ao lado desse número. Que número a fecha?

**ninja-gold-5#4** — O checksum codifica cada bloco de dados como o polinômio P(x) = x² + 3x + 5 e o valida contra o resto deixado quando P(x) é dividido pelo binômio (x − 2). O bloco vizinho, uma linha abaixo no mesmo log, é conferido contra o binômio (x + 2). O módulo processa 64 blocos por segundo em 3 servidores, custou R$ 5.600 de auditoria e recusa qualquer bloco que não confira em 40 milissegundos.
> Chegou um bloco corrompido durante a noite e o desenvolvedor precisa desse resto escrito, como um único número, para comparar com o valor que o log registrou para esse mesmo bloco. Qual é ele?

**ninja-gold-5#5** — O curso explica as defasagens na mão: no plano complexo, multiplicar um número pela unidade imaginária i gira o ponto correspondente 90° no sentido anti-horário em torno da origem e deixa intacta a distância dele até a origem. Uma volta completa em torno da origem é 360°. Um aluno da segunda fila, lembrando que elevar a unidade ao quadrado cai num número real, grita dois. A turma tem 45 alunos, a bancada tem 6 osciloscópios e o laboratório fecha às sete.
> O professor põe um fasor no quadro e pede que a turma o traga de volta ao ponto de partida multiplicando por i e nada mais, um giro de cada vez. Quantas multiplicações isso leva?

**ninja-gold-5#6** — O mesmo relatório mantém t² − 14t + 45 = 0 para esse par de máquinas, mas a folha de programação tem duas linhas separadas a preencher, uma por máquina, e o total não serve ali. O plano improvisado do encarregado divide o total igualmente entre as duas máquinas. A manutenção leva 2 horas por máquina, o turno dura 8 horas e o pedido de peças custa R$ 3.400.
> A folha quer as horas individuais, primeiro a máquina mais rápida, para que a segunda possa ser iniciada enquanto a primeira ainda roda e o chão de fábrica nunca fique parado. Quais são os dois tempos?

**ninja-gold-5#7** — O ramo de filtro da linha de produção, que roda 18 horas por dia, foi anotado pela engenheira no plano complexo: 3 ohms de resistência no eixo real e 4 ohms de reatância no imaginário, de modo que o ramo se lê 3 + 4i. O relé analógico antigo do painel ao lado simplesmente soma as duas leituras, o que colocaria esse ramo em 7 ohms. A alimentação é de 220 V, a peça de reposição custa R$ 470 e a linha para 2 dias se ela queimar.
> O relé de proteção é ajustado por |3 + 4i| e atua acima de 6 ohms, o que pararia a linha no meio de um turno. Quanto vale esse módulo, em ohms?

**ninja-gold-5#8** — O relatório de engenharia modela o lote em uma única linha: as duas máquinas o terminam em tempos, medidos em horas, que são as duas raízes de t² − 14t + 45 = 0. Um estagiário já digitou 45 no campo de horas, copiando direto o último número do modelo. A planta tem 3 turnos, o lote vale R$ 28.000 e o cliente é cobrado a R$ 90 por hora-máquina.
> O gerente ainda não está programando as máquinas — ele está faturando do cliente o total de horas-máquina, então precisa apenas dos dois tempos somados, e a fatura sai esta tarde mesmo que os tempos individuais nunca sejam apurados. Qual é esse total, em horas?

### [ninja-gold-6] Coordenadas de GPS

*Distância é Pitágoras; o ponto médio faz a média das coordenadas; um círculo x² + y² = r² é um raio de cobertura; a inclinação da reta é sua taxa de subida.*

**ninja-gold-6#1** — A antena da cooperativa sobe na origem (0, 0) de um mapa de cobertura em que uma unidade é um quilômetro, e o assinante mais distante que ela precisa atender mora em (9, 12). Outro cliente, a 4 km, já tem sinal estável. O rascunho do requerimento traz 21 km, os dois números do mapa somados. O equipamento custou R$ 6.200, a torre tem 30 m de altura, o plano é de R$ 35 por mês e há 84 famílias na lista.
> O formulário de licenciamento pede o alcance para o qual a antena precisa ser certificada, e um certificado aquém da casa mais distante deixaria aquela família fora da rede. Quantos quilômetros?

**ninja-gold-6#2** — A cidade está mapeada numa malha em que uma unidade é um quarteirão. O primeiro agente chama de (2, 4), o segundo de (6, 10), e eles combinam caminhar um na direção do outro pelo segmento reto que os une e parar no ponto em que cada um tiver percorrido a mesma distância. O registro do despacho já traz o par (8, 14), as duas posições somadas direto. A operação começou às 22:00, envolve 9 policiais, e a van de apoio espera a 5 quarteirões.
> O coordenador precisa transmitir esse ponto pelo rádio antes que qualquer um dos dois ande mais um quarteirão. Quais são as coordenadas (x, y)?

**ninja-gold-6#3** — A transportadora desenha suas instalações numa malha em que uma unidade é um quilômetro e o centro da cidade fica na origem: o armazém principal em (1, 2), a nova base de distribuição em (4, 6) e um terceiro terreno 12 km ao sul ainda em obras. O despachante já copiou para o formulário a distância que as vans percorrem entre as duas, dirigindo esquina por esquina pelas ruas da malha. A frota tem 25 vans, o diesel custa R$ 2 o litro e o turno da noite começa às dez.
> O enlace de rádio que o planejador precisa dimensionar vai direto entre as duas instalações em operação, sem repetidora no meio, e a antena já encomendada cobre 6 km. Quantos quilômetros esse enlace precisa vencer?

**ninja-gold-6#4** — A trilha está desenhada num perfil cujo eixo horizontal é a distância avançada e cujo eixo vertical é a altitude, ambos em centenas de metros, e vai absolutamente reta de (0, 2) até (4, 10). A prova da gráfica traz 2,5 nesse campo, tirado só do ponto final. O clube tem 150 associados, a caminhada dura 3 horas e o guia recebe R$ 60.
> A ficha técnica classifica uma trilha como difícil quando o número do campo de inclinação passa de 1,5, e esse campo é o último ainda vazio num impresso que os associados vão ler antes de se inscrever. Que valor de m entra nele?

**ninja-gold-6#5** — O alcance audível da nova sirene de enchente está desenhado na malha da cidade como (x − 3)² + (y + 2)² = 49, com todas as distâncias em quilômetros. O rascunho do folheto já imprime 49 km, tirados direto do arquivo do mapa. A sirene custou R$ 23.000, toca por 90 segundos a cada acionamento e atende 5 bairros enfileirados ao longo do rio, onde vivem 12.000 pessoas.
> O folheto de evacuação tem de dizer até que distância da sirene o som ainda chega, já que as famílias que moram além dessa linha recebem alerta por telefone em vez da sirene, e a gráfica quer o número antes da meia-noite de hoje. Quantos quilômetros são?

**ninja-gold-6#6** — O canal de drenagem aparece na planta como a reta y = 3x − 6, com os dois eixos medidos em metros a partir de um canto de referência da quadra. O encarregado da obra já marcou a giz os 6 m, copiados do último número da equação. A obra custa R$ 77.000, a tubulação tem 60 cm de diâmetro e a equipe tem 3 dias antes das chuvas.
> A caixa coletora vai exatamente onde o canal encontra o eixo x, e o pedreiro, com a estaca e a marreta já na mão, não consegue marcar o chão sem essa posição. Em que valor de x ele finca a estaca?

**ninja-gold-6#7** — O drone patrulha uma rota circular centrada na torre de monitoramento, que fica na origem do mapa, e o software de voo guarda essa rota como x² + y² = 225, com todas as distâncias em quilômetros. A entrada anterior do formulário, preenchida por outro piloto, simplesmente repete o número que aparece na equação. O aparelho pesa 7 kg, voa 55 minutos com uma carga, custou R$ 18.000 e precisa voltar antes dos 40 minutos de turno.
> A estação de solo não aceita a missão enquanto o piloto não digitar, em quilômetros, a que distância da torre a rota corre, e o campo recusa qualquer coisa escrita com vírgula. Que número ele digita?

**ninja-gold-6#8** — O trecho reto da rodovia está desenhado no mapa de coordenadas como y = 2x + b: a inclinação 2 saiu do levantamento do terreno, e b é o único valor que o projetista nunca preencheu. As equipes de campo confirmaram que a estrada passa exatamente pelo ponto (3, 10). Uma nota na margem subtrai os dois números desse ponto e escreve a lápis 7. O trecho tem 40 km, o projeto foi aprovado em 2023 e o contrato de pavimentação vale R$ 9.000.000.
> A sinalização não pode ser encomendada enquanto essa linha da equação estiver em branco, e a fábrica de placas precisa de 4 semanas a contar do dia em que o pedido cai na mesa dela. Quanto vale b?

### [ninja-gold-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Digital Ninja — Bits · Hashes · Grafos em sistemas reais

*IPs, permissões, caches e relógios — os quebra-cabeças que programadores resolvem de verdade.*

### [ninja-digital-1] Bytes crus

*n bits guardam 2ⁿ valores (valor máximo 2ⁿ − 1). Dígitos hex valem 16 cada; cores e octetos de IP são só bytes fantasiados.*

**ninja-digital-1#1** — A impressora da sala de contabilidade saiu da rede, e a única tela que mostra o endereço dela é o painel de diagnóstico do switch, que imprime cada octeto em bits crus: o primeiro octeto da impressora aparece como 11000000. A planilha de reservas com que a estagiária precisa casar esse valor foi digitada à mão em 2019 e lista tudo em decimal comum, ao lado de dois aparelhos cujos octetos ela já descartou, 10101000 e 00000001. A impressora está naquela sala desde a última mudança do escritório, e a etiqueta na lateral dela ainda mostra um endereço de uma sub-rede desativada há muito tempo cujo primeiro octeto era 128.
> O supervisor está com o telefone na mão e o fornecedor na linha. Que número decimal ela dita para esse primeiro octeto, para que a reserva seja encontrada?

**ninja-digital-1#2** — A placa de depuração na bancada recebe o id do dispositivo apenas por uma fileira de chaves copiada direto para um registrador, uma chave por bit, bit mais alto à esquerda, e recusa entrada decimal de imediato. A unidade que o técnico precisa subir nesta manhã carrega o id 42; o wiki interno ainda mostra os ids 17 e 96 em exemplos que ninguém atualizou, anota que a placa antiga da bancada recebia a mesma unidade como 52, e o log de boot não avança enquanto a fileira não bater. Outras duas placas já estão rodando na mesma bancada, e trocar os ids delas custou uma tarde inteira ao time no mês passado.
> Ele levanta as chaves agora, sem deixar zeros à esquerda. Que sequência de dígitos a fileira mostra quando a placa a aceita?

**ninja-digital-1#3** — No quadro que a técnica congelou, os quatro LEDs de dados da placa da estufa mostram aceso, aceso, apagado, aceso — 1101, exatamente como ela copiou no caderno — e a placa informa toda leitura desse jeito, do bit mais significativo para o menos. A revisão 4 não tem driver de display nenhum, os dois LEDs de status ao lado da fileira indicam apenas energia e enlace de rádio, e a entrada logo acima desta no livro de registros marca 11, de um quadro que ninguém guardou. A estufa abriga 900 mudas e o contrato de automação ainda tem 2 meses para terminar.
> O livro de registros que o agrônomo lê ao amanhecer não aceita nada além de números decimais comuns. Que valor ela anota para essa leitura?

**ninja-digital-1#4** — O arquivo de cabeçalho do serviço de armazenamento traz a constante que o sistema de arquivos realmente aplica, um kilobyte sendo cada valor distinto que dez bits conseguem endereçar, enquanto a página de marketing vende esse mesmo kilobyte como 1000 bytes. Essa diferença é o motivo de cerca de 1 a cada 4 capturas de tela anexadas pelos clientes mostrar um valor que eles chamam de errado, e de a analista de suporte já ter fechado o ticket idêntico 9 vezes neste trimestre. Sua resposta pronta já foi colada em 40 tickets até agora e ainda termina com um pedido de desculpas que não explica nada.
> Ela está finalmente escrevendo o artigo da central de ajuda que vai aposentar sua resposta pronta, e ele abre com o kilobyte do sistema de arquivos escrito em dígitos, e não como potência. Que número ela escreve nessa primeira linha?

**ninja-digital-1#5** — O canal vermelho da cor de destaque aprovada chega do manual da marca escrito como 0xFF, e o arquivo de tema do app não aceita nada além de números simples de 0 a 255 em cada canal. A designer anexou três amostras ao ticket, #FF7A00 marcada como final mais #C0392B e #16A085 recusadas duas sprints atrás, e a desenvolvedora já preencheu os outros dois canais da amostra final. O manual da marca é um PDF de 48 páginas cujo apêndice de cor repete que cada canal cobre 256 níveis e que o F sozinho vale 15, e a única linha que importa nesta manhã é a que descreve aquele canal específico.
> Só o campo do vermelho continua vazio e a build da demonstração sai em 20 minutos. Que número ela digita nesse campo?

**ninja-digital-1#6** — O checklist de lançamento exige que o painel de configurações do app de notas seja exercitado em todo estado que ele consegue alcançar, sem amostragem, e o painel traz exatamente estas chaves independentes: modo escuro, salvamento automático, corretor, sincronia offline e telemetria. Cada uma está ligada ou desligada, e nenhuma desativa outra. A mesma tela ainda mostra 3 rótulos informativos e um link para uma política de privacidade de 12 páginas, que não alteram nada. No lançamento anterior o plano cobriu apenas 10 execuções, duas por chave, o bug que escapou levou 6 dias para ser corrigido, e é por isso que ninguém confia mais num plano de testes parcial.
> A líder de QA está reservando capacidade do pipeline para hoje à noite, uma execução por estado alcançável. Quantas execuções ela agenda?

**ninja-digital-1#7** — O relatório de erro que Tobias abre no seu terceiro dia diz apenas que as pontuações mais altas viram zero. No serviço de ranking, cada pontuação de jogador é gravada em um byte inteiro e nada mais, e o campo recomeça em silêncio do zero assim que a pontuação passa do que um byte aguenta. O esquema não é tocado desde 2019, quando um comentário acima da coluna se gabava de que o campo cobre 256 pontuações diferentes, e o quadro da sprint ainda marca este ticket como baixa prioridade.
> A correção depende de um único número que ele precisa registrar antes no ticket: a maior pontuação que o campo atual ainda consegue guardar antes de esse recomeço silencioso aparecer. Que número Tobias escreve?

**ninja-digital-1#8** — O worker de pagamentos já reiniciou onze vezes desde as 02:40 e o runtime de contêineres imprime o mesmo status de saída a cada rodada: 0x1F. O runbook que o engenheiro de plantão precisa seguir indexa seus passos de recuperação apenas por status decimal, e as duas entradas que ele sabe de cor, 2 para configuração inválida e 137 para processo morto, não são a que ele precisa. A fila de retentativas transborda em 20 minutos, e a entrada de número 15 é a que um colega colou no chat às 02:40 por engano. Em tráfego normal o serviço processa 300 pagamentos por minuto, e cada reinício descarta tudo o que já estava em andamento.
> Ele percorre o índice do runbook procurando a entrada certa. Que número decimal ele procura?

### [ninja-digital-2] Relógios e hashes

*Sempre que algo dá a volta — relógios, semanas, índices de vetor, tabelas hash — a resposta é um resto.*

**ninja-digital-2#1** — A biblioteca de agendamento que o time adotou só move uma data em saltos inteiros de sete dias, e o que um lembrete precisa além desses saltos o helper tem de somar por conta própria — e é essa parte somada na mão que desloca o rótulo do dia da semana que o usuário vê. O caso pregado no quadro é um lembrete marcado para 30 dias a partir de hoje, dentro de uma sprint que o time já esticou para 4 semanas.
> O dev júnior agora escreve esse resto no helper. Quantos dias ele soma na mão?

**ninja-digital-2#2** — A captura que a revisora examina está marcada como t = 100 s e o LED de heartbeat nesse quadro está apagado, enquanto o firmware deveria acendê-lo só nos ticks em que t mod 3 = 0, com t contado em segundos inteiros desde a energização. O datasheet do mesmo kit de bring-up lista outros 2 indicadores e um trilho de 5 volts, e a captura veio da 6ª rodada da noite, uma pasta com 33 quadros. O kit está naquela bancada há 3 semanas, e esse loop é a única parte do firmware que ninguém revisou ainda.
> Antes de decidir se o firmware está errado ou se o quadro é perfeitamente normal, ela avalia a expressão naquela marca. Que valor ela obtém?

**ninja-digital-2#3** — A implementação de referência na tela da monitora indexa as 26 letras do alfabeto a partir de 0 e desloca cada uma em 3, seguindo do começo do alfabeto sempre que passa do fim, exatamente como a especificação exige; 4 alunos perderam pontos no semestre passado por parar na última letra. O vetor que ela corrige entra com a letra de índice 25, a saída do próprio aluno na tela marca 28, e o script de correção aceita apenas o índice numérico, nunca a letra. Há 60 submissões na fila atrás desta e o prazo para as notas é amanhã ao meio-dia.
> Ela compara a saída do aluno com a da referência. Que índice a referência precisa produzir?

**ninja-digital-2#4** — A reclamação chegou com o contador de analytics congelado em n = 27, e o carrossel da página inicial da loja nunca zera esse contador: sua única regra, escrita no código como exibir item (n mod 8), percorre as 8 imagens promocionais indexadas a partir de 0. Uma gerente de marketing que pagou por 3 espaços patrocinados quer saber qual das imagens dela estava na tela naquele momento; a nota fiscal dela lista esses espaços na numeração da tela de administração, que começa em 1 e por isso está deslocada da numeração do código, e o ticket está aberto há 14 dias. A loja trocou toda a página inicial 4 meses atrás e esse componente veio intacto da versão antiga.
> O desenvolvedor reproduz o quadro congelado na máquina dele antes de responder. Que índice de imagem ele encontra na tela?

**ninja-digital-2#5** — A tabela administrativa estica as linhas para preencher toda a grade sempre que uma página volta só parcialmente cheia, e é esse o bug que a desenvolvedora frontend precisa reproduzir nos 3 maiores tamanhos de tela que a empresa suporta. O conjunto de dados que ela carrega tem 95 registros, o componente fica em 10 linhas por página, e o seletor oferece também 25 e 50, que ela não vai tocar hoje. O paginador no rodapé da tabela informa 10 páginas, o bug foi relatado pela primeira vez 8 meses atrás, e já foi fechado duas vezes como impossível de reproduzir.
> Ela salta direto para o fim da listagem para gravar as linhas esticadas. Quantas linhas a esperam nessa última página?

**ninja-digital-2#6** — Ana está na terceira semana do estágio de backend quando o engenheiro sênior finalmente a deixa chegar perto da camada de cache, onde os registros de sessão vivem numa tabela hash de exatamente 10 buckets. O comentário acima da tabela é insistente, porque o time já mudou para 16 buckets e reverteu na mesma tarde: uma chave k cai no bucket (k mod 10). Um relatório de bug aponta o usuário cuja chave de sessão é 137, e a reunião é às 14:00. A segunda linha dele mostra a mesma chave truncada pela biblioteca de logs em 13, a tabela guarda cerca de 4000 sessões ativas neste horário, e nenhum stack trace veio anexado.
> Ela precisa abrir o único bucket que guarda esse registro e lê-lo antes da reunião. Que bucket ela abre?

**ninja-digital-2#7** — Entre os 40 quadros que a engenheira de firmware capturou dos leitores do armazém, um carrega o valor de payload 2467 e uma marca final em que ela não confia. O protocolo serial antigo fecha cada quadro com um bit de checagem que o driver calcula como payload mod 2, e o receptor descarta o quadro sempre que a marca discorda desse bit; neste quadro essa marca vale 0, 3 bytes de metadados vêm depois dela, e o modelo do leitor saiu de suporte 2 gerações atrás. O armazém usa 18 desses leitores por turno e esta é a única unidade que voltou duas vezes para a bancada.
> Ela recalcula o bit por conta própria antes de declarar o quadro corrompido ou íntegro. Que valor ela obtém?

**ninja-digital-2#8** — O lote de reconciliação começa no instante em que o relógio vira meia-noite e, pelos 3 ensaios anteriores, vai ocupar o servidor por 100 horas sem uma única pausa; nada no calendário de manutenção pode interrompê-lo. A operação conta as horas do dia de 0 a 23 e a equipe do armazém lê esse mesmo relógio, enquanto 2 relatórios seguintes e uma janela de carregamento de caminhão dependem do arquivo de exportação que o lote grava só no fim. O lote nunca rodou fora de um ensaio, o compromisso que o time bloqueou no calendário para ele ocupa 5 dias, e o supervisor da doca já anotou a lápis a hora 12, o horário em que sua equipe sempre trabalha.
> A engenheira de plantão precisa dizer à equipe em que hora do dia estar na doca. Que hora ela informa?

### [ninja-digital-3] Máscaras e portas

*OR junta flags, AND filtra com máscara, XOR acha diferenças (e desfaz a si mesmo), shifts multiplicam e dividem por 2.*

**ninja-digital-3#1** — A certificação de segurança não aceita amostragem: o intertravamento que decide se a prensa industrial pode fechar precisa ser documentado com uma linha para cada combinação que suas entradas podem assumir. O circuito lê exatamente quatro sinais binários independentes — sensor de porta, pedal, pressostato e comando manual — cada um em 0 ou 1 e nenhum preso a outro, enquanto 3 lâmpadas de status acionadas direto por esses sinais não precisam de documentação alguma. O modelo do auditor chega com 8 linhas em branco já impressas, a prensa pesa 2 toneladas, e a fábrica espera há 4 semanas que esse certificado seja assinado.
> O engenheiro de verificação vai desenhar essa tabela à mão nesta noite. Quantas linhas ele precisa desenhar?

**ninja-digital-3#2** — A linha que o engenheiro percorre no depurador diz comum = grupo_a & grupo_b, e os dois grupos carregados nessas variáveis trazem os valores de flags 12 e 10, cada bit representando um experimento que o usuário ativou. A linha acima dela, que conta os experimentos ativos em qualquer um dos dois grupos, já marca 14; apenas 2 dos 7 experimentos em execução aparecem no relatório desta manhã, e a saída do job cai num painel que o time de produto lê toda segunda. A célula que está sendo preenchida mostra um valor provisório de 0 há 2 semanas, e é por isso que a apresentação foi segurada.
> A célula dos experimentos compartilhados pelos dois grupos precisa ser preenchida antes de a apresentação ser impressa. Que número entra nessa célula?

**ninja-digital-3#3** — No quadro branco, a engenheira de armazenamento desenhou o cluster de 3 nós que os recém-contratados vão herdar: o primeiro disco guarda o bloco de valor 9, o segundo guarda 5, e o terceiro guarda o único valor que permite ao script de recuperação reconstruir qualquer um dos três que se perca a partir dos dois que restam, coluna a coluna. Um quarto disco com 14 pertence a um arranjo antigo que simplesmente somava seus dois blocos e já foi riscado. Há 6 recém-contratados na sala e dois deles nunca viram um disco falhar em produção.
> Falta ainda escrever o número naquele terceiro disco para a turma poder acompanhar uma recuperação. Que valor ela escreve?

**ninja-digital-3#4** — O certificado que o engenheiro de redes precisa assinar declara quantas máquinas o novo andar pode realmente receber numa única sub-rede /24, um prefixo que deixa 8 bits para endereços de host. Dois desses endereços nunca vão para uma máquina, o endereço da própria rede e o de broadcast, e a cotação do fornecedor aberta ao lado dele imprime em negrito 256 endereços por sub-rede, acima de uma planta com 3 salas técnicas e 12 pontos de acesso que não mudam nada na conta. O prédio vai abrir com 60 notebooks naquele andar, e a direção da escola já perguntou duas vezes se uma sub-rede realmente basta.
> Ele então escreve no certificado o teto de endereços atribuíveis e assina. Que número ele escreve?

**ninja-digital-3#5** — O deploy vive falhando porque um diretório de logs está montado somente para leitura dentro do contêiner, e a ferramenta de provisionamento aceita permissão apenas como um número por coluna, nunca em palavras. A página de manual pregada acima da mesa do administrador lista os valores clássicos — leitura = 4, escrita = 2, execução = 1 — e a mudança precisa deixar a conta de serviço ler e escrever nesse caminho, enquanto as colunas de grupo e outros ficam exatamente como estão; os dois ambientes de homologação trazem 7 nessa mesma coluna, valor que a equipe de segurança já se recusou a copiar aqui.
> Ele digita um único dígito na coluna do dono. Que dígito concede àquela conta esses dois direitos e nada além?

**ninja-digital-3#6** — O motor de tiles desse mesmo portátil transforma colunas de pixel em colunas de tile com a linha tile = px >> 3, e cada tile ocupa 8 pixels nesse chip. No frame congelado no depurador o sprite está na coluna de pixel 96, a tela tem 240 pixels de altura, e a sala em que ele está começa na coluna de tile 32. O mapa de colisão é uma tabela de 900 entradas, e uma coluna errada faz o sprite atravessar uma parede em silêncio.
> O programador precisa do tile em que o sprite pisa antes de conferi-lo no mapa de colisão. Que coluna de tile essa linha entrega a ele?

**ninja-digital-3#7** — O patch em revisão troca uma linha aritmética pela linha contador = contador << 1, porque o guia de otimização desse portátil é direto sobre o que o processador dele faz bem. O contador de sprites que chega nessa linha vale 13 agora, enquanto o mesmo arquivo limita um contador de áudio sem relação a 6 e um buffer a 40, e o estúdio tem 2 semanas até a submissão. O console foi lançado em 2004, e o port inteiro do estúdio se apoia em 3 rotinas desse tipo.
> A revisora quer o valor resultante citado no comentário dela antes de aprovar qualquer coisa. Que valor o contador guarda depois de essa linha rodar?

**ninja-digital-3#8** — O script de migração precisa reunir dois papéis antigos num único inteiro cujos bits são permissões, e a documentação da biblioteca é explícita: um papel é um conjunto de direitos, não uma quantidade, então um direito presente nos dois é guardado uma única vez. Os dois papéis que esperam no script valem 7 e 8, um terceiro papel de número 16 ficou para uma migração futura embora o título do ticket ainda liste os três, e 5 contas vão receber o valor que sair dali. A migração já foi adiada duas vezes e as notas de versão escritas para ela têm 3 linhas.
> O engenheiro grava um único número nessas contas hoje à noite. Que valor ele grava?

### [ninja-digital-4] Máquinas recursivas

*Ordenações são fatoriais; coisas que dobram são 2ⁿ; dividir até 1 leva log₂ n passos; uma árvore binária completa de profundidade d tem 2ᵈ − 1 nós.*

**ninja-digital-4#1** — A apostila do trabalho de compiladores fixa o formato, e não a contagem: a árvore de decisão de que o avaliador de expressões minúsculo precisa é completa, com todos os níveis preenchidos e cada nó acima do último carregando dois filhos, e tem 4 níveis. Cada nó ocupa 24 bytes, o verificador de memória que o corretor roda informa em blocos de 16 nós, e o corretor reprova qualquer programa que faça a árvore crescer durante a execução. O trabalho vale 30% da nota final e 2 alunos já foram reprovados nele por erros de memória.
> A alocação, portanto, tem de acontecer numa única chamada, antes de qualquer nó ser tocado. Quantos nós o aluno aloca?

**ninja-digital-4#2** — A nota de projeto da detecção de duplicatas fixa o que o protótipo precisa fazer: cada foto é conferida contra cada outra foto uma vez e só uma, já que comparar A com B diz o mesmo que comparar B com A. O álbum de referência contra o qual o time cronometra o protótipo tem 10 fotos, o programa de teste reserva uma matriz de 100 células para os resultados, e a biblioteca de produção tem 4000 enquanto a fila de sincronia tem 25. O protótipo foi escrito numa única tarde e esse benchmark é o único teste que o protege.
> O engenheiro agora escreve a contagem esperada de comparações na asserção do benchmark, que deve falhar se o protótipo trabalhar mais. Que número a asserção espera?

**ninja-digital-4#3** — A pergunta de aquecimento nessa consultoria nunca muda: escrever a sequência que começa em 1, 1, 2, 3, 5, 8 e segue somando os dois valores anteriores. O entrevistador guarda um gabarito impresso com os 20 primeiros termos, diz que se importa com o raciocínio falado em voz alta e não com velocidade de digitação, e lembra de um candidato do mês passado que respondeu 89 e não soube defender. A vaga paga 20% acima da média local e teve 40 candidatos inscritos.
> A versão recursiva da candidata está na tela mas não foi executada, e o entrevistador pede que ela se comprometa com o valor que o código vai imprimir para o 10º termo dessa sequência. Que número ela diz?

**ninja-digital-4#4** — A política de retentativa comitada no repositório é exatamente f(1) = 2 e f(n) = 2·f(n−1), com o resultado lido como atraso em segundos antes da tentativa n. Um comentário anota que o teto de 300 segundos vive em outra parte do código, um rascunho anterior do relatório do incidente multiplicou o primeiro atraso pelo número da tentativa e imprimiu 12, e o próprio gateway bloqueia a conta do lojista depois de 9 tentativas num dia. O lojista ao telefone perdeu 12 pedidos naquela noite e quer a linha do tempo inteira por escrito.
> Na revisão do incidente o time desenha a linha do tempo de um pagamento cujas 3 primeiras retentativas falharam, e toda a discussão gira em torno da espera que a 6ª tentativa teria usado. Desenrolando a definição na mão, que atraso entra na linha do tempo?

**ninja-digital-4#5** — O painel da exposição no museu de computação explicita as regras do quebra-cabeça atrás do vidro: a pilha inteira precisa viajar da sua haste para outra, move-se um disco por vez, e um disco maior nunca pode descansar sobre um menor. O quebra-cabeça instalado tem 5 discos em 3 hastes, o mesmo estúdio construiu uma versão de 7 discos para a loja de souvenires que não entra neste contrato, e a placa ao lado do vidro ainda registra os 32 toques do último visitante que desistiu. O museu espera 400 visitantes por dia e o contador precisa estar certo já no primeiro toque no botão.
> O desenvolvedor precisa fixar no código o contador que diz aos visitantes quantos movimentos um jogador ideal ainda precisa, partindo da posição inicial intocada. Que número ele fixa?

**ninja-digital-4#6** — O processo judicial afirma que o modo aleatório se repete, então a equipe de dados decidiu enumerar todas as ordens que o gerador consegue produzir para uma playlist curta de demonstração e verificar se nenhuma está faltando. Essa playlist tem 6 músicas, todas diferentes, e uma única execução aleatória precisa colocar cada uma exatamente uma vez; os 30 milhões de faixas do catálogo e os 4 modos de embaralhamento do app nada têm a ver com o teste. O teste de fumaça que já existe grava 36 linhas, seis execuções de seis músicas, e não prova nada sobre cobertura; a reclamação que abriu o caso veio de um único usuário com 12 músicas salvas offline.
> O engenheiro dimensiona o arquivo de casos antes de gerá-lo, uma linha por ordem possível. Quantas linhas esse arquivo vai ter?

**ninja-digital-4#7** — O profiler aponta uma função dentro da ferramenta de agendamento, e o revisor encontra ali um loop de i de 1 a 12 que, para cada valor de i, roda um segundo loop de j de 1 a 12, sem nenhuma saída antecipada no corpo. A primeira anotação do revisor, já apagada, colocava o custo em 24; em outra parte do mesmo arquivo estão um loop separado de 40 iterações e uma constante 500 que só dimensiona um buffer. A ferramenta agenda reuniões para 8 times e essa função é chamada de novo a cada tecla digitada.
> Para defender a reescrita ele precisa citar quantas vezes o corpo interno realmente executa. Que número ele coloca no comentário da revisão?

**ninja-digital-4#8** — O revisor não vai aprovar o patch com adjetivos: a dev júnior precisa declarar, no próprio pull request, o pior caso da busca que acabou de escrever. O índice dela é um vetor ordenado de 1024 entradas e cada passo do loop mantém só a metade em que o alvo ainda pode estar, até sobrar um único candidato, enquanto o código que ela substituiu tocava todas as entradas. A estimativa de um colega, 512 comparações — metade da lista —, continua fixada no ticket, ao lado de 3 ideias de cache e um orçamento de 50 ms que pertencem a outra tarefa. O autocompletar é usado cerca de 900 vezes por dia dentro da empresa e ninguém nunca o havia medido antes.
> Ela preenche o número de comparações do pior caso. Que número ela escreve?

### [ninja-digital-5] Redes e conjuntos

*Uma malha completa de n nós tem C(n,2) ligações; os graus somam o dobro das arestas; |A ∪ B| = |A| + |B| − |A ∩ B| conserta a contagem dupla.*

**ninja-digital-5#1** — A apresentação já afirma 430 usuários engajados, e a analista está quase certa de que esse número saiu de somar dois públicos direto do painel. Os números crus não estão em discussão: 250 usuários curtiram o post A, 180 curtiram o post B, e 90 deles curtiram os dois posts e por isso aparecem em cada uma das duas listas. O painel imprime esse 90 duas vezes, uma sob cada post, e o orçamento de R$ 600 da campanha não tem nada a ver com a correção. Os dois posts saíram com 3 dias de diferença e a campanha está sendo renovada com base neste único slide.
> Ela precisa trocar o número de destaque pela quantidade de pessoas distintas que a campanha realmente alcançou. Que número ela coloca no slide?

**ninja-digital-5#2** — A equipe de usabilidade está medindo o labirinto telefônico que os clientes atravessam antes de falar com uma pessoa: a saudação oferece 4 opções, cada uma delas abre outras 4, e cada uma dessas abre 4 finais, depois das quais a chamada é encaminhada para uma fila. São 3 níveis de escolhas no total, e o resumo do próprio regulador conta 12 opções na árvore inteira, ao lado de 9 minutos médios de espera e 2 idiomas. O banco atende 5 milhões de clientes e o regulador já pediu esse relatório duas vezes.
> O relatório precisa listar cada rota distinta que um cliente pode seguir da saudação até a chamada encaminhada. Quantas rotas a equipe lista?

**ninja-digital-5#3** — A ferramenta de desenho exporta dois números independentes que a engenheira pode cruzar antes da auditoria: a quantidade de ligações, que dá 12, e o total dos graus de todos os nós, sendo o grau de um nó quantas ligações o tocam. Cada ligação do diagrama vai de uma ponta a outra, e o mesmo arquivo cita 9 roteadores espalhados por 2 racks e repete essa contagem de destaque, 12, uma vez em cada página. É a primeira auditoria que o escritório enfrenta, e o diagrama foi desenhado por um terceirizado que já saiu.
> Se esses dois números não baterem, o diagrama está errado e a auditoria para ali. Que total de graus o relatório precisa mostrar para o diagrama ser consistente?

**ninja-digital-5#4** — A janela de rollback fecha ao meio-dia, e até lá o time precisa provar que a migração não perdeu nada. O banco único antigo foi dividido em 4 shards, e o script de verificação informa que cada shard guarda exatamente 250 registros, tão equilibrados quanto a chave de sharding pretendia. O título do painel, que lê apenas o shard que o script abriu primeiro, ainda mostra 250; o log da migração ainda cita 12 índices reconstruídos e 3 tentativas falhas da semana passada, e nada disso conta linhas. O banco sustenta um sistema de folha de pagamento usado por 7 empresas, e uma linha perdida apareceria como um salário faltando.
> Um único número vai ao lado do snapshot anterior à migração para a comparação. Que número o time informa?

**ninja-digital-5#5** — O artista padronizou todo sprite de personagem do jogo como uma grade quadrada de 64 pixels de largura por 64 de altura, e o console em que a build precisa rodar reserva apenas uma fatia fixa de memória para texturas, então nada na estimativa pode ser arredondado. O motor guarda 4 bytes para cada pixel e a build atual traz 30 personagens. O modelo da publicadora coloca uma coluna intitulada bytes por sprite bem ao lado da que ele preenche, o estúdio tem 6 pessoas na folha, e o relatório de memória vence na quinta.
> O programador abre a planilha de orçamento com o número que todas as outras células multiplicam: os pixels dentro de um único sprite. Que número entra nessa primeira célula?

**ninja-digital-5#6** — O fundador quer códigos de prateleira de duas letras e nada mais, porque os separadores os gritam num galpão barulhento: cada uma das duas posições aceita qualquer letra de A a Z, com repetição permitida, e o perfil da impressora de etiquetas proíbe dígitos. Um esquema anterior usava uma única letra e se esgotou em menos de um ano, algo que ninguém quer repetir; o armazém tem 400 prateleiras hoje, o cartucho da impressora de etiquetas rende 650 etiquetas, e 3 corredores novos estão planejados. Os códigos gritados precisam sobreviver a um galpão onde 30 pessoas trabalham ao mesmo tempo, e é por isso que nada mais longo foi sequer considerado.
> Ele quer o teto do novo esquema antes de aprová-lo. Quantos códigos distintos ele permite?

**ninja-digital-5#7** — O grupo piloto do chat criptografado tem 8 membros e, no desenho ingênuo de que os fundadores partiram, cada par de membros guarda um segredo compartilhado próprio — não existe chave de grupo nenhuma, e foi justamente isso que a revisão de segurança apontou como problema de escala. A primeira planilha dos fundadores reservou 56 slots e ninguém soube explicar o número; o roadmap cita um teto de 50 membros e 3 slots de dispositivo por conta, e nada disso vale para o piloto. A startup tem 4 engenheiros no total e a revisão de segurança que ela responde tem 30 páginas.
> A engenheira precisa dimensionar o cofre de chaves até sexta, um slot para cada ligação entre dois membros. Quantos slots ela reserva?

**ninja-digital-5#8** — O pedido de compra não pode ser alterado duas vezes, então o técnico de datacenter precisa da conta exata antes de enviá-lo: cada lance de cabo custa R$ 18, e a topologia que os arquitetos aprovaram liga 10 servidores de modo que cada servidor termine conectado diretamente a exatamente 3 outros. Cada cabo que ele passa ocupa uma porta em cada uma das duas pontas, o mapa de portas anexado ao plano conta 30 portas ocupadas no total, e 2 portas sobressalentes por servidor ficam sem uso. O anel vai carregar 40 terabytes de backups e a janela de instalação é um único domingo.
> Ele preenche o campo de quantidade do pedido. Quantos cabos ele encomenda?

### [ninja-digital-6] Revisão de performance

*Loops aninhados multiplicam, dividir ao meio é log, porcentagens encontram a infraestrutura. O finale mistura todas as habilidades digitais.*

**ninja-digital-6#1** — A barra de progresso da ferramenta de importação em massa precisa desenhar um traço por etapa de uma passagem que divide o conjunto de trabalho ao meio, vez após vez, parando só quando um pedaço tem um único registro; o suporte já reclamou que uma barra com o número errado de traços parece congelada para o cliente. A importação modelada começa com 4096 registros, enquanto o arquivo de demonstração tem 64, o componente de progresso vem com 10 traços por padrão, e o tempo limite da etapa é de 30 segundos. A ferramenta é usada por 200 contadores em cada fechamento de mês, e ninguém continua olhando uma barra que parece travada.
> A desenvolvedora fixa no código o número de traços que a barra vai desenhar para essa importação. Quantos ela escreve?

**ninja-digital-6#2** — A clínica ficou sem espaço em 5 meses na última vez porque o fornecedor anterior cotou capacidade bruta, então o técnico que escreve a proposta de hoje declara apenas o que a equipe consegue realmente ocupar. O arranjo é um espelho: cada byte gravado é mantido como uma segunda cópia idêntica em outro disco, e o chassi tem 4 discos de 2 TB cada sob uma etiqueta que anuncia 8 TB de capacidade bruta, ao lado de 1 baia vazia e de um disco de sistema de 500 GB que não faz parte do arranjo. A clínica guarda 9 anos de exames de imagem em disco e o orçamento dessa compra foi aprovado uma vez e não será revisto.
> Ele escreve um único valor, em terabytes, na proposta. Que valor ele escreve?

**ninja-digital-6#3** — A ferramenta de mapa de mesas começou a ficar lenta, e o profiler rastreou o problema até uma rotina de pareamento que percorre a lista inteira de convidados uma vez para cada convidado dela, esse convidado incluído, gastando um passo básico em cada dupla observada. O casamento aberto no editor tem 30 convidados, o maior evento já criado teve 90, a ferramenta é licenciada para 5 espaços, e o time chama de digno de reescrita qualquer coisa acima de mil passos por interação. A reclamação que motivou a análise veio de uma organizadora que esperava 4 segundos depois de cada arrastar de mesa.
> Antes de decidir se este caso cruza essa linha, o engenheiro calcula os passos do casamento aberto. Quantos passos são?

**ninja-digital-6#4** — A tela de que o product owner vive reclamando precisa de 8 chamadas a uma API interna, e o código as dispara estritamente uma após a outra, cada uma esperando a resposta anterior, mesmo que nenhuma chamada realmente precise dos dados da seguinte. O trace mostra cada uma delas levando 250 ms, ao lado de uma etapa de renderização de 40 ms e de 3 downloads de imagem que acontecem em segundo plano, e uma proposta de reescrita no mesmo ticket promete que a tela poderia parecer uma única espera de 250 ms. Essa tela é a primeira coisa que 30000 usuários veem ao abrir o app cada manhã.
> O desenvolvedor quer um único número para a espera que o código atual impõe ao usuário antes de qualquer coisa aparecer. Qual é esse número, em milissegundos?

**ninja-digital-6#5** — A última vez que a administradora sobrecarregou esse cluster, a fila de transcodificação travou por 2 horas, então hoje ela dimensiona o pool de workers pelo próprio hardware: 3 servidores idênticos, 8 núcleos físicos em cada um deles, e cada núcleo capaz de rodar 4 threads de hardware ao mesmo tempo. A folha de compras encabeça o resumo com 24 núcleos físicos no cluster inteiro e ainda lista 64 GB de RAM por servidor e um enlace de 10 gigabits, e nada disso limita o pool. A fila tem 500 vídeos nesta noite e cada um ocupa um worker por vários minutos.
> Ela ajusta o pool para exatamente um worker por thread de hardware disponível. Quantos workers ela configura?

**ninja-digital-6#6** — Dois pipelines quebraram neste mês porque o timeout da etapa de download da imagem estava baixo demais, então o engenheiro de release está derivando o novo valor em vez de adivinhá-lo. A imagem pesa 512 MB e o registry interno, que fica no mesmo prédio dos agentes de build, sustenta 64 MB/s na rede de deploy. A configuração do pipeline ainda cita um período de tolerância de 30 segundos que todo timeout deveria incluir, e 4 estágios paralelos que nunca tocam esse download. O deploy roda 12 vezes por dia e cada pipeline quebrado custa ao time um rollback.
> Supondo que a taxa se mantenha durante toda a transferência, quantos segundos o download em si leva?

**ninja-digital-6#7** — O helper deveria espalhar os jobs por 5 filas, mas alguém trocou a lógica pretendida por um simples n mod 5, e o revisor se recusa a mexer numa linha antes de o ticket registrar o que o código devolve hoje. O caso com falha relatado pelo suporte carrega o job número n = 123, enquanto o mesmo relato cita o job 400 e um contador de lotes que havia chegado a 24. As 5 filas são consumidas por times diferentes, e é justamente por isso que um job mandado para a fila errada passa dias sem ser notado.
> Ele documenta o índice de fila que o código atual devolve para esse job. Que índice ele anota?

**ninja-digital-6#8** — O modelo da revisão de confiabilidade aceita contagens absolutas e recusa porcentagens, e é justamente essa a regra que o engenheiro de performance sempre esquece. Na janela em discussão o serviço recebeu 2000 requisições, e o painel informa que 95% delas foram respondidas da memória sem o banco ser tocado; a mesma página imprime em vermelho uma taxa de 5% de falhas ao lado de uma latência média de 40 ms e de 3 alertas que dispararam por motivos alheios. A revisão é lida por 3 diretores que nunca abriram o painel por conta própria.
> Ele agora preenche a linha do cache da revisão com uma contagem, não com uma taxa. Que número ele registra?

### [ninja-digital-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

## Faixa Coral Ninja — Taxas · Ótimos · Acúmulo — cálculo aplicado

*Velocidade, lucro máximo, tanques enchendo e limites — o cálculo de botas sujas.*

### [ninja-coral-1] Taxas de variação

*Posição s(t) tem velocidade s'(t); custo C(x) tem custo marginal C'(x). Derive com a regra da potência e substitua o instante.*

**ninja-coral-1#1** — A carga do paraquedas do foguete do clube só pode disparar enquanto o veículo ainda estiver abaixo de certa velocidade, então o responsável pela segurança precisa da velocidade num momento escolhido, e não de uma subida média. A telemetria do altímetro de bordo ajusta a altura a h(t) = t³ na janela inicial, enquanto o motor ainda queima, com t em segundos após o lançamento e h em metros. A carga está programada para t = 2 segundos, quando o foguete está a 8 metros de altura, e a regra de bolso do clube cita uma subida média de 4 metros por segundo nesses primeiros dois segundos. A carga útil pesa 300 gramas e o clube registrou 5 lançamentos nesta temporada.
> Que velocidade o responsável anota ao lado desse tempo?

**ninja-coral-1#2** — A comissão de segurança da federação de ciclismo não aprova a subida como trecho final até saber quão inclinada a estrada está no ponto em que as grades terminam, já que um perfil curvo não é igualmente inclinado ao longo de todo o percurso. Os topógrafos modelaram o morro como f(x) = x², com x a distância horizontal desde o pé da subida e f a altura na mesma unidade; a folha deles anota que a estrada subiu 16 unidades até as grades e que o folheto anuncia uma inclinação média de 4 nesse trecho. O relatório ainda cita 12 quilômetros de aproximação e 2 pontos de água. A prova termina naquela estrada em 6 semanas e a federação já recusou uma subida nesta temporada.
> As grades terminam em x = 4, e é esse o ponto em discussão. Que valor de inclinação a comissão registra ali?

**ninja-coral-1#3** — A equipe de qualidade da torrefação compara modelos de copo por um único número com sinal, e um valor positivo significaria que o líquido está de algum modo ganhando calor na bancada, e é por isso que o sinal nunca é omitido do formulário. Ao longo da janela útil do teste a temperatura registrada em graus Celsius segue T(t) = 90 − 6t, com t em minutos desde o momento de servir; o registro desse copo já mostra uma queda de 30 graus ao longo da janela de 5 minutos, a sala é mantida a 22 graus, e 3 modelos de copo estão em teste. O copo em teste é o mais barato dos três, e o comprador de uma rede de 60 cafeterias espera pelo ranking.
> O técnico preenche o número por minuto desse copo, com sinal, para que os modelos possam ser ordenados. Que número ele escreve?

**ninja-coral-1#4** — O conselho só aprova uma segunda sala de aula se chegarem famílias suficientes a cada ano para continuar preenchendo-a. O setor de planejamento ajustou a população a p(t) = 200 + 40t, com p o número de moradores e t os anos desde o censo, e o dossiê abre com os 240 moradores que o modelo dá para o ano que vem, ao lado de uma escola que já atende 60 alunos. A professora que pediu a sala espera uma resposta há 2 anos. O dossiê foi montado por um estagiário que saiu antes do verão, e o conselho se reúne apenas 4 vezes por ano.
> O servidor que preenche o formulário tem um campo restante: quantos moradores o povoado ganha num único ano segundo aquele modelo. Que número entra nele?

**ninja-coral-1#5** — O padeiro vem aumentando o lote semanal há um mês e o lucro dele parou de melhorar em algum ponto do caminho, e foi isso que levou a estudante de contabilidade até a banca. Ela ajustou o lucro semanal em reais para L(x) = −x² + 20x, em que x é o número de caixas assadas, e apontou que em 20 caixas o modelo não lhe deixa nada. O aluguel da banca é R$ 80, a família tem 3 fornos, e a feira acontece 2 dias por semana. Ele vem chutando esse número há 11 anos, e a irmã dele diz há exatamente o mesmo tempo que ele deveria contratar um contador.
> Ele quer o número de caixas em que seu lucro para de subir. Que x é esse?

**ninja-coral-1#6** — Os ímãs de frenagem do trilho de pesquisa só conseguem absorver uma velocidade limitada no instante do contato, e o relatório de segurança precisa declarar esse valor, não uma média da corrida. Sensores ao longo do trilho reto de 60 metros ajustam a posição do carrinho em metros a s(t) = 5t², com t em segundos desde a soltura, um ajuste já confirmado em 3 corridas distintas. Quando o carrinho chega à carcaça do ímã ele já percorreu 45 metros de trilho, e o modelo de ímã que foi substituído era certificado contra uma média de 15 metros por segundo nessa mesma aproximação. Os ímãs foram instalados 2 meses atrás.
> O que preocupa os engenheiros é o momento t = 3 segundos, quando o carrinho chega à carcaça do ímã. Que velocidade o relatório registra para esse instante?

**ninja-coral-1#7** — Um cliente acabou de oferecer R$ 20 por uma cadeira extra além da produção de hoje, e o dono da oficina tem minutos para responder. A economista que ele contratou por 2 semanas ajustou o custo total diário em reais para C(x) = x² + 3x, em que x é o número de cadeiras terminadas no dia, e avisou que o custo médio de R$ 13 por cadeira — número que a equipe de vendas repete sempre — esconde que cada cadeira nova sai mais caro que a anterior. A oficina termina x = 10 cadeiras por dia com 3 pessoas na bancada.
> Ele precisa do quanto essa cadeira extra realmente lhe custa no nível de hoje. Qual é esse custo?

**ninja-coral-1#8** — Um cliente está irritado porque o tamanho seguinte custa muito mais que o salto anterior, e o engenheiro de vendas precisa explicar isso com o próprio vidro. Para um painel quadrado de lado s centímetros a área coletora é A(s) = s² centímetros quadrados e a tabela de preços é montada só sobre área. O painel que o cliente está olhando tem lado s = 6 cm e 36 centímetros quadrados de vidro, o tamanho abaixo dele no catálogo tem lado de 4 cm, e a garantia é de 2 anos. O cliente tem uma oficina que precisa de 14 painéis no total e já saiu da loja de um concorrente batendo a porta.
> O engenheiro cita quantos centímetros quadrados de vidro um centímetro extra de lado traz nesse tamanho. Que valor ele cita?

### [ninja-coral-2] O melhor possível

*Uma parábola atinge o pico onde a taxa é zero: x = −b/2a. Avalie ali se a história quer o VALOR ótimo, não o momento.*

**ninja-coral-2#1** — A câmera do drone de levantamento fica mais estável exatamente no topo de uma subida vertical, no instante em que o aparelho para de ganhar altura, e é ali que o plano de missão quer cada fotografia. Os registros de voo dão a velocidade vertical em metros por segundo como v(t) = −2t + 10, com t contado em segundos desde o início da subida; a primeira linha do registro dessa subida marca 10 metros por segundo e o plano limita o drone a 25 metros acima do ponto de decolagem. O operador tem 4 planos de voo para preparar hoje, a bateria dura 18 minutos, e o local fica a 3 quilômetros da estrada mais próxima. A missão cobre 9 hectares de pedreira, e o levantamento anterior foi descartado porque metade das imagens voltou tremida.
> Ele agora programa o temporizador do disparador para o fim da subida. Que t ele digita?

**ninja-coral-2#2** — A cerca doada mede exatamente 40 m e cada metro dela precisa entrar no contorno de um único terreno retangular de canteiros, fechado nos quatro lados; o galpão do canto e as 3 torneiras não pedem cerca nenhuma. Os vizinhos já haviam rascunhado um terreno de 15 m por 5 m, que dá 75 m², e um deles defendeu um quadrado de 20 m de lado até que o rolo fosse estendido na grama. A horta tem 18 membros e 2 composteiras. O terreno precisa ser demarcado no sábado de manhã, e a cerca não pode ser devolvida nem trocada por um rolo mais longo.
> Os coordenadores querem a maior superfície de cultivo que esses 40 m conseguem cercar. Quantos m² são?

**ninja-coral-2#3** — A investidora não quer ouvir quantos pacotes por parada são ideais; ela quer saber quão barata uma entrega pode chegar a ser nessa empresa, porque a taxa impressa no slide precisa valer por dois anos. O líder de operações mostra o modelo por trás dela: o custo médio por entrega em reais é f(x) = x² − 6x + 13, em que x é o número de pacotes levados por parada. O slide hoje imprime 13 reais, e nos 5 pacotes por parada que os entregadores fazem atualmente o modelo dá 8. A frota tem 7 bicicletas, cobre 300 endereços e conclui 90 entregas por dia. A investidora leu 30 propostas neste mês e abandonou duas delas por causa de números que não se sustentavam.
> Ele responde com o menor custo que o modelo jamais vai permitir. Que valor ele dá a ela?

**ninja-coral-2#4** — A máquina de etiquetas limita a designer de embalagens de um único jeito: a largura e a altura de uma etiqueta, em milímetros, precisam somar 18. O logotipo do cliente quase não cabe na etiqueta atual de 12 mm por 6 mm, que imprime em 72 milímetros quadrados, e a etiqueta de 10 mm por 8 mm do cliente anterior — 80 milímetros quadrados — é a maior superfície que alguém do estúdio já viu sair daquela máquina. A tira tem 240 mm de comprimento e a tiragem é de 5000 etiquetas. O cliente aprova amanhã de manhã e a máquina não pode ser ajustada depois que a tira é carregada.
> Ela busca a forma cuja superfície imprimível — largura vezes altura — seja a maior que a máquina permite, e escreve essa melhor superfície no briefing. Que número ela escreve?

**ninja-coral-2#5** — A oficina de camisetas aprendeu na prática que estampar mais não é sempre melhor: passado certo ponto, as horas extras e a tinta desperdiçada engolem a margem, e uma encomenda às pressas de 25 peças já deixou o dono com menos dinheiro do que um dia calmo. Um analista ajustou o lucro diário em reais para L(x) = −x² + 16x, em que x é o número de camisetas estampadas no dia, anotou que a oficina consegue fisicamente dar conta de 30, e acrescentou que em 16 camisetas o modelo já comeu a margem inteira. O melhor dia dos registros deixou R$ 64 no caixa. Há 2 prensas no galpão e o fornecedor de tinta entrega a cada 9 dias.
> O dono está definindo a meta de amanhã e quer a produção que deixa mais dinheiro no caixa. Quantas camisetas ele estampa?

**ninja-coral-2#6** — A quadra coberta tem um teto, e é esse teto, não o cronômetro, que decide se o tiro de meta do goleiro é permitido no treino. O software de rastreamento ajustou a altura da bola gravada em metros a h(t) = −t² + 8t, com t em segundos após o chute, e o mesmo vídeo mostra a bola de volta ao chão 8 segundos depois de sair do pé. A sessão registrou 12 chutes, um gol a 24 m de distância e 2 câmeras. O treinador não se importa em que momento a bola está mais alta; ele se importa com a folga de que ela precisa acima dele. A quadra foi reformada 3 anos atrás com um teto mais baixo que o antigo, e duas bolas já bateram nas vigas.
> O professor pede à turma o único número que o treinador compararia com o teto. Qual é a maior altura da bola?

**ninja-coral-2#7** — Queimas pequenas desperdiçam o calor do forno enquanto as grandes forçam secagem lenta e quebras, e é por isso que o custo por caneca na fábrica de cerâmica não cai simplesmente conforme o lote cresce. A engenheira industrial ajustou esse custo unitário a C(x) = x² − 12x + 50, em que x é o tamanho do lote em dúzias, e pregou a folha ao lado do forno, que cabe até 20 dúzias. A fábrica queima 9 dúzias por vez há anos, por hábito, o que a folha precifica em 23 por caneca, e emprega 14 pessoas. O forno queima gás a uma taxa horária fixa e a fábrica perdeu 2 encomendas neste trimestre só por quebras.
> Ela está reescrevendo a ordem permanente que diz à equipe quanto carregar. Que tamanho de lote ela coloca nela?

**ninja-coral-2#8** — Uma tarifa mais alta rende mais de cada passageiro e afasta parte da demanda, e a diretoria da empresa de ônibus precisa fechar um único número para a linha suburbana hoje à noite. A partir dos dados de bilhetagem, a economista construiu o modelo de receita R(x) = x(20 − x), em que x é a tarifa em reais e R é a receita por partida. A diretoria já lançou 6 reais como favorito político, o que o modelo põe em 84 por partida, e em 20 reais o modelo já não tem ninguém embarcando. A linha faz 15 partidas por dia, transporta 2000 passageiros e os ônibus têm 4 anos.
> A economista recomenda a tarifa que traz mais dinheiro por partida. Que preço ela indica?

### [ninja-coral-3] Enchendo o tanque

*Acumular uma taxa é integrar: distância sob v(t), litros sob a curva de vazão. Regra da potência ao contrário, avalie nas duas pontas.*

**ninja-coral-3#1** — A auditoria do registro do reator pede a massa que a corrida do catalisador realmente produziu entre o início da reação e a quarta hora, e uma taxa lida num ponto não responderia nada. A taxa instantânea de produção foi ajustada a 3x², com x o tempo de reação em horas e a taxa em gramas por hora, e a última leitura da janela marcou 48 gramas por hora. Os registros da planta também citam uma purga de 2 horas e uma amostra de calibração de 90 gramas de outro experimento. O reator roda essa receita há 7 meses e o auditor já pediu esse mesmo número duas vezes.
> Que massa total ela registra na auditoria?

**ninja-coral-3#2** — Dois viadutos alagaram, e o departamento de drenagem precisa pesar a lâmina de água que caiu contra o que a tubulação poderia ter levado; uma única leitura de intensidade não prova nada numa tempestade que cresceu a noite toda. O pluviômetro mostra uma intensidade bem ajustada por r(t) = t milímetros por hora, com t em horas desde a primeira gota, e sua última leitura antes do amanhecer foi de 8 milímetros por hora. O relatório ainda cita 2 bocas de lobo entupidas, uma bomba de 40 litros por segundo e 9 ligações de moradores. Os dois viadutos alagados ficam a 300 metros um do outro e o departamento tem 5 dias para responder à câmara municipal.
> A tempestade foi de t = 0 a t = 8. Que chuva total entra nessa comparação?

**ninja-coral-3#3** — O ciclista parte do repouso numa estrada plana e o medidor de potência nunca registra a mesma velocidade duas vezes: ele ajusta a velocidade em quilômetros por hora a v(t) = 2t, com t medido em horas desde a partida. A última leitura da sessão marca 12 quilômetros por hora, a ficha do atleta lista 150 batimentos por minuto e 4 treinos por semana, e o mesmo ciclista está sendo considerado para uma equipe de 5. O relatório precisa chegar à federação na segunda.
> O relatório dela precisa do terreno que o ciclista realmente cobre entre t = 0 e t = 6. Que distância ela registra?

**ninja-coral-3#4** — O consultor de ergonomia precisa decidir se os caixotes devem continuar sendo empurrados à mão pelo corredor de carga, e a comparação que ele monta pesa um empurrão contra o desempenho de um rebocador elétrico que o armazém poderia alugar. O dinamômetro marca constantes 15 N durante todo o movimento, e o caixote percorre 12 m em linha reta na direção dessa força até chegar à estação de embalagem. O caixote pesa 30 kg, o corredor tem 40 m de comprimento, e o armazém tem 2 turnos. O rebocador com que ele compara custa R$ 9 por hora para operar e precisaria de um corredor mais largo que este.
> Quanto trabalho, em joules, ele registra para esse único empurrão?

**ninja-coral-3#5** — O formulário de aceitação do reservatório de emergência do hospital tem um único campo em branco: o volume que a entrada realmente entregou durante o teste controlado. A válvula foi aberta a constantes 12 L/min e mantida assim por 15 min, com o dreno fechado e o tanque completamente vazio no início. O técnico também anota que o procedimento permite uma corrida de até 25 min, que a capacidade nominal é 500 L, e que 3 sensores foram instalados no ano passado. O hospital mantém 2 bombas de reserva e o fiscal que assina esse formulário aparece apenas uma vez por ano.
> O fiscal vai conferir o volume entregue com as marcações na parede do tanque. Quantos litros o técnico escreve nesse campo?

**ninja-coral-3#6** — O médico assistente quer saber quanto do medicamento entrou na corrente sanguínea entre a primeira e a terceira hora da infusão, e não desde o início, porque a função renal do paciente foi reavaliada exatamente naquela primeira hora. A bomba funcionou 5 horas ao todo a uma taxa modelada por 2x, com x o tempo em horas e a taxa em miligramas por hora, e o visor marcava 6 miligramas por hora quando a terceira hora bateu. A prescrição ainda lista uma bolsa de 250 mililitros e um teto diário de 40 miligramas. O paciente está internado há 6 dias e a bomba foi trocada por um modelo mais novo no meio do tratamento.
> Que quantidade o assistente informa para essa janela?

**ninja-coral-3#7** — O pacote de baterias é especificado em energia, e não em watts, então a certificação da resistência não pode ser assinada a partir de uma única leitura instantânea. Durante a rampa, a potência medida em watts segue P(t) = 2t, com t em segundos desde a ligação, e a leitura final do wattímetro na rampa é 20 watts. O datasheet cita uma alimentação de 24 volts, 3 fusíveis térmicos e uma carcaça para 200 graus, e nada disso pertence ao número que o certificado pede. A resistência vai dentro de um kit portátil e a bateria desse kit é a peça mais cara do projeto.
> A rampa vai de t = 0 a t = 10. O que ela certifica ter sido consumido ao longo dela?

**ninja-coral-3#8** — O registrador falhou durante a tempestade e só quatro leituras horárias sobreviveram, então a estagiária de hidrologia não tem curva suave alguma em que se apoiar. As quatro leituras sobreviventes são 3, 5, 7 e 9 metros cúbicos por hora, cada uma tomada no início de sua hora e valendo para a hora seguinte; a folha de resumo cita uma intensidade média de 6 para a tempestade e um pico de 9. O caderno também registra uma falha de 20 minutos nos dados e 2 valores atípicos descartados, e o próprio canal tem 4 metros de largura. Ela tem 2 dias para entregar a estimativa, e o medidor que falhou é o único naquele trecho do canal.
> O volume que ela informa para a tempestade é tudo o que aquelas quatro horas carregaram. Que valor ela informa?

### [ninja-coral-4] Onde as coisas se acomodam

*Para t grande, os termos maiores dominam: (6t + 5)/(t + 1) → 6. Um 0/0 como (x² − 9)/(x − 3) pede fatoração primeiro. Metades infinitas se acomodam numa soma finita.*

**ninja-coral-4#1** — A professora vem aproximando dois pontos de medida cada vez mais no quadro, e o quociente que sobra do processo é (x² − 9)/(x − 3), com x tendendo a 3. Um aluno já propôs a resposta 0, outro escreveu 3 alegando que esse é o valor para o qual x caminha, e um terceiro insiste que não existe resposta alguma. Há 40 alunos no anfiteatro, faltam 20 minutos de aula, e esse quociente é o único item que certamente vai cair na prova.
> Que valor único a turma precisa anotar como aquele para o qual essas medidas médias estavam convergindo?

**ninja-coral-4#2** — O aluno não desiste: ele insiste que a caminhada nunca pode ser concluída porque o número de passos não tem fim. A caminhada desenhada no quadro percorre primeiro 1/2 da sala, depois 1/4 dela, depois 1/8, dividindo o passo restante pela metade para sempre e sem nunca dar um salto final; depois de quatro passos ele ainda está a um dezesseis avos da sala da parede oposta. A sala tem 8 metros de largura, o debate já consumiu 2 encontros, e há 14 pessoas no seminário. O professor tem 25 minutos restantes e já prometeu ao grupo que a resposta não precisa de filosofia nenhuma.
> O professor pede que ele some as frações em vez de discuti-las e diga que parte da sala a caminhada sem fim percorre ao todo. Medido em frações da sala, o que ele responde?

**ninja-coral-4#3** — O comprador quer saber quão baixo o custo por garrafa pode realmente cair em volumes muito altos antes de assinar um contrato que dura 4 anos. A controller o modela como y = (8x + 3)/x reais, em que x é o número de garrafas produzidas: o 8x é o material que escala com a produção e o 3 é o custo fixo de preparar a linha. O comprador propôs 11 reais por unidade, e a corrida piloto de 3 garrafas saiu a 9 cada. A fábrica opera hoje 3 turnos, enche 9000 garrafas por hora a plena carga, e o comprador representa uma rede de 70 lojas.
> Ela responde com o valor de que o custo por garrafa se aproxima quando a produção fica enorme. Que valor ela dá a ele?

**ninja-coral-4#4** — O conselho insiste em perguntar se o lago vai simplesmente continuar enchendo para sempre, e o que ele quer é um teto, não o número do ano que vem. Dez anos de amostragem ajustam a população, em milhares de peixes, a p(t) = (6t + 5)/(t + 1), em que t são os anos desde o início do repovoamento; a primeira contagem depois do repovoamento deu 5 mil, e o dossiê lista 5 estações de coleta, uma cota de 2 toneladas por temporada e 40 barcos licenciados. O biólogo tem 10 minutos e um único slide. O lago já foi repovoado duas vezes, uma delas num ano que ninguém documentou, e o conselho tem outras 2 licenças na pauta.
> Ele escreve nele o valor, em milhares, para o qual o estoque caminha conforme os anos se acumulam. Que número ele escreve?

**ninja-coral-4#5** — O contrato de refrigeração é escrito em torno da temperatura em que o rack se acomoda depois de uma execução longa, não em torno do pico logo após o início de uma carga, e o fornecedor cobra por grau de refrigeração garantida. Medições térmicas ajustam a temperatura em graus Celsius a T(t) = 100/(t + 1) + 40, com t contado em minutos desde o início da carga, e o pico no momento em que uma carga entra chega a 140 graus. A ficha da instalação lista 12 racks, um limite de alarme de 65 graus e uma sala mantida a 21. Há 3 orçamentos na mesa do engenheiro e só este é precificado por um platô, e não por um pico.
> O engenheiro preenche o valor estável sobre o qual o contrato será precificado pelos próximos três anos. Que temperatura ele escreve?

**ninja-coral-4#6** — O formulário de aceitação do sensor de pressão pergunta a que valor a saída tende quando a carga aplicada se aproxima de 2 bar por qualquer um dos lados, e o técnico não pode deixar esse campo em branco. O certificado de calibração modela a saída como x² + 1, com x a carga em bar, e seu número de destaque é o 37 que o modelo dá no limite de 6 bar da faixa. A bancada também registra 30 segundos de acomodação e 4 repetições. O sensor vai para uma linha que enche 800 garrafas por hora, e um formulário recusado devolve o lote inteiro de 50 unidades ao fornecedor.
> Que número ele escreve no formulário?

**ninja-coral-4#7** — O relatório de bug afirma que o indicador de velocidade do gerenciador de downloads sobe indefinidamente, e a desenvolvedora precisa provar no papel se a culpa é da fórmula ou da interface. No caso de longa duração que ela analisa, os dados registrados fazem o indicador se comportar exatamente como o quociente 5t/t para t grande, com t o tempo decorrido em segundos. A captura de tela anexada ao chamado mostra 200 megabytes transferidos até ali, sobre uma janela de amostragem de 3 segundos e depois de 2 retentativas. O gerenciador tem 900000 instalações e esse indicador é a parte mais fotografada de toda a interface dele.
> Ela calcula o valor para o qual a expressão caminha quando t cresce sem limite, já que uma constante absolveria a fórmula. Que valor ela encontra?

**ninja-coral-4#8** — Os residentes da ala estão preocupados com toxicidade, porque o rótulo da caixa diz 100 miligramas e o medicamento é tomado por anos sem pausa. A farmacêutica explica o que o esquema realmente faz: a primeira dose contribui com 100 miligramas, cada dose seguinte adiciona a metade do que a anterior contribuiu, e isso segue indefinidamente, de modo que só as três primeiras doses já respondem por 175 miligramas. A ala trata 12 pacientes com esse remédio e 3 deles começaram neste mês. A farmacêutica tem 15 minutos de aula e os residentes já têm em mãos um material com outros 4 esquemas.
> Ela escreve no quadro a quantidade em que o corpo se acomoda no longo prazo. Que número ela escreve, em miligramas?

### [ninja-coral-5] Aceleração total

*Uma história, duas direções: derive para obter a taxa, integre para acumulá-la. Veja para onde a pergunta aponta.*

**ninja-coral-5#1** — A ala só consegue absorver um número limitado de casos novos por dia, então a autoridade de saúde pede à equipe de epidemiologia a velocidade da curva numa semana específica, e não uma média ao longo do surto. O modelo ajustado dá a contagem acumulada de casos como f(x) = 2x³, em que x são as semanas desde o primeiro caso. Ao fim da semana em discussão há 16 casos registrados, e a manchete do boletim é uma média de 8 casos novos por semana desde o início do surto. O boletim também informa 60 leitos, 3 unidades sentinela e 9 distritos, vai para a imprensa às 18:00, e a ala já opera com 80% dos leitos ocupados.
> A semana em discussão é x = 2. Que número de crescimento a equipe informa?

**ninja-coral-5#2** — A cancela da passagem de nível expira, e a engenheira ferroviária precisa saber se o trem de carga já a liberou até então. Ao sair da estação o trem acelera uniformemente e o registrador ajusta sua velocidade a v(t) = t, com t em segundos e a velocidade em metros por segundo; no décimo segundo o registrador marca 10 metros por segundo. A tabela cita 40 vagões, um sinal 200 metros adiante e 3 passagens na linha. A cancela fecha 25 segundos antes da passagem prevista de um trem e o cruzamento recebe 700 carros por dia.
> Que distância o trem percorreu de t = 0 a t = 10?

**ninja-coral-5#3** — A janela de manutenção durou três horas e a companhia precisa reconstituir quanta água a estação de bombeamento realmente entregou nela, já que o medidor registrou uma taxa que cresceu a partir de uma base não nula, e não uma vazão constante. Os analistas ajustaram essa taxa a (2x + 1), com x o tempo em horas e a taxa em metros cúbicos por hora; a janela abriu com o medidor marcando 1 e sua última leitura dentro da janela foi 7. O livro de turno cita 2 operadores e uma pausa de 15 minutos descontada depois. A estação atende 4000 casas e o regulador multa qualquer janela cujo volume entregue fique sem reconstituição.
> Que volume a companhia informa para essa janela?

**ninja-coral-5#4** — A zona de exclusão na margem do lago fica fechada até que todo artefato que não detonou tenha voltado ao chão, e o chefe da equipe não vai reabri-la por palpite. Para o artefato em questão a altura em metros segue h(t) = −t² + 6t, com t em segundos após o disparo, e o chão está na altura zero; a ficha do plano cita um pico de 9 metros para esse artefato. A licença lista 30 artefatos, um raio de segurança de 90 metros e 2 flutuantes. O espetáculo é assistido das duas margens por cerca de 4000 pessoas e os fiscais têm 2 barcos na água.
> Que t o chefe escreve como o momento em que aquele artefato atinge a água?

**ninja-coral-5#5** — As primeiras passadas decidem uma prova de velocidade muito mais que a velocidade máxima, e é por isso que o treinador filma a largada com um radar a laser em vez de cronometrar a chegada. Na fase de aceleração, o radar ajusta a velocidade do atleta em metros por segundo a v(t) = 3t², com t contado em segundos desde o tiro de partida, e o filme cobre os primeiros 6 segundos da prova. Na marca de dois segundos o radar lê 12 metros por segundo. A ficha de treino ainda registra 4 queimas de largada, um recorde pessoal de 11 segundos e 3 treinos por semana. O atleta tem 19 anos e a seletiva nacional que decide a temporada inteira é em 5 semanas.
> Ele precisa do terreno que o velocista realmente cobre de t = 0 a t = 2. Que distância entra na ficha?

**ninja-coral-5#6** — O espaço aéreo acima do canteiro da ponte é limitado, e a autoridade de aviação quer saber quão alto o drone de inspeção chega, não quando ele chega lá. Sua altura em metros ao longo do voo é h(t) = −t² + 12t, com t em segundos após a decolagem, e o voo dura 12 segundos da decolagem ao pouso pela mesma vertical. A ficha da missão cita uma torre de 50 metros, 3 baterias carregadas para o dia e 2 pilotos no local. A ponte recebe 12000 veículos por dia e a inspeção não pode passar do fim do mês.
> Um único número decide se o voo é autorizado. Qual é a maior altura que o drone alcança?

**ninja-coral-5#7** — O trilho-guia reto precisa encontrar o curvo sem deixar quina, o que significa que ele tem de seguir a curva na junção em vez de cortá-la. Nas unidades do escritório de projetos, a seção curva segue f(x) = x² e a junção foi fixada em x = 5, onde a curva já subiu 25 unidades; a prancha cita uma relação global de subida por avanço de 5 do início da curva até essa junção. A mesma prancha anota uma folga de 30 centímetros, 2 suportes de fixação e um trilho de 6 metros de comprimento. O trilho está sendo fabricado no exterior apenas a partir deste desenho, e uma prancha reemitida custaria 3 semanas ao escritório.
> O desenhista não consegue traçar o trilho reto até ter a inclinação dele. Que inclinação ele usa?

**ninja-coral-5#8** — Um cliente ofereceu um preço por mais uma mesa na programação da próxima semana, e a cooperativa vota hoje à noite. O contador tem o custo total semanal em reais como C(x) = 2x² + 2x, em que x é o número de mesas produzidas na semana, e os cooperados vivem citando os 12 reais por mesa que isso dá na média. A reunião ainda cita um aluguel fixo de 300 reais, 7 cooperados e uma fila de 2 semanas. A cooperativa produz atualmente x = 5 mesas e recusou uma encomenda parecida 3 meses atrás sem fazer as contas, arrependendo-se o inverno inteiro.
> Os cooperados precisam do quanto essa mesa extra lhes custa no nível atual antes de pesar a oferta. Qual é esse custo?

### [ninja-coral-6] A prova do mestre

*Tudo do caminho coral pode aparecer, encadeado. Respire, classifique o problema, escolha a ferramenta — depois é só aritmética.*

**ninja-coral-6#1** — A cooperativa de crédito só empresta se a torrefação mostrar um teto de lucro acima da prestação mensal, e a analista é explícita: ela não quer o número ideal de sacas. O modelo do contador dá o lucro mensal em reais como L(x) = −x² + 30x − 125, em que x é o número de sacas torradas, e o tambor comporta no máximo 25 sacas por mês. O plano ainda lista um aluguel de 400 reais, 8 cooperados e uma prestação de 90 reais. A torrefação opera há 2 anos, vende para 30 cafeterias, e este é o primeiro pedido de crédito dela.
> Na última linha do pedido ele precisa escrever o máximo que a operação consegue ganhar num mês. Que valor ele escreve?

**ninja-coral-6#2** — A especificação das fixações dos assentos do protótipo limita o que os passageiros podem sentir, não a velocidade que o carro acaba atingindo, e o órgão de homologação reprovou o protótipo anterior justamente porque as fixações foram dimensionadas pela velocidade. A telemetria da corrida ajusta a velocidade em metros por segundo a v(t) = t², com t contado do início da arrancada, e no instante sob teste o carro está a 36 metros por segundo; ao longo de toda a arrancada ele fez em média 6 metros por segundo ao quadrado. O registro lista 3 voltas, uma velocidade máxima de 90 e 2 pilotos. O protótipo pesa 1400 quilos e a janela de homologação fecha em 6 semanas.
> A especificação é verificada em t = 6 segundos. Que valor ele informa para esse instante?

**ninja-coral-6#3** — A ficha técnica para a qual o cliente compra esse material precisa de um número exato, então uma resposta aproximada não será aceita. No teste registrado a super bola percorre primeiro 64 m, e cada quique depois disso acrescenta metade da distância do quique anterior, seguindo sem fim; os três primeiros trechos da folha já somam 112 m. O laboratório também anotou 3 modelos de bola, uma altura de soltura de 2 m e 4 repetições. O laboratório testa 20 amostras de cada composto e o cliente encomenda material suficiente para 5000 bolas.
> Ela informa todo o caminho que a bola percorre até parar. Que número ela informa?

**ninja-coral-6#4** — A instituição de caridade já recebeu a promessa de um valor fixo, então o conselho do teatro precisa do máximo que a noite beneficente pode render, e não do preço ideal do ingresso. O histórico de bilheteria dá a receita como R(x) = x(24 − x) reais, em que x é o preço do ingresso: um preço mais alto tira mais de cada espectador e esvazia poltronas. No ano passado a casa cobrou 10 reais, o que o modelo põe em 140 pela noite, e em 24 reais ela não tem mais ninguém nas poltronas. A sala acomoda 300 pessoas em 2 sessões, a equipe custa 900 reais, e o cartaz já está impresso. O teatro tem 2 patrocinadores, vendeu 40 ingressos antecipados, e a carta precisa sair antes de a bilheteria abrir.
> O tesoureiro escreve um único número na carta à instituição. Que valor ele escreve?

**ninja-coral-6#5** — A prova de termodinâmica encerra com a definição, e não com o atalho: o candidato recebe o quociente de diferenças (x² − 16)/(x − 4), que mede uma média entre dois estados, e é informado de que os dois estados estão sendo aproximados conforme x tende a 4. O colega ao lado já escreveu 4 alegando que esse é o valor para o qual os estados se fecham, e outro candidato deixou o campo vazio. A mesma folha cita outras 2 questões e um limite de 90 minutos. O candidato concorre a um curso que admite 40 alunos por ano, e esta é a última questão da prova.
> O candidato tem um único número para escrever no campo de resposta. Que número ele escreve?

**ninja-coral-6#6** — O cliente no telhado quer painéis um tamanho maior e não vê por que o salto custa tanto mais por centímetro que o anterior. Para um painel quadrado de lado s a área coletora é A(s) = s², e o painel em discussão tem lado s = 9 com 81 centímetros quadrados de vidro; o vizinho dele instalou o tamanho de 8 centímetros no ano passado e pagou bem menos por ele, e foi isso que começou a discussão. O telhado tem apenas 3 fileiras úteis, os inversores têm 15 anos de garantia, e o instalador tem 2 outros trabalhos marcados nesta semana.
> O instalador responde com a área que um centímetro extra de lado compra nesse tamanho. Que valor ele dá?

**ninja-coral-6#7** — O edital que pagou a turbina exige que a energia captada seja relatada rajada por rajada, por escrito, e uma leitura de pico nunca satisfaria o auditor. Do registro do anemômetro, os analistas ajustaram a potência captada instantânea a x³, com x o tempo em segundos desde o início da rajada, e a rajada em questão durou 4 segundos completos; a rajada registrada logo antes dela durou 2 segundos e a contagem do dia soma 9 rajadas ao todo. A ficha do local também anota um mastro de 12 metros e 2 turbinas fora de operação. A turbina fica numa fazenda de encosta que também cria 40 ovelhas, e o órgão do edital recusa relatórios entregues fora do prazo.
> Que valor a equipe escreve para esta rajada?

**ninja-coral-6#8** — O perito precisa dizer se o motorista poderia ter parado em tempo, e para isso o que importa é o terreno percorrido, não a velocidade num instante qualquer. O registrador do próprio veículo mostra que, nos segundos antes do impacto, o carro acelerou uniformemente com v(t) = 4t, em metros por segundo, com t contado do momento em que saiu do semáforo, e sua última leitura de velocidade antes do impacto foi de 20 metros por segundo. O processo ainda cita um limite de 30 km/h, 2 testemunhas e uma travessia a 60 metros daquele semáforo. O tribunal marcou audiência em 3 semanas e a via naquele ponto tem 12 metros de largura.
> A fase estudada vai de t = 0 a t = 5. Que distância o perito certifica?

### [ninja-coral-exam] Exame de graduação ninja — sorteia 1 questão de cada grau acima, a cada tentativa.

---

# PARTE 3 — GABARITO (com explicações do sensei quando existem)

- **ninja-white-1#1** → 5
- **ninja-white-1#2** → 7
- **ninja-white-1#3** → 8
- **ninja-white-1#4** → 8
- **ninja-white-1#5** → 9
- **ninja-white-1#6** → 6
- **ninja-white-1#7** → 10
- **ninja-white-1#8** → 7
- **ninja-white-2#1** → 14
- **ninja-white-2#2** → 15
- **ninja-white-2#3** → 16
- **ninja-white-2#4** → 9
- **ninja-white-2#5** → 13
- **ninja-white-2#6** → 13
- **ninja-white-2#7** → 12
- **ninja-white-2#8** → 17
- **ninja-white-3#1** → 58
- **ninja-white-3#2** → 47
- **ninja-white-3#3** → 43
- **ninja-white-3#4** → 83
- **ninja-white-3#5** → 62
- **ninja-white-3#6** → 85
- **ninja-white-3#7** → 36
- **ninja-white-3#8** → 37
- **ninja-white-4#1** → 18
- **ninja-white-4#2** → 50
- **ninja-white-4#3** → 25
- **ninja-white-4#4** → 42
- **ninja-white-4#5** → 31
- **ninja-white-4#6** → 19
- **ninja-white-4#7** → 39
- **ninja-white-4#8** → 42
- **ninja-white-5#1** → 891
- **ninja-white-5#2** → 292
- **ninja-white-5#3** → 379
- **ninja-white-5#4** → 385
- **ninja-white-5#5** → 488
- **ninja-white-5#6** → 643
- **ninja-white-5#7** → 492
- **ninja-white-5#8** → 813
- **ninja-white-6#1** → 5
- **ninja-white-6#2** → 5
- **ninja-white-6#3** → 80
- **ninja-white-6#4** → 37
- **ninja-white-6#5** → 284
- **ninja-white-6#6** → 430
- **ninja-white-6#7** → 42
- **ninja-white-6#8** → 27
- **ninja-blue-1#1** → 4
- **ninja-blue-1#2** → 7
- **ninja-blue-1#3** → 6
- **ninja-blue-1#4** → 5
- **ninja-blue-1#5** → 5
- **ninja-blue-1#6** → 5
- **ninja-blue-1#7** → 5
- **ninja-blue-1#8** → 9
- **ninja-blue-2#1** → 17
- **ninja-blue-2#2** → 5
- **ninja-blue-2#3** → 7
- **ninja-blue-2#4** → 30
- **ninja-blue-2#5** → 18
- **ninja-blue-2#6** → 34
- **ninja-blue-2#7** → 3
- **ninja-blue-2#8** → 5
- **ninja-blue-3#1** → 66
- **ninja-blue-3#2** → 17
- **ninja-blue-3#3** → 37
- **ninja-blue-3#4** → 27
- **ninja-blue-3#5** → 12
- **ninja-blue-3#6** → 54
- **ninja-blue-3#7** → 24
- **ninja-blue-3#8** → 32
- **ninja-blue-4#1** → 24
- **ninja-blue-4#2** → 28
- **ninja-blue-4#3** → 22
- **ninja-blue-4#4** → 43
- **ninja-blue-4#5** → 7
- **ninja-blue-4#6** → 16
- **ninja-blue-4#7** → 25
- **ninja-blue-4#8** → 17
- **ninja-blue-5#1** → 482
- **ninja-blue-5#2** → 317
- **ninja-blue-5#3** → 186
- **ninja-blue-5#4** → 325
- **ninja-blue-5#5** → 135
- **ninja-blue-5#6** → 178
- **ninja-blue-5#7** → 158
- **ninja-blue-5#8** → 152
- **ninja-blue-6#1** → 29
- **ninja-blue-6#2** → 30
- **ninja-blue-6#3** → 26
- **ninja-blue-6#4** → 30
- **ninja-blue-6#5** → 87
- **ninja-blue-6#6** → 37
- **ninja-blue-6#7** → 47
- **ninja-blue-6#8** → 23
- **ninja-purple-1#1** → 40
- **ninja-purple-1#2** → 14
- **ninja-purple-1#3** → 45
- **ninja-purple-1#4** → 24
- **ninja-purple-1#5** → 24
- **ninja-purple-1#6** → 27
- **ninja-purple-1#7** → 80
- **ninja-purple-1#8** → 36
- **ninja-purple-2#1** → 72
- **ninja-purple-2#2** → 30
- **ninja-purple-2#3** → 64
- **ninja-purple-2#4** → 30
- **ninja-purple-2#5** → 24
- **ninja-purple-2#6** → 42
- **ninja-purple-2#7** → 28
- **ninja-purple-2#8** → 45
- **ninja-purple-3#1** → 75
- **ninja-purple-3#2** → 56
- **ninja-purple-3#3** → 64
- **ninja-purple-3#4** → 42
- **ninja-purple-3#5** → 48
- **ninja-purple-3#6** → 72
- **ninja-purple-3#7** → 45
- **ninja-purple-3#8** → 45
- **ninja-purple-4#1** → 72
- **ninja-purple-4#2** → 56
- **ninja-purple-4#3** → 56
- **ninja-purple-4#4** → 180
- **ninja-purple-4#5** → 52
- **ninja-purple-4#6** → 240
- **ninja-purple-4#7** → 135
- **ninja-purple-4#8** → 180
- **ninja-purple-5#1** → 234
- **ninja-purple-5#2** → 210
- **ninja-purple-5#3** → 448
- **ninja-purple-5#4** → 720
- **ninja-purple-5#5** → 340
- **ninja-purple-5#6** → 144
- **ninja-purple-5#7** → 204
- **ninja-purple-5#8** → 280
- **ninja-purple-6#1** → 87
- **ninja-purple-6#2** → 46
- **ninja-purple-6#3** → 165
- **ninja-purple-6#4** → 69
- **ninja-purple-6#5** → 300
- **ninja-purple-6#6** → 33
- **ninja-purple-6#7** → 6
- **ninja-purple-6#8** → 36
- **ninja-brown-1#1** → 6
- **ninja-brown-1#2** → 8
- **ninja-brown-1#3** → 5
- **ninja-brown-1#4** → 9
- **ninja-brown-1#5** → 4
- **ninja-brown-1#6** → 9
- **ninja-brown-1#7** → 4
- **ninja-brown-1#8** → 7
- **ninja-brown-2#1** → 4
- **ninja-brown-2#2** → 8
- **ninja-brown-2#3** → 7
- **ninja-brown-2#4** → 12
- **ninja-brown-2#5** → 6
- **ninja-brown-2#6** → 7
- **ninja-brown-2#7** → 6
- **ninja-brown-2#8** → 5
- **ninja-brown-3#1** → 3
- **ninja-brown-3#2** → 6
- **ninja-brown-3#3** → 8
- **ninja-brown-3#4** → 8
- **ninja-brown-3#5** → 8
- **ninja-brown-3#6** → 5
- **ninja-brown-3#7** → 3
- **ninja-brown-3#8** → 10
- **ninja-brown-4#1** → 8
- **ninja-brown-4#2** → 23
- **ninja-brown-4#3** → 9
- **ninja-brown-4#4** → 4
- **ninja-brown-4#5** → 15
- **ninja-brown-4#6** → 8
- **ninja-brown-4#7** → 7
- **ninja-brown-4#8** → 9
- **ninja-brown-5#1** → 42
- **ninja-brown-5#2** → 51
- **ninja-brown-5#3** → 57
- **ninja-brown-5#4** → 90
- **ninja-brown-5#5** → 100
- **ninja-brown-5#6** → 99
- **ninja-brown-5#7** → 62
- **ninja-brown-5#8** → 35
- **ninja-brown-6#1** → 4
- **ninja-brown-6#2** → 46
- **ninja-brown-6#3** → 8
- **ninja-brown-6#4** → 250
- **ninja-brown-6#5** → 75
- **ninja-brown-6#6** → 64
- **ninja-brown-6#7** → 36
- **ninja-brown-6#8** → 36
- **ninja-green-1#1** → 64
- **ninja-green-1#2** → 49
- **ninja-green-1#3** → 1000
- **ninja-green-1#4** → 32
- **ninja-green-1#5** → 9
- **ninja-green-1#6** → 3
- **ninja-green-1#7** → 12
- **ninja-green-1#8** → 64
- **ninja-green-2#1** → 24
- **ninja-green-2#2** → 20
- **ninja-green-2#3** → 45
- **ninja-green-2#4** → 24
- **ninja-green-2#5** → 12
- **ninja-green-2#6** → 12
- **ninja-green-2#7** → 15
- **ninja-green-2#8** → 6
- **ninja-green-3#1** → 165
- **ninja-green-3#2** → 60
- **ninja-green-3#3** → 36
- **ninja-green-3#4** → 12
- **ninja-green-3#5** → 9
- **ninja-green-3#6** → 13
- **ninja-green-3#7** → 60
- **ninja-green-3#8** → 18
- **ninja-green-4#1** → 195
- **ninja-green-4#2** → 42
- **ninja-green-4#3** → 1380
- **ninja-green-4#4** → 300
- **ninja-green-4#5** → 935
- **ninja-green-4#6** → 4800
- **ninja-green-4#7** → 180
- **ninja-green-4#8** → 384
- **ninja-green-5#1** → 1500
- **ninja-green-5#2** → 32
- **ninja-green-5#3** → 600
- **ninja-green-5#4** → 720
- **ninja-green-5#5** → 28
- **ninja-green-5#6** → 150
- **ninja-green-5#7** → 350
- **ninja-green-5#8** → 9
- **ninja-green-6#1** → 30
- **ninja-green-6#2** → 1200
- **ninja-green-6#3** → 5
- **ninja-green-6#4** → 12000
- **ninja-green-6#5** → 30
- **ninja-green-6#6** → 350
- **ninja-green-6#7** → 7
- **ninja-green-6#8** → 56
- **ninja-black-1#1** → 14
- **ninja-black-1#2** → 2
- **ninja-black-1#3** → 200
- **ninja-black-1#4** → 1
- **ninja-black-1#5** → 3/8
- **ninja-black-1#6** → 90
- **ninja-black-1#7** → 250
- **ninja-black-1#8** → 3/8
- **ninja-black-2#1** → 1
- **ninja-black-2#2** → 4.2
- **ninja-black-2#3** → 7.25
- **ninja-black-2#4** → 16
- **ninja-black-2#5** → 0.9
- **ninja-black-2#6** → 13.50
- **ninja-black-2#7** → 10
- **ninja-black-2#8** → 9
- **ninja-black-3#1** → 9
- **ninja-black-3#2** → 6
- **ninja-black-3#3** → 11
- **ninja-black-3#4** → 15
- **ninja-black-3#5** → 22
- **ninja-black-3#6** → 8
- **ninja-black-3#7** → 8
- **ninja-black-3#8** → 7
- **ninja-black-4#1** → 410
- **ninja-black-4#2** → 80
- **ninja-black-4#3** → 37
- **ninja-black-4#4** → 35
- **ninja-black-4#5** → 30
- **ninja-black-4#6** → 7
- **ninja-black-4#7** → 5
- **ninja-black-4#8** → -4
- **ninja-black-5#1** → 3
- **ninja-black-5#2** → 10
- **ninja-black-5#3** → 5
- **ninja-black-5#4** → 7
- **ninja-black-5#5** → 5
- **ninja-black-5#6** → 13
- **ninja-black-5#7** → 7, 8
- **ninja-black-5#8** → 8
- **ninja-black-6#1** → 66
- **ninja-black-6#2** → 1/6
- **ninja-black-6#3** → 3
- **ninja-black-6#4** → 12
- **ninja-black-6#5** → 4
- **ninja-black-6#6** → 80
- **ninja-black-6#7** → 11
- **ninja-black-6#8** → 8
- **ninja-red-1#1** → 40
- **ninja-red-1#2** → 360
- **ninja-red-1#3** → 20
- **ninja-red-1#4** → 48
- **ninja-red-1#5** → 24
- **ninja-red-1#6** → 18
- **ninja-red-1#7** → 100
- **ninja-red-1#8** → 450
- **ninja-red-2#1** → 45
- **ninja-red-2#2** → 70
- **ninja-red-2#3** → 70
- **ninja-red-2#4** → 30
- **ninja-red-2#5** → 28
- **ninja-red-2#6** → 90
- **ninja-red-2#7** → 55
- **ninja-red-2#8** → 63
- **ninja-red-3#1** → 12
- **ninja-red-3#2** → 4
- **ninja-red-3#3** → 10
- **ninja-red-3#4** → 100
- **ninja-red-3#5** → 29
- **ninja-red-3#6** → 24
- **ninja-red-3#7** → 50
- **ninja-red-3#8** → 15
- **ninja-red-4#1** → 24
- **ninja-red-4#2** → 80
- **ninja-red-4#3** → 216000
- **ninja-red-4#4** → 1540
- **ninja-red-4#5** → 180
- **ninja-red-4#6** → 616
- **ninja-red-4#7** → 27
- **ninja-red-4#8** → 24000
- **ninja-red-5#1** → 16
- **ninja-red-5#2** → 3/4
- **ninja-red-5#3** → 12
- **ninja-red-5#4** → 45
- **ninja-red-5#5** → 9
- **ninja-red-5#6** → 10
- **ninja-red-5#7** → 30
- **ninja-red-5#8** → 7
- **ninja-red-6#1** → 9
- **ninja-red-6#2** → 2
- **ninja-red-6#3** → 48
- **ninja-red-6#4** → 80000
- **ninja-red-6#5** → 288
- **ninja-red-6#6** → 65
- **ninja-red-6#7** → 240
- **ninja-red-6#8** → 180
- **ninja-gold-1#1** → 3 — *A leitura do segundo visor é a armadilha: o estagiário leva o expoente para o formulário exatamente como o aparelho o mostra, e a convenção impressa no cabeçalho não o lê assim. Escreva a concentração como potência de dez, olhe para o expoente e aplique o sinal que a definição exige. A multa, o número de substâncias e o limite legal não decidem nada.*
- **ninja-gold-1#2** → 50 — *A regra da enfermeira na prancheta — metade da dose em um dia — é a isca: ela aplica a queda pela metade uma única vez no trecho inteiro, enquanto a bula prende cada queda a um intervalo de seis horas. Conte quantos intervalos completos de seis horas cabem no tempo perguntado e reduza à metade uma vez para cada um. O peso do paciente, os leitos e a data da alta não mudam nada.*
- **ninja-gold-1#3** → 6 — *O cursor da estação ao lado, que soma 2× por entalhe, é a armadilha: com uma soma a contagem de passos sai de uma divisão simples, e esse número redondinho não é o que este botão faz. Cada toque deixa a imagem no dobro do que estava, então o tamanho de abertura é multiplicado por dois uma vez por toque — pergunte quantas dobras alcançam a ampliação legível. O ano de instalação, os quadros e o prazo são cenário.*
- **ninja-gold-1#4** → 1000 — *As 30 vezes do acústico são a armadilha: decibel não é multiplicador direto, e ler a diferença como se fosse o fator entrega justamente o número confortável que a casa quer nos autos. A regra do manual transforma cada bloco de dez decibéis em uma multiplicação por dez, então conte os blocos dentro da diferença e multiplique esse tanto de vezes. Capacidade, multa e datas de audiência são cenário.*
- **ninja-gold-1#5** → 162 — *A placa de controle que ganha fixas 3 células por hora é a armadilha: ela puxa para a soma, enquanto uma colônia que termina cada hora três vezes maior do que começou multiplica. Reconheça o crescimento por fator constante — a contagem semeada é multiplicada por esse fator uma vez a cada hora completa. O número de ensaios, o preço da estufa e a validade do gel são cenário.*
- **ninja-gold-1#6** → 100 — *Os 2 pontos de magnitude impressos na tabela-resumo são a armadilha: numa escala assim a diferença não é o fator, e devolver a diferença — ou dez vezes ela — é justamente o caminho errado que a tabela sugere. Cada degrau inteiro da escala vale uma multiplicação por dez, então transforme a diferença nesse tanto de multiplicações. Distância, duração e número de estações são cenário.*
- **ninja-gold-1#7** → 8000 — *Os R$ 2.000 fixos que o plano de poupança pagaria são a isca — eles convidam a somar um valor fixo ao depósito, e um fundo que fecha todo ano com o dobro do que abriu nunca soma, ele multiplica. Reconheça a dobra repetida: o depósito é multiplicado por dois uma vez a cada ano completo em que fica intocado. O financiamento antigo, o aluguel e o custo da reforma não decidem nada.*
- **ninja-gold-1#8** → 3 — *O crescimento de oito vezes que o irmão mais velho repete é a isca: aquilo é um multiplicador, não uma contagem de anos, e responder com ele é responder a outra pergunta. Cada ano completo multiplica o saldo por dois, então pergunte quantas dobras são necessárias para alcançar esse multiplicador. O ano da herança, a moto e o seguro são ruído.*
- **ninja-gold-2#1** → 21 — *A última linha preenchida do formulário, terminando em 13, é a armadilha: ela entrega uma contagem já escrita, e essa contagem é do estágio anterior ao que o relatório pede. Cada estágio dá a soma dos dois estágios anteriores, então leve a sequência um passo além dos números listados. Os anos de campo, o intervalo das fotos e o caderno são ruído.*
- **ninja-gold-2#2** → 5050 — *Os cinco mil do menino são a isca: ele coloca o meio da sequência em cinquenta, e uma lista que começa em um e termina em cem não fica ali. Pareie os números pelas duas pontas — cada par desses dá o mesmo total — e conte quantos pares a lista forma. O tamanho da turma, o valor da prova e o sinal são cenário.*
- **ninja-gold-2#3** → 55 — *A pirâmide do ano passado, com dez copos em cada nível, é a armadilha: ela convida a multiplicar o nível de baixo pelo número de níveis, o que conta muito mais copos do que esta forma comporta. Aqui os níveis percorrem números inteiros consecutivos de cima para baixo, então o que se quer é a soma dessa sequência — parear os níveis pelas duas pontas resolve rápido. Convidados, tamanho do pacote e preço não decidem nada.*
- **ninja-gold-2#4** → 8 — *A bola velha que perde fixos 24 cm por impacto é a armadilha: uma perda constante faria da queda uma subtração, e esta bola não se comporta assim. Cada impacto devolve a mesma fração da altura anterior, então aplique essa fração uma vez por quique e conte os quiques exatamente como o texto os numera. O tamanho da turma, o preço e o limite da câmera não decidem nada.*
- **ninja-gold-2#5** → 53 — *A estimativa do empreiteiro — três poltronas a mais para cada uma das doze fileiras — é a armadilha: a primeira fileira não recebe acréscimo nenhum, então contar um passo por fileira conta um passo a mais. As fileiras crescem com passo constante, então conte os passos que separam a primeira fileira da última e some esse tanto de acréscimos à fileira de abertura. Pé-direito, orçamento e data da gala são cenário.*
- **ninja-gold-2#6** → 950 — *Os R$ 50 fixos do colega são a isca: um depósito constante transformaria o total numa multiplicação limpa, e os depósitos de Daniel não são constantes. Os valores dele sobem com passo fixo, então o envelope guarda a soma de uma sequência de depósitos igualmente espaçados — pareie o primeiro com o último e conte bem quantos depósitos há. O notebook, a academia e o dia do pagamento são ruído.*
- **ninja-gold-2#7** → 40000 — *Os 5.000 fixos por ano do canal rival são a isca: com uma soma constante a projeção vira uma conta simples e cai abaixo do limite do patrocinador, o que faz o caminho errado parecer decisivo. Este público termina cada período de doze meses com o dobro do tamanho com que o abriu, então a contagem atual é multiplicada por dois uma vez para cada ano de contrato. O tripé, os vídeos e o valor por mil são cenário.*
- **ninja-gold-2#8** → 16 — *A legenda do estagiário é a armadilha: como o balanço não acaba, o total parece ter de crescer sem limite, e os 12 m de largura da sala ficam ali como substituto arrumadinho para quem desistir. Uma sequência de arcos em que cada um é uma fração fixa do anterior soma uma distância finita, determinada pelo primeiro arco e por essa fração. O ano de instalação e a duração da visita são cenário.*
- **ninja-gold-3#1** → 5040 — *Os dez mil que o memorando atribui ao código antigo são a isca: aquela contagem é de um esquema em que o dígito pode voltar, e esta regra proíbe isso. Preencha as quatro posições uma após a outra, a partir de um conjunto que perde um dígito a cada passo, e lembre que os mesmos dígitos em outra ordem contam como outro código. Número de clientes, honorários e gravações são cenário.*
- **ninja-gold-3#2** → 1/6 — *O painel com onze quadros iguais é a armadilha: ele faz as somas parecerem igualmente prováveis, e um sobre essa contagem é a fração errada e bonitinha que ele pesca. Os dois dados são distinguíveis, então monte o espaço amostral com pares ordenados de faces e conte quantos desses pares alcançam a soma pedida. O preço da ficha, o público e o prêmio não decidem nada.*
- **ninja-gold-3#3** → 1/13 — *O discurso sobre uma carta entre cinquenta e duas é a armadilha: ele conta uma única carta nomeada como caso favorável, quando quatro cartas diferentes garantem a devolução. Ponha o número de cartas que ganham sobre o número de cartas do baralho e reduza a fração aos menores termos. O tamanho da plateia, o preço do ingresso e a turnê são cenário.*
- **ninja-gold-3#4** → 1/45 — *O registro do globo é a isca: contar os sorteios como resultados ordenados dobra a lista de possibilidades, enquanto o cupom marca um par sem ordem nenhuma. Conte quantos pares diferentes de números o globo pode produzir quando a ordem é ignorada — o cupom da cliente é um deles. O preço do cupom, a tiragem e o vale são cenário.*
- **ninja-gold-3#5** → 60 — *Os 120 quadros com que a organizadora conta são a armadilha: aquele número conta os arranjos de cinco letras todas distinguíveis, e o enunciado diz que duas delas não se distinguem de jeito nenhum. Conte os arranjos como se cada letra fosse distinta e depois divida pelas trocas do par idêntico, que não produzem diferença visível. O preço por cartão e o dia da abertura não decidem nada.*
- **ninja-gold-3#6** → 120 — *Os 15 da gráfica são a armadilha: aquilo soma os pratos oferecidos, e contagem de pratos não é contagem de contas. Cada conta leva um item de cada etapa de forma independente, então as opções de uma etapa multiplicam as da seguinte. O preço por pessoa, a carta de vinhos e os lugares por serviço são cenário.*
- **ninja-gold-3#7** → 336 — *A lista de trios do anuário, cega à ordem, é a armadilha: contando assim sai um número bem menor e mais arrumadinho, que nada diz sobre qual medalha cada corredor leva. A folha da cerimônia separa ouro, prata e bronze, então preencha as três linhas uma após a outra a partir de um grupo que encolhe um corredor a cada vez. O público, a inscrição e a oficina são cenário.*
- **ninja-gold-3#8** → 15 — *O sistema antigo, com seu primeiro e segundo delegado, é a isca: contar assim escreve cada dupla duas vezes, exatamente o caminho que o enunciado descarta. Os dois nomes têm o mesmo peso, então duplas que só diferem na ordem são uma linha só — conte as escolhas ordenadas e depois tire a duplicação. O orçamento da obra, o ano de fundação e o aluguel do salão não decidem nada.*
- **ninja-gold-4#1** → 60 — *A primeira anotação do tesoureiro — tudo pelo preço de adulto — é a armadilha: dividir a bilheteria por um único preço ignora que os ingressos mais baratos puxaram a média para baixo, e devolve um público maior do que a catraca permite. Dois totais prendem duas contagens desconhecidas ao mesmo tempo: um diz quantas pessoas entraram, o outro quanto dinheiro entrou, e juntos fixam cada contagem. Duração da peça, conta de luz e equipe de limpeza são cenário.*
- **ninja-gold-4#2** → 11 — *O 12 do log é a armadilha: ele multiplica as duas componentes maiores como se o ladrilho fosse um retângulo em pé, e este ladrilho é inclinado. A superfície que um paralelogramo cobre depende de como as componentes dos dois vetores se cruzam — esse cruzamento é o determinante do par, e a superfície é o tamanho dele. Número de ladrilhos, orçamento por quadro e licença são cenário.*
- **ninja-gold-4#3** → 10 — *A anotação a lápis que tira os trinta direto dos cinquenta é a armadilha: ela retira a diferença inteira do total do par e devolve um número que não serve a nenhuma das duas idades. Um total e uma diferença prendem as duas idades ao mesmo tempo — o que sobra depois de tirar a diferença ainda precisa ser repartido entre os dois. Número da casa, tempo de moradia, aluguel e folha do registro são cenário.*
- **ninja-gold-4#4** → 6 — *O 5 guardado no arquivo de backup é a isca: ele vem de subir as duas coordenadas na mesma quantidade, o que muda a direção em vez de mantê-la. Dois vetores apontam para o mesmo lado quando um é um múltiplo fixo do outro, então descubra o fator que leva a primeira coordenada de um ao outro e exija exatamente esse fator na segunda. Preço da placa, data da competição e tamanho da equipe são cenário.*
- **ninja-gold-4#5** → 8 — *As respostas que partem o doze ao meio são a isca: a divisão igual só valeria se os dois números escondidos fossem iguais, e o texto põe uma diferença entre eles. Duas afirmações prendem duas incógnitas — um total e uma diferença — então combine-as para chegar a um número sozinho, e confira qual dos dois o quadrinho pede. Preço, número de páginas e prêmio são cenário.*
- **ninja-gold-4#6** → 43 — *Os 16 rabiscados no pé do pedido são a armadilha: aquilo soma cada preço de prateleira uma vez e esquece quantas unidades de cada item a escola leva. Cada linha do pedido deve a própria quantidade tomada contra o próprio preço, e só a soma dessas linhas fecha a nota. Limite de entrega, microscópio, visitantes e duração são cenário.*
- **ninja-gold-4#7** → 16384 — *Os 512 da aba de memória são a armadilha: aquilo corre pela borda do sprite e não conta nada do interior, que é onde as entradas de fato estão. A imagem é uma grade quadrada de pixels, então a contagem vem do lado medido contra o lado. Número de assets, RAM, licença e limite de tamanho não mudam nada.*
- **ninja-gold-4#8** → 3 — *O bilhete do antigo dono é a armadilha: tome-o como verdadeiro e uma das linhas que sobraram se parte numa metade bonitinha que contradiz frontalmente a outra linha. As duas linhas descrevem os mesmos dois preços e diferem por exatamente um item — comparar uma com a outra isola o preço desse item sozinho. Horário de abertura, número de clientes e aluguel são cenário.*
- **ninja-gold-5#1** → -1 — *O colega que insiste que quadrado nunca é negativo é a armadilha: essa regra vale entre os números reais, e esta unidade foi introduzida justamente para sair deles. Volte ao que a unidade é definida como e eleve essa própria definição ao quadrado — o sinal é o ponto central da linha. Tensão, frequência, multímetro e tamanho da turma são cenário.*
- **ninja-gold-5#2** → 10 — *Os 14 da sobreposição de depuração são a armadilha: aquilo soma as coordenadas como se o inimigo andasse por um eixo e depois pelo outro, e esse número inflado é justamente o que mantém o alerta calado. A distância até a origem no plano complexo é medida em linha reta, com a parte real e a imaginária como catetos perpendiculares. O segundo inimigo, a duração da rodada e o orçamento de som não decidem nada.*
- **ninja-gold-5#3** → 48 — *A chapa de 10 por 8 da ficha de corte é a armadilha: aquelas são as medidas planas antes de os cantos saírem, e multiplicadas dão uma superfície, não uma capacidade. O que a caixa pronta comporta é o espaço dentro de um sólido retangular, então use as três medidas com que ela de fato fica. Produção diária, preço unitário e o pedido de dezembro são cenário.*
- **ninja-gold-5#4** → 15 — *A linha vizinha, escrita com mais, é a armadilha: pegue o sinal do binômio sem cuidado e o polinômio é avaliado no ponto errado, devolvendo ainda assim um inteiro plausível. O resto da divisão por um binômio do primeiro grau é o valor que o polinômio assume no número que anula esse binômio — encontre esse número, cuide do sinal e substitua. Vazão, servidores e custo de auditoria são cenário.*
- **ninja-gold-5#5** → 4 — *O dois do aluno é a armadilha: elevar a unidade ao quadrado realmente cai de volta no eixo real, mas apontar para o lado oposto não é estar de volta ao ponto de partida. Cada multiplicação gira o ponto pela mesma fração fixa de uma volta completa, então conte quantos desses giros são necessários para fechar o círculo. Tamanho da turma, osciloscópios e horário de fechamento são cenário.*
- **ninja-gold-5#6** → 5, 9 — *A divisão igual do encarregado é a armadilha: dois tempos iguais bateriam com o coeficiente que fixa a soma deles e brigariam frontalmente com o que fixa o produto. Procure o par de tempos que satisfaz os dois coeficientes ao mesmo tempo e escreva o menor primeiro, como a folha exige. Manutenção, duração do turno e pedido de peças são cenário.*
- **ninja-gold-5#7** → 5 — *Os 7 ohms do relé antigo são a armadilha: resistência e reatância ficam em eixos perpendiculares, então somá-las direto não vale — e essa soma faria atuar um relé que este ramo nunca faz atuar. O módulo de um número complexo é a distância da origem até o ponto dele, com a parte real e a imaginária se encontrando em ângulo reto. Tensão, peça de reposição e parada de linha são cenário.*
- **ninja-gold-5#8** → 14 — *O 45 que o estagiário copiou é a armadilha: numa equação do segundo grau esse coeficiente está ligado às raízes multiplicadas, não somadas. As relações de Girard leem a soma das raízes direto nos coeficientes, com sinal e tudo, sem resolver nenhum dos tempos — e é só isso que a fatura precisa. Turnos, valor do lote e preço por hora são cenário.*
- **ninja-gold-6#1** → 15 — *Os 21 km do rascunho são a armadilha: aquilo soma os dois números do mapa como se o sinal seguisse as ruas, e certificar esse tanto seria certificar um alcance que ninguém mediu. As coordenadas do assinante são os catetos perpendiculares de um triângulo retângulo cuja hipotenusa é o alcance de que a antena precisa. O cliente mais próximo, a altura da torre e o valor do plano não decidem nada.*
- **ninja-gold-6#2** → 4, 7 — *O (8, 14) que já está no registro é a armadilha: ele soma as duas posições e para por aí, caindo numa esquina bem fora do trecho que qualquer um dos dois percorre. O ponto em que ambos andaram a mesma distância é o meio do segmento que os une, então cada coordenada é a média das duas dadas. A hora, o número de policiais e a van são cenário.*
- **ninja-gold-6#3** → 5 — *A distância de estrada no formulário é a armadilha: dirigir esquina por esquina soma as duas diferenças de coordenada, e um enlace de rádio não faz nada disso — esse número inflado ainda condenaria uma antena que, de fato, dá conta. Trate as duas diferenças como catetos perpendiculares e peça o segmento reto que elas fecham. O terceiro terreno, a frota e o preço do diesel não entram.*
- **ninja-gold-6#4** → 2 — *Os 2,5 da prova da gráfica são a armadilha: aquilo divide os dois números do ponto final e esquece que a trilha não começa na altitude zero. A inclinação de uma reta compara quanto a vertical sobe contra quanto a horizontal avança entre dois pontos dela — use as duas pontas do trecho. Associados, duração e cachê do guia são cenário.*
- **ninja-gold-6#5** → 7 — *Os 49 km do rascunho do folheto são a armadilha: na equação padrão de um círculo aquela constante é o quadrado do alcance, nunca o alcance. Leia a forma da equação — o centro deslocado muda onde o círculo fica, não até onde ele vai — e desfaça o quadrado. Custo, duração do toque e população são cenário.*
- **ninja-gold-6#6** → 2 — *A marca a giz do encarregado nos 6 m é a armadilha: aquele número vem da constante da equação, que diz onde o canal cruza o outro eixo, não este. Um ponto do eixo x tem altura zero, então imponha essa condição à reta e resolva para a coordenada que sobra. Custo, diâmetro da tubulação e prazo são cenário.*
- **ninja-gold-6#7** → 15 — *A entrada do outro piloto, copiada direto da equação, é a armadilha: num círculo escrito assim a constante da direita não é a distância a que a rota corre da torre. Leia a forma padrão de um círculo centrado na origem — aquela constante está no lugar do quadrado do raio, então desfaça o quadrado. Peso, autonomia e preço não mudam nada.*
- **ninja-gold-6#8** → 4 — *O 7 escrito a lápis na margem é a armadilha: ele subtrai as coordenadas do ponto e esquece que a inclinação multiplica a primeira delas antes de qualquer subtração. O ponto está sobre a reta, então as coordenadas dele precisam satisfazer a equação — substitua-as e a única incógnita que sobra é a que falta. Extensão, ano de aprovação e valor do contrato são cenário.*
- **ninja-digital-1#1** → 192 — *O 128 da etiqueta antiga é o peso apenas do primeiro bit, e os dois octetos que ela já descartou tentam você a converter a linha errada — qualquer dos dois deslizes dá um número que a planilha aceita sem reclamar. Cada posição daquela fileira de oito carrega seu próprio peso, dobrando da direita para a esquerda; some os pesos das posições ligadas.*
- **ninja-digital-1#2** → 101010 — *O 52 do wiki é a mesma unidade escrita para uma placa que agrupava as chaves de três em três bits, então copiá-lo coloca o padrão errado nesta bancada. Quebre o id nos maiores pesos que dobram e cabem nele, escrevendo 1 onde um peso é usado e 0 onde é pulado, do maior peso à esquerda.*
- **ninja-digital-1#3** → 13 — *O 11 que está logo acima no livro é o que os mesmos quatro LEDs dão quando lidos de trás para frente, e a ordem da própria placa — do mais significativo ao menos — é a única coisa que decide qual ponta é qual. Dê a cada LED o peso da sua posição, dobrando para a esquerda, e some apenas os acesos.*
- **ninja-digital-1#4** → 1024 — *O 1000 da página de marketing é o número que todo mundo repete e exatamente o motivo de o mesmo ticket voltar sempre — é um hábito decimal, não o que o sistema de arquivos conta. Dez bits, cada um dobrando o alcance dos anteriores, fixam quantos valores distintos o endereço pode assumir.*
- **ninja-digital-1#5** → 255 — *Dois números do apêndice estão ali para pegar você: os 256 níveis contam os valores que o canal aceita, e não o mais alto deles, e o 15 pertence a um único dígito, não ao par. Leia o par como dois dígitos de um número de base dezesseis, em que o da esquerda pesa dezesseis vezes mais que o da direita.*
- **ninja-digital-1#6** → 32 — *As 10 execuções do plano antigo são o atalho tentador — duas posições vezes cinco chaves — mas isso exercita cada chave sozinha, nunca as combinações que o checklist exige. Cada chave a mais dobra a quantidade de estados distintos do painel, então conte como cresce um conjunto de cinco escolhas independentes de liga-desliga.*
- **ninja-digital-1#7** → 255 — *O 256 daquela nota antiga é a quantidade de pontuações diferentes que o campo guarda, não a maior que ele consegue exibir — um contador que começa em zero sempre para um passo antes da própria contagem. Veja quanto um único byte armazena e recue a partir dessa contagem.*
- **ninja-digital-1#8** → 31 — *A entrada 15 é o que o último caractere daquele status vale sozinho, e é justamente a página errada de abrir — o dígito da frente não é enfeite. Leia o status como um número de dois dígitos em base dezesseis, o da esquerda pesando dezesseis vezes o da direita, e some.*
- **ninja-digital-2#1** → 2 — *As 4 semanas da sprint estão logo ao lado dos 30 dias e tentam você a informar os saltos, e não o que a biblioteca não consegue saltar. Tire do lembrete os saltos inteiros de sete dias e responda com o que se recusa a caber neles.*
- **ninja-digital-2#2** → 1 — *Os 33 quadros daquela pasta são quantos grupos completos de três cabem dentro da marca — uma contagem de voltas, nunca o que o firmware testa. A expressão olha para o que sobra depois de retirados esses grupos completos, e só uma sobra nula acende o LED.*
- **ninja-digital-2#3** → 2 — *O 28 na tela do aluno é o deslocamento feito como se o alfabeto não tivesse fim — justamente o erro que custou pontos no semestre passado, ali pronto para ser copiado. A referência dá a volta: quando o deslocamento passa da última letra, ele continua contando a partir da primeira, então o índice tem de cair de novo dentro da faixa de 26.*
- **ninja-digital-2#4** → 3 — *A nota fiscal numera as imagens a partir de 1 e o componente a partir de 0, então o número que ela reconheceria fica a um passo do que o código produz — e a pergunta é sobre o do código. O contador nunca é zerado, então o que importa é onde um valor de 27 para depois de retiradas as voltas completas de oito imagens.*
- **ninja-digital-2#5** → 5 — *O 10 do paginador conta páginas, e é também o tamanho da página — duas coisas diferentes vestindo o mesmo número, e é por isso que é tão fácil anotar a errada. Preencha páginas completas de dez com o conjunto de dados e veja com o que a última, incompleta, fica.*
- **ninja-digital-2#6** → 7 — *O 13 truncado no log é como a chave fica quando o último dígito é jogado fora — a metade oposta da divisão, e um bucket que nem existe numa tabela de dez. Pergunte, em vez disso, o que sobra da chave depois de retirados dela os grupos completos de dez.*
- **ninja-digital-2#7** → 1 — *O 0 impresso no quadro é justamente o valor de que ela deve desconfiar, e copiá-lo é toda a armadilha — a marca é a suspeita aqui, não a prova. O que o driver escreve ali depende só de o payload ser par ou ímpar, então olhe o último dígito dele e nada mais.*
- **ninja-digital-2#8** → 4 — *A hora 12 anotada a lápis e o bloco de 5 dias convidam a responder sem conta nenhuma, e nenhum dos dois sobrevive ao fato de a rodada começar exatamente à meia-noite. Dias inteiros passam pelo relógio sem movê-lo, então só o que sobra depois desses dias completos decide onde os ponteiros param.*
- **ninja-digital-3#1** → 16 — *As 8 linhas já impressas no modelo são um chute do formulário, não uma contagem deste circuito, e preencher exatamente o que o papel oferece é como um intertravamento acaba documentado pela metade. Acrescentar mais um sinal independente dobra as combinações dos anteriores, então parta de um único sinal e deixe quatro deles se multiplicarem.*
- **ninja-digital-3#2** → 8 — *O 14 da linha acima conta todo experimento que qualquer um dos grupos ligou, que é a pergunta oposta à desta célula. Alinhe os dois valores de flags bit a bit e mantenha só as posições em que ambos trazem 1.*
- **ninja-digital-3#3** → 12 — *O disco riscado mostra o que o arranjo antigo fazia — soma pura — e 14 é o que esse hábito colocaria no terceiro disco, mas uma soma leva vai-um entre as colunas e não se desfaz a partir de um único sobrevivente. Compare os dois blocos coluna a coluna e registre onde eles diferem, pois esse registro, lido de volta contra qualquer um dos blocos, devolve o outro.*
- **ninja-digital-3#4** → 254 — *O 256 impresso em negrito é todo o espaço de endereços do prefixo, citado porque enfeita a proposta — mas o certificado pergunta por máquinas, e dois desses endereços nunca pertencem a uma. Conte o que os bits de host sozinhos podem assumir e depois separe o par reservado antes de assinar.*
- **ninja-digital-3#5** → 6 — *O 7 que espera na homologação é o dígito que concede tudo, um direito a mais do que o ticket pede, e esse direito extra é justamente o que a revisão recusaria. Cada direito tem um valor próprio e a coluna carrega apenas a soma dos valores dos direitos concedidos — pegue só os dois de que a conta precisa.*
- **ninja-digital-3#6** → 12 — *O 32 em que a sala começa é o que a coluna de pixel dá se for dividida pelo número de posições da seta em vez de pela largura do tile — um número redondo que empurra o sprite para a parede errada. Cada posição que os bits descem corta o valor pela metade, e a quantidade de descidas aqui é exatamente a que a largura de um tile em pixels exige.*
- **ninja-digital-3#7** → 26 — *O 6 do código de áudio é no que este contador viraria se as setas fossem lidas ao contrário, e é justamente esse o deslize que a revisão existe para pegar. As setas empurram cada bit uma posição na direção dos pesos maiores, e um bit que sobe uma posição passa a valer o dobro do que valia.*
- **ninja-digital-3#8** → 15 — *O papel adiado e o título do ticket que ainda o cita puxam um terceiro valor para uma união que tem apenas duas linhas. Escreva os dois papéis como fileiras de bits e ligue toda posição que qualquer uma das fileiras já traga, depois leia o resultado como um número só.*
- **ninja-digital-4#1** → 15 — *Os blocos de 16 nós em que o verificador informa são uma unidade de contabilidade, não o formato desta árvore, e uma potência de dois é exatamente o arredondamento a que um aluno apressado recorre. Conte os nós nível a nível, cada nível guardando o dobro do nível acima, e some os quatro.*
- **ninja-digital-4#2** → 45 — *As 100 células da matriz são cada foto contra cada foto, diagonal incluída — o formato da memória, não a contagem de conferências úteis. Cada foto encontra todas as outras, mas um par contado pelas duas pontas é o mesmo par, e nenhuma foto é comparada consigo mesma.*
- **ninja-digital-4#3** → 55 — *O 89 que o candidato anterior ofereceu é onde se cai ao tratar os dois 1 iniciais como um único termo e contar uma casa a mais. Estenda a sequência um termo por vez, somando sempre os dois imediatamente anteriores, e numere os termos exatamente como os seis iniciais estão numerados.*
- **ninja-digital-4#4** → 64 — *O 12 do rascunho descartado vem de tratar o atraso como se ele crescesse por um passo fixo a cada rodada, e as 3 retentativas que falharam convidam a parar de contar cedo demais. A definição realimenta cada espera na seguinte, então comece na primeira tentativa e deixe o valor crescer assim até chegar à tentativa em discussão.*
- **ninja-digital-4#5** → 31 — *Os 32 da placa são a contagem de um visitante que desistiu no meio, e é justamente essa aparência redonda que os torna tentadores para um desenvolvedor apressado. Pense no que custa mover o disco maior: tudo o que está sobre ele precisa sair antes e voltar depois, então cada disco a mais praticamente dobra a contagem anterior e ainda acrescenta o único movimento do disco grande.*
- **ninja-digital-4#6** → 720 — *As 36 linhas do teste de fumaça são seis execuções de seis músicas, um número que parece cobertura e não é nada disso. Monte uma ordem posição por posição: a primeira aceita qualquer música, a seguinte só o que ainda não foi colocado, e assim até o fim.*
- **ninja-digital-4#7** → 144 — *O 24 que ele escreveu primeiro soma os dois loops, que é o que sai ao lê-los como se rodassem um depois do outro. Aqui o loop interno recomeça inteiro para cada valor que o externo assume, então as execuções se empilham em vez de se enfileirar.*
- **ninja-digital-4#8** → 10 — *Os 512 fixados no ticket são metade da lista, que é a cara do pior caso do código antigo — medem entradas descartadas, não passos dados. Cada passo deixa metade do que havia, então conte quantas vezes a pilha precisa ser partida até sobrar uma única entrada.*
- **ninja-digital-5#1** → 340 — *Os 430 que já estão no slide são os dois públicos somados como se ninguém pudesse estar nos dois, e o painel imprimindo a sobreposição sob cada post tenta uma correção exagerada, que retira essas pessoas duas vezes. Elas foram contadas uma vez a mais, não duas.*
- **ninja-digital-5#2** → 64 — *Os 12 do regulador somam as opções nível a nível, o que conta botões e não trajetos — dois clientes que apertam o mesmo botão continuam em rotas diferentes. Cada escolha de um nível abre um conjunto completo de escolhas no seguinte, então as rotas se multiplicam à medida que se desce.*
- **ninja-digital-5#3** → 24 — *O 12 aparece impresso em todas as páginas e é o número mais fácil de copiar para um campo que não está perguntando por ligações. Cada ligação toca dois nós, então ela aparece na conta de um nó e de novo na conta do outro.*
- **ninja-digital-5#4** → 1000 — *Os 250 do título são um shard lido como se fosse o banco inteiro, e é justamente essa leitura que esconderia a maior parte da folha de pagamento. A comparação é com a tabela única que existia antes da divisão, então todos os shards precisam ser reunidos num único número.*
- **ninja-digital-5#5** → 4096 — *A coluna vizinha pede bytes e os 4 bytes por pixel estão bem ali, o que torna muito fácil preencher antes a célula errada. Esta primeira célula quer só os pixels de um sprite: uma grade quadrada, com cada linha do tamanho da altura da grade.*
- **ninja-digital-5#6** → 676 — *Os 650 do cartucho estão perto o bastante de um teto para parecerem um, e são também o que sai ao proibir que uma letra se repita — algo que este esquema permite expressamente. As duas posições são livres e independentes, então a segunda continua com o alfabeto inteiro disponível, seja qual for a letra da primeira.*
- **ninja-digital-5#7** → 28 — *Os 56 da planilha dos fundadores contam separadamente a lista de contrapartes de cada membro, então cada segredo aparece ali sob os dois membros que o compartilham. Um segredo pertence a um par, e um par não vira outro par quando é lido pela outra ponta.*
- **ninja-digital-5#8** → 15 — *As 30 portas ocupadas do mapa são o número que o formulário do pedido tenta pescar, e elas contam cada cabo pelas duas pontas. Um cabo é uma compra só, por mais portas que ocupe, então o total de portas precisa voltar a virar cabos antes de o campo de quantidade ser preenchido.*
- **ninja-digital-6#1** → 12 — *O padrão de 10 traços do componente e o arquivo de demonstração de 64 registros são mais fáceis de pegar do que a importação realmente modelada. Cada etapa deixa metade do conjunto de trabalho para trás, então conte as etapas necessárias para descer do conjunto cheio até um pedaço com um único registro.*
- **ninja-digital-6#2** → 4 — *Os 8 TB da etiqueta do chassi são o número bruto — o mesmo tipo de número que o fornecedor anterior cotou, e o motivo de a clínica ter ficado sem espaço em cinco meses. Cada byte que a equipe grava é armazenado uma segunda vez em outro disco, então o espaço que eles conseguem ocupar é só a parte que não é cópia.*
- **ninja-digital-6#3** → 900 — *Os 90 do maior evento já criado e o limite de mil passos estão bem ao lado do número que importa, e a pergunta é sobre o casamento aberto agora. A lista é percorrida inteira uma vez por convidado, então o custo cresce com a contagem de convidados tomada contra ela mesma, não somada a ela mesma.*
- **ninja-digital-6#4** → 2000 — *A espera única que a reescrita promete descreve chamadas que se sobreporiam, que é justamente o que o código atual se recusa a fazer, e os 40 ms de renderização não são o que o usuário espera. Hoje cada chamada só começa depois que a anterior respondeu, então as esperas se enfileiram uma após a outra.*
- **ninja-digital-6#5** → 96 — *Os 24 do resumo contam os núcleos físicos do cluster e param aí, enquanto o pool é dimensionado pelas threads que esses núcleos conseguem rodar ao mesmo tempo. Tome os núcleos do cluster inteiro e deixe cada um contribuir com todas as threads que consegue sustentar de uma vez.*
- **ninja-digital-6#6** → 8 — *O período de tolerância de 30 segundos pertence ao timeout que o engenheiro vai escrever depois, não à transferência, e embuti-lo produz um número que ainda parece uma medição. Coloque o tamanho da imagem contra o quanto dela o enlace move em um único segundo.*
- **ninja-digital-6#7** → 3 — *O contador de lotes em 24 é quantos grupos completos de cinco cabem no número do job, um valor que não consegue nomear uma fila quando existem apenas cinco delas. O que o helper devolve é o que sobra do número do job depois de retirados esses grupos completos.*
- **ninja-digital-6#8** → 1900 — *Os dois números daquela página são taxas — inclusive o que está em vermelho — e o modelo recusa exatamente esse tipo de número, por mais tentador que seja copiar uma porcentagem para o campo. Transforme a fração de requisições respondidas da memória numa parte das requisições que a janela realmente recebeu.*
- **ninja-coral-1#1** → 12 — *Os 8 metros de altura e a regra de bolso de 4 metros por segundo são números honestos sobre os primeiros dois segundos, e ambos são inúteis para uma carga que dispara num instante. Numa subida que vai ficando mais íngreme, a velocidade no momento escolhido é a taxa com que a altura muda naquele instante, e qualquer média tirada desde o lançamento a subestima.*
- **ninja-coral-1#2** → 8 — *As 16 unidades de subida e a inclinação média de 4 descrevem ambos o trecho inteiro desde o pé da subida, enquanto um perfil que vai ficando mais íngreme está no pior ponto justamente onde as grades acabam. A comissão precisa da inclinação da curva naquele ponto único, que é a taxa com que a altura está mudando ali.*
- **ninja-coral-1#3** → -6 — *Os 30 graus que o copo perde ao longo da janela são um total, não um ritmo, e os 90 são apenas onde a leitura começou — escrever qualquer um deles ordena os copos pelo critério errado. O formulário quer quanto a temperatura se move em um minuto, com o sinal que diz que a bebida perde calor em vez de ganhar.*
- **ninja-coral-1#4** → 40 — *Os 240 com que o dossiê abre são um total de pessoas e os 200 do modelo são o total de onde o censo partiu — nenhum diz quantas pessoas o povoado ganha. O campo pede uma variação por ano, então o que importa é o ritmo com que o modelo acrescenta moradores, e não um nível qualquer pelo qual ele passa.*
- **ninja-coral-1#5** → 10 — *As 20 caixas em que o lucro some são o ponto onde a curva já voltou lá para baixo, não onde ela parou de subir — dois lugares bem diferentes do mesmo morro. O ponto de virada é aquele em que o lucro por um instante não cresce nem encolhe, então é a taxa do lucro, e não o lucro em si, que precisa ser lida ali.*
- **ninja-coral-1#6** → 30 — *Os 45 metros já percorridos e os 15 metros por segundo citados para a aproximação são ambos verdadeiros e ambos respondem outra pergunta — um é uma posição, o outro achata toda a aproximação num único número. Os ímãs encontram o carrinho num instante, então o que vale é a rapidez com que o ajuste de posição está mudando exatamente ali.*
- **ninja-coral-1#7** → 23 — *A média de 13 e os 20 sobre a mesa são fáceis de agarrar, mas uma média espalha o custo do dia inteiro por igual entre dez cadeiras, e um custo que sobe cada vez mais rápido não se espalha por igual. O que a próxima cadeira custa é a taxa com que o custo total está subindo no nível em que a bancada trabalha hoje.*
- **ninja-coral-1#8** → 12 — *Os 36 centímetros quadrados que já estão no painel são um total, não um passo, e o tamanho menor do catálogo só mostra que o mesmo passo compra menos lá embaixo na faixa. A pergunta é a rapidez com que a área cresce com o lado nesse tamanho específico, que é justamente por que cada tamanho a mais dói mais que o anterior.*
- **ninja-coral-2#1** → 5 — *Os 10 metros por segundo no alto do registro são a velocidade com que a subida começa e os 25 metros são uma altura, então digitar qualquer um deles num temporizador responde uma pergunta que ninguém fez. O disparador precisa acionar no momento em que a velocidade de subida se esgotou, que é um tempo lido do modelo de velocidade, não uma velocidade nem uma altitude.*
- **ninja-coral-2#2** → 100 — *O quadrado de 20 m é a armadilha: quatro lados de 20 m exigiriam o dobro do rolo que a horta realmente tem. Cada metro dos 40 m entra no contorno, o que trava os dois lados diferentes um ao outro, então a superfície sobe e desce conforme esse par muda — o que se quer é o par de maior produto, não o primeiro retângulo que couber.*
- **ninja-coral-2#3** → 4 — *Os 13 do slide são o que o modelo diz com nada na bicicleta e os 8 são apenas o ponto de operação de hoje — um custo que mergulha e volta a subir passa pelos dois na descida. O piso do modelo é o valor que ele assume no ponto mais baixo, e nenhuma carga, atual ou planejada, faz melhor que isso.*
- **ninja-coral-2#4** → 81 — *Os 80 milímetros quadrados já alcançados ficam tão perto do teto que parecem o teto, mas uma forma que satisfaz a restrição não é automaticamente a melhor que a satisfaz. Com os dois lados presos a uma soma fixa, a superfície é um produto que atinge o pico entre as formas desequilibradas, e o briefing precisa do maior valor que esse produto pode assumir.*
- **ninja-coral-2#5** → 8 — *As 30 que a oficina consegue fisicamente e as 16 em que a margem some são limites reais, e nenhum fica no topo da curva; os 64 no caixa são dinheiro, não um número de camisetas. A melhor produção é aquela em que o lucro parou de subir e ainda não começou a cair, e a meta pedida é esse número de camisetas, não a receita que ele gera.*
- **ninja-coral-2#6** → 16 — *Os 8 segundos até a bola cair e os 24 m da quadra são medidas de outra natureza — uma é tempo, a outra corre pelo chão, e o teto não se importa com nenhuma. A curva de altura sobe e depois cai, então o número a comparar com o teto é o valor que ela atinge onde a subida se esgota.*
- **ninja-coral-2#7** → 6 — *Os 23 que o lote habitual custa são um preço por caneca, não um tamanho de lote, e as 20 dúzias que o forno comporta são um teto físico, não econômico. A ordem precisa da carga em que a curva de custo chega ao fundo — o ponto em que ela parou de cair e ainda não começou a subir.*
- **ninja-coral-2#8** → 10 — *Os 84 por partida são dinheiro e os 20 são onde o modelo esvazia o ônibus, então nenhum é a tarifa que a diretoria poderia votar como a melhor. A receita aqui é um produto que sobe com o preço e cai com os passageiros que o preço afasta, e a recomendação é a tarifa em que esse produto vira.*
- **ninja-coral-3#1** → 64 — *Pegar os 48 gramas por hora do fim da janela e esticá-los pelas quatro horas é o deslize clássico — o reator estava longe dessa taxa quando a reação começou. Uma massa produzida é a taxa acumulada ao longo de toda a janela, e uma taxa que cresce assim tão rápido contribui muito menos no começo do que no fim.*
- **ninja-coral-3#2** → 32 — *Ler 8 milímetros por hora no pluviômetro e esticar isso pelas oito horas dobra a tempestade, porque a chuva só chegou a essa intensidade no fim da noite. A lâmina de água é a intensidade acumulada hora a hora, e uma intensidade que sobe do zero contribui muito pouco no começo.*
- **ninja-coral-3#3** → 36 — *Multiplicar os 12 quilômetros por hora do medidor pelas horas pedaladas é a resposta arrumadinha, e está errada: ela cobra o passeio inteiro a uma velocidade que o ciclista só alcançou no fim. O terreno percorrido acumula uma velocidade que está mudando, então a janela inteira precisa ser somada em vez de amostrada uma vez só.*
- **ninja-coral-3#4** → 180 — *Os 40 m do corredor e os 30 kg do caixote são os dois números mais fáceis de agarrar e nenhum pertence à conta: o caixote é empurrado só parte do caminho, e a massa dele não é a força que o dinamômetro está lendo. O trabalho acumula a força realmente aplicada ao longo da distância realmente percorrida, que aqui é um empurrão constante num trecho declarado.*
- **ninja-coral-3#5** → 180 — *Os 12 do medidor de vazão são uma taxa e os 500 L da placa são o que o tanque comportaria — nenhum dos dois é o que saiu da entrada. Só contam os minutos em que a válvula esteve realmente aberta, não a corrida mais longa que o procedimento permitiria, e o volume é essa vazão constante acumulada ao longo deles.*
- **ninja-coral-3#6** → 8 — *Dois hábitos falham aqui: começar a contagem no início da infusão em vez de na reavaliação, e multiplicar os 6 miligramas por hora do visor pelas duas horas como se a bomba tivesse mantido essa taxa o tempo todo. A quantidade entregue é a taxa acumulada estritamente entre as duas horas indicadas, e uma taxa que sobe é menor no começo dessa janela do que no fim.*
- **ninja-coral-3#7** → 100 — *Os 20 watts do fim da rampa vezes os dez segundos são o número que o datasheet quase convida a escrever, e ele cobra a rampa inteira a uma potência que a resistência só atingiu no último instante. Energia é potência acumulada ao longo do tempo, então uma alimentação que sobe do zero entrega bem menos do que uma leitura fixa do pico sugere.*
- **ninja-coral-3#8** → 24 — *A média de 6 e o pico de 9 são ambos resumos das mesmas quatro leituras e nenhum é um volume — um achata a tempestade, o outro entrega a pior hora dela às quatro. Cada leitura governa apenas a hora que encabeça, então a estimativa é o que essas horas carregam quando são juntadas.*
- **ninja-coral-4#1** → 6 — *Substituir 3 direto é o que divide a sala em três: numerador e denominador somem juntos, e a razão entre duas quantidades que somem não é automaticamente nada nem automaticamente indefinida. O numerador e o denominador têm um fator em comum, e uma vez cancelado o quociente se comporta perfeitamente bem até o ponto em questão.*
- **ninja-coral-4#2** → 1 — *Toda caminhada parcial fica aquém da parede, e é justamente por isso que o argumento soa convincente — mas ficar aquém em cada passo não significa que o total fique aquém. A folga que sobra é ela mesma cortada pela metade a cada vez, então o total corrente se aproxima de um valor que ele nunca precisa ultrapassar.*
- **ninja-coral-4#3** → 8 — *Os 11 que o comprador propôs são os dois números do topo da fração simplesmente somados, o que não é o que uma razão faz, e os 9 do piloto são um custo real num volume minúsculo. Espalhado por uma produção enorme, o custo de preparação por garrafa vira desprezível enquanto o custo de material por garrafa não, e a curva se acomoda sobre o que sobrevive a isso.*
- **ninja-coral-4#4** → 6 — *Os 5 mil da primeira contagem são onde o modelo começa, não onde ele termina, e simplesmente somar os números do topo da fração não é como uma razão se comporta. Longe no tempo as constantes pequenas deixam de importar diante dos termos que crescem com t, e o estoque se achata sobre o que esses deixam para trás.*
- **ninja-coral-4#5** → 40 — *Os 140 graus do pico inicial e o alarme de 65 graus são os números de que a sala fala, e nenhum é o nível que o rack mantém depois de uma execução longa. Um termo que divide por um tempo crescente conta cada vez menos conforme a execução se estende, então o contrato precisa ser precificado sobre o piso em que a curva se achata, e não sobre uma leitura inicial.*
- **ninja-coral-4#6** → 5 — *Os 37 do certificado pertencem ao extremo da faixa, e os 2 bar da pergunta são uma carga e não uma saída, então copiar qualquer um deles preenche o campo com o tipo errado de número. Um modelo feito de potências de x não tem nada de especial acontecendo naquela carga, então o campo recebe o valor para o qual a saída caminha quando a carga se aproxima pelos dois lados.*
- **ninja-coral-4#7** → 5 — *A alegação do chamado é plausível à primeira vista porque o topo do quociente realmente cresce sem limite — mas o de baixo também, e o que decide o caso é como os dois crescem um contra o outro. Os 200 megabytes da captura são um total transferido, e não uma velocidade, então não podem ser a leitura para a qual o indicador caminha.*
- **ninja-coral-4#8** → 200 — *Os 175 miligramas após três doses são um total parcial que ainda não terminou de crescer, então citá-lo como teto subestima o esquema, enquanto os 100 do rótulo são apenas a primeira dose. Cada contribuição é metade da anterior, e embora as doses nunca parem, o total do qual elas se aproximam é finito.*
- **ninja-coral-5#1** → 24 — *Os 16 casos registrados são um total acumulado e os 8 por semana são uma média desde o primeiro caso — um surto que acelera está indo mais rápido que qualquer um dos dois no momento em questão. A autoridade quer a velocidade da curva naquela semana, que é a taxa com que a contagem acumulada está subindo exatamente ali.*
- **ninja-coral-5#2** → 50 — *Os 10 metros por segundo no décimo segundo multiplicados por dez segundos são a armadilha, e isso credita ao trem uma velocidade que ele só atingiu no fim de uma subida a partir da imobilidade. A distância é a velocidade acumulada ao longo desses segundos, então um trem que parte do repouso percorre bem menos do que uma leitura fixa da velocidade final sugere.*
- **ninja-coral-5#3** → 12 — *As duas leituras do livro convidam ao mesmo erro em direções opostas: o 1 da abertura cobra a menos e o 7 do fechamento cobra a mais, porque cada um trata uma taxa crescente como se ela tivesse valido as três horas inteiras. Um volume entregue é a taxa acumulada ao longo da janela, base e crescimento juntos.*
- **ninja-coral-5#4** → 6 — *Os 9 metros da ficha do plano são a altura que o artefato atingiu, não quando ele voltou, e um pico sozinho não diz nada sobre o momento do retorno. O que o chefe precisa é do instante em que o modelo de altura está de volta à linha da água, que é outra leitura da mesma curva.*
- **ninja-coral-5#5** → 8 — *Os 12 metros por segundo na marca de dois segundos convidam a uma multiplicação rápida, e isso cobra toda a abertura a uma velocidade que o velocista só tinha no fim dela. O terreno percorrido acumula uma velocidade que ainda está crescendo, e só contam os dois segundos indicados, não os seis que a câmera por acaso roda.*
- **ninja-coral-5#6** → 36 — *Os 12 segundos de voo são uma duração e a torre de 50 metros é a altura de outra coisa, então nenhum dos dois é o que a autoridade está limitando. O drone sobe e depois volta, e o número pedido é o valor que o modelo de altura atinge onde a subida se esgota — uma altura, não um tempo.*
- **ninja-coral-5#7** → 10 — *A relação global de subida por avanço de 5 é a inclinação de uma reta que liga as duas pontas da curva, e os 25 são uma altura — uma curva que vai ficando mais íngreme não bate com nenhum dos dois na ponta final. O trilho reto precisa casar com a inclinação própria da curva na junção, que é a taxa com que a curva sobe exatamente ali.*
- **ninja-coral-5#8** → 22 — *Os 12 reais por mesa são uma média do lote inteiro da semana, e uma média esconde que a curva de custo fica mais íngreme conforme a oficina se enche. O que a próxima mesa custa é a taxa com que o custo total está subindo no nível em que a cooperativa trabalha agora, que fica acima de qualquer média puxada de baixo.*
- **ninja-coral-6#1** → 100 — *Encher o tambor até as 25 sacas é o que um operador faria e não é o que o modelo premia, porque passado certo ponto cada saca extra custa mais do que traz. A analista pediu um teto em dinheiro, então a resposta é o maior valor que o modelo de lucro atinge — não o número de sacas que o atinge, nem o que a capacidade do tambor daria.*
- **ninja-coral-6#2** → 12 — *Os 36 metros por segundo são uma velocidade, e dimensionar as fixações por uma velocidade é exatamente o erro que o órgão reprovou da última vez, enquanto os 6 da média da arrancada apagam justamente o instante que está sendo testado. O que os passageiros sentem naquele momento é a taxa com que a própria velocidade está mudando ali.*
- **ninja-coral-6#3** → 128 — *Os 112 m da folha são apenas os três primeiros trechos e os quiques não param ali, então informar isso subestima o caminho; os 64 m são só o primeiro trecho. Cada trecho é metade do anterior, e uma sequência de pedaços que encolhem assim se acumula num total finito mesmo sem nunca terminar.*
- **ninja-coral-6#4** → 144 — *Os 140 do ano passado ficam tão perto do teto que parecem o teto, e o preço que os produziu não é o melhor que o modelo permite. A receita aqui é um produto que sobe com o preço e cai com os espectadores que o preço afasta, e a carta precisa do maior valor que esse produto pode assumir, não do preço que o assume.*
- **ninja-coral-6#5** → 8 — *Colocar 4 direto faz as duas metades do quociente sumirem de uma vez, e nem deixar o campo vazio nem copiar o valor aproximado é o que essa situação significa. O numerador e o denominador desse quociente têm um fator em comum, e ao cancelá-lo sobra uma expressão que se comporta perfeitamente bem enquanto os dois estados são aproximados.*
- **ninja-coral-6#6** → 18 — *Os 81 centímetros quadrados que já estão no painel são um total, não o ganho do próximo centímetro, e o painel menor do vizinho só mostra que o mesmo passo compra menos lá embaixo na faixa. A pergunta é a rapidez com que a área cresce com o lado nesse tamanho, que é justamente por que cada salto custa mais por centímetro que o anterior.*
- **ninja-coral-6#7** → 64 — *A rajada vizinha de 2 segundos e a contagem de nove do dia são janelas erradas, e o campo do formulário é para uma rajada só. A energia captada é a potência instantânea acumulada ao longo dos segundos que essa rajada realmente durou, e uma potência que cresce assim tão rápido contribui quase nada nos momentos iniciais.*
- **ninja-coral-6#8** → 50 — *Os 20 metros por segundo no impacto multiplicados pelos cinco segundos são o número que uma das partes gostaria, e ele cobra a fase inteira a uma velocidade atingida só no fim dela. O terreno percorrido acumula uma velocidade que subia do zero no semáforo, então o carro não pode ter ido tão longe quanto essa leitura fixa sugere.*
