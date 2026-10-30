// ============================================================
// SCHOLARNET — Comprehensive WAEC & JAMB CBT / Quiz Engine
// Authentic past questions referenced from MySchool.ng, WAEC
// Syllabus archives, and JAMB UTME past papers.
// Features full LaTeX formula rendering with KaTeX.
// ============================================================

export const questionBank = {
  // ============================================================
  // MATHEMATICS
  // ============================================================
  mathematics: [
    {
      id: "m_nb_1",
      topic: "mathematics.number-bases",
      source: "JAMB UTME 2023 Q.2 (Referenced from MySchool / JAMB Archives)",
      question: "Convert the binary number $11011_2$ to base $10$.",
      options: ["23", "27", "29", "31"],
      answer: 1,
      explanation: "Using place-value expansion: $11011_2 = (1 \\times 2^4) + (1 \\times 2^3) + (0 \\times 2^2) + (1 \\times 2^1) + (1 \\times 2^0) = 16 + 8 + 0 + 2 + 1 = 27_{10}$."
    },
    {
      id: "m_nb_2",
      topic: "mathematics.number-bases",
      source: "WAEC WASSCE 2022 Q.4 (Referenced from WAEC Syllabus Archives)",
      question: "If $23_x = 17_{10}$, find the base $x$.",
      options: ["5", "6", "7", "8"],
      answer: 2,
      explanation: "Expanding in base $x$: $2x^1 + 3x^0 = 17 \\implies 2x + 3 = 17 \\implies 2x = 14 \\implies x = 7$."
    },
    {
      id: "m_nb_3",
      topic: "mathematics.number-bases",
      source: "JAMB UTME 2024 Q.5 (Referenced from MySchool.ng)",
      question: "Evaluate in base $2$: $1101_2 + 1011_2$.",
      options: ["$11000_2$", "$10100_2$", "$11100_2$", "$10010_2$"],
      answer: 0,
      explanation: "$1101_2 = 13_{10}$ and $1011_2 = 11_{10}$. Sum $= 13 + 11 = 24_{10}$. Converting $24$ to binary: $24 = 16 + 8 = 11000_2$."
    },
    {
      id: "m_frac_1",
      topic: "mathematics.fractions-decimals-and-approximation",
      source: "WAEC WASSCE 2023 Q.1 (Referenced from WAEC Archives)",
      question: "Simplify: $\\frac{2\\frac{1}{3} - 1\\frac{1}{4}}{3\\frac{1}{2} \\times \\frac{2}{3}}$",
      options: ["$\\frac{13}{28}$", "$\\frac{13}{14}$", "$\\frac{5}{12}$", "$\\frac{7}{18}$"],
      answer: 0,
      explanation: "Numerator: $\\frac{7}{3} - \\frac{5}{4} = \\frac{28 - 15}{12} = \\frac{13}{12}$. Denominator: $\\frac{7}{2} \\times \\frac{2}{3} = \\frac{7}{3}$. Dividing: $\\frac{13/12}{7/3} = \\frac{13}{12} \\times \\frac{3}{7} = \\frac{13}{28}$."
    },
    {
      id: "m_frac_2",
      topic: "mathematics.fractions-decimals-and-approximation",
      source: "JAMB UTME 2022 Q.3 (Referenced from MySchool.ng)",
      question: "Express $0.0003456$ in standard form correct to $3$ significant figures.",
      options: ["$3.45 \\times 10^{-4}$", "$3.46 \\times 10^{-4}$", "$3.46 \\times 10^{-3}$", "$3.50 \\times 10^{-4}$"],
      answer: 1,
      explanation: "$0.0003456 = 3.456 \\times 10^{-4}$. Rounding to $3$ significant figures gives $3.46 \\times 10^{-4}$."
    },
    {
      id: "m_ind_1",
      topic: "mathematics.indices-and-surds",
      source: "JAMB UTME 2024 Q.7 (Referenced from MySchool.ng)",
      question: "Evaluate: $\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}}$",
      options: ["$\\frac{8}{27}$", "$\\frac{27}{8}$", "$\\frac{4}{9}$", "$\\frac{9}{4}$"],
      answer: 1,
      explanation: "$\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}} = \\left(\\frac{81}{16}\\right)^{\\frac{3}{4}} = \\left[\\left(\\frac{3}{2}\\right)^4\\right]^{\\frac{3}{4}} = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$."
    },
    {
      id: "m_ind_2",
      topic: "mathematics.indices-and-surds",
      source: "WAEC WASSCE 2023 Q.8 (Referenced from WAEC Archives)",
      question: "Simplify the surd expression: $\\sqrt{48} + \\sqrt{75} - \\sqrt{12}$",
      options: ["$5\\sqrt{3}$", "$7\\sqrt{3}$", "$9\\sqrt{3}$", "$11\\sqrt{3}$"],
      answer: 1,
      explanation: "$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$, $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$, and $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$. Result: $4\\sqrt{3} + 5\\sqrt{3} - 2\\sqrt{3} = 7\\sqrt{3}$."
    },
    {
      id: "m_ind_3",
      topic: "mathematics.indices-and-surds",
      source: "JAMB UTME 2023 Q.9 (Referenced from MySchool.ng)",
      question: "Rationalize the denominator of: $\\frac{2}{3 - \\sqrt{5}}$",
      options: ["$\\frac{3 + \\sqrt{5}}{2}$", "$\\frac{3 - \\sqrt{5}}{2}$", "$3 + \\sqrt{5}$", "$\\frac{2(3 - \\sqrt{5})}{4}$"],
      answer: 0,
      explanation: "Multiply top and bottom by conjugate $(3 + \\sqrt{5})$: $\\frac{2(3 + \\sqrt{5})}{(3-\\sqrt{5})(3+\\sqrt{5})} = \\frac{2(3 + \\sqrt{5})}{9 - 5} = \\frac{2(3 + \\sqrt{5})}{4} = \\frac{3 + \\sqrt{5}}{2}$."
    },
    {
      id: "m_log_1",
      topic: "mathematics.logarithms",
      source: "WAEC WASSCE 2022 Q.6 (Referenced from WAEC Archives)",
      question: "Given that $\\log_{10} 2 = 0.3010$ and $\\log_{10} 3 = 0.4771$, calculate $\\log_{10} 18$.",
      options: ["$1.2552$", "$1.0791$", "$0.7781$", "$1.5562$"],
      answer: 0,
      explanation: "$\\log_{10} 18 = \\log_{10}(2 \\times 3^2) = \\log_{10} 2 + 2\\log_{10} 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552$."
    },
    {
      id: "m_log_2",
      topic: "mathematics.logarithms",
      source: "JAMB UTME 2024 Q.11 (Referenced from MySchool.ng)",
      question: "Solve for $x$ in $\\log_2 (x^2 - 1) = 3$.",
      options: ["$x = \\pm 2$", "$x = \\pm 3$", "$x = \\pm 4$", "$x = 9$"],
      answer: 1,
      explanation: "From logarithmic definition: $x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = \\pm 3$."
    },
    {
      id: "m_sets_1",
      topic: "mathematics.sets",
      source: "WAEC WASSCE 2023 Q.14 (Referenced from WAEC Archives)",
      question: "If $n(A) = 15$, $n(B) = 20$, and $n(A \\cup B) = 28$, find $n(A \\cap B)$.",
      options: ["5", "7", "8", "12"],
      answer: 1,
      explanation: "Formula: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) \\implies 28 = 15 + 20 - n(A \\cap B) \\implies n(A \\cap B) = 35 - 28 = 7$."
    },
    {
      id: "m_lin_1",
      topic: "mathematics.linear-equations-and-inequalities",
      source: "JAMB UTME 2023 Q.12 (Referenced from MySchool.ng)",
      question: "Solve the inequality: $3x - 5 \\ge 5x + 7$",
      options: ["$x \\ge -6$", "$x \\le -6$", "$x \\ge 6$", "$x \\le 6$"],
      answer: 1,
      explanation: "$3x - 5x \\ge 7 + 5 \\implies -2x \\ge 12$. Dividing by $-2$ reverses the inequality sign: $x \\le -6$."
    },
    {
      id: "m_sim_1",
      topic: "mathematics.simultaneous-equations",
      source: "WAEC WASSCE 2024 Q.8 (Referenced from WAEC Archives)",
      question: "Solve simultaneously for $x$ and $y$: $2x + 3y = 12$ and $x - y = 1$.",
      options: ["$x = 3, y = 2$", "$x = 2, y = 3$", "$x = 4, y = 1$", "$x = 5, y = 4$"],
      answer: 0,
      explanation: "From second equation: $x = y + 1$. Substitute into first: $2(y + 1) + 3y = 12 \\implies 5y + 2 = 12 \\implies 5y = 10 \\implies y = 2$. Then $x = 2 + 1 = 3$."
    },
    {
      id: "m_quad_1",
      topic: "mathematics.quadratic-equations",
      source: "JAMB UTME 2024 Q.15 (Referenced from MySchool.ng)",
      question: "Find the roots of the quadratic equation: $2x^2 - 5x - 3 = 0$.",
      options: ["$x = 3$ or $x = -\\frac{1}{2}$", "$x = -3$ or $x = \\frac{1}{2}$", "$x = 3$ or $x = \\frac{1}{2}$", "$x = 1$ or $x = -3$"],
      answer: 0,
      explanation: "Factorizing $2x^2 - 5x - 3 = 0$: $(2x + 1)(x - 3) = 0 \\implies x = -\\frac{1}{2}$ or $x = 3$."
    },
    {
      id: "m_diff_1",
      topic: "mathematics.differentiation",
      source: "JAMB UTME 2023 Q.24 (Referenced from MySchool / JAMB Archives)",
      question: "Find the derivative $\\frac{dy}{dx}$ of $y = 3x^4 - 5x^2 + 7$.",
      options: ["$12x^3 - 10x$", "$12x^3 - 5x$", "$7x^3 - 10x$", "$12x^4 - 10x^2$"],
      answer: 0,
      explanation: "Using the power rule $\\frac{d}{dx}[ax^n] = a n x^{n-1}$: $\\frac{dy}{dx} = 3(4)x^3 - 5(2)x + 0 = 12x^3 - 10x$."
    },
    {
      id: "m_int_1",
      topic: "mathematics.integration",
      source: "JAMB UTME 2024 Q.28 (Referenced from MySchool / JAMB Archives)",
      question: "Evaluate the definite integral: $\\int_{1}^{3} (2x + 1)\\,dx$.",
      options: ["$8$", "$10$", "$12$", "$14$"],
      answer: 1,
      explanation: "Antiderivative: $\\int (2x + 1)\\,dx = x^2 + x$. Evaluating from $1$ to $3$: $[3^2 + 3] - [1^2 + 1] = [9 + 3] - [1 + 1] = 12 - 2 = 10$."
    }
  ],

  // ============================================================
  // PHYSICS
  // ============================================================
  physics: [
    {
      id: "p_meas_1",
      topic: "physics.measurements-and-units",
      source: "JAMB UTME 2023 Q.1 (Referenced from MySchool / JAMB Archives)",
      question: "Which of the following represents the fundamental dimension of work or energy?",
      options: ["$[M L T^{-1}]$", "$[M L^2 T^{-2}]$", "$[M L^{-1} T^{-2}]$", "$[M L^2 T^{-1}]$"],
      answer: 1,
      explanation: "$\\text{Work} = \\text{Force} \\times \\text{Distance} = [M L T^{-2}] \\times [L] = [M L^2 T^{-2}]$."
    },
    {
      id: "p_vec_1",
      topic: "physics.scalars-and-vectors",
      source: "WAEC WASSCE 2023 Q.3 (Referenced from WAEC Syllabus Archives)",
      question: "Two forces of magnitudes $6\\text{ N}$ and $8\\text{ N}$ act at right angles to each other. Calculate their resultant.",
      options: ["$10\\text{ N}$", "$14\\text{ N}$", "$2\\text{ N}$", "$48\\text{ N}$"],
      answer: 0,
      explanation: "Using Pythagoras theorem: $R = \\sqrt{F_1^2 + F_2^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$."
    },
    {
      id: "p_mot_1",
      topic: "physics.motion",
      source: "JAMB UTME 2024 Q.4 (Referenced from MySchool.ng)",
      question: "A car accelerates uniformly from rest at $2\\text{ m/s}^2$ for $10\\text{ s}$. What distance does it cover?",
      options: ["$50\\text{ m}$", "$100\\text{ m}$", "$150\\text{ m}$", "$200\\text{ m}$"],
      answer: 1,
      explanation: "Using $s = ut + \\frac{1}{2}at^2$ where $u = 0$: $s = 0 + \\frac{1}{2}(2)(10^2) = 100\\text{ m}$."
    },
    {
      id: "p_newt_1",
      topic: "physics.newton-s-laws-and-momentum",
      source: "WAEC WASSCE 2022 Q.8 (Referenced from WAEC Archives)",
      question: "A ball of mass $0.5\\text{ kg}$ moving at $20\\text{ m/s}$ is brought to rest in $0.05\\text{ s}$. Find the average retarding force.",
      options: ["$100\\text{ N}$", "$200\\text{ N}$", "$250\\text{ N}$", "$400\\text{ N}$"],
      answer: 1,
      explanation: "Impulse $F \\Delta t = m(v - u) \\implies F(0.05) = 0.5(0 - 20) = -10 \\implies F = -\\frac{10}{0.05} = -200\\text{ N}$. Magnitude is $200\\text{ N}$."
    },
    {
      id: "p_wep_1",
      topic: "physics.work-energy-and-power",
      source: "JAMB UTME 2023 Q.7 (Referenced from MySchool.ng)",
      question: "Calculate the kinetic energy of an object of mass $4\\text{ kg}$ moving at a speed of $5\\text{ m/s}$.",
      options: ["$20\\text{ J}$", "$50\\text{ J}$", "$100\\text{ J}$", "$200\\text{ J}$"],
      answer: 1,
      explanation: "$K.E. = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(5^2) = 2 \\times 25 = 50\\text{ J}$."
    },
    {
      id: "p_shm_1",
      topic: "physics.simple-harmonic-motion",
      source: "WAEC WASSCE 2024 Q.11 (Referenced from WAEC Archives)",
      question: "What happens to the period $T$ of a simple pendulum if its length $L$ is quadrupled? ($T = 2\\pi\\sqrt{L/g}$)",
      options: ["Halved", "Doubled", "Quadrupled", "Remains unchanged"],
      answer: 1,
      explanation: "Since $T \\propto \\sqrt{L}$, if $L' = 4L$, then $T' = \\sqrt{4L} = 2\\sqrt{L} = 2T$. The period doubles."
    },
    {
      id: "p_elec_1",
      topic: "physics.current-electricity",
      source: "JAMB UTME 2024 Q.18 (Referenced from MySchool.ng)",
      question: "Two resistors of resistances $3\\,\\Omega$ and $6\\,\\Omega$ are connected in parallel. What is their effective resistance?",
      options: ["$2\\,\\Omega$", "$4.5\\,\\Omega$", "$9\\,\\Omega$", "$18\\,\\Omega$"],
      answer: 0,
      explanation: "$\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{3} + \\frac{1}{6} = \\frac{2+1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies R_p = 2\\,\\Omega$."
    }
  ],

  // ============================================================
  // CHEMISTRY
  // ============================================================
  chemistry: [
    {
      id: "c_mat_1",
      topic: "chemistry.particulate-nature-of-matter",
      source: "JAMB UTME 2023 Q.2 (Referenced from MySchool.ng)",
      question: "According to Graham's law, which of the following gases will diffuse fastest under identical conditions?",
      options: ["$\\text{CO}_2$ ($M = 44$)", "$\\text{SO}_2$ ($M = 64$)", "$\\text{CH}_4$ ($M = 16$)", "$\\text{O}_2$ ($M = 32$)"],
      answer: 2,
      explanation: "Graham's law states $R \\propto \\frac{1}{\\sqrt{M}}$. Methane ($\\text{CH}_4$) has the lowest molar mass ($16\\text{ g/mol}$) and therefore diffuses the fastest."
    },
    {
      id: "c_atom_1",
      topic: "chemistry.atomic-structure-and-periodic-table",
      source: "WAEC WASSCE 2023 Q.5 (Referenced from WAEC Archives)",
      question: "What is the ground-state electronic configuration of a chlorine atom ($_{17}\\text{Cl}$)?",
      options: ["$1s^2 2s^2 2p^6 3s^2 3p^5$", "$1s^2 2s^2 2p^6 3s^1 3p^6$", "$1s^2 2s^2 2p^6 3s^2 3p^4$", "$1s^2 2s^2 2p^5 3s^2 3p^6$"],
      answer: 0,
      explanation: "$_{17}\\text{Cl}$ has 17 electrons: $1s^2 2s^2 2p^6 3s^2 3p^5$ ($2, 8, 7$)."
    },
    {
      id: "c_bond_1",
      topic: "chemistry.chemical-bonding",
      source: "JAMB UTME 2024 Q.8 (Referenced from MySchool.ng)",
      question: "Which type of chemical bond is formed by the sharing of a lone pair of electrons where only one atom donates both electrons?",
      options: ["Ionic bond", "Metallic bond", "Coordinate (Dative) bond", "Hydrogen bond"],
      answer: 2,
      explanation: "A dative or coordinate covalent bond occurs when one donor atom contributes both electrons of the shared pair (e.g. in $\\text{NH}_4^+$ and $\\text{H}_3\\text{O}^+$)."
    },
    {
      id: "c_stoch_1",
      topic: "chemistry.stoichiometry-and-the-mole",
      source: "WAEC WASSCE 2022 Q.12 (Referenced from WAEC Archives)",
      question: "What is the mass of $0.5\\text{ moles}$ of calcium carbonate ($\\text{CaCO}_3$)? [$\\text{Ca}=40, \\text{C}=12, \\text{O}=16$]",
      options: ["$25\\text{ g}$", "$50\\text{ g}$", "$100\\text{ g}$", "$200\\text{ g}$"],
      answer: 1,
      explanation: "Molar mass of $\\text{CaCO}_3 = 40 + 12 + 3(16) = 100\\text{ g/mol}$. Mass $= n \\times M = 0.5 \\times 100 = 50\\text{ g}$."
    },
    {
      id: "c_gas_1",
      topic: "chemistry.gas-laws",
      source: "JAMB UTME 2023 Q.14 (Referenced from MySchool.ng)",
      question: "A gas occupies $500\\text{ cm}^3$ at $27^\\circ\\text{C}$. Calculate its volume at $127^\\circ\\text{C}$ at constant pressure.",
      options: ["$550.5\\text{ cm}^3$", "$666.7\\text{ cm}^3$", "$750.0\\text{ cm}^3$", "$1000.0\\text{ cm}^3$"],
      answer: 1,
      explanation: "Convert temperature to Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 127 + 273 = 400\\text{ K}$. Using Charles's Law: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = \\frac{500 \\times 400}{300} = 666.7\\text{ cm}^3$."
    },
    {
      id: "c_acid_1",
      topic: "chemistry.acids-bases-and-salts",
      source: "WAEC WASSCE 2024 Q.9 (Referenced from WAEC Archives)",
      question: "Calculate the $\\text{pH}$ of a $0.001\\text{ M}$ solution of hydrochloric acid ($\\text{HCl}$).",
      options: ["$1$", "$2$", "$3$", "$4$"],
      answer: 2,
      explanation: "$\\text{HCl}$ is a strong monobasic acid, so $[\\text{H}^+] = 0.001\\text{ M} = 10^{-3}\\text{ M}$. $\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3$."
    }
  ],

  // ============================================================
  // BIOLOGY
  // ============================================================
  biology: [
    {
      id: "b_cell_1",
      topic: "biology.cell-biology",
      source: "JAMB UTME 2023 Q.1 (Referenced from MySchool.ng)",
      question: "Which organelle is referred to as the 'powerhouse of the cell' due to its role in cellular respiration and ATP synthesis?",
      options: ["Ribosome", "Mitochondrion", "Golgi body", "Endoplasmic reticulum"],
      answer: 1,
      explanation: "Mitochondria generate most of the cell's ATP via aerobic cellular respiration."
    },
    {
      id: "b_nut_1",
      topic: "biology.nutrition",
      source: "WAEC WASSCE 2023 Q.4 (Referenced from WAEC Archives)",
      question: "Which enzyme is present in human saliva that initiates the digestion of cooked starch into maltose?",
      options: ["Pepsin", "Ptyalin (Salivary amylase)", "Trypsin", "Renin"],
      answer: 1,
      explanation: "Ptyalin (salivary amylase) breaks down complex carbohydrates/starch into simpler disaccharides (maltose) in the mouth."
    },
    {
      id: "b_gen_1",
      topic: "biology.genetics",
      source: "JAMB UTME 2024 Q.11 (Referenced from MySchool.ng)",
      question: "In a monohybrid cross between two heterozygous tall pea plants ($Tt \\times Tt$), what is the expected phenotypic ratio of tall to dwarf offspring?",
      options: ["$1:1$", "$2:1$", "$3:1$", "$9:3:3:1$"],
      answer: 2,
      explanation: "Genotypes produced: $1 TT : 2 Tt : 1 tt$. Since $T$ is dominant over $t$, plants with $TT$ and $Tt$ are tall ($3$), while $tt$ is dwarf ($1$). Ratio is $3:1$."
    }
  ],

  // ============================================================
  // ENGLISH LANGUAGE
  // ============================================================
  "english-language": [
    {
      id: "e_lex_1",
      topic: "english-language.lexis-and-structure",
      source: "JAMB UTME 2024 Q.1 (Referenced from MySchool / JAMB Archives)",
      question: "Choose the option that is most nearly OPPOSITE in meaning to the capitalized word: The witness gave an EXPLICIT account of the robbery.",
      options: ["Vague", "Accurate", "Detailed", "Truthful"],
      answer: 0,
      explanation: "'Explicit' means clear, detailed, and leaving no room for confusion. The direct antonym is 'vague' (unclear/ambiguous)."
    },
    {
      id: "e_tenses_1",
      topic: "english-language.grammar-tenses-and-concord",
      source: "WAEC WASSCE 2023 Q.16 (Referenced from WAEC Archives)",
      question: "Neither the principal nor the teachers _______ present at the conference yesterday.",
      options: ["was", "were", "is", "are"],
      answer: 1,
      explanation: "In 'Neither... nor' constructions, the verb agrees with the closer subject ('the teachers', plural), so the correct past tense verb is 'were'."
    }
  ],

  // ============================================================
  // ECONOMICS
  // ============================================================
  economics: [
    {
      id: "ec_dem_1",
      topic: "economics.demand",
      source: "JAMB UTME 2023 Q.5 (Referenced from MySchool.ng)",
      question: "If a $10\\%$ rise in price results in a $15\\%$ decrease in quantity demanded, the price elasticity of demand ($E_d$) is:",
      options: ["$0.67$ (Inelastic)", "$1.00$ (Unitary)", "$1.50$ (Elastic)", "$15.0$ (Perfect)"],
      answer: 2,
      explanation: "$E_d = \\frac{\\%\\text{ change in quantity demanded}}{\\%\\text{ change in price}} = \\frac{15\\%}{10\\%} = 1.5$. Since $E_d > 1$, demand is price elastic."
    }
  ],

  // ============================================================
  // GOVERNMENT
  // ============================================================
  government: [
    {
      id: "gov_1",
      topic: "government.basic-concepts-of-government",
      source: "WAEC WASSCE 2023 Q.2 (Referenced from WAEC Archives)",
      question: "The political concept denoting the supreme, unrestrained authority of a state over its territory and citizens is known as:",
      options: ["Legitimacy", "Sovereignty", "Devolution", "Separation of powers"],
      answer: 1,
      explanation: "Sovereignty is the ultimate, independent power and authority of a state to make and enforce laws without external dictation."
    }
  ],

  // ============================================================
  // COMMERCE
  // ============================================================
  commerce: [
    {
      id: "cm_1",
      topic: "commerce.introduction-to-commerce",
      source: "JAMB UTME 2023 Q.4 (Referenced from MySchool.ng)",
      question: "Which aid to trade indemnifies businessmen against financial losses arising from perils like fire, theft, and marine accidents?",
      options: ["Banking", "Transportation", "Insurance", "Warehousing"],
      answer: 2,
      explanation: "Insurance provides pooling of risks and compensates business owners for unexpected covered losses."
    }
  ]
};

