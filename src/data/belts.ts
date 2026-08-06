import {
  generateAddWithin10,
  generateAddWithin20,
  generateThreeAddends,
  generateTwoDigitPlusOneNoCarry,
  generateTwoDigitPlusOneWithCarry,
  generateTwoDigitNoCarry,
  generateTwoDigitWithCarry,
  generateThreeDigitNoCarry,
  generateThreeDigitSingleCarry,
  generateThreeDigitDoubleCarry,
  generateSubWithin10,
  generateSubWithin20,
  generateSubThreeNumbers,
  generateTwoDigitMinusOneNoCarry,
  generateTwoDigitMinusOneWithCarry,
  generateTwoDigitMinusTwoDigitNoCarry,
  generateTwoDigitMinusTwoDigitWithCarry,
  generateThreeDigitMinusThreeDigitNoCarry,
  generateThreeDigitMinusThreeDigitSingleCarry,
  generateThreeDigitMinusThreeDigitDoubleCarry,
  generateFriendlyTables,
  generateTables3and4,
  generateHardTables,
  generateAllTablesMixed,
  generateMultiplyBy10And100,
  generateTwoDigitByOneDigitNoCarry,
  generateTwoDigitByOneDigitWithCarry,
  generateTwoDigitByTwoDigit,
  generateThreeDigitByOneDigit,
  generateThreeDigitByTwoDigit,
  generateExactDivision,
  generateDivisionWithRemainder,
  generateDivideBy10And100,
  generateTwoDigitByOneDigitExact,
  generateTwoDigitByOneDigitWithRemainder,
  generateThreeDigitByOneDigitExact,
  generateThreeDigitByOneDigitWithRemainder,
  generateTwoDigitDivisorExact,
  generateThreeDigitByTwoDigitExact,
  generateThreeDigitByTwoDigitWithRemainder,
  generateIdentifyFraction,
  generateEquivalentFraction,
  generateSimplifyFraction,
  generateFractionOfNumber,
  generateAddFractionsSameDenominator,
  generateSubtractFractionsSameDenominator,
  generateAddFractionsDifferentDenominators,
  generateMultiplyFractions,
  generateDivideFractions,
  generateMixedToImproper,
  generateIdentifyDecimalTenths,
  generateFractionTenthsToDecimal,
  generateMixedTenthsToDecimal,
  generateAddDecimalsNoCarry,
  generateAddDecimalsWithCarry,
  generateSubtractDecimalsNoBorrow,
  generateSubtractDecimalsWithBorrow,
  generateMultiplyDecimalBy10Or100,
  generateMultiplyDecimalByWhole,
  generateDivideWholeBy10,
  generateDivideDecimalByWhole,
  generateRoundDecimal,
  generateVariableBoxReading,
  generateEvaluateExpression,
  generateOrderOfOperations,
  generateNegativeNumberLine,
  generateAddIntegersSameSign,
  generateAddIntegersDifferentSigns,
  generateSubtractIntegers,
  generateCombiningLikeTerms,
  generateDistributiveProperty,
  generateMultiStepExpression,
  generateBalanceScaleReading,
  generateOneStepAddSub,
  generateOneStepMulDiv,
  generateTwoStepEquation,
  generateEquationNegativeSolution,
  generateVariableBothSides,
  generateEquationWithDistribution,
  generateCombineLikeTermsFirst,
  generateDistributionBothSides,
  generateMultiStepEquation,
  generateFunctionMachineReading,
  generateEvaluateFunctionPositive,
  generateEvaluateFunctionNegative,
  generateSlopeStaircaseReading,
  generateSlopeFromTwoPoints,
  generateFindYIntercept,
  generateFindXIntercept,
  generateEvaluateBasicQuadratic,
  generateEvaluateFullQuadratic,
  generateCombineFunctions,
  generateFactorAreaReading,
  generateFactorTrinomialPair,
  generateSolveQuadraticByFactoring,
  generateQuadraticFormula,
  generateCompleteTheSquare,
  generateDiscriminant,
  generateSimplifyRadical,
  generateExponentRules,
  generateLinearSystem,
  generateRearrangeFactorSolve,
  generateSquares,
  generatePowers,
  generateSquareRootsExact,
  generateCubeRootsMixed,
  generateSmallestPrimeFactor,
  generateGcd,
  generateLcm,
  generateEasyPercent,
  generateHardPercent,
  generatePercentChange,
  generateProportion,
  generateScientificNotation,
  generateNumberMasteryMix,
  generateRectanglePerimeter,
  generateRectangleArea,
  generateTriangleAreaProblem,
  generateTrapezoidArea,
  generateTriangleAngleSum,
  generateComplementSupplement,
  generatePythagoreanHypotenuse,
  generatePythagoreanLeg,
  generateSimilarTriangles,
  generatePlaneGeometryMix,
  generateCubeVolume,
  generateBoxVolume,
  generateCubeSurface,
  generateCylinderVolume,
  generateConeVolume,
  generatePyramidVolume,
  generateSolidGeometryMix,
  generateSinRatio,
  generateCosRatio,
  generateTanRatio,
  generateSpecialAngles,
  generateCosFromSin,
  generateSideFromRatio,
  generateRadiansToDegrees,
  generateReferenceAngle,
  generateTrigMix,
  generateRedBeltMix,
  generateNegativeExponent,
  generateSolveExponential,
  generateLogMeaning,
  generateLog10,
  generateLogProductRule,
  generateLogQuotientRule,
  generateSolveLog,
  generateLogProduct,
  generateShiftedExponential,
  generateLogsMix,
  generateNextTermAP,
  generateNthTermAP,
  generateSumAP,
  generateNextTermGP,
  generateNthTermGP,
  generateSumGP,
  generateInfiniteGP,
  generateFindRatio,
  generateRecursiveSequence,
  generateSequencesMix,
  generateMultiplicationPrinciple,
  generateFactorial,
  generateFactorialQuotient,
  generateArrangements,
  generateCombinations,
  generateDieProbability,
  generateIndependentEvents,
  generateComplementProbability,
  generateUrnProbability,
  generateCountingMix,
  generateMatrixElement,
  generateDet2x2,
  generateDetZero,
  generateDet3x3,
  generateTrace,
  generateDotProduct,
  generateGeneralSystem,
  generateMatricesMix,
  generatePolynomialDegree,
  generateEvaluatePolynomial,
  generateRemainderTheorem,
  generateGirardQuadratic,
  generateGirardCubic,
  generatePowersOfI,
  generateComplexAddition,
  generateComplexMultiplication,
  generateComplexModulus,
  generatePolynomialsMix,
  generateDistanceBetweenPoints,
  generateMidpoint,
  generateIntegerSlope,
  generateLineThroughPoint,
  generateLineXIntercept,
  generatePerpendicularSlope,
  generateCircleRadius,
  generateCircleCenter,
  generateCircleThroughPoint,
  generateAnalyticGeometryMix,
  generateGoldBeltMix,
  generateBinaryToDecimal,
  generateDecimalToBinary,
  generatePowersOfTwo,
  generateHexToDecimal,
  generateModulo,
  generateBinaryAddition,
  generateBitwiseAnd,
  generateBitwiseOrXor,
  generateBitShift,
  generateTruthTableRows,
  generateSetUnion,
  generateRecurrenceEval,
  generateGraphFacts,
  generateLoopSteps,
  generateDigitalMix,
  generateLimitLinearConcept,
  generateLimitQuadratic,
  generateLimitFactoring,
  generateDerivativeLinearConcept,
  generateDerivativePowerRule,
  generateDerivativeAtPoint,
  generateAreaBarsReading,
  generateAntiderivativePowerRule,
  generateDefiniteIntegral,
  generateCalculusCapstone,
} from "../engine/problemGenerator";
import type { Belt, LocalizedText } from "../types";

const whiteBelt: Belt = {
  id: "white",
  name: { en: "White Belt", pt: "Faixa Branca", es: "Cinturón Blanco" },
  order: 1,
  operationLabel: { en: "Addition", pt: "Soma", es: "Suma" },
  colorVar: "--belt-white",
  tagline: {
    en: "Every dojo journey starts here. Learn to add with confidence.",
    pt: "Toda jornada no dojo começa aqui. Aprenda a somar com confiança.",
    es: "Todo camino en el dojo empieza aquí. Aprende a sumar con confianza.",
  },
  stripes: [
    {
      id: "white-1",
      beltId: "white",
      index: 1,
      title: { en: "Adding within 10", pt: "Somar até 10", es: "Sumar hasta 10" },
      summary: {
        en: "Two small numbers that never add past 10.",
        pt: "Dois números pequenos que nunca passam de 10.",
        es: "Dos números pequeños que nunca superan 10.",
      },
      lesson: {
        intro: {
          en: "When both numbers are small, count on from the bigger one.",
          pt: "Quando os dois números são pequenos, conte a partir do maior.",
          es: "Cuando los dos números son pequeños, cuenta a partir del mayor.",
        },
        example: { id: "ex-white-1", prompt: "6 + 3", answer: 9, operands: [6, 3] },
        diagram: { kind: "numberLine", start: 6, end: 9 },
        steps: [
          {
            text: {
              en: "Start at the bigger number: 6.",
              pt: "Comece pelo número maior: 6.",
              es: "Empieza por el número mayor: 6.",
            },
          },
          {
            text: {
              en: "Count up 3 more: 7, 8, 9.",
              pt: "Conte mais 3: 7, 8, 9.",
              es: "Cuenta 3 más: 7, 8, 9.",
            },
          },
          { text: { en: "6 + 3 = 9.", pt: "6 + 3 = 9.", es: "6 + 3 = 9." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateAddWithin10,
    },
    {
      id: "white-2",
      beltId: "white",
      index: 2,
      title: { en: "Adding within 20", pt: "Somar até 20", es: "Sumar hasta 20" },
      summary: {
        en: "Crossing over 10 using the 'make ten' trick.",
        pt: "Passando de 10 usando o truque de 'completar 10'.",
        es: "Cruzando el 10 con el truco de 'completar 10'.",
      },
      lesson: {
        intro: {
          en: "Break the second number apart to fill the first one up to 10 — that's 'making ten'.",
          pt: "Quebre o segundo número em partes para completar o primeiro até 10 — isso é 'completar 10'.",
          es: "Divide el segundo número en partes para completar el primero hasta 10 — eso es 'completar 10'.",
        },
        example: { id: "ex-white-2", prompt: "8 + 5", answer: 13, operands: [8, 5] },
        steps: [
          {
            text: {
              en: "8 needs {{2}} more to reach 10.",
              pt: "O 8 precisa de mais {{2}} para chegar a 10.",
              es: "Al 8 le faltan {{2}} para llegar a 10.",
            },
          },
          {
            text: {
              en: "Split 5 into {{2}} + 3.",
              pt: "Separe o 5 em {{2}} + 3.",
              es: "Separa el 5 en {{2}} + 3.",
            },
          },
          {
            text: {
              en: "8 + {{2}} = 10, then 10 + 3 = 13.",
              pt: "8 + {{2}} = 10, depois 10 + 3 = 13.",
              es: "8 + {{2}} = 10, luego 10 + 3 = 13.",
            },
          },
          { text: { en: "8 + 5 = 13.", pt: "8 + 5 = 13.", es: "8 + 5 = 13." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateAddWithin20,
    },
    {
      id: "white-3",
      beltId: "white",
      index: 3,
      title: { en: "Adding three numbers", pt: "Somar três números", es: "Sumar tres números" },
      summary: {
        en: "Chain two additions together to combine three numbers.",
        pt: "Encadeie duas somas para juntar três números.",
        es: "Encadena dos sumas para juntar tres números.",
      },
      lesson: {
        intro: {
          en: "Add the first two numbers, then add the third to that total.",
          pt: "Some os dois primeiros números, depois some o terceiro a esse total.",
          es: "Suma los dos primeros números, luego suma el tercero a ese total.",
        },
        example: { id: "ex-white-3", prompt: "3 + 4 + 2", answer: 9, operands: [3, 4, 2] },
        steps: [
          {
            text: {
              en: "Add the first two: 3 + 4 = 7.",
              pt: "Some os dois primeiros: 3 + 4 = 7.",
              es: "Suma los dos primeros: 3 + 4 = 7.",
            },
          },
          {
            text: {
              en: "Add the third to that: 7 + 2 = 9.",
              pt: "Some o terceiro a esse total: 7 + 2 = 9.",
              es: "Suma el tercero a ese total: 7 + 2 = 9.",
            },
          },
          { text: { en: "3 + 4 + 2 = 9.", pt: "3 + 4 + 2 = 9.", es: "3 + 4 + 2 = 9." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateThreeAddends,
    },
    {
      id: "white-4",
      beltId: "white",
      index: 4,
      title: {
        en: "Two-digit + one-digit, no carrying",
        pt: "Dois dígitos + um dígito, sem 'vai um'",
        es: "Dos dígitos + un dígito, sin llevar",
      },
      summary: {
        en: "Add the single digit straight onto the units — the tens don't move.",
        pt: "Some o dígito único direto nas unidades — a dezena não muda.",
        es: "Suma el dígito único directo en las unidades — la decena no cambia.",
      },
      lesson: {
        intro: {
          en: "Only the units column changes. Add the small number there and keep the tens digit the same.",
          pt: "Só a coluna das unidades muda. Some o número pequeno ali e mantenha a dezena igual.",
          es: "Solo la columna de las unidades cambia. Suma el número pequeño ahí y mantén la decena igual.",
        },
        example: { id: "ex-white-4", prompt: "34 + 5", answer: 39, operands: [34, 5] },
        steps: [
          {
            text: {
              en: "Add to the units: 4 + 5 = 9.",
              pt: "Some nas unidades: 4 + 5 = 9.",
              es: "Suma en las unidades: 4 + 5 = 9.",
            },
          },
          {
            text: {
              en: "The tens digit stays: 3.",
              pt: "A dezena continua: 3.",
              es: "La decena se mantiene: 3.",
            },
          },
          { text: { en: "34 + 5 = 39.", pt: "34 + 5 = 39.", es: "34 + 5 = 39." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateTwoDigitPlusOneNoCarry,
    },
    {
      id: "white-5",
      beltId: "white",
      index: 5,
      title: {
        en: "Two-digit + one-digit, with carrying",
        pt: "Dois dígitos + um dígito, com 'vai um'",
        es: "Dos dígitos + un dígito, llevando",
      },
      summary: {
        en: "When the units overflow 9, carry the 1 into the tens.",
        pt: "Quando as unidades passam de 9, o 1 vai para a dezena.",
        es: "Cuando las unidades pasan de 9, el 1 se lleva a la decena.",
      },
      lesson: {
        intro: {
          en: "Add the units first. If it's 10 or more, carry the 1 into the tens digit.",
          pt: "Some as unidades primeiro. Se der 10 ou mais, leve o 1 para a dezena.",
          es: "Suma las unidades primero. Si da 10 o más, lleva el 1 a la decena.",
        },
        example: { id: "ex-white-5", prompt: "38 + 5", answer: 43, operands: [38, 5] },
        steps: [
          {
            text: {
              en: "Add the units: 8 + 5 = 13. Write the 3, carry the {{1}}.",
              pt: "Some as unidades: 8 + 5 = 13. Escreva o 3 e leve o {{1}}.",
              es: "Suma las unidades: 8 + 5 = 13. Escribe el 3 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Add the carried {{1}} to the tens: 3 + {{1}} = 4.",
              pt: "Some o {{1}} que veio à dezena: 3 + {{1}} = 4.",
              es: "Suma el {{1}} que llevaste a la decena: 3 + {{1}} = 4.",
            },
          },
          { text: { en: "38 + 5 = 43.", pt: "38 + 5 = 43.", es: "38 + 5 = 43." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateTwoDigitPlusOneWithCarry,
    },
    {
      id: "white-6",
      beltId: "white",
      index: 6,
      title: {
        en: "Two digits, no carrying",
        pt: "Dois dígitos, sem 'vai um'",
        es: "Dos dígitos, sin llevar",
      },
      summary: {
        en: "Line up the columns, add units and tens separately.",
        pt: "Alinhe as colunas e some unidades e dezenas separadamente.",
        es: "Alinea las columnas y suma unidades y decenas por separado.",
      },
      lesson: {
        intro: {
          en: "Line up the tens and units, then add each column on its own.",
          pt: "Alinhe as dezenas e unidades, depois some cada coluna separadamente.",
          es: "Alinea las decenas y unidades, luego suma cada columna por separado.",
        },
        example: { id: "ex-white-6", prompt: "34 + 25", answer: 59, operands: [34, 25] },
        steps: [
          {
            text: {
              en: "Add the units column: 4 + 5 = 9.",
              pt: "Some a coluna das unidades: 4 + 5 = 9.",
              es: "Suma la columna de las unidades: 4 + 5 = 9.",
            },
          },
          {
            text: {
              en: "Add the tens column: 3 + 2 = 5.",
              pt: "Some a coluna das dezenas: 3 + 2 = 5.",
              es: "Suma la columna de las decenas: 3 + 2 = 5.",
            },
          },
          {
            text: {
              en: "Put them together: 59.",
              pt: "Junte tudo: 59.",
              es: "Únelo todo: 59.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateTwoDigitNoCarry,
    },
    {
      id: "white-7",
      beltId: "white",
      index: 7,
      title: {
        en: "Two digits, with carrying",
        pt: "Dois dígitos, com 'vai um'",
        es: "Dos dígitos, llevando",
      },
      summary: {
        en: "When a column overflows 9, carry the 1.",
        pt: "Quando uma coluna passa de 9, o 1 'vai' para a próxima.",
        es: "Cuando una columna pasa de 9, el 1 'se lleva' a la siguiente.",
      },
      lesson: {
        intro: {
          en: "When the units add up to 10 or more, carry the extra 1 into the tens column.",
          pt: "Quando as unidades somam 10 ou mais, leve o 1 extra para a coluna das dezenas.",
          es: "Cuando las unidades suman 10 o más, lleva el 1 extra a la columna de las decenas.",
        },
        example: { id: "ex-white-7", prompt: "27 + 46", answer: 73, operands: [27, 46] },
        steps: [
          {
            text: {
              en: "Add the units column: 7 + 6 = 13. Write the 3, carry the {{1}}.",
              pt: "Some a coluna das unidades: 7 + 6 = 13. Escreva o 3 e leve o {{1}}.",
              es: "Suma la columna de las unidades: 7 + 6 = 13. Escribe el 3 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Add the tens column: 2 + 4 + {{1}} (carried) = 7.",
              pt: "Some a coluna das dezenas: 2 + 4 + {{1}} (que veio) = 7.",
              es: "Suma la columna de las decenas: 2 + 4 + {{1}} (que llevaste) = 7.",
            },
          },
          { text: { en: "27 + 46 = 73.", pt: "27 + 46 = 73.", es: "27 + 46 = 73." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 15 },
      generate: generateTwoDigitWithCarry,
    },
    {
      id: "white-8",
      beltId: "white",
      index: 8,
      title: {
        en: "Three digits, no carrying",
        pt: "Três dígitos, sem 'vai um'",
        es: "Tres dígitos, sin llevar",
      },
      summary: {
        en: "Same column method, one more column: hundreds, tens, units.",
        pt: "Mesmo método das colunas, só mais uma: centena, dezena, unidade.",
        es: "Mismo método de columnas, una más: centena, decena, unidad.",
      },
      lesson: {
        intro: {
          en: "Line up hundreds, tens and units, then add each column on its own — just like before, with one extra column.",
          pt: "Alinhe centenas, dezenas e unidades, depois some cada coluna separadamente — igual antes, com mais uma coluna.",
          es: "Alinea centenas, decenas y unidades, luego suma cada columna por separado — igual que antes, con una columna más.",
        },
        example: { id: "ex-white-8", prompt: "213 + 154", answer: 367, operands: [213, 154] },
        steps: [
          {
            text: {
              en: "Add the units: 3 + 4 = 7.",
              pt: "Some as unidades: 3 + 4 = 7.",
              es: "Suma las unidades: 3 + 4 = 7.",
            },
          },
          {
            text: {
              en: "Add the tens: 1 + 5 = 6.",
              pt: "Some as dezenas: 1 + 5 = 6.",
              es: "Suma las decenas: 1 + 5 = 6.",
            },
          },
          {
            text: {
              en: "Add the hundreds: 2 + 1 = 3.",
              pt: "Some as centenas: 2 + 1 = 3.",
              es: "Suma las centenas: 2 + 1 = 3.",
            },
          },
          { text: { en: "213 + 154 = 367.", pt: "213 + 154 = 367.", es: "213 + 154 = 367." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateThreeDigitNoCarry,
    },
    {
      id: "white-9",
      beltId: "white",
      index: 9,
      title: { en: "Three digits, one carry", pt: "Três dígitos, um 'vai um'", es: "Tres dígitos, un acarreo" },
      summary: {
        en: "The carry moves one column over, same as always.",
        pt: "O 'vai um' passa para a próxima coluna, como sempre.",
        es: "El acarreo pasa a la siguiente columna, como siempre.",
      },
      lesson: {
        intro: {
          en: "Work column by column. If units carry into tens, add that 1 in before moving to hundreds.",
          pt: "Trabalhe coluna por coluna. Se as unidades gerarem 'vai um', some esse 1 antes de ir para as centenas.",
          es: "Trabaja columna por columna. Si las unidades generan acarreo, súmalo antes de pasar a las centenas.",
        },
        example: { id: "ex-white-9", prompt: "217 + 156", answer: 373, operands: [217, 156] },
        steps: [
          {
            text: {
              en: "Add the units: 7 + 6 = 13. Write the 3, carry the {{1}}.",
              pt: "Some as unidades: 7 + 6 = 13. Escreva o 3 e leve o {{1}}.",
              es: "Suma las unidades: 7 + 6 = 13. Escribe el 3 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Add the tens plus the carry: 1 + 5 + {{1}} = 7.",
              pt: "Some as dezenas mais o que veio: 1 + 5 + {{1}} = 7.",
              es: "Suma las decenas más el acarreo: 1 + 5 + {{1}} = 7.",
            },
          },
          {
            text: {
              en: "Add the hundreds: 2 + 1 = 3.",
              pt: "Some as centenas: 2 + 1 = 3.",
              es: "Suma las centenas: 2 + 1 = 3.",
            },
          },
          { text: { en: "217 + 156 = 373.", pt: "217 + 156 = 373.", es: "217 + 156 = 373." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateThreeDigitSingleCarry,
    },
    {
      id: "white-10",
      beltId: "white",
      index: 10,
      title: {
        en: "Three digits, double carry",
        pt: "Três dígitos, 'vai um' duplo",
        es: "Tres dígitos, doble acarreo",
      },
      summary: {
        en: "The carry can cascade — units into tens, and tens into hundreds.",
        pt: "O 'vai um' pode se repetir — das unidades pra dezena, e da dezena pra centena.",
        es: "El acarreo puede repetirse — de las unidades a las decenas, y de las decenas a las centenas.",
      },
      lesson: {
        intro: {
          en: "Sometimes one carry triggers another. Work column by column and carry every time a column passes 9.",
          pt: "Às vezes um 'vai um' gera outro. Trabalhe coluna por coluna e leve o 1 sempre que uma coluna passar de 9.",
          es: "A veces un acarreo genera otro. Trabaja columna por columna y lleva el 1 cada vez que una columna pase de 9.",
        },
        example: { id: "ex-white-10", prompt: "587 + 368", answer: 955, operands: [587, 368] },
        steps: [
          {
            text: {
              en: "Add the units: 7 + 8 = 15. Write the 5, carry the {{1}}.",
              pt: "Some as unidades: 7 + 8 = 15. Escreva o 5 e leve o {{1}}.",
              es: "Suma las unidades: 7 + 8 = 15. Escribe el 5 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Add the tens plus the carry: 8 + 6 + {{1}} = 15. Write the 5, carry the {{1}} again.",
              pt: "Some as dezenas mais o que veio: 8 + 6 + {{1}} = 15. Escreva o 5 e leve o {{1}} de novo.",
              es: "Suma las decenas más el acarreo: 8 + 6 + {{1}} = 15. Escribe el 5 y lleva el {{1}} de nuevo.",
            },
          },
          {
            text: {
              en: "Add the hundreds plus the carry: 5 + 3 + {{1}} = 9.",
              pt: "Some as centenas mais o que veio: 5 + 3 + {{1}} = 9.",
              es: "Suma las centenas más el acarreo: 5 + 3 + {{1}} = 9.",
            },
          },
          { text: { en: "587 + 368 = 955.", pt: "587 + 368 = 955.", es: "587 + 368 = 955." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 24 },
      generate: generateThreeDigitDoubleCarry,
    },
  ],
};

const blueBelt: Belt = {
  id: "blue",
  name: { en: "Blue Belt", pt: "Faixa Azul", es: "Cinturón Azul" },
  order: 2,
  operationLabel: { en: "Subtraction", pt: "Subtração", es: "Resta" },
  colorVar: "--belt-blue",
  tagline: {
    en: "Take away with the same small-step precision.",
    pt: "Subtraia com a mesma precisão passo a passo.",
    es: "Resta con la misma precisión paso a paso.",
  },
  stripes: [
    {
      id: "blue-1",
      beltId: "blue",
      index: 1,
      title: { en: "Subtracting within 10", pt: "Subtrair até 10", es: "Restar hasta 10" },
      summary: {
        en: "Take a small number away without ever going below zero.",
        pt: "Tire um número pequeno sem nunca passar de zero.",
        es: "Resta un número pequeño sin nunca pasar de cero.",
      },
      lesson: {
        intro: {
          en: "Count backwards from the bigger number.",
          pt: "Conte para trás a partir do número maior.",
          es: "Cuenta hacia atrás desde el número mayor.",
        },
        example: { id: "ex-blue-1", prompt: "9 - 3", answer: 6, operands: [9, 3] },
        diagram: { kind: "numberLine", start: 9, end: 6 },
        steps: [
          { text: { en: "Start at 9.", pt: "Comece no 9.", es: "Empieza en el 9." } },
          {
            text: {
              en: "Count back 3: 8, 7, 6.",
              pt: "Conte 3 para trás: 8, 7, 6.",
              es: "Cuenta 3 hacia atrás: 8, 7, 6.",
            },
          },
          { text: { en: "9 - 3 = 6.", pt: "9 - 3 = 6.", es: "9 - 3 = 6." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateSubWithin10,
    },
    {
      id: "blue-2",
      beltId: "blue",
      index: 2,
      title: { en: "Subtracting within 20", pt: "Subtrair até 20", es: "Restar hasta 20" },
      summary: {
        en: "Bridge back through 10 the same way you bridged forward.",
        pt: "Volte pelo 10 do mesmo jeito que você foi para frente.",
        es: "Cruza de vuelta por el 10 igual que cruzaste hacia adelante.",
      },
      lesson: {
        intro: {
          en: "Break the number you're subtracting into two parts: enough to bring the first number down to 10, then the rest.",
          pt: "Quebre o número que você está subtraindo em duas partes: o suficiente para levar o primeiro número até 10, depois o resto.",
          es: "Divide el número que restas en dos partes: lo suficiente para bajar el primer número hasta 10, y luego el resto.",
        },
        example: { id: "ex-blue-2", prompt: "15 - 8", answer: 7, operands: [15, 8] },
        steps: [
          {
            text: {
              en: "15 needs to lose {{5}} to reach 10.",
              pt: "O 15 precisa perder {{5}} para chegar a 10.",
              es: "Al 15 le hace falta perder {{5}} para llegar a 10.",
            },
          },
          {
            text: {
              en: "Split 8 into {{5}} + 3.",
              pt: "Separe o 8 em {{5}} + 3.",
              es: "Separa el 8 en {{5}} + 3.",
            },
          },
          {
            text: {
              en: "15 - {{5}} = 10, then 10 - 3 = 7.",
              pt: "15 - {{5}} = 10, depois 10 - 3 = 7.",
              es: "15 - {{5}} = 10, luego 10 - 3 = 7.",
            },
          },
          { text: { en: "15 - 8 = 7.", pt: "15 - 8 = 7.", es: "15 - 8 = 7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateSubWithin20,
    },
    {
      id: "blue-3",
      beltId: "blue",
      index: 3,
      title: { en: "Subtracting three numbers", pt: "Subtrair três números", es: "Restar tres números" },
      summary: {
        en: "Chain two subtractions together.",
        pt: "Encadeie duas subtrações.",
        es: "Encadena dos restas.",
      },
      lesson: {
        intro: {
          en: "Subtract the second number first, then subtract the third from what's left.",
          pt: "Subtraia o segundo número primeiro, depois subtraia o terceiro do que sobrou.",
          es: "Resta el segundo número primero, luego resta el tercero de lo que queda.",
        },
        example: { id: "ex-blue-3", prompt: "15 - 4 - 3", answer: 8, operands: [15, 4, 3] },
        steps: [
          {
            text: {
              en: "Subtract the first two: 15 - 4 = 11.",
              pt: "Subtraia os dois primeiros: 15 - 4 = 11.",
              es: "Resta los dos primeros: 15 - 4 = 11.",
            },
          },
          {
            text: {
              en: "Subtract the third from that: 11 - 3 = 8.",
              pt: "Subtraia o terceiro disso: 11 - 3 = 8.",
              es: "Resta el tercero de eso: 11 - 3 = 8.",
            },
          },
          { text: { en: "15 - 4 - 3 = 8.", pt: "15 - 4 - 3 = 8.", es: "15 - 4 - 3 = 8." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateSubThreeNumbers,
    },
    {
      id: "blue-4",
      beltId: "blue",
      index: 4,
      title: {
        en: "Two-digit − one-digit, no borrowing",
        pt: "Dois dígitos − um dígito, sem 'emprestar'",
        es: "Dos dígitos − un dígito, sin prestar",
      },
      summary: {
        en: "The units digit is big enough — just subtract it directly.",
        pt: "A unidade já é grande o suficiente — só subtraia direto.",
        es: "La unidad ya es suficiente — solo réstala directo.",
      },
      lesson: {
        intro: {
          en: "If the units digit is bigger than what you're subtracting, just take it away — the tens digit doesn't change.",
          pt: "Se a unidade for maior que o que você vai subtrair, é só tirar — a dezena não muda.",
          es: "Si la unidad es mayor que lo que vas a restar, solo quítalo — la decena no cambia.",
        },
        example: { id: "ex-blue-4", prompt: "47 - 5", answer: 42, operands: [47, 5] },
        steps: [
          {
            text: {
              en: "Subtract from the units: 7 - 5 = 2.",
              pt: "Subtraia nas unidades: 7 - 5 = 2.",
              es: "Resta en las unidades: 7 - 5 = 2.",
            },
          },
          {
            text: {
              en: "The tens digit stays: 4.",
              pt: "A dezena continua: 4.",
              es: "La decena se mantiene: 4.",
            },
          },
          { text: { en: "47 - 5 = 42.", pt: "47 - 5 = 42.", es: "47 - 5 = 42." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateTwoDigitMinusOneNoCarry,
    },
    {
      id: "blue-5",
      beltId: "blue",
      index: 5,
      title: {
        en: "Two-digit − one-digit, with borrowing",
        pt: "Dois dígitos − um dígito, com 'emprestar'",
        es: "Dos dígitos − un dígito, prestando",
      },
      summary: {
        en: "When the units digit is too small, borrow 10 from the tens.",
        pt: "Quando a unidade é pequena demais, empreste 10 da dezena.",
        es: "Cuando la unidad es muy pequeña, presta 10 de la decena.",
      },
      lesson: {
        intro: {
          en: "If you can't subtract the units directly, borrow 1 ten (10) from the tens digit and add it to the units.",
          pt: "Se não der pra subtrair a unidade direto, empreste 1 dezena (10) e some com a unidade.",
          es: "Si no puedes restar la unidad directo, presta 1 decena (10) y súmala a la unidad.",
        },
        example: { id: "ex-blue-5", prompt: "42 - 7", answer: 35, operands: [42, 7] },
        steps: [
          {
            text: {
              en: "2 is smaller than 7, so borrow {{1}} ten: 12 - 7 = 5.",
              pt: "2 é menor que 7, então empreste {{1}} dezena: 12 - 7 = 5.",
              es: "2 es menor que 7, así que presta {{1}} decena: 12 - 7 = 5.",
            },
          },
          {
            text: {
              en: "The tens digit loses {{1}}: 4 becomes 3.",
              pt: "A dezena perde {{1}}: 4 vira 3.",
              es: "La decena pierde {{1}}: 4 se convierte en 3.",
            },
          },
          { text: { en: "42 - 7 = 35.", pt: "42 - 7 = 35.", es: "42 - 7 = 35." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateTwoDigitMinusOneWithCarry,
    },
    {
      id: "blue-6",
      beltId: "blue",
      index: 6,
      title: { en: "Two digits, no borrowing", pt: "Dois dígitos, sem 'emprestar'", es: "Dos dígitos, sin prestar" },
      summary: {
        en: "Subtract each column on its own, top digit always bigger.",
        pt: "Subtraia cada coluna separadamente, o de cima sempre maior.",
        es: "Resta cada columna por separado, el de arriba siempre mayor.",
      },
      lesson: {
        intro: {
          en: "Line up the tens and units, then subtract each column on its own.",
          pt: "Alinhe as dezenas e unidades, depois subtraia cada coluna separadamente.",
          es: "Alinea las decenas y unidades, luego resta cada columna por separado.",
        },
        example: { id: "ex-blue-6", prompt: "58 - 23", answer: 35, operands: [58, 23] },
        steps: [
          {
            text: {
              en: "Subtract the units: 8 - 3 = 5.",
              pt: "Subtraia as unidades: 8 - 3 = 5.",
              es: "Resta las unidades: 8 - 3 = 5.",
            },
          },
          {
            text: {
              en: "Subtract the tens: 5 - 2 = 3.",
              pt: "Subtraia as dezenas: 5 - 2 = 3.",
              es: "Resta las decenas: 5 - 2 = 3.",
            },
          },
          { text: { en: "58 - 23 = 35.", pt: "58 - 23 = 35.", es: "58 - 23 = 35." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateTwoDigitMinusTwoDigitNoCarry,
    },
    {
      id: "blue-7",
      beltId: "blue",
      index: 7,
      title: { en: "Two digits, with borrowing", pt: "Dois dígitos, com 'emprestar'", es: "Dos dígitos, prestando" },
      summary: {
        en: "When the top units digit is smaller, borrow from the tens.",
        pt: "Quando a unidade de cima é menor, empreste da dezena.",
        es: "Cuando la unidad de arriba es menor, presta de la decena.",
      },
      lesson: {
        intro: {
          en: "If the units on top are smaller than the units on the bottom, borrow 1 ten before subtracting.",
          pt: "Se a unidade de cima for menor que a de baixo, empreste 1 dezena antes de subtrair.",
          es: "Si la unidad de arriba es menor que la de abajo, presta 1 decena antes de restar.",
        },
        example: { id: "ex-blue-7", prompt: "52 - 27", answer: 25, operands: [52, 27] },
        steps: [
          {
            text: {
              en: "2 is smaller than 7, so borrow {{1}} ten: 12 - 7 = 5.",
              pt: "2 é menor que 7, então empreste {{1}} dezena: 12 - 7 = 5.",
              es: "2 es menor que 7, así que presta {{1}} decena: 12 - 7 = 5.",
            },
          },
          {
            text: {
              en: "The tens digit loses {{1}}: 5 - {{1}} = 4, then 4 - 2 = 2.",
              pt: "A dezena perde {{1}}: 5 - {{1}} = 4, depois 4 - 2 = 2.",
              es: "La decena pierde {{1}}: 5 - {{1}} = 4, luego 4 - 2 = 2.",
            },
          },
          { text: { en: "52 - 27 = 25.", pt: "52 - 27 = 25.", es: "52 - 27 = 25." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 15 },
      generate: generateTwoDigitMinusTwoDigitWithCarry,
    },
    {
      id: "blue-8",
      beltId: "blue",
      index: 8,
      title: {
        en: "Three digits, no borrowing",
        pt: "Três dígitos, sem 'emprestar'",
        es: "Tres dígitos, sin prestar",
      },
      summary: {
        en: "Same column method, one more column: hundreds, tens, units.",
        pt: "Mesmo método das colunas, só mais uma: centena, dezena, unidade.",
        es: "Mismo método de columnas, una más: centena, decena, unidad.",
      },
      lesson: {
        intro: {
          en: "Line up hundreds, tens and units, then subtract each column on its own.",
          pt: "Alinhe centenas, dezenas e unidades, depois subtraia cada coluna separadamente.",
          es: "Alinea centenas, decenas y unidades, luego resta cada columna por separado.",
        },
        example: { id: "ex-blue-8", prompt: "468 - 235", answer: 233, operands: [468, 235] },
        steps: [
          {
            text: {
              en: "Subtract the units: 8 - 5 = 3.",
              pt: "Subtraia as unidades: 8 - 5 = 3.",
              es: "Resta las unidades: 8 - 5 = 3.",
            },
          },
          {
            text: {
              en: "Subtract the tens: 6 - 3 = 3.",
              pt: "Subtraia as dezenas: 6 - 3 = 3.",
              es: "Resta las decenas: 6 - 3 = 3.",
            },
          },
          {
            text: {
              en: "Subtract the hundreds: 4 - 2 = 2.",
              pt: "Subtraia as centenas: 4 - 2 = 2.",
              es: "Resta las centenas: 4 - 2 = 2.",
            },
          },
          { text: { en: "468 - 235 = 233.", pt: "468 - 235 = 233.", es: "468 - 235 = 233." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateThreeDigitMinusThreeDigitNoCarry,
    },
    {
      id: "blue-9",
      beltId: "blue",
      index: 9,
      title: { en: "Three digits, one borrow", pt: "Três dígitos, um 'emprestar'", es: "Tres dígitos, un préstamo" },
      summary: {
        en: "The borrow moves one column over, same as always.",
        pt: "O empréstimo passa para a próxima coluna, como sempre.",
        es: "El préstamo pasa a la siguiente columna, como siempre.",
      },
      lesson: {
        intro: {
          en: "Work column by column. If the units need to borrow, take 1 ten from the tens digit before moving to hundreds.",
          pt: "Trabalhe coluna por coluna. Se a unidade precisar emprestar, tire 1 dezena antes de ir para as centenas.",
          es: "Trabaja columna por columna. Si la unidad necesita prestar, quita 1 decena antes de pasar a las centenas.",
        },
        example: { id: "ex-blue-9", prompt: "342 - 128", answer: 214, operands: [342, 128] },
        steps: [
          {
            text: {
              en: "2 is smaller than 8, so borrow {{1}} ten: 12 - 8 = 4.",
              pt: "2 é menor que 8, então empreste {{1}} dezena: 12 - 8 = 4.",
              es: "2 es menor que 8, así que presta {{1}} decena: 12 - 8 = 4.",
            },
          },
          {
            text: {
              en: "The tens digit loses {{1}}: 4 - {{1}} = 3, then 3 - 2 = 1.",
              pt: "A dezena perde {{1}}: 4 - {{1}} = 3, depois 3 - 2 = 1.",
              es: "La decena pierde {{1}}: 4 - {{1}} = 3, luego 3 - 2 = 1.",
            },
          },
          {
            text: {
              en: "Subtract the hundreds: 3 - 1 = 2.",
              pt: "Subtraia as centenas: 3 - 1 = 2.",
              es: "Resta las centenas: 3 - 1 = 2.",
            },
          },
          { text: { en: "342 - 128 = 214.", pt: "342 - 128 = 214.", es: "342 - 128 = 214." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateThreeDigitMinusThreeDigitSingleCarry,
    },
    {
      id: "blue-10",
      beltId: "blue",
      index: 10,
      title: {
        en: "Three digits, double borrow",
        pt: "Três dígitos, 'emprestar' duplo",
        es: "Tres dígitos, doble préstamo",
      },
      summary: {
        en: "The borrow can cascade — units from tens, and tens from hundreds.",
        pt: "O empréstimo pode se repetir — das dezenas pras unidades, e das centenas pras dezenas.",
        es: "El préstamo puede repetirse — de las decenas a las unidades, y de las centenas a las decenas.",
      },
      lesson: {
        intro: {
          en: "Sometimes one borrow triggers another. Work column by column and borrow every time the top digit is too small.",
          pt: "Às vezes um empréstimo gera outro. Trabalhe coluna por coluna e empreste sempre que o dígito de cima for pequeno demais.",
          es: "A veces un préstamo genera otro. Trabaja columna por columna y presta cada vez que el dígito de arriba sea muy pequeño.",
        },
        example: { id: "ex-blue-10", prompt: "523 - 357", answer: 166, operands: [523, 357] },
        steps: [
          {
            text: {
              en: "3 is smaller than 7, so borrow {{1}} ten: 13 - 7 = 6.",
              pt: "3 é menor que 7, então empreste {{1}} dezena: 13 - 7 = 6.",
              es: "3 es menor que 7, así que presta {{1}} decena: 13 - 7 = 6.",
            },
          },
          {
            text: {
              en: "The tens digit loses {{1}}, becoming 1, which is smaller than 5 — borrow again: 11 - 5 = 6.",
              pt: "A dezena perde {{1}}, vira 1, que é menor que 5 — empreste de novo: 11 - 5 = 6.",
              es: "La decena pierde {{1}}, queda en 1, que es menor que 5 — presta de nuevo: 11 - 5 = 6.",
            },
          },
          {
            text: {
              en: "The hundreds digit loses {{1}}: 5 - {{1}} = 4, then 4 - 3 = 1.",
              pt: "A centena perde {{1}}: 5 - {{1}} = 4, depois 4 - 3 = 1.",
              es: "La centena pierde {{1}}: 5 - {{1}} = 4, luego 4 - 3 = 1.",
            },
          },
          { text: { en: "523 - 357 = 166.", pt: "523 - 357 = 166.", es: "523 - 357 = 166." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 24 },
      generate: generateThreeDigitMinusThreeDigitDoubleCarry,
    },
  ],
};

const purpleBelt: Belt = {
  id: "purple",
  name: { en: "Purple Belt", pt: "Faixa Roxa", es: "Cinturón Morado" },
  order: 3,
  operationLabel: { en: "Multiplication", pt: "Multiplicação", es: "Multiplicación" },
  colorVar: "--belt-purple",
  tagline: {
    en: "Times tables until they're pure instinct.",
    pt: "Tabuada até virar puro instinto.",
    es: "Tablas de multiplicar hasta que sean puro instinto.",
  },
  stripes: [
    {
      id: "purple-1",
      beltId: "purple",
      index: 1,
      title: { en: "What multiplication means", pt: "O que significa multiplicar", es: "Qué significa multiplicar" },
      summary: {
        en: "Equal groups added together — see it, then say it as a multiplication.",
        pt: "Grupos iguais somados juntos — veja, depois diga como uma multiplicação.",
        es: "Grupos iguales sumados juntos — mira, y luego dilo como una multiplicación.",
      },
      lesson: {
        intro: {
          en: "Multiplication means adding equal groups together. Picture the groups below, then add them all up.",
          pt: "Multiplicação significa somar grupos iguais. Veja os grupos abaixo, depois some tudo.",
          es: "La multiplicación significa sumar grupos iguales. Mira los grupos abajo, luego suma todo.",
        },
        example: { id: "ex-purple-1", prompt: "5 × 3", answer: 15, operands: [5, 3] },
        diagram: { kind: "groups", groups: 3, perGroup: 5 },
        steps: [
          {
            text: {
              en: "Picture 3 equal groups of 5, like above.",
              pt: "Veja 3 grupos iguais de 5, como acima.",
              es: "Mira 3 grupos iguales de 5, como arriba.",
            },
          },
          {
            text: {
              en: "Add the groups together: 5 + 5 + 5 = 15.",
              pt: "Some os grupos: 5 + 5 + 5 = 15.",
              es: "Suma los grupos: 5 + 5 + 5 = 15.",
            },
          },
          {
            text: {
              en: "That's what 5 × 3 means: 3 groups of 5.",
              pt: "É isso que 5 × 3 significa: 3 grupos de 5.",
              es: "Eso es lo que significa 5 × 3: 3 grupos de 5.",
            },
          },
          { text: { en: "5 × 3 = 15.", pt: "5 × 3 = 15.", es: "5 × 3 = 15." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateFriendlyTables,
    },
    {
      id: "purple-2",
      beltId: "purple",
      index: 2,
      title: {
        en: "Times tables 3 and 4",
        pt: "Tabuada do 3 e do 4",
        es: "Tablas del 3 y del 4",
      },
      summary: {
        en: "Two tables you can build from doubling.",
        pt: "Duas tabuadas que você constrói a partir do dobro.",
        es: "Dos tablas que construyes a partir del doble.",
      },
      lesson: {
        intro: {
          en: "×3 is double the number, plus the number once more. ×4 is double, then double again.",
          pt: "×3 é o dobro do número, mais o número de novo. ×4 é dobrar, e dobrar mais uma vez.",
          es: "×3 es el doble del número, más el número otra vez. ×4 es doblar, y doblar otra vez.",
        },
        example: { id: "ex-purple-2", prompt: "4 × 7", answer: 28, operands: [4, 7] },
        steps: [
          {
            text: {
              en: "Double 7: 7 × 2 = {{14}}.",
              pt: "Dobre o 7: 7 × 2 = {{14}}.",
              es: "Dobla el 7: 7 × 2 = {{14}}.",
            },
          },
          {
            text: {
              en: "Double it again: {{14}} × 2 = 28.",
              pt: "Dobre de novo: {{14}} × 2 = 28.",
              es: "Dóblalo otra vez: {{14}} × 2 = 28.",
            },
          },
          {
            text: {
              en: "For ×3 it's one double plus the number: 3 × 7 = 14 + 7 = 21.",
              pt: "Para ×3 é um dobro mais o número: 3 × 7 = 14 + 7 = 21.",
              es: "Para ×3 es un doble más el número: 3 × 7 = 14 + 7 = 21.",
            },
          },
          { text: { en: "4 × 7 = 28.", pt: "4 × 7 = 28.", es: "4 × 7 = 28." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateTables3and4,
    },
    {
      id: "purple-3",
      beltId: "purple",
      index: 3,
      title: { en: "Times tables 6, 7, 8, 9", pt: "Tabuada do 6, 7, 8 e 9", es: "Tablas del 6, 7, 8 y 9" },
      summary: {
        en: "Break a hard fact into two easier ones.",
        pt: "Quebre uma conta difícil em duas mais fáceis.",
        es: "Divide una cuenta difícil en dos más fáciles.",
      },
      lesson: {
        intro: {
          en: "Split the harder number into a 5 plus the rest, solve both, then add.",
          pt: "Separe o número mais difícil em 5 mais o resto, resolva os dois e some.",
          es: "Separa el número más difícil en 5 más el resto, resuelve ambos y suma.",
        },
        example: { id: "ex-purple-3", prompt: "7 × 8", answer: 56, operands: [7, 8] },
        steps: [
          {
            text: {
              en: "Break 8 into {{5}} + {{3}}.",
              pt: "Separe o 8 em {{5}} + {{3}}.",
              es: "Separa el 8 en {{5}} + {{3}}.",
            },
          },
          {
            text: {
              en: "7 × {{5}} = 35 and 7 × {{3}} = 21.",
              pt: "7 × {{5}} = 35 e 7 × {{3}} = 21.",
              es: "7 × {{5}} = 35 y 7 × {{3}} = 21.",
            },
          },
          { text: { en: "35 + 21 = 56.", pt: "35 + 21 = 56.", es: "35 + 21 = 56." } },
          { text: { en: "7 × 8 = 56.", pt: "7 × 8 = 56.", es: "7 × 8 = 56." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 7 },
      generate: generateHardTables,
    },
    {
      id: "purple-4",
      beltId: "purple",
      index: 4,
      title: {
        en: "All times tables, mixed",
        pt: "Todas as tabuadas, misturadas",
        es: "Todas las tablas, mezcladas",
      },
      summary: {
        en: "The complete tables, every fact from 2 to 10, no more sorting by table.",
        pt: "A tabuada completa, todas as contas de 2 a 10, sem separar por tabuada.",
        es: "Las tablas completas, todas las cuentas del 2 al 10, sin separar por tabla.",
      },
      lesson: {
        intro: {
          en: "Try to recall the fact directly. If you get stuck, use the ×9 trick: multiply by 10, then subtract the number.",
          pt: "Tente lembrar a conta direto. Se travar, use o truque do ×9: multiplique por 10 e depois subtraia o número.",
          es: "Intenta recordar la cuenta directo. Si te trabas, usa el truco del ×9: multiplica por 10 y luego resta el número.",
        },
        example: { id: "ex-purple-4", prompt: "6 × 9", answer: 54, operands: [6, 9] },
        steps: [
          {
            text: {
              en: "Stuck on ×9? Multiply by 10 first: 6 × 10 = {{60}}.",
              pt: "Travou no ×9? Multiplique por 10 primeiro: 6 × 10 = {{60}}.",
              es: "¿Te trabaste en el ×9? Multiplica por 10 primero: 6 × 10 = {{60}}.",
            },
          },
          {
            text: {
              en: "Then subtract the number once: {{60}} - 6 = 54.",
              pt: "Depois subtraia o número uma vez: {{60}} - 6 = 54.",
              es: "Luego resta el número una vez: {{60}} - 6 = 54.",
            },
          },
          { text: { en: "6 × 9 = 54.", pt: "6 × 9 = 54.", es: "6 × 9 = 54." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateAllTablesMixed,
    },
    {
      id: "purple-5",
      beltId: "purple",
      index: 5,
      title: {
        en: "Multiplying by 10 and 100",
        pt: "Multiplicar por 10 e por 100",
        es: "Multiplicar por 10 y por 100",
      },
      summary: {
        en: "The zero trick works on any number, not just single digits.",
        pt: "O truque do zero funciona em qualquer número, não só nos de um dígito.",
        es: "El truco del cero funciona con cualquier número, no solo con los de un dígito.",
      },
      lesson: {
        intro: {
          en: "Multiplying by 10 adds one zero. Multiplying by 100 adds two zeros — for any number.",
          pt: "Multiplicar por 10 adiciona um zero. Multiplicar por 100 adiciona dois zeros — para qualquer número.",
          es: "Multiplicar por 10 agrega un cero. Multiplicar por 100 agrega dos ceros — para cualquier número.",
        },
        example: { id: "ex-purple-5", prompt: "23 × 100", answer: 2300, operands: [23, 100] },
        steps: [
          { text: { en: "×100 adds two zeros.", pt: "×100 adiciona dois zeros.", es: "×100 agrega dos ceros." } },
          { text: { en: "23 becomes 2300.", pt: "23 vira 2300.", es: "23 se convierte en 2300." } },
          { text: { en: "23 × 100 = 2300.", pt: "23 × 100 = 2300.", es: "23 × 100 = 2300." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateMultiplyBy10And100,
    },
    {
      id: "purple-6",
      beltId: "purple",
      index: 6,
      title: {
        en: "Two-digit × one-digit, no carrying",
        pt: "Dois dígitos × um dígito, sem 'vai um'",
        es: "Dos dígitos × un dígito, sin llevar",
      },
      summary: {
        en: "Multiply the units and tens separately, then add.",
        pt: "Multiplique unidade e dezena separadamente, depois some.",
        es: "Multiplica unidad y decena por separado, luego suma.",
      },
      lesson: {
        intro: {
          en: "Multiply the units digit first, then the tens digit, then combine — no carrying needed yet.",
          pt: "Multiplique a unidade primeiro, depois a dezena, e junte — ainda sem precisar de 'vai um'.",
          es: "Multiplica la unidad primero, luego la decena, y júntalas — todavía sin necesitar acarreo.",
        },
        example: { id: "ex-purple-6", prompt: "21 × 4", answer: 84, operands: [21, 4] },
        steps: [
          {
            text: {
              en: "Multiply the units: 1 × 4 = 4.",
              pt: "Multiplique a unidade: 1 × 4 = 4.",
              es: "Multiplica la unidad: 1 × 4 = 4.",
            },
          },
          {
            text: {
              en: "Multiply the tens: 2 × 4 = 8, meaning 80.",
              pt: "Multiplique a dezena: 2 × 4 = 8, ou seja, 80.",
              es: "Multiplica la decena: 2 × 4 = 8, o sea, 80.",
            },
          },
          {
            text: {
              en: "Add them: 80 + 4 = 84.",
              pt: "Some: 80 + 4 = 84.",
              es: "Suma: 80 + 4 = 84.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateTwoDigitByOneDigitNoCarry,
    },
    {
      id: "purple-7",
      beltId: "purple",
      index: 7,
      title: {
        en: "Two-digit × one-digit, with carrying",
        pt: "Dois dígitos × um dígito, com 'vai um'",
        es: "Dos dígitos × un dígito, llevando",
      },
      summary: {
        en: "When the units product hits double digits, carry into the tens.",
        pt: "Quando a multiplicação das unidades passa de 9, leve para a dezena.",
        es: "Cuando la multiplicación de las unidades pasa de 9, lleva a la decena.",
      },
      lesson: {
        intro: {
          en: "Multiply the units first. If the result is 10 or more, carry the extra into the tens multiplication.",
          pt: "Multiplique a unidade primeiro. Se der 10 ou mais, leve o extra para a multiplicação da dezena.",
          es: "Multiplica la unidad primero. Si da 10 o más, lleva el extra a la multiplicación de la decena.",
        },
        example: { id: "ex-purple-7", prompt: "24 × 3", answer: 72, operands: [24, 3] },
        steps: [
          {
            text: {
              en: "Multiply the units: 4 × 3 = 12. Write the 2, carry the {{1}}.",
              pt: "Multiplique a unidade: 4 × 3 = 12. Escreva o 2 e leve o {{1}}.",
              es: "Multiplica la unidad: 4 × 3 = 12. Escribe el 2 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Multiply the tens: 2 × 3 = 6, plus the carried {{1}} = 7.",
              pt: "Multiplique a dezena: 2 × 3 = 6, mais o {{1}} que veio = 7.",
              es: "Multiplica la decena: 2 × 3 = 6, más el {{1}} que llevaste = 7.",
            },
          },
          { text: { en: "24 × 3 = 72.", pt: "24 × 3 = 72.", es: "24 × 3 = 72." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateTwoDigitByOneDigitWithCarry,
    },
    {
      id: "purple-8",
      beltId: "purple",
      index: 8,
      title: { en: "Two-digit × two-digit", pt: "Dois dígitos × dois dígitos", es: "Dos dígitos × dos dígitos" },
      summary: {
        en: "Break the second number into tens and units, multiply each, then add.",
        pt: "Separe o segundo número em dezena e unidade, multiplique cada um e some.",
        es: "Separa el segundo número en decena y unidad, multiplica cada uno y suma.",
      },
      lesson: {
        intro: {
          en: "Split the second number into tens plus units. Multiply the first number by each part, then add the results.",
          pt: "Separe o segundo número em dezena mais unidade. Multiplique o primeiro número por cada parte e some os resultados.",
          es: "Divide el segundo número en decena más unidad. Multiplica el primer número por cada parte y suma los resultados.",
        },
        example: { id: "ex-purple-8", prompt: "23 × 12", answer: 276, operands: [23, 12] },
        steps: [
          {
            text: {
              en: "Break 12 into {{10}} + {{2}}.",
              pt: "Separe o 12 em {{10}} + {{2}}.",
              es: "Separa el 12 en {{10}} + {{2}}.",
            },
          },
          { text: { en: "23 × {{10}} = 230.", pt: "23 × {{10}} = 230.", es: "23 × {{10}} = 230." } },
          { text: { en: "23 × {{2}} = 46.", pt: "23 × {{2}} = 46.", es: "23 × {{2}} = 46." } },
          { text: { en: "230 + 46 = 276.", pt: "230 + 46 = 276.", es: "230 + 46 = 276." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateTwoDigitByTwoDigit,
    },
    {
      id: "purple-9",
      beltId: "purple",
      index: 9,
      title: { en: "Three-digit × one-digit", pt: "Três dígitos × um dígito", es: "Tres dígitos × un dígito" },
      summary: {
        en: "Same carrying method, one more column.",
        pt: "Mesmo método do 'vai um', só mais uma coluna.",
        es: "Mismo método del acarreo, una columna más.",
      },
      lesson: {
        intro: {
          en: "Multiply units, then tens, then hundreds — carrying into the next column whenever a product hits double digits.",
          pt: "Multiplique unidade, depois dezena, depois centena — levando para a próxima coluna sempre que der 10 ou mais.",
          es: "Multiplica unidad, luego decena, luego centena — llevando a la siguiente columna cada vez que dé 10 o más.",
        },
        example: { id: "ex-purple-9", prompt: "213 × 4", answer: 852, operands: [213, 4] },
        steps: [
          {
            text: {
              en: "Multiply the units: 3 × 4 = 12. Write the 2, carry the {{1}}.",
              pt: "Multiplique a unidade: 3 × 4 = 12. Escreva o 2 e leve o {{1}}.",
              es: "Multiplica la unidad: 3 × 4 = 12. Escribe el 2 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Multiply the tens: 1 × 4 = 4, plus the carried {{1}} = 5.",
              pt: "Multiplique a dezena: 1 × 4 = 4, mais o {{1}} que veio = 5.",
              es: "Multiplica la decena: 1 × 4 = 4, más el {{1}} que llevaste = 5.",
            },
          },
          {
            text: {
              en: "Multiply the hundreds: 2 × 4 = 8.",
              pt: "Multiplique a centena: 2 × 4 = 8.",
              es: "Multiplica la centena: 2 × 4 = 8.",
            },
          },
          { text: { en: "213 × 4 = 852.", pt: "213 × 4 = 852.", es: "213 × 4 = 852." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateThreeDigitByOneDigit,
    },
    {
      id: "purple-10",
      beltId: "purple",
      index: 10,
      title: { en: "Three-digit × two-digit", pt: "Três dígitos × dois dígitos", es: "Tres dígitos × dos dígitos" },
      summary: {
        en: "The same split-and-add trick, at full size.",
        pt: "O mesmo truque de separar e somar, em tamanho grande.",
        es: "El mismo truco de separar y sumar, a tamaño completo.",
      },
      lesson: {
        intro: {
          en: "Split the two-digit number into tens plus units. Multiply the three-digit number by each part, then add.",
          pt: "Separe o número de dois dígitos em dezena mais unidade. Multiplique o número de três dígitos por cada parte e some.",
          es: "Divide el número de dos dígitos en decena más unidad. Multiplica el número de tres dígitos por cada parte y suma.",
        },
        example: { id: "ex-purple-10", prompt: "213 × 24", answer: 5112, operands: [213, 24] },
        steps: [
          {
            text: {
              en: "Break 24 into {{20}} + {{4}}.",
              pt: "Separe o 24 em {{20}} + {{4}}.",
              es: "Separa el 24 en {{20}} + {{4}}.",
            },
          },
          { text: { en: "213 × {{20}} = 4260.", pt: "213 × {{20}} = 4260.", es: "213 × {{20}} = 4260." } },
          { text: { en: "213 × {{4}} = 852.", pt: "213 × {{4}} = 852.", es: "213 × {{4}} = 852." } },
          { text: { en: "4260 + 852 = 5112.", pt: "4260 + 852 = 5112.", es: "4260 + 852 = 5112." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 30 },
      generate: generateThreeDigitByTwoDigit,
    },
  ],
};

const brownBelt: Belt = {
  id: "brown",
  name: { en: "Brown Belt", pt: "Faixa Marrom", es: "Cinturón Marrón" },
  order: 4,
  operationLabel: { en: "Division", pt: "Divisão", es: "División" },
  colorVar: "--belt-brown",
  tagline: {
    en: "Split numbers apart cleanly, remainders and all.",
    pt: "Divida números com precisão, restos e tudo.",
    es: "Divide números con precisión, restos incluidos.",
  },
  stripes: [
    {
      id: "brown-1",
      beltId: "brown",
      index: 1,
      title: { en: "Exact division", pt: "Divisão exata", es: "División exacta" },
      summary: {
        en: "Split a number into equal groups — it's multiplication in reverse.",
        pt: "Separe um número em grupos iguais — é a multiplicação ao contrário.",
        es: "Separa un número en grupos iguales — es la multiplicación al revés.",
      },
      lesson: {
        intro: {
          en: "Division splits a number into equal groups. Picture it below, then notice it matches a multiplication fact you already know.",
          pt: "A divisão separa um número em grupos iguais. Veja abaixo, e repare que combina com uma conta de multiplicação que você já sabe.",
          es: "La división separa un número en grupos iguales. Míralo abajo, y fíjate que coincide con una multiplicación que ya sabes.",
        },
        example: { id: "ex-brown-1", prompt: "42 ÷ 6", answer: 7, operands: [42, 6] },
        diagram: { kind: "groups", groups: 6, perGroup: 7 },
        steps: [
          {
            text: {
              en: "Picture 42 things split into 6 equal groups, like above.",
              pt: "Imagine 42 coisas separadas em 6 grupos iguais, como acima.",
              es: "Imagina 42 cosas separadas en 6 grupos iguales, como arriba.",
            },
          },
          {
            text: {
              en: "Count how many end up in each group: 7.",
              pt: "Conte quantos ficam em cada grupo: 7.",
              es: "Cuenta cuántos quedan en cada grupo: 7.",
            },
          },
          {
            text: {
              en: "That matches a multiplication fact you already know: 6 × 7 = 42 — division is just multiplication in reverse.",
              pt: "Isso combina com uma multiplicação que você já sabe: 6 × 7 = 42 — a divisão é só a multiplicação ao contrário.",
              es: "Eso coincide con una multiplicación que ya sabes: 6 × 7 = 42 — la división es solo la multiplicación al revés.",
            },
          },
          { text: { en: "42 ÷ 6 = 7.", pt: "42 ÷ 6 = 7.", es: "42 ÷ 6 = 7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateExactDivision,
    },
    {
      id: "brown-2",
      beltId: "brown",
      index: 2,
      title: { en: "Dividing with a remainder", pt: "Dividir com resto", es: "Dividir con resto" },
      summary: {
        en: "Find the closest multiple you can reach without going over.",
        pt: "Ache o múltiplo mais próximo sem passar do número.",
        es: "Encuentra el múltiplo más cercano sin pasarte del número.",
      },
      lesson: {
        intro: {
          en: "Find the biggest multiple of the divisor that still fits, then see what's left over.",
          pt: "Ache o maior múltiplo do divisor que ainda cabe, depois veja o que sobra.",
          es: "Encuentra el múltiplo más grande del divisor que todavía cabe, luego mira qué sobra.",
        },
        example: { id: "ex-brown-2", prompt: "23 ÷ 5", answer: 4, secondaryAnswer: 3, secondaryFormat: "remainder", operands: [23, 5] },
        steps: [
          {
            text: {
              en: "The biggest multiple of 5 that fits in 23 is {{20}} (5 × 4).",
              pt: "O maior múltiplo de 5 que cabe em 23 é {{20}} (5 × 4).",
              es: "El múltiplo más grande de 5 que cabe en 23 es {{20}} (5 × 4).",
            },
          },
          {
            text: {
              en: "23 − {{20}} = 3 left over.",
              pt: "23 − {{20}} = 3 que sobra.",
              es: "23 − {{20}} = 3 que sobra.",
            },
          },
          { text: { en: "23 ÷ 5 = 4 R 3.", pt: "23 ÷ 5 = 4 R 3.", es: "23 ÷ 5 = 4 R 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateDivisionWithRemainder,
    },
    {
      id: "brown-3",
      beltId: "brown",
      index: 3,
      title: { en: "Dividing by 10 and 100", pt: "Dividir por 10 e por 100", es: "Dividir por 10 y por 100" },
      summary: {
        en: "The zero trick works in reverse too.",
        pt: "O truque do zero funciona ao contrário também.",
        es: "El truco del cero también funciona al revés.",
      },
      lesson: {
        intro: {
          en: "Dividing by 10 removes one zero. Dividing by 100 removes two zeros.",
          pt: "Dividir por 10 remove um zero. Dividir por 100 remove dois zeros.",
          es: "Dividir por 10 quita un cero. Dividir por 100 quita dos ceros.",
        },
        example: { id: "ex-brown-3", prompt: "700 ÷ 100", answer: 7, operands: [700, 100] },
        steps: [
          { text: { en: "÷100 removes two zeros.", pt: "÷100 remove dois zeros.", es: "÷100 quita dos ceros." } },
          { text: { en: "700 becomes 7.", pt: "700 vira 7.", es: "700 se convierte en 7." } },
          { text: { en: "700 ÷ 100 = 7.", pt: "700 ÷ 100 = 7.", es: "700 ÷ 100 = 7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateDivideBy10And100,
    },
    {
      id: "brown-4",
      beltId: "brown",
      index: 4,
      title: {
        en: "Two-digit ÷ one-digit, no remainder",
        pt: "Dois dígitos ÷ um dígito, sem resto",
        es: "Dos dígitos ÷ un dígito, sin resto",
      },
      summary: {
        en: "Divide the tens, then the units, separately.",
        pt: "Divida a dezena, depois a unidade, separadamente.",
        es: "Divide la decena, luego la unidad, por separado.",
      },
      lesson: {
        intro: {
          en: "Divide the tens digit by the divisor, then the units digit, then combine.",
          pt: "Divida o dígito da dezena pelo divisor, depois o da unidade, e junte.",
          es: "Divide el dígito de la decena entre el divisor, luego el de la unidad, y júntalos.",
        },
        example: { id: "ex-brown-4", prompt: "84 ÷ 4", answer: 21, operands: [84, 4] },
        steps: [
          {
            text: { en: "Divide the tens: 8 ÷ 4 = 2.", pt: "Divida a dezena: 8 ÷ 4 = 2.", es: "Divide la decena: 8 ÷ 4 = 2." },
          },
          {
            text: {
              en: "Divide the units: 4 ÷ 4 = 1.",
              pt: "Divida a unidade: 4 ÷ 4 = 1.",
              es: "Divide la unidad: 4 ÷ 4 = 1.",
            },
          },
          { text: { en: "84 ÷ 4 = 21.", pt: "84 ÷ 4 = 21.", es: "84 ÷ 4 = 21." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateTwoDigitByOneDigitExact,
    },
    {
      id: "brown-5",
      beltId: "brown",
      index: 5,
      title: {
        en: "Two-digit ÷ one-digit, with remainder",
        pt: "Dois dígitos ÷ um dígito, com resto",
        es: "Dos dígitos ÷ un dígito, con resto",
      },
      summary: {
        en: "Divide the tens, bring down the units, divide again.",
        pt: "Divida a dezena, desça a unidade, divida de novo.",
        es: "Divide la decena, baja la unidad, divide de nuevo.",
      },
      lesson: {
        intro: {
          en: "Divide the tens first. Whatever's left over joins the units — then divide that combined number.",
          pt: "Divida a dezena primeiro. O que sobrar se junta à unidade — depois divida esse número combinado.",
          es: "Divide la decena primero. Lo que sobre se junta a la unidad — luego divide ese número combinado.",
        },
        example: { id: "ex-brown-5", prompt: "47 ÷ 3", answer: 15, secondaryAnswer: 2, secondaryFormat: "remainder", operands: [47, 3] },
        steps: [
          {
            text: {
              en: "Divide the tens: 4 ÷ 3 = 1, remainder {{1}}.",
              pt: "Divida a dezena: 4 ÷ 3 = 1, resto {{1}}.",
              es: "Divide la decena: 4 ÷ 3 = 1, resto {{1}}.",
            },
          },
          {
            text: {
              en: "Bring down the units: {{1}} and 7 make 17.",
              pt: "Desça a unidade: {{1}} e 7 formam 17.",
              es: "Baja la unidad: {{1}} y 7 forman 17.",
            },
          },
          {
            text: {
              en: "Divide again: 17 ÷ 3 = 5, remainder 2.",
              pt: "Divida de novo: 17 ÷ 3 = 5, resto 2.",
              es: "Divide de nuevo: 17 ÷ 3 = 5, resto 2.",
            },
          },
          { text: { en: "47 ÷ 3 = 15 R 2.", pt: "47 ÷ 3 = 15 R 2.", es: "47 ÷ 3 = 15 R 2." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateTwoDigitByOneDigitWithRemainder,
    },
    {
      id: "brown-6",
      beltId: "brown",
      index: 6,
      title: {
        en: "Three-digit ÷ one-digit, no remainder",
        pt: "Três dígitos ÷ um dígito, sem resto",
        es: "Tres dígitos ÷ un dígito, sin resto",
      },
      summary: {
        en: "Same column method, one more digit: hundreds, tens, units.",
        pt: "Mesmo método das colunas, mais um dígito: centena, dezena, unidade.",
        es: "Mismo método de columnas, un dígito más: centena, decena, unidad.",
      },
      lesson: {
        intro: {
          en: "Divide the hundreds, then the tens, then the units — each on its own.",
          pt: "Divida a centena, depois a dezena, depois a unidade — cada uma separadamente.",
          es: "Divide la centena, luego la decena, luego la unidad — cada una por separado.",
        },
        example: { id: "ex-brown-6", prompt: "936 ÷ 3", answer: 312, operands: [936, 3] },
        steps: [
          {
            text: {
              en: "Divide the hundreds: 9 ÷ 3 = 3.",
              pt: "Divida a centena: 9 ÷ 3 = 3.",
              es: "Divide la centena: 9 ÷ 3 = 3.",
            },
          },
          {
            text: { en: "Divide the tens: 3 ÷ 3 = 1.", pt: "Divida a dezena: 3 ÷ 3 = 1.", es: "Divide la decena: 3 ÷ 3 = 1." },
          },
          {
            text: {
              en: "Divide the units: 6 ÷ 3 = 2.",
              pt: "Divida a unidade: 6 ÷ 3 = 2.",
              es: "Divide la unidad: 6 ÷ 3 = 2.",
            },
          },
          { text: { en: "936 ÷ 3 = 312.", pt: "936 ÷ 3 = 312.", es: "936 ÷ 3 = 312." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateThreeDigitByOneDigitExact,
    },
    {
      id: "brown-7",
      beltId: "brown",
      index: 7,
      title: {
        en: "Three-digit ÷ one-digit, with remainder",
        pt: "Três dígitos ÷ um dígito, com resto",
        es: "Tres dígitos ÷ un dígito, con resto",
      },
      summary: {
        en: "Long division: divide, multiply, subtract, bring down, repeat.",
        pt: "Divisão longa: divida, multiplique, subtraia, desça o próximo, repita.",
        es: "División larga: divide, multiplica, resta, baja el siguiente, repite.",
      },
      lesson: {
        intro: {
          en: "Work left to right. After each division, subtract to find what's left, then bring down the next digit.",
          pt: "Trabalhe da esquerda para a direita. Depois de cada divisão, subtraia para achar o que sobra, depois desça o próximo dígito.",
          es: "Trabaja de izquierda a derecha. Después de cada división, resta para ver qué sobra, luego baja el siguiente dígito.",
        },
        example: { id: "ex-brown-7", prompt: "137 ÷ 4", answer: 34, secondaryAnswer: 1, secondaryFormat: "remainder", operands: [137, 4] },
        steps: [
          {
            text: {
              en: "Divide 13 by 4: 3 times (4 × 3 = 12), remainder {{1}}.",
              pt: "Divida 13 por 4: 3 vezes (4 × 3 = 12), resto {{1}}.",
              es: "Divide 13 entre 4: 3 veces (4 × 3 = 12), resto {{1}}.",
            },
          },
          {
            text: {
              en: "Bring down the 7: {{1}} and 7 make 17.",
              pt: "Desça o 7: {{1}} e 7 formam 17.",
              es: "Baja el 7: {{1}} y 7 forman 17.",
            },
          },
          {
            text: {
              en: "Divide 17 by 4: 4 times (4 × 4 = 16), remainder 1.",
              pt: "Divida 17 por 4: 4 vezes (4 × 4 = 16), resto 1.",
              es: "Divide 17 entre 4: 4 veces (4 × 4 = 16), resto 1.",
            },
          },
          { text: { en: "137 ÷ 4 = 34 R 1.", pt: "137 ÷ 4 = 34 R 1.", es: "137 ÷ 4 = 34 R 1." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateThreeDigitByOneDigitWithRemainder,
    },
    {
      id: "brown-8",
      beltId: "brown",
      index: 8,
      title: {
        en: "Dividing by a two-digit number",
        pt: "Dividir por um número de dois dígitos",
        es: "Dividir entre un número de dos dígitos",
      },
      summary: {
        en: "Estimate using a nearby friendly multiple.",
        pt: "Estime usando um múltiplo redondo próximo.",
        es: "Estima usando un múltiplo redondo cercano.",
      },
      lesson: {
        intro: {
          en: "Round the divisor to a friendly multiple of 10 to guess how many times it fits, then check by multiplying.",
          pt: "Arredonde o divisor para um múltiplo de 10 próximo para estimar quantas vezes ele cabe, depois confira multiplicando.",
          es: "Redondea el divisor a un múltiplo de 10 cercano para estimar cuántas veces cabe, luego comprueba multiplicando.",
        },
        example: { id: "ex-brown-8", prompt: "84 ÷ 21", answer: 4, operands: [84, 21] },
        steps: [
          {
            text: {
              en: "21 is close to 20. About how many 20s fit in 84? Around {{4}}.",
              pt: "21 é próximo de 20. Quantos 20 cabem em 84, aproximadamente? Uns {{4}}.",
              es: "21 está cerca de 20. ¿Cuántos 20 caben en 84, aproximadamente? Unos {{4}}.",
            },
          },
          {
            text: {
              en: "Check: 21 × {{4}} = 84. Exact!",
              pt: "Confira: 21 × {{4}} = 84. Exato!",
              es: "Comprueba: 21 × {{4}} = 84. ¡Exacto!",
            },
          },
          { text: { en: "84 ÷ 21 = 4.", pt: "84 ÷ 21 = 4.", es: "84 ÷ 21 = 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateTwoDigitDivisorExact,
    },
    {
      id: "brown-9",
      beltId: "brown",
      index: 9,
      title: {
        en: "Three-digit ÷ two-digit, no remainder",
        pt: "Três dígitos ÷ dois dígitos, sem resto",
        es: "Tres dígitos ÷ dos dígitos, sin resto",
      },
      summary: {
        en: "The full long-division process, one more digit.",
        pt: "O processo completo da divisão longa, mais um dígito.",
        es: "El proceso completo de la división larga, un dígito más.",
      },
      lesson: {
        intro: {
          en: "Estimate how many times the divisor fits into the first digits, multiply, subtract, then bring down the last digit and repeat.",
          pt: "Estime quantas vezes o divisor cabe nos primeiros dígitos, multiplique, subtraia, depois desça o último dígito e repita.",
          es: "Estima cuántas veces cabe el divisor en las primeras cifras, multiplica, resta, luego baja la última cifra y repite.",
        },
        example: { id: "ex-brown-9", prompt: "276 ÷ 23", answer: 12, operands: [276, 23] },
        steps: [
          {
            text: {
              en: "How many times does 23 fit into 27? Once: 23 × 1 = 23.",
              pt: "Quantas vezes o 23 cabe em 27? Uma vez: 23 × 1 = 23.",
              es: "¿Cuántas veces cabe 23 en 27? Una vez: 23 × 1 = 23.",
            },
          },
          {
            text: {
              en: "27 − 23 = {{4}}. Bring down the 6: {{4}}6.",
              pt: "27 − 23 = {{4}}. Desça o 6: {{4}}6.",
              es: "27 − 23 = {{4}}. Baja el 6: {{4}}6.",
            },
          },
          {
            text: {
              en: "How many times does 23 fit into 46? Twice: 23 × 2 = 46.",
              pt: "Quantas vezes o 23 cabe em 46? Duas vezes: 23 × 2 = 46.",
              es: "¿Cuántas veces cabe 23 en 46? Dos veces: 23 × 2 = 46.",
            },
          },
          { text: { en: "276 ÷ 23 = 12.", pt: "276 ÷ 23 = 12.", es: "276 ÷ 23 = 12." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 26 },
      generate: generateThreeDigitByTwoDigitExact,
    },
    {
      id: "brown-10",
      beltId: "brown",
      index: 10,
      title: {
        en: "Three-digit ÷ two-digit, with remainder",
        pt: "Três dígitos ÷ dois dígitos, com resto",
        es: "Tres dígitos ÷ dos dígitos, con resto",
      },
      summary: {
        en: "The complete long-division process, remainder and all.",
        pt: "O processo completo da divisão longa, com resto e tudo.",
        es: "El proceso completo de la división larga, con resto incluido.",
      },
      lesson: {
        intro: {
          en: "Same process as before — estimate, multiply, subtract, bring down — but this time it won't divide evenly, so end with what's left over.",
          pt: "Mesmo processo de antes — estime, multiplique, subtraia, desça — mas dessa vez não vai dividir certinho, então termine com o que sobrar.",
          es: "Mismo proceso de antes — estima, multiplica, resta, baja — pero esta vez no dividirá exacto, así que termina con lo que sobre.",
        },
        example: { id: "ex-brown-10", prompt: "287 ÷ 23", answer: 12, secondaryAnswer: 11, secondaryFormat: "remainder", operands: [287, 23] },
        steps: [
          {
            text: {
              en: "How many times does 23 fit into 28? Once: 23 × 1 = 23.",
              pt: "Quantas vezes o 23 cabe em 28? Uma vez: 23 × 1 = 23.",
              es: "¿Cuántas veces cabe 23 en 28? Una vez: 23 × 1 = 23.",
            },
          },
          {
            text: {
              en: "28 − 23 = {{5}}. Bring down the 7: {{5}}7.",
              pt: "28 − 23 = {{5}}. Desça o 7: {{5}}7.",
              es: "28 − 23 = {{5}}. Baja el 7: {{5}}7.",
            },
          },
          {
            text: {
              en: "How many times does 23 fit into 57? Twice: 23 × 2 = 46. That leaves 57 − 46 = 11.",
              pt: "Quantas vezes o 23 cabe em 57? Duas vezes: 23 × 2 = 46. Sobra 57 − 46 = 11.",
              es: "¿Cuántas veces cabe 23 en 57? Dos veces: 23 × 2 = 46. Sobra 57 − 46 = 11.",
            },
          },
          { text: { en: "287 ÷ 23 = 12 R 11.", pt: "287 ÷ 23 = 12 R 11.", es: "287 ÷ 23 = 12 R 11." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 32 },
      generate: generateThreeDigitByTwoDigitWithRemainder,
    },
  ],
};

const greenBelt: Belt = {
  id: "green",
  name: { en: "Green Belt", pt: "Faixa Verde", es: "Cinturón Verde" },
  order: 5,
  operationLabel: {
    en: "Powers · Percentages · Proportion",
    pt: "Potências · Porcentagens · Proporção",
    es: "Potencias · Porcentajes · Proporción",
  },
  colorVar: "--belt-green",
  tagline: {
    en: "Master the numbers themselves — powers, roots, primes, percentages and proportion.",
    pt: "Domine os próprios números — potências, raízes, primos, porcentagens e proporção.",
    es: "Domina los números mismos — potencias, raíces, primos, porcentajes y proporción.",
  },
  stripes: [
    {
      id: "green-1",
      beltId: "green",
      index: 1,
      title: { en: "What a power means", pt: "O que significa uma potência", es: "Qué significa una potencia" },
      summary: {
        en: "Squaring: multiplying a number by itself.",
        pt: "Elevar ao quadrado: multiplicar um número por ele mesmo.",
        es: "Elevar al cuadrado: multiplicar un número por sí mismo.",
      },
      lesson: {
        intro: {
          en: "The small raised number counts how many copies get multiplied. 4² means 4 × 4 — two copies of 4.",
          pt: "O numerozinho em cima conta quantas cópias são multiplicadas. 4² significa 4 × 4 — duas cópias do 4.",
          es: "El numerito de arriba cuenta cuántas copias se multiplican. 4² significa 4 × 4 — dos copias del 4.",
        },
        example: { id: "ex-green-1", prompt: "4²", answer: 16, operands: [4] },
        diagram: { kind: "groups", groups: 4, perGroup: 4 },
        steps: [
          {
            text: {
              en: "4² means 4 × 4 — picture a square of 4 rows with 4 in each.",
              pt: "4² significa 4 × 4 — imagine um quadrado de 4 fileiras com 4 em cada uma.",
              es: "4² significa 4 × 4 — imagina un cuadrado de 4 filas con 4 en cada una.",
            },
          },
          {
            text: {
              en: "Multiply: 4 × 4 = 16. That's why it's called 'squaring'.",
              pt: "Multiplique: 4 × 4 = 16. Por isso se chama 'elevar ao quadrado'.",
              es: "Multiplica: 4 × 4 = 16. Por eso se llama 'elevar al cuadrado'.",
            },
          },
          { text: { en: "4² = 16.", pt: "4² = 16.", es: "4² = 16." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 6 },
      generate: generateSquares,
    },
    {
      id: "green-2",
      beltId: "green",
      index: 2,
      title: { en: "Cubes and higher powers", pt: "Cubos e potências maiores", es: "Cubos y potencias mayores" },
      summary: {
        en: "More copies in the product — including the powers of 2 and of 10.",
        pt: "Mais cópias na multiplicação — incluindo as potências de 2 e de 10.",
        es: "Más copias en la multiplicación — incluyendo las potencias de 2 y de 10.",
      },
      lesson: {
        intro: {
          en: "Work left to right, one multiplication at a time. Powers of 10 are a shortcut: the exponent counts the zeros.",
          pt: "Vá da esquerda para a direita, uma multiplicação de cada vez. Potências de 10 são um atalho: o expoente conta os zeros.",
          es: "Ve de izquierda a derecha, una multiplicación a la vez. Las potencias de 10 son un atajo: el exponente cuenta los ceros.",
        },
        example: { id: "ex-green-2", prompt: "2⁴", answer: 16, operands: [2, 4] },
        steps: [
          {
            text: {
              en: "2⁴ is four copies: 2 × 2 × 2 × 2.",
              pt: "2⁴ são quatro cópias: 2 × 2 × 2 × 2.",
              es: "2⁴ son cuatro copias: 2 × 2 × 2 × 2.",
            },
          },
          {
            text: {
              en: "Chain it: 2 × 2 = {{4}}, then {{4}} × 2 = {{8}}, then {{8}} × 2 = 16.",
              pt: "Encadeie: 2 × 2 = {{4}}, depois {{4}} × 2 = {{8}}, depois {{8}} × 2 = 16.",
              es: "Encadena: 2 × 2 = {{4}}, luego {{4}} × 2 = {{8}}, luego {{8}} × 2 = 16.",
            },
          },
          {
            text: {
              en: "Shortcut for tens: 10³ = 1 followed by 3 zeros = 1000.",
              pt: "Atalho para o 10: 10³ = 1 seguido de 3 zeros = 1000.",
              es: "Atajo para el 10: 10³ = 1 seguido de 3 ceros = 1000.",
            },
          },
          { text: { en: "2⁴ = 16.", pt: "2⁴ = 16.", es: "2⁴ = 16." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generatePowers,
    },
    {
      id: "green-3",
      beltId: "green",
      index: 3,
      title: { en: "Square roots", pt: "Raiz quadrada", es: "Raíz cuadrada" },
      summary: {
        en: "The reverse of squaring — which number times itself gives this?",
        pt: "O contrário do quadrado — que número vezes ele mesmo dá isso?",
        es: "Lo contrario del cuadrado — ¿qué número por sí mismo da esto?",
      },
      lesson: {
        intro: {
          en: "√49 asks: which number squared gives 49? Knowing your squares by heart makes roots instant.",
          pt: "√49 pergunta: que número ao quadrado dá 49? Saber os quadrados de cor torna as raízes instantâneas.",
          es: "√49 pregunta: ¿qué número al cuadrado da 49? Saber los cuadrados de memoria hace las raíces instantáneas.",
        },
        example: { id: "ex-green-3", prompt: "√49", answer: 7, operands: [49] },
        steps: [
          {
            text: {
              en: "Ask it backwards: ? × ? = 49.",
              pt: "Pergunte ao contrário: ? × ? = 49.",
              es: "Pregunta al revés: ? × ? = 49.",
            },
          },
          {
            text: {
              en: "Test your squares: 6² = 36 is too small, 7² = {{49}} fits.",
              pt: "Teste seus quadrados: 6² = 36 é pouco, 7² = {{49}} encaixa.",
              es: "Prueba tus cuadrados: 6² = 36 es poco, 7² = {{49}} encaja.",
            },
          },
          { text: { en: "√49 = 7.", pt: "√49 = 7.", es: "√49 = 7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 7 },
      generate: generateSquareRootsExact,
    },
    {
      id: "green-4",
      beltId: "green",
      index: 4,
      title: { en: "Cube roots", pt: "Raiz cúbica", es: "Raíz cúbica" },
      summary: {
        en: "Undoing a cube — plus the bigger square roots for review.",
        pt: "Desfazendo um cubo — mais as raízes quadradas maiores de revisão.",
        es: "Deshaciendo un cubo — más las raíces cuadradas grandes de repaso.",
      },
      lesson: {
        intro: {
          en: "∛125 asks: which number multiplied three times gives 125? The perfect cubes 8, 27, 64, 125, ... are worth memorizing.",
          pt: "∛125 pergunta: que número multiplicado três vezes dá 125? Vale decorar os cubos perfeitos 8, 27, 64, 125, ...",
          es: "∛125 pregunta: ¿qué número multiplicado tres veces da 125? Vale memorizar los cubos perfectos 8, 27, 64, 125, ...",
        },
        example: { id: "ex-green-4", prompt: "∛125", answer: 5, operands: [125] },
        steps: [
          {
            text: {
              en: "Ask it backwards: ? × ? × ? = 125.",
              pt: "Pergunte ao contrário: ? × ? × ? = 125.",
              es: "Pregunta al revés: ? × ? × ? = 125.",
            },
          },
          {
            text: {
              en: "Test the cubes: 4³ = 64 is too small, 5³ = 5 × 5 × 5 = {{125}} fits.",
              pt: "Teste os cubos: 4³ = 64 é pouco, 5³ = 5 × 5 × 5 = {{125}} encaixa.",
              es: "Prueba los cubos: 4³ = 64 es poco, 5³ = 5 × 5 × 5 = {{125}} encaja.",
            },
          },
          { text: { en: "∛125 = 5.", pt: "∛125 = 5.", es: "∛125 = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateCubeRootsMixed,
    },
    {
      id: "green-5",
      beltId: "green",
      index: 5,
      title: { en: "Primes and factors", pt: "Primos e fatores", es: "Primos y factores" },
      summary: {
        en: "Find the smallest prime that divides a number.",
        pt: "Encontre o menor primo que divide um número.",
        es: "Encuentra el menor primo que divide un número.",
      },
      lesson: {
        intro: {
          en: "A prime only divides by 1 and itself: 2, 3, 5, 7, 11, ... To crack a number open, test the primes in order: even? → 2. Digits sum to a multiple of 3? → 3. Ends in 0 or 5? → 5. Then try 7.",
          pt: "Um primo só divide por 1 e por ele mesmo: 2, 3, 5, 7, 11, ... Para abrir um número, teste os primos em ordem: é par? → 2. A soma dos algarismos dá múltiplo de 3? → 3. Termina em 0 ou 5? → 5. Depois teste o 7.",
          es: "Un primo solo se divide por 1 y por sí mismo: 2, 3, 5, 7, 11, ... Para abrir un número, prueba los primos en orden: ¿es par? → 2. ¿Los dígitos suman múltiplo de 3? → 3. ¿Termina en 0 o 5? → 5. Luego prueba el 7.",
        },
        example: {
          id: "ex-green-5",
          prompt: "Smallest prime factor of 51",
          promptL10n: {
            en: "Smallest prime factor of 51",
            pt: "Menor fator primo de 51",
            es: "Menor factor primo de 51",
          },
          answer: 3,
          operands: [51],
        },
        steps: [
          {
            text: {
              en: "Is 51 even? No — so 2 is out.",
              pt: "51 é par? Não — então o 2 está fora.",
              es: "¿51 es par? No — el 2 queda fuera.",
            },
          },
          {
            text: {
              en: "Sum the digits: 5 + 1 = {{6}}, a multiple of 3 — so 3 divides 51.",
              pt: "Some os algarismos: 5 + 1 = {{6}}, múltiplo de 3 — então 3 divide 51.",
              es: "Suma los dígitos: 5 + 1 = {{6}}, múltiplo de 3 — así que 3 divide 51.",
            },
          },
          {
            text: {
              en: "Check: 51 ÷ 3 = 17. Smallest prime factor: 3.",
              pt: "Confira: 51 ÷ 3 = 17. Menor fator primo: 3.",
              es: "Verifica: 51 ÷ 3 = 17. Menor factor primo: 3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateSmallestPrimeFactor,
    },
    {
      id: "green-6",
      beltId: "green",
      index: 6,
      title: {
        en: "Greatest common divisor",
        pt: "MDC — máximo divisor comum",
        es: "MCD — máximo común divisor",
      },
      summary: {
        en: "The biggest number that divides both.",
        pt: "O maior número que divide os dois ao mesmo tempo.",
        es: "El número más grande que divide a los dos.",
      },
      lesson: {
        intro: {
          en: "Start from the smaller number's biggest divisors and walk down — the first one that also divides the other number wins.",
          pt: "Comece pelos maiores divisores do número menor e vá descendo — o primeiro que também dividir o outro número vence.",
          es: "Empieza por los divisores más grandes del número menor y baja — el primero que también divida al otro número gana.",
        },
        example: {
          id: "ex-green-6",
          prompt: "GCD(24, 36)",
          promptL10n: { en: "GCD(24, 36)", pt: "MDC(24, 36)", es: "MCD(24, 36)" },
          answer: 12,
          operands: [24, 36],
        },
        steps: [
          {
            text: {
              en: "Divisors of 24, biggest first: 24, 12, 8, 6, ...",
              pt: "Divisores de 24, do maior para o menor: 24, 12, 8, 6, ...",
              es: "Divisores de 24, de mayor a menor: 24, 12, 8, 6, ...",
            },
          },
          {
            text: {
              en: "Does 24 divide 36? No. Does {{12}}? Yes: 36 = 12 × 3.",
              pt: "24 divide 36? Não. E {{12}}? Sim: 36 = 12 × 3.",
              es: "¿24 divide a 36? No. ¿Y {{12}}? Sí: 36 = 12 × 3.",
            },
          },
          { text: { en: "GCD(24, 36) = 12.", pt: "MDC(24, 36) = 12.", es: "MCD(24, 36) = 12." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateGcd,
    },
    {
      id: "green-7",
      beltId: "green",
      index: 7,
      title: {
        en: "Least common multiple",
        pt: "MMC — mínimo múltiplo comum",
        es: "mcm — mínimo común múltiplo",
      },
      summary: {
        en: "The first number both times tables share.",
        pt: "O primeiro número que aparece nas duas tabuadas.",
        es: "El primer número que aparece en las dos tablas.",
      },
      lesson: {
        intro: {
          en: "List multiples of the bigger number and stop at the first one the smaller number also divides.",
          pt: "Liste os múltiplos do número maior e pare no primeiro que o número menor também divide.",
          es: "Enumera los múltiplos del número mayor y detente en el primero que el número menor también divida.",
        },
        example: {
          id: "ex-green-7",
          prompt: "LCM(6, 8)",
          promptL10n: { en: "LCM(6, 8)", pt: "MMC(6, 8)", es: "mcm(6, 8)" },
          answer: 24,
          operands: [6, 8],
        },
        steps: [
          {
            text: {
              en: "Multiples of 8: 8, 16, {{24}}, ...",
              pt: "Múltiplos de 8: 8, 16, {{24}}, ...",
              es: "Múltiplos de 8: 8, 16, {{24}}, ...",
            },
          },
          {
            text: {
              en: "Does 6 divide 8? No. 16? No. {{24}}? Yes: 24 ÷ 6 = 4.",
              pt: "6 divide 8? Não. 16? Não. {{24}}? Sim: 24 ÷ 6 = 4.",
              es: "¿6 divide a 8? No. ¿16? No. ¿{{24}}? Sí: 24 ÷ 6 = 4.",
            },
          },
          { text: { en: "LCM(6, 8) = 24.", pt: "MMC(6, 8) = 24.", es: "mcm(6, 8) = 24." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateLcm,
    },
    {
      id: "green-8",
      beltId: "green",
      index: 8,
      title: { en: "The friendly percentages", pt: "As porcentagens fáceis", es: "Los porcentajes fáciles" },
      summary: {
        en: "10%, 20%, 25%, 50%, 75% — each one is a simple fraction in disguise.",
        pt: "10%, 20%, 25%, 50%, 75% — cada uma é uma fração simples disfarçada.",
        es: "10%, 20%, 25%, 50%, 75% — cada uno es una fracción simple disfrazada.",
      },
      lesson: {
        intro: {
          en: "Percent means 'out of 100'. The friendly ones are fractions: 50% = half, 25% = a quarter, 10% = a tenth, 75% = three quarters, 20% = a fifth.",
          pt: "Porcento significa 'a cada 100'. As fáceis são frações: 50% = metade, 25% = um quarto, 10% = um décimo, 75% = três quartos, 20% = um quinto.",
          es: "Por ciento significa 'de cada 100'. Los fáciles son fracciones: 50% = mitad, 25% = un cuarto, 10% = un décimo, 75% = tres cuartos, 20% = un quinto.",
        },
        example: {
          id: "ex-green-8",
          prompt: "25% of 80",
          promptL10n: { en: "25% of 80", pt: "25% de 80", es: "25% de 80" },
          answer: 20,
          operands: [25, 80],
        },
        diagram: { kind: "fraction", total: 4, shaded: 1 },
        steps: [
          {
            text: {
              en: "25% is a quarter — one part out of 4, like the bar above.",
              pt: "25% é um quarto — uma parte de 4, como na barra acima.",
              es: "25% es un cuarto — una parte de 4, como en la barra de arriba.",
            },
          },
          {
            text: {
              en: "A quarter of 80: 80 ÷ 4 = 20.",
              pt: "Um quarto de 80: 80 ÷ 4 = 20.",
              es: "Un cuarto de 80: 80 ÷ 4 = 20.",
            },
          },
          { text: { en: "25% of 80 = 20.", pt: "25% de 80 = 20.", es: "25% de 80 = 20." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateEasyPercent,
    },
    {
      id: "green-9",
      beltId: "green",
      index: 9,
      title: { en: "Any percentage", pt: "Qualquer porcentagem", es: "Cualquier porcentaje" },
      summary: {
        en: "Build any percent from 10% blocks and 5% halves.",
        pt: "Monte qualquer porcentagem com blocos de 10% e metades de 5%.",
        es: "Arma cualquier porcentaje con bloques de 10% y mitades de 5%.",
      },
      lesson: {
        intro: {
          en: "Find 10% first (divide by 10), then stack: 30% = 3 blocks of 10%. For a 5, add half a block.",
          pt: "Ache 10% primeiro (divida por 10), depois empilhe: 30% = 3 blocos de 10%. Para um 5, some meio bloco.",
          es: "Halla el 10% primero (divide por 10), luego apila: 30% = 3 bloques de 10%. Para un 5, suma medio bloque.",
        },
        example: {
          id: "ex-green-9",
          prompt: "30% of 140",
          promptL10n: { en: "30% of 140", pt: "30% de 140", es: "30% de 140" },
          answer: 42,
          operands: [30, 140],
        },
        steps: [
          {
            text: {
              en: "10% of 140 = {{14}}.",
              pt: "10% de 140 = {{14}}.",
              es: "10% de 140 = {{14}}.",
            },
          },
          {
            text: {
              en: "30% is three of those: {{14}} × 3 = 42.",
              pt: "30% são três desses: {{14}} × 3 = 42.",
              es: "30% son tres de esos: {{14}} × 3 = 42.",
            },
          },
          { text: { en: "30% of 140 = 42.", pt: "30% de 140 = 42.", es: "30% de 140 = 42." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateHardPercent,
    },
    {
      id: "green-10",
      beltId: "green",
      index: 10,
      title: { en: "Percent up and down", pt: "Acréscimo e desconto", es: "Aumento y descuento" },
      summary: {
        en: "Prices rise 20%, sales cut 25% — compute the new value.",
        pt: "Preços sobem 20%, promoções cortam 25% — calcule o valor novo.",
        es: "Los precios suben 20%, las ofertas cortan 25% — calcula el valor nuevo.",
      },
      lesson: {
        intro: {
          en: "Find the percent amount first, then add it (increase) or subtract it (discount) from the original.",
          pt: "Ache primeiro o valor da porcentagem, depois some (acréscimo) ou subtraia (desconto) do original.",
          es: "Halla primero el valor del porcentaje, luego súmalo (aumento) o réstalo (descuento) del original.",
        },
        example: { id: "ex-green-10", prompt: "80 + 25%", answer: 100, operands: [80, 25] },
        steps: [
          {
            text: {
              en: "25% of 80 = 80 ÷ 4 = {{20}}.",
              pt: "25% de 80 = 80 ÷ 4 = {{20}}.",
              es: "25% de 80 = 80 ÷ 4 = {{20}}.",
            },
          },
          {
            text: {
              en: "It's an increase, so add: 80 + {{20}} = 100.",
              pt: "É um acréscimo, então some: 80 + {{20}} = 100.",
              es: "Es un aumento, así que suma: 80 + {{20}} = 100.",
            },
          },
          { text: { en: "80 + 25% = 100.", pt: "80 + 25% = 100.", es: "80 + 25% = 100." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generatePercentChange,
    },
    {
      id: "green-11",
      beltId: "green",
      index: 11,
      title: { en: "Proportion: the rule of three", pt: "Proporção: regra de três", es: "Proporción: regla de tres" },
      summary: {
        en: "Two ratios in balance — find the missing piece.",
        pt: "Duas razões em equilíbrio — ache a parte que falta.",
        es: "Dos razones en equilibrio — halla la parte que falta.",
      },
      lesson: {
        intro: {
          en: "In a : b = c : x, find what multiplied a into c — the same scale factor turns b into x.",
          pt: "Em a : b = c : x, descubra por quanto o a foi multiplicado para virar c — o mesmo fator transforma b em x.",
          es: "En a : b = c : x, descubre por cuánto se multiplicó a para llegar a c — el mismo factor convierte b en x.",
        },
        example: {
          id: "ex-green-11",
          prompt: "2 : 5 = 6 : x",
          answer: 15,
          operands: [2, 5, 6],
          isEquation: true,
        },
        steps: [
          {
            text: {
              en: "From 2 to 6 the scale factor is {{3}} (2 × 3 = 6).",
              pt: "De 2 para 6 o fator é {{3}} (2 × 3 = 6).",
              es: "De 2 a 6 el factor es {{3}} (2 × 3 = 6).",
            },
          },
          {
            text: {
              en: "Apply the same factor to 5: 5 × {{3}} = 15.",
              pt: "Aplique o mesmo fator ao 5: 5 × {{3}} = 15.",
              es: "Aplica el mismo factor al 5: 5 × {{3}} = 15.",
            },
          },
          { text: { en: "x = 15.", pt: "x = 15.", es: "x = 15." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateProportion,
    },
    {
      id: "green-12",
      beltId: "green",
      index: 12,
      title: { en: "Scientific notation", pt: "Notação científica", es: "Notación científica" },
      summary: {
        en: "Big numbers written short: a digit, a decimal, and a power of 10.",
        pt: "Números grandes escritos curtos: um algarismo, uma vírgula e uma potência de 10.",
        es: "Números grandes escritos cortos: un dígito, un decimal y una potencia de 10.",
      },
      lesson: {
        intro: {
          en: "The exponent says how many places the decimal point slides right. Fill the empty places with zeros.",
          pt: "O expoente diz quantas casas a vírgula anda para a direita. Preencha as casas vazias com zeros.",
          es: "El exponente dice cuántos lugares se corre el punto a la derecha. Rellena los lugares vacíos con ceros.",
        },
        example: { id: "ex-green-12", prompt: "3.4 × 10³", answer: 3400, operands: [3, 4, 3] },
        steps: [
          {
            text: {
              en: "The exponent is {{3}} — slide the point 3 places right.",
              pt: "O expoente é {{3}} — ande com a vírgula 3 casas para a direita.",
              es: "El exponente es {{3}} — corre el punto 3 lugares a la derecha.",
            },
          },
          {
            text: {
              en: "3.4 → 34 → 340 → 3400.",
              pt: "3,4 → 34 → 340 → 3400.",
              es: "3.4 → 34 → 340 → 3400.",
            },
          },
          { text: { en: "3.4 × 10³ = 3400.", pt: "3,4 × 10³ = 3400.", es: "3.4 × 10³ = 3400." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateScientificNotation,
    },
    {
      id: "green-13",
      beltId: "green",
      index: 13,
      title: { en: "Number mastery, all mixed", pt: "Domínio dos números, tudo misturado", es: "Dominio de los números, todo mezclado" },
      summary: {
        en: "Every Green Belt skill in one drill — powers to percentages, no warning which comes next.",
        pt: "Todas as habilidades da Faixa Verde em um treino só — de potências a porcentagens, sem avisar qual vem.",
        es: "Todas las habilidades del Cinturón Verde en un solo entrenamiento — de potencias a porcentajes, sin avisar cuál viene.",
      },
      lesson: {
        intro: {
          en: "The belt test: powers, roots, primes, GCD, LCM, percentages, proportion and scientific notation, shuffled together. Read each problem carefully before answering.",
          pt: "A prova da faixa: potências, raízes, primos, MDC, MMC, porcentagens, proporção e notação científica, tudo embaralhado. Leia cada conta com atenção antes de responder.",
          es: "La prueba del cinturón: potencias, raíces, primos, MCD, mcm, porcentajes, proporción y notación científica, todo revuelto. Lee cada problema con atención antes de responder.",
        },
        example: {
          id: "ex-green-13",
          prompt: "75% of 40",
          promptL10n: { en: "75% of 40", pt: "75% de 40", es: "75% de 40" },
          answer: 30,
          operands: [75, 40],
        },
        steps: [
          {
            text: {
              en: "Spot the skill first — this one is a friendly percentage.",
              pt: "Primeiro identifique a habilidade — essa é uma porcentagem fácil.",
              es: "Primero identifica la habilidad — este es un porcentaje fácil.",
            },
          },
          {
            text: {
              en: "75% is three quarters: 40 ÷ 4 = {{10}}, then {{10}} × 3 = 30.",
              pt: "75% é três quartos: 40 ÷ 4 = {{10}}, depois {{10}} × 3 = 30.",
              es: "75% es tres cuartos: 40 ÷ 4 = {{10}}, luego {{10}} × 3 = 30.",
            },
          },
          { text: { en: "75% of 40 = 30.", pt: "75% de 40 = 30.", es: "75% de 40 = 30." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateNumberMasteryMix,
    },
  ],
};

const fractionsDegree = {
  index: 1,
  name: { en: "Fractions", pt: "Frações", es: "Fracciones" } as LocalizedText,
};

const decimalsDegree = {
  index: 2,
  name: { en: "Decimals", pt: "Decimais", es: "Decimales" } as LocalizedText,
};

const algebraDegree = {
  index: 3,
  name: { en: "Algebra", pt: "Álgebra", es: "Álgebra" } as LocalizedText,
};

const equationsDegree = {
  index: 4,
  name: { en: "Equations", pt: "Equações", es: "Ecuaciones" } as LocalizedText,
};

const functionsDegree = {
  index: 5,
  name: { en: "Functions", pt: "Funções", es: "Funciones" } as LocalizedText,
};

const preCalcDegree = {
  index: 6,
  name: { en: "Pre-Calculus", pt: "Pré-Cálculo", es: "Precálculo" } as LocalizedText,
};

const blackBelt: Belt = {
  id: "black",
  name: { en: "Black Belt", pt: "Faixa Preta", es: "Cinturón Negro" },
  order: 6,
  operationLabel: {
    en: "Fractions · Decimals · Algebra · Equations · Functions",
    pt: "Frações · Decimais · Álgebra · Equações · Funções",
    es: "Fracciones · Decimales · Álgebra · Ecuaciones · Funciones",
  },
  colorVar: "--belt-black",
  tagline: {
    en: "Six degrees, one for each pillar of pre-university math.",
    pt: "Seis graus, um para cada pilar da matemática pré-universitária.",
    es: "Seis grados, uno por cada pilar de la matemática preuniversitaria.",
  },
  stripes: [
    {
      id: "black-1",
      beltId: "black",
      index: 1,
      degree: fractionsDegree,
      title: { en: "What a fraction means", pt: "O que significa uma fração", es: "Qué significa una fracción" },
      summary: {
        en: "A fraction is parts of a whole — see it, then name it.",
        pt: "Uma fração é partes de um todo — veja, depois nomeie.",
        es: "Una fracción es partes de un todo — mira, y luego nómbrala.",
      },
      lesson: {
        intro: {
          en: "The bottom number is how many equal parts the whole is split into. The top number is how many of those parts you have.",
          pt: "O número de baixo é em quantas partes iguais o todo foi dividido. O número de cima é quantas dessas partes você tem.",
          es: "El número de abajo es en cuántas partes iguales se dividió el todo. El número de arriba es cuántas de esas partes tienes.",
        },
        example: {
          id: "ex-black-1",
          prompt: "",
          answer: 3,
          secondaryAnswer: 8,
          secondaryFormat: "fraction",
          operands: [3, 8],
        },
        diagram: { kind: "fraction", total: 8, shaded: 3 },
        steps: [
          {
            text: {
              en: "The bar is split into 8 equal parts — that's the bottom number.",
              pt: "A barra está dividida em 8 partes iguais — esse é o número de baixo.",
              es: "La barra está dividida en 8 partes iguales — ese es el número de abajo.",
            },
          },
          {
            text: {
              en: "3 of those parts are shaded — that's the top number.",
              pt: "3 dessas partes estão pintadas — esse é o número de cima.",
              es: "3 de esas partes están sombreadas — ese es el número de arriba.",
            },
          },
          {
            text: {
              en: "Written as a fraction: 3/8.",
              pt: "Escrito como fração: 3/8.",
              es: "Escrito como fracción: 3/8.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateIdentifyFraction,
    },
    {
      id: "black-2",
      beltId: "black",
      index: 2,
      degree: fractionsDegree,
      title: { en: "Equivalent fractions", pt: "Frações equivalentes", es: "Fracciones equivalentes" },
      summary: {
        en: "The same amount, written with different numbers.",
        pt: "A mesma quantidade, escrita com números diferentes.",
        es: "La misma cantidad, escrita con números diferentes.",
      },
      lesson: {
        intro: {
          en: "Multiply the top and bottom by the same number and the fraction's value doesn't change.",
          pt: "Multiplique o de cima e o de baixo pelo mesmo número e o valor da fração não muda.",
          es: "Multiplica el de arriba y el de abajo por el mismo número y el valor de la fracción no cambia.",
        },
        example: { id: "ex-black-2", prompt: "1/2 = ?/6", answer: 3, operands: [1, 2, 6] },
        steps: [
          {
            text: {
              en: "To turn halves into sixths, multiply the bottom by 3 (2 × 3 = 6).",
              pt: "Para transformar meios em sextos, multiplique o de baixo por 3 (2 × 3 = 6).",
              es: "Para convertir medios en sextos, multiplica el de abajo por 3 (2 × 3 = 6).",
            },
          },
          {
            text: {
              en: "Do the same to the top: 1 × 3 = 3.",
              pt: "Faça o mesmo com o de cima: 1 × 3 = 3.",
              es: "Haz lo mismo con el de arriba: 1 × 3 = 3.",
            },
          },
          { text: { en: "1/2 = 3/6.", pt: "1/2 = 3/6.", es: "1/2 = 3/6." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateEquivalentFraction,
    },
    {
      id: "black-3",
      beltId: "black",
      index: 3,
      degree: fractionsDegree,
      title: { en: "Simplifying fractions", pt: "Simplificar frações", es: "Simplificar fracciones" },
      summary: {
        en: "Shrink a fraction to its smallest matching numbers.",
        pt: "Reduza uma fração para os menores números equivalentes.",
        es: "Reduce una fracción a los números equivalentes más pequeños.",
      },
      lesson: {
        intro: {
          en: "Find a number that divides evenly into both the top and bottom, then divide both by it.",
          pt: "Ache um número que divide certinho o de cima e o de baixo, depois divida os dois por ele.",
          es: "Encuentra un número que divida exacto al de arriba y al de abajo, luego divide ambos entre él.",
        },
        example: { id: "ex-black-3", prompt: "8/12", answer: 2, secondaryAnswer: 3, secondaryFormat: "fraction", operands: [8, 12] },
        steps: [
          {
            text: {
              en: "4 divides evenly into both 8 and 12.",
              pt: "O 4 divide certinho o 8 e o 12.",
              es: "El 4 divide exacto al 8 y al 12.",
            },
          },
          {
            text: {
              en: "Divide both by 4: 8 ÷ 4 = 2, and 12 ÷ 4 = 3.",
              pt: "Divida os dois por 4: 8 ÷ 4 = 2, e 12 ÷ 4 = 3.",
              es: "Divide ambos entre 4: 8 ÷ 4 = 2, y 12 ÷ 4 = 3.",
            },
          },
          { text: { en: "8/12 = 2/3.", pt: "8/12 = 2/3.", es: "8/12 = 2/3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateSimplifyFraction,
    },
    {
      id: "black-4",
      beltId: "black",
      index: 4,
      degree: fractionsDegree,
      title: { en: "A fraction of a number", pt: "Fração de um número", es: "Fracción de un número" },
      summary: {
        en: "Split a whole number into fractional parts.",
        pt: "Divida um número inteiro em partes fracionárias.",
        es: "Divide un número entero en partes fraccionarias.",
      },
      lesson: {
        intro: {
          en: "Divide the number by the bottom, then multiply by the top.",
          pt: "Divida o número pelo de baixo, depois multiplique pelo de cima.",
          es: "Divide el número entre el de abajo, luego multiplica por el de arriba.",
        },
        example: { id: "ex-black-4", prompt: "3/4 × 20", answer: 15, operands: [3, 4, 20] },
        steps: [
          {
            text: {
              en: "Divide 20 by the bottom number: 20 ÷ 4 = 5.",
              pt: "Divida 20 pelo número de baixo: 20 ÷ 4 = 5.",
              es: "Divide 20 entre el número de abajo: 20 ÷ 4 = 5.",
            },
          },
          {
            text: {
              en: "Multiply by the top number: 5 × 3 = 15.",
              pt: "Multiplique pelo número de cima: 5 × 3 = 15.",
              es: "Multiplica por el número de arriba: 5 × 3 = 15.",
            },
          },
          { text: { en: "3/4 × 20 = 15.", pt: "3/4 × 20 = 15.", es: "3/4 × 20 = 15." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateFractionOfNumber,
    },
    {
      id: "black-5",
      beltId: "black",
      index: 5,
      degree: fractionsDegree,
      title: {
        en: "Adding fractions, same denominator",
        pt: "Somar frações, mesmo denominador",
        es: "Sumar fracciones, mismo denominador",
      },
      summary: {
        en: "When the bottoms match, just add the tops.",
        pt: "Quando os de baixo são iguais, só some os de cima.",
        es: "Cuando los de abajo son iguales, solo suma los de arriba.",
      },
      lesson: {
        intro: {
          en: "If two fractions have the same bottom number, add the top numbers and keep the bottom the same.",
          pt: "Se duas frações têm o mesmo número de baixo, some os números de cima e mantenha o de baixo igual.",
          es: "Si dos fracciones tienen el mismo número de abajo, suma los números de arriba y mantén el de abajo igual.",
        },
        example: { id: "ex-black-5", prompt: "2/7 + 3/7", answer: 5, secondaryAnswer: 7, secondaryFormat: "fraction", operands: [2, 3, 7] },
        steps: [
          { text: { en: "The bottoms already match: 7.", pt: "Os de baixo já são iguais: 7.", es: "Los de abajo ya son iguales: 7." } },
          {
            text: { en: "Add the tops: 2 + 3 = 5.", pt: "Some os de cima: 2 + 3 = 5.", es: "Suma los de arriba: 2 + 3 = 5." },
          },
          { text: { en: "2/7 + 3/7 = 5/7.", pt: "2/7 + 3/7 = 5/7.", es: "2/7 + 3/7 = 5/7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateAddFractionsSameDenominator,
    },
    {
      id: "black-6",
      beltId: "black",
      index: 6,
      degree: fractionsDegree,
      title: {
        en: "Subtracting fractions, same denominator",
        pt: "Subtrair frações, mesmo denominador",
        es: "Restar fracciones, mismo denominador",
      },
      summary: {
        en: "Same idea, subtract the tops instead.",
        pt: "Mesma ideia, só que subtraindo os de cima.",
        es: "Misma idea, pero restando los de arriba.",
      },
      lesson: {
        intro: {
          en: "If two fractions have the same bottom number, subtract the top numbers and keep the bottom the same.",
          pt: "Se duas frações têm o mesmo número de baixo, subtraia os números de cima e mantenha o de baixo igual.",
          es: "Si dos fracciones tienen el mismo número de abajo, resta los números de arriba y mantén el de abajo igual.",
        },
        example: { id: "ex-black-6", prompt: "5/8 - 2/8", answer: 3, secondaryAnswer: 8, secondaryFormat: "fraction", operands: [5, 2, 8] },
        steps: [
          { text: { en: "The bottoms already match: 8.", pt: "Os de baixo já são iguais: 8.", es: "Los de abajo ya son iguales: 8." } },
          {
            text: { en: "Subtract the tops: 5 - 2 = 3.", pt: "Subtraia os de cima: 5 - 2 = 3.", es: "Resta los de arriba: 5 - 2 = 3." },
          },
          { text: { en: "5/8 - 2/8 = 3/8.", pt: "5/8 - 2/8 = 3/8.", es: "5/8 - 2/8 = 3/8." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateSubtractFractionsSameDenominator,
    },
    {
      id: "black-7",
      beltId: "black",
      index: 7,
      degree: fractionsDegree,
      title: {
        en: "Adding fractions, different denominators",
        pt: "Somar frações, denominadores diferentes",
        es: "Sumar fracciones, denominadores diferentes",
      },
      summary: {
        en: "Make the bottoms match first, then add like before.",
        pt: "Deixe os de baixo iguais primeiro, depois some como antes.",
        es: "Iguala los de abajo primero, luego suma como antes.",
      },
      lesson: {
        intro: {
          en: "Turn one fraction into an equivalent one that shares the other's bottom number, then add the tops.",
          pt: "Transforme uma fração em uma equivalente que tenha o mesmo número de baixo da outra, depois some os de cima.",
          es: "Convierte una fracción en una equivalente que tenga el mismo número de abajo que la otra, luego suma los de arriba.",
        },
        example: { id: "ex-black-7", prompt: "1/2 + 1/4", answer: 3, secondaryAnswer: 4, secondaryFormat: "fraction", operands: [1, 2, 1, 4] },
        steps: [
          {
            text: {
              en: "4 is double 2, so turn 1/2 into fourths: 1 × 2 = 2, so 1/2 = 2/4.",
              pt: "4 é o dobro de 2, então transforme 1/2 em quartos: 1 × 2 = 2, então 1/2 = 2/4.",
              es: "4 es el doble de 2, así que convierte 1/2 en cuartos: 1 × 2 = 2, entonces 1/2 = 2/4.",
            },
          },
          {
            text: {
              en: "Now both bottoms are 4: 2/4 + 1/4.",
              pt: "Agora os dois de baixo são 4: 2/4 + 1/4.",
              es: "Ahora los dos de abajo son 4: 2/4 + 1/4.",
            },
          },
          {
            text: { en: "Add the tops: 2 + 1 = 3.", pt: "Some os de cima: 2 + 1 = 3.", es: "Suma los de arriba: 2 + 1 = 3." },
          },
          { text: { en: "1/2 + 1/4 = 3/4.", pt: "1/2 + 1/4 = 3/4.", es: "1/2 + 1/4 = 3/4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateAddFractionsDifferentDenominators,
    },
    {
      id: "black-8",
      beltId: "black",
      index: 8,
      degree: fractionsDegree,
      title: { en: "Multiplying fractions", pt: "Multiplicar frações", es: "Multiplicar fracciones" },
      summary: {
        en: "Multiply straight across — top times top, bottom times bottom.",
        pt: "Multiplique direto — cima vezes cima, baixo vezes baixo.",
        es: "Multiplica directo — arriba por arriba, abajo por abajo.",
      },
      lesson: {
        intro: {
          en: "No need to match denominators here — just multiply the top numbers together, then the bottom numbers together.",
          pt: "Aqui não precisa igualar os denominadores — só multiplique os números de cima entre si, depois os de baixo.",
          es: "Aquí no hace falta igualar los denominadores — solo multiplica los números de arriba entre sí, luego los de abajo.",
        },
        example: { id: "ex-black-8", prompt: "2/3 × 3/4", answer: 6, secondaryAnswer: 12, secondaryFormat: "fraction", operands: [2, 3, 3, 4] },
        steps: [
          { text: { en: "Multiply the tops: 2 × 3 = 6.", pt: "Multiplique os de cima: 2 × 3 = 6.", es: "Multiplica los de arriba: 2 × 3 = 6." } },
          {
            text: {
              en: "Multiply the bottoms: 3 × 4 = 12.",
              pt: "Multiplique os de baixo: 3 × 4 = 12.",
              es: "Multiplica los de abajo: 3 × 4 = 12.",
            },
          },
          { text: { en: "2/3 × 3/4 = 6/12.", pt: "2/3 × 3/4 = 6/12.", es: "2/3 × 3/4 = 6/12." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateMultiplyFractions,
    },
    {
      id: "black-9",
      beltId: "black",
      index: 9,
      degree: fractionsDegree,
      title: { en: "Dividing fractions", pt: "Dividir frações", es: "Dividir fracciones" },
      summary: {
        en: "Flip the second fraction, then multiply.",
        pt: "Inverta a segunda fração, depois multiplique.",
        es: "Invierte la segunda fracción, luego multiplica.",
      },
      lesson: {
        intro: {
          en: "Dividing by a fraction is the same as multiplying by it flipped upside down.",
          pt: "Dividir por uma fração é o mesmo que multiplicar por ela de cabeça para baixo.",
          es: "Dividir entre una fracción es lo mismo que multiplicar por ella al revés.",
        },
        example: { id: "ex-black-9", prompt: "1/2 ÷ 1/4", answer: 4, secondaryAnswer: 2, secondaryFormat: "fraction", operands: [1, 2, 1, 4] },
        steps: [
          { text: { en: "Flip 1/4 upside down: 4/1.", pt: "Inverta 1/4 de cabeça para baixo: 4/1.", es: "Invierte 1/4 al revés: 4/1." } },
          { text: { en: "Multiply: 1/2 × 4/1.", pt: "Multiplique: 1/2 × 4/1.", es: "Multiplica: 1/2 × 4/1." } },
          {
            text: {
              en: "Tops: 1 × 4 = 4. Bottoms: 2 × 1 = 2.",
              pt: "De cima: 1 × 4 = 4. De baixo: 2 × 1 = 2.",
              es: "De arriba: 1 × 4 = 4. De abajo: 2 × 1 = 2.",
            },
          },
          { text: { en: "1/2 ÷ 1/4 = 4/2.", pt: "1/2 ÷ 1/4 = 4/2.", es: "1/2 ÷ 1/4 = 4/2." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateDivideFractions,
    },
    {
      id: "black-10",
      beltId: "black",
      index: 10,
      degree: fractionsDegree,
      title: {
        en: "Mixed numbers to improper fractions",
        pt: "Número misto para fração imprópria",
        es: "Número mixto a fracción impropia",
      },
      summary: {
        en: "Turn a whole-plus-fraction into a single fraction.",
        pt: "Transforme um inteiro mais fração em uma única fração.",
        es: "Convierte un entero más fracción en una sola fracción.",
      },
      lesson: {
        intro: {
          en: "Multiply the whole number by the bottom, add the top, and keep the same bottom.",
          pt: "Multiplique o número inteiro pelo de baixo, some o de cima, e mantenha o mesmo de baixo.",
          es: "Multiplica el número entero por el de abajo, suma el de arriba, y mantén el mismo de abajo.",
        },
        example: { id: "ex-black-10", prompt: "2 1/3", answer: 7, secondaryAnswer: 3, secondaryFormat: "fraction", operands: [2, 1, 3] },
        steps: [
          {
            text: {
              en: "Multiply the whole number by the bottom: 2 × 3 = 6.",
              pt: "Multiplique o número inteiro pelo de baixo: 2 × 3 = 6.",
              es: "Multiplica el número entero por el de abajo: 2 × 3 = 6.",
            },
          },
          { text: { en: "Add the top: 6 + 1 = 7.", pt: "Some o de cima: 6 + 1 = 7.", es: "Suma el de arriba: 6 + 1 = 7." } },
          {
            text: {
              en: "Keep the same bottom: 3.",
              pt: "Mantenha o mesmo de baixo: 3.",
              es: "Mantén el mismo de abajo: 3.",
            },
          },
          { text: { en: "2 1/3 = 7/3.", pt: "2 1/3 = 7/3.", es: "2 1/3 = 7/3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateMixedToImproper,
    },
    {
      id: "black-11",
      beltId: "black",
      index: 1,
      degree: decimalsDegree,
      title: { en: "What a decimal means", pt: "O que significa um decimal", es: "Qué significa un decimal" },
      summary: {
        en: "A decimal is a fraction of ten, written a new way.",
        pt: "Um decimal é uma fração de dez, escrita de um jeito novo.",
        es: "Un decimal es una fracción de diez, escrita de una manera nueva.",
      },
      lesson: {
        intro: {
          en: "The digit after the decimal point counts tenths — how many of 10 equal parts you have.",
          pt: "O dígito depois do ponto decimal conta os décimos — quantas das 10 partes iguais você tem.",
          es: "El dígito después del punto decimal cuenta los décimos — cuántas de las 10 partes iguales tienes.",
        },
        example: { id: "ex-black-11", prompt: "", answer: 0, secondaryAnswer: 3, secondaryFormat: "decimal", operands: [0, 3] },
        diagram: { kind: "fraction", total: 10, shaded: 3 },
        steps: [
          {
            text: {
              en: "The bar is split into 10 equal parts — tenths.",
              pt: "A barra está dividida em 10 partes iguais — décimos.",
              es: "La barra está dividida en 10 partes iguales — décimos.",
            },
          },
          {
            text: {
              en: "3 of those parts are shaded.",
              pt: "3 dessas partes estão pintadas.",
              es: "3 de esas partes están sombreadas.",
            },
          },
          {
            text: {
              en: "Written as a decimal: 0.3.",
              pt: "Escrito como decimal: 0.3.",
              es: "Escrito como decimal: 0.3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateIdentifyDecimalTenths,
    },
    {
      id: "black-12",
      beltId: "black",
      index: 2,
      degree: decimalsDegree,
      title: {
        en: "Fractions of ten as decimals",
        pt: "Frações de dez como decimais",
        es: "Fracciones de diez como decimales",
      },
      summary: {
        en: "A fraction with 10 on the bottom converts directly.",
        pt: "Uma fração com 10 embaixo se converte direto.",
        es: "Una fracción con 10 abajo se convierte directo.",
      },
      lesson: {
        intro: {
          en: "The top number of a tenths fraction becomes the decimal digit — no calculation needed.",
          pt: "O número de cima de uma fração de décimos vira o dígito decimal — sem precisar calcular.",
          es: "El número de arriba de una fracción de décimos se convierte en el dígito decimal — sin necesidad de calcular.",
        },
        example: { id: "ex-black-12", prompt: "7/10", answer: 0, secondaryAnswer: 7, secondaryFormat: "decimal", operands: [7] },
        steps: [
          { text: { en: "7/10 means 7 tenths.", pt: "7/10 significa 7 décimos.", es: "7/10 significa 7 décimos." } },
          {
            text: {
              en: "Write the 7 right after the decimal point.",
              pt: "Escreva o 7 logo depois do ponto decimal.",
              es: "Escribe el 7 justo después del punto decimal.",
            },
          },
          { text: { en: "7/10 = 0.7.", pt: "7/10 = 0.7.", es: "7/10 = 0.7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateFractionTenthsToDecimal,
    },
    {
      id: "black-13",
      beltId: "black",
      index: 3,
      degree: decimalsDegree,
      title: {
        en: "Mixed numbers with tenths as decimals",
        pt: "Números mistos com décimos como decimais",
        es: "Números mixtos con décimos como decimales",
      },
      summary: {
        en: "The whole number stays, the fraction becomes the decimal part.",
        pt: "O número inteiro fica, a fração vira a parte decimal.",
        es: "El número entero se queda, la fracción se convierte en la parte decimal.",
      },
      lesson: {
        intro: {
          en: "Keep the whole number as is, and turn the tenths fraction into the decimal digit after the point.",
          pt: "Mantenha o número inteiro como está, e transforme a fração de décimos no dígito decimal depois do ponto.",
          es: "Mantén el número entero tal cual, y convierte la fracción de décimos en el dígito decimal después del punto.",
        },
        example: { id: "ex-black-13", prompt: "2 4/10", answer: 2, secondaryAnswer: 4, secondaryFormat: "decimal", operands: [2, 4] },
        steps: [
          {
            text: {
              en: "The whole number 2 stays the same.",
              pt: "O número inteiro 2 fica igual.",
              es: "El número entero 2 se mantiene igual.",
            },
          },
          {
            text: {
              en: "4/10 becomes the decimal digit: .4.",
              pt: "4/10 vira o dígito decimal: .4.",
              es: "4/10 se convierte en el dígito decimal: .4.",
            },
          },
          { text: { en: "2 4/10 = 2.4.", pt: "2 4/10 = 2.4.", es: "2 4/10 = 2.4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateMixedTenthsToDecimal,
    },
    {
      id: "black-14",
      beltId: "black",
      index: 4,
      degree: decimalsDegree,
      title: { en: "Adding decimals, no carrying", pt: "Somar decimais, sem 'vai um'", es: "Sumar decimales, sin llevar" },
      summary: {
        en: "Add the whole numbers and the tenths separately.",
        pt: "Some os números inteiros e os décimos separadamente.",
        es: "Suma los números enteros y los décimos por separado.",
      },
      lesson: {
        intro: {
          en: "Line up the decimal points, then add the whole numbers and the tenths digits separately.",
          pt: "Alinhe os pontos decimais, depois some os números inteiros e os dígitos dos décimos separadamente.",
          es: "Alinea los puntos decimales, luego suma los números enteros y los dígitos de los décimos por separado.",
        },
        example: { id: "ex-black-14", prompt: "2.3 + 1.4", answer: 3, secondaryAnswer: 7, secondaryFormat: "decimal", operands: [2, 3, 1, 4] },
        steps: [
          {
            text: { en: "Add the whole numbers: 2 + 1 = 3.", pt: "Some os inteiros: 2 + 1 = 3.", es: "Suma los enteros: 2 + 1 = 3." },
          },
          { text: { en: "Add the tenths: 3 + 4 = 7.", pt: "Some os décimos: 3 + 4 = 7.", es: "Suma los décimos: 3 + 4 = 7." } },
          { text: { en: "2.3 + 1.4 = 3.7.", pt: "2.3 + 1.4 = 3.7.", es: "2.3 + 1.4 = 3.7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateAddDecimalsNoCarry,
    },
    {
      id: "black-15",
      beltId: "black",
      index: 5,
      degree: decimalsDegree,
      title: {
        en: "Adding decimals, with carrying",
        pt: "Somar decimais, com 'vai um'",
        es: "Sumar decimales, llevando",
      },
      summary: {
        en: "When the tenths overflow 9, carry the 1 into the whole numbers.",
        pt: "Quando os décimos passam de 9, o 1 vai para os inteiros.",
        es: "Cuando los décimos pasan de 9, el 1 se lleva a los enteros.",
      },
      lesson: {
        intro: {
          en: "Add the tenths first. If it's 10 or more, carry the 1 into the whole-number sum.",
          pt: "Some os décimos primeiro. Se der 10 ou mais, leve o 1 para a soma dos inteiros.",
          es: "Suma los décimos primero. Si da 10 o más, lleva el 1 a la suma de los enteros.",
        },
        example: { id: "ex-black-15", prompt: "2.7 + 1.6", answer: 4, secondaryAnswer: 3, secondaryFormat: "decimal", operands: [2, 7, 1, 6] },
        steps: [
          {
            text: {
              en: "Add the tenths: 7 + 6 = 13. Write the 3, carry the {{1}}.",
              pt: "Some os décimos: 7 + 6 = 13. Escreva o 3 e leve o {{1}}.",
              es: "Suma los décimos: 7 + 6 = 13. Escribe el 3 y lleva el {{1}}.",
            },
          },
          {
            text: {
              en: "Add the whole numbers plus the carry: 2 + 1 + {{1}} = 4.",
              pt: "Some os inteiros mais o que veio: 2 + 1 + {{1}} = 4.",
              es: "Suma los enteros más el acarreo: 2 + 1 + {{1}} = 4.",
            },
          },
          { text: { en: "2.7 + 1.6 = 4.3.", pt: "2.7 + 1.6 = 4.3.", es: "2.7 + 1.6 = 4.3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateAddDecimalsWithCarry,
    },
    {
      id: "black-16",
      beltId: "black",
      index: 6,
      degree: decimalsDegree,
      title: {
        en: "Subtracting decimals, no borrowing",
        pt: "Subtrair decimais, sem 'emprestar'",
        es: "Restar decimales, sin prestar",
      },
      summary: {
        en: "Subtract the whole numbers and the tenths separately.",
        pt: "Subtraia os números inteiros e os décimos separadamente.",
        es: "Resta los números enteros y los décimos por separado.",
      },
      lesson: {
        intro: {
          en: "Line up the decimal points, then subtract the whole numbers and the tenths digits separately.",
          pt: "Alinhe os pontos decimais, depois subtraia os números inteiros e os dígitos dos décimos separadamente.",
          es: "Alinea los puntos decimales, luego resta los números enteros y los dígitos de los décimos por separado.",
        },
        example: { id: "ex-black-16", prompt: "5.8 - 2.3", answer: 3, secondaryAnswer: 5, secondaryFormat: "decimal", operands: [5, 8, 2, 3] },
        steps: [
          { text: { en: "Subtract the whole numbers: 5 - 2 = 3.", pt: "Subtraia os inteiros: 5 - 2 = 3.", es: "Resta los enteros: 5 - 2 = 3." } },
          { text: { en: "Subtract the tenths: 8 - 3 = 5.", pt: "Subtraia os décimos: 8 - 3 = 5.", es: "Resta los décimos: 8 - 3 = 5." } },
          { text: { en: "5.8 - 2.3 = 3.5.", pt: "5.8 - 2.3 = 3.5.", es: "5.8 - 2.3 = 3.5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateSubtractDecimalsNoBorrow,
    },
    {
      id: "black-17",
      beltId: "black",
      index: 7,
      degree: decimalsDegree,
      title: {
        en: "Subtracting decimals, with borrowing",
        pt: "Subtrair decimais, com 'emprestar'",
        es: "Restar decimales, prestando",
      },
      summary: {
        en: "When the top tenths digit is smaller, borrow from the whole numbers.",
        pt: "Quando o décimo de cima é menor, empreste dos inteiros.",
        es: "Cuando el décimo de arriba es menor, presta de los enteros.",
      },
      lesson: {
        intro: {
          en: "If the top tenths digit is smaller than the bottom one, borrow 1 whole (worth 10 tenths) before subtracting.",
          pt: "Se o décimo de cima for menor que o de baixo, empreste 1 inteiro (que vale 10 décimos) antes de subtrair.",
          es: "Si el décimo de arriba es menor que el de abajo, presta 1 entero (que vale 10 décimos) antes de restar.",
        },
        example: { id: "ex-black-17", prompt: "5.2 - 2.6", answer: 2, secondaryAnswer: 6, secondaryFormat: "decimal", operands: [5, 2, 2, 6] },
        steps: [
          {
            text: {
              en: "2 is smaller than 6, so borrow {{1}} whole: 12 - 6 = 6 tenths.",
              pt: "2 é menor que 6, então empreste {{1}} inteiro: 12 - 6 = 6 décimos.",
              es: "2 es menor que 6, así que presta {{1}} entero: 12 - 6 = 6 décimos.",
            },
          },
          {
            text: {
              en: "The whole numbers: 5 - {{1}} - 2 = 2.",
              pt: "Os inteiros: 5 - {{1}} - 2 = 2.",
              es: "Los enteros: 5 - {{1}} - 2 = 2.",
            },
          },
          { text: { en: "5.2 - 2.6 = 2.6.", pt: "5.2 - 2.6 = 2.6.", es: "5.2 - 2.6 = 2.6." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateSubtractDecimalsWithBorrow,
    },
    {
      id: "black-18",
      beltId: "black",
      index: 8,
      degree: decimalsDegree,
      title: {
        en: "Multiplying decimals by 10 and 100",
        pt: "Multiplicar decimais por 10 e por 100",
        es: "Multiplicar decimales por 10 y por 100",
      },
      summary: {
        en: "The decimal point shifts to the right.",
        pt: "O ponto decimal se desloca para a direita.",
        es: "El punto decimal se desplaza hacia la derecha.",
      },
      lesson: {
        intro: {
          en: "Multiplying by 10 moves the decimal point one place right. Multiplying by 100 moves it two places right.",
          pt: "Multiplicar por 10 desloca o ponto decimal uma casa para a direita. Multiplicar por 100 desloca duas casas.",
          es: "Multiplicar por 10 desplaza el punto decimal un lugar a la derecha. Multiplicar por 100 desplaza dos lugares.",
        },
        example: { id: "ex-black-18", prompt: "3.4 × 10", answer: 34, operands: [3, 4, 10] },
        steps: [
          {
            text: {
              en: "×10 moves the point one place right.",
              pt: "×10 desloca o ponto uma casa para a direita.",
              es: "×10 desplaza el punto un lugar a la derecha.",
            },
          },
          { text: { en: "3.4 becomes 34.", pt: "3.4 vira 34.", es: "3.4 se convierte en 34." } },
          { text: { en: "3.4 × 10 = 34.", pt: "3.4 × 10 = 34.", es: "3.4 × 10 = 34." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateMultiplyDecimalBy10Or100,
    },
    {
      id: "black-18b",
      beltId: "black",
      index: 9,
      degree: decimalsDegree,
      title: {
        en: "Multiplying decimals by whole numbers",
        pt: "Multiplicar decimais por inteiros",
        es: "Multiplicar decimales por enteros",
      },
      summary: {
        en: "Multiply the tenths like whole numbers, then place the point back.",
        pt: "Multiplique os décimos como inteiros, depois devolva o ponto.",
        es: "Multiplica los décimos como enteros, luego devuelve el punto.",
      },
      lesson: {
        intro: {
          en: "Think of the decimal as tenths: 1.3 is 13 tenths. Multiply, then the answer is in tenths too.",
          pt: "Pense no decimal como décimos: 1.3 é 13 décimos. Multiplique, e a resposta também estará em décimos.",
          es: "Piensa en el decimal como décimos: 1.3 es 13 décimos. Multiplica, y la respuesta también estará en décimos.",
        },
        example: {
          id: "ex-black-18b",
          prompt: "1.3 × 4",
          answer: 5,
          secondaryAnswer: 2,
          secondaryFormat: "decimal",
          operands: [1, 3, 4],
        },
        steps: [
          {
            text: {
              en: "1.3 is {{13}} tenths.",
              pt: "1.3 são {{13}} décimos.",
              es: "1.3 son {{13}} décimos.",
            },
          },
          {
            text: {
              en: "Multiply: {{13}} × 4 = 52 tenths.",
              pt: "Multiplique: {{13}} × 4 = 52 décimos.",
              es: "Multiplica: {{13}} × 4 = 52 décimos.",
            },
          },
          {
            text: {
              en: "52 tenths is 5.2.",
              pt: "52 décimos são 5.2.",
              es: "52 décimos son 5.2.",
            },
          },
          { text: { en: "1.3 × 4 = 5.2.", pt: "1.3 × 4 = 5.2.", es: "1.3 × 4 = 5.2." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateMultiplyDecimalByWhole,
    },
    {
      id: "black-19",
      beltId: "black",
      index: 10,
      degree: decimalsDegree,
      title: {
        en: "Dividing a whole number by 10",
        pt: "Dividir um número inteiro por 10",
        es: "Dividir un número entero entre 10",
      },
      summary: {
        en: "The decimal point shifts back to the left.",
        pt: "O ponto decimal volta uma casa para a esquerda.",
        es: "El punto decimal vuelve un lugar a la izquierda.",
      },
      lesson: {
        intro: {
          en: "Dividing by 10 moves the decimal point one place left — the last digit becomes the tenths.",
          pt: "Dividir por 10 desloca o ponto decimal uma casa para a esquerda — o último dígito vira o décimo.",
          es: "Dividir entre 10 desplaza el punto decimal un lugar a la izquierda — el último dígito se convierte en el décimo.",
        },
        example: { id: "ex-black-19", prompt: "47 ÷ 10", answer: 4, secondaryAnswer: 7, secondaryFormat: "decimal", operands: [47] },
        steps: [
          {
            text: {
              en: "÷10 moves the point one place left.",
              pt: "÷10 desloca o ponto uma casa para a esquerda.",
              es: "÷10 desplaza el punto un lugar a la izquierda.",
            },
          },
          { text: { en: "47 becomes 4.7.", pt: "47 vira 4.7.", es: "47 se convierte en 4.7." } },
          { text: { en: "47 ÷ 10 = 4.7.", pt: "47 ÷ 10 = 4.7.", es: "47 ÷ 10 = 4.7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateDivideWholeBy10,
    },
    {
      id: "black-19b",
      beltId: "black",
      index: 11,
      degree: decimalsDegree,
      title: {
        en: "Dividing decimals by whole numbers",
        pt: "Dividir decimais por inteiros",
        es: "Dividir decimales entre enteros",
      },
      summary: {
        en: "Divide the tenths like whole numbers, then place the point back.",
        pt: "Divida os décimos como inteiros, depois devolva o ponto.",
        es: "Divide los décimos como enteros, luego devuelve el punto.",
      },
      lesson: {
        intro: {
          en: "Turn the decimal into tenths, divide, and the answer comes out in tenths.",
          pt: "Transforme o decimal em décimos, divida, e a resposta sai em décimos.",
          es: "Convierte el decimal en décimos, divide, y la respuesta sale en décimos.",
        },
        example: {
          id: "ex-black-19b",
          prompt: "5.2 ÷ 4",
          answer: 1,
          secondaryAnswer: 3,
          secondaryFormat: "decimal",
          operands: [5, 2, 4],
        },
        steps: [
          {
            text: {
              en: "5.2 is {{52}} tenths.",
              pt: "5.2 são {{52}} décimos.",
              es: "5.2 son {{52}} décimos.",
            },
          },
          {
            text: {
              en: "Divide: {{52}} ÷ 4 = 13 tenths.",
              pt: "Divida: {{52}} ÷ 4 = 13 décimos.",
              es: "Divide: {{52}} ÷ 4 = 13 décimos.",
            },
          },
          {
            text: {
              en: "13 tenths is 1.3.",
              pt: "13 décimos são 1.3.",
              es: "13 décimos son 1.3.",
            },
          },
          { text: { en: "5.2 ÷ 4 = 1.3.", pt: "5.2 ÷ 4 = 1.3.", es: "5.2 ÷ 4 = 1.3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateDivideDecimalByWhole,
    },
    {
      id: "black-20",
      beltId: "black",
      index: 12,
      degree: decimalsDegree,
      title: { en: "Rounding decimals", pt: "Arredondar decimais", es: "Redondear decimales" },
      summary: {
        en: "Round to the nearest whole number using the tenths digit.",
        pt: "Arredonde para o inteiro mais próximo usando o dígito dos décimos.",
        es: "Redondea al número entero más cercano usando el dígito de los décimos.",
      },
      lesson: {
        intro: {
          en: "Look at the tenths digit. If it's 5 or more, round up. If it's less than 5, round down.",
          pt: "Olhe o dígito dos décimos. Se for 5 ou mais, arredonde para cima. Se for menos de 5, arredonde para baixo.",
          es: "Mira el dígito de los décimos. Si es 5 o más, redondea hacia arriba. Si es menos de 5, redondea hacia abajo.",
        },
        example: { id: "ex-black-20", prompt: "3.7", answer: 4, operands: [3, 7] },
        steps: [
          {
            text: {
              en: "The tenths digit is 7, which is 5 or more.",
              pt: "O dígito dos décimos é 7, que é 5 ou mais.",
              es: "El dígito de los décimos es 7, que es 5 o más.",
            },
          },
          {
            text: {
              en: "Round up: 3 becomes 4.",
              pt: "Arredonde para cima: 3 vira 4.",
              es: "Redondea hacia arriba: 3 se convierte en 4.",
            },
          },
          { text: { en: "3.7 rounds to 4.", pt: "3.7 arredonda para 4.", es: "3.7 se redondea a 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateRoundDecimal,
    },
    {
      id: "black-21",
      beltId: "black",
      index: 1,
      degree: algebraDegree,
      title: {
        en: "What a variable means",
        pt: "O que significa uma variável",
        es: "Qué significa una variable",
      },
      summary: {
        en: "A variable is just a box that holds a number.",
        pt: "Uma variável é só uma caixa que guarda um número.",
        es: "Una variable es solo una caja que guarda un número.",
      },
      lesson: {
        intro: {
          en: "A letter like x stands for a number — sometimes it's a mystery, but here it's already revealed. Read the picture and add up what it's worth.",
          pt: "Uma letra como x representa um número — às vezes é um mistério, mas aqui já foi revelado. Leia a figura e some o que ela vale.",
          es: "Una letra como x representa un número — a veces es un misterio, pero aquí ya fue revelado. Lee la imagen y suma lo que vale.",
        },
        example: { id: "ex-black-21", prompt: "", answer: 5, operands: [3, 2] },
        diagram: { kind: "variableBox", xValue: 3, units: 2 },
        steps: [
          {
            text: {
              en: "The box is labeled x, and it's revealed to hold {{3}}.",
              pt: "A caixa está rotulada x, e foi revelado que ela guarda {{3}}.",
              es: "La caja está etiquetada x, y se reveló que guarda {{3}}.",
            },
          },
          {
            text: {
              en: "Add the loose units: {{3}} + 2 = 5.",
              pt: "Some as unidades soltas: {{3}} + 2 = 5.",
              es: "Suma las unidades sueltas: {{3}} + 2 = 5.",
            },
          },
          { text: { en: "x + 2 = 5, when x = 3.", pt: "x + 2 = 5, quando x = 3.", es: "x + 2 = 5, cuando x = 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateVariableBoxReading,
    },
    {
      id: "black-22",
      beltId: "black",
      index: 2,
      degree: algebraDegree,
      title: {
        en: "Evaluating expressions",
        pt: "Avaliando expressões",
        es: "Evaluando expresiones",
      },
      summary: {
        en: "Swap the letter for its number, then do the math.",
        pt: "Troque a letra pelo número, depois faça a conta.",
        es: "Cambia la letra por su número, luego haz la cuenta.",
      },
      lesson: {
        intro: {
          en: "Once you know what x equals, replace every x in the expression with that number and solve like normal.",
          pt: "Depois de saber quanto vale x, troque cada x na expressão por esse número e resolva normalmente.",
          es: "Una vez que sabes cuánto vale x, cambia cada x en la expresión por ese número y resuelve normalmente.",
        },
        example: { id: "ex-black-22", prompt: "3x + 2, x = 4", answer: 14, operands: [3, 2, 4] },
        steps: [
          {
            text: {
              en: "Swap x for its value: 3 × {{4}}.",
              pt: "Troque x pelo valor: 3 × {{4}}.",
              es: "Cambia x por su valor: 3 × {{4}}.",
            },
          },
          {
            text: {
              en: "Multiply: 3 × 4 = {{12}}.",
              pt: "Multiplique: 3 × 4 = {{12}}.",
              es: "Multiplica: 3 × 4 = {{12}}.",
            },
          },
          {
            text: {
              en: "Add the rest: 12 + 2 = 14.",
              pt: "Some o resto: 12 + 2 = 14.",
              es: "Suma el resto: 12 + 2 = 14.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateEvaluateExpression,
    },
    {
      id: "black-23",
      beltId: "black",
      index: 3,
      degree: algebraDegree,
      title: {
        en: "Order of operations",
        pt: "Ordem das operações",
        es: "Orden de las operaciones",
      },
      summary: {
        en: "Multiply and divide before you add or subtract.",
        pt: "Multiplique e divida antes de somar ou subtrair.",
        es: "Multiplica y divide antes de sumar o restar.",
      },
      lesson: {
        intro: {
          en: "Math reads left to right, but multiplication and division always happen before addition and subtraction — and anything inside parentheses happens first of all.",
          pt: "A matemática se lê da esquerda para a direita, mas multiplicação e divisão sempre acontecem antes de soma e subtração — e o que está dentro de parênteses acontece primeiro de tudo.",
          es: "La matemática se lee de izquierda a derecha, pero la multiplicación y la división siempre ocurren antes de la suma y la resta — y lo que está dentro de paréntesis ocurre primero que nada.",
        },
        example: { id: "ex-black-23", prompt: "4 + 3 × 2", answer: 10, operands: [4, 3, 2] },
        steps: [
          {
            text: {
              en: "Multiply first: 3 × 2 = {{6}}.",
              pt: "Multiplique primeiro: 3 × 2 = {{6}}.",
              es: "Multiplica primero: 3 × 2 = {{6}}.",
            },
          },
          {
            text: {
              en: "Then add: 4 + 6 = 10.",
              pt: "Depois some: 4 + 6 = 10.",
              es: "Luego suma: 4 + 6 = 10.",
            },
          },
          {
            text: {
              en: "4 + 3 × 2 = 10, not 14 — multiplication always goes first.",
              pt: "4 + 3 × 2 = 10, não 14 — multiplicação sempre vem primeiro.",
              es: "4 + 3 × 2 = 10, no 14 — la multiplicación siempre va primero.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateOrderOfOperations,
    },
    {
      id: "black-24",
      beltId: "black",
      index: 4,
      degree: algebraDegree,
      title: {
        en: "Negative numbers on the number line",
        pt: "Números negativos na reta numérica",
        es: "Números negativos en la recta numérica",
      },
      summary: {
        en: "Numbers can go below zero too.",
        pt: "Os números também podem ficar abaixo de zero.",
        es: "Los números también pueden estar debajo de cero.",
      },
      lesson: {
        intro: {
          en: "Every hop left past zero keeps counting down — zero isn't the end of the line. A minus sign just means 'the opposite direction.'",
          pt: "Cada salto para a esquerda depois do zero continua contando — zero não é o fim da reta. Um sinal de menos só significa 'a direção oposta.'",
          es: "Cada salto a la izquierda después de cero sigue contando — el cero no es el final de la recta. Un signo menos solo significa 'la dirección opuesta.'",
        },
        example: { id: "ex-black-24", prompt: "", answer: -3, operands: [2, 5] },
        diagram: { kind: "numberLine", start: 2, end: -3 },
        steps: [
          {
            text: {
              en: "Start at {{2}} and hop left 5 times, past zero.",
              pt: "Comece em {{2}} e dê 5 saltos para a esquerda, passando do zero.",
              es: "Empieza en {{2}} y da 5 saltos a la izquierda, pasando por cero.",
            },
          },
          {
            text: {
              en: "Each hop past zero keeps counting down: 0, -1, -2, -3.",
              pt: "Cada salto depois do zero continua contando: 0, -1, -2, -3.",
              es: "Cada salto después de cero sigue contando: 0, -1, -2, -3.",
            },
          },
          { text: { en: "You land on -3.", pt: "Você cai em -3.", es: "Caes en -3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateNegativeNumberLine,
    },
    {
      id: "black-25",
      beltId: "black",
      index: 5,
      degree: algebraDegree,
      title: {
        en: "Adding integers, same sign",
        pt: "Somando números inteiros, mesmo sinal",
        es: "Sumando números enteros, mismo signo",
      },
      summary: {
        en: "Same sign? Add the sizes and keep the sign.",
        pt: "Mesmo sinal? Some os tamanhos e mantenha o sinal.",
        es: "¿Mismo signo? Suma los tamaños y mantén el signo.",
      },
      lesson: {
        intro: {
          en: "When both numbers have the same sign, add their sizes like normal, then give the answer that same sign.",
          pt: "Quando os dois números têm o mesmo sinal, some os tamanhos normalmente, depois dê à resposta esse mesmo sinal.",
          es: "Cuando los dos números tienen el mismo signo, suma los tamaños normalmente, luego dale a la respuesta ese mismo signo.",
        },
        example: { id: "ex-black-25", prompt: "-4 + (-7)", answer: -11, operands: [-4, -7] },
        steps: [
          {
            text: {
              en: "Both numbers are negative — same sign.",
              pt: "Os dois números são negativos — mesmo sinal.",
              es: "Los dos números son negativos — mismo signo.",
            },
          },
          {
            text: {
              en: "Add their sizes: 4 + 7 = {{11}}.",
              pt: "Some os tamanhos: 4 + 7 = {{11}}.",
              es: "Suma los tamaños: 4 + 7 = {{11}}.",
            },
          },
          {
            text: {
              en: "Keep the negative sign: -4 + (-7) = -11.",
              pt: "Mantenha o sinal negativo: -4 + (-7) = -11.",
              es: "Mantén el signo negativo: -4 + (-7) = -11.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateAddIntegersSameSign,
    },
    {
      id: "black-26",
      beltId: "black",
      index: 6,
      degree: algebraDegree,
      title: {
        en: "Adding integers, different signs",
        pt: "Somando números inteiros, sinais diferentes",
        es: "Sumando números enteros, signos diferentes",
      },
      summary: {
        en: "Different signs? Subtract the sizes, keep the bigger one's sign.",
        pt: "Sinais diferentes? Subtraia os tamanhos, mantenha o sinal do maior.",
        es: "¿Signos diferentes? Resta los tamaños, mantén el signo del mayor.",
      },
      lesson: {
        intro: {
          en: "When the signs are different, the numbers partly cancel out — find the difference in their sizes, then give the answer the sign of whichever number was bigger.",
          pt: "Quando os sinais são diferentes, os números se cancelam em parte — ache a diferença entre os tamanhos, depois dê à resposta o sinal do número que era maior.",
          es: "Cuando los signos son diferentes, los números se cancelan en parte — halla la diferencia entre los tamaños, luego dale a la respuesta el signo del número que era mayor.",
        },
        example: { id: "ex-black-26", prompt: "-8 + 3", answer: -5, operands: [-8, 3] },
        steps: [
          {
            text: {
              en: "Different signs — find the difference in size: 8 - 3 = {{5}}.",
              pt: "Sinais diferentes — ache a diferença de tamanho: 8 - 3 = {{5}}.",
              es: "Signos diferentes — halla la diferencia de tamaño: 8 - 3 = {{5}}.",
            },
          },
          {
            text: {
              en: "The 8 is bigger and it's negative, so the answer stays negative.",
              pt: "O 8 é maior e é negativo, então a resposta continua negativa.",
              es: "El 8 es mayor y es negativo, así que la respuesta sigue siendo negativa.",
            },
          },
          { text: { en: "-8 + 3 = -5.", pt: "-8 + 3 = -5.", es: "-8 + 3 = -5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateAddIntegersDifferentSigns,
    },
    {
      id: "black-27",
      beltId: "black",
      index: 7,
      degree: algebraDegree,
      title: {
        en: "Subtracting integers",
        pt: "Subtraindo números inteiros",
        es: "Restando números enteros",
      },
      summary: {
        en: "Subtracting is the same as adding the opposite.",
        pt: "Subtrair é o mesmo que somar o oposto.",
        es: "Restar es lo mismo que sumar el opuesto.",
      },
      lesson: {
        intro: {
          en: "Every subtraction can be rewritten as adding a negative — flip the sign of the second number, then add using the rules you already know.",
          pt: "Toda subtração pode ser reescrita como somar um negativo — inverta o sinal do segundo número, depois some usando as regras que você já conhece.",
          es: "Toda resta se puede reescribir como sumar un negativo — invierte el signo del segundo número, luego suma usando las reglas que ya conoces.",
        },
        example: { id: "ex-black-27", prompt: "4 - 9", answer: -5, operands: [4, 9] },
        steps: [
          {
            text: {
              en: "Turn subtraction into adding the opposite: 4 - 9 becomes 4 + ({{-9}}).",
              pt: "Transforme a subtração em soma do oposto: 4 - 9 vira 4 + ({{-9}}).",
              es: "Convierte la resta en sumar el opuesto: 4 - 9 se convierte en 4 + ({{-9}}).",
            },
          },
          {
            text: {
              en: "Now add like before: 4 + (-9) = -5.",
              pt: "Agora some como antes: 4 + (-9) = -5.",
              es: "Ahora suma como antes: 4 + (-9) = -5.",
            },
          },
          { text: { en: "4 - 9 = -5.", pt: "4 - 9 = -5.", es: "4 - 9 = -5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateSubtractIntegers,
    },
    {
      id: "black-28",
      beltId: "black",
      index: 8,
      degree: algebraDegree,
      title: {
        en: "Combining like terms",
        pt: "Combinando termos semelhantes",
        es: "Combinando términos semejantes",
      },
      summary: {
        en: "Same variable? Just add or subtract the coefficients.",
        pt: "Mesma variável? Só some ou subtraia os coeficientes.",
        es: "¿Misma variable? Solo suma o resta los coeficientes.",
      },
      lesson: {
        intro: {
          en: "Terms with the exact same variable are 'like terms' — the x just comes along for the ride while you add or subtract the numbers in front of it.",
          pt: "Termos com exatamente a mesma variável são 'termos semelhantes' — o x só acompanha enquanto você soma ou subtrai os números na frente dele.",
          es: "Los términos con exactamente la misma variable son 'términos semejantes' — la x solo acompaña mientras sumas o restas los números al frente.",
        },
        example: { id: "ex-black-28", prompt: "5x + 3x", answer: 8, operands: [5, 3] },
        steps: [
          {
            text: {
              en: "Both terms have x, so they're 'like terms.'",
              pt: "Os dois termos têm x, então são 'termos semelhantes.'",
              es: "Los dos términos tienen x, así que son 'términos semejantes.'",
            },
          },
          {
            text: {
              en: "Add the coefficients: 5 + 3 = {{8}}.",
              pt: "Some os coeficientes: 5 + 3 = {{8}}.",
              es: "Suma los coeficientes: 5 + 3 = {{8}}.",
            },
          },
          { text: { en: "5x + 3x = 8x.", pt: "5x + 3x = 8x.", es: "5x + 3x = 8x." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateCombiningLikeTerms,
    },
    {
      id: "black-29",
      beltId: "black",
      index: 9,
      degree: algebraDegree,
      title: {
        en: "The distributive property",
        pt: "A propriedade distributiva",
        es: "La propiedad distributiva",
      },
      summary: {
        en: "Multiply the outside number by everything inside the parentheses.",
        pt: "Multiplique o número de fora por tudo que está dentro dos parênteses.",
        es: "Multiplica el número de afuera por todo lo que está dentro del paréntesis.",
      },
      lesson: {
        intro: {
          en: "This is the same trick as splitting 23 × 4 into 20 × 4 + 3 × 4 back in Purple Belt — just with a variable standing in for part of the sum now.",
          pt: "É o mesmo truque de dividir 23 × 4 em 20 × 4 + 3 × 4 lá da Faixa Roxa — só que agora uma variável ocupa o lugar de parte da soma.",
          es: "Es el mismo truco de dividir 23 × 4 en 20 × 4 + 3 × 4 del Cinturón Morado — solo que ahora una variable ocupa parte de la suma.",
        },
        example: { id: "ex-black-29", prompt: "3(x + 4), x = 2", answer: 18, operands: [3, 4, 2] },
        steps: [
          {
            text: {
              en: "Multiply 3 by each part inside: 3 × x and 3 × 4.",
              pt: "Multiplique 3 por cada parte de dentro: 3 × x e 3 × 4.",
              es: "Multiplica 3 por cada parte de adentro: 3 × x y 3 × 4.",
            },
          },
          {
            text: {
              en: "Substitute x = 2 first: 3 × (2 + 4) = 3 × {{6}}.",
              pt: "Substitua x = 2 primeiro: 3 × (2 + 4) = 3 × {{6}}.",
              es: "Sustituye x = 2 primero: 3 × (2 + 4) = 3 × {{6}}.",
            },
          },
          { text: { en: "3 × 6 = 18.", pt: "3 × 6 = 18.", es: "3 × 6 = 18." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateDistributiveProperty,
    },
    {
      id: "black-30",
      beltId: "black",
      index: 10,
      degree: algebraDegree,
      title: {
        en: "Multi-step expressions",
        pt: "Expressões de várias etapas",
        es: "Expresiones de varios pasos",
      },
      summary: {
        en: "Distribute, then finish the rest — every Algebra skill in one problem.",
        pt: "Distribua, depois termine o resto — todas as habilidades de Álgebra em um problema.",
        es: "Distribuye, luego termina el resto — todas las habilidades de Álgebra en un problema.",
      },
      lesson: {
        intro: {
          en: "A phrase like 'four times the sum of a number and 3, minus 5' becomes 4(x + 3) - 5. Once it's written as an expression, evaluating it uses everything from this belt: substitution, order of operations, negative numbers, and distributing.",
          pt: "Uma frase como 'quatro vezes a soma de um número e 3, menos 5' vira 4(x + 3) - 5. Depois de escrita como expressão, avaliá-la usa tudo desta faixa: substituição, ordem das operações, números negativos e distributiva.",
          es: "Una frase como 'cuatro veces la suma de un número y 3, menos 5' se convierte en 4(x + 3) - 5. Una vez escrita como expresión, evaluarla usa todo de este cinturón: sustitución, orden de operaciones, números negativos y distributiva.",
        },
        example: { id: "ex-black-30", prompt: "4(x + 3) - 5, x = -2", answer: -1, operands: [4, 3, 5, -2] },
        steps: [
          {
            text: {
              en: "Substitute x = -2 inside the parentheses: 4(-2 + 3) - 5.",
              pt: "Substitua x = -2 dentro dos parênteses: 4(-2 + 3) - 5.",
              es: "Sustituye x = -2 dentro del paréntesis: 4(-2 + 3) - 5.",
            },
          },
          {
            text: {
              en: "Add inside first: -2 + 3 = {{1}}.",
              pt: "Some dentro primeiro: -2 + 3 = {{1}}.",
              es: "Suma adentro primero: -2 + 3 = {{1}}.",
            },
          },
          {
            text: {
              en: "Distribute: 4 × 1 = 4, then finish: 4 - 5 = -1.",
              pt: "Distribua: 4 × 1 = 4, depois termine: 4 - 5 = -1.",
              es: "Distribuye: 4 × 1 = 4, luego termina: 4 - 5 = -1.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 24 },
      generate: generateMultiStepExpression,
    },
    {
      id: "black-31",
      beltId: "black",
      index: 1,
      degree: equationsDegree,
      title: {
        en: "What an equation means",
        pt: "O que significa uma equação",
        es: "Qué significa una ecuación",
      },
      summary: {
        en: "An equation is a balance — both sides must stay equal.",
        pt: "Uma equação é uma balança — os dois lados têm que ficar iguais.",
        es: "Una ecuación es una balanza — los dos lados deben quedar iguales.",
      },
      lesson: {
        intro: {
          en: "The scale is level because both sides weigh the same. Figure out what x must be to keep it balanced.",
          pt: "A balança está nivelada porque os dois lados pesam o mesmo. Descubra quanto x precisa valer para manter o equilíbrio.",
          es: "La balanza está nivelada porque los dos lados pesan lo mismo. Descubre cuánto debe valer x para mantener el equilibrio.",
        },
        example: { id: "ex-black-31", prompt: "", answer: 4, operands: [2, 6] },
        diagram: { kind: "balanceScale", leftUnits: 2, rightUnits: 6 },
        steps: [
          {
            text: {
              en: "The left side has x plus {{2}} units. The right side has 6 units.",
              pt: "O lado esquerdo tem x mais {{2}} unidades. O lado direito tem 6 unidades.",
              es: "El lado izquierdo tiene x más {{2}} unidades. El lado derecho tiene 6 unidades.",
            },
          },
          {
            text: {
              en: "For the scale to balance, x must make up the difference: 6 - 2 = {{4}}.",
              pt: "Para a balança ficar equilibrada, x precisa cobrir a diferença: 6 - 2 = {{4}}.",
              es: "Para que la balanza quede equilibrada, x debe cubrir la diferencia: 6 - 2 = {{4}}.",
            },
          },
          {
            text: {
              en: "x = 4, since 4 + 2 = 6.",
              pt: "x = 4, pois 4 + 2 = 6.",
              es: "x = 4, porque 4 + 2 = 6.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateBalanceScaleReading,
    },
    {
      id: "black-32",
      beltId: "black",
      index: 2,
      degree: equationsDegree,
      title: {
        en: "One-step equations: addition and subtraction",
        pt: "Equações de um passo: soma e subtração",
        es: "Ecuaciones de un paso: suma y resta",
      },
      summary: {
        en: "Undo the operation — subtract what's added, add what's subtracted.",
        pt: "Desfaça a operação — subtraia o que foi somado, some o que foi subtraído.",
        es: "Deshaz la operación — resta lo que se sumó, suma lo que se restó.",
      },
      lesson: {
        intro: {
          en: "Whatever was done to x, do the opposite to both sides to get x alone.",
          pt: "O que foi feito com x, faça o oposto nos dois lados para deixar x sozinho.",
          es: "Lo que se le hizo a x, haz lo opuesto en ambos lados para dejar a x solo.",
        },
        example: { id: "ex-black-32", prompt: "x + 5 = 12", answer: 7, operands: [5, 12], isEquation: true },
        steps: [
          {
            text: {
              en: "x has 5 added to it. Do the opposite: subtract 5 from both sides.",
              pt: "x tem 5 somado a ele. Faça o oposto: subtraia 5 dos dois lados.",
              es: "A x se le suma 5. Haz lo opuesto: resta 5 de ambos lados.",
            },
          },
          {
            text: { en: "12 - 5 = {{7}}.", pt: "12 - 5 = {{7}}.", es: "12 - 5 = {{7}}." },
          },
          { text: { en: "x = 7.", pt: "x = 7.", es: "x = 7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateOneStepAddSub,
    },
    {
      id: "black-33",
      beltId: "black",
      index: 3,
      degree: equationsDegree,
      title: {
        en: "One-step equations: multiplication and division",
        pt: "Equações de um passo: multiplicação e divisão",
        es: "Ecuaciones de un paso: multiplicación y división",
      },
      summary: {
        en: "Undo multiplication with division, and division with multiplication.",
        pt: "Desfaça a multiplicação com divisão, e a divisão com multiplicação.",
        es: "Deshaz la multiplicación con división, y la división con multiplicación.",
      },
      lesson: {
        intro: {
          en: "x is being multiplied by 4 — divide both sides by 4 to undo it.",
          pt: "x está sendo multiplicado por 4 — divida os dois lados por 4 para desfazer isso.",
          es: "x está siendo multiplicado por 4 — divide ambos lados entre 4 para deshacerlo.",
        },
        example: { id: "ex-black-33", prompt: "4x = 20", answer: 5, operands: [4, 20], isEquation: true },
        steps: [
          {
            text: {
              en: "x is multiplied by 4. Do the opposite: divide both sides by 4.",
              pt: "x é multiplicado por 4. Faça o oposto: divida os dois lados por 4.",
              es: "x está multiplicado por 4. Haz lo opuesto: divide ambos lados entre 4.",
            },
          },
          {
            text: { en: "20 ÷ 4 = {{5}}.", pt: "20 ÷ 4 = {{5}}.", es: "20 ÷ 4 = {{5}}." },
          },
          { text: { en: "x = 5.", pt: "x = 5.", es: "x = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateOneStepMulDiv,
    },
    {
      id: "black-34",
      beltId: "black",
      index: 4,
      degree: equationsDegree,
      title: {
        en: "Two-step equations",
        pt: "Equações de dois passos",
        es: "Ecuaciones de dos pasos",
      },
      summary: {
        en: "Undo addition or subtraction first, then multiplication or division.",
        pt: "Desfaça a soma ou subtração primeiro, depois a multiplicação ou divisão.",
        es: "Deshaz la suma o resta primero, luego la multiplicación o división.",
      },
      lesson: {
        intro: {
          en: "Work backwards through the order of operations: undo the +/- part first, then the ×/÷ part.",
          pt: "Trabalhe de trás para frente pela ordem das operações: desfaça a parte de +/- primeiro, depois a de ×/÷.",
          es: "Trabaja hacia atrás en el orden de las operaciones: deshaz la parte de +/- primero, luego la de ×/÷.",
        },
        example: { id: "ex-black-34", prompt: "3x + 4 = 19", answer: 5, operands: [3, 4, 19], isEquation: true },
        steps: [
          {
            text: {
              en: "Undo the +4 first: subtract 4 from both sides. 19 - 4 = {{15}}.",
              pt: "Desfaça o +4 primeiro: subtraia 4 dos dois lados. 19 - 4 = {{15}}.",
              es: "Deshaz el +4 primero: resta 4 de ambos lados. 19 - 4 = {{15}}.",
            },
          },
          {
            text: {
              en: "Now undo the ×3: divide both sides by 3. 15 ÷ 3 = 5.",
              pt: "Agora desfaça o ×3: divida os dois lados por 3. 15 ÷ 3 = 5.",
              es: "Ahora deshaz el ×3: divide ambos lados entre 3. 15 ÷ 3 = 5.",
            },
          },
          { text: { en: "x = 5.", pt: "x = 5.", es: "x = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateTwoStepEquation,
    },
    {
      id: "black-35",
      beltId: "black",
      index: 5,
      degree: equationsDegree,
      title: {
        en: "Equations with negative solutions",
        pt: "Equações com soluções negativas",
        es: "Ecuaciones con soluciones negativas",
      },
      summary: {
        en: "Sometimes x has to be negative to balance the scale.",
        pt: "Às vezes x precisa ser negativo para equilibrar a balança.",
        es: "A veces x tiene que ser negativo para equilibrar la balanza.",
      },
      lesson: {
        intro: {
          en: "Solve the same way as before — the answer just happens to land below zero this time.",
          pt: "Resolva do mesmo jeito de antes — a resposta só acaba ficando abaixo de zero dessa vez.",
          es: "Resuelve de la misma manera que antes — la respuesta solo termina quedando debajo de cero esta vez.",
        },
        example: { id: "ex-black-35", prompt: "2x + 9 = 3", answer: -3, operands: [2, 9, 3], isEquation: true },
        steps: [
          {
            text: {
              en: "Undo the +9 first: 3 - 9 = {{-6}}.",
              pt: "Desfaça o +9 primeiro: 3 - 9 = {{-6}}.",
              es: "Deshaz el +9 primero: 3 - 9 = {{-6}}.",
            },
          },
          {
            text: {
              en: "Now undo the ×2: -6 ÷ 2 = -3.",
              pt: "Agora desfaça o ×2: -6 ÷ 2 = -3.",
              es: "Ahora deshaz el ×2: -6 ÷ 2 = -3.",
            },
          },
          { text: { en: "x = -3.", pt: "x = -3.", es: "x = -3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateEquationNegativeSolution,
    },
    {
      id: "black-36",
      beltId: "black",
      index: 6,
      degree: equationsDegree,
      title: {
        en: "Variables on both sides",
        pt: "Variável nos dois lados",
        es: "Variable en ambos lados",
      },
      summary: {
        en: "Gather the x terms on one side before you solve.",
        pt: "Reúna os termos com x em um lado antes de resolver.",
        es: "Reúne los términos con x en un lado antes de resolver.",
      },
      lesson: {
        intro: {
          en: "When x shows up on both sides, subtract the smaller x-term from both sides first — then it's a normal two-step equation.",
          pt: "Quando x aparece nos dois lados, subtraia o termo com x menor dos dois lados primeiro — depois é uma equação normal de dois passos.",
          es: "Cuando x aparece en ambos lados, resta el término con x menor de ambos lados primero — después es una ecuación normal de dos pasos.",
        },
        example: { id: "ex-black-36", prompt: "5x + 2 = 2x + 11", answer: 3, operands: [5, 2, 2, 11], isEquation: true },
        steps: [
          {
            text: {
              en: "Subtract 2x from both sides: 5x - 2x = 3x, and 2x - 2x = 0.",
              pt: "Subtraia 2x dos dois lados: 5x - 2x = 3x, e 2x - 2x = 0.",
              es: "Resta 2x de ambos lados: 5x - 2x = 3x, y 2x - 2x = 0.",
            },
          },
          {
            text: {
              en: "Now it's 3x + 2 = 11. Undo the +2: 11 - 2 = {{9}}.",
              pt: "Agora é 3x + 2 = 11. Desfaça o +2: 11 - 2 = {{9}}.",
              es: "Ahora es 3x + 2 = 11. Deshaz el +2: 11 - 2 = {{9}}.",
            },
          },
          {
            text: {
              en: "Undo the ×3: 9 ÷ 3 = 3. x = 3.",
              pt: "Desfaça o ×3: 9 ÷ 3 = 3. x = 3.",
              es: "Deshaz el ×3: 9 ÷ 3 = 3. x = 3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateVariableBothSides,
    },
    {
      id: "black-37",
      beltId: "black",
      index: 7,
      degree: equationsDegree,
      title: {
        en: "Equations with distribution",
        pt: "Equações com distributiva",
        es: "Ecuaciones con distributiva",
      },
      summary: {
        en: "Distribute first, then solve like normal.",
        pt: "Distribua primeiro, depois resolva normalmente.",
        es: "Distribuye primero, luego resuelve normalmente.",
      },
      lesson: {
        intro: {
          en: "Multiply through the parentheses first — same distributive property from Algebra — then it's a regular two-step equation.",
          pt: "Multiplique pelos parênteses primeiro — a mesma propriedade distributiva da Álgebra — depois é uma equação normal de dois passos.",
          es: "Multiplica por el paréntesis primero — la misma propiedad distributiva de Álgebra — luego es una ecuación normal de dos pasos.",
        },
        example: { id: "ex-black-37", prompt: "3(x + 2) = 21", answer: 5, operands: [3, 2, 21], isEquation: true },
        steps: [
          {
            text: {
              en: "Distribute the 3: 3x + 6 = 21.",
              pt: "Distribua o 3: 3x + 6 = 21.",
              es: "Distribuye el 3: 3x + 6 = 21.",
            },
          },
          {
            text: {
              en: "Undo the +6: 21 - 6 = {{15}}.",
              pt: "Desfaça o +6: 21 - 6 = {{15}}.",
              es: "Deshaz el +6: 21 - 6 = {{15}}.",
            },
          },
          {
            text: {
              en: "Undo the ×3: 15 ÷ 3 = 5. x = 5.",
              pt: "Desfaça o ×3: 15 ÷ 3 = 5. x = 5.",
              es: "Deshaz el ×3: 15 ÷ 3 = 5. x = 5.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateEquationWithDistribution,
    },
    {
      id: "black-38",
      beltId: "black",
      index: 8,
      degree: equationsDegree,
      title: {
        en: "Combining like terms first",
        pt: "Combinando termos semelhantes primeiro",
        es: "Combinando términos semejantes primero",
      },
      summary: {
        en: "Simplify each side before you start undoing operations.",
        pt: "Simplifique cada lado antes de começar a desfazer as operações.",
        es: "Simplifica cada lado antes de empezar a deshacer las operaciones.",
      },
      lesson: {
        intro: {
          en: "If a side has more than one x-term, combine them into a single term first — same trick as Algebra's combining like terms.",
          pt: "Se um lado tem mais de um termo com x, combine-os em um único termo primeiro — o mesmo truque de combinar termos semelhantes da Álgebra.",
          es: "Si un lado tiene más de un término con x, combínalos en un solo término primero — el mismo truco de combinar términos semejantes de Álgebra.",
        },
        example: { id: "ex-black-38", prompt: "4x + 2x - 3 = 15", answer: 3, operands: [4, 2, 3, 15], isEquation: true },
        steps: [
          {
            text: {
              en: "Combine the x-terms: 4x + 2x = {{6}}x.",
              pt: "Combine os termos com x: 4x + 2x = {{6}}x.",
              es: "Combina los términos con x: 4x + 2x = {{6}}x.",
            },
          },
          {
            text: {
              en: "Now it's 6x - 3 = 15. Undo the -3: 15 + 3 = 18.",
              pt: "Agora é 6x - 3 = 15. Desfaça o -3: 15 + 3 = 18.",
              es: "Ahora es 6x - 3 = 15. Deshaz el -3: 15 + 3 = 18.",
            },
          },
          {
            text: {
              en: "Undo the ×6: 18 ÷ 6 = 3. x = 3.",
              pt: "Desfaça o ×6: 18 ÷ 6 = 3. x = 3.",
              es: "Deshaz el ×6: 18 ÷ 6 = 3. x = 3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateCombineLikeTermsFirst,
    },
    {
      id: "black-39",
      beltId: "black",
      index: 9,
      degree: equationsDegree,
      title: {
        en: "Distribution with variables on both sides",
        pt: "Distributiva com variável nos dois lados",
        es: "Distributiva con variable en ambos lados",
      },
      summary: {
        en: "Distribute first, then gather the x terms.",
        pt: "Distribua primeiro, depois reúna os termos com x.",
        es: "Distribuye primero, luego reúne los términos con x.",
      },
      lesson: {
        intro: {
          en: "Distribute the parentheses first, then treat it like a variables-on-both-sides equation.",
          pt: "Distribua os parênteses primeiro, depois trate como uma equação com variável nos dois lados.",
          es: "Distribuye el paréntesis primero, luego trátala como una ecuación con variable en ambos lados.",
        },
        example: { id: "ex-black-39", prompt: "3(x + 2) = 4x + 4", answer: 2, operands: [3, 2, 4, 4], isEquation: true },
        steps: [
          {
            text: {
              en: "Distribute the 3: 3x + 6 = 4x + 4.",
              pt: "Distribua o 3: 3x + 6 = 4x + 4.",
              es: "Distribuye el 3: 3x + 6 = 4x + 4.",
            },
          },
          {
            text: {
              en: "Subtract 3x from both sides: 6 = x + 4.",
              pt: "Subtraia 3x dos dois lados: 6 = x + 4.",
              es: "Resta 3x de ambos lados: 6 = x + 4.",
            },
          },
          {
            text: {
              en: "Undo the +4: 6 - 4 = {{2}}. x = 2.",
              pt: "Desfaça o +4: 6 - 4 = {{2}}. x = 2.",
              es: "Deshaz el +4: 6 - 4 = {{2}}. x = 2.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateDistributionBothSides,
    },
    {
      id: "black-40",
      beltId: "black",
      index: 10,
      degree: equationsDegree,
      title: {
        en: "Multi-step equations",
        pt: "Equações de múltiplas etapas",
        es: "Ecuaciones de varios pasos",
      },
      summary: {
        en: "Distribute, combine, then solve — every Equations skill in one problem.",
        pt: "Distribua, combine, depois resolva — todas as habilidades de Equações em um problema.",
        es: "Distribuye, combina, luego resuelve — todas las habilidades de Ecuaciones en un problema.",
      },
      lesson: {
        intro: {
          en: "This pulls together everything from this degree: distribute the parentheses, simplify each side, gather x terms on one side, then undo the remaining steps.",
          pt: "Isso reúne tudo desta faixa: distribua os parênteses, simplifique cada lado, reúna os termos com x em um lado, depois desfaça os passos restantes.",
          es: "Esto reúne todo de este cinturón: distribuye el paréntesis, simplifica cada lado, reúne los términos con x en un lado, luego deshaz los pasos restantes.",
        },
        example: { id: "ex-black-40", prompt: "2(x + 3) - 4 = 3x - 3", answer: 5, operands: [2, 3, 4, 3, 3], isEquation: true },
        steps: [
          {
            text: {
              en: "Distribute the 2: 2x + 6 - 4 = 3x - 3.",
              pt: "Distribua o 2: 2x + 6 - 4 = 3x - 3.",
              es: "Distribuye el 2: 2x + 6 - 4 = 3x - 3.",
            },
          },
          {
            text: {
              en: "Simplify the left side: 2x + 2 = 3x - 3.",
              pt: "Simplifique o lado esquerdo: 2x + 2 = 3x - 3.",
              es: "Simplifica el lado izquierdo: 2x + 2 = 3x - 3.",
            },
          },
          {
            text: {
              en: "Subtract 2x from both sides: 2 = x - 3. Undo the -3: 2 + 3 = {{5}}. x = 5.",
              pt: "Subtraia 2x dos dois lados: 2 = x - 3. Desfaça o -3: 2 + 3 = {{5}}. x = 5.",
              es: "Resta 2x de ambos lados: 2 = x - 3. Deshaz el -3: 2 + 3 = {{5}}. x = 5.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 28 },
      generate: generateMultiStepEquation,
    },
    {
      id: "black-41",
      beltId: "black",
      index: 1,
      degree: functionsDegree,
      title: {
        en: "What a function means",
        pt: "O que significa uma função",
        es: "Qué significa una función",
      },
      summary: {
        en: "A function is a machine — put a number in, a new number comes out.",
        pt: "Uma função é uma máquina — coloca um número, sai outro número.",
        es: "Una función es una máquina — metes un número, sale otro número.",
      },
      lesson: {
        intro: {
          en: "The machine always applies the same rule to whatever goes in. Read the rule, apply it to the input, and find the output.",
          pt: "A máquina sempre aplica a mesma regra ao que entra. Leia a regra, aplique ao valor de entrada e descubra a saída.",
          es: "La máquina siempre aplica la misma regla a lo que entra. Lee la regla, aplícala al valor de entrada y descubre la salida.",
        },
        example: { id: "ex-black-41", prompt: "", answer: 6, operands: [3, 6] },
        diagram: { kind: "functionMachine", input: 3, rule: "× 2", output: 6 },
        steps: [
          {
            text: {
              en: "The machine's rule is × 2 — it doubles whatever goes in.",
              pt: "A regra da máquina é × 2 — ela dobra o que entra.",
              es: "La regla de la máquina es × 2 — duplica lo que entra.",
            },
          },
          {
            text: {
              en: "Put in 3: 3 × 2 = {{6}}.",
              pt: "Coloque 3: 3 × 2 = {{6}}.",
              es: "Mete 3: 3 × 2 = {{6}}.",
            },
          },
          { text: { en: "The output is 6.", pt: "A saída é 6.", es: "La salida es 6." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateFunctionMachineReading,
    },
    {
      id: "black-42",
      beltId: "black",
      index: 2,
      degree: functionsDegree,
      title: {
        en: "Function notation: evaluating f(x)",
        pt: "Notação de função: avaliando f(x)",
        es: "Notación de función: evaluando f(x)",
      },
      summary: {
        en: "f(x) just means \"the output when you put x in.\"",
        pt: "f(x) só significa \"o resultado quando você coloca x.\"",
        es: "f(x) solo significa \"el resultado cuando pones x.\"",
      },
      lesson: {
        intro: {
          en: "f(x) is just a labeled version of the machine from before — replace every x with the given number, then solve like usual.",
          pt: "f(x) é só uma versão rotulada da máquina de antes — troque cada x pelo número dado e resolva normalmente.",
          es: "f(x) es solo una versión etiquetada de la máquina de antes — cambia cada x por el número dado y resuelve normalmente.",
        },
        example: { id: "ex-black-42", prompt: "f(x) = 3x + 2; f(4)", answer: 14, operands: [3, 2, 4] },
        steps: [
          {
            text: {
              en: "Replace x with 4: f(4) = 3 × {{4}} + 2.",
              pt: "Troque x por 4: f(4) = 3 × {{4}} + 2.",
              es: "Cambia x por 4: f(4) = 3 × {{4}} + 2.",
            },
          },
          {
            text: {
              en: "Multiply: 3 × 4 = {{12}}.",
              pt: "Multiplique: 3 × 4 = {{12}}.",
              es: "Multiplica: 3 × 4 = {{12}}.",
            },
          },
          {
            text: {
              en: "Add: 12 + 2 = 14. So f(4) = 14.",
              pt: "Some: 12 + 2 = 14. Então f(4) = 14.",
              es: "Suma: 12 + 2 = 14. Entonces f(4) = 14.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateEvaluateFunctionPositive,
    },
    {
      id: "black-43",
      beltId: "black",
      index: 3,
      degree: functionsDegree,
      title: {
        en: "Evaluating f(x) with negative inputs",
        pt: "Avaliando f(x) com entradas negativas",
        es: "Evaluando f(x) con entradas negativas",
      },
      summary: {
        en: "The same rule works no matter what sign x has.",
        pt: "A mesma regra funciona não importa o sinal de x.",
        es: "La misma regla funciona sin importar el signo de x.",
      },
      lesson: {
        intro: {
          en: "Substitute the negative value exactly the same way — just keep careful track of the signs while you multiply and add.",
          pt: "Substitua o valor negativo do mesmo jeito — só preste atenção nos sinais enquanto multiplica e soma.",
          es: "Sustituye el valor negativo de la misma manera — solo presta atención a los signos mientras multiplicas y sumas.",
        },
        example: { id: "ex-black-43", prompt: "f(x) = 2x + 5; f(-4)", answer: -3, operands: [2, 5, -4] },
        steps: [
          {
            text: {
              en: "Replace x with -4: f(-4) = 2 × ({{-4}}) + 5.",
              pt: "Troque x por -4: f(-4) = 2 × ({{-4}}) + 5.",
              es: "Cambia x por -4: f(-4) = 2 × ({{-4}}) + 5.",
            },
          },
          {
            text: {
              en: "Multiply: 2 × (-4) = -8.",
              pt: "Multiplique: 2 × (-4) = -8.",
              es: "Multiplica: 2 × (-4) = -8.",
            },
          },
          {
            text: {
              en: "Add: -8 + 5 = -3. So f(-4) = -3.",
              pt: "Some: -8 + 5 = -3. Então f(-4) = -3.",
              es: "Suma: -8 + 5 = -3. Entonces f(-4) = -3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateEvaluateFunctionNegative,
    },
    {
      id: "black-44",
      beltId: "black",
      index: 4,
      degree: functionsDegree,
      title: {
        en: "What slope means",
        pt: "O que significa inclinação",
        es: "Qué significa la pendiente",
      },
      summary: {
        en: "Slope is how steep a line is — rise over run.",
        pt: "Inclinação é o quão íngreme uma reta é — subida sobre avanço.",
        es: "La pendiente es qué tan inclinada es una recta — subida sobre avance.",
      },
      lesson: {
        intro: {
          en: "Count how many steps up the staircase climbs (the rise), and how many steps across it goes (the run). Slope is rise over run.",
          pt: "Conte quantos degraus a escada sobe (a subida) e quantos ela avança (o avanço). Inclinação é subida sobre avanço.",
          es: "Cuenta cuántos escalones sube la escalera (la subida) y cuántos avanza (el avance). La pendiente es subida sobre avance.",
        },
        example: {
          id: "ex-black-44",
          prompt: "",
          answer: 3,
          secondaryAnswer: 4,
          secondaryFormat: "fraction",
          operands: [3, 4],
        },
        diagram: { kind: "slopeStaircase", rise: 3, run: 4 },
        steps: [
          {
            text: {
              en: "Count the rise (steps up): {{3}}.",
              pt: "Conte a subida (degraus para cima): {{3}}.",
              es: "Cuenta la subida (escalones hacia arriba): {{3}}.",
            },
          },
          {
            text: {
              en: "Count the run (steps across): 4.",
              pt: "Conte o avanço (degraus para o lado): 4.",
              es: "Cuenta el avance (escalones hacia el lado): 4.",
            },
          },
          {
            text: {
              en: "Slope = rise/run = 3/4.",
              pt: "Inclinação = subida/avanço = 3/4.",
              es: "Pendiente = subida/avance = 3/4.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateSlopeStaircaseReading,
    },
    {
      id: "black-45",
      beltId: "black",
      index: 5,
      degree: functionsDegree,
      title: {
        en: "Calculating slope from two points",
        pt: "Calculando a inclinação a partir de dois pontos",
        es: "Calculando la pendiente a partir de dos puntos",
      },
      summary: {
        en: "Two points are enough to find the slope between them.",
        pt: "Dois pontos são suficientes para achar a inclinação entre eles.",
        es: "Dos puntos son suficientes para hallar la pendiente entre ellos.",
      },
      lesson: {
        intro: {
          en: "The rise is how much y changes between the two points; the run is how much x changes. Slope is still rise over run.",
          pt: "A subida é quanto y muda entre os dois pontos; o avanço é quanto x muda. Inclinação continua sendo subida sobre avanço.",
          es: "La subida es cuánto cambia y entre los dos puntos; el avance es cuánto cambia x. La pendiente sigue siendo subida sobre avance.",
        },
        example: {
          id: "ex-black-45",
          prompt: "(1, 2), (3, 5)",
          answer: 3,
          secondaryAnswer: 2,
          secondaryFormat: "fraction",
          operands: [1, 2, 3, 5],
        },
        steps: [
          {
            text: {
              en: "Find the rise: change in y = 5 - 2 = {{3}}.",
              pt: "Ache a subida: mudança em y = 5 - 2 = {{3}}.",
              es: "Halla la subida: cambio en y = 5 - 2 = {{3}}.",
            },
          },
          {
            text: {
              en: "Find the run: change in x = 3 - 1 = 2.",
              pt: "Ache o avanço: mudança em x = 3 - 1 = 2.",
              es: "Halla el avance: cambio en x = 3 - 1 = 2.",
            },
          },
          {
            text: {
              en: "Slope = rise/run = 3/2.",
              pt: "Inclinação = subida/avanço = 3/2.",
              es: "Pendiente = subida/avance = 3/2.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateSlopeFromTwoPoints,
    },
    {
      id: "black-46",
      beltId: "black",
      index: 6,
      degree: functionsDegree,
      title: {
        en: "Finding the y-intercept",
        pt: "Achando o intercepto em y",
        es: "Hallando el intercepto en y",
      },
      summary: {
        en: "The y-intercept is just the constant term.",
        pt: "O intercepto em y é só o termo constante.",
        es: "El intercepto en y es solo el término constante.",
      },
      lesson: {
        intro: {
          en: "A line crosses the y-axis exactly where x = 0. For f(x) = ax + b, that's always just b — no calculation needed once you see the pattern.",
          pt: "Uma reta cruza o eixo y exatamente onde x = 0. Para f(x) = ax + b, isso é sempre só b — sem precisar calcular depois que você vê o padrão.",
          es: "Una recta cruza el eje y exactamente donde x = 0. Para f(x) = ax + b, eso siempre es solo b — sin necesidad de calcular una vez que ves el patrón.",
        },
        example: { id: "ex-black-46", prompt: "f(x) = 3x + 7; f(0)", answer: 7, operands: [3, 7] },
        steps: [
          {
            text: {
              en: "The y-intercept is where the line crosses the y-axis — that happens when x = 0.",
              pt: "O intercepto em y é onde a reta cruza o eixo y — isso acontece quando x = 0.",
              es: "El intercepto en y es donde la recta cruza el eje y — eso pasa cuando x = 0.",
            },
          },
          {
            text: {
              en: "f(0) = 3 × 0 + 7 = {{7}}.",
              pt: "f(0) = 3 × 0 + 7 = {{7}}.",
              es: "f(0) = 3 × 0 + 7 = {{7}}.",
            },
          },
          {
            text: {
              en: "The y-intercept is 7 — it's always just the constant term.",
              pt: "O intercepto em y é 7 — é sempre só o termo constante.",
              es: "El intercepto en y es 7 — siempre es solo el término constante.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateFindYIntercept,
    },
    {
      id: "black-47",
      beltId: "black",
      index: 7,
      degree: functionsDegree,
      title: {
        en: "Finding the x-intercept (the zero)",
        pt: "Achando o intercepto em x (o zero)",
        es: "Hallando el intercepto en x (el cero)",
      },
      summary: {
        en: "The zero is where the function crosses the x-axis — solve like any equation.",
        pt: "O zero é onde a função cruza o eixo x — resolva como qualquer equação.",
        es: "El cero es donde la función cruza el eje x — resuélvela como cualquier ecuación.",
      },
      lesson: {
        intro: {
          en: "The x-intercept (or \"zero\") of a function is the input that makes the output 0. That's exactly the same skill as solving an equation from the last belt — just set the function equal to 0 and solve for x.",
          pt: "O intercepto em x (ou \"zero\") de uma função é a entrada que faz a saída ser 0. É exatamente a mesma habilidade de resolver uma equação da faixa passada — só iguale a função a 0 e resolva para x.",
          es: "El intercepto en x (o \"cero\") de una función es la entrada que hace que la salida sea 0. Es exactamente la misma habilidad de resolver una ecuación del cinturón anterior — solo iguala la función a 0 y resuelve para x.",
        },
        example: { id: "ex-black-47", prompt: "2x - 8 = 0", answer: 4, operands: [2, -8], isEquation: true },
        steps: [
          {
            text: {
              en: "This is where f(x) = 2x - 8 crosses zero — solve it like any equation.",
              pt: "É onde f(x) = 2x - 8 cruza o zero — resolva como qualquer equação.",
              es: "Es donde f(x) = 2x - 8 cruza el cero — resuélvela como cualquier ecuación.",
            },
          },
          {
            text: {
              en: "Undo the -8: add 8 to both sides. 0 + 8 = {{8}}.",
              pt: "Desfaça o -8: some 8 nos dois lados. 0 + 8 = {{8}}.",
              es: "Deshaz el -8: suma 8 en ambos lados. 0 + 8 = {{8}}.",
            },
          },
          {
            text: {
              en: "Now it's 2x = 8. Undo the ×2: 8 ÷ 2 = 4. x = 4.",
              pt: "Agora é 2x = 8. Desfaça o ×2: 8 ÷ 2 = 4. x = 4.",
              es: "Ahora es 2x = 8. Deshaz el ×2: 8 ÷ 2 = 4. x = 4.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateFindXIntercept,
    },
    {
      id: "black-48",
      beltId: "black",
      index: 8,
      degree: functionsDegree,
      title: {
        en: "What a quadratic function means",
        pt: "O que significa uma função quadrática",
        es: "Qué significa una función cuadrática",
      },
      summary: {
        en: "Squaring makes negative inputs positive — that's what shapes the U.",
        pt: "Elevar ao quadrado deixa entradas negativas positivas — é isso que forma o U.",
        es: "Elevar al cuadrado hace que las entradas negativas sean positivas — eso forma la U.",
      },
      lesson: {
        intro: {
          en: "In f(x) = x², both a positive and its matching negative input give the same output, since squaring removes the sign. Plotting several inputs traces out a U-shaped curve called a parabola.",
          pt: "Em f(x) = x², tanto uma entrada positiva quanto a negativa correspondente dão a mesma saída, já que elevar ao quadrado remove o sinal. Marcando várias entradas, forma-se uma curva em U chamada parábola.",
          es: "En f(x) = x², tanto una entrada positiva como su negativa correspondiente dan la misma salida, ya que elevar al cuadrado quita el signo. Marcando varias entradas, se traza una curva en forma de U llamada parábola.",
        },
        example: { id: "ex-black-48", prompt: "f(x) = x²; f(3)", answer: 9, operands: [3] },
        diagram: {
          kind: "parabola",
          points: [
            { x: -2, y: 4 },
            { x: -1, y: 1 },
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 4 },
          ],
        },
        steps: [
          {
            text: {
              en: "Squaring a negative number gives a positive result: (-2)² = {{4}}, just like 2² = 4.",
              pt: "Elevar um número negativo ao quadrado dá um resultado positivo: (-2)² = {{4}}, igual a 2² = 4.",
              es: "Elevar un número negativo al cuadrado da un resultado positivo: (-2)² = {{4}}, igual que 2² = 4.",
            },
          },
          {
            text: {
              en: "That's why the graph curves back up on both sides — it's shaped like a U, called a parabola.",
              pt: "Por isso o gráfico curva para cima nos dois lados — tem formato de U, chamado de parábola.",
              es: "Por eso la gráfica se curva hacia arriba en ambos lados — tiene forma de U, llamada parábola.",
            },
          },
          {
            text: {
              en: "f(3) = 3² = 9.",
              pt: "f(3) = 3² = 9.",
              es: "f(3) = 3² = 9.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateEvaluateBasicQuadratic,
    },
    {
      id: "black-49",
      beltId: "black",
      index: 9,
      degree: functionsDegree,
      title: {
        en: "Evaluating quadratic functions",
        pt: "Avaliando funções quadráticas",
        es: "Evaluando funciones cuadráticas",
      },
      summary: {
        en: "Square first, then multiply, then add — order of operations still applies.",
        pt: "Eleve ao quadrado primeiro, depois multiplique, depois some — a ordem das operações continua valendo.",
        es: "Eleva al cuadrado primero, luego multiplica, luego suma — el orden de las operaciones sigue aplicando.",
      },
      lesson: {
        intro: {
          en: "A full quadratic has three parts — a squared term, an x term, and a constant. Substitute, then work through order of operations just like any other expression.",
          pt: "Uma quadrática completa tem três partes — um termo ao quadrado, um termo com x, e uma constante. Substitua e siga a ordem das operações como em qualquer expressão.",
          es: "Una cuadrática completa tiene tres partes — un término al cuadrado, un término con x, y una constante. Sustituye y sigue el orden de las operaciones como en cualquier expresión.",
        },
        example: { id: "ex-black-49", prompt: "f(x) = x² + 3x - 4; f(2)", answer: 6, operands: [3, -4, 2] },
        steps: [
          {
            text: {
              en: "Replace x with 2: f(2) = 2² + 3 × 2 - 4.",
              pt: "Troque x por 2: f(2) = 2² + 3 × 2 - 4.",
              es: "Cambia x por 2: f(2) = 2² + 3 × 2 - 4.",
            },
          },
          {
            text: {
              en: "Square first: 2² = {{4}}. Then multiply: 3 × 2 = 6.",
              pt: "Eleve ao quadrado primeiro: 2² = {{4}}. Depois multiplique: 3 × 2 = 6.",
              es: "Eleva al cuadrado primero: 2² = {{4}}. Luego multiplica: 3 × 2 = 6.",
            },
          },
          {
            text: {
              en: "Add it up: 4 + 6 - 4 = 6.",
              pt: "Some tudo: 4 + 6 - 4 = 6.",
              es: "Suma todo: 4 + 6 - 4 = 6.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateEvaluateFullQuadratic,
    },
    {
      id: "black-50",
      beltId: "black",
      index: 10,
      degree: functionsDegree,
      title: {
        en: "Combining two functions",
        pt: "Combinando duas funções",
        es: "Combinando dos funciones",
      },
      summary: {
        en: "Evaluate each function separately, then add the results — every Functions skill in one problem.",
        pt: "Avalie cada função separadamente, depois some os resultados — todas as habilidades de Funções em um problema.",
        es: "Evalúa cada función por separado, luego suma los resultados — todas las habilidades de Funciones en un problema.",
      },
      lesson: {
        intro: {
          en: "f and g are two different machines. Run the same input through each one separately, then combine the outputs — this pulls together linear and quadratic evaluation from this whole degree.",
          pt: "f e g são duas máquinas diferentes. Passe a mesma entrada por cada uma separadamente, depois combine as saídas — isso reúne avaliação linear e quadrática de toda essa faixa.",
          es: "f y g son dos máquinas diferentes. Pasa la misma entrada por cada una por separado, luego combina las salidas — esto reúne evaluación lineal y cuadrática de todo este cinturón.",
        },
        example: {
          id: "ex-black-50",
          prompt: "f(x) = 2x + 1, g(x) = x² - 3; f(3) + g(3)",
          answer: 13,
          operands: [2, 1, -3, 3],
        },
        steps: [
          {
            text: {
              en: "Evaluate f(3): f(3) = 2 × 3 + 1 = {{7}}.",
              pt: "Avalie f(3): f(3) = 2 × 3 + 1 = {{7}}.",
              es: "Evalúa f(3): f(3) = 2 × 3 + 1 = {{7}}.",
            },
          },
          {
            text: {
              en: "Evaluate g(3): g(3) = 3² - 3 = 9 - 3 = 6.",
              pt: "Avalie g(3): g(3) = 3² - 3 = 9 - 3 = 6.",
              es: "Evalúa g(3): g(3) = 3² - 3 = 9 - 3 = 6.",
            },
          },
          {
            text: {
              en: "Add the results: 7 + 6 = 13.",
              pt: "Some os resultados: 7 + 6 = 13.",
              es: "Suma los resultados: 7 + 6 = 13.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 28 },
      generate: generateCombineFunctions,
    },
    {
      id: "black-51",
      beltId: "black",
      index: 1,
      degree: preCalcDegree,
      title: {
        en: "What factoring means",
        pt: "O que significa fatorar",
        es: "Qué significa factorizar",
      },
      summary: {
        en: "Multiplying two binomials fills a rectangle with four pieces.",
        pt: "Multiplicar dois binômios preenche um retângulo com quatro partes.",
        es: "Multiplicar dos binomios llena un rectángulo con cuatro partes.",
      },
      lesson: {
        intro: {
          en: "The area of the whole rectangle is x² plus the two middle strips plus the small corner — add the middle strips together to get the combined x-term.",
          pt: "A área do retângulo inteiro é x² mais as duas faixas do meio mais o cantinho — some as faixas do meio para achar o termo x combinado.",
          es: "El área del rectángulo completo es x² más las dos franjas del medio más la esquina — suma las franjas del medio para hallar el término x combinado.",
        },
        example: { id: "ex-black-51", prompt: "", answer: 7, operands: [3, 4] },
        diagram: { kind: "factorArea", a: 3, b: 4 },
        steps: [
          {
            text: {
              en: "The two middle pieces are 3x and 4x — together they combine into one x-term.",
              pt: "As duas partes do meio são 3x e 4x — juntas elas se combinam em um único termo x.",
              es: "Las dos partes del medio son 3x y 4x — juntas se combinan en un solo término x.",
            },
          },
          {
            text: {
              en: "3x + 4x = {{7}}x.",
              pt: "3x + 4x = {{7}}x.",
              es: "3x + 4x = {{7}}x.",
            },
          },
          {
            text: {
              en: "(x + 3)(x + 4) = x² + 7x + 12.",
              pt: "(x + 3)(x + 4) = x² + 7x + 12.",
              es: "(x + 3)(x + 4) = x² + 7x + 12.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateFactorAreaReading,
    },
    {
      id: "black-52",
      beltId: "black",
      index: 2,
      degree: preCalcDegree,
      title: {
        en: "Factoring trinomials: finding the pair",
        pt: "Fatorando trinômios: achando o par",
        es: "Factorizando trinomios: hallando el par",
      },
      summary: {
        en: "Find two numbers that multiply to c and add to b.",
        pt: "Ache dois números que multiplicam para c e somam para b.",
        es: "Halla dos números que multiplican para c y suman para b.",
      },
      lesson: {
        intro: {
          en: "This is the reverse of the area model: given x² - bx + c, find the two numbers whose product is c and whose sum is b.",
          pt: "Isso é o inverso do modelo de área: dado x² - bx + c, ache os dois números cujo produto é c e cuja soma é b.",
          es: "Esto es lo inverso del modelo de área: dado x² - bx + c, halla los dos números cuyo producto es c y cuya suma es b.",
        },
        example: {
          id: "ex-black-52",
          prompt: "x² - 7x + 12",
          answer: 3,
          secondaryAnswer: 4,
          secondaryFormat: "pair",
          operands: [7, 12],
        },
        steps: [
          {
            text: {
              en: "Look for two numbers that multiply to 12: 3 × 4 = {{12}}.",
              pt: "Procure dois números que multiplicam para 12: 3 × 4 = {{12}}.",
              es: "Busca dos números que multiplican para 12: 3 × 4 = {{12}}.",
            },
          },
          {
            text: {
              en: "Check that they also add to 7: 3 + 4 = 7.",
              pt: "Confira que eles também somam 7: 3 + 4 = 7.",
              es: "Comprueba que también suman 7: 3 + 4 = 7.",
            },
          },
          {
            text: {
              en: "x² - 7x + 12 = (x - 3)(x - 4).",
              pt: "x² - 7x + 12 = (x - 3)(x - 4).",
              es: "x² - 7x + 12 = (x - 3)(x - 4).",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 19 },
      generate: generateFactorTrinomialPair,
    },
    {
      id: "black-53",
      beltId: "black",
      index: 3,
      degree: preCalcDegree,
      title: {
        en: "Solving quadratic equations by factoring",
        pt: "Resolvendo equações quadráticas por fatoração",
        es: "Resolviendo ecuaciones cuadráticas por factorización",
      },
      summary: {
        en: "Factor first, then each piece separately equals zero.",
        pt: "Fatore primeiro, depois cada parte separadamente é igual a zero.",
        es: "Factoriza primero, luego cada parte por separado es igual a cero.",
      },
      lesson: {
        intro: {
          en: "If two things multiply to zero, at least one of them must be zero. Factor the equation, then set each factor equal to zero on its own.",
          pt: "Se duas coisas se multiplicam para dar zero, pelo menos uma delas precisa ser zero. Fatore a equação, depois iguale cada fator a zero separadamente.",
          es: "Si dos cosas se multiplican y dan cero, al menos una de ellas debe ser cero. Factoriza la ecuación, luego iguala cada factor a cero por separado.",
        },
        example: {
          id: "ex-black-53",
          prompt: "x² - 7x + 12 = 0",
          answer: 3,
          secondaryAnswer: 4,
          secondaryFormat: "pair",
          isEquation: true,
          operands: [7, 12],
        },
        steps: [
          {
            text: {
              en: "Factor: x² - 7x + 12 = (x - 3)(x - 4).",
              pt: "Fatore: x² - 7x + 12 = (x - 3)(x - 4).",
              es: "Factoriza: x² - 7x + 12 = (x - 3)(x - 4).",
            },
          },
          {
            text: {
              en: "For the product to be zero, one factor must be zero: x - 3 = 0 or x - 4 = 0.",
              pt: "Para o produto ser zero, um fator precisa ser zero: x - 3 = 0 ou x - 4 = 0.",
              es: "Para que el producto sea cero, un factor debe ser cero: x - 3 = 0 o x - 4 = 0.",
            },
          },
          {
            text: {
              en: "x = 3 or x = {{4}}.",
              pt: "x = 3 ou x = {{4}}.",
              es: "x = 3 o x = {{4}}.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 21 },
      generate: generateSolveQuadraticByFactoring,
    },
    {
      id: "black-54",
      beltId: "black",
      index: 4,
      degree: preCalcDegree,
      title: {
        en: "The quadratic formula",
        pt: "A fórmula de Bhaskara",
        es: "La fórmula cuadrática",
      },
      summary: {
        en: "x = (b ± √(b² - 4c)) / 2 — a formula that always works.",
        pt: "x = (b ± √(b² - 4c)) / 2 — uma fórmula que sempre funciona.",
        es: "x = (b ± √(b² - 4c)) / 2 — una fórmula que siempre funciona.",
      },
      lesson: {
        intro: {
          en: "Factoring doesn't always come easily, but this formula always solves x² - bx + c = 0, no guessing required.",
          pt: "Fatorar nem sempre é fácil, mas essa fórmula sempre resolve x² - bx + c = 0, sem precisar adivinhar.",
          es: "Factorizar no siempre es fácil, pero esta fórmula siempre resuelve x² - bx + c = 0, sin necesidad de adivinar.",
        },
        example: {
          id: "ex-black-54",
          prompt: "x² - 7x + 12 = 0",
          answer: 3,
          secondaryAnswer: 4,
          secondaryFormat: "pair",
          isEquation: true,
          operands: [7, 12],
        },
        steps: [
          {
            text: {
              en: "Here b = 7 and c = 12. Compute the discriminant: b² - 4c = 49 - 48 = {{1}}.",
              pt: "Aqui b = 7 e c = 12. Calcule o discriminante: b² - 4c = 49 - 48 = {{1}}.",
              es: "Aquí b = 7 y c = 12. Calcula el discriminante: b² - 4c = 49 - 48 = {{1}}.",
            },
          },
          {
            text: {
              en: "√1 = 1, so x = (7 ± 1) / 2.",
              pt: "√1 = 1, então x = (7 ± 1) / 2.",
              es: "√1 = 1, entonces x = (7 ± 1) / 2.",
            },
          },
          {
            text: {
              en: "x = 8/2 = 4, or x = 6/2 = 3.",
              pt: "x = 8/2 = 4, ou x = 6/2 = 3.",
              es: "x = 8/2 = 4, o x = 6/2 = 3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 26 },
      generate: generateQuadraticFormula,
    },
    {
      id: "black-55",
      beltId: "black",
      index: 5,
      degree: preCalcDegree,
      title: {
        en: "Completing the square",
        pt: "Completando o quadrado",
        es: "Completando el cuadrado",
      },
      summary: {
        en: "Add (b/2)² to turn x² + bx into a perfect square.",
        pt: "Some (b/2)² para transformar x² + bx em um quadrado perfeito.",
        es: "Suma (b/2)² para convertir x² + bx en un cuadrado perfecto.",
      },
      lesson: {
        intro: {
          en: "Take half of the x-coefficient and square it — that's always the constant that turns x² + bx into a perfect-square trinomial.",
          pt: "Pegue metade do coeficiente de x e eleve ao quadrado — essa é sempre a constante que transforma x² + bx em um trinômio quadrado perfeito.",
          es: "Toma la mitad del coeficiente de x y elévala al cuadrado — esa siempre es la constante que convierte x² + bx en un trinomio cuadrado perfecto.",
        },
        example: { id: "ex-black-55", prompt: "x² + 6x + ___", answer: 9, operands: [6] },
        steps: [
          {
            text: {
              en: "Take half of the x-coefficient: 6 ÷ 2 = {{3}}.",
              pt: "Pegue metade do coeficiente de x: 6 ÷ 2 = {{3}}.",
              es: "Toma la mitad del coeficiente de x: 6 ÷ 2 = {{3}}.",
            },
          },
          {
            text: {
              en: "Square it: 3² = 9.",
              pt: "Eleve ao quadrado: 3² = 9.",
              es: "Elévala al cuadrado: 3² = 9.",
            },
          },
          {
            text: {
              en: "x² + 6x + 9 = (x + 3)², a perfect square.",
              pt: "x² + 6x + 9 = (x + 3)², um quadrado perfeito.",
              es: "x² + 6x + 9 = (x + 3)², un cuadrado perfecto.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateCompleteTheSquare,
    },
    {
      id: "black-56",
      beltId: "black",
      index: 6,
      degree: preCalcDegree,
      title: {
        en: "The discriminant",
        pt: "O discriminante",
        es: "El discriminante",
      },
      summary: {
        en: "b² - 4c tells you how many real roots there are.",
        pt: "b² - 4c diz quantas raízes reais existem.",
        es: "b² - 4c dice cuántas raíces reales hay.",
      },
      lesson: {
        intro: {
          en: "The discriminant is the part under the square root in the quadratic formula. Positive means two real roots, zero means one repeated root, negative means no real roots at all.",
          pt: "O discriminante é a parte dentro da raiz quadrada na fórmula de Bhaskara. Positivo significa duas raízes reais, zero significa uma raiz repetida, negativo significa nenhuma raiz real.",
          es: "El discriminante es la parte dentro de la raíz cuadrada en la fórmula cuadrática. Positivo significa dos raíces reales, cero significa una raíz repetida, negativo significa ninguna raíz real.",
        },
        example: { id: "ex-black-56", prompt: "x² - 5x + 3", answer: 13, operands: [5, 3] },
        steps: [
          {
            text: {
              en: "b = 5, c = 3. Square b: 5² = {{25}}.",
              pt: "b = 5, c = 3. Eleve b ao quadrado: 5² = {{25}}.",
              es: "b = 5, c = 3. Eleva b al cuadrado: 5² = {{25}}.",
            },
          },
          {
            text: {
              en: "Multiply: 4 × 3 = 12.",
              pt: "Multiplique: 4 × 3 = 12.",
              es: "Multiplica: 4 × 3 = 12.",
            },
          },
          {
            text: {
              en: "Discriminant = 25 - 12 = 13 — positive, so there are two real roots.",
              pt: "Discriminante = 25 - 12 = 13 — positivo, então existem duas raízes reais.",
              es: "Discriminante = 25 - 12 = 13 — positivo, así que hay dos raíces reales.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateDiscriminant,
    },
    {
      id: "black-57",
      beltId: "black",
      index: 7,
      degree: preCalcDegree,
      title: {
        en: "Simplifying square roots",
        pt: "Simplificando raízes quadradas",
        es: "Simplificando raíces cuadradas",
      },
      summary: {
        en: "Pull the largest perfect square factor out from under the root.",
        pt: "Tire o maior fator quadrado perfeito de dentro da raiz.",
        es: "Saca el mayor factor cuadrado perfecto de debajo de la raíz.",
      },
      lesson: {
        intro: {
          en: "Split the number under the root into a perfect square times whatever's left, then pull the perfect square's root outside.",
          pt: "Divida o número dentro da raiz em um quadrado perfeito vezes o que sobra, depois tire a raiz do quadrado perfeito para fora.",
          es: "Divide el número bajo la raíz en un cuadrado perfecto por lo que queda, luego saca la raíz del cuadrado perfecto hacia afuera.",
        },
        example: {
          id: "ex-black-57",
          prompt: "√50",
          answer: 5,
          secondaryAnswer: 2,
          secondaryFormat: "radical",
          operands: [50],
        },
        steps: [
          {
            text: {
              en: "50 = 25 × 2, and 25 is a perfect square: 5² = {{25}}.",
              pt: "50 = 25 × 2, e 25 é um quadrado perfeito: 5² = {{25}}.",
              es: "50 = 25 × 2, y 25 es un cuadrado perfecto: 5² = {{25}}.",
            },
          },
          {
            text: {
              en: "Pull the 5 out from under the root: √50 = 5√2.",
              pt: "Tire o 5 de dentro da raiz: √50 = 5√2.",
              es: "Saca el 5 de debajo de la raíz: √50 = 5√2.",
            },
          },
          {
            text: {
              en: "5√2 is already simplified — 2 has no more square factors.",
              pt: "5√2 já está simplificado — 2 não tem mais fatores quadrados.",
              es: "5√2 ya está simplificado — 2 no tiene más factores cuadrados.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateSimplifyRadical,
    },
    {
      id: "black-58",
      beltId: "black",
      index: 8,
      degree: preCalcDegree,
      title: {
        en: "Laws of exponents",
        pt: "Propriedades das potências",
        es: "Leyes de los exponentes",
      },
      summary: {
        en: "Multiplying same-base powers adds the exponents; dividing subtracts them.",
        pt: "Multiplicar potências de mesma base soma os expoentes; dividir subtrai.",
        es: "Multiplicar potencias de la misma base suma los exponentes; dividir los resta.",
      },
      lesson: {
        intro: {
          en: "When the base is the same, multiplying means adding the exponents, and dividing means subtracting them — no need to expand anything.",
          pt: "Quando a base é a mesma, multiplicar significa somar os expoentes, e dividir significa subtraí-los — sem precisar expandir nada.",
          es: "Cuando la base es la misma, multiplicar significa sumar los exponentes, y dividir significa restarlos — sin necesidad de expandir nada.",
        },
        example: { id: "ex-black-58", prompt: "x⁵ × x³ = xⁿ", answer: 8, operands: [5, 3] },
        steps: [
          {
            text: {
              en: "Same base (x), so add the exponents: 5 + 3 = {{8}}.",
              pt: "Mesma base (x), então some os expoentes: 5 + 3 = {{8}}.",
              es: "Misma base (x), así que suma los exponentes: 5 + 3 = {{8}}.",
            },
          },
          {
            text: {
              en: "x⁵ × x³ = x⁸.",
              pt: "x⁵ × x³ = x⁸.",
              es: "x⁵ × x³ = x⁸.",
            },
          },
          { text: { en: "n = 8.", pt: "n = 8.", es: "n = 8." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateExponentRules,
    },
    {
      id: "black-59",
      beltId: "black",
      index: 9,
      degree: preCalcDegree,
      title: {
        en: "Systems of linear equations",
        pt: "Sistemas de equações lineares",
        es: "Sistemas de ecuaciones lineales",
      },
      summary: {
        en: "Add the equations together to cancel one variable.",
        pt: "Some as equações para cancelar uma variável.",
        es: "Suma las ecuaciones para cancelar una variable.",
      },
      lesson: {
        intro: {
          en: "When one equation has +y and the other has -y, adding them straight down cancels y completely, leaving a one-step equation for x.",
          pt: "Quando uma equação tem +y e a outra tem -y, somá-las direto cancela o y completamente, deixando uma equação de um passo só para x.",
          es: "Cuando una ecuación tiene +y y la otra tiene -y, sumarlas directamente cancela la y por completo, dejando una ecuación de un solo paso para x.",
        },
        example: {
          id: "ex-black-59",
          prompt: "x + y = 10, x - y = 4",
          answer: 7,
          secondaryAnswer: 3,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "x, y =",
          operands: [10, 4],
        },
        steps: [
          {
            text: {
              en: "Add the two equations: (x + y) + (x - y) = 10 + 4, so 2x = {{14}}.",
              pt: "Some as duas equações: (x + y) + (x - y) = 10 + 4, então 2x = {{14}}.",
              es: "Suma las dos ecuaciones: (x + y) + (x - y) = 10 + 4, entonces 2x = {{14}}.",
            },
          },
          {
            text: {
              en: "x = 14 ÷ 2 = 7.",
              pt: "x = 14 ÷ 2 = 7.",
              es: "x = 14 ÷ 2 = 7.",
            },
          },
          {
            text: {
              en: "Substitute back: 7 + y = 10, so y = 3.",
              pt: "Substitua de volta: 7 + y = 10, então y = 3.",
              es: "Sustituye de vuelta: 7 + y = 10, entonces y = 3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 23 },
      generate: generateLinearSystem,
    },
    {
      id: "black-60",
      beltId: "black",
      index: 10,
      degree: preCalcDegree,
      title: {
        en: "Rearranging, factoring, and solving",
        pt: "Reorganizando, fatorando e resolvendo",
        es: "Reorganizando, factorizando y resolviendo",
      },
      summary: {
        en: "Get everything on one side first, then factor and solve — every Pre-Calculus skill in one problem.",
        pt: "Coloque tudo de um lado primeiro, depois fatore e resolva — todas as habilidades de Pré-Cálculo em um problema.",
        es: "Pon todo de un lado primero, luego factoriza y resuelve — todas las habilidades de Precálculo en un problema.",
      },
      lesson: {
        intro: {
          en: "This pulls together everything from this degree: rearrange into standard form, factor the trinomial, then apply the zero-product property.",
          pt: "Isso reúne tudo desta faixa: reorganize na forma padrão, fatore o trinômio, depois aplique a propriedade do produto zero.",
          es: "Esto reúne todo de este cinturón: reorganiza en la forma estándar, factoriza el trinomio, luego aplica la propiedad del producto cero.",
        },
        example: {
          id: "ex-black-60",
          prompt: "x² - 7x = -12",
          answer: 3,
          secondaryAnswer: 4,
          secondaryFormat: "pair",
          isEquation: true,
          operands: [7, -12],
        },
        steps: [
          {
            text: {
              en: "Add 12 to both sides: x² - 7x + 12 = 0.",
              pt: "Some 12 dos dois lados: x² - 7x + 12 = 0.",
              es: "Suma 12 en ambos lados: x² - 7x + 12 = 0.",
            },
          },
          {
            text: {
              en: "Factor: (x - 3)(x - 4) = 0.",
              pt: "Fatore: (x - 3)(x - 4) = 0.",
              es: "Factoriza: (x - 3)(x - 4) = 0.",
            },
          },
          {
            text: {
              en: "x = 3 or x = {{4}}.",
              pt: "x = 3 ou x = {{4}}.",
              es: "x = 3 o x = {{4}}.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 30 },
      generate: generateRearrangeFactorSolve,
    },
  ],
};

const planeGeoDegree = {
  index: 1,
  name: { en: "Plane Geometry", pt: "Geometria Plana", es: "Geometría Plana" } as LocalizedText,
};

const solidGeoDegree = {
  index: 2,
  name: { en: "Solid Geometry", pt: "Geometria Espacial", es: "Geometría del Espacio" } as LocalizedText,
};

const trigDegree = {
  index: 3,
  name: { en: "Trigonometry", pt: "Trigonometria", es: "Trigonometría" } as LocalizedText,
};

const redExamDegree = {
  index: 4,
  name: { en: "Belt Exam", pt: "Prova da Faixa", es: "Examen del Cinturón" } as LocalizedText,
};

const redBelt: Belt = {
  id: "red",
  name: { en: "Red Belt", pt: "Faixa Vermelha", es: "Cinturón Rojo" },
  order: 7,
  operationLabel: {
    en: "Geometry · Trigonometry",
    pt: "Geometria · Trigonometria",
    es: "Geometría · Trigonometría",
  },
  colorVar: "--belt-red",
  tagline: {
    en: "Shapes, space and angles — from perimeters to sine and cosine.",
    pt: "Formas, espaço e ângulos — do perímetro ao seno e cosseno.",
    es: "Formas, espacio y ángulos — del perímetro al seno y coseno.",
  },
  stripes: [
    {
      id: "red-1",
      beltId: "red",
      index: 1,
      degree: planeGeoDegree,
      title: { en: "Perimeter", pt: "Perímetro", es: "Perímetro" },
      summary: {
        en: "Walk around the shape — the perimeter is the total distance.",
        pt: "Dê a volta na figura — o perímetro é a distância total.",
        es: "Da la vuelta a la figura — el perímetro es la distancia total.",
      },
      lesson: {
        intro: {
          en: "A rectangle has two widths and two heights. Add one of each, then double it.",
          pt: "Um retângulo tem duas larguras e duas alturas. Some uma de cada, depois dobre.",
          es: "Un rectángulo tiene dos anchos y dos altos. Suma uno de cada, luego duplica.",
        },
        example: {
          id: "ex-red-1",
          prompt: "Perimeter of a 5 × 8 rectangle",
          promptL10n: {
            en: "Perimeter of a 5 × 8 rectangle",
            pt: "Perímetro do retângulo 5 × 8",
            es: "Perímetro del rectángulo 5 × 8",
          },
          answer: 26,
          operands: [5, 8],
        },
        steps: [
          {
            text: {
              en: "One width plus one height: 5 + 8 = {{13}}.",
              pt: "Uma largura mais uma altura: 5 + 8 = {{13}}.",
              es: "Un ancho más un alto: 5 + 8 = {{13}}.",
            },
          },
          {
            text: {
              en: "There are two of each side, so double it: {{13}} × 2 = 26.",
              pt: "Cada lado aparece duas vezes, então dobre: {{13}} × 2 = 26.",
              es: "Cada lado aparece dos veces, así que duplica: {{13}} × 2 = 26.",
            },
          },
          { text: { en: "Perimeter = 26.", pt: "Perímetro = 26.", es: "Perímetro = 26." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateRectanglePerimeter,
    },
    {
      id: "red-2",
      beltId: "red",
      index: 2,
      degree: planeGeoDegree,
      title: { en: "Area of a rectangle", pt: "Área do retângulo", es: "Área del rectángulo" },
      summary: {
        en: "Rows times columns — how many unit squares fit inside.",
        pt: "Linhas vezes colunas — quantos quadradinhos cabem dentro.",
        es: "Filas por columnas — cuántos cuadraditos caben dentro.",
      },
      lesson: {
        intro: {
          en: "Area counts unit squares. A 7 × 9 rectangle holds 7 rows of 9 squares.",
          pt: "A área conta quadradinhos. Um retângulo 7 × 9 tem 7 fileiras de 9 quadradinhos.",
          es: "El área cuenta cuadraditos. Un rectángulo 7 × 9 tiene 7 filas de 9 cuadraditos.",
        },
        example: {
          id: "ex-red-2",
          prompt: "Area of a 7 × 9 rectangle",
          promptL10n: {
            en: "Area of a 7 × 9 rectangle",
            pt: "Área do retângulo 7 × 9",
            es: "Área del rectángulo 7 × 9",
          },
          answer: 63,
          operands: [7, 9],
        },
        diagram: { kind: "groups", groups: 7, perGroup: 9 },
        steps: [
          {
            text: {
              en: "7 rows, 9 squares in each row.",
              pt: "7 fileiras, 9 quadradinhos em cada uma.",
              es: "7 filas, 9 cuadraditos en cada una.",
            },
          },
          {
            text: {
              en: "Multiply: 7 × 9 = 63.",
              pt: "Multiplique: 7 × 9 = 63.",
              es: "Multiplica: 7 × 9 = 63.",
            },
          },
          { text: { en: "Area = 63.", pt: "Área = 63.", es: "Área = 63." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateRectangleArea,
    },
    {
      id: "red-3",
      beltId: "red",
      index: 3,
      degree: planeGeoDegree,
      title: { en: "Area of a triangle", pt: "Área do triângulo", es: "Área del triángulo" },
      summary: {
        en: "Half a rectangle: base times height, divided by 2.",
        pt: "Metade de um retângulo: base vezes altura, dividido por 2.",
        es: "La mitad de un rectángulo: base por altura, dividido entre 2.",
      },
      lesson: {
        intro: {
          en: "Every triangle is half of some rectangle. Multiply base × height, then halve it.",
          pt: "Todo triângulo é metade de algum retângulo. Multiplique base × altura, depois divida por 2.",
          es: "Todo triángulo es la mitad de algún rectángulo. Multiplica base × altura, luego divide entre 2.",
        },
        example: {
          id: "ex-red-3",
          prompt: "Triangle: base 10, height 6",
          promptL10n: {
            en: "Triangle: base 10, height 6 — area?",
            pt: "Triângulo: base 10, altura 6 — área?",
            es: "Triángulo: base 10, altura 6 — ¿área?",
          },
          answer: 30,
          operands: [10, 6],
        },
        steps: [
          {
            text: {
              en: "The full rectangle would be 10 × 6 = {{60}}.",
              pt: "O retângulo inteiro seria 10 × 6 = {{60}}.",
              es: "El rectángulo completo sería 10 × 6 = {{60}}.",
            },
          },
          {
            text: {
              en: "The triangle is half of it: {{60}} ÷ 2 = 30.",
              pt: "O triângulo é a metade: {{60}} ÷ 2 = 30.",
              es: "El triángulo es la mitad: {{60}} ÷ 2 = 30.",
            },
          },
          { text: { en: "Area = 30.", pt: "Área = 30.", es: "Área = 30." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateTriangleAreaProblem,
    },
    {
      id: "red-4",
      beltId: "red",
      index: 4,
      degree: planeGeoDegree,
      title: { en: "Area of a trapezoid", pt: "Área do trapézio", es: "Área del trapecio" },
      summary: {
        en: "Average the two bases, then multiply by the height.",
        pt: "Tire a média das duas bases, depois multiplique pela altura.",
        es: "Promedia las dos bases, luego multiplica por la altura.",
      },
      lesson: {
        intro: {
          en: "A trapezoid has a short base and a long base. Its area is the average base times the height.",
          pt: "Um trapézio tem uma base menor e uma maior. A área é a base média vezes a altura.",
          es: "Un trapecio tiene una base menor y una mayor. Su área es la base promedio por la altura.",
        },
        example: {
          id: "ex-red-4",
          prompt: "Trapezoid: bases 4 and 8, height 5",
          promptL10n: {
            en: "Trapezoid: bases 4 and 8, height 5 — area?",
            pt: "Trapézio: bases 4 e 8, altura 5 — área?",
            es: "Trapecio: bases 4 y 8, altura 5 — ¿área?",
          },
          answer: 30,
          operands: [4, 8, 5],
        },
        steps: [
          {
            text: {
              en: "Average the bases: (4 + 8) ÷ 2 = {{6}}.",
              pt: "Média das bases: (4 + 8) ÷ 2 = {{6}}.",
              es: "Promedio de las bases: (4 + 8) ÷ 2 = {{6}}.",
            },
          },
          {
            text: {
              en: "Multiply by the height: {{6}} × 5 = 30.",
              pt: "Multiplique pela altura: {{6}} × 5 = 30.",
              es: "Multiplica por la altura: {{6}} × 5 = 30.",
            },
          },
          { text: { en: "Area = 30.", pt: "Área = 30.", es: "Área = 30." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateTrapezoidArea,
    },
    {
      id: "red-5",
      beltId: "red",
      index: 5,
      degree: planeGeoDegree,
      title: {
        en: "Angles of a triangle",
        pt: "Ângulos do triângulo",
        es: "Ángulos del triángulo",
      },
      summary: {
        en: "The three angles always add up to 180°.",
        pt: "Os três ângulos sempre somam 180°.",
        es: "Los tres ángulos siempre suman 180°.",
      },
      lesson: {
        intro: {
          en: "No matter the triangle's shape, its angles total 180°. Add the two you know, subtract from 180.",
          pt: "Não importa o formato do triângulo, os ângulos somam 180°. Some os dois que você conhece e subtraia de 180.",
          es: "Sin importar la forma del triángulo, sus ángulos suman 180°. Suma los dos que conoces y resta de 180.",
        },
        example: {
          id: "ex-red-5",
          prompt: "Triangle angles: 50°, 60°, x°",
          promptL10n: {
            en: "Triangle angles: 50°, 60°, x°",
            pt: "Ângulos do triângulo: 50°, 60°, x°",
            es: "Ángulos del triángulo: 50°, 60°, x°",
          },
          answer: 70,
          operands: [50, 60],
          isEquation: true,
        },
        steps: [
          {
            text: {
              en: "Add the known angles: 50 + 60 = {{110}}.",
              pt: "Some os ângulos conhecidos: 50 + 60 = {{110}}.",
              es: "Suma los ángulos conocidos: 50 + 60 = {{110}}.",
            },
          },
          {
            text: {
              en: "Subtract from 180: 180 − {{110}} = 70.",
              pt: "Subtraia de 180: 180 − {{110}} = 70.",
              es: "Resta de 180: 180 − {{110}} = 70.",
            },
          },
          { text: { en: "x = 70°.", pt: "x = 70°.", es: "x = 70°." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateTriangleAngleSum,
    },
    {
      id: "red-6",
      beltId: "red",
      index: 6,
      degree: planeGeoDegree,
      title: {
        en: "Complementary and supplementary",
        pt: "Complementares e suplementares",
        es: "Complementarios y suplementarios",
      },
      summary: {
        en: "Pairs that complete 90° or 180°.",
        pt: "Pares que completam 90° ou 180°.",
        es: "Pares que completan 90° o 180°.",
      },
      lesson: {
        intro: {
          en: "Complementary angles complete a right angle (90°). Supplementary angles complete a straight line (180°). Subtract the known angle from the total.",
          pt: "Ângulos complementares completam um ângulo reto (90°). Suplementares completam uma linha reta (180°). Subtraia o ângulo conhecido do total.",
          es: "Los ángulos complementarios completan un ángulo recto (90°). Los suplementarios completan una línea recta (180°). Resta el ángulo conocido del total.",
        },
        example: {
          id: "ex-red-6",
          prompt: "x + 120° = 180°",
          answer: 60,
          operands: [120, 180],
          isEquation: true,
        },
        steps: [
          {
            text: {
              en: "The two angles form a straight line: 180° total.",
              pt: "Os dois ângulos formam uma linha reta: 180° no total.",
              es: "Los dos ángulos forman una línea recta: 180° en total.",
            },
          },
          {
            text: {
              en: "Subtract the known one: 180 − 120 = 60.",
              pt: "Subtraia o conhecido: 180 − 120 = 60.",
              es: "Resta el conocido: 180 − 120 = 60.",
            },
          },
          { text: { en: "x = 60°.", pt: "x = 60°.", es: "x = 60°." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateComplementSupplement,
    },
    {
      id: "red-7",
      beltId: "red",
      index: 7,
      degree: planeGeoDegree,
      title: {
        en: "Pythagoras: the hypotenuse",
        pt: "Pitágoras: a hipotenusa",
        es: "Pitágoras: la hipotenusa",
      },
      summary: {
        en: "Legs squared, added, then square-rooted.",
        pt: "Catetos ao quadrado, somados, depois a raiz.",
        es: "Catetos al cuadrado, sumados, luego la raíz.",
      },
      lesson: {
        intro: {
          en: "In a right triangle, a² + b² = c². Square both legs, add, and take the square root to get the hypotenuse.",
          pt: "No triângulo retângulo, a² + b² = c². Eleve os catetos ao quadrado, some, e tire a raiz para achar a hipotenusa.",
          es: "En el triángulo rectángulo, a² + b² = c². Eleva los catetos al cuadrado, suma, y saca la raíz para hallar la hipotenusa.",
        },
        example: { id: "ex-red-7", prompt: "", answer: 5, operands: [3, 4] },
        diagram: { kind: "rightTriangle", a: "3", b: "4", c: "?" },
        steps: [
          {
            text: {
              en: "Square the legs: 3² = 9 and 4² = 16.",
              pt: "Eleve os catetos ao quadrado: 3² = 9 e 4² = 16.",
              es: "Eleva los catetos al cuadrado: 3² = 9 y 4² = 16.",
            },
          },
          {
            text: {
              en: "Add them: 9 + 16 = {{25}}.",
              pt: "Some: 9 + 16 = {{25}}.",
              es: "Súmalos: 9 + 16 = {{25}}.",
            },
          },
          {
            text: {
              en: "Square root: √{{25}} = 5.",
              pt: "Raiz quadrada: √{{25}} = 5.",
              es: "Raíz cuadrada: √{{25}} = 5.",
            },
          },
          { text: { en: "Hypotenuse = 5.", pt: "Hipotenusa = 5.", es: "Hipotenusa = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generatePythagoreanHypotenuse,
    },
    {
      id: "red-8",
      beltId: "red",
      index: 8,
      degree: planeGeoDegree,
      title: {
        en: "Pythagoras: a missing leg",
        pt: "Pitágoras: cateto que falta",
        es: "Pitágoras: el cateto que falta",
      },
      summary: {
        en: "Same theorem, run backwards — subtract instead of add.",
        pt: "O mesmo teorema, ao contrário — subtraia em vez de somar.",
        es: "El mismo teorema, al revés — resta en vez de sumar.",
      },
      lesson: {
        intro: {
          en: "When the hypotenuse is known, the missing leg is √(c² − b²) — square, subtract, root.",
          pt: "Quando a hipotenusa é conhecida, o cateto que falta é √(c² − b²) — eleve, subtraia, tire a raiz.",
          es: "Cuando la hipotenusa se conoce, el cateto que falta es √(c² − b²) — eleva, resta, saca la raíz.",
        },
        example: { id: "ex-red-8", prompt: "", answer: 5, operands: [12, 13] },
        diagram: { kind: "rightTriangle", a: "?", b: "12", c: "13" },
        steps: [
          {
            text: {
              en: "Square what you know: 13² = 169 and 12² = 144.",
              pt: "Eleve o que você conhece: 13² = 169 e 12² = 144.",
              es: "Eleva lo que conoces: 13² = 169 y 12² = 144.",
            },
          },
          {
            text: {
              en: "Subtract: 169 − 144 = {{25}}.",
              pt: "Subtraia: 169 − 144 = {{25}}.",
              es: "Resta: 169 − 144 = {{25}}.",
            },
          },
          {
            text: {
              en: "Square root: √{{25}} = 5.",
              pt: "Raiz quadrada: √{{25}} = 5.",
              es: "Raíz cuadrada: √{{25}} = 5.",
            },
          },
          { text: { en: "Missing leg = 5.", pt: "Cateto = 5.", es: "Cateto = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generatePythagoreanLeg,
    },
    {
      id: "red-9",
      beltId: "red",
      index: 9,
      degree: planeGeoDegree,
      title: { en: "Similar triangles", pt: "Semelhança de triângulos", es: "Semejanza de triángulos" },
      summary: {
        en: "Same shape, different size — every side scales by the same factor.",
        pt: "Mesma forma, tamanho diferente — todo lado cresce pelo mesmo fator.",
        es: "Misma forma, distinto tamaño — cada lado crece por el mismo factor.",
      },
      lesson: {
        intro: {
          en: "Find the scale factor from a pair of matching sides, then apply it to the side you want.",
          pt: "Ache o fator de escala com um par de lados correspondentes, depois aplique no lado que você quer.",
          es: "Halla el factor de escala con un par de lados correspondientes, luego aplícalo al lado que quieres.",
        },
        example: {
          id: "ex-red-9",
          prompt: "Similar triangles — 3 → 6, 5 → x",
          promptL10n: {
            en: "Similar triangles — side 3 becomes 6, side 5 becomes x",
            pt: "Triângulos semelhantes — o lado 3 vira 6, o lado 5 vira x",
            es: "Triángulos semejantes — el lado 3 pasa a 6, el lado 5 pasa a x",
          },
          answer: 10,
          operands: [3, 6, 5],
          isEquation: true,
        },
        steps: [
          {
            text: {
              en: "Scale factor: 6 ÷ 3 = {{2}}.",
              pt: "Fator de escala: 6 ÷ 3 = {{2}}.",
              es: "Factor de escala: 6 ÷ 3 = {{2}}.",
            },
          },
          {
            text: {
              en: "Apply it to the other side: 5 × {{2}} = 10.",
              pt: "Aplique no outro lado: 5 × {{2}} = 10.",
              es: "Aplícalo al otro lado: 5 × {{2}} = 10.",
            },
          },
          { text: { en: "x = 10.", pt: "x = 10.", es: "x = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateSimilarTriangles,
    },
    {
      id: "red-10",
      beltId: "red",
      index: 10,
      degree: planeGeoDegree,
      title: {
        en: "Plane geometry, all mixed",
        pt: "Geometria plana, tudo misturado",
        es: "Geometría plana, todo mezclado",
      },
      summary: {
        en: "Perimeters, areas, angles, Pythagoras and similarity — shuffled.",
        pt: "Perímetros, áreas, ângulos, Pitágoras e semelhança — embaralhados.",
        es: "Perímetros, áreas, ángulos, Pitágoras y semejanza — revueltos.",
      },
      lesson: {
        intro: {
          en: "Every plane-geometry skill can appear. Identify which formula the problem is asking for before computing.",
          pt: "Qualquer habilidade de geometria plana pode aparecer. Identifique qual fórmula o problema pede antes de calcular.",
          es: "Cualquier habilidad de geometría plana puede aparecer. Identifica qué fórmula pide el problema antes de calcular.",
        },
        example: {
          id: "ex-red-10",
          prompt: "Triangle: base 8, height 5",
          promptL10n: {
            en: "Triangle: base 8, height 5 — area?",
            pt: "Triângulo: base 8, altura 5 — área?",
            es: "Triángulo: base 8, altura 5 — ¿área?",
          },
          answer: 20,
          operands: [8, 5],
        },
        steps: [
          {
            text: {
              en: "Spot the skill: triangle area = base × height ÷ 2.",
              pt: "Identifique a habilidade: área do triângulo = base × altura ÷ 2.",
              es: "Identifica la habilidad: área del triángulo = base × altura ÷ 2.",
            },
          },
          {
            text: {
              en: "8 × 5 = {{40}}, then {{40}} ÷ 2 = 20.",
              pt: "8 × 5 = {{40}}, depois {{40}} ÷ 2 = 20.",
              es: "8 × 5 = {{40}}, luego {{40}} ÷ 2 = 20.",
            },
          },
          { text: { en: "Area = 20.", pt: "Área = 20.", es: "Área = 20." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generatePlaneGeometryMix,
    },
    {
      id: "red-11",
      beltId: "red",
      index: 1,
      degree: solidGeoDegree,
      title: { en: "Volume of a cube", pt: "Volume do cubo", es: "Volumen del cubo" },
      summary: {
        en: "Edge × edge × edge — that's why it's called cubing.",
        pt: "Aresta × aresta × aresta — por isso se chama elevar ao cubo.",
        es: "Arista × arista × arista — por eso se llama elevar al cubo.",
      },
      lesson: {
        intro: {
          en: "Volume counts unit cubes. A cube with edge 4 stacks 4 layers of 4 × 4 cubes.",
          pt: "O volume conta cubinhos. Um cubo de aresta 4 empilha 4 camadas de 4 × 4 cubinhos.",
          es: "El volumen cuenta cubitos. Un cubo de arista 4 apila 4 capas de 4 × 4 cubitos.",
        },
        example: {
          id: "ex-red-11",
          prompt: "Cube with edge 4 — volume?",
          promptL10n: {
            en: "Cube with edge 4 — volume?",
            pt: "Cubo de aresta 4 — volume?",
            es: "Cubo de arista 4 — ¿volumen?",
          },
          answer: 64,
          operands: [4],
        },
        steps: [
          {
            text: {
              en: "One layer: 4 × 4 = {{16}} cubes.",
              pt: "Uma camada: 4 × 4 = {{16}} cubinhos.",
              es: "Una capa: 4 × 4 = {{16}} cubitos.",
            },
          },
          {
            text: {
              en: "4 layers: {{16}} × 4 = 64.",
              pt: "4 camadas: {{16}} × 4 = 64.",
              es: "4 capas: {{16}} × 4 = 64.",
            },
          },
          { text: { en: "Volume = 4³ = 64.", pt: "Volume = 4³ = 64.", es: "Volumen = 4³ = 64." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateCubeVolume,
    },
    {
      id: "red-12",
      beltId: "red",
      index: 2,
      degree: solidGeoDegree,
      title: { en: "Volume of a box", pt: "Volume do bloco", es: "Volumen de la caja" },
      summary: {
        en: "Length × width × height.",
        pt: "Comprimento × largura × altura.",
        es: "Largo × ancho × alto.",
      },
      lesson: {
        intro: {
          en: "A rectangular box works like the cube, but each direction has its own size. Multiply the three.",
          pt: "Um bloco retangular funciona como o cubo, mas cada direção tem seu tamanho. Multiplique os três.",
          es: "Una caja rectangular funciona como el cubo, pero cada dirección tiene su tamaño. Multiplica los tres.",
        },
        example: {
          id: "ex-red-12",
          prompt: "Box 3 × 4 × 5 — volume?",
          promptL10n: {
            en: "Box 3 × 4 × 5 — volume?",
            pt: "Bloco 3 × 4 × 5 — volume?",
            es: "Caja 3 × 4 × 5 — ¿volumen?",
          },
          answer: 60,
          operands: [3, 4, 5],
        },
        steps: [
          {
            text: {
              en: "Base layer: 3 × 4 = {{12}} cubes.",
              pt: "Camada da base: 3 × 4 = {{12}} cubinhos.",
              es: "Capa de la base: 3 × 4 = {{12}} cubitos.",
            },
          },
          {
            text: {
              en: "5 layers tall: {{12}} × 5 = 60.",
              pt: "5 camadas de altura: {{12}} × 5 = 60.",
              es: "5 capas de alto: {{12}} × 5 = 60.",
            },
          },
          { text: { en: "Volume = 60.", pt: "Volume = 60.", es: "Volumen = 60." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateBoxVolume,
    },
    {
      id: "red-13",
      beltId: "red",
      index: 3,
      degree: solidGeoDegree,
      title: {
        en: "Surface area of a cube",
        pt: "Área total do cubo",
        es: "Área total del cubo",
      },
      summary: {
        en: "Six identical square faces.",
        pt: "Seis faces quadradas idênticas.",
        es: "Seis caras cuadradas idénticas.",
      },
      lesson: {
        intro: {
          en: "Unfold a cube and you get 6 equal squares. Find one face's area, then take it six times.",
          pt: "Desmonte um cubo e você tem 6 quadrados iguais. Ache a área de uma face e multiplique por seis.",
          es: "Desarma un cubo y tienes 6 cuadrados iguales. Halla el área de una cara y multiplícala por seis.",
        },
        example: {
          id: "ex-red-13",
          prompt: "Cube with edge 4 — surface area?",
          promptL10n: {
            en: "Cube with edge 4 — surface area?",
            pt: "Cubo de aresta 4 — área total?",
            es: "Cubo de arista 4 — ¿área total?",
          },
          answer: 96,
          operands: [4],
        },
        steps: [
          {
            text: {
              en: "One face: 4² = {{16}}.",
              pt: "Uma face: 4² = {{16}}.",
              es: "Una cara: 4² = {{16}}.",
            },
          },
          {
            text: {
              en: "Six faces: {{16}} × 6 = 96.",
              pt: "Seis faces: {{16}} × 6 = 96.",
              es: "Seis caras: {{16}} × 6 = 96.",
            },
          },
          { text: { en: "Surface area = 96.", pt: "Área total = 96.", es: "Área total = 96." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateCubeSurface,
    },
    {
      id: "red-14",
      beltId: "red",
      index: 4,
      degree: solidGeoDegree,
      title: { en: "Volume of a cylinder", pt: "Volume do cilindro", es: "Volumen del cilindro" },
      summary: {
        en: "Circle area times height — with π = 22/7 everything cancels.",
        pt: "Área do círculo vezes altura — com π = 22/7 tudo se cancela.",
        es: "Área del círculo por la altura — con π = 22/7 todo se cancela.",
      },
      lesson: {
        intro: {
          en: "V = π r² h. With r = 7 and π = 22/7, the circle's area is 22/7 × 49 = 154 — then just multiply by the height.",
          pt: "V = π r² h. Com r = 7 e π = 22/7, a área do círculo é 22/7 × 49 = 154 — depois é só multiplicar pela altura.",
          es: "V = π r² h. Con r = 7 y π = 22/7, el área del círculo es 22/7 × 49 = 154 — luego solo multiplica por la altura.",
        },
        example: {
          id: "ex-red-14",
          prompt: "Cylinder: r = 7, h = 5 (π = 22/7) — volume?",
          promptL10n: {
            en: "Cylinder: r = 7, h = 5 (π = 22/7) — volume?",
            pt: "Cilindro: r = 7, h = 5 (π = 22/7) — volume?",
            es: "Cilindro: r = 7, h = 5 (π = 22/7) — ¿volumen?",
          },
          answer: 770,
          operands: [7, 5],
        },
        steps: [
          {
            text: {
              en: "Circle area: 22/7 × 7² = 22 × 7 = {{154}}.",
              pt: "Área do círculo: 22/7 × 7² = 22 × 7 = {{154}}.",
              es: "Área del círculo: 22/7 × 7² = 22 × 7 = {{154}}.",
            },
          },
          {
            text: {
              en: "Times the height: {{154}} × 5 = 770.",
              pt: "Vezes a altura: {{154}} × 5 = 770.",
              es: "Por la altura: {{154}} × 5 = 770.",
            },
          },
          { text: { en: "Volume = 770.", pt: "Volume = 770.", es: "Volumen = 770." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateCylinderVolume,
    },
    {
      id: "red-15",
      beltId: "red",
      index: 5,
      degree: solidGeoDegree,
      title: { en: "Volume of a cone", pt: "Volume do cone", es: "Volumen del cono" },
      summary: {
        en: "A third of the cylinder that wraps it.",
        pt: "Um terço do cilindro que o envolve.",
        es: "Un tercio del cilindro que lo envuelve.",
      },
      lesson: {
        intro: {
          en: "A cone fills exactly one third of the matching cylinder: V = π r² h ÷ 3.",
          pt: "Um cone enche exatamente um terço do cilindro correspondente: V = π r² h ÷ 3.",
          es: "Un cono llena exactamente un tercio del cilindro correspondiente: V = π r² h ÷ 3.",
        },
        example: {
          id: "ex-red-15",
          prompt: "Cone: r = 7, h = 6 (π = 22/7) — volume?",
          promptL10n: {
            en: "Cone: r = 7, h = 6 (π = 22/7) — volume?",
            pt: "Cone: r = 7, h = 6 (π = 22/7) — volume?",
            es: "Cono: r = 7, h = 6 (π = 22/7) — ¿volumen?",
          },
          answer: 308,
          operands: [7, 6],
        },
        steps: [
          {
            text: {
              en: "The full cylinder: 154 × 6 = {{924}}.",
              pt: "O cilindro inteiro: 154 × 6 = {{924}}.",
              es: "El cilindro completo: 154 × 6 = {{924}}.",
            },
          },
          {
            text: {
              en: "The cone is a third: {{924}} ÷ 3 = 308.",
              pt: "O cone é um terço: {{924}} ÷ 3 = 308.",
              es: "El cono es un tercio: {{924}} ÷ 3 = 308.",
            },
          },
          { text: { en: "Volume = 308.", pt: "Volume = 308.", es: "Volumen = 308." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateConeVolume,
    },
    {
      id: "red-16",
      beltId: "red",
      index: 6,
      degree: solidGeoDegree,
      title: { en: "Volume of a pyramid", pt: "Volume da pirâmide", es: "Volumen de la pirámide" },
      summary: {
        en: "A third of the box over the same base.",
        pt: "Um terço do bloco sobre a mesma base.",
        es: "Un tercio de la caja sobre la misma base.",
      },
      lesson: {
        intro: {
          en: "Like the cone, a pyramid fills a third of its box: V = base area × height ÷ 3.",
          pt: "Como o cone, a pirâmide enche um terço do seu bloco: V = área da base × altura ÷ 3.",
          es: "Como el cono, la pirámide llena un tercio de su caja: V = área de la base × altura ÷ 3.",
        },
        example: {
          id: "ex-red-16",
          prompt: "Pyramid: base 5 × 6, height 9 — volume?",
          promptL10n: {
            en: "Pyramid: base 5 × 6, height 9 — volume?",
            pt: "Pirâmide: base 5 × 6, altura 9 — volume?",
            es: "Pirámide: base 5 × 6, altura 9 — ¿volumen?",
          },
          answer: 90,
          operands: [5, 6, 9],
        },
        steps: [
          {
            text: {
              en: "Base area: 5 × 6 = {{30}}.",
              pt: "Área da base: 5 × 6 = {{30}}.",
              es: "Área de la base: 5 × 6 = {{30}}.",
            },
          },
          {
            text: {
              en: "Box volume: {{30}} × 9 = 270. Pyramid: 270 ÷ 3 = 90.",
              pt: "Volume do bloco: {{30}} × 9 = 270. Pirâmide: 270 ÷ 3 = 90.",
              es: "Volumen de la caja: {{30}} × 9 = 270. Pirámide: 270 ÷ 3 = 90.",
            },
          },
          { text: { en: "Volume = 90.", pt: "Volume = 90.", es: "Volumen = 90." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generatePyramidVolume,
    },
    {
      id: "red-17",
      beltId: "red",
      index: 7,
      degree: solidGeoDegree,
      title: {
        en: "Solid geometry, all mixed",
        pt: "Geometria espacial, tudo misturado",
        es: "Geometría del espacio, todo mezclado",
      },
      summary: {
        en: "Cubes, boxes, cylinders, cones and pyramids — shuffled.",
        pt: "Cubos, blocos, cilindros, cones e pirâmides — embaralhados.",
        es: "Cubos, cajas, cilindros, conos y pirámides — revueltos.",
      },
      lesson: {
        intro: {
          en: "Every solid can appear. Read which shape it is, recall its formula, then compute.",
          pt: "Qualquer sólido pode aparecer. Leia qual é a forma, lembre a fórmula, depois calcule.",
          es: "Cualquier sólido puede aparecer. Lee cuál es la forma, recuerda su fórmula, luego calcula.",
        },
        example: {
          id: "ex-red-17",
          prompt: "Cube with edge 3 — volume?",
          promptL10n: {
            en: "Cube with edge 3 — volume?",
            pt: "Cubo de aresta 3 — volume?",
            es: "Cubo de arista 3 — ¿volumen?",
          },
          answer: 27,
          operands: [3],
        },
        steps: [
          {
            text: {
              en: "Spot the solid: a cube, so volume = edge³.",
              pt: "Identifique o sólido: um cubo, então volume = aresta³.",
              es: "Identifica el sólido: un cubo, así que volumen = arista³.",
            },
          },
          {
            text: {
              en: "3³ = 3 × 3 × 3 = 27.",
              pt: "3³ = 3 × 3 × 3 = 27.",
              es: "3³ = 3 × 3 × 3 = 27.",
            },
          },
          { text: { en: "Volume = 27.", pt: "Volume = 27.", es: "Volumen = 27." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateSolidGeometryMix,
    },
    {
      id: "red-18",
      beltId: "red",
      index: 1,
      degree: trigDegree,
      title: { en: "What sine means", pt: "O que significa o seno", es: "Qué significa el seno" },
      summary: {
        en: "Opposite side over hypotenuse — read it off the triangle.",
        pt: "Cateto oposto sobre hipotenusa — leia direto do triângulo.",
        es: "Cateto opuesto sobre hipotenusa — léelo del triángulo.",
      },
      lesson: {
        intro: {
          en: "For the angle θ, sine compares the side across from θ with the hypotenuse: sin θ = opposite / hypotenuse.",
          pt: "Para o ângulo θ, o seno compara o lado oposto a θ com a hipotenusa: sen θ = cateto oposto / hipotenusa.",
          es: "Para el ángulo θ, el seno compara el lado opuesto a θ con la hipotenusa: sen θ = cateto opuesto / hipotenusa.",
        },
        example: {
          id: "ex-red-18",
          prompt: "sin θ = ?",
          promptL10n: { en: "sin θ = ?", pt: "sen θ = ?", es: "sen θ = ?" },
          answer: 3,
          secondaryAnswer: 5,
          secondaryFormat: "fraction",
          operands: [3, 4, 5],
        },
        diagram: { kind: "rightTriangle", a: "3", b: "4", c: "5", theta: true },
        steps: [
          {
            text: {
              en: "θ sits at the bottom-right — the side across from it is 3.",
              pt: "θ fica embaixo à direita — o lado oposto a ele é 3.",
              es: "θ está abajo a la derecha — el lado opuesto a él es 3.",
            },
          },
          {
            text: {
              en: "The hypotenuse (the slanted side) is 5.",
              pt: "A hipotenusa (o lado inclinado) é 5.",
              es: "La hipotenusa (el lado inclinado) es 5.",
            },
          },
          { text: { en: "sin θ = 3/5.", pt: "sen θ = 3/5.", es: "sen θ = 3/5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateSinRatio,
    },
    {
      id: "red-19",
      beltId: "red",
      index: 2,
      degree: trigDegree,
      title: { en: "What cosine means", pt: "O que significa o cosseno", es: "Qué significa el coseno" },
      summary: {
        en: "Adjacent side over hypotenuse.",
        pt: "Cateto adjacente sobre hipotenusa.",
        es: "Cateto adyacente sobre hipotenusa.",
      },
      lesson: {
        intro: {
          en: "Cosine uses the side touching θ (not the hypotenuse): cos θ = adjacent / hypotenuse.",
          pt: "O cosseno usa o lado que encosta em θ (sem ser a hipotenusa): cos θ = cateto adjacente / hipotenusa.",
          es: "El coseno usa el lado que toca a θ (sin ser la hipotenusa): cos θ = cateto adyacente / hipotenusa.",
        },
        example: {
          id: "ex-red-19",
          prompt: "cos θ = ?",
          answer: 4,
          secondaryAnswer: 5,
          secondaryFormat: "fraction",
          operands: [3, 4, 5],
        },
        diagram: { kind: "rightTriangle", a: "3", b: "4", c: "5", theta: true },
        steps: [
          {
            text: {
              en: "The side touching θ along the bottom is 4.",
              pt: "O lado que encosta em θ na base é 4.",
              es: "El lado que toca a θ en la base es 4.",
            },
          },
          {
            text: {
              en: "The hypotenuse is 5.",
              pt: "A hipotenusa é 5.",
              es: "La hipotenusa es 5.",
            },
          },
          { text: { en: "cos θ = 4/5.", pt: "cos θ = 4/5.", es: "cos θ = 4/5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateCosRatio,
    },
    {
      id: "red-20",
      beltId: "red",
      index: 3,
      degree: trigDegree,
      title: { en: "What tangent means", pt: "O que significa a tangente", es: "Qué significa la tangente" },
      summary: {
        en: "Opposite over adjacent — no hypotenuse involved.",
        pt: "Oposto sobre adjacente — sem usar a hipotenusa.",
        es: "Opuesto sobre adyacente — sin usar la hipotenusa.",
      },
      lesson: {
        intro: {
          en: "Tangent compares the two legs: tan θ = opposite / adjacent. It's also the slope you learned in Functions.",
          pt: "A tangente compara os dois catetos: tg θ = oposto / adjacente. É também a inclinação que você viu em Funções.",
          es: "La tangente compara los dos catetos: tan θ = opuesto / adyacente. Es también la pendiente que viste en Funciones.",
        },
        example: {
          id: "ex-red-20",
          prompt: "tan θ = ?",
          promptL10n: { en: "tan θ = ?", pt: "tg θ = ?", es: "tan θ = ?" },
          answer: 3,
          secondaryAnswer: 4,
          secondaryFormat: "fraction",
          operands: [3, 4, 5],
        },
        diagram: { kind: "rightTriangle", a: "3", b: "4", c: "5", theta: true },
        steps: [
          {
            text: {
              en: "Opposite side: 3. Adjacent side: 4.",
              pt: "Cateto oposto: 3. Cateto adjacente: 4.",
              es: "Cateto opuesto: 3. Cateto adyacente: 4.",
            },
          },
          {
            text: {
              en: "Divide them: tan θ = 3/4.",
              pt: "Divida: tg θ = 3/4.",
              es: "Divídelos: tan θ = 3/4.",
            },
          },
          { text: { en: "tan θ = 3/4.", pt: "tg θ = 3/4.", es: "tan θ = 3/4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateTanRatio,
    },
    {
      id: "red-21",
      beltId: "red",
      index: 4,
      degree: trigDegree,
      title: { en: "The special angles", pt: "Os ângulos notáveis", es: "Los ángulos notables" },
      summary: {
        en: "sin 30° = 1/2, tan 45° = 1, sin 90° = 1 — values worth knowing cold.",
        pt: "sen 30° = 1/2, tg 45° = 1, sen 90° = 1 — valores para saber de cor.",
        es: "sen 30° = 1/2, tan 45° = 1, sen 90° = 1 — valores para saberse de memoria.",
      },
      lesson: {
        intro: {
          en: "A few angles have exact, simple values: sin 30° = cos 60° = 1/2, tan 45° = 1, sin 90° = cos 0° = 1. Multiply them by the number given.",
          pt: "Alguns ângulos têm valores exatos e simples: sen 30° = cos 60° = 1/2, tg 45° = 1, sen 90° = cos 0° = 1. Multiplique pelo número dado.",
          es: "Algunos ángulos tienen valores exactos y simples: sen 30° = cos 60° = 1/2, tan 45° = 1, sen 90° = cos 0° = 1. Multiplícalos por el número dado.",
        },
        example: {
          id: "ex-red-21",
          prompt: "8 · sin 30°",
          promptL10n: { en: "8 · sin 30°", pt: "8 · sen 30°", es: "8 · sen 30°" },
          answer: 4,
          operands: [8, 30],
        },
        steps: [
          {
            text: {
              en: "Recall the value: sin 30° = {{1/2}}.",
              pt: "Lembre o valor: sen 30° = {{1/2}}.",
              es: "Recuerda el valor: sen 30° = {{1/2}}.",
            },
          },
          {
            text: {
              en: "Multiply: 8 × {{1/2}} = 4.",
              pt: "Multiplique: 8 × {{1/2}} = 4.",
              es: "Multiplica: 8 × {{1/2}} = 4.",
            },
          },
          { text: { en: "8 · sin 30° = 4.", pt: "8 · sen 30° = 4.", es: "8 · sen 30° = 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateSpecialAngles,
    },
    {
      id: "red-22",
      beltId: "red",
      index: 5,
      degree: trigDegree,
      title: { en: "From sine to cosine", pt: "Do seno ao cosseno", es: "Del seno al coseno" },
      summary: {
        en: "Recognize the hidden triple and read off the other leg.",
        pt: "Reconheça a terna escondida e leia o outro cateto.",
        es: "Reconoce la terna escondida y lee el otro cateto.",
      },
      lesson: {
        intro: {
          en: "sin θ = 3/5 hides a 3-4-5 triangle: opposite 3, hypotenuse 5, so the adjacent leg is 4 — and cos θ = 4/5.",
          pt: "sen θ = 3/5 esconde um triângulo 3-4-5: oposto 3, hipotenusa 5, então o cateto adjacente é 4 — e cos θ = 4/5.",
          es: "sen θ = 3/5 esconde un triángulo 3-4-5: opuesto 3, hipotenusa 5, así que el cateto adyacente es 4 — y cos θ = 4/5.",
        },
        example: {
          id: "ex-red-22",
          prompt: "sin θ = 3/5 — cos θ?",
          promptL10n: {
            en: "sin θ = 3/5 (acute θ) — cos θ?",
            pt: "sen θ = 3/5 (θ agudo) — cos θ?",
            es: "sen θ = 3/5 (θ agudo) — ¿cos θ?",
          },
          answer: 4,
          secondaryAnswer: 5,
          secondaryFormat: "fraction",
          operands: [3, 5],
        },
        steps: [
          {
            text: {
              en: "Opposite 3, hypotenuse 5 — find the missing leg with Pythagoras: √(25 − 9) = {{4}}.",
              pt: "Oposto 3, hipotenusa 5 — ache o cateto que falta com Pitágoras: √(25 − 9) = {{4}}.",
              es: "Opuesto 3, hipotenusa 5 — halla el cateto que falta con Pitágoras: √(25 − 9) = {{4}}.",
            },
          },
          {
            text: {
              en: "Cosine is that leg over the hypotenuse: {{4}}/5.",
              pt: "O cosseno é esse cateto sobre a hipotenusa: {{4}}/5.",
              es: "El coseno es ese cateto sobre la hipotenusa: {{4}}/5.",
            },
          },
          { text: { en: "cos θ = 4/5.", pt: "cos θ = 4/5.", es: "cos θ = 4/5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateCosFromSin,
    },
    {
      id: "red-23",
      beltId: "red",
      index: 6,
      degree: trigDegree,
      title: {
        en: "Finding a side with trig",
        pt: "Achando um lado com trigonometria",
        es: "Hallando un lado con trigonometría",
      },
      summary: {
        en: "The ratio plus one real side reveals the others.",
        pt: "A razão mais um lado real revela os outros.",
        es: "La razón más un lado real revela los demás.",
      },
      lesson: {
        intro: {
          en: "sin θ = 3/5 means: every 5 units of hypotenuse give 3 of opposite. Scale by the real hypotenuse.",
          pt: "sen θ = 3/5 significa: a cada 5 unidades de hipotenusa, 3 de cateto oposto. Escale pela hipotenusa real.",
          es: "sen θ = 3/5 significa: cada 5 unidades de hipotenusa dan 3 de cateto opuesto. Escala por la hipotenusa real.",
        },
        example: {
          id: "ex-red-23",
          prompt: "sin θ = 3/5, hyp = 20",
          promptL10n: {
            en: "sin θ = 3/5, hypotenuse 20 — opposite side?",
            pt: "sen θ = 3/5, hipotenusa 20 — cateto oposto?",
            es: "sen θ = 3/5, hipotenusa 20 — ¿cateto opuesto?",
          },
          answer: 12,
          operands: [3, 5, 20],
        },
        steps: [
          {
            text: {
              en: "The real hypotenuse is 20 — that's 5 × {{4}}.",
              pt: "A hipotenusa real é 20 — isso é 5 × {{4}}.",
              es: "La hipotenusa real es 20 — eso es 5 × {{4}}.",
            },
          },
          {
            text: {
              en: "Scale the opposite the same way: 3 × {{4}} = 12.",
              pt: "Escale o oposto do mesmo jeito: 3 × {{4}} = 12.",
              es: "Escala el opuesto igual: 3 × {{4}} = 12.",
            },
          },
          { text: { en: "Opposite side = 12.", pt: "Cateto oposto = 12.", es: "Cateto opuesto = 12." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateSideFromRatio,
    },
    {
      id: "red-24",
      beltId: "red",
      index: 7,
      degree: trigDegree,
      title: { en: "Radians and degrees", pt: "Radianos e graus", es: "Radianes y grados" },
      summary: {
        en: "π radians is half a turn: 180°.",
        pt: "π radianos é meia volta: 180°.",
        es: "π radianes es media vuelta: 180°.",
      },
      lesson: {
        intro: {
          en: "The key fact: π rad = 180°. Any slice of π converts by dividing 180 the same way.",
          pt: "O fato-chave: π rad = 180°. Qualquer fração de π converte dividindo 180 do mesmo jeito.",
          es: "El dato clave: π rad = 180°. Cualquier fracción de π se convierte dividiendo 180 igual.",
        },
        example: {
          id: "ex-red-24",
          prompt: "π/3 rad → °",
          promptL10n: { en: "π/3 rad in degrees", pt: "π/3 rad em graus", es: "π/3 rad en grados" },
          answer: 60,
          operands: [60],
        },
        steps: [
          {
            text: {
              en: "π rad = {{180}}°.",
              pt: "π rad = {{180}}°.",
              es: "π rad = {{180}}°.",
            },
          },
          {
            text: {
              en: "A third of it: {{180}} ÷ 3 = 60.",
              pt: "Um terço disso: {{180}} ÷ 3 = 60.",
              es: "Un tercio de eso: {{180}} ÷ 3 = 60.",
            },
          },
          { text: { en: "π/3 = 60°.", pt: "π/3 = 60°.", es: "π/3 = 60°." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateRadiansToDegrees,
    },
    {
      id: "red-25",
      beltId: "red",
      index: 8,
      degree: trigDegree,
      title: {
        en: "Back to the first quadrant",
        pt: "De volta ao 1º quadrante",
        es: "De vuelta al primer cuadrante",
      },
      summary: {
        en: "Every angle mirrors an acute one — find it.",
        pt: "Todo ângulo espelha um agudo — encontre-o.",
        es: "Todo ángulo refleja uno agudo — encuéntralo.",
      },
      lesson: {
        intro: {
          en: "Measure how far the angle sits from the horizontal axis (180° or 360°). That distance is its acute mirror — the reference angle.",
          pt: "Meça a distância do ângulo até o eixo horizontal (180° ou 360°). Essa distância é o espelho agudo dele — o ângulo de referência.",
          es: "Mide la distancia del ángulo al eje horizontal (180° o 360°). Esa distancia es su espejo agudo — el ángulo de referencia.",
        },
        example: {
          id: "ex-red-25",
          prompt: "150° → 1º quadrant",
          promptL10n: {
            en: "150° reduced to the first quadrant",
            pt: "150° reduzido ao 1º quadrante",
            es: "150° reducido al primer cuadrante",
          },
          answer: 30,
          operands: [150],
        },
        steps: [
          {
            text: {
              en: "150° lives in the second quadrant, close to 180°.",
              pt: "150° fica no segundo quadrante, perto de 180°.",
              es: "150° está en el segundo cuadrante, cerca de 180°.",
            },
          },
          {
            text: {
              en: "Distance to 180°: 180 − 150 = {{30}}.",
              pt: "Distância até 180°: 180 − 150 = {{30}}.",
              es: "Distancia a 180°: 180 − 150 = {{30}}.",
            },
          },
          { text: { en: "Reference angle = 30°.", pt: "Ângulo de referência = 30°.", es: "Ángulo de referencia = 30°." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateReferenceAngle,
    },
    {
      id: "red-26",
      beltId: "red",
      index: 9,
      degree: trigDegree,
      title: {
        en: "Trigonometry, all mixed",
        pt: "Trigonometria, tudo misturado",
        es: "Trigonometría, todo mezclado",
      },
      summary: {
        en: "Ratios, special angles, radians and references — shuffled.",
        pt: "Razões, ângulos notáveis, radianos e referências — embaralhados.",
        es: "Razones, ángulos notables, radianes y referencias — revueltos.",
      },
      lesson: {
        intro: {
          en: "Every trig skill can appear. Check first whether you're reading a triangle, recalling a value, or converting.",
          pt: "Qualquer habilidade de trigonometria pode aparecer. Veja primeiro se você está lendo um triângulo, lembrando um valor ou convertendo.",
          es: "Cualquier habilidad de trigonometría puede aparecer. Mira primero si estás leyendo un triángulo, recordando un valor o convirtiendo.",
        },
        example: {
          id: "ex-red-26",
          prompt: "10 · tan 45°",
          promptL10n: { en: "10 · tan 45°", pt: "10 · tg 45°", es: "10 · tan 45°" },
          answer: 10,
          operands: [10, 45],
        },
        steps: [
          {
            text: {
              en: "Recall the value: tan 45° = {{1}}.",
              pt: "Lembre o valor: tg 45° = {{1}}.",
              es: "Recuerda el valor: tan 45° = {{1}}.",
            },
          },
          {
            text: {
              en: "Multiply: 10 × {{1}} = 10.",
              pt: "Multiplique: 10 × {{1}} = 10.",
              es: "Multiplica: 10 × {{1}} = 10.",
            },
          },
          { text: { en: "10 · tan 45° = 10.", pt: "10 · tg 45° = 10.", es: "10 · tan 45° = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateTrigMix,
    },
    {
      id: "red-27",
      beltId: "red",
      index: 1,
      degree: redExamDegree,
      title: {
        en: "Red Belt exam: everything mixed",
        pt: "Prova da Faixa Vermelha: tudo misturado",
        es: "Examen del Cinturón Rojo: todo mezclado",
      },
      summary: {
        en: "Plane geometry, solids and trig in one final gauntlet.",
        pt: "Geometria plana, sólidos e trigonometria numa prova final.",
        es: "Geometría plana, sólidos y trigonometría en una prueba final.",
      },
      lesson: {
        intro: {
          en: "The whole belt in one drill: areas, angles, Pythagoras, volumes and trig ratios. Identify the skill, recall the tool, execute.",
          pt: "A faixa inteira num treino só: áreas, ângulos, Pitágoras, volumes e razões trigonométricas. Identifique a habilidade, lembre a ferramenta, execute.",
          es: "Todo el cinturón en un solo entrenamiento: áreas, ángulos, Pitágoras, volúmenes y razones trigonométricas. Identifica la habilidad, recuerda la herramienta, ejecuta.",
        },
        example: { id: "ex-red-27", prompt: "", answer: 10, operands: [6, 8] },
        diagram: { kind: "rightTriangle", a: "6", b: "8", c: "?" },
        steps: [
          {
            text: {
              en: "Spot the skill: two legs known, hypotenuse missing — Pythagoras.",
              pt: "Identifique a habilidade: dois catetos conhecidos, falta a hipotenusa — Pitágoras.",
              es: "Identifica la habilidad: dos catetos conocidos, falta la hipotenusa — Pitágoras.",
            },
          },
          {
            text: {
              en: "6² + 8² = 36 + 64 = {{100}}, and √{{100}} = 10.",
              pt: "6² + 8² = 36 + 64 = {{100}}, e √{{100}} = 10.",
              es: "6² + 8² = 36 + 64 = {{100}}, y √{{100}} = 10.",
            },
          },
          { text: { en: "Hypotenuse = 10.", pt: "Hipotenusa = 10.", es: "Hipotenusa = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateRedBeltMix,
    },
  ],
};

const logsDegree = {
  index: 1,
  name: { en: "Logs & Exponentials", pt: "Logaritmos e Exponenciais", es: "Logaritmos y Exponenciales" } as LocalizedText,
};

const sequencesDegree = {
  index: 2,
  name: { en: "Sequences", pt: "Sequências (PA e PG)", es: "Sucesiones" } as LocalizedText,
};

const countingDegree = {
  index: 3,
  name: { en: "Counting & Probability", pt: "Combinatória e Probabilidade", es: "Conteo y Probabilidad" } as LocalizedText,
};

const matricesDegree = {
  index: 4,
  name: { en: "Matrices & Systems", pt: "Matrizes e Sistemas", es: "Matrices y Sistemas" } as LocalizedText,
};

const polynomialsDegree = {
  index: 5,
  name: { en: "Polynomials & Complex Numbers", pt: "Polinômios e Números Complexos", es: "Polinomios y Números Complejos" } as LocalizedText,
};

const analyticDegree = {
  index: 6,
  name: { en: "Analytic Geometry", pt: "Geometria Analítica", es: "Geometría Analítica" } as LocalizedText,
};

const goldExamDegree = {
  index: 7,
  name: { en: "Belt Exam", pt: "Prova da Faixa", es: "Examen del Cinturón" } as LocalizedText,
};

const goldBelt: Belt = {
  id: "gold",
  name: { en: "Gold Belt", pt: "Faixa Dourada", es: "Cinturón Dorado" },
  order: 8,
  operationLabel: {
    en: "Logs · Sequences · Probability · Matrices · Complex · Analytic",
    pt: "Logs · Sequências · Probabilidade · Matrizes · Complexos · Analítica",
    es: "Logs · Sucesiones · Probabilidad · Matrices · Complejos · Analítica",
  },
  colorVar: "--belt-gold",
  tagline: {
    en: "The entrance-exam arsenal — everything the hardest tests love to ask.",
    pt: "O arsenal do vestibular — tudo o que as provas mais difíceis adoram cobrar.",
    es: "El arsenal del examen de admisión — todo lo que las pruebas más difíciles preguntan.",
  },
  stripes: [
    {
      id: "gold-1",
      beltId: "gold",
      index: 1,
      degree: logsDegree,
      title: { en: "Negative exponents", pt: "Expoentes negativos", es: "Exponentes negativos" },
      summary: {
        en: "A minus in the exponent flips the power into a fraction.",
        pt: "Um menos no expoente vira a potência de cabeça para baixo.",
        es: "Un menos en el exponente voltea la potencia en una fracción.",
      },
      lesson: {
        intro: {
          en: "b⁻ⁿ means 1/bⁿ. Compute the positive power first, then put 1 over it.",
          pt: "b⁻ⁿ significa 1/bⁿ. Calcule a potência positiva primeiro, depois ponha 1 em cima.",
          es: "b⁻ⁿ significa 1/bⁿ. Calcula la potencia positiva primero, luego pon 1 encima.",
        },
        example: {
          id: "ex-gold-1",
          prompt: "2⁻²",
          answer: 1,
          secondaryAnswer: 4,
          secondaryFormat: "fraction",
          operands: [2, 2],
        },
        steps: [
          {
            text: {
              en: "The positive power: 2² = {{4}}.",
              pt: "A potência positiva: 2² = {{4}}.",
              es: "La potencia positiva: 2² = {{4}}.",
            },
          },
          {
            text: {
              en: "The minus flips it: 1/{{4}}.",
              pt: "O menos inverte: 1/{{4}}.",
              es: "El menos la invierte: 1/{{4}}.",
            },
          },
          { text: { en: "2⁻² = 1/4.", pt: "2⁻² = 1/4.", es: "2⁻² = 1/4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateNegativeExponent,
    },
    {
      id: "gold-2",
      beltId: "gold",
      index: 2,
      degree: logsDegree,
      title: { en: "Exponential equations", pt: "Equações exponenciais", es: "Ecuaciones exponenciales" },
      summary: {
        en: "Recognize the power: 2ˣ = 32 asks which power of 2 gives 32.",
        pt: "Reconheça a potência: 2ˣ = 32 pergunta qual potência de 2 dá 32.",
        es: "Reconoce la potencia: 2ˣ = 32 pregunta qué potencia de 2 da 32.",
      },
      lesson: {
        intro: {
          en: "Walk up the powers of the base until you land on the target — the number of steps is x.",
          pt: "Suba pelas potências da base até chegar no alvo — o número de passos é o x.",
          es: "Sube por las potencias de la base hasta llegar al objetivo — el número de pasos es x.",
        },
        example: { id: "ex-gold-2", prompt: "2ˣ = 32", answer: 5, operands: [2, 32], isEquation: true },
        steps: [
          {
            text: {
              en: "Powers of 2: 2, 4, 8, 16, {{32}}.",
              pt: "Potências de 2: 2, 4, 8, 16, {{32}}.",
              es: "Potencias de 2: 2, 4, 8, 16, {{32}}.",
            },
          },
          {
            text: {
              en: "{{32}} is the 5th power: 2⁵ = 32.",
              pt: "{{32}} é a 5ª potência: 2⁵ = 32.",
              es: "{{32}} es la 5ª potencia: 2⁵ = 32.",
            },
          },
          { text: { en: "x = 5.", pt: "x = 5.", es: "x = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateSolveExponential,
    },
    {
      id: "gold-3",
      beltId: "gold",
      index: 3,
      degree: logsDegree,
      title: { en: "What a log means", pt: "O que significa um logaritmo", es: "Qué significa un logaritmo" },
      summary: {
        en: "log₂ 8 asks: 2 to what power gives 8?",
        pt: "log₂ 8 pergunta: 2 elevado a quanto dá 8?",
        es: "log₂ 8 pregunta: ¿2 elevado a qué da 8?",
      },
      lesson: {
        intro: {
          en: "A logarithm is an exponent hunt. log_b n is the power you raise b to in order to reach n.",
          pt: "Um logaritmo é uma caça ao expoente. log_b n é a potência que eleva b até chegar em n.",
          es: "Un logaritmo es una búsqueda del exponente. log_b n es la potencia a la que elevas b para llegar a n.",
        },
        example: { id: "ex-gold-3", prompt: "log₂ 8", answer: 3, operands: [2, 8] },
        steps: [
          {
            text: {
              en: "Rewrite as a question: 2^? = 8.",
              pt: "Reescreva como pergunta: 2^? = 8.",
              es: "Reescríbelo como pregunta: 2^? = 8.",
            },
          },
          {
            text: {
              en: "2 × 2 × 2 = 8, so the exponent is {{3}}.",
              pt: "2 × 2 × 2 = 8, então o expoente é {{3}}.",
              es: "2 × 2 × 2 = 8, así que el exponente es {{3}}.",
            },
          },
          { text: { en: "log₂ 8 = 3.", pt: "log₂ 8 = 3.", es: "log₂ 8 = 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateLogMeaning,
    },
    {
      id: "gold-4",
      beltId: "gold",
      index: 4,
      degree: logsDegree,
      title: { en: "Base-10 logs", pt: "Logaritmo na base 10", es: "Logaritmos en base 10" },
      summary: {
        en: "log of a power of ten just counts the zeros.",
        pt: "O log de uma potência de 10 só conta os zeros.",
        es: "El log de una potencia de 10 solo cuenta los ceros.",
      },
      lesson: {
        intro: {
          en: "When no base is written, it's base 10. log 1000 asks 10^? = 1000 — count the zeros.",
          pt: "Quando não há base escrita, é base 10. log 1000 pergunta 10^? = 1000 — conte os zeros.",
          es: "Cuando no hay base escrita, es base 10. log 1000 pregunta 10^? = 1000 — cuenta los ceros.",
        },
        example: { id: "ex-gold-4", prompt: "log 1000", answer: 3, operands: [1000] },
        steps: [
          {
            text: {
              en: "1000 has {{3}} zeros.",
              pt: "1000 tem {{3}} zeros.",
              es: "1000 tiene {{3}} ceros.",
            },
          },
          {
            text: {
              en: "10³ = 1000, so log 1000 = {{3}}.",
              pt: "10³ = 1000, então log 1000 = {{3}}.",
              es: "10³ = 1000, así que log 1000 = {{3}}.",
            },
          },
          { text: { en: "log 1000 = 3.", pt: "log 1000 = 3.", es: "log 1000 = 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 7 },
      generate: generateLog10,
    },
    {
      id: "gold-5",
      beltId: "gold",
      index: 5,
      degree: logsDegree,
      title: { en: "The product rule", pt: "A regra do produto", es: "La regla del producto" },
      summary: {
        en: "log m + log n = log (m × n) — adding logs multiplies the insides.",
        pt: "log m + log n = log (m × n) — somar logs multiplica o que está dentro.",
        es: "log m + log n = log (m × n) — sumar logs multiplica lo de adentro.",
      },
      lesson: {
        intro: {
          en: "Same base? Adding the logs is the same as one log of the product. Multiply the insides, then take a single log.",
          pt: "Mesma base? Somar os logs é o mesmo que um log só do produto. Multiplique o que está dentro e tire um log só.",
          es: "¿Misma base? Sumar los logs es lo mismo que un solo log del producto. Multiplica lo de adentro y toma un solo log.",
        },
        example: { id: "ex-gold-5", prompt: "log₂ 4 + log₂ 8", answer: 5, operands: [4, 8] },
        steps: [
          {
            text: {
              en: "Multiply the insides: 4 × 8 = {{32}}.",
              pt: "Multiplique o que está dentro: 4 × 8 = {{32}}.",
              es: "Multiplica lo de adentro: 4 × 8 = {{32}}.",
            },
          },
          {
            text: {
              en: "log₂ {{32}} = 5, since 2⁵ = 32.",
              pt: "log₂ {{32}} = 5, pois 2⁵ = 32.",
              es: "log₂ {{32}} = 5, pues 2⁵ = 32.",
            },
          },
          { text: { en: "The answer is 5.", pt: "A resposta é 5.", es: "La respuesta es 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateLogProductRule,
    },
    {
      id: "gold-6",
      beltId: "gold",
      index: 6,
      degree: logsDegree,
      title: { en: "The quotient rule", pt: "A regra do quociente", es: "La regla del cociente" },
      summary: {
        en: "log m − log n = log (m ÷ n).",
        pt: "log m − log n = log (m ÷ n).",
        es: "log m − log n = log (m ÷ n).",
      },
      lesson: {
        intro: {
          en: "Subtracting logs with the same base divides the insides. Divide first, then take one log.",
          pt: "Subtrair logs de mesma base divide o que está dentro. Divida primeiro, depois tire um log só.",
          es: "Restar logs de la misma base divide lo de adentro. Divide primero, luego toma un solo log.",
        },
        example: { id: "ex-gold-6", prompt: "log₂ 32 − log₂ 4", answer: 3, operands: [32, 4] },
        steps: [
          {
            text: {
              en: "Divide the insides: 32 ÷ 4 = {{8}}.",
              pt: "Divida o que está dentro: 32 ÷ 4 = {{8}}.",
              es: "Divide lo de adentro: 32 ÷ 4 = {{8}}.",
            },
          },
          {
            text: {
              en: "log₂ {{8}} = 3, since 2³ = 8.",
              pt: "log₂ {{8}} = 3, pois 2³ = 8.",
              es: "log₂ {{8}} = 3, pues 2³ = 8.",
            },
          },
          { text: { en: "The answer is 3.", pt: "A resposta é 3.", es: "La respuesta es 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateLogQuotientRule,
    },
    {
      id: "gold-7",
      beltId: "gold",
      index: 7,
      degree: logsDegree,
      title: { en: "Solving log equations", pt: "Resolvendo equações com log", es: "Resolviendo ecuaciones con log" },
      summary: {
        en: "log₂ x = 5 unwraps to x = 2⁵.",
        pt: "log₂ x = 5 se desfaz em x = 2⁵.",
        es: "log₂ x = 5 se convierte en x = 2⁵.",
      },
      lesson: {
        intro: {
          en: "A log equation is an exponent in disguise: log_b x = k means x = bᵏ. Rewrite and compute the power.",
          pt: "Uma equação com log é um expoente disfarçado: log_b x = k significa x = bᵏ. Reescreva e calcule a potência.",
          es: "Una ecuación con log es un exponente disfrazado: log_b x = k significa x = bᵏ. Reescribe y calcula la potencia.",
        },
        example: { id: "ex-gold-7", prompt: "log₂ x = 5", answer: 32, operands: [2, 5], isEquation: true },
        steps: [
          {
            text: {
              en: "Rewrite as a power: x = 2⁵.",
              pt: "Reescreva como potência: x = 2⁵.",
              es: "Reescribe como potencia: x = 2⁵.",
            },
          },
          {
            text: {
              en: "Compute: 2⁵ = {{32}}.",
              pt: "Calcule: 2⁵ = {{32}}.",
              es: "Calcula: 2⁵ = {{32}}.",
            },
          },
          { text: { en: "x = 32.", pt: "x = 32.", es: "x = 32." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateSolveLog,
    },
    {
      id: "gold-8",
      beltId: "gold",
      index: 8,
      degree: logsDegree,
      title: { en: "Multiplying logs", pt: "Multiplicando logs", es: "Multiplicando logs" },
      summary: {
        en: "Evaluate each log separately, then multiply the results.",
        pt: "Calcule cada log separado, depois multiplique os resultados.",
        es: "Evalúa cada log por separado, luego multiplica los resultados.",
      },
      lesson: {
        intro: {
          en: "When two logs multiply, there's no shortcut rule — just evaluate each one and multiply the answers.",
          pt: "Quando dois logs se multiplicam, não há regra de atalho — calcule cada um e multiplique as respostas.",
          es: "Cuando dos logs se multiplican, no hay regla de atajo — evalúa cada uno y multiplica las respuestas.",
        },
        example: { id: "ex-gold-8", prompt: "log₂ 8 × log₃ 9", answer: 6, operands: [8, 9] },
        steps: [
          {
            text: {
              en: "First log: log₂ 8 = {{3}}.",
              pt: "Primeiro log: log₂ 8 = {{3}}.",
              es: "Primer log: log₂ 8 = {{3}}.",
            },
          },
          {
            text: {
              en: "Second log: log₃ 9 = {{2}}.",
              pt: "Segundo log: log₃ 9 = {{2}}.",
              es: "Segundo log: log₃ 9 = {{2}}.",
            },
          },
          {
            text: {
              en: "Multiply: {{3}} × {{2}} = 6.",
              pt: "Multiplique: {{3}} × {{2}} = 6.",
              es: "Multiplica: {{3}} × {{2}} = 6.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateLogProduct,
    },
    {
      id: "gold-9",
      beltId: "gold",
      index: 9,
      degree: logsDegree,
      title: { en: "Shifted exponentials", pt: "Exponenciais deslocadas", es: "Exponenciales desplazadas" },
      summary: {
        en: "2ˣ⁺¹ = 16 — match the exponents, then peel off the shift.",
        pt: "2ˣ⁺¹ = 16 — iguale os expoentes, depois tire o deslocamento.",
        es: "2ˣ⁺¹ = 16 — iguala los exponentes, luego quita el desplazamiento.",
      },
      lesson: {
        intro: {
          en: "Write the right side as a power of the same base. Then the exponents must be equal — solve that little equation.",
          pt: "Escreva o lado direito como potência da mesma base. Aí os expoentes têm que ser iguais — resolva essa equaçãozinha.",
          es: "Escribe el lado derecho como potencia de la misma base. Entonces los exponentes deben ser iguales — resuelve esa pequeña ecuación.",
        },
        example: { id: "ex-gold-9", prompt: "2ˣ⁺¹ = 16", answer: 3, operands: [2, 1, 16], isEquation: true },
        steps: [
          {
            text: {
              en: "16 as a power of 2: 16 = 2⁴.",
              pt: "16 como potência de 2: 16 = 2⁴.",
              es: "16 como potencia de 2: 16 = 2⁴.",
            },
          },
          {
            text: {
              en: "Match exponents: x + 1 = {{4}}.",
              pt: "Iguale os expoentes: x + 1 = {{4}}.",
              es: "Iguala los exponentes: x + 1 = {{4}}.",
            },
          },
          { text: { en: "x = 3.", pt: "x = 3.", es: "x = 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateShiftedExponential,
    },
    {
      id: "gold-10",
      beltId: "gold",
      index: 10,
      degree: logsDegree,
      title: { en: "Logs & exponentials, mixed", pt: "Logs e exponenciais, misturados", es: "Logs y exponenciales, mezclados" },
      summary: {
        en: "Every log and exponential skill — shuffled.",
        pt: "Todas as habilidades de log e exponencial — embaralhadas.",
        es: "Todas las habilidades de logs y exponenciales — revueltas.",
      },
      lesson: {
        intro: {
          en: "Anything from this degree can appear: rules, equations, negative exponents. Identify the shape first.",
          pt: "Qualquer coisa deste nível pode aparecer: regras, equações, expoentes negativos. Identifique o formato primeiro.",
          es: "Cualquier cosa de este nivel puede aparecer: reglas, ecuaciones, exponentes negativos. Identifica la forma primero.",
        },
        example: { id: "ex-gold-10", prompt: "log₅ 25", answer: 2, operands: [5, 25] },
        steps: [
          {
            text: {
              en: "Ask: 5^? = 25.",
              pt: "Pergunte: 5^? = 25.",
              es: "Pregunta: 5^? = 25.",
            },
          },
          {
            text: {
              en: "5² = 25, so the answer is 2.",
              pt: "5² = 25, então a resposta é 2.",
              es: "5² = 25, así que la respuesta es 2.",
            },
          },
          { text: { en: "log₅ 25 = 2.", pt: "log₅ 25 = 2.", es: "log₅ 25 = 2." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateLogsMix,
    },
    {
      id: "gold-11",
      beltId: "gold",
      index: 1,
      degree: sequencesDegree,
      title: { en: "Continuing an AP", pt: "Continuando uma PA", es: "Continuando una PA" },
      summary: {
        en: "Spot the constant jump between terms.",
        pt: "Perceba o salto constante entre os termos.",
        es: "Detecta el salto constante entre términos.",
      },
      lesson: {
        intro: {
          en: "In an arithmetic progression each term grows by the same amount — the common difference. Find it, then jump once more.",
          pt: "Numa progressão aritmética cada termo cresce a mesma quantidade — a razão. Encontre-a, depois dê mais um salto.",
          es: "En una progresión aritmética cada término crece la misma cantidad — la diferencia común. Hállala, luego salta una vez más.",
        },
        example: { id: "ex-gold-11", prompt: "3, 7, 11, …", answer: 15, operands: [3, 4] },
        steps: [
          {
            text: {
              en: "The jump: 7 − 3 = {{4}} (and 11 − 7 = {{4}} too).",
              pt: "O salto: 7 − 3 = {{4}} (e 11 − 7 = {{4}} também).",
              es: "El salto: 7 − 3 = {{4}} (y 11 − 7 = {{4}} también).",
            },
          },
          {
            text: {
              en: "One more jump: 11 + {{4}} = 15.",
              pt: "Mais um salto: 11 + {{4}} = 15.",
              es: "Un salto más: 11 + {{4}} = 15.",
            },
          },
          { text: { en: "Next term: 15.", pt: "Próximo termo: 15.", es: "Siguiente término: 15." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateNextTermAP,
    },
    {
      id: "gold-12",
      beltId: "gold",
      index: 2,
      degree: sequencesDegree,
      title: { en: "The nth term of an AP", pt: "O termo geral da PA", es: "El término general de la PA" },
      summary: {
        en: "aₙ = a₁ + (n − 1)d — jump (n − 1) times at once.",
        pt: "aₙ = a₁ + (n − 1)r — dê (n − 1) saltos de uma vez.",
        es: "aₙ = a₁ + (n − 1)d — salta (n − 1) veces de una vez.",
      },
      lesson: {
        intro: {
          en: "To reach the 10th term you jump 9 times from the 1st. Multiply the difference by (n − 1) and add to a₁.",
          pt: "Para chegar ao 10º termo você dá 9 saltos a partir do 1º. Multiplique a razão por (n − 1) e some ao a₁.",
          es: "Para llegar al 10º término saltas 9 veces desde el 1º. Multiplica la diferencia por (n − 1) y súmala a a₁.",
        },
        example: {
          id: "ex-gold-12",
          prompt: "AP: a₁ = 3, d = 4 — a₁₀?",
          promptL10n: {
            en: "AP: a₁ = 3, d = 4 — a₁₀?",
            pt: "PA: a₁ = 3, r = 4 — a₁₀?",
            es: "PA: a₁ = 3, d = 4 — ¿a₁₀?",
          },
          answer: 39,
          operands: [3, 4, 10],
        },
        steps: [
          {
            text: {
              en: "From a₁ to a₁₀ there are 9 jumps: 9 × 4 = {{36}}.",
              pt: "De a₁ até a₁₀ são 9 saltos: 9 × 4 = {{36}}.",
              es: "De a₁ a a₁₀ hay 9 saltos: 9 × 4 = {{36}}.",
            },
          },
          {
            text: {
              en: "Add the start: 3 + {{36}} = 39.",
              pt: "Some o início: 3 + {{36}} = 39.",
              es: "Suma el inicio: 3 + {{36}} = 39.",
            },
          },
          { text: { en: "a₁₀ = 39.", pt: "a₁₀ = 39.", es: "a₁₀ = 39." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateNthTermAP,
    },
    {
      id: "gold-13",
      beltId: "gold",
      index: 3,
      degree: sequencesDegree,
      title: { en: "Sum of an AP", pt: "Soma da PA", es: "Suma de la PA" },
      summary: {
        en: "First plus last, times the count, halved — Gauss's trick.",
        pt: "Primeiro mais último, vezes a quantidade, dividido por 2 — o truque de Gauss.",
        es: "Primero más último, por la cantidad, a la mitad — el truco de Gauss.",
      },
      lesson: {
        intro: {
          en: "Pair the first term with the last: every pair has the same total. There are n/2 pairs: Sₙ = n(a₁ + aₙ)/2.",
          pt: "Junte o primeiro termo com o último: todo par tem a mesma soma. São n/2 pares: Sₙ = n(a₁ + aₙ)/2.",
          es: "Empareja el primer término con el último: cada par tiene el mismo total. Hay n/2 pares: Sₙ = n(a₁ + aₙ)/2.",
        },
        example: {
          id: "ex-gold-13",
          prompt: "AP: a₁ = 2, d = 3, n = 10 — S₁₀?",
          promptL10n: {
            en: "AP: a₁ = 2, d = 3, n = 10 — sum S₁₀?",
            pt: "PA: a₁ = 2, r = 3, n = 10 — soma S₁₀?",
            es: "PA: a₁ = 2, d = 3, n = 10 — ¿suma S₁₀?",
          },
          answer: 155,
          operands: [2, 3, 10],
        },
        steps: [
          {
            text: {
              en: "Last term: a₁₀ = 2 + 9 × 3 = {{29}}.",
              pt: "Último termo: a₁₀ = 2 + 9 × 3 = {{29}}.",
              es: "Último término: a₁₀ = 2 + 9 × 3 = {{29}}.",
            },
          },
          {
            text: {
              en: "Pair sum: 2 + {{29}} = 31. Ten terms → 5 pairs: 31 × 5 = 155.",
              pt: "Soma do par: 2 + {{29}} = 31. Dez termos → 5 pares: 31 × 5 = 155.",
              es: "Suma del par: 2 + {{29}} = 31. Diez términos → 5 pares: 31 × 5 = 155.",
            },
          },
          { text: { en: "S₁₀ = 155.", pt: "S₁₀ = 155.", es: "S₁₀ = 155." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateSumAP,
    },
    {
      id: "gold-14",
      beltId: "gold",
      index: 4,
      degree: sequencesDegree,
      title: { en: "Continuing a GP", pt: "Continuando uma PG", es: "Continuando una PG" },
      summary: {
        en: "Each term multiplies by the same ratio.",
        pt: "Cada termo multiplica pela mesma razão.",
        es: "Cada término se multiplica por la misma razón.",
      },
      lesson: {
        intro: {
          en: "In a geometric progression the jump is a multiplication. Divide neighbors to find the ratio, then multiply once more.",
          pt: "Numa progressão geométrica o salto é uma multiplicação. Divida vizinhos para achar a razão, depois multiplique mais uma vez.",
          es: "En una progresión geométrica el salto es una multiplicación. Divide vecinos para hallar la razón, luego multiplica una vez más.",
        },
        example: { id: "ex-gold-14", prompt: "2, 6, 18, …", answer: 54, operands: [2, 3] },
        steps: [
          {
            text: {
              en: "The ratio: 6 ÷ 2 = {{3}} (and 18 ÷ 6 = {{3}}).",
              pt: "A razão: 6 ÷ 2 = {{3}} (e 18 ÷ 6 = {{3}}).",
              es: "La razón: 6 ÷ 2 = {{3}} (y 18 ÷ 6 = {{3}}).",
            },
          },
          {
            text: {
              en: "Multiply once more: 18 × {{3}} = 54.",
              pt: "Multiplique mais uma vez: 18 × {{3}} = 54.",
              es: "Multiplica una vez más: 18 × {{3}} = 54.",
            },
          },
          { text: { en: "Next term: 54.", pt: "Próximo termo: 54.", es: "Siguiente término: 54." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateNextTermGP,
    },
    {
      id: "gold-15",
      beltId: "gold",
      index: 5,
      degree: sequencesDegree,
      title: { en: "The nth term of a GP", pt: "O termo geral da PG", es: "El término general de la PG" },
      summary: {
        en: "aₙ = a₁ · qⁿ⁻¹ — multiply (n − 1) times at once.",
        pt: "aₙ = a₁ · qⁿ⁻¹ — multiplique (n − 1) vezes de uma vez.",
        es: "aₙ = a₁ · qⁿ⁻¹ — multiplica (n − 1) veces de una vez.",
      },
      lesson: {
        intro: {
          en: "Reaching the 5th term means multiplying by q four times: a₅ = a₁ · q⁴. Compute the power first.",
          pt: "Chegar ao 5º termo significa multiplicar por q quatro vezes: a₅ = a₁ · q⁴. Calcule a potência primeiro.",
          es: "Llegar al 5º término significa multiplicar por q cuatro veces: a₅ = a₁ · q⁴. Calcula la potencia primero.",
        },
        example: {
          id: "ex-gold-15",
          prompt: "GP: a₁ = 2, q = 3 — a₅?",
          promptL10n: {
            en: "GP: a₁ = 2, ratio q = 3 — a₅?",
            pt: "PG: a₁ = 2, q = 3 — a₅?",
            es: "PG: a₁ = 2, q = 3 — ¿a₅?",
          },
          answer: 162,
          operands: [2, 3, 5],
        },
        steps: [
          {
            text: {
              en: "Four multiplications: 3⁴ = {{81}}.",
              pt: "Quatro multiplicações: 3⁴ = {{81}}.",
              es: "Cuatro multiplicaciones: 3⁴ = {{81}}.",
            },
          },
          {
            text: {
              en: "Times the start: 2 × {{81}} = 162.",
              pt: "Vezes o início: 2 × {{81}} = 162.",
              es: "Por el inicio: 2 × {{81}} = 162.",
            },
          },
          { text: { en: "a₅ = 162.", pt: "a₅ = 162.", es: "a₅ = 162." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateNthTermGP,
    },
    {
      id: "gold-16",
      beltId: "gold",
      index: 6,
      degree: sequencesDegree,
      title: { en: "Sum of a GP", pt: "Soma da PG", es: "Suma de la PG" },
      summary: {
        en: "With q = 2 the sum is a₁(2ⁿ − 1) — one less than the next power.",
        pt: "Com q = 2 a soma é a₁(2ⁿ − 1) — um a menos que a próxima potência.",
        es: "Con q = 2 la suma es a₁(2ⁿ − 1) — uno menos que la siguiente potencia.",
      },
      lesson: {
        intro: {
          en: "Doubling sums have a magic shortcut: 1+2+4+…+2ⁿ⁻¹ = 2ⁿ − 1. Scale by a₁.",
          pt: "Somas de dobros têm um atalho mágico: 1+2+4+…+2ⁿ⁻¹ = 2ⁿ − 1. Multiplique por a₁.",
          es: "Las sumas de dobles tienen un atajo mágico: 1+2+4+…+2ⁿ⁻¹ = 2ⁿ − 1. Escala por a₁.",
        },
        example: {
          id: "ex-gold-16",
          prompt: "GP: a₁ = 3, q = 2, n = 5 — S₅?",
          promptL10n: {
            en: "GP: a₁ = 3, q = 2, n = 5 — sum S₅?",
            pt: "PG: a₁ = 3, q = 2, n = 5 — soma S₅?",
            es: "PG: a₁ = 3, q = 2, n = 5 — ¿suma S₅?",
          },
          answer: 93,
          operands: [3, 5],
        },
        steps: [
          {
            text: {
              en: "2⁵ − 1 = 32 − 1 = {{31}}.",
              pt: "2⁵ − 1 = 32 − 1 = {{31}}.",
              es: "2⁵ − 1 = 32 − 1 = {{31}}.",
            },
          },
          {
            text: {
              en: "Scale by a₁: 3 × {{31}} = 93.",
              pt: "Multiplique por a₁: 3 × {{31}} = 93.",
              es: "Escala por a₁: 3 × {{31}} = 93.",
            },
          },
          { text: { en: "S₅ = 93.", pt: "S₅ = 93.", es: "S₅ = 93." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateSumGP,
    },
    {
      id: "gold-17",
      beltId: "gold",
      index: 7,
      degree: sequencesDegree,
      title: { en: "Infinite GP sums", pt: "Soma da PG infinita", es: "Suma de la PG infinita" },
      summary: {
        en: "When |q| < 1 the endless sum converges: S = a₁ / (1 − q).",
        pt: "Quando |q| < 1 a soma infinita converge: S = a₁ / (1 − q).",
        es: "Cuando |q| < 1 la suma infinita converge: S = a₁ / (1 − q).",
      },
      lesson: {
        intro: {
          en: "Halving forever never passes a limit. The whole infinite sum is just a₁ divided by (1 − q).",
          pt: "Dividir pela metade para sempre nunca passa de um limite. A soma infinita toda é só a₁ dividido por (1 − q).",
          es: "Dividir a la mitad por siempre nunca pasa de un límite. Toda la suma infinita es solo a₁ dividido por (1 − q).",
        },
        example: {
          id: "ex-gold-17",
          prompt: "GP: a₁ = 8, q = 1/2 — S∞?",
          promptL10n: {
            en: "Infinite GP: a₁ = 8, q = 1/2 — sum?",
            pt: "PG infinita: a₁ = 8, q = 1/2 — soma?",
            es: "PG infinita: a₁ = 8, q = 1/2 — ¿suma?",
          },
          answer: 16,
          operands: [8, 2],
        },
        steps: [
          {
            text: {
              en: "1 − q = 1 − 1/2 = {{1/2}}.",
              pt: "1 − q = 1 − 1/2 = {{1/2}}.",
              es: "1 − q = 1 − 1/2 = {{1/2}}.",
            },
          },
          {
            text: {
              en: "Divide: 8 ÷ {{1/2}} = 16.",
              pt: "Divida: 8 ÷ {{1/2}} = 16.",
              es: "Divide: 8 ÷ {{1/2}} = 16.",
            },
          },
          { text: { en: "S∞ = 16.", pt: "S∞ = 16.", es: "S∞ = 16." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateInfiniteGP,
    },
    {
      id: "gold-18",
      beltId: "gold",
      index: 8,
      degree: sequencesDegree,
      title: { en: "Finding d and q", pt: "Achando r e q", es: "Hallando d y q" },
      summary: {
        en: "Two known terms pin down the whole progression.",
        pt: "Dois termos conhecidos definem a progressão inteira.",
        es: "Dos términos conocidos fijan toda la progresión.",
      },
      lesson: {
        intro: {
          en: "Between a₁ and aₙ there are (n − 1) jumps. Divide the total change by the number of jumps (AP), or ask which ratio raised to (n − 1) does it (GP).",
          pt: "Entre a₁ e aₙ existem (n − 1) saltos. Divida a variação total pelo número de saltos (PA), ou pergunte qual razão elevada a (n − 1) faz isso (PG).",
          es: "Entre a₁ y aₙ hay (n − 1) saltos. Divide el cambio total por el número de saltos (PA), o pregunta qué razón elevada a (n − 1) lo hace (PG).",
        },
        example: {
          id: "ex-gold-18",
          prompt: "AP: a₁ = 5, a₇ = 23 — d?",
          promptL10n: {
            en: "AP: a₁ = 5, a₇ = 23 — d?",
            pt: "PA: a₁ = 5, a₇ = 23 — r?",
            es: "PA: a₁ = 5, a₇ = 23 — ¿d?",
          },
          answer: 3,
          operands: [5, 7, 23],
          isEquation: true,
          equationLabel: "d =",
        },
        steps: [
          {
            text: {
              en: "Total change: 23 − 5 = {{18}}.",
              pt: "Variação total: 23 − 5 = {{18}}.",
              es: "Cambio total: 23 − 5 = {{18}}.",
            },
          },
          {
            text: {
              en: "Jumps from a₁ to a₇: 6. So d = {{18}} ÷ 6 = 3.",
              pt: "Saltos de a₁ até a₇: 6. Então r = {{18}} ÷ 6 = 3.",
              es: "Saltos de a₁ a a₇: 6. Así que d = {{18}} ÷ 6 = 3.",
            },
          },
          { text: { en: "d = 3.", pt: "r = 3.", es: "d = 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateFindRatio,
    },
    {
      id: "gold-19",
      beltId: "gold",
      index: 9,
      degree: sequencesDegree,
      title: { en: "Recursive sequences", pt: "Sequências recursivas", es: "Sucesiones recursivas" },
      summary: {
        en: "Each term is built from the previous ones — like Fibonacci.",
        pt: "Cada termo nasce dos anteriores — como Fibonacci.",
        es: "Cada término nace de los anteriores — como Fibonacci.",
      },
      lesson: {
        intro: {
          en: "When each term is the sum of the two before it, just keep adding neighbors to continue the chain.",
          pt: "Quando cada termo é a soma dos dois anteriores, é só continuar somando vizinhos para estender a corrente.",
          es: "Cuando cada término es la suma de los dos anteriores, solo sigue sumando vecinos para extender la cadena.",
        },
        example: { id: "ex-gold-19", prompt: "2, 3, 5, 8, 13, …", answer: 21, operands: [2, 3] },
        steps: [
          {
            text: {
              en: "Check the rule: 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13. Each term adds the two before.",
              pt: "Confira a regra: 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13. Cada termo soma os dois anteriores.",
              es: "Verifica la regla: 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13. Cada término suma los dos anteriores.",
            },
          },
          {
            text: {
              en: "Next: 8 + 13 = 21.",
              pt: "Próximo: 8 + 13 = 21.",
              es: "Siguiente: 8 + 13 = 21.",
            },
          },
          { text: { en: "Next term: 21.", pt: "Próximo termo: 21.", es: "Siguiente término: 21." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateRecursiveSequence,
    },
    {
      id: "gold-20",
      beltId: "gold",
      index: 10,
      degree: sequencesDegree,
      title: { en: "Sequences, mixed", pt: "Sequências, misturadas", es: "Sucesiones, mezcladas" },
      summary: {
        en: "APs, GPs, sums and recursions — shuffled.",
        pt: "PAs, PGs, somas e recursões — embaralhadas.",
        es: "PAs, PGs, sumas y recursiones — revueltas.",
      },
      lesson: {
        intro: {
          en: "First decide: is the jump an addition (AP), a multiplication (GP), or built from previous terms? Then apply the right tool.",
          pt: "Primeiro decida: o salto é uma soma (PA), uma multiplicação (PG), ou nasce dos termos anteriores? Depois aplique a ferramenta certa.",
          es: "Primero decide: ¿el salto es una suma (PA), una multiplicación (PG), o nace de términos anteriores? Luego aplica la herramienta correcta.",
        },
        example: { id: "ex-gold-20", prompt: "4, 9, 14, …", answer: 19, operands: [4, 5] },
        steps: [
          {
            text: {
              en: "The jump is constant: +{{5}} — an AP.",
              pt: "O salto é constante: +{{5}} — uma PA.",
              es: "El salto es constante: +{{5}} — una PA.",
            },
          },
          {
            text: {
              en: "14 + {{5}} = 19.",
              pt: "14 + {{5}} = 19.",
              es: "14 + {{5}} = 19.",
            },
          },
          { text: { en: "Next term: 19.", pt: "Próximo termo: 19.", es: "Siguiente término: 19." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 15 },
      generate: generateSequencesMix,
    },
    {
      id: "gold-21",
      beltId: "gold",
      index: 1,
      degree: countingDegree,
      title: { en: "The multiplication principle", pt: "O princípio multiplicativo", es: "El principio multiplicativo" },
      summary: {
        en: "Independent choices multiply.",
        pt: "Escolhas independentes se multiplicam.",
        es: "Las elecciones independientes se multiplican.",
      },
      lesson: {
        intro: {
          en: "If one choice has 4 options and another has 3, together they make 4 × 3 combinations — every option pairs with every other.",
          pt: "Se uma escolha tem 4 opções e outra tem 3, juntas elas dão 4 × 3 combinações — cada opção combina com todas as outras.",
          es: "Si una elección tiene 4 opciones y otra 3, juntas dan 4 × 3 combinaciones — cada opción se combina con todas las demás.",
        },
        example: {
          id: "ex-gold-21",
          prompt: "4 shirts, 3 pants — outfits?",
          promptL10n: {
            en: "4 shirts, 3 pants — outfits?",
            pt: "4 camisas, 3 calças — combinações?",
            es: "4 camisas, 3 pantalones — ¿combinaciones?",
          },
          answer: 12,
          operands: [4, 3],
        },
        steps: [
          {
            text: {
              en: "Each of the 4 shirts pairs with each of the 3 pants.",
              pt: "Cada uma das 4 camisas combina com cada uma das 3 calças.",
              es: "Cada una de las 4 camisas se combina con cada uno de los 3 pantalones.",
            },
          },
          {
            text: {
              en: "Multiply: 4 × 3 = 12.",
              pt: "Multiplique: 4 × 3 = 12.",
              es: "Multiplica: 4 × 3 = 12.",
            },
          },
          { text: { en: "12 outfits.", pt: "12 combinações.", es: "12 combinaciones." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateMultiplicationPrinciple,
    },
    {
      id: "gold-22",
      beltId: "gold",
      index: 2,
      degree: countingDegree,
      title: { en: "Factorials", pt: "Fatorial", es: "Factoriales" },
      summary: {
        en: "n! multiplies every number from n down to 1.",
        pt: "n! multiplica todos os números de n até 1.",
        es: "n! multiplica todos los números de n hasta 1.",
      },
      lesson: {
        intro: {
          en: "5! counts the ways to line up 5 things: 5 choices, then 4, then 3, 2, 1 — all multiplied.",
          pt: "5! conta as formas de enfileirar 5 coisas: 5 escolhas, depois 4, depois 3, 2, 1 — tudo multiplicado.",
          es: "5! cuenta las formas de alinear 5 cosas: 5 opciones, luego 4, luego 3, 2, 1 — todo multiplicado.",
        },
        example: { id: "ex-gold-22", prompt: "5!", answer: 120, operands: [5] },
        steps: [
          {
            text: {
              en: "5 × 4 = {{20}}, then {{20}} × 3 = 60.",
              pt: "5 × 4 = {{20}}, depois {{20}} × 3 = 60.",
              es: "5 × 4 = {{20}}, luego {{20}} × 3 = 60.",
            },
          },
          {
            text: {
              en: "60 × 2 = 120, and × 1 stays 120.",
              pt: "60 × 2 = 120, e × 1 continua 120.",
              es: "60 × 2 = 120, y × 1 sigue 120.",
            },
          },
          { text: { en: "5! = 120.", pt: "5! = 120.", es: "5! = 120." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateFactorial,
    },
    {
      id: "gold-23",
      beltId: "gold",
      index: 3,
      degree: countingDegree,
      title: { en: "Factorial quotients", pt: "Quociente de fatoriais", es: "Cocientes de factoriales" },
      summary: {
        en: "6! ÷ 4! — cancel the shared tail, multiply what's left.",
        pt: "6! ÷ 4! — cancele a cauda comum, multiplique o que sobrar.",
        es: "6! ÷ 4! — cancela la cola común, multiplica lo que queda.",
      },
      lesson: {
        intro: {
          en: "Never compute giant factorials. 6!/4! shares the whole 4 × 3 × 2 × 1 tail — cancel it, leaving just 6 × 5.",
          pt: "Nunca calcule fatoriais gigantes. 6!/4! compartilha toda a cauda 4 × 3 × 2 × 1 — cancele, sobrando só 6 × 5.",
          es: "Nunca calcules factoriales gigantes. 6!/4! comparte toda la cola 4 × 3 × 2 × 1 — cancélala, quedando solo 6 × 5.",
        },
        example: { id: "ex-gold-23", prompt: "6! ÷ 4!", answer: 30, operands: [6, 4] },
        steps: [
          {
            text: {
              en: "6! = 6 × 5 × 4! — the 4! cancels.",
              pt: "6! = 6 × 5 × 4! — o 4! cancela.",
              es: "6! = 6 × 5 × 4! — el 4! se cancela.",
            },
          },
          {
            text: {
              en: "What's left: 6 × 5 = 30.",
              pt: "O que sobra: 6 × 5 = 30.",
              es: "Lo que queda: 6 × 5 = 30.",
            },
          },
          { text: { en: "6! ÷ 4! = 30.", pt: "6! ÷ 4! = 30.", es: "6! ÷ 4! = 30." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateFactorialQuotient,
    },
    {
      id: "gold-24",
      beltId: "gold",
      index: 4,
      degree: countingDegree,
      title: { en: "Arrangements", pt: "Arranjos", es: "Variaciones" },
      summary: {
        en: "Pick k of n where order matters — a falling product.",
        pt: "Escolha k de n onde a ordem importa — um produto decrescente.",
        es: "Elige k de n donde el orden importa — un producto descendente.",
      },
      lesson: {
        intro: {
          en: "First place: n options. Second place: n − 1. Multiply k falling factors — that's all an arrangement is.",
          pt: "Primeiro lugar: n opções. Segundo: n − 1. Multiplique k fatores decrescentes — um arranjo é só isso.",
          es: "Primer lugar: n opciones. Segundo: n − 1. Multiplica k factores descendentes — eso es una variación.",
        },
        example: {
          id: "ex-gold-24",
          prompt: "P(5, 2)",
          promptL10n: { en: "P(5, 2)", pt: "A(5, 2)", es: "V(5, 2)" },
          answer: 20,
          operands: [5, 2],
        },
        steps: [
          {
            text: {
              en: "First pick: 5 options. Second pick: {{4}} remain.",
              pt: "Primeira escolha: 5 opções. Segunda: restam {{4}}.",
              es: "Primera elección: 5 opciones. Segunda: quedan {{4}}.",
            },
          },
          {
            text: {
              en: "Multiply: 5 × {{4}} = 20.",
              pt: "Multiplique: 5 × {{4}} = 20.",
              es: "Multiplica: 5 × {{4}} = 20.",
            },
          },
          { text: { en: "20 arrangements.", pt: "20 arranjos.", es: "20 variaciones." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateArrangements,
    },
    {
      id: "gold-25",
      beltId: "gold",
      index: 5,
      degree: countingDegree,
      title: { en: "Combinations", pt: "Combinações", es: "Combinaciones" },
      summary: {
        en: "Order doesn't matter — divide the arrangements by k!.",
        pt: "A ordem não importa — divida os arranjos por k!.",
        es: "El orden no importa — divide las variaciones por k!.",
      },
      lesson: {
        intro: {
          en: "Choosing a duo isn't ranking one — AB and BA are the same pick. Count arrangements, then divide by the k! orderings.",
          pt: "Escolher uma dupla não é ranquear — AB e BA são a mesma escolha. Conte os arranjos e divida pelas k! ordens.",
          es: "Elegir un dúo no es clasificar — AB y BA son la misma elección. Cuenta las variaciones y divide por los k! órdenes.",
        },
        example: { id: "ex-gold-25", prompt: "C(5, 2)", answer: 10, operands: [5, 2] },
        steps: [
          {
            text: {
              en: "Arrangements first: 5 × 4 = {{20}}.",
              pt: "Arranjos primeiro: 5 × 4 = {{20}}.",
              es: "Variaciones primero: 5 × 4 = {{20}}.",
            },
          },
          {
            text: {
              en: "Each pair was counted 2! = 2 times: {{20}} ÷ 2 = 10.",
              pt: "Cada dupla foi contada 2! = 2 vezes: {{20}} ÷ 2 = 10.",
              es: "Cada par se contó 2! = 2 veces: {{20}} ÷ 2 = 10.",
            },
          },
          { text: { en: "C(5, 2) = 10.", pt: "C(5, 2) = 10.", es: "C(5, 2) = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateCombinations,
    },
    {
      id: "gold-26",
      beltId: "gold",
      index: 6,
      degree: countingDegree,
      title: { en: "Probability with dice", pt: "Probabilidade com dados", es: "Probabilidad con dados" },
      summary: {
        en: "Favorable outcomes over total outcomes, reduced.",
        pt: "Casos favoráveis sobre casos totais, simplificado.",
        es: "Casos favorables sobre casos totales, simplificado.",
      },
      lesson: {
        intro: {
          en: "A die has 6 equally likely faces. Count the faces that satisfy the event, put them over 6, and reduce the fraction.",
          pt: "Um dado tem 6 faces igualmente prováveis. Conte as faces que satisfazem o evento, ponha sobre 6, e simplifique a fração.",
          es: "Un dado tiene 6 caras igualmente probables. Cuenta las caras que cumplen el evento, ponlas sobre 6, y simplifica la fracción.",
        },
        example: {
          id: "ex-gold-26",
          prompt: "P(die roll > 4)",
          promptL10n: { en: "P(die roll > 4)", pt: "P(dado > 4)", es: "P(dado > 4)" },
          answer: 1,
          secondaryAnswer: 3,
          secondaryFormat: "fraction",
          operands: [2, 6],
        },
        steps: [
          {
            text: {
              en: "Faces above 4: the 5 and the 6 — {{2}} faces.",
              pt: "Faces acima de 4: o 5 e o 6 — {{2}} faces.",
              es: "Caras arriba de 4: el 5 y el 6 — {{2}} caras.",
            },
          },
          {
            text: {
              en: "{{2}}/6 reduces to 1/3.",
              pt: "{{2}}/6 simplifica para 1/3.",
              es: "{{2}}/6 se simplifica a 1/3.",
            },
          },
          { text: { en: "P = 1/3.", pt: "P = 1/3.", es: "P = 1/3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateDieProbability,
    },
    {
      id: "gold-27",
      beltId: "gold",
      index: 7,
      degree: countingDegree,
      title: { en: "Independent events", pt: "Eventos independentes", es: "Eventos independientes" },
      summary: {
        en: "\"And\" means multiply the probabilities.",
        pt: "\"E\" significa multiplicar as probabilidades.",
        es: "\"Y\" significa multiplicar las probabilidades.",
      },
      lesson: {
        intro: {
          en: "Heads then heads again: each flip is 1/2, and independent events multiply — (1/2) × (1/2) = 1/4.",
          pt: "Cara e depois cara de novo: cada moeda é 1/2, e eventos independentes se multiplicam — (1/2) × (1/2) = 1/4.",
          es: "Cara y luego cara otra vez: cada moneda es 1/2, y los eventos independientes se multiplican — (1/2) × (1/2) = 1/4.",
        },
        example: {
          id: "ex-gold-27",
          prompt: "P(2 heads in 2 flips)",
          promptL10n: {
            en: "P(2 heads in 2 coin flips)",
            pt: "P(2 caras em 2 moedas)",
            es: "P(2 caras en 2 monedas)",
          },
          answer: 1,
          secondaryAnswer: 4,
          secondaryFormat: "fraction",
          operands: [2],
        },
        steps: [
          {
            text: {
              en: "Each flip: P(heads) = 1/2.",
              pt: "Cada moeda: P(cara) = 1/2.",
              es: "Cada moneda: P(cara) = 1/2.",
            },
          },
          {
            text: {
              en: "Multiply: 1/2 × 1/2 = 1/4.",
              pt: "Multiplique: 1/2 × 1/2 = 1/4.",
              es: "Multiplica: 1/2 × 1/2 = 1/4.",
            },
          },
          { text: { en: "P = 1/4.", pt: "P = 1/4.", es: "P = 1/4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateIndependentEvents,
    },
    {
      id: "gold-28",
      beltId: "gold",
      index: 8,
      degree: countingDegree,
      title: { en: "The complement", pt: "O complementar", es: "El complemento" },
      summary: {
        en: "P(not A) = 1 − P(A) — count what's left.",
        pt: "P(não A) = 1 − P(A) — conte o que sobra.",
        es: "P(no A) = 1 − P(A) — cuenta lo que queda.",
      },
      lesson: {
        intro: {
          en: "\"Not rolling a 6\" is easier counted backwards: 5 of the 6 faces qualify.",
          pt: "\"Não tirar 6\" é mais fácil contando ao contrário: 5 das 6 faces servem.",
          es: "\"No sacar 6\" es más fácil contando al revés: 5 de las 6 caras sirven.",
        },
        example: {
          id: "ex-gold-28",
          prompt: "P(die roll NOT = 6)",
          promptL10n: { en: "P(die roll NOT = 6)", pt: "P(dado NÃO = 6)", es: "P(dado NO = 6)" },
          answer: 5,
          secondaryAnswer: 6,
          secondaryFormat: "fraction",
          operands: [5, 6],
        },
        steps: [
          {
            text: {
              en: "One face is a 6 — the other {{5}} are not.",
              pt: "Uma face é 6 — as outras {{5}} não são.",
              es: "Una cara es 6 — las otras {{5}} no.",
            },
          },
          {
            text: {
              en: "P = {{5}}/6, already reduced.",
              pt: "P = {{5}}/6, já simplificado.",
              es: "P = {{5}}/6, ya simplificado.",
            },
          },
          { text: { en: "P = 5/6.", pt: "P = 5/6.", es: "P = 5/6." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateComplementProbability,
    },
    {
      id: "gold-29",
      beltId: "gold",
      index: 9,
      degree: countingDegree,
      title: { en: "Drawing from an urn", pt: "Sorteio na urna", es: "Sacando de una urna" },
      summary: {
        en: "Favorable balls over total balls.",
        pt: "Bolas favoráveis sobre bolas totais.",
        es: "Bolas favorables sobre bolas totales.",
      },
      lesson: {
        intro: {
          en: "Add up all the balls for the denominator; the color you want is the numerator. Reduce.",
          pt: "Some todas as bolas para o denominador; a cor que você quer é o numerador. Simplifique.",
          es: "Suma todas las bolas para el denominador; el color que quieres es el numerador. Simplifica.",
        },
        example: {
          id: "ex-gold-29",
          prompt: "5 red, 3 blue — P(red)?",
          promptL10n: {
            en: "5 red balls, 3 blue — P(red)?",
            pt: "5 bolas vermelhas, 3 azuis — P(vermelha)?",
            es: "5 bolas rojas, 3 azules — ¿P(roja)?",
          },
          answer: 5,
          secondaryAnswer: 8,
          secondaryFormat: "fraction",
          operands: [5, 3],
        },
        steps: [
          {
            text: {
              en: "Total balls: 5 + 3 = {{8}}.",
              pt: "Total de bolas: 5 + 3 = {{8}}.",
              es: "Total de bolas: 5 + 3 = {{8}}.",
            },
          },
          {
            text: {
              en: "Red ones: 5 out of {{8}}.",
              pt: "Vermelhas: 5 de {{8}}.",
              es: "Rojas: 5 de {{8}}.",
            },
          },
          { text: { en: "P = 5/8.", pt: "P = 5/8.", es: "P = 5/8." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateUrnProbability,
    },
    {
      id: "gold-30",
      beltId: "gold",
      index: 10,
      degree: countingDegree,
      title: { en: "Counting & probability, mixed", pt: "Combinatória e probabilidade, misturadas", es: "Conteo y probabilidad, mezclados" },
      summary: {
        en: "Factorials, arrangements, combinations and chance — shuffled.",
        pt: "Fatoriais, arranjos, combinações e chance — embaralhados.",
        es: "Factoriales, variaciones, combinaciones y azar — revueltos.",
      },
      lesson: {
        intro: {
          en: "Ask two questions first: am I counting or measuring chance? And does order matter? The answers pick the tool.",
          pt: "Faça duas perguntas primeiro: estou contando ou medindo chance? E a ordem importa? As respostas escolhem a ferramenta.",
          es: "Haz dos preguntas primero: ¿estoy contando o midiendo azar? ¿Y el orden importa? Las respuestas eligen la herramienta.",
        },
        example: { id: "ex-gold-30", prompt: "C(4, 2)", answer: 6, operands: [4, 2] },
        steps: [
          {
            text: {
              en: "Order doesn't matter — combinations.",
              pt: "A ordem não importa — combinações.",
              es: "El orden no importa — combinaciones.",
            },
          },
          {
            text: {
              en: "4 × 3 = {{12}}, then {{12}} ÷ 2! = 6.",
              pt: "4 × 3 = {{12}}, depois {{12}} ÷ 2! = 6.",
              es: "4 × 3 = {{12}}, luego {{12}} ÷ 2! = 6.",
            },
          },
          { text: { en: "C(4, 2) = 6.", pt: "C(4, 2) = 6.", es: "C(4, 2) = 6." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateCountingMix,
    },
    {
      id: "gold-31",
      beltId: "gold",
      index: 1,
      degree: matricesDegree,
      title: { en: "Reading a matrix", pt: "Lendo uma matriz", es: "Leyendo una matriz" },
      summary: {
        en: "aᵢⱼ means row i, column j.",
        pt: "aᵢⱼ significa linha i, coluna j.",
        es: "aᵢⱼ significa fila i, columna j.",
      },
      lesson: {
        intro: {
          en: "We write a 2×2 matrix as [row one / row two]. The element a₁₂ lives in row 1, column 2 — row first, column second.",
          pt: "Escrevemos uma matriz 2×2 como [linha um / linha dois]. O elemento a₁₂ fica na linha 1, coluna 2 — linha primeiro, coluna depois.",
          es: "Escribimos una matriz 2×2 como [fila uno / fila dos]. El elemento a₁₂ está en la fila 1, columna 2 — fila primero, columna después.",
        },
        example: { id: "ex-gold-31", prompt: "[2 5 / 7 1] — a₁₂?", answer: 5, operands: [2, 5, 7, 1, 1, 2] },
        steps: [
          {
            text: {
              en: "Row 1 is \"2 5\".",
              pt: "A linha 1 é \"2 5\".",
              es: "La fila 1 es \"2 5\".",
            },
          },
          {
            text: {
              en: "Column 2 of that row is 5.",
              pt: "A coluna 2 dessa linha é 5.",
              es: "La columna 2 de esa fila es 5.",
            },
          },
          { text: { en: "a₁₂ = 5.", pt: "a₁₂ = 5.", es: "a₁₂ = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateMatrixElement,
    },
    {
      id: "gold-32",
      beltId: "gold",
      index: 2,
      degree: matricesDegree,
      title: { en: "The 2×2 determinant", pt: "Determinante 2×2", es: "El determinante 2×2" },
      summary: {
        en: "Main diagonal product minus the other diagonal.",
        pt: "Produto da diagonal principal menos o da outra diagonal.",
        es: "Producto de la diagonal principal menos el de la otra.",
      },
      lesson: {
        intro: {
          en: "For [a b / c d], the determinant is ad − bc: multiply down-right, subtract the up-right product.",
          pt: "Para [a b / c d], o determinante é ad − bc: multiplique a diagonal que desce, subtraia o produto da que sobe.",
          es: "Para [a b / c d], el determinante es ad − bc: multiplica la diagonal que baja, resta el producto de la que sube.",
        },
        example: { id: "ex-gold-32", prompt: "det [2 5 / 7 1]", answer: -33, operands: [2, 5, 7, 1], allowNegative: true },
        steps: [
          {
            text: {
              en: "Main diagonal: 2 × 1 = {{2}}.",
              pt: "Diagonal principal: 2 × 1 = {{2}}.",
              es: "Diagonal principal: 2 × 1 = {{2}}.",
            },
          },
          {
            text: {
              en: "Other diagonal: 5 × 7 = {{35}}.",
              pt: "Outra diagonal: 5 × 7 = {{35}}.",
              es: "Otra diagonal: 5 × 7 = {{35}}.",
            },
          },
          {
            text: {
              en: "Subtract: {{2}} − {{35}} = −33.",
              pt: "Subtraia: {{2}} − {{35}} = −33.",
              es: "Resta: {{2}} − {{35}} = −33.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateDet2x2,
    },
    {
      id: "gold-33",
      beltId: "gold",
      index: 3,
      degree: matricesDegree,
      title: { en: "When the determinant is zero", pt: "Quando o determinante é zero", es: "Cuando el determinante es cero" },
      summary: {
        en: "Solve for the entry that makes ad − bc vanish.",
        pt: "Ache o elemento que zera ad − bc.",
        es: "Halla el elemento que anula ad − bc.",
      },
      lesson: {
        intro: {
          en: "Set ad − bc = 0 and solve for the unknown entry — the row becomes a multiple of the other.",
          pt: "Iguale ad − bc = 0 e resolva para o elemento desconhecido — uma linha vira múltiplo da outra.",
          es: "Iguala ad − bc = 0 y resuelve el elemento desconocido — una fila se vuelve múltiplo de la otra.",
        },
        example: { id: "ex-gold-33", prompt: "det [2 3 / 6 x] = 0", answer: 9, operands: [2, 3, 6], isEquation: true },
        steps: [
          {
            text: {
              en: "The determinant: 2x − 3 × 6 = 2x − {{18}}.",
              pt: "O determinante: 2x − 3 × 6 = 2x − {{18}}.",
              es: "El determinante: 2x − 3 × 6 = 2x − {{18}}.",
            },
          },
          {
            text: {
              en: "Set to zero: 2x = {{18}}, so x = 9.",
              pt: "Iguale a zero: 2x = {{18}}, então x = 9.",
              es: "Iguala a cero: 2x = {{18}}, así que x = 9.",
            },
          },
          { text: { en: "x = 9.", pt: "x = 9.", es: "x = 9." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateDetZero,
    },
    {
      id: "gold-34",
      beltId: "gold",
      index: 4,
      degree: matricesDegree,
      title: { en: "The 3×3 determinant", pt: "Determinante 3×3", es: "El determinante 3×3" },
      summary: {
        en: "Expand along the first row — three small 2×2 jobs.",
        pt: "Expanda pela primeira linha — três continhas 2×2.",
        es: "Expande por la primera fila — tres pequeños 2×2.",
      },
      lesson: {
        intro: {
          en: "Each entry of row 1 multiplies the 2×2 determinant of what's left when you cover its row and column — with signs +, −, +.",
          pt: "Cada elemento da linha 1 multiplica o determinante 2×2 do que sobra ao cobrir sua linha e coluna — com sinais +, −, +.",
          es: "Cada elemento de la fila 1 multiplica el determinante 2×2 de lo que queda al cubrir su fila y columna — con signos +, −, +.",
        },
        example: {
          id: "ex-gold-34",
          prompt: "det [1 2 0 / 0 1 3 / 2 0 1]",
          answer: 13,
          operands: [1, 2, 0, 0, 1, 3, 2, 0, 1],
          allowNegative: true,
        },
        steps: [
          {
            text: {
              en: "1 × det[1 3 / 0 1] = 1 × {{1}}.",
              pt: "1 × det[1 3 / 0 1] = 1 × {{1}}.",
              es: "1 × det[1 3 / 0 1] = 1 × {{1}}.",
            },
          },
          {
            text: {
              en: "− 2 × det[0 3 / 2 1] = −2 × (0 − 6) = {{12}}.",
              pt: "− 2 × det[0 3 / 2 1] = −2 × (0 − 6) = {{12}}.",
              es: "− 2 × det[0 3 / 2 1] = −2 × (0 − 6) = {{12}}.",
            },
          },
          {
            text: {
              en: "+ 0 × (…) = 0. Total: {{1}} + {{12}} + 0 = 13.",
              pt: "+ 0 × (…) = 0. Total: {{1}} + {{12}} + 0 = 13.",
              es: "+ 0 × (…) = 0. Total: {{1}} + {{12}} + 0 = 13.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 30 },
      generate: generateDet3x3,
    },
    {
      id: "gold-35",
      beltId: "gold",
      index: 5,
      degree: matricesDegree,
      title: { en: "The trace", pt: "O traço", es: "La traza" },
      summary: {
        en: "Sum of the main diagonal — a quick fingerprint.",
        pt: "Soma da diagonal principal — uma impressão digital rápida.",
        es: "Suma de la diagonal principal — una huella rápida.",
      },
      lesson: {
        intro: {
          en: "The trace adds the top-left and bottom-right entries. That's it — but it shows up everywhere in advanced math.",
          pt: "O traço soma o canto superior esquerdo com o inferior direito. Só isso — mas aparece em todo lugar na matemática avançada.",
          es: "La traza suma la esquina superior izquierda con la inferior derecha. Eso es todo — pero aparece en todas partes en matemática avanzada.",
        },
        example: { id: "ex-gold-35", prompt: "tr [4 2 / 1 7]", answer: 11, operands: [4, 2, 1, 7] },
        steps: [
          {
            text: {
              en: "Main diagonal entries: 4 and 7.",
              pt: "Elementos da diagonal principal: 4 e 7.",
              es: "Elementos de la diagonal principal: 4 y 7.",
            },
          },
          {
            text: {
              en: "Add: 4 + 7 = 11.",
              pt: "Some: 4 + 7 = 11.",
              es: "Suma: 4 + 7 = 11.",
            },
          },
          { text: { en: "tr = 11.", pt: "tr = 11.", es: "tr = 11." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 8 },
      generate: generateTrace,
    },
    {
      id: "gold-36",
      beltId: "gold",
      index: 6,
      degree: matricesDegree,
      title: { en: "Row times column", pt: "Linha vezes coluna", es: "Fila por columna" },
      summary: {
        en: "The dot product — the atom of matrix multiplication.",
        pt: "O produto escalar — o átomo da multiplicação de matrizes.",
        es: "El producto punto — el átomo de la multiplicación de matrices.",
      },
      lesson: {
        intro: {
          en: "Multiply matching positions and add: [2 3] · [4 5]ᵀ = 2×4 + 3×5. Every entry of a matrix product is one of these.",
          pt: "Multiplique posições correspondentes e some: [2 3] · [4 5]ᵀ = 2×4 + 3×5. Cada elemento de um produto de matrizes é um desses.",
          es: "Multiplica posiciones correspondientes y suma: [2 3] · [4 5]ᵀ = 2×4 + 3×5. Cada elemento de un producto de matrices es uno de estos.",
        },
        example: { id: "ex-gold-36", prompt: "[2 3] · [4 5]ᵀ", answer: 23, operands: [2, 3, 4, 5] },
        steps: [
          {
            text: {
              en: "First pair: 2 × 4 = {{8}}.",
              pt: "Primeiro par: 2 × 4 = {{8}}.",
              es: "Primer par: 2 × 4 = {{8}}.",
            },
          },
          {
            text: {
              en: "Second pair: 3 × 5 = {{15}}. Add: {{8}} + {{15}} = 23.",
              pt: "Segundo par: 3 × 5 = {{15}}. Some: {{8}} + {{15}} = 23.",
              es: "Segundo par: 3 × 5 = {{15}}. Suma: {{8}} + {{15}} = 23.",
            },
          },
          { text: { en: "Result: 23.", pt: "Resultado: 23.", es: "Resultado: 23." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateDotProduct,
    },
    {
      id: "gold-37",
      beltId: "gold",
      index: 7,
      degree: matricesDegree,
      title: { en: "General 2×2 systems", pt: "Sistemas 2×2 gerais", es: "Sistemas 2×2 generales" },
      summary: {
        en: "Add the equations to kill y, then back-substitute.",
        pt: "Some as equações para eliminar o y, depois substitua de volta.",
        es: "Suma las ecuaciones para eliminar y, luego sustituye.",
      },
      lesson: {
        intro: {
          en: "These systems have +y in one equation and −y in the other — adding them eliminates y instantly.",
          pt: "Esses sistemas têm +y numa equação e −y na outra — somar as duas elimina o y na hora.",
          es: "Estos sistemas tienen +y en una ecuación y −y en la otra — sumarlas elimina y al instante.",
        },
        example: {
          id: "ex-gold-37",
          prompt: "x + y = 7, 2x − y = 2",
          answer: 3,
          operands: [1, 7, 2, 2],
          secondaryAnswer: 4,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "x, y =",
        },
        steps: [
          {
            text: {
              en: "Add the equations: 3x = {{9}}, so x = 3.",
              pt: "Some as equações: 3x = {{9}}, então x = 3.",
              es: "Suma las ecuaciones: 3x = {{9}}, así que x = 3.",
            },
          },
          {
            text: {
              en: "Back-substitute: 3 + y = 7, so y = 4.",
              pt: "Substitua de volta: 3 + y = 7, então y = 4.",
              es: "Sustituye: 3 + y = 7, así que y = 4.",
            },
          },
          { text: { en: "x = 3, y = 4.", pt: "x = 3, y = 4.", es: "x = 3, y = 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateGeneralSystem,
    },
    {
      id: "gold-38",
      beltId: "gold",
      index: 8,
      degree: matricesDegree,
      title: { en: "Matrices & systems, mixed", pt: "Matrizes e sistemas, misturados", es: "Matrices y sistemas, mezclados" },
      summary: {
        en: "Determinants, traces, dot products and systems — shuffled.",
        pt: "Determinantes, traços, produtos escalares e sistemas — embaralhados.",
        es: "Determinantes, trazas, productos punto y sistemas — revueltos.",
      },
      lesson: {
        intro: {
          en: "Read the notation first: det means diagonals, tr means diagonal sum, a row · column means multiply-and-add.",
          pt: "Leia a notação primeiro: det é diagonais, tr é soma da diagonal, linha · coluna é multiplicar-e-somar.",
          es: "Lee la notación primero: det son diagonales, tr es suma diagonal, fila · columna es multiplicar-y-sumar.",
        },
        example: { id: "ex-gold-38", prompt: "det [3 1 / 2 4]", answer: 10, operands: [3, 1, 2, 4], allowNegative: true },
        steps: [
          {
            text: {
              en: "Main diagonal: 3 × 4 = {{12}}.",
              pt: "Diagonal principal: 3 × 4 = {{12}}.",
              es: "Diagonal principal: 3 × 4 = {{12}}.",
            },
          },
          {
            text: {
              en: "Other diagonal: 1 × 2 = 2. Subtract: {{12}} − 2 = 10.",
              pt: "Outra diagonal: 1 × 2 = 2. Subtraia: {{12}} − 2 = 10.",
              es: "Otra diagonal: 1 × 2 = 2. Resta: {{12}} − 2 = 10.",
            },
          },
          { text: { en: "det = 10.", pt: "det = 10.", es: "det = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateMatricesMix,
    },
    {
      id: "gold-39",
      beltId: "gold",
      index: 1,
      degree: polynomialsDegree,
      title: { en: "Degree of a polynomial", pt: "Grau de um polinômio", es: "Grado de un polinomio" },
      summary: {
        en: "The highest exponent rules the polynomial.",
        pt: "O maior expoente manda no polinômio.",
        es: "El mayor exponente manda en el polinomio.",
      },
      lesson: {
        intro: {
          en: "Scan every term and take the largest exponent of x — that single number is the degree.",
          pt: "Percorra todos os termos e pegue o maior expoente de x — esse número sozinho é o grau.",
          es: "Recorre todos los términos y toma el mayor exponente de x — ese solo número es el grado.",
        },
        example: {
          id: "ex-gold-39",
          prompt: "x⁵ − 3x² + 1",
          promptL10n: {
            en: "x⁵ − 3x² + 1 — degree?",
            pt: "x⁵ − 3x² + 1 — grau?",
            es: "x⁵ − 3x² + 1 — ¿grado?",
          },
          answer: 5,
          operands: [5, 2, 3, 1],
        },
        steps: [
          {
            text: {
              en: "Exponents present: 5, 2, and 0 (the constant).",
              pt: "Expoentes presentes: 5, 2 e 0 (a constante).",
              es: "Exponentes presentes: 5, 2 y 0 (la constante).",
            },
          },
          {
            text: {
              en: "The largest is {{5}}.",
              pt: "O maior é {{5}}.",
              es: "El mayor es {{5}}.",
            },
          },
          { text: { en: "Degree = 5.", pt: "Grau = 5.", es: "Grado = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 7 },
      generate: generatePolynomialDegree,
    },
    {
      id: "gold-40",
      beltId: "gold",
      index: 2,
      degree: polynomialsDegree,
      title: { en: "Evaluating polynomials", pt: "Valor numérico", es: "Evaluando polinomios" },
      summary: {
        en: "Substitute x and follow the order of operations.",
        pt: "Substitua o x e siga a ordem das operações.",
        es: "Sustituye x y sigue el orden de las operaciones.",
      },
      lesson: {
        intro: {
          en: "Replace every x with the given number — powers first, then products, then sums.",
          pt: "Troque todo x pelo número dado — potências primeiro, depois produtos, depois somas.",
          es: "Reemplaza cada x por el número dado — potencias primero, luego productos, luego sumas.",
        },
        example: {
          id: "ex-gold-40",
          prompt: "P(x) = x³ − 2x + 1; P(3)",
          answer: 22,
          operands: [-2, 1, 3],
          allowNegative: true,
        },
        steps: [
          {
            text: {
              en: "The power: 3³ = {{27}}.",
              pt: "A potência: 3³ = {{27}}.",
              es: "La potencia: 3³ = {{27}}.",
            },
          },
          {
            text: {
              en: "The rest: −2 × 3 = −6, plus 1.",
              pt: "O resto: −2 × 3 = −6, mais 1.",
              es: "El resto: −2 × 3 = −6, más 1.",
            },
          },
          {
            text: {
              en: "Total: {{27}} − 6 + 1 = 22.",
              pt: "Total: {{27}} − 6 + 1 = 22.",
              es: "Total: {{27}} − 6 + 1 = 22.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateEvaluatePolynomial,
    },
    {
      id: "gold-41",
      beltId: "gold",
      index: 3,
      degree: polynomialsDegree,
      title: { en: "The remainder theorem", pt: "Teorema do resto", es: "El teorema del resto" },
      summary: {
        en: "Dividing by (x − a)? The remainder is just P(a).",
        pt: "Dividindo por (x − a)? O resto é simplesmente P(a).",
        es: "¿Dividiendo por (x − a)? El resto es simplemente P(a).",
      },
      lesson: {
        intro: {
          en: "No long division needed: the remainder of P(x) ÷ (x − a) equals P evaluated at a. Just substitute.",
          pt: "Sem divisão longa: o resto de P(x) ÷ (x − a) é igual a P avaliado em a. É só substituir.",
          es: "Sin división larga: el resto de P(x) ÷ (x − a) es igual a P evaluado en a. Solo sustituye.",
        },
        example: {
          id: "ex-gold-41",
          prompt: "(x² + 3x + 5) ÷ (x − 2)",
          promptL10n: {
            en: "(x² + 3x + 5) ÷ (x − 2) — remainder?",
            pt: "(x² + 3x + 5) ÷ (x − 2) — resto?",
            es: "(x² + 3x + 5) ÷ (x − 2) — ¿resto?",
          },
          answer: 15,
          operands: [3, 5, 2],
        },
        steps: [
          {
            text: {
              en: "The divisor is (x − 2), so evaluate at x = {{2}}.",
              pt: "O divisor é (x − 2), então avalie em x = {{2}}.",
              es: "El divisor es (x − 2), así que evalúa en x = {{2}}.",
            },
          },
          {
            text: {
              en: "P({{2}}) = 4 + 6 + 5 = 15.",
              pt: "P({{2}}) = 4 + 6 + 5 = 15.",
              es: "P({{2}}) = 4 + 6 + 5 = 15.",
            },
          },
          { text: { en: "Remainder = 15.", pt: "Resto = 15.", es: "Resto = 15." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateRemainderTheorem,
    },
    {
      id: "gold-42",
      beltId: "gold",
      index: 4,
      degree: polynomialsDegree,
      title: { en: "Girard: sum and product", pt: "Girard: soma e produto", es: "Girard: suma y producto" },
      summary: {
        en: "Read the roots' sum and product straight off the coefficients.",
        pt: "Leia a soma e o produto das raízes direto dos coeficientes.",
        es: "Lee la suma y el producto de las raíces directo de los coeficientes.",
      },
      lesson: {
        intro: {
          en: "For x² − Sx + P = 0, the roots sum to S and multiply to P — no solving required.",
          pt: "Para x² − Sx + P = 0, as raízes somam S e multiplicam P — sem precisar resolver.",
          es: "Para x² − Sx + P = 0, las raíces suman S y multiplican P — sin necesidad de resolver.",
        },
        example: {
          id: "ex-gold-42",
          prompt: "x² − 7x + 10 = 0",
          promptL10n: {
            en: "x² − 7x + 10 = 0 — sum, product of roots?",
            pt: "x² − 7x + 10 = 0 — soma, produto das raízes?",
            es: "x² − 7x + 10 = 0 — ¿suma, producto de raíces?",
          },
          answer: 7,
          operands: [7, 10],
          secondaryAnswer: 10,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "S, P =",
        },
        steps: [
          {
            text: {
              en: "Sum = minus the x-coefficient: −(−7) = {{7}}.",
              pt: "Soma = menos o coeficiente de x: −(−7) = {{7}}.",
              es: "Suma = menos el coeficiente de x: −(−7) = {{7}}.",
            },
          },
          {
            text: {
              en: "Product = the constant: {{10}}.",
              pt: "Produto = o termo constante: {{10}}.",
              es: "Producto = la constante: {{10}}.",
            },
          },
          {
            text: {
              en: "Check: 2 and 5 work — 2 + 5 = 7, 2 × 5 = 10.",
              pt: "Confira: 2 e 5 funcionam — 2 + 5 = 7, 2 × 5 = 10.",
              es: "Verifica: 2 y 5 funcionan — 2 + 5 = 7, 2 × 5 = 10.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateGirardQuadratic,
    },
    {
      id: "gold-43",
      beltId: "gold",
      index: 5,
      degree: polynomialsDegree,
      title: { en: "Girard for cubics", pt: "Girard para cúbicas", es: "Girard para cúbicas" },
      summary: {
        en: "The sum of all three roots is −b/a.",
        pt: "A soma das três raízes é −b/a.",
        es: "La suma de las tres raíces es −b/a.",
      },
      lesson: {
        intro: {
          en: "In x³ + bx² + …, the roots sum to −b. Watch the sign of the x² term and flip it.",
          pt: "Em x³ + bx² + …, as raízes somam −b. Olhe o sinal do termo x² e inverta.",
          es: "En x³ + bx² + …, las raíces suman −b. Mira el signo del término x² e inviértelo.",
        },
        example: {
          id: "ex-gold-43",
          prompt: "x³ − 6x² + 11x − 6 = 0",
          promptL10n: {
            en: "x³ − 6x² + 11x − 6 = 0 — sum of the 3 roots?",
            pt: "x³ − 6x² + 11x − 6 = 0 — soma das 3 raízes?",
            es: "x³ − 6x² + 11x − 6 = 0 — ¿suma de las 3 raíces?",
          },
          answer: 6,
          operands: [6, 11, 6],
          isEquation: true,
          equationLabel: "S =",
        },
        steps: [
          {
            text: {
              en: "The x² coefficient is −6.",
              pt: "O coeficiente de x² é −6.",
              es: "El coeficiente de x² es −6.",
            },
          },
          {
            text: {
              en: "Flip the sign: sum = {{6}}.",
              pt: "Inverta o sinal: soma = {{6}}.",
              es: "Invierte el signo: suma = {{6}}.",
            },
          },
          {
            text: {
              en: "Check: the roots are 1, 2, 3 — and 1 + 2 + 3 = 6.",
              pt: "Confira: as raízes são 1, 2, 3 — e 1 + 2 + 3 = 6.",
              es: "Verifica: las raíces son 1, 2, 3 — y 1 + 2 + 3 = 6.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateGirardCubic,
    },
    {
      id: "gold-44",
      beltId: "gold",
      index: 6,
      degree: polynomialsDegree,
      title: { en: "Powers of i", pt: "Potências de i", es: "Potencias de i" },
      summary: {
        en: "i² = −1 and the powers cycle every 4 steps.",
        pt: "i² = −1 e as potências repetem a cada 4 passos.",
        es: "i² = −1 y las potencias se repiten cada 4 pasos.",
      },
      lesson: {
        intro: {
          en: "i, i² = −1, i³ = −i, i⁴ = 1, then it repeats. Divide the exponent by 4 and look at the remainder.",
          pt: "i, i² = −1, i³ = −i, i⁴ = 1, e aí repete. Divida o expoente por 4 e olhe o resto.",
          es: "i, i² = −1, i³ = −i, i⁴ = 1, y luego se repite. Divide el exponente entre 4 y mira el resto.",
        },
        example: { id: "ex-gold-44", prompt: "i⁴⁶", answer: -1, operands: [46], allowNegative: true },
        steps: [
          {
            text: {
              en: "46 ÷ 4 = 11 remainder {{2}}.",
              pt: "46 ÷ 4 = 11 com resto {{2}}.",
              es: "46 ÷ 4 = 11 con resto {{2}}.",
            },
          },
          {
            text: {
              en: "Remainder {{2}} means i⁴⁶ = i² = −1.",
              pt: "Resto {{2}} significa i⁴⁶ = i² = −1.",
              es: "Resto {{2}} significa i⁴⁶ = i² = −1.",
            },
          },
          { text: { en: "i⁴⁶ = −1.", pt: "i⁴⁶ = −1.", es: "i⁴⁶ = −1." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generatePowersOfI,
    },
    {
      id: "gold-45",
      beltId: "gold",
      index: 7,
      degree: polynomialsDegree,
      title: { en: "Adding complex numbers", pt: "Somando números complexos", es: "Sumando números complejos" },
      summary: {
        en: "Real with real, imaginary with imaginary.",
        pt: "Real com real, imaginário com imaginário.",
        es: "Real con real, imaginario con imaginario.",
      },
      lesson: {
        intro: {
          en: "A complex number has two independent parts. Add the real parts, then add the i-parts — they never mix.",
          pt: "Um número complexo tem duas partes independentes. Some as partes reais, depois as partes com i — elas nunca se misturam.",
          es: "Un número complejo tiene dos partes independientes. Suma las partes reales, luego las partes con i — nunca se mezclan.",
        },
        example: {
          id: "ex-gold-45",
          prompt: "(3 + 2i) + (1 + 4i) = a + bi",
          answer: 4,
          operands: [3, 2, 1, 4],
          secondaryAnswer: 6,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "a, b =",
        },
        steps: [
          {
            text: {
              en: "Real parts: 3 + 1 = {{4}}.",
              pt: "Partes reais: 3 + 1 = {{4}}.",
              es: "Partes reales: 3 + 1 = {{4}}.",
            },
          },
          {
            text: {
              en: "Imaginary parts: 2 + 4 = {{6}}.",
              pt: "Partes imaginárias: 2 + 4 = {{6}}.",
              es: "Partes imaginarias: 2 + 4 = {{6}}.",
            },
          },
          { text: { en: "Result: 4 + 6i.", pt: "Resultado: 4 + 6i.", es: "Resultado: 4 + 6i." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateComplexAddition,
    },
    {
      id: "gold-46",
      beltId: "gold",
      index: 8,
      degree: polynomialsDegree,
      title: { en: "Multiplying complex numbers", pt: "Multiplicando complexos", es: "Multiplicando complejos" },
      summary: {
        en: "Distribute like binomials — then i² becomes −1.",
        pt: "Distribua como binômios — e o i² vira −1.",
        es: "Distribuye como binomios — y el i² se vuelve −1.",
      },
      lesson: {
        intro: {
          en: "FOIL it out. The i² term flips sign and joins the real part: (a+bi)(c+di) = (ac − bd) + (ad + bc)i.",
          pt: "Distribua tudo. O termo com i² troca de sinal e entra na parte real: (a+bi)(c+di) = (ac − bd) + (ad + bc)i.",
          es: "Distribuye todo. El término con i² cambia de signo y entra en la parte real: (a+bi)(c+di) = (ac − bd) + (ad + bc)i.",
        },
        example: {
          id: "ex-gold-46",
          prompt: "(2 + i)(3 + 2i) = a + bi",
          answer: 4,
          operands: [2, 1, 3, 2],
          secondaryAnswer: 7,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "a, b =",
          allowNegative: true,
        },
        steps: [
          {
            text: {
              en: "Distribute: 6 + 4i + 3i + 2i².",
              pt: "Distribua: 6 + 4i + 3i + 2i².",
              es: "Distribuye: 6 + 4i + 3i + 2i².",
            },
          },
          {
            text: {
              en: "2i² = −2, so the real part is 6 − 2 = {{4}}.",
              pt: "2i² = −2, então a parte real é 6 − 2 = {{4}}.",
              es: "2i² = −2, así que la parte real es 6 − 2 = {{4}}.",
            },
          },
          {
            text: {
              en: "The i-part: 4i + 3i = {{7}}i. Result: 4 + 7i.",
              pt: "A parte com i: 4i + 3i = {{7}}i. Resultado: 4 + 7i.",
              es: "La parte con i: 4i + 3i = {{7}}i. Resultado: 4 + 7i.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateComplexMultiplication,
    },
    {
      id: "gold-47",
      beltId: "gold",
      index: 9,
      degree: polynomialsDegree,
      title: { en: "Modulus of a complex number", pt: "Módulo de um complexo", es: "Módulo de un complejo" },
      summary: {
        en: "|a + bi| is the hypotenuse of the (a, b) triangle.",
        pt: "|a + bi| é a hipotenusa do triângulo (a, b).",
        es: "|a + bi| es la hipotenusa del triángulo (a, b).",
      },
      lesson: {
        intro: {
          en: "Plot a + bi as the point (a, b). Its distance from the origin is √(a² + b²) — Pythagoras again.",
          pt: "Marque a + bi como o ponto (a, b). A distância até a origem é √(a² + b²) — Pitágoras de novo.",
          es: "Ubica a + bi como el punto (a, b). Su distancia al origen es √(a² + b²) — Pitágoras otra vez.",
        },
        example: { id: "ex-gold-47", prompt: "|3 + 4i|", answer: 5, operands: [3, 4] },
        steps: [
          {
            text: {
              en: "Square the parts: 3² + 4² = 9 + 16 = {{25}}.",
              pt: "Eleve as partes: 3² + 4² = 9 + 16 = {{25}}.",
              es: "Eleva las partes: 3² + 4² = 9 + 16 = {{25}}.",
            },
          },
          {
            text: {
              en: "Square root: √{{25}} = 5.",
              pt: "Raiz quadrada: √{{25}} = 5.",
              es: "Raíz cuadrada: √{{25}} = 5.",
            },
          },
          { text: { en: "|3 + 4i| = 5.", pt: "|3 + 4i| = 5.", es: "|3 + 4i| = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateComplexModulus,
    },
    {
      id: "gold-48",
      beltId: "gold",
      index: 10,
      degree: polynomialsDegree,
      title: { en: "Polynomials & complex, mixed", pt: "Polinômios e complexos, misturados", es: "Polinomios y complejos, mezclados" },
      summary: {
        en: "Girard, remainders, i-powers and moduli — shuffled.",
        pt: "Girard, restos, potências de i e módulos — embaralhados.",
        es: "Girard, restos, potencias de i y módulos — revueltos.",
      },
      lesson: {
        intro: {
          en: "Look for the fingerprint: an i means complex arithmetic, a division by (x − a) means substitute, a quadratic asks for Girard.",
          pt: "Procure a impressão digital: um i pede aritmética complexa, dividir por (x − a) pede substituição, uma quadrática pede Girard.",
          es: "Busca la huella: una i pide aritmética compleja, dividir por (x − a) pide sustituir, una cuadrática pide Girard.",
        },
        example: { id: "ex-gold-48", prompt: "|6 + 8i|", answer: 10, operands: [6, 8] },
        steps: [
          {
            text: {
              en: "6² + 8² = 36 + 64 = {{100}}.",
              pt: "6² + 8² = 36 + 64 = {{100}}.",
              es: "6² + 8² = 36 + 64 = {{100}}.",
            },
          },
          {
            text: {
              en: "√{{100}} = 10.",
              pt: "√{{100}} = 10.",
              es: "√{{100}} = 10.",
            },
          },
          { text: { en: "|6 + 8i| = 10.", pt: "|6 + 8i| = 10.", es: "|6 + 8i| = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generatePolynomialsMix,
    },
    {
      id: "gold-49",
      beltId: "gold",
      index: 1,
      degree: analyticDegree,
      title: { en: "Distance between points", pt: "Distância entre pontos", es: "Distancia entre puntos" },
      summary: {
        en: "Horizontal leg, vertical leg, Pythagoras.",
        pt: "Cateto horizontal, cateto vertical, Pitágoras.",
        es: "Cateto horizontal, cateto vertical, Pitágoras.",
      },
      lesson: {
        intro: {
          en: "The segment between two points is the hypotenuse of a right triangle: legs Δx and Δy. d = √(Δx² + Δy²).",
          pt: "O segmento entre dois pontos é a hipotenusa de um triângulo retângulo: catetos Δx e Δy. d = √(Δx² + Δy²).",
          es: "El segmento entre dos puntos es la hipotenusa de un triángulo rectángulo: catetos Δx y Δy. d = √(Δx² + Δy²).",
        },
        example: { id: "ex-gold-49", prompt: "d((1, 2), (4, 6))", answer: 5, operands: [1, 2, 4, 6] },
        steps: [
          {
            text: {
              en: "Δx = 4 − 1 = {{3}}, Δy = 6 − 2 = {{4}}.",
              pt: "Δx = 4 − 1 = {{3}}, Δy = 6 − 2 = {{4}}.",
              es: "Δx = 4 − 1 = {{3}}, Δy = 6 − 2 = {{4}}.",
            },
          },
          {
            text: {
              en: "√({{3}}² + {{4}}²) = √25 = 5.",
              pt: "√({{3}}² + {{4}}²) = √25 = 5.",
              es: "√({{3}}² + {{4}}²) = √25 = 5.",
            },
          },
          { text: { en: "d = 5.", pt: "d = 5.", es: "d = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateDistanceBetweenPoints,
    },
    {
      id: "gold-50",
      beltId: "gold",
      index: 2,
      degree: analyticDegree,
      title: { en: "The midpoint", pt: "O ponto médio", es: "El punto medio" },
      summary: {
        en: "Average the x's, average the y's.",
        pt: "Média dos x, média dos y.",
        es: "Promedia las x, promedia las y.",
      },
      lesson: {
        intro: {
          en: "The midpoint sits halfway in each direction: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
          pt: "O ponto médio fica na metade de cada direção: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
          es: "El punto medio está a mitad de camino en cada dirección: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
        },
        example: {
          id: "ex-gold-50",
          prompt: "M((2, 4), (6, 10)) = (x, y)",
          answer: 4,
          operands: [2, 4, 6, 10],
          secondaryAnswer: 7,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "x, y =",
        },
        steps: [
          {
            text: {
              en: "x: (2 + 6) ÷ 2 = {{4}}.",
              pt: "x: (2 + 6) ÷ 2 = {{4}}.",
              es: "x: (2 + 6) ÷ 2 = {{4}}.",
            },
          },
          {
            text: {
              en: "y: (4 + 10) ÷ 2 = {{7}}.",
              pt: "y: (4 + 10) ÷ 2 = {{7}}.",
              es: "y: (4 + 10) ÷ 2 = {{7}}.",
            },
          },
          { text: { en: "M = (4, 7).", pt: "M = (4, 7).", es: "M = (4, 7)." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateMidpoint,
    },
    {
      id: "gold-51",
      beltId: "gold",
      index: 3,
      degree: analyticDegree,
      title: { en: "Slope, with sign", pt: "Inclinação, com sinal", es: "Pendiente, con signo" },
      summary: {
        en: "Rise over run — and downhill lines are negative.",
        pt: "Variação de y sobre variação de x — retas que descem são negativas.",
        es: "Cambio de y sobre cambio de x — las rectas que bajan son negativas.",
      },
      lesson: {
        intro: {
          en: "m = Δy / Δx. If y drops while x grows, the slope comes out negative.",
          pt: "m = Δy / Δx. Se o y cai enquanto o x cresce, a inclinação sai negativa.",
          es: "m = Δy / Δx. Si y baja mientras x crece, la pendiente sale negativa.",
        },
        example: {
          id: "ex-gold-51",
          prompt: "m: (1, 2) → (3, 8)",
          answer: 3,
          operands: [1, 2, 3, 8],
          allowNegative: true,
          isEquation: true,
          equationLabel: "m =",
        },
        steps: [
          {
            text: {
              en: "Δy = 8 − 2 = {{6}}, Δx = 3 − 1 = {{2}}.",
              pt: "Δy = 8 − 2 = {{6}}, Δx = 3 − 1 = {{2}}.",
              es: "Δy = 8 − 2 = {{6}}, Δx = 3 − 1 = {{2}}.",
            },
          },
          {
            text: {
              en: "m = {{6}} ÷ {{2}} = 3.",
              pt: "m = {{6}} ÷ {{2}} = 3.",
              es: "m = {{6}} ÷ {{2}} = 3.",
            },
          },
          { text: { en: "m = 3.", pt: "m = 3.", es: "m = 3." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateIntegerSlope,
    },
    {
      id: "gold-52",
      beltId: "gold",
      index: 4,
      degree: analyticDegree,
      title: { en: "A line through a point", pt: "Reta passando por um ponto", es: "Una recta por un punto" },
      summary: {
        en: "Plug the point into y = mx + b and solve for b.",
        pt: "Substitua o ponto em y = mx + b e resolva para b.",
        es: "Sustituye el punto en y = mx + b y despeja b.",
      },
      lesson: {
        intro: {
          en: "If the line passes through (x, y), those coordinates satisfy the equation. Substitute them and b is the only unknown left.",
          pt: "Se a reta passa por (x, y), essas coordenadas satisfazem a equação. Substitua e o b fica sendo a única incógnita.",
          es: "Si la recta pasa por (x, y), esas coordenadas satisfacen la ecuación. Sustitúyelas y b queda como única incógnita.",
        },
        example: {
          id: "ex-gold-52",
          prompt: "y = 2x + b, (3, 10)",
          promptL10n: {
            en: "y = 2x + b passes through (3, 10) — b?",
            pt: "y = 2x + b passa por (3, 10) — b?",
            es: "y = 2x + b pasa por (3, 10) — ¿b?",
          },
          answer: 4,
          operands: [2, 3, 10],
          allowNegative: true,
          isEquation: true,
          equationLabel: "b =",
        },
        steps: [
          {
            text: {
              en: "Substitute: 10 = 2 × 3 + b.",
              pt: "Substitua: 10 = 2 × 3 + b.",
              es: "Sustituye: 10 = 2 × 3 + b.",
            },
          },
          {
            text: {
              en: "10 = {{6}} + b, so b = 4.",
              pt: "10 = {{6}} + b, então b = 4.",
              es: "10 = {{6}} + b, así que b = 4.",
            },
          },
          { text: { en: "b = 4.", pt: "b = 4.", es: "b = 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateLineThroughPoint,
    },
    {
      id: "gold-53",
      beltId: "gold",
      index: 5,
      degree: analyticDegree,
      title: { en: "Where the line crosses x", pt: "Onde a reta corta o eixo x", es: "Dónde la recta corta el eje x" },
      summary: {
        en: "Set y = 0 and solve.",
        pt: "Iguale y = 0 e resolva.",
        es: "Iguala y = 0 y resuelve.",
      },
      lesson: {
        intro: {
          en: "On the x-axis the height is zero. Replace y with 0 and solve the little equation for x.",
          pt: "No eixo x a altura é zero. Troque y por 0 e resolva a equaçãozinha para x.",
          es: "En el eje x la altura es cero. Reemplaza y por 0 y resuelve la pequeña ecuación para x.",
        },
        example: {
          id: "ex-gold-53",
          prompt: "y = 2x − 8: y = 0",
          promptL10n: {
            en: "y = 2x − 8 — x-intercept?",
            pt: "y = 2x − 8 — corta o eixo x em?",
            es: "y = 2x − 8 — ¿corte con el eje x?",
          },
          answer: 4,
          operands: [2, -8],
          allowNegative: true,
          isEquation: true,
        },
        steps: [
          {
            text: {
              en: "Set y = 0: 0 = 2x − 8.",
              pt: "Iguale y = 0: 0 = 2x − 8.",
              es: "Iguala y = 0: 0 = 2x − 8.",
            },
          },
          {
            text: {
              en: "2x = {{8}}, so x = 4.",
              pt: "2x = {{8}}, então x = 4.",
              es: "2x = {{8}}, así que x = 4.",
            },
          },
          { text: { en: "x = 4.", pt: "x = 4.", es: "x = 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateLineXIntercept,
    },
    {
      id: "gold-54",
      beltId: "gold",
      index: 6,
      degree: analyticDegree,
      title: { en: "Perpendicular slopes", pt: "Retas perpendiculares", es: "Pendientes perpendiculares" },
      summary: {
        en: "Flip the fraction and switch the sign.",
        pt: "Inverta a fração e troque o sinal.",
        es: "Invierte la fracción y cambia el signo.",
      },
      lesson: {
        intro: {
          en: "Perpendicular lines have slopes that multiply to −1: m' = −1/m. A slope of 1/4 turns into −4.",
          pt: "Retas perpendiculares têm inclinações que multiplicam −1: m' = −1/m. Uma inclinação 1/4 vira −4.",
          es: "Las rectas perpendiculares tienen pendientes que multiplican −1: m' = −1/m. Una pendiente 1/4 se vuelve −4.",
        },
        example: {
          id: "ex-gold-54",
          prompt: "m = 1/4 ⊥ m' = ?",
          promptL10n: {
            en: "Line with slope 1/4 — perpendicular slope?",
            pt: "Reta com inclinação 1/4 — inclinação da perpendicular?",
            es: "Recta con pendiente 1/4 — ¿pendiente de la perpendicular?",
          },
          answer: -4,
          operands: [4],
          allowNegative: true,
          isEquation: true,
          equationLabel: "m' =",
        },
        steps: [
          {
            text: {
              en: "Flip 1/4 into {{4}}.",
              pt: "Inverta 1/4 para {{4}}.",
              es: "Invierte 1/4 a {{4}}.",
            },
          },
          {
            text: {
              en: "Switch the sign: −{{4}}.",
              pt: "Troque o sinal: −{{4}}.",
              es: "Cambia el signo: −{{4}}.",
            },
          },
          { text: { en: "m' = −4.", pt: "m' = −4.", es: "m' = −4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generatePerpendicularSlope,
    },
    {
      id: "gold-55",
      beltId: "gold",
      index: 7,
      degree: analyticDegree,
      title: { en: "The circle equation", pt: "A equação da circunferência", es: "La ecuación de la circunferencia" },
      summary: {
        en: "x² + y² = r² — the right side hides the radius, squared.",
        pt: "x² + y² = r² — o lado direito esconde o raio ao quadrado.",
        es: "x² + y² = r² — el lado derecho esconde el radio al cuadrado.",
      },
      lesson: {
        intro: {
          en: "Every point at distance r from the origin satisfies x² + y² = r². Take the square root of the right side.",
          pt: "Todo ponto a distância r da origem satisfaz x² + y² = r². Tire a raiz quadrada do lado direito.",
          es: "Todo punto a distancia r del origen satisface x² + y² = r². Saca la raíz cuadrada del lado derecho.",
        },
        example: {
          id: "ex-gold-55",
          prompt: "x² + y² = 49",
          promptL10n: {
            en: "x² + y² = 49 — radius?",
            pt: "x² + y² = 49 — raio?",
            es: "x² + y² = 49 — ¿radio?",
          },
          answer: 7,
          operands: [49],
          isEquation: true,
          equationLabel: "r =",
        },
        steps: [
          {
            text: {
              en: "The right side is r² = {{49}}.",
              pt: "O lado direito é r² = {{49}}.",
              es: "El lado derecho es r² = {{49}}.",
            },
          },
          {
            text: {
              en: "r = √{{49}} = 7.",
              pt: "r = √{{49}} = 7.",
              es: "r = √{{49}} = 7.",
            },
          },
          { text: { en: "r = 7.", pt: "r = 7.", es: "r = 7." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 5, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateCircleRadius,
    },
    {
      id: "gold-56",
      beltId: "gold",
      index: 8,
      degree: analyticDegree,
      title: { en: "Center of a circle", pt: "Centro da circunferência", es: "Centro de la circunferencia" },
      summary: {
        en: "(x − a)² + (y − b)² = r² — the center is (a, b), signs flipped.",
        pt: "(x − a)² + (y − b)² = r² — o centro é (a, b), com sinais invertidos.",
        es: "(x − a)² + (y − b)² = r² — el centro es (a, b), con signos invertidos.",
      },
      lesson: {
        intro: {
          en: "Whatever is subtracted inside the parentheses is the center coordinate. (y + 2)² means b = −2 — flip the sign you see.",
          pt: "O que está sendo subtraído dentro dos parênteses é a coordenada do centro. (y + 2)² significa b = −2 — inverta o sinal que você vê.",
          es: "Lo que se resta dentro del paréntesis es la coordenada del centro. (y + 2)² significa b = −2 — invierte el signo que ves.",
        },
        example: {
          id: "ex-gold-56",
          prompt: "(x − 3)² + (y + 2)² = 25",
          promptL10n: {
            en: "(x − 3)² + (y + 2)² = 25 — center?",
            pt: "(x − 3)² + (y + 2)² = 25 — centro?",
            es: "(x − 3)² + (y + 2)² = 25 — ¿centro?",
          },
          answer: 3,
          operands: [3, -2, 25],
          secondaryAnswer: -2,
          secondaryFormat: "pair",
          isEquation: true,
          equationLabel: "x, y =",
          allowNegative: true,
        },
        steps: [
          {
            text: {
              en: "(x − 3)²: the center's x is {{3}}.",
              pt: "(x − 3)²: o x do centro é {{3}}.",
              es: "(x − 3)²: la x del centro es {{3}}.",
            },
          },
          {
            text: {
              en: "(y + 2)² is (y − (−2))²: the center's y is −2.",
              pt: "(y + 2)² é (y − (−2))²: o y do centro é −2.",
              es: "(y + 2)² es (y − (−2))²: la y del centro es −2.",
            },
          },
          { text: { en: "Center = (3, −2).", pt: "Centro = (3, −2).", es: "Centro = (3, −2)." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateCircleCenter,
    },
    {
      id: "gold-57",
      beltId: "gold",
      index: 9,
      degree: analyticDegree,
      title: { en: "Radius through a point", pt: "Raio por um ponto", es: "Radio por un punto" },
      summary: {
        en: "The radius is the distance from center to any point on the circle.",
        pt: "O raio é a distância do centro a qualquer ponto da circunferência.",
        es: "El radio es la distancia del centro a cualquier punto de la circunferencia.",
      },
      lesson: {
        intro: {
          en: "Center at the origin, point on the circle given — the radius is just the distance formula again.",
          pt: "Centro na origem, ponto na circunferência dado — o raio é só a fórmula da distância de novo.",
          es: "Centro en el origen, punto en la circunferencia dado — el radio es solo la fórmula de distancia otra vez.",
        },
        example: {
          id: "ex-gold-57",
          prompt: "C(0, 0), P(6, 8)",
          promptL10n: {
            en: "Circle centered (0, 0) through (6, 8) — radius?",
            pt: "Circunferência de centro (0, 0) passando por (6, 8) — raio?",
            es: "Circunferencia con centro (0, 0) que pasa por (6, 8) — ¿radio?",
          },
          answer: 10,
          operands: [6, 8],
          isEquation: true,
          equationLabel: "r =",
        },
        steps: [
          {
            text: {
              en: "r² = 6² + 8² = 36 + 64 = {{100}}.",
              pt: "r² = 6² + 8² = 36 + 64 = {{100}}.",
              es: "r² = 6² + 8² = 36 + 64 = {{100}}.",
            },
          },
          {
            text: {
              en: "r = √{{100}} = 10.",
              pt: "r = √{{100}} = 10.",
              es: "r = √{{100}} = 10.",
            },
          },
          { text: { en: "r = 10.", pt: "r = 10.", es: "r = 10." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateCircleThroughPoint,
    },
    {
      id: "gold-58",
      beltId: "gold",
      index: 10,
      degree: analyticDegree,
      title: { en: "Analytic geometry, mixed", pt: "Geometria analítica, misturada", es: "Geometría analítica, mezclada" },
      summary: {
        en: "Distances, midpoints, lines and circles — shuffled.",
        pt: "Distâncias, pontos médios, retas e circunferências — embaralhados.",
        es: "Distancias, puntos medios, rectas y circunferencias — revueltos.",
      },
      lesson: {
        intro: {
          en: "Everything on the plane mixes here. Parse the notation — d(…) is distance, M(…) is midpoint, an equation with x² + y² is a circle.",
          pt: "Tudo do plano se mistura aqui. Leia a notação — d(…) é distância, M(…) é ponto médio, equação com x² + y² é circunferência.",
          es: "Todo el plano se mezcla aquí. Lee la notación — d(…) es distancia, M(…) es punto medio, ecuación con x² + y² es circunferencia.",
        },
        example: { id: "ex-gold-58", prompt: "d((0, 0), (3, 4))", answer: 5, operands: [0, 0, 3, 4] },
        steps: [
          {
            text: {
              en: "Legs: 3 and 4.",
              pt: "Catetos: 3 e 4.",
              es: "Catetos: 3 y 4.",
            },
          },
          {
            text: {
              en: "√(9 + 16) = √{{25}} = 5.",
              pt: "√(9 + 16) = √{{25}} = 5.",
              es: "√(9 + 16) = √{{25}} = 5.",
            },
          },
          { text: { en: "d = 5.", pt: "d = 5.", es: "d = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateAnalyticGeometryMix,
    },
    {
      id: "gold-59",
      beltId: "gold",
      index: 1,
      degree: goldExamDegree,
      title: {
        en: "Gold Belt exam: everything mixed",
        pt: "Prova da Faixa Dourada: tudo misturado",
        es: "Examen del Cinturón Dorado: todo mezclado",
      },
      summary: {
        en: "All six degrees in one final gauntlet — the entrance-exam simulator.",
        pt: "Os seis níveis numa prova final — o simulado de vestibular.",
        es: "Los seis niveles en una prueba final — el simulador de examen.",
      },
      lesson: {
        intro: {
          en: "Logs, sequences, probability, matrices, complex numbers and the plane — anything can come. Name the topic before touching the numbers.",
          pt: "Logs, sequências, probabilidade, matrizes, complexos e o plano — pode vir qualquer coisa. Nomeie o assunto antes de mexer nos números.",
          es: "Logs, sucesiones, probabilidad, matrices, complejos y el plano — puede venir cualquier cosa. Nombra el tema antes de tocar los números.",
        },
        example: { id: "ex-gold-59", prompt: "log₂ 16", answer: 4, operands: [2, 16] },
        steps: [
          {
            text: {
              en: "Spot the topic: a logarithm — an exponent hunt.",
              pt: "Identifique o assunto: um logaritmo — caça ao expoente.",
              es: "Identifica el tema: un logaritmo — búsqueda del exponente.",
            },
          },
          {
            text: {
              en: "2⁴ = 16, so the answer is {{4}}.",
              pt: "2⁴ = 16, então a resposta é {{4}}.",
              es: "2⁴ = 16, así que la respuesta es {{4}}.",
            },
          },
          { text: { en: "log₂ 16 = 4.", pt: "log₂ 16 = 4.", es: "log₂ 16 = 4." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateGoldBeltMix,
    },
  ],
};

const digitalBelt: Belt = {
  id: "digital",
  name: { en: "Digital Belt", pt: "Faixa Digital", es: "Cinturón Digital" },
  order: 9,
  operationLabel: {
    en: "Binary · Modulo · Logic · Graphs",
    pt: "Binário · Módulo · Lógica · Grafos",
    es: "Binario · Módulo · Lógica · Grafos",
  },
  colorVar: "--belt-digital",
  tagline: {
    en: "The math running inside every computer — bases, bits, sets and steps.",
    pt: "A matemática que roda dentro de todo computador — bases, bits, conjuntos e passos.",
    es: "La matemática que corre dentro de toda computadora — bases, bits, conjuntos y pasos.",
  },
  stripes: [
    {
      id: "digital-1",
      beltId: "digital",
      index: 1,
      title: { en: "Binary to decimal", pt: "Binário para decimal", es: "Binario a decimal" },
      summary: {
        en: "Each binary digit is a power of 2 — add the ones that are on.",
        pt: "Cada dígito binário é uma potência de 2 — some as que estão ligadas.",
        es: "Cada dígito binario es una potencia de 2 — suma las que están encendidas.",
      },
      lesson: {
        intro: {
          en: "Reading right to left, the places are worth 1, 2, 4, 8, 16… A digit 1 means that power counts; a 0 means it doesn't.",
          pt: "Lendo da direita para a esquerda, as casas valem 1, 2, 4, 8, 16… Um dígito 1 significa que aquela potência conta; um 0, que não.",
          es: "Leyendo de derecha a izquierda, los lugares valen 1, 2, 4, 8, 16… Un dígito 1 significa que esa potencia cuenta; un 0, que no.",
        },
        example: {
          id: "ex-digital-1",
          prompt: "1011₂",
          promptL10n: { en: "1011₂ in decimal", pt: "1011₂ em decimal", es: "1011₂ en decimal" },
          answer: 11,
          operands: [11],
        },
        steps: [
          {
            text: {
              en: "Place values with a 1: 8, 2 and 1 (the 4 is off).",
              pt: "Casas com 1: 8, 2 e 1 (o 4 está desligado).",
              es: "Lugares con 1: 8, 2 y 1 (el 4 está apagado).",
            },
          },
          {
            text: {
              en: "Add them: 8 + 2 + 1 = 11.",
              pt: "Some: 8 + 2 + 1 = 11.",
              es: "Súmalos: 8 + 2 + 1 = 11.",
            },
          },
          { text: { en: "1011₂ = 11.", pt: "1011₂ = 11.", es: "1011₂ = 11." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateBinaryToDecimal,
    },
    {
      id: "digital-2",
      beltId: "digital",
      index: 2,
      title: { en: "Decimal to binary", pt: "Decimal para binário", es: "Decimal a binario" },
      summary: {
        en: "Break the number into powers of 2, largest first.",
        pt: "Quebre o número em potências de 2, da maior para a menor.",
        es: "Divide el número en potencias de 2, de mayor a menor.",
      },
      lesson: {
        intro: {
          en: "Grab the biggest power of 2 that fits, subtract, repeat. Write a 1 for every power you used and a 0 for the ones you skipped.",
          pt: "Pegue a maior potência de 2 que cabe, subtraia, repita. Escreva 1 para cada potência usada e 0 para as que pulou.",
          es: "Toma la mayor potencia de 2 que quepa, resta, repite. Escribe 1 por cada potencia usada y 0 por las que saltaste.",
        },
        example: {
          id: "ex-digital-2",
          prompt: "13 → binary",
          promptL10n: { en: "13 in binary", pt: "13 em binário", es: "13 en binario" },
          answer: 1101,
          operands: [13],
        },
        steps: [
          {
            text: {
              en: "13 = 8 + 4 + 1 — powers 8, 4 and 1 are used, 2 is skipped.",
              pt: "13 = 8 + 4 + 1 — as potências 8, 4 e 1 entram, o 2 fica de fora.",
              es: "13 = 8 + 4 + 1 — las potencias 8, 4 y 1 entran, el 2 queda fuera.",
            },
          },
          {
            text: {
              en: "From the 8s place down: 1 1 0 1.",
              pt: "Da casa do 8 para baixo: 1 1 0 1.",
              es: "Del lugar del 8 hacia abajo: 1 1 0 1.",
            },
          },
          { text: { en: "13 = 1101₂.", pt: "13 = 1101₂.", es: "13 = 1101₂." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 16 },
      generate: generateDecimalToBinary,
    },
    {
      id: "digital-3",
      beltId: "digital",
      index: 3,
      title: { en: "Powers of two", pt: "Potências de 2", es: "Potencias de 2" },
      summary: {
        en: "256, 1024, 65536 — the numbers computers are made of.",
        pt: "256, 1024, 65536 — os números de que os computadores são feitos.",
        es: "256, 1024, 65536 — los números de los que están hechas las computadoras.",
      },
      lesson: {
        intro: {
          en: "Every doubling adds one exponent. Memorize the landmarks: 2⁸ = 256, 2¹⁰ = 1024, 2¹⁶ = 65536 — and build the rest by doubling or halving.",
          pt: "Cada dobro soma um no expoente. Decore os marcos: 2⁸ = 256, 2¹⁰ = 1024, 2¹⁶ = 65536 — e monte o resto dobrando ou dividindo.",
          es: "Cada doble suma uno al exponente. Memoriza los hitos: 2⁸ = 256, 2¹⁰ = 1024, 2¹⁶ = 65536 — y arma el resto doblando o dividiendo.",
        },
        example: { id: "ex-digital-3", prompt: "2¹⁰", answer: 1024, operands: [10] },
        steps: [
          {
            text: {
              en: "Landmark: 2⁸ = {{256}}.",
              pt: "Marco: 2⁸ = {{256}}.",
              es: "Hito: 2⁸ = {{256}}.",
            },
          },
          {
            text: {
              en: "Double twice: {{256}} → 512 → 1024.",
              pt: "Dobre duas vezes: {{256}} → 512 → 1024.",
              es: "Dobla dos veces: {{256}} → 512 → 1024.",
            },
          },
          { text: { en: "2¹⁰ = 1024.", pt: "2¹⁰ = 1024.", es: "2¹⁰ = 1024." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generatePowersOfTwo,
    },
    {
      id: "digital-4",
      beltId: "digital",
      index: 4,
      title: { en: "Hex to decimal", pt: "Hexadecimal para decimal", es: "Hexadecimal a decimal" },
      summary: {
        en: "Base 16: digits go 0-9 then A-F, places are worth 16.",
        pt: "Base 16: os dígitos vão de 0-9 e depois A-F, as casas valem 16.",
        es: "Base 16: los dígitos van de 0-9 y luego A-F, los lugares valen 16.",
      },
      lesson: {
        intro: {
          en: "In 0x2F, the 2 sits in the sixteens place and F means 15. Multiply and add: 2 × 16 + 15.",
          pt: "Em 0x2F, o 2 está na casa dos dezesseis e F significa 15. Multiplique e some: 2 × 16 + 15.",
          es: "En 0x2F, el 2 está en el lugar de los dieciséis y F significa 15. Multiplica y suma: 2 × 16 + 15.",
        },
        example: {
          id: "ex-digital-4",
          prompt: "0x2F",
          promptL10n: { en: "0x2F in decimal", pt: "0x2F em decimal", es: "0x2F en decimal" },
          answer: 47,
          operands: [47],
        },
        steps: [
          {
            text: {
              en: "The 2 is worth 2 × 16 = {{32}}.",
              pt: "O 2 vale 2 × 16 = {{32}}.",
              es: "El 2 vale 2 × 16 = {{32}}.",
            },
          },
          {
            text: {
              en: "F is 15. Add: {{32}} + 15 = 47.",
              pt: "F é 15. Some: {{32}} + 15 = 47.",
              es: "F es 15. Suma: {{32}} + 15 = 47.",
            },
          },
          { text: { en: "0x2F = 47.", pt: "0x2F = 47.", es: "0x2F = 47." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateHexToDecimal,
    },
    {
      id: "digital-5",
      beltId: "digital",
      index: 5,
      title: { en: "The modulo operation", pt: "A operação módulo", es: "La operación módulo" },
      summary: {
        en: "a mod b is the remainder — the heartbeat of clocks and hashes.",
        pt: "a mod b é o resto — o coração de relógios e hashes.",
        es: "a mod b es el resto — el corazón de relojes y hashes.",
      },
      lesson: {
        intro: {
          en: "Divide, ignore the quotient, keep the leftover. 17 mod 5: how much is left after taking out all whole 5s?",
          pt: "Divida, ignore o quociente, fique com a sobra. 17 mod 5: quanto sobra depois de tirar todos os 5 inteiros?",
          es: "Divide, ignora el cociente, quédate con el sobrante. 17 mod 5: ¿cuánto queda después de sacar todos los 5 enteros?",
        },
        example: { id: "ex-digital-5", prompt: "17 mod 5", answer: 2, operands: [17, 5] },
        steps: [
          {
            text: {
              en: "Whole fives inside 17: 3 × 5 = {{15}}.",
              pt: "Cincos inteiros dentro de 17: 3 × 5 = {{15}}.",
              es: "Cincos enteros dentro de 17: 3 × 5 = {{15}}.",
            },
          },
          {
            text: {
              en: "Leftover: 17 − {{15}} = 2.",
              pt: "Sobra: 17 − {{15}} = 2.",
              es: "Sobrante: 17 − {{15}} = 2.",
            },
          },
          { text: { en: "17 mod 5 = 2.", pt: "17 mod 5 = 2.", es: "17 mod 5 = 2." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateModulo,
    },
    {
      id: "digital-6",
      beltId: "digital",
      index: 6,
      title: { en: "Binary addition", pt: "Soma binária", es: "Suma binaria" },
      summary: {
        en: "1 + 1 = 10 — the carry is everything.",
        pt: "1 + 1 = 10 — o 'vai um' é tudo.",
        es: "1 + 1 = 10 — la llevada lo es todo.",
      },
      lesson: {
        intro: {
          en: "Same column arithmetic you know, but the column overflows at 2 instead of 10. Or convert to decimal, add, convert back.",
          pt: "A mesma conta em colunas que você conhece, mas a coluna estoura no 2 em vez de no 10. Ou converta para decimal, some, e volte.",
          es: "La misma cuenta en columnas que conoces, pero la columna se desborda en 2 en vez de 10. O convierte a decimal, suma, y vuelve.",
        },
        example: {
          id: "ex-digital-6",
          prompt: "101₂ + 11₂",
          promptL10n: {
            en: "101₂ + 11₂ (answer in binary)",
            pt: "101₂ + 11₂ (resposta em binário)",
            es: "101₂ + 11₂ (respuesta en binario)",
          },
          answer: 1000,
          operands: [5, 3],
        },
        steps: [
          {
            text: {
              en: "In decimal: 101₂ = {{5}} and 11₂ = {{3}}.",
              pt: "Em decimal: 101₂ = {{5}} e 11₂ = {{3}}.",
              es: "En decimal: 101₂ = {{5}} y 11₂ = {{3}}.",
            },
          },
          {
            text: {
              en: "{{5}} + {{3}} = 8, and 8 in binary is 1000.",
              pt: "{{5}} + {{3}} = 8, e 8 em binário é 1000.",
              es: "{{5}} + {{3}} = 8, y 8 en binario es 1000.",
            },
          },
          { text: { en: "101₂ + 11₂ = 1000₂.", pt: "101₂ + 11₂ = 1000₂.", es: "101₂ + 11₂ = 1000₂." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateBinaryAddition,
    },
    {
      id: "digital-7",
      beltId: "digital",
      index: 7,
      title: { en: "Bitwise AND", pt: "AND bit a bit", es: "AND bit a bit" },
      summary: {
        en: "A bit survives only where both numbers have it.",
        pt: "Um bit sobrevive só onde os dois números o têm.",
        es: "Un bit sobrevive solo donde ambos números lo tienen.",
      },
      lesson: {
        intro: {
          en: "Write both numbers in binary and compare column by column: 1 AND 1 gives 1, anything else gives 0.",
          pt: "Escreva os dois números em binário e compare coluna por coluna: 1 AND 1 dá 1, qualquer outra coisa dá 0.",
          es: "Escribe ambos números en binario y compara columna por columna: 1 AND 1 da 1, cualquier otra cosa da 0.",
        },
        example: { id: "ex-digital-7", prompt: "6 AND 3", answer: 2, operands: [6, 3] },
        steps: [
          {
            text: {
              en: "6 = 110₂ and 3 = 011₂.",
              pt: "6 = 110₂ e 3 = 011₂.",
              es: "6 = 110₂ y 3 = 011₂.",
            },
          },
          {
            text: {
              en: "Only the middle column has 1 in both: 010₂ = {{2}}.",
              pt: "Só a coluna do meio tem 1 nos dois: 010₂ = {{2}}.",
              es: "Solo la columna del medio tiene 1 en ambos: 010₂ = {{2}}.",
            },
          },
          { text: { en: "6 AND 3 = 2.", pt: "6 AND 3 = 2.", es: "6 AND 3 = 2." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateBitwiseAnd,
    },
    {
      id: "digital-8",
      beltId: "digital",
      index: 8,
      title: { en: "OR and XOR", pt: "OR e XOR", es: "OR y XOR" },
      summary: {
        en: "OR merges the bits; XOR keeps only the differences.",
        pt: "OR junta os bits; XOR guarda só as diferenças.",
        es: "OR une los bits; XOR guarda solo las diferencias.",
      },
      lesson: {
        intro: {
          en: "Column by column: OR gives 1 if either bit is 1. XOR gives 1 only when the bits differ.",
          pt: "Coluna por coluna: OR dá 1 se qualquer bit for 1. XOR dá 1 só quando os bits são diferentes.",
          es: "Columna por columna: OR da 1 si cualquiera de los bits es 1. XOR da 1 solo cuando los bits difieren.",
        },
        example: { id: "ex-digital-8", prompt: "6 XOR 3", answer: 5, operands: [6, 3] },
        steps: [
          {
            text: {
              en: "6 = 110₂ and 3 = 011₂.",
              pt: "6 = 110₂ e 3 = 011₂.",
              es: "6 = 110₂ y 3 = 011₂.",
            },
          },
          {
            text: {
              en: "Columns that differ: left and right — 101₂ = {{5}}.",
              pt: "Colunas diferentes: esquerda e direita — 101₂ = {{5}}.",
              es: "Columnas que difieren: izquierda y derecha — 101₂ = {{5}}.",
            },
          },
          { text: { en: "6 XOR 3 = 5.", pt: "6 XOR 3 = 5.", es: "6 XOR 3 = 5." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateBitwiseOrXor,
    },
    {
      id: "digital-9",
      beltId: "digital",
      index: 9,
      title: { en: "Bit shifts", pt: "Deslocamento de bits", es: "Desplazamiento de bits" },
      summary: {
        en: "<< doubles, >> halves — one exponent per step.",
        pt: "<< dobra, >> divide pela metade — um expoente por passo.",
        es: "<< dobla, >> divide a la mitad — un exponente por paso.",
      },
      lesson: {
        intro: {
          en: "Shifting left appends a 0 in binary — that's a doubling. n << k multiplies n by 2ᵏ; n >> k divides it.",
          pt: "Deslocar para a esquerda acrescenta um 0 em binário — isso é dobrar. n << k multiplica n por 2ᵏ; n >> k divide.",
          es: "Desplazar a la izquierda agrega un 0 en binario — eso es doblar. n << k multiplica n por 2ᵏ; n >> k lo divide.",
        },
        example: { id: "ex-digital-9", prompt: "5 << 2", answer: 20, operands: [5, 2] },
        steps: [
          {
            text: {
              en: "Two left shifts = multiply by 2² = {{4}}.",
              pt: "Dois deslocamentos à esquerda = multiplicar por 2² = {{4}}.",
              es: "Dos desplazamientos a la izquierda = multiplicar por 2² = {{4}}.",
            },
          },
          {
            text: {
              en: "5 × {{4}} = 20.",
              pt: "5 × {{4}} = 20.",
              es: "5 × {{4}} = 20.",
            },
          },
          { text: { en: "5 << 2 = 20.", pt: "5 << 2 = 20.", es: "5 << 2 = 20." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 10 },
      generate: generateBitShift,
    },
    {
      id: "digital-10",
      beltId: "digital",
      index: 10,
      title: { en: "Counting with bits", pt: "Contando com bits", es: "Contando con bits" },
      summary: {
        en: "n bits make 2ⁿ values — and 2ⁿ truth-table rows.",
        pt: "n bits geram 2ⁿ valores — e 2ⁿ linhas na tabela-verdade.",
        es: "n bits generan 2ⁿ valores — y 2ⁿ filas en la tabla de verdad.",
      },
      lesson: {
        intro: {
          en: "Each new bit doubles the possibilities. 3 variables that can each be true or false give 2 × 2 × 2 = 8 combinations.",
          pt: "Cada bit novo dobra as possibilidades. 3 variáveis que podem ser verdadeiro ou falso dão 2 × 2 × 2 = 8 combinações.",
          es: "Cada bit nuevo dobla las posibilidades. 3 variables que pueden ser verdadero o falso dan 2 × 2 × 2 = 8 combinaciones.",
        },
        example: {
          id: "ex-digital-10",
          prompt: "truth table, 3 variables — rows?",
          promptL10n: {
            en: "Truth table with 3 variables — how many rows?",
            pt: "Tabela-verdade com 3 variáveis — quantas linhas?",
            es: "Tabla de verdad con 3 variables — ¿cuántas filas?",
          },
          answer: 8,
          operands: [3],
        },
        steps: [
          {
            text: {
              en: "Each variable doubles the count: 2 × 2 × 2.",
              pt: "Cada variável dobra a contagem: 2 × 2 × 2.",
              es: "Cada variable dobla la cuenta: 2 × 2 × 2.",
            },
          },
          {
            text: {
              en: "2³ = 8.",
              pt: "2³ = 8.",
              es: "2³ = 8.",
            },
          },
          { text: { en: "8 rows.", pt: "8 linhas.", es: "8 filas." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 9 },
      generate: generateTruthTableRows,
    },
    {
      id: "digital-11",
      beltId: "digital",
      index: 11,
      title: { en: "Sets: union size", pt: "Conjuntos: tamanho da união", es: "Conjuntos: tamaño de la unión" },
      summary: {
        en: "Add both sets, subtract the overlap you counted twice.",
        pt: "Some os dois conjuntos e subtraia a interseção contada duas vezes.",
        es: "Suma ambos conjuntos y resta la intersección contada dos veces.",
      },
      lesson: {
        intro: {
          en: "|A ∪ B| = |A| + |B| − |A ∩ B|. The overlap got counted in both sets, so it comes off once.",
          pt: "|A ∪ B| = |A| + |B| − |A ∩ B|. A interseção foi contada nos dois conjuntos, então sai uma vez.",
          es: "|A ∪ B| = |A| + |B| − |A ∩ B|. La intersección se contó en ambos conjuntos, así que se resta una vez.",
        },
        example: {
          id: "ex-digital-11",
          prompt: "|A| = 12, |B| = 9, |A ∩ B| = 4 — |A ∪ B|?",
          answer: 17,
          operands: [12, 9, 4],
        },
        steps: [
          {
            text: {
              en: "Add: 12 + 9 = {{21}}.",
              pt: "Some: 12 + 9 = {{21}}.",
              es: "Suma: 12 + 9 = {{21}}.",
            },
          },
          {
            text: {
              en: "Remove the double-counted overlap: {{21}} − 4 = 17.",
              pt: "Tire a interseção contada em dobro: {{21}} − 4 = 17.",
              es: "Quita la intersección contada doble: {{21}} − 4 = 17.",
            },
          },
          { text: { en: "|A ∪ B| = 17.", pt: "|A ∪ B| = 17.", es: "|A ∪ B| = 17." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateSetUnion,
    },
    {
      id: "digital-12",
      beltId: "digital",
      index: 12,
      title: { en: "Following a recursion", pt: "Seguindo uma recursão", es: "Siguiendo una recursión" },
      summary: {
        en: "Each value is built from the previous one — walk the chain.",
        pt: "Cada valor nasce do anterior — percorra a corrente.",
        es: "Cada valor nace del anterior — recorre la cadena.",
      },
      lesson: {
        intro: {
          en: "f(n) = f(n−1) + 5 says: to get the next value, add 5. Start at f(1) and step forward — or spot that n−1 steps of +5 is just (n−1) × 5.",
          pt: "f(n) = f(n−1) + 5 diz: para o próximo valor, some 5. Comece em f(1) e avance — ou perceba que n−1 passos de +5 é só (n−1) × 5.",
          es: "f(n) = f(n−1) + 5 dice: para el siguiente valor, suma 5. Empieza en f(1) y avanza — o nota que n−1 pasos de +5 es solo (n−1) × 5.",
        },
        example: {
          id: "ex-digital-12",
          prompt: "f(1) = 3, f(n) = f(n−1) + 5; f(6)",
          answer: 28,
          operands: [3, 5, 6],
        },
        steps: [
          {
            text: {
              en: "From f(1) to f(6) there are {{5}} steps of +5.",
              pt: "De f(1) até f(6) são {{5}} passos de +5.",
              es: "De f(1) a f(6) hay {{5}} pasos de +5.",
            },
          },
          {
            text: {
              en: "3 + {{5}} × 5 = 3 + 25 = 28.",
              pt: "3 + {{5}} × 5 = 3 + 25 = 28.",
              es: "3 + {{5}} × 5 = 3 + 25 = 28.",
            },
          },
          { text: { en: "f(6) = 28.", pt: "f(6) = 28.", es: "f(6) = 28." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateRecurrenceEval,
    },
    {
      id: "digital-13",
      beltId: "digital",
      index: 13,
      title: { en: "Graph facts", pt: "Fatos de grafos", es: "Hechos de grafos" },
      summary: {
        en: "Every edge touches two vertices — degrees always sum to 2 × edges.",
        pt: "Toda aresta toca dois vértices — os graus sempre somam 2 × arestas.",
        es: "Cada arista toca dos vértices — los grados siempre suman 2 × aristas.",
      },
      lesson: {
        intro: {
          en: "The handshake lemma: summing every vertex's degree counts each edge twice. And the complete graph Kₙ has C(n, 2) edges.",
          pt: "O lema do aperto de mão: somar o grau de todos os vértices conta cada aresta duas vezes. E o grafo completo Kₙ tem C(n, 2) arestas.",
          es: "El lema del apretón de manos: sumar el grado de cada vértice cuenta cada arista dos veces. Y el grafo completo Kₙ tiene C(n, 2) aristas.",
        },
        example: {
          id: "ex-digital-13",
          prompt: "graph, 7 edges — sum of degrees?",
          promptL10n: {
            en: "Graph with 7 edges — sum of all vertex degrees?",
            pt: "Grafo com 7 arestas — soma dos graus dos vértices?",
            es: "Grafo con 7 aristas — ¿suma de los grados de los vértices?",
          },
          answer: 14,
          operands: [7],
        },
        steps: [
          {
            text: {
              en: "Each edge contributes to exactly {{2}} vertices.",
              pt: "Cada aresta contribui para exatamente {{2}} vértices.",
              es: "Cada arista contribuye a exactamente {{2}} vértices.",
            },
          },
          {
            text: {
              en: "7 × {{2}} = 14.",
              pt: "7 × {{2}} = 14.",
              es: "7 × {{2}} = 14.",
            },
          },
          { text: { en: "Sum of degrees = 14.", pt: "Soma dos graus = 14.", es: "Suma de grados = 14." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateGraphFacts,
    },
    {
      id: "digital-14",
      beltId: "digital",
      index: 14,
      title: { en: "Counting steps", pt: "Contando passos", es: "Contando pasos" },
      summary: {
        en: "How many times does the loop run? The seed of Big-O.",
        pt: "Quantas vezes o loop roda? A semente do Big-O.",
        es: "¿Cuántas veces corre el bucle? La semilla del Big-O.",
      },
      lesson: {
        intro: {
          en: "Nested loops multiply (n × n). A triangular loop sums 1+2+…+n. Halving until 1 takes log₂ n steps. Recognize the pattern, then compute.",
          pt: "Loops aninhados multiplicam (n × n). Um loop triangular soma 1+2+…+n. Dividir pela metade até 1 leva log₂ n passos. Reconheça o padrão, depois calcule.",
          es: "Los bucles anidados multiplican (n × n). Un bucle triangular suma 1+2+…+n. Dividir a la mitad hasta 1 toma log₂ n pasos. Reconoce el patrón, luego calcula.",
        },
        example: {
          id: "ex-digital-14",
          prompt: "for i in 1..8: for j in 1..8 — steps?",
          promptL10n: {
            en: "Nested loops, each 1 to 8 — total iterations?",
            pt: "Loops aninhados, cada um de 1 a 8 — total de iterações?",
            es: "Bucles anidados, cada uno de 1 a 8 — ¿iteraciones totales?",
          },
          answer: 64,
          operands: [8],
        },
        steps: [
          {
            text: {
              en: "The inner loop runs 8 times for each of the 8 outer turns.",
              pt: "O loop interno roda 8 vezes para cada uma das 8 voltas do externo.",
              es: "El bucle interno corre 8 veces por cada una de las 8 vueltas del externo.",
            },
          },
          {
            text: {
              en: "8 × 8 = 64.",
              pt: "8 × 8 = 64.",
              es: "8 × 8 = 64.",
            },
          },
          { text: { en: "64 iterations.", pt: "64 iterações.", es: "64 iteraciones." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateLoopSteps,
    },
    {
      id: "digital-15",
      beltId: "digital",
      index: 15,
      title: {
        en: "Digital Belt exam: everything mixed",
        pt: "Prova da Faixa Digital: tudo misturado",
        es: "Examen del Cinturón Digital: todo mezclado",
      },
      summary: {
        en: "Bases, bits, sets, graphs and steps — the full programmer gauntlet.",
        pt: "Bases, bits, conjuntos, grafos e passos — a prova completa do programador.",
        es: "Bases, bits, conjuntos, grafos y pasos — la prueba completa del programador.",
      },
      lesson: {
        intro: {
          en: "Anything from this belt can appear. Read the notation — a ₂ subscript means binary, 0x means hex, mod means remainder.",
          pt: "Qualquer coisa desta faixa pode aparecer. Leia a notação — o subscrito ₂ é binário, 0x é hexadecimal, mod é resto.",
          es: "Cualquier cosa de este cinturón puede aparecer. Lee la notación — el subíndice ₂ es binario, 0x es hexadecimal, mod es resto.",
        },
        example: { id: "ex-digital-15", prompt: "2⁸", answer: 256, operands: [8] },
        steps: [
          {
            text: {
              en: "A landmark power of two.",
              pt: "Um marco das potências de 2.",
              es: "Un hito de las potencias de 2.",
            },
          },
          {
            text: {
              en: "2⁸ = 256 — one byte's worth of values.",
              pt: "2⁸ = 256 — os valores de um byte.",
              es: "2⁸ = 256 — los valores de un byte.",
            },
          },
          { text: { en: "2⁸ = 256.", pt: "2⁸ = 256.", es: "2⁸ = 256." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 9, passAccuracy: 0.8, targetTimeSec: 15 },
      generate: generateDigitalMix,
    },
  ],
};

const coralBelt: Belt = {
  id: "coral",
  name: { en: "Coral Belt", pt: "Faixa Coral", es: "Cinturón Coral" },
  order: 10,
  operationLabel: { en: "Calculus I", pt: "Cálculo I", es: "Cálculo I" },
  colorVar: "--belt-coral",
  tagline: {
    en: "The rarest rank. Limits, derivatives, and integrals.",
    pt: "A faixa mais rara. Limites, derivadas e integrais.",
    es: "El rango más raro. Límites, derivadas e integrales.",
  },
  stripes: [
    {
      id: "coral-1",
      beltId: "coral",
      index: 1,
      title: {
        en: "What a limit means",
        pt: "O que significa um limite",
        es: "Qué significa un límite",
      },
      summary: {
        en: "A limit is what f(x) approaches as x gets closer and closer to a point.",
        pt: "Um limite é o que f(x) se aproxima conforme x chega mais perto de um ponto.",
        es: "Un límite es lo que f(x) se acerca conforme x se acerca a un punto.",
      },
      lesson: {
        intro: {
          en: "As x hops closer and closer to a target value, watch what happens to f(x) — that's the limit. For a smooth function like this one, you can just substitute the target value directly.",
          pt: "Conforme x salta cada vez mais perto de um valor alvo, observe o que acontece com f(x) — isso é o limite. Para uma função suave como essa, você pode simplesmente substituir o valor alvo direto.",
          es: "Conforme x salta cada vez más cerca de un valor objetivo, observa qué le pasa a f(x) — eso es el límite. Para una función suave como esta, puedes simplemente sustituir el valor objetivo directamente.",
        },
        example: { id: "ex-coral-1", prompt: "lim(x→2) 3x + 2", answer: 8, operands: [3, 2, 2] },
        diagram: { kind: "numberLine", start: 5, end: 2 },
        steps: [
          {
            text: {
              en: "x is getting closer and closer to {{2}}.",
              pt: "x está chegando cada vez mais perto de {{2}}.",
              es: "x se está acercando cada vez más a {{2}}.",
            },
          },
          {
            text: {
              en: "Since this line has no breaks or holes, just substitute: 3 × 2 + 2.",
              pt: "Como essa reta não tem quebras ou buracos, é só substituir: 3 × 2 + 2.",
              es: "Como esta recta no tiene cortes ni huecos, solo sustituye: 3 × 2 + 2.",
            },
          },
          { text: { en: "3 × 2 + 2 = 8.", pt: "3 × 2 + 2 = 8.", es: "3 × 2 + 2 = 8." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateLimitLinearConcept,
    },
    {
      id: "coral-2",
      beltId: "coral",
      index: 2,
      title: {
        en: "Evaluating limits by direct substitution",
        pt: "Avaliando limites por substituição direta",
        es: "Evaluando límites por sustitución directa",
      },
      summary: {
        en: "Smooth functions let you just plug in the target value.",
        pt: "Funções suaves deixam você simplesmente substituir o valor alvo.",
        es: "Las funciones suaves te dejan simplemente sustituir el valor objetivo.",
      },
      lesson: {
        intro: {
          en: "The same substitution trick works for any polynomial, not just lines — plug the target value in for x and simplify.",
          pt: "O mesmo truque de substituição funciona para qualquer polinômio, não só retas — substitua o valor alvo no lugar de x e simplifique.",
          es: "El mismo truco de sustitución funciona para cualquier polinomio, no solo rectas — sustituye el valor objetivo por x y simplifica.",
        },
        example: { id: "ex-coral-2", prompt: "lim(x→2) x² - 3x + 1", answer: -1, operands: [2, -3, 1] },
        steps: [
          {
            text: {
              en: "Substitute x = 2 directly: 2² - 3 × 2 + 1.",
              pt: "Substitua x = 2 direto: 2² - 3 × 2 + 1.",
              es: "Sustituye x = 2 directamente: 2² - 3 × 2 + 1.",
            },
          },
          {
            text: {
              en: "Square first: 2² = {{4}}.",
              pt: "Eleve ao quadrado primeiro: 2² = {{4}}.",
              es: "Eleva al cuadrado primero: 2² = {{4}}.",
            },
          },
          { text: { en: "4 - 6 + 1 = -1.", pt: "4 - 6 + 1 = -1.", es: "4 - 6 + 1 = -1." } },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 14 },
      generate: generateLimitQuadratic,
    },
    {
      id: "coral-3",
      beltId: "coral",
      index: 3,
      title: {
        en: "Evaluating limits algebraically",
        pt: "Avaliando limites algebricamente",
        es: "Evaluando límites algebraicamente",
      },
      summary: {
        en: "Factor first to cancel the part that's causing 0/0.",
        pt: "Fatore primeiro para cancelar a parte que está causando 0/0.",
        es: "Factoriza primero para cancelar la parte que causa 0/0.",
      },
      lesson: {
        intro: {
          en: "Plugging in directly gives 0/0 here — that's a sign to factor the top first. The matching factor cancels, leaving something you CAN substitute into.",
          pt: "Substituir direto dá 0/0 aqui — isso é um sinal para fatorar o de cima primeiro. O fator que combina cancela, deixando algo em que você PODE substituir.",
          es: "Sustituir directamente da 0/0 aquí — esa es la señal para factorizar arriba primero. El factor que coincide se cancela, dejando algo en lo que SÍ puedes sustituir.",
        },
        example: {
          id: "ex-coral-3",
          prompt: "lim(x→3) (x² + 4x - 21) / (x - 3)",
          answer: 10,
          operands: [3, 7],
        },
        steps: [
          {
            text: {
              en: "Direct substitution gives 0/0 — factor the numerator instead: x² + 4x - 21 = (x - 3)(x + 7).",
              pt: "Substituição direta dá 0/0 — fatore o numerador: x² + 4x - 21 = (x - 3)(x + 7).",
              es: "La sustitución directa da 0/0 — factoriza el numerador: x² + 4x - 21 = (x - 3)(x + 7).",
            },
          },
          {
            text: {
              en: "Cancel the (x - 3) from top and bottom, leaving just (x + 7).",
              pt: "Cancele o (x - 3) de cima e de baixo, deixando só (x + 7).",
              es: "Cancela el (x - 3) de arriba y de abajo, dejando solo (x + 7).",
            },
          },
          {
            text: {
              en: "Now substitute: 3 + 7 = {{10}}.",
              pt: "Agora substitua: 3 + 7 = {{10}}.",
              es: "Ahora sustituye: 3 + 7 = {{10}}.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 21 },
      generate: generateLimitFactoring,
    },
    {
      id: "coral-4",
      beltId: "coral",
      index: 4,
      title: {
        en: "What a derivative means",
        pt: "O que significa uma derivada",
        es: "Qué significa una derivada",
      },
      summary: {
        en: "A derivative is the slope of the tangent line.",
        pt: "Uma derivada é a inclinação da reta tangente.",
        es: "Una derivada es la pendiente de la recta tangente.",
      },
      lesson: {
        intro: {
          en: "A derivative measures how steeply a function is climbing at each point. For a straight line, the steepness never changes — it's just the slope, same as you found back in Functions.",
          pt: "Uma derivada mede o quão íngreme uma função está subindo em cada ponto. Para uma reta, a inclinação nunca muda — é só a inclinação, igual você achou lá em Funções.",
          es: "Una derivada mide qué tan empinada está subiendo una función en cada punto. Para una recta, la inclinación nunca cambia — es solo la pendiente, igual que hallaste en Funciones.",
        },
        example: { id: "ex-coral-4", prompt: "f(x) = 4x + 3, f'(x) = n", answer: 4, operands: [4, 3] },
        diagram: { kind: "slopeStaircase", rise: 4, run: 1 },
        steps: [
          {
            text: {
              en: "This line's slope is rise/run = 4/1 = {{4}}.",
              pt: "A inclinação dessa reta é subida/avanço = 4/1 = {{4}}.",
              es: "La pendiente de esta recta es subida/avance = 4/1 = {{4}}.",
            },
          },
          {
            text: {
              en: "A straight line's steepness never changes.",
              pt: "A inclinação de uma reta nunca muda.",
              es: "La inclinación de una recta nunca cambia.",
            },
          },
          {
            text: {
              en: "f'(x) = 4, for every x.",
              pt: "f'(x) = 4, para todo x.",
              es: "f'(x) = 4, para todo x.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateDerivativeLinearConcept,
    },
    {
      id: "coral-5",
      beltId: "coral",
      index: 5,
      title: {
        en: "The power rule for derivatives",
        pt: "A regra do poder para derivadas",
        es: "La regla de la potencia para derivadas",
      },
      summary: {
        en: "Bring the exponent down as a multiplier, then subtract one from it.",
        pt: "Traga o expoente para baixo como multiplicador, depois subtraia um dele.",
        es: "Baja el exponente como multiplicador, luego réstale uno.",
      },
      lesson: {
        intro: {
          en: "For any power of x, the derivative follows the same pattern every time: the exponent becomes the new coefficient, and the exponent itself drops by one.",
          pt: "Para qualquer potência de x, a derivada segue o mesmo padrão sempre: o expoente vira o novo coeficiente, e o expoente em si diminui em um.",
          es: "Para cualquier potencia de x, la derivada sigue el mismo patrón siempre: el exponente se convierte en el nuevo coeficiente, y el exponente mismo baja en uno.",
        },
        example: { id: "ex-coral-5", prompt: "f(x) = x⁵, f'(x) = n·x⁴", answer: 5, operands: [5] },
        steps: [
          {
            text: {
              en: "The exponent is {{5}} — bring it down in front as a multiplier.",
              pt: "O expoente é {{5}} — traga-o para frente como multiplicador.",
              es: "El exponente es {{5}} — bájalo al frente como multiplicador.",
            },
          },
          {
            text: {
              en: "Subtract one from the exponent: 5 - 1 = 4.",
              pt: "Subtraia um do expoente: 5 - 1 = 4.",
              es: "Resta uno al exponente: 5 - 1 = 4.",
            },
          },
          {
            text: {
              en: "f'(x) = 5x⁴, so n = 5.",
              pt: "f'(x) = 5x⁴, então n = 5.",
              es: "f'(x) = 5x⁴, entonces n = 5.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateDerivativePowerRule,
    },
    {
      id: "coral-6",
      beltId: "coral",
      index: 6,
      title: {
        en: "Differentiating polynomials",
        pt: "Derivando polinômios",
        es: "Derivando polinomios",
      },
      summary: {
        en: "Apply the power rule to each term, then substitute.",
        pt: "Aplique a regra do poder em cada termo, depois substitua.",
        es: "Aplica la regla de la potencia a cada término, luego sustituye.",
      },
      lesson: {
        intro: {
          en: "Differentiate each term on its own using the power rule, combine them, then evaluate the result at the given point — same layered approach as evaluating any other expression.",
          pt: "Derive cada termo separadamente usando a regra do poder, combine-os, depois avalie o resultado no ponto dado — a mesma abordagem em camadas de avaliar qualquer outra expressão.",
          es: "Deriva cada término por separado usando la regla de la potencia, combínalos, luego evalúa el resultado en el punto dado — el mismo enfoque en capas de evaluar cualquier otra expresión.",
        },
        example: { id: "ex-coral-6", prompt: "f(x) = 3x² + 4x; f'(2)", answer: 16, operands: [3, 4, 2] },
        steps: [
          {
            text: {
              en: "Differentiate each term: the derivative of 3x² is 6x, and the derivative of 4x is 4.",
              pt: "Derive cada termo: a derivada de 3x² é 6x, e a derivada de 4x é 4.",
              es: "Deriva cada término: la derivada de 3x² es 6x, y la derivada de 4x es 4.",
            },
          },
          {
            text: {
              en: "f'(x) = 6x + 4.",
              pt: "f'(x) = 6x + 4.",
              es: "f'(x) = 6x + 4.",
            },
          },
          {
            text: {
              en: "f'(2) = 6 × 2 + 4 = {{16}}.",
              pt: "f'(2) = 6 × 2 + 4 = {{16}}.",
              es: "f'(2) = 6 × 2 + 4 = {{16}}.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 20 },
      generate: generateDerivativeAtPoint,
    },
    {
      id: "coral-7",
      beltId: "coral",
      index: 7,
      title: {
        en: "What an integral means",
        pt: "O que significa uma integral",
        es: "Qué significa una integral",
      },
      summary: {
        en: "Add up thin rectangles to approximate the area under a curve.",
        pt: "Some retângulos finos para aproximar a área sob uma curva.",
        es: "Suma rectángulos delgados para aproximar el área bajo una curva.",
      },
      lesson: {
        intro: {
          en: "Each bar's area is just its height times a width of 1. Add all the bars together and you get an approximation of the total area under the curve — that's the core idea behind an integral.",
          pt: "A área de cada barra é só a altura dela vezes uma largura de 1. Some todas as barras e você tem uma aproximação da área total sob a curva — essa é a ideia central de uma integral.",
          es: "El área de cada barra es solo su altura por un ancho de 1. Suma todas las barras y obtienes una aproximación del área total bajo la curva — esa es la idea central de una integral.",
        },
        example: { id: "ex-coral-7", prompt: "", answer: 20, operands: [3, 5, 4, 6, 2] },
        diagram: { kind: "areaBars", heights: [3, 5, 4, 6, 2] },
        steps: [
          {
            text: {
              en: "Each bar has width 1, so its area is just its height.",
              pt: "Cada barra tem largura 1, então a área dela é só a altura.",
              es: "Cada barra tiene ancho 1, así que su área es solo la altura.",
            },
          },
          {
            text: {
              en: "Add up all five heights: 3 + 5 + 4 + 6 + 2.",
              pt: "Some as cinco alturas: 3 + 5 + 4 + 6 + 2.",
              es: "Suma las cinco alturas: 3 + 5 + 4 + 6 + 2.",
            },
          },
          {
            text: {
              en: "3 + 5 + 4 + 6 + 2 = {{20}}.",
              pt: "3 + 5 + 4 + 6 + 2 = {{20}}.",
              es: "3 + 5 + 4 + 6 + 2 = {{20}}.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 6, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateAreaBarsReading,
    },
    {
      id: "coral-8",
      beltId: "coral",
      index: 8,
      title: {
        en: "Basic integration",
        pt: "Integração básica",
        es: "Integración básica",
      },
      summary: {
        en: "Integration reverses the power rule — add one to the exponent, then divide by it.",
        pt: "Integração inverte a regra do poder — some um ao expoente, depois divida por ele.",
        es: "La integración invierte la regla de la potencia — suma uno al exponente, luego divide entre él.",
      },
      lesson: {
        intro: {
          en: "Integration undoes differentiation: instead of bringing the exponent down, you raise it by one, then divide by that same new number.",
          pt: "A integração desfaz a derivação: em vez de trazer o expoente para baixo, você aumenta ele em um, depois divide por esse mesmo número novo.",
          es: "La integración deshace la derivación: en lugar de bajar el exponente, lo subes en uno, luego divides entre ese mismo número nuevo.",
        },
        example: { id: "ex-coral-8", prompt: "∫x² dx = xⁿ/n", answer: 3, operands: [2] },
        steps: [
          {
            text: {
              en: "Add one to the exponent: 2 + 1 = {{3}}.",
              pt: "Some um ao expoente: 2 + 1 = {{3}}.",
              es: "Suma uno al exponente: 2 + 1 = {{3}}.",
            },
          },
          {
            text: {
              en: "Divide by that same new exponent.",
              pt: "Divida por esse mesmo expoente novo.",
              es: "Divide entre ese mismo exponente nuevo.",
            },
          },
          {
            text: {
              en: "∫x² dx = x³/3, so n = 3.",
              pt: "∫x² dx = x³/3, então n = 3.",
              es: "∫x² dx = x³/3, entonces n = 3.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 7, passAccuracy: 0.8, targetTimeSec: 12 },
      generate: generateAntiderivativePowerRule,
    },
    {
      id: "coral-9",
      beltId: "coral",
      index: 9,
      title: {
        en: "Definite integrals",
        pt: "Integrais definidas",
        es: "Integrales definidas",
      },
      summary: {
        en: "Find the antiderivative, then evaluate it at both bounds and subtract.",
        pt: "Ache a antiderivada, depois avalie nos dois limites e subtraia.",
        es: "Halla la antiderivada, luego evalúala en ambos límites y resta.",
      },
      lesson: {
        intro: {
          en: "A definite integral has two bounds. Find the antiderivative first, then evaluate it at the top bound and subtract its value at the bottom bound — that difference is the actual area.",
          pt: "Uma integral definida tem dois limites. Ache a antiderivada primeiro, depois avalie no limite de cima e subtraia o valor no limite de baixo — essa diferença é a área de verdade.",
          es: "Una integral definida tiene dos límites. Halla la antiderivada primero, luego evalúala en el límite superior y resta su valor en el límite inferior — esa diferencia es el área real.",
        },
        example: { id: "ex-coral-9", prompt: "∫[1, 4] 2x dx", answer: 15, operands: [1, 1, 4] },
        steps: [
          {
            text: {
              en: "The antiderivative of 2x is x².",
              pt: "A antiderivada de 2x é x².",
              es: "La antiderivada de 2x es x².",
            },
          },
          {
            text: {
              en: "Evaluate at the top bound: 4² = {{16}}.",
              pt: "Avalie no limite de cima: 4² = {{16}}.",
              es: "Evalúa en el límite superior: 4² = {{16}}.",
            },
          },
          {
            text: {
              en: "Subtract the bottom bound: 16 - 1² = 15.",
              pt: "Subtraia o limite de baixo: 16 - 1² = 15.",
              es: "Resta el límite inferior: 16 - 1² = 15.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 8, passAccuracy: 0.8, targetTimeSec: 18 },
      generate: generateDefiniteIntegral,
    },
    {
      id: "coral-10",
      beltId: "coral",
      index: 10,
      title: {
        en: "Derivatives and integrals together",
        pt: "Derivadas e integrais juntas",
        es: "Derivadas e integrales juntas",
      },
      summary: {
        en: "Differentiate and evaluate, then integrate and evaluate — every Coral Belt skill in one problem.",
        pt: "Derive e avalie, depois integre e avalie — todas as habilidades da Faixa Coral em um problema.",
        es: "Deriva y evalúa, luego integra y evalúa — todas las habilidades del Cinturón Coral en un problema.",
      },
      lesson: {
        intro: {
          en: "This pulls together everything from this belt: differentiate a polynomial and evaluate it at a point, then find a definite integral, and add the two results together.",
          pt: "Isso reúne tudo desta faixa: derive um polinômio e avalie num ponto, depois ache uma integral definida, e some os dois resultados.",
          es: "Esto reúne todo de este cinturón: deriva un polinomio y evalúalo en un punto, luego halla una integral definida, y suma los dos resultados.",
        },
        example: {
          id: "ex-coral-10",
          prompt: "f(x) = 2x² + 3x; f'(1) + ∫[0, 3] 2x dx",
          answer: 16,
          operands: [2, 3, 1, 1, 3],
        },
        steps: [
          {
            text: {
              en: "Differentiate: f'(x) = 4x + 3. Evaluate at 1: 4 + 3 = {{7}}.",
              pt: "Derive: f'(x) = 4x + 3. Avalie em 1: 4 + 3 = {{7}}.",
              es: "Deriva: f'(x) = 4x + 3. Evalúa en 1: 4 + 3 = {{7}}.",
            },
          },
          {
            text: {
              en: "Integrate: ∫2x dx = x². Evaluate from 0 to 3: 9 - 0 = 9.",
              pt: "Integre: ∫2x dx = x². Avalie de 0 a 3: 9 - 0 = 9.",
              es: "Integra: ∫2x dx = x². Evalúa de 0 a 3: 9 - 0 = 9.",
            },
          },
          {
            text: {
              en: "Add the two results: 7 + 9 = 16.",
              pt: "Some os dois resultados: 7 + 9 = 16.",
              es: "Suma los dos resultados: 7 + 9 = 16.",
            },
          },
        ],
      },
      mastery: { problemsPerPage: 12, pagesToMaster: 10, passAccuracy: 0.8, targetTimeSec: 36 },
      generate: generateCalculusCapstone,
    },
  ],
};

export const belts: Belt[] = [whiteBelt, blueBelt, purpleBelt, brownBelt, greenBelt, blackBelt, redBelt, goldBelt, digitalBelt, coralBelt];