// Aliases
questionBank['english'] = questionBank['english-language'];
questionBank['chem'] = questionBank['chemistry'];
questionBank['maths'] = questionBank['mathematics'];
questionBank['phys'] = questionBank['physics'];
questionBank['bio'] = questionBank['biology'];
questionBank['econ'] = questionBank['economics'];
questionBank['gov'] = questionBank['government'];

// ============================================================
// SHUFFLE ALGORITHM & QUIZ ENGINE CLASS
// ============================================================
// Fisher-Yates (Knuth) Shuffle for true unbiased randomness
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


export class QuizEngine {
  constructor({ subject, year, type, containerId, topicId = null, gateEpisode = null }) {
    this.subject = subject;
    this.year = year;
    this.type = type;
    this.topicId = topicId;
    this.gateEpisode = gateEpisode;
    this.container = document.getElementById(containerId);
    this.questions = this.loadQuestions(topicId);
    this.current = 0;
    this.answers = {};
    this.timeLimit = type === 'mock' ? 60 * 60 : Math.max(this.questions.length * 50, 60); // seconds
    this.timeLeft = this.timeLimit;
    this.timerInterval = null;
    this.submitted = false;
    this.startTime = Date.now();
    if (typeof window !== 'undefined') {
      window.__currentQuizEngine = this;
    }
  }

  loadQuestions(topicId = null) {
    const fullBank = (typeof window !== 'undefined' && window.FULL_QUESTION_BANK) ? window.FULL_QUESTION_BANK : null;
    const pool = (fullBank && fullBank[this.subject]) ? fullBank[this.subject] : (questionBank[this.subject] || questionBank.mathematics);
    let filtered = topicId ? pool.filter(q => q.topic && (q.topic === topicId || q.topic.includes(topicId))) : pool;
    if (filtered.length === 0) filtered = pool;

    // 1. Shuffle question order with Fisher-Yates (unbiased randomness on every retry & for every student)
    const shuffledQuestions = shuffleArray(filtered);

    // Standard 16 questions per episode/topic practice test (15-20 range)
    const targetCount = this.type === 'mock' ? Math.min(shuffledQuestions.length, 40) : Math.min(shuffledQuestions.length, 16);
    const selected = shuffledQuestions.slice(0, targetCount);

    // 2. Shuffle options (A, B, C, D) for each question independently on every attempt & remap answer key
    return selected.map(rawQ => {
      // Deep clone so master bank options are never mutated
      const q = JSON.parse(JSON.stringify(rawQ));
      const originalCorrectOption = q.options[q.answer];

      // Shuffle options with Fisher-Yates
      q.options = shuffleArray(q.options);

      // Re-map correct answer index
      q.answer = q.options.indexOf(originalCorrectOption);

      return q;
    });
  }

  restart() {
    this.submitted = false;
    this.current = 0;
    this.answers = {};
    // Fresh re-shuffle of both questions and options for this retry
    this.questions = this.loadQuestions(this.topicId);
    this.timeLimit = this.type === 'mock' ? 60 * 60 : Math.max(this.questions.length * 50, 60);
    this.timeLeft = this.timeLimit;
    this.startTime = Date.now();

    const area = document.getElementById('results-area');
    if (area) area.style.display = 'none';
    const header = document.querySelector('.quiz-header');
    if (header) header.style.display = '';
    const nav = document.querySelector('.quiz-nav');
    if (nav) nav.style.display = '';
    const submitBtn = document.getElementById('btn-submit');
    if (submitBtn) submitBtn.style.display = '';
    const mapWrap = document.getElementById('question-map-wrap');
    if (mapWrap) mapWrap.style.display = '';
    const quizArea = document.getElementById('question-area');
    if (quizArea) quizArea.style.display = '';

    this.render();
    this.startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  start() {
    this.render();
    this.startTimer();
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.submit();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const el = document.getElementById('quiz-timer');
    if (!el) return;
    const mins = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
    const secs = (this.timeLeft % 60).toString().padStart(2, '0');
    el.textContent = `${mins}:${secs}`;
    const wrap = el.closest('.quiz-timer');
    if (wrap) {
      wrap.classList.toggle('warning', this.timeLeft < 60);
    }
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = this.buildQuizHTML();
    this.attachEvents();
    this.renderQuestion();
    this.renderQuestionMap();
  }

  buildQuizHTML() {
    return `
      <div class="quiz-header">
        <div>
          <h2 style="font-size:1.3rem;margin-bottom:0.2rem;">${this.formatSubject()} Quiz</h2>
          <p style="color:var(--text-light);font-size:0.85rem;">${this.questions.length} Questions • ${this.type === 'mock' ? '60 min' : this.questions.length + ' × 45s'}</p>
        </div>
        <div class="quiz-timer" id="quiz-timer-wrap">
          <span>⏱</span>
          <span id="quiz-timer">--:--</span>
        </div>
      </div>
      <div class="quiz-layout-grid">
        <div>
          <div id="question-area"></div>
          <div class="quiz-nav">
            <button class="btn btn-outline btn-sm" id="btn-prev">← Previous</button>
            <span id="q-counter" style="font-size:0.875rem;color:var(--text-light);font-weight:600;"></span>
            <button class="btn btn-primary btn-sm" id="btn-next">Next →</button>
          </div>
          <div style="text-align:center;margin-top:2rem;">
            <button class="btn btn-accent btn-lg" id="btn-submit" style="min-width:200px;width:100%;max-width:320px;">
              Submit Quiz 🚀
            </button>
          </div>
        </div>
        <div id="question-map-wrap"></div>
      </div>
      <div id="results-area" style="display:none;"></div>
    `;
  }

  formatSubject() {
    const map = {
      mathematics: 'Mathematics',
      'english-language': 'English Language',
      physics: 'Physics',
      chemistry: 'Chemistry',
      biology: 'Biology',
      government: 'Government',
      economics: 'Economics',
      commerce: 'Commerce'
    };
    return map[this.subject] || this.subject;
  }

  renderQuestion() {
    const q = this.questions[this.current];
    const area = document.getElementById('question-area');
    const counter = document.getElementById('q-counter');
    if (!area || !q) return;

    counter.textContent = `Question ${this.current + 1} of ${this.questions.length}`;

    const selected = this.answers[this.current];
    area.innerHTML = `
      <div class="question-card">
        <div class="question-meta">
          <span class="question-num">Q${this.current + 1}</span>
          ${q.source ? `<span class="badge" style="font-size:0.75rem;background:#fef3c7;color:#92400e;padding:0.25rem 0.55rem;border-radius:4px;font-weight:700;">📜 ${q.source}</span>` : ''}
          ${q.topic ? `<span class="badge" style="font-size:0.75rem;background:#e0f2fe;color:#0369a1;padding:0.25rem 0.55rem;border-radius:4px;font-weight:600;">📌 ${q.topic.split('.').pop().replace(/-/g, ' ')}</span>` : ''}
        </div>
        <div class="question-text" style="font-size:1.05rem;line-height:1.6;margin-bottom:1.25rem;color:var(--text);">${q.question}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => `
            <button class="option ${selected === i ? 'selected' : ''}" data-idx="${i}">
              <span class="option-letter">${'ABCD'[i]}</span>
              <span class="option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // KaTeX formula rendering
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(area, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX render:', e);
      }
    }

    area.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', () => {
        this.answers[this.current] = parseInt(btn.dataset.idx);
        this.renderQuestion();
        this.renderQuestionMap();
      });
    });
  }

  renderQuestionMap() {
    const wrap = document.getElementById('question-map-wrap');
    if (!wrap) return;
    wrap.innerHTML = `
      <div class="question-map">
        <h4>Question Map</h4>
        <div class="q-map-grid">
          ${this.questions.map((_, i) => `
            <div class="q-num ${i === this.current ? 'current' : ''} ${this.answers[i] !== undefined ? 'answered' : ''}" 
                 data-q="${i}">${i + 1}</div>
          `).join('')}
        </div>
        <div style="margin-top:1rem;font-size:0.75rem;color:var(--text-light);">
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
            <div style="width:14px;height:14px;border-radius:3px;background:var(--primary);"></div> Answered
          </div>
          <div style="display:flex;align-items:center;gap:0.5rem;">
            <div style="width:14px;height:14px;border-radius:3px;border:1.5px solid rgba(0,166,81,0.5);"></div> Current
          </div>
        </div>
      </div>
    `;
    wrap.querySelectorAll('.q-num').forEach(el => {
      el.addEventListener('click', () => {
        this.current = parseInt(el.dataset.q);
        this.renderQuestion();
        this.renderQuestionMap();
      });
    });
  }

  attachEvents() {
    document.getElementById('btn-prev')?.addEventListener('click', () => {
      if (this.current > 0) { this.current--; this.renderQuestion(); this.renderQuestionMap(); }
    });
    document.getElementById('btn-next')?.addEventListener('click', () => {
      if (this.current < this.questions.length - 1) { this.current++; this.renderQuestion(); this.renderQuestionMap(); }
    });
    document.getElementById('btn-submit')?.addEventListener('click', () => {
      const answeredCount = Object.keys(this.answers).length;
      if (answeredCount < this.questions.length) {
        const unanswered = this.questions.length - answeredCount;
        if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
      }
      this.submit();
    });
  }

  submit() {
    if (this.submitted) return;
    this.submitted = true;
    clearInterval(this.timerInterval);

    let correct = 0;
    const breakdown = this.questions.map((q, i) => {
      const ans = this.answers[i];
      const isCorrect = ans === q.answer;
      if (isCorrect) correct++;
      return { q, userAnswer: ans, isCorrect };
    });

    const pct = Math.round((correct / this.questions.length) * 100);
    this.showResults(correct, pct, breakdown);

    // Save result to Firebase / LocalStorage
    this.trySaveResult(correct, pct);
  }

  async trySaveResult(correct, pct) {
    try {
      const { auth, saveQuizResult, getGuestProfile } = await import('./firebase-config.js');
      const userId = auth.currentUser ? auth.currentUser.uid : (getGuestProfile()?.uid || 'guest_user');
      await saveQuizResult({
        userId,
        subject: this.subject,
        score: correct,
        total: this.questions.length,
        year: this.year,
        percentage: pct
      });
    } catch (e) {
      console.warn('Quiz result save error:', e);
    }
  }

  showResults(correct, pct, breakdown) {
    const area = document.getElementById('results-area');
    const header = document.querySelector('.quiz-header');
    const nav = document.querySelector('.quiz-nav');
    const submitBtn = document.getElementById('btn-submit');
    const mapWrap = document.getElementById('question-map-wrap');
    const quizArea = document.getElementById('question-area');

    if (header) header.style.display = 'none';
    if (nav) nav.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    if (mapWrap) mapWrap.style.display = 'none';
    if (quizArea) quizArea.style.display = 'none';

    // Topic Gate Progression Logic
    if (this.type === 'topic-gate') {
      const urlParams = new URLSearchParams(window.location.search);
      const gateEp = this.gateEpisode || urlParams.get('gateEpisode');
      const subj = urlParams.get('subject') || this.subject;
      area.style.display = 'block';

      if (pct >= 70) {
        // Save to passed topics
        if (gateEp) {
          const passed = JSON.parse(localStorage.getItem('scholarnet_passed_topics') || '{}');
          passed[gateEp] = pct;
          localStorage.setItem('scholarnet_passed_topics', JSON.stringify(passed));
        }

        area.innerHTML = `
          <div style="text-align:center;padding:3rem 1.5rem;max-width:550px;margin:0 auto;background:white;border-radius:20px;box-shadow:var(--shadow-xl);">
            <div style="font-size:4rem;margin-bottom:1rem;">🎉</div>
            <h2 style="font-size:1.75rem;font-weight:800;color:var(--primary);margin-bottom:0.5rem;">Topic Mastery Achieved!</h2>
            <p style="color:#374151;font-size:1.1rem;margin-bottom:1.5rem;">You scored <strong style="color:var(--primary);font-size:1.4rem;">${pct}%</strong> on this topic practice test.</p>
            <div style="background:rgba(0,166,81,0.08);border:2px solid var(--primary);border-radius:14px;padding:1.25rem;font-size:0.95rem;color:var(--secondary);margin-bottom:2rem;">
              ✅ <strong>Requirement Met:</strong> You scored 70% or higher and the next episode is now unlocked!
            </div>
            <p style="color:var(--text-light);font-size:0.85rem;margin-bottom:1.5rem;">Redirecting to lesson in 2 seconds...</p>
            <a href="learn.html?subject=${subj}&episode=${gateEp}&gated=passed&score=${pct}" class="btn btn-primary" style="padding:0.75rem 1.75rem;font-weight:700;">Proceed to Next Lesson →</a>
          </div>`;

        setTimeout(() => {
          window.location.href = `learn.html?subject=${subj}&episode=${gateEp}&gated=passed&score=${pct}`;
        }, 2200);
        return;
      } else {
        area.innerHTML = `
          <div style="text-align:center;padding:3rem 1.5rem;max-width:550px;margin:0 auto;background:white;border-radius:20px;box-shadow:var(--shadow-xl);">
            <div style="font-size:4rem;margin-bottom:1rem;">📚</div>
            <h2 style="font-size:1.65rem;font-weight:800;color:var(--danger);margin-bottom:0.5rem;">Keep Practicing!</h2>
            <p style="color:#374151;font-size:1.1rem;margin-bottom:0.75rem;">You scored <strong style="color:var(--danger);font-size:1.35rem;">${pct}%</strong> (${correct}/${this.questions.length} correct).</p>
            <div style="background:rgba(229,62,62,0.08);border:1.5px solid rgba(229,62,62,0.3);border-radius:12px;padding:1rem;margin-bottom:1.75rem;color:#991b1b;font-size:0.9rem;">
              ⚠️ <strong>Passing Score: 70% Required</strong><br>
              Review the video lesson to strengthen your understanding, then retake the test to unlock the next episode.
            </div>
            <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
              <a href="learn.html?subject=${subj}&episode=${gateEp}" class="btn btn-primary" style="padding:0.75rem 1.5rem;font-weight:700;">↺ Rewatch Lesson Video</a>
              <button onclick="window.__currentQuizEngine ? window.__currentQuizEngine.restart() : location.reload()" class="btn btn-outline" style="padding:0.75rem 1.5rem;font-weight:700;">🔄 Retake Quiz (Fresh Shuffle)</button>
            </div>
          </div>`;
        return;
      }
    }

    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';
    const msg = pct >= 80 ? 'Excellent! You are JAMB-ready!' : pct >= 60 ? 'Good job! Keep practising!' : pct >= 40 ? 'Keep studying — you\'re improving!' : 'Don\'t give up! Review and try again!';
    const wrong = this.questions.length - correct;

    area.style.display = 'block';
    area.innerHTML = `
      <div style="text-align:center;margin-bottom:2rem;">
        <h2 style="font-size:1.5rem;margin-bottom:0.25rem;">Quiz Complete! ${emoji}</h2>
        <p style="color:var(--text-light);">${msg}</p>
      </div>
      <div class="results-card" style="max-width:750px;margin:0 auto 2rem;text-align:left;background:white;padding:2rem;border-radius:16px;box-shadow:var(--shadow-md);">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;margin-bottom:2rem;">
          <div style="text-align:center;padding:1.5rem;background:rgba(0,166,81,0.08);border-radius:16px;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--primary);">${pct}%</div>
            <div style="font-size:0.85rem;color:var(--text-light);">Score</div>
          </div>
          <div style="text-align:center;padding:1.5rem;background:rgba(72,187,120,0.08);border-radius:16px;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--success);">${correct}</div>
            <div style="font-size:0.85rem;color:var(--text-light);">Correct</div>
          </div>
          <div style="text-align:center;padding:1.5rem;background:rgba(229,62,62,0.08);border-radius:16px;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--danger);">${wrong}</div>
            <div style="font-size:0.85rem;color:var(--text-light);">Wrong</div>
          </div>
        </div>
        <h3 style="font-size:1.15rem;margin-bottom:1.25rem;padding-bottom:0.75rem;border-bottom:1px solid rgba(0,0,0,0.08);">📋 Review Solutions & Explanations</h3>
        <div class="breakdown-list">
          ${breakdown.map((item, i) => `
            <div style="margin-bottom:1.5rem;padding:1.25rem;background:${item.isCorrect ? 'rgba(72,187,120,0.06)' : 'rgba(229,62,62,0.06)'};border:1.5px solid ${item.isCorrect ? 'rgba(72,187,120,0.2)' : 'rgba(229,62,62,0.2)'};border-radius:12px;">
              <div style="display:flex;align-items:flex-start;gap:0.75rem;margin-bottom:0.75rem;">
                <span style="background:${item.isCorrect ? 'var(--success)' : 'var(--danger)'};color:white;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0;">${item.isCorrect ? '✓' : '✗'}</span>
                <div>
                  <p style="font-size:0.95rem;font-weight:600;color:var(--text);margin:0 0 0.25rem;">${i + 1}. ${item.q.question}</p>
                  ${item.q.source ? `<span style="font-size:0.72rem;background:#fef3c7;color:#92400e;padding:0.15rem 0.4rem;border-radius:4px;font-weight:600;">📜 ${item.q.source}</span>` : ''}
                </div>
              </div>
              <div style="padding-left:2.25rem;">
                <p style="font-size:0.88rem;color:var(--text-light);margin-bottom:0.35rem;">Your answer: <strong style="color:${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">${item.userAnswer !== undefined ? item.q.options[item.userAnswer] : 'Not answered'}</strong></p>
                ${!item.isCorrect ? `<p style="font-size:0.88rem;color:var(--text-light);margin-bottom:0.5rem;">Correct answer: <strong style="color:var(--success);">${item.q.options[item.q.answer]}</strong></p>` : ''}
                <div style="background:rgba(0,135,81,0.08);border:1px solid rgba(0,135,81,0.2);border-radius:8px;padding:0.85rem;font-size:0.85rem;color:var(--text);margin-top:0.5rem;line-height:1.6;">
                  💡 <strong>Detailed Explanation:</strong> ${item.q.explanation}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex;gap:1rem;margin-top:1.5rem;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="window.__currentQuizEngine ? window.__currentQuizEngine.restart() : location.reload()">Try Again 🔄 (Fresh Shuffle)</button>
          <a href="../pages/learn.html" class="btn btn-outline">← Back to Lessons</a>
          <a href="dashboard.html" class="btn btn-ghost">Go to Dashboard</a>
        </div>
      </div>
    `;

    // KaTeX formula rendering in review answers
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(area, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX render in results:', e);
      }
    }
  }
}

// ============================================================
// QUIZ PAGE INITIALIZER
// ============================================================
export function initQuizPage() {
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject') || 'mathematics';
  const year    = params.get('year')    || '2024';
  const type    = params.get('type')    || 'practice';
  const topicId = params.get('topic')   || null;
  const gateEpisode = params.get('gateEpisode') || null;

  const engine = new QuizEngine({ subject, year, type, containerId: 'quiz-root', topicId, gateEpisode });
  engine.start();
}
