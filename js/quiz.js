// ============================================================
// SCHOLARNET — Quiz Engine
// Real JAMB-style questions: Maths, English, Physics, Chem, Bio
// ============================================================

export const questionBank = {
  mathematics: [
    {
      id: "m1",
      question: "If 3x + 7 = 22, find the value of x.",
      options: ["3", "5", "6", "7"],
      answer: 1,
      explanation: "3x + 7 = 22 → 3x = 22 - 7 = 15 → x = 15 ÷ 3 = 5"
    },
    {
      id: "m2",
      question: "Find the simple interest on ₦5,000 at 8% per annum for 3 years.",
      options: ["₦1,200", "₦1,400", "₦1,500", "₦2,000"],
      answer: 0,
      explanation: "SI = (P × R × T) / 100 = (5000 × 8 × 3) / 100 = 120000 / 100 = ₦1,200"
    },
    {
      id: "m3",
      question: "Simplify: (x² - 9) / (x + 3)",
      options: ["x - 3", "x + 3", "x² - 3", "x - 9"],
      answer: 0,
      explanation: "x² - 9 = (x+3)(x-3). Dividing by (x+3) gives x - 3"
    },
    {
      id: "m4",
      question: "The sum of angles in a quadrilateral is:",
      options: ["180°", "270°", "360°", "540°"],
      answer: 2,
      explanation: "The sum of interior angles of any quadrilateral (4-sided polygon) is 360°"
    },
    {
      id: "m5",
      question: "If log₂ 8 = x, find x.",
      options: ["2", "3", "4", "8"],
      answer: 1,
      explanation: "log₂ 8 = x means 2ˣ = 8. Since 2³ = 8, x = 3"
    },
    {
      id: "m6",
      question: "Find the gradient of the line passing through (2, 3) and (5, 9).",
      options: ["1", "2", "3", "6"],
      answer: 1,
      explanation: "Gradient = (y₂ - y₁)/(x₂ - x₁) = (9-3)/(5-2) = 6/3 = 2"
    },
    {
      id: "m7",
      question: "Evaluate: 3! + 4!",
      options: ["30", "30", "30", "30"].map((_,i) => ["6","24","30","42"][i]),
      answer: 2,
      explanation: "3! = 3×2×1 = 6. 4! = 4×3×2×1 = 24. 3! + 4! = 6 + 24 = 30"
    },
    {
      id: "m8",
      question: "A bag contains 5 red balls and 3 blue balls. If one ball is picked at random, what is the probability of picking a red ball?",
      options: ["3/8", "5/8", "5/3", "3/5"],
      answer: 1,
      explanation: "Total balls = 5 + 3 = 8. P(red) = 5/8"
    },
    {
      id: "m9",
      question: "Solve: 2x² - 5x - 3 = 0",
      options: ["x = 3 or x = -½", "x = -3 or x = ½", "x = 3 or x = ½", "x = -3 or x = -½"],
      answer: 0,
      explanation: "2x² - 5x - 3 = 0. Factorizing: (2x + 1)(x - 3) = 0. So x = -½ or x = 3"
    },
    {
      id: "m10",
      question: "What is the area of a circle with radius 7cm? (Take π = 22/7)",
      options: ["22 cm²", "44 cm²", "154 cm²", "308 cm²"],
      answer: 2,
      explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm²"
    },
    {
      id: "m11",
      question: "Simplify: √(48) + √(75) - √(12)",
      options: ["4√3", "7√3", "8√3", "9√3"],
      answer: 1,
      explanation: "√48 = 4√3, √75 = 5√3, √12 = 2√3. So 4√3 + 5√3 - 2√3 = 7√3"
    },
    {
      id: "m12",
      question: "The mean of 5 numbers is 12. Four of the numbers are 10, 15, 8, and 14. Find the fifth number.",
      options: ["11", "12", "13", "14"],
      answer: 2,
      explanation: "Sum = 5 × 12 = 60. Sum of 4 numbers = 10+15+8+14 = 47. Fifth = 60 - 47 = 13"
    },
    {
      id: "m13",
      question: "If sin θ = 4/5, find cos θ (where 0 < θ < 90°).",
      options: ["3/4", "3/5", "4/3", "5/4"],
      answer: 1,
      explanation: "Using Pythagoras: opposite=4, hypotenuse=5, adjacent=√(25-16)=3. cos θ = 3/5"
    },
    {
      id: "m14",
      question: "Factorise: 4x² - 25",
      options: ["(2x-5)²", "(2x+5)(2x-5)", "(4x-5)(x+5)", "(2x-5)(2x+5)"],
      answer: 1,
      explanation: "4x² - 25 is a difference of two squares: (2x)² - 5² = (2x+5)(2x-5)"
    },
    {
      id: "m15",
      question: "Find the nth term of the sequence: 3, 6, 9, 12, ...",
      options: ["n + 3", "3n", "3n - 1", "n²"],
      answer: 1,
      explanation: "This is an arithmetic sequence with first term 3 and common difference 3. nth term = 3n"
    },
    {
      id: "m16",
      question: "Evaluate: (0.064)^(1/3)",
      options: ["0.04", "0.4", "0.004", "4"],
      answer: 1,
      explanation: "0.064 = 64/1000. Cube root = 4/10 = 0.4"
    },
    {
      id: "m17",
      question: "A rectangle has length 12cm and width 5cm. Find the length of its diagonal.",
      options: ["13 cm", "14 cm", "15 cm", "17 cm"],
      answer: 0,
      explanation: "By Pythagoras: d = √(12² + 5²) = √(144 + 25) = √169 = 13 cm"
    }
  ],

  english: [
    {
      id: "e1",
      question: "Choose the word that is correctly spelt:",
      options: ["Accomodation", "Accommodation", "Acomodation", "Acommodation"],
      answer: 1,
      explanation: "'Accommodation' has double 'c' and double 'm'. It means lodging or housing."
    },
    {
      id: "e2",
      question: "In the sentence 'The old woman gave ___ a gift', which pronoun best completes the sentence?",
      options: ["I", "he", "me", "they"],
      answer: 2,
      explanation: "After a verb, an object pronoun is needed. 'Me' is the correct object pronoun here."
    },
    {
      id: "e3",
      question: "Select the option that best interprets the expression: 'He kicked the bucket'",
      options: ["He kicked a bucket", "He was angry", "He died", "He lost his job"],
      answer: 2,
      explanation: "'Kick the bucket' is an idiom meaning 'to die'."
    },
    {
      id: "e4",
      question: "Which of the following is NOT a conjunction?",
      options: ["because", "although", "quickly", "while"],
      answer: 2,
      explanation: "'Quickly' is an adverb, not a conjunction. Conjunctions join clauses: because, although, while."
    },
    {
      id: "e5",
      question: "Choose the sentence that is grammatically correct:",
      options: [
        "The boys plays football every day.",
        "The boys play football every day.",
        "The boys is playing football every day.",
        "The boys was playing football every day."
      ],
      answer: 1,
      explanation: "With plural subject 'the boys', use the base form of the verb: 'play' (not 'plays')."
    },
    {
      id: "e6",
      question: "The word 'loquacious' means:",
      options: ["Quiet and reserved", "Fond of talking a lot", "Dishonest", "Very intelligent"],
      answer: 1,
      explanation: "'Loquacious' means tending to talk a great deal; garrulous."
    },
    {
      id: "e7",
      question: "Identify the type of clause in italics: 'She left *before the rain started*.'",
      options: ["Noun clause", "Relative clause", "Adverbial clause", "Nominal clause"],
      answer: 2,
      explanation: "'before the rain started' tells us WHEN she left, making it an adverbial clause of time."
    },
    {
      id: "e8",
      question: "Select the antonym of 'FRUGAL':",
      options: ["Careful", "Thrifty", "Extravagant", "Economical"],
      answer: 2,
      explanation: "'Frugal' means spending carefully. Its antonym is 'extravagant', meaning spending excessively."
    },
    {
      id: "e9",
      question: "Which sentence uses the passive voice?",
      options: [
        "The dog chased the cat.",
        "The cat was chased by the dog.",
        "She is eating her food.",
        "They will go to school tomorrow."
      ],
      answer: 1,
      explanation: "Passive voice: subject receives action. 'The cat was chased' — the cat (subject) was acted upon."
    },
    {
      id: "e10",
      question: "Choose the correct punctuation: Emeka said ___ I will pass JAMB this year___",
      options: [', "I will pass JAMB this year."', ', "i will pass JAMB this year."', '. "I will pass JAMB this year."', ', I will pass JAMB this year.'],
      answer: 0,
      explanation: "After a reporting verb like 'said', use a comma, then open quotes, capitalize the first word."
    },
    {
      id: "e11",
      question: "In the word 'photography', the suffix '-graphy' means:",
      options: ["Light", "Writing or drawing", "Color", "Time"],
      answer: 1,
      explanation: "The suffix '-graphy' comes from Greek 'graphia' meaning writing or drawing/recording."
    },
    {
      id: "e12",
      question: "Select the figure of speech in: 'The computer in my school is as slow as a tortoise.'",
      options: ["Metaphor", "Personification", "Simile", "Hyperbole"],
      answer: 2,
      explanation: "A simile compares two unlike things using 'as' or 'like'. Here: 'as slow as a tortoise'."
    },
    {
      id: "e13",
      question: "Choose the word that best completes the sentence: The doctor ___ his patient every morning.",
      options: ["examines", "examine", "examined", "is examine"],
      answer: 0,
      explanation: "With a singular subject ('the doctor') in simple present tense, add 's' to the verb: 'examines'."
    },
    {
      id: "e14",
      question: "The plural of 'criterion' is:",
      options: ["Criterions", "Criterias", "Criteria", "Criterium"],
      answer: 2,
      explanation: "'Criterion' is a Latin-origin word. Its plural is 'criteria' (not 'criterions')."
    },
    {
      id: "e15",
      question: "Which of these is an example of onomatopoeia?",
      options: ["The beautiful girl", "The buzzing bee", "The tall tree", "The hot sun"],
      answer: 1,
      explanation: "Onomatopoeia: words that imitate sounds. 'Buzzing' imitates the sound a bee makes."
    },
    {
      id: "e16",
      question: "What does the phrase 'to burn the midnight oil' mean?",
      options: ["To start a fire at night", "To work or study late into the night", "To waste fuel", "To cook at midnight"],
      answer: 1,
      explanation: "'Burning the midnight oil' is an idiom meaning to work or study very late at night."
    }
  ],

  physics: [
    {
      id: "p1",
      question: "Which of the following is NOT a scalar quantity?",
      options: ["Speed", "Mass", "Velocity", "Temperature"],
      answer: 2,
      explanation: "Velocity has both magnitude AND direction, making it a vector quantity. Speed, mass, and temperature are scalars."
    },
    {
      id: "p2",
      question: "The SI unit of electric resistance is:",
      options: ["Ampere", "Volt", "Ohm", "Farad"],
      answer: 2,
      explanation: "Electric resistance is measured in Ohms (Ω), named after physicist Georg Simon Ohm."
    },
    {
      id: "p3",
      question: "A body moves with uniform acceleration. Which graph shows speed against time?",
      options: ["Horizontal straight line", "Curved line", "Straight line with positive gradient", "Vertical straight line"],
      answer: 2,
      explanation: "Uniform acceleration means speed increases at a constant rate — giving a straight line (positive gradient) on a speed-time graph."
    },
    {
      id: "p4",
      question: "Newton's first law of motion is also called:",
      options: ["Law of acceleration", "Law of gravity", "Law of inertia", "Law of action and reaction"],
      answer: 2,
      explanation: "Newton's first law (a body remains at rest or in uniform motion unless acted on by an external force) is the Law of Inertia."
    },
    {
      id: "p5",
      question: "A 2 kg object experiences a net force of 10 N. Its acceleration is:",
      options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
      answer: 1,
      explanation: "From F = ma: a = F/m = 10/2 = 5 m/s²"
    },
    {
      id: "p6",
      question: "Which wave cannot be polarized?",
      options: ["Radio wave", "Light wave", "Sound wave", "X-ray"],
      answer: 2,
      explanation: "Sound waves are longitudinal (vibrate in the direction of travel) and cannot be polarized. Only transverse waves can be polarized."
    },
    {
      id: "p7",
      question: "The speed of light in vacuum is approximately:",
      options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      answer: 1,
      explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s (300,000 km/s)."
    },
    {
      id: "p8",
      question: "Which phenomenon explains why a straw appears bent in water?",
      options: ["Reflection", "Refraction", "Diffraction", "Polarization"],
      answer: 1,
      explanation: "Refraction is the bending of light when it passes from one medium to another (different density), causing the straw illusion."
    },
    {
      id: "p9",
      question: "If an object has a mass of 10 kg, its weight on Earth (g = 10 m/s²) is:",
      options: ["1 N", "10 N", "100 N", "1000 N"],
      answer: 2,
      explanation: "Weight = mg = 10 × 10 = 100 N"
    },
    {
      id: "p10",
      question: "The energy stored in a stretched elastic band is:",
      options: ["Kinetic energy", "Gravitational potential energy", "Elastic potential energy", "Chemical energy"],
      answer: 2,
      explanation: "Elastic potential energy is stored in objects that are stretched, compressed, or deformed."
    },
    {
      id: "p11",
      question: "Which of the following is a good conductor of electricity?",
      options: ["Wood", "Rubber", "Copper", "Glass"],
      answer: 2,
      explanation: "Copper is an excellent conductor of electricity due to its free electrons. Wood, rubber, and glass are insulators."
    }
  ],

  chemistry: [
    {
      id: "c1",
      question: "The atomic number of Carbon is:",
      options: ["4", "6", "8", "12"],
      answer: 1,
      explanation: "Carbon has atomic number 6, meaning it has 6 protons. Its atomic mass is approximately 12 amu."
    },
    {
      id: "c2",
      question: "Which gas is produced when dilute hydrochloric acid reacts with zinc?",
      options: ["Oxygen", "Chlorine", "Hydrogen", "Carbon dioxide"],
      answer: 2,
      explanation: "Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is evolved when zinc reacts with dilute HCl."
    },
    {
      id: "c3",
      question: "The pH of a neutral solution is:",
      options: ["0", "5", "7", "14"],
      answer: 2,
      explanation: "pH 7 is neutral. pH < 7 is acidic; pH > 7 is alkaline/basic. Pure water has pH = 7."
    },
    {
      id: "c4",
      question: "Which of these is the formula for table salt?",
      options: ["KCl", "NaCl", "CaCl₂", "MgCl₂"],
      answer: 1,
      explanation: "Table salt is sodium chloride, NaCl. It's formed from Na⁺ and Cl⁻ ions."
    },
    {
      id: "c5",
      question: "Oxidation involves:",
      options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of protons"],
      answer: 1,
      explanation: "OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)."
    },
    {
      id: "c6",
      question: "Which type of bond is found in NaCl?",
      options: ["Covalent bond", "Metallic bond", "Ionic bond", "Hydrogen bond"],
      answer: 2,
      explanation: "NaCl forms ionic bonds — electrons transfer from sodium (metal) to chlorine (non-metal)."
    },
    {
      id: "c7",
      question: "The gas that causes acid rain is:",
      options: ["CO₂", "SO₂", "N₂", "O₂"],
      answer: 1,
      explanation: "Sulfur dioxide (SO₂) from burning fossil fuels dissolves in rain to form sulfuric acid (H₂SO₄), causing acid rain."
    },
    {
      id: "c8",
      question: "Avogadro's number is approximately:",
      options: ["6.02 × 10²³", "6.02 × 10²²", "3.01 × 10²³", "12.04 × 10²³"],
      answer: 0,
      explanation: "Avogadro's number is 6.02 × 10²³ particles per mole — the number of atoms, molecules, or ions in one mole of a substance."
    },
    {
      id: "c9",
      question: "Which of the following is a mixture?",
      options: ["Water (H₂O)", "Sodium chloride (NaCl)", "Air", "Carbon dioxide (CO₂)"],
      answer: 2,
      explanation: "Air is a mixture of gases (mainly N₂, O₂, Ar, CO₂). Water, NaCl, and CO₂ are pure compounds."
    },
    {
      id: "c10",
      question: "The process by which plants make food using sunlight is:",
      options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
      answer: 2,
      explanation: "Photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Plants convert sunlight into chemical energy."
    },
    {
      id: "c11",
      question: "Which of the following elements is a noble gas?",
      options: ["Fluorine", "Nitrogen", "Argon", "Chlorine"],
      answer: 2,
      explanation: "Argon (Ar) is a noble gas — Group 18 of the periodic table, with a full outer shell, making it largely inert."
    }
  ],

  biology: [
    {
      id: "b1",
      question: "The powerhouse of the cell is the:",
      options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
      answer: 2,
      explanation: "Mitochondria produce ATP through cellular respiration, supplying energy for all cellular activities — hence 'powerhouse of the cell'."
    },
    {
      id: "b2",
      question: "Which blood group is the universal donor?",
      options: ["A", "B", "AB", "O"],
      answer: 3,
      explanation: "Blood group O negative is the universal donor — it lacks A, B, and Rh antigens, so it can be given to all blood groups."
    },
    {
      id: "b3",
      question: "Photosynthesis occurs in the:",
      options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
      answer: 1,
      explanation: "Chloroplasts contain chlorophyll (the green pigment) and are the sites of photosynthesis in plant cells."
    },
    {
      id: "b4",
      question: "Which of the following is NOT a function of the skeleton?",
      options: ["Support", "Protection", "Digestion", "Locomotion"],
      answer: 2,
      explanation: "The skeleton supports the body, protects organs, aids locomotion, and produces blood cells — but NOT digestion."
    },
    {
      id: "b5",
      question: "The process by which organisms produce offspring is called:",
      options: ["Respiration", "Reproduction", "Excretion", "Nutrition"],
      answer: 1,
      explanation: "Reproduction is the biological process by which organisms produce offspring, ensuring species continuity."
    },
    {
      id: "b6",
      question: "Which part of the human brain controls balance and coordination?",
      options: ["Cerebrum", "Medulla oblongata", "Cerebellum", "Hypothalamus"],
      answer: 2,
      explanation: "The cerebellum coordinates muscle movements, balance, and fine motor control."
    },
    {
      id: "b7",
      question: "DNA stands for:",
      options: [
        "Deoxyribose Nitrogen Acid",
        "Deoxyribonucleic Acid",
        "Deoxyribose Nucleotide Acid",
        "Deoxyribose Nucleic Acid"
      ],
      answer: 1,
      explanation: "DNA = Deoxyribonucleic Acid. It carries genetic information and is found in the nucleus of cells."
    },
    {
      id: "b8",
      question: "The process by which green plants lose water vapor through their leaves is called:",
      options: ["Respiration", "Transpiration", "Excretion", "Evaporation"],
      answer: 1,
      explanation: "Transpiration is the evaporation of water from plant leaves through tiny pores called stomata."
    },
    {
      id: "b9",
      question: "Which disease is caused by the Plasmodium parasite?",
      options: ["Cholera", "Typhoid", "Malaria", "Yellow fever"],
      answer: 2,
      explanation: "Malaria is caused by Plasmodium parasites transmitted through the bite of infected female Anopheles mosquitoes."
    },
    {
      id: "b10",
      question: "The structural and functional unit of the kidney is the:",
      options: ["Neuron", "Nephron", "Alveolus", "Villus"],
      answer: 1,
      explanation: "The nephron is the microscopic functional unit of the kidney where blood filtration and urine formation occur."
    },
    {
      id: "b11",
      question: "Which vitamin is produced by the skin when exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: 3,
      explanation: "Vitamin D is synthesized in the skin when exposed to UV rays from sunlight. It's essential for calcium absorption and bone health."
    }
  ],
  economics: [
    {
      id: "ec1",
      question: "Opportunity cost is best defined as:",
      options: ["Total monetary expenditure on a good", "The value of the next best alternative forgone", "The cost of raw materials in production", "The variable cost incurred in the short run"],
      answer: 1,
      explanation: "Opportunity cost represents the benefits an individual, investor, or business misses out on when choosing one alternative over another."
    },
    {
      id: "ec2",
      question: "Which of the following causes an outward shift of the production possibility curve (PPC)?",
      options: ["Higher tax rates", "Technological advancement and capital growth", "Fall in consumer income", "Depreciation of physical currency"],
      answer: 1,
      explanation: "Technological progress and increase in resource endowment expand production capacity, shifting the PPC outward."
    },
    {
      id: "ec3",
      question: "When demand is price-elastic, a decrease in price will result in:",
      options: ["No change in total revenue", "A decrease in total revenue", "An increase in total revenue", "A zero elasticity coefficient"],
      answer: 2,
      explanation: "When price elasticity of demand > 1, the percentage increase in quantity demanded exceeds the percentage decrease in price, raising total revenue."
    },
    {
      id: "ec4",
      question: "The primary regulatory institution for monetary policy in Nigeria is the:",
      options: ["Federal Ministry of Finance", "Central Bank of Nigeria (CBN)", "Securities and Exchange Commission (SEC)", "Nigeria Deposit Insurance Corporation (NDIC)"],
      answer: 1,
      explanation: "The Central Bank of Nigeria (CBN) is mandated with issuing legal tender, regulating commercial banks, and executing monetary policy."
    },
    {
      id: "ec5",
      question: "Inflation caused by rising costs of production and wages is called:",
      options: ["Demand-pull inflation", "Cost-push inflation", "Hyperinflation", "Structural inflation"],
      answer: 1,
      explanation: "Cost-push inflation occurs when aggregate supply decreases due to escalating production costs (energy, wages, imported inputs)."
    }
  ],
  government: [
    {
      id: "gv1",
      question: "The 1922 Clifford Constitution in Nigeria was historically significant because it:",
      options: ["Introduced full republican status", "Introduced the elective principle for the first time", "Established a bicameral federal legislature", "Abolished the indirect rule system completely"],
      answer: 1,
      explanation: "The Hugh Clifford Constitution of 1922 introduced the elective principle, allowing Lagos and Calabar to elect four legislative members."
    },
    {
      id: "gv2",
      question: "In the pre-colonial Yoruba political system, the council of kingmakers was known as the:",
      options: ["Oyomesi", "Ogboni", "Are-Ona-Kakanfo", "Baale"],
      answer: 0,
      explanation: "The Oyomesi was the supreme council of seven kingmakers in the Oyo Empire, headed by the Bashorun."
    },
    {
      id: "gv3",
      question: "Which organ of government is responsible for interpreting and applying laws?",
      options: ["The Legislature", "The Executive", "The Judiciary", "The Civil Service"],
      answer: 2,
      explanation: "The Judiciary interprets the constitution and statutes, settles disputes, and applies laws in court."
    },
    {
      id: "gv4",
      question: "Federalism was formally introduced into Nigeria's constitutional development by the:",
      options: ["Richards Constitution (1946)", "Macpherson Constitution (1951)", "Lyttelton Constitution (1954)", "Independence Constitution (1960)"],
      answer: 2,
      explanation: "The Oliver Lyttelton Constitution of 1954 formally established a federal structure with regional autonomy for Eastern, Western, and Northern regions."
    },
    {
      id: "gv5",
      question: "The fundamental principle ensuring that no individual or government organ is above the law is:",
      options: ["Separation of Powers", "Rule of Law", "Checks and Balances", "Parliamentary Supremacy"],
      answer: 1,
      explanation: "The Rule of Law asserts the supremacy of regular law, equality before the law, and protection of fundamental human rights."
    }
  ],
  literature: [
    {
      id: "lit1",
      question: "The literary device that attributes human characteristics to inanimate objects is:",
      options: ["Metaphor", "Personification", "Hyperbole", "Oxymoron"],
      answer: 1,
      explanation: "Personification gives human emotions, actions, or qualities to non-human things or abstractions (e.g., 'the wind whispered')."
    },
    {
      id: "lit2",
      question: "A poem consisting of fourteen lines with a definite rhyme scheme is known as a:",
      options: ["Ballad", "Ode", "Sonnet", "Elegy"],
      answer: 2,
      explanation: "A sonnet is a traditional 14-line lyrical poem, commonly Petrarachan (Italian) or Shakespearean (English)."
    },
    {
      id: "lit3",
      question: "When an author provides hints or clues about what will happen later in the story, it is called:",
      options: ["Flashback", "Foreshadowing", "Allusion", "Irony"],
      answer: 1,
      explanation: "Foreshadowing prepares the reader for future plot events through subtle dialogue, symbols, or omens."
    },
    {
      id: "lit4",
      question: "The tragic flaw that leads to the downfall of a tragic protagonist is technically termed:",
      options: ["Catharsis", "Hamartia", "Hubris", "Anagnorisis"],
      answer: 1,
      explanation: "Hamartia is the Greek concept of a fatal error in judgment or character flaw leading to catastrophe."
    },
    {
      id: "lit5",
      question: "A speech delivered by a character alone on stage revealing their inner thoughts is a:",
      options: ["Monologue", "Dialogue", "Soliloquy", "Aside"],
      answer: 2,
      explanation: "A soliloquy allows the character to speak their private thoughts directly to the audience when alone."
    }
  ],
  commerce: [
    {
      id: "cm1",
      question: "Which aid to trade is primarily concerned with indemnifying businessmen against unexpected loss?",
      options: ["Banking", "Transportation", "Insurance", "Warehousing"],
      answer: 2,
      explanation: "Insurance protects entrepreneurs from risks and reimburses financial losses."
    },
    {
      id: "cm2",
      question: "The document that serves as evidence of a contract of carriage between a shipper and a shipping line is a:",
      options: ["Bill of Lading", "Consular Invoice", "Certificate of Origin", "Mate's Receipt"],
      answer: 0,
      explanation: "A Bill of Lading acts as a document of title, receipt of goods, and terms of shipping contract."
    }
  ],
  civic: [
    {
      id: "cv1",
      question: "Which of the following is a fundamental obligation of a Nigerian citizen?",
      options: ["Payment of taxes and rates", "Running for political office", "Joining a trade union", "Travelling abroad"],
      answer: 0,
      explanation: "Paying lawful taxes and rates is a civic duty enshrined in Chapter II of the 1999 Constitution."
    },
    {
      id: "cv2",
      question: "The declaration that states that all human beings are born free and equal in dignity and rights is the:",
      options: ["Geneva Convention", "Universal Declaration of Human Rights (UDHR)", "African Charter", "Magna Carta"],
      answer: 1,
      explanation: "The UDHR was adopted by the UN General Assembly in 1948 setting out fundamental rights."
    }
  ],
  computer: [
    {
      id: "cp1",
      question: "The brain of the computer responsible for executing program instructions is the:",
      options: ["Central Processing Unit (CPU)", "Hard Disk Drive (HDD)", "Random Access Memory (RAM)", "Motherboard"],
      answer: 0,
      explanation: "The CPU interprets and carries out instructions from programs and manages operations."
    },
    {
      id: "cp2",
      question: "What is the binary equivalent of the decimal number 13?",
      options: ["1011", "1101", "1110", "1001"],
      answer: 1,
      explanation: "13 in binary: 8 + 4 + 0 + 1 = 1101₂."
    }
  ]
};

// ============================================================
// QUIZ ENGINE CLASS
// ============================================================
export class QuizEngine {
  constructor({ subject, year, type, containerId }) {
    this.subject = subject;
    this.year = year;
    this.type = type;
    this.container = document.getElementById(containerId);
    this.questions = this.loadQuestions();
    this.current = 0;
    this.answers = {};
    this.timeLimit = type === 'mock' ? 60 * 60 : this.questions.length * 30; // seconds
    this.timeLeft = this.timeLimit;
    this.timerInterval = null;
    this.submitted = false;
    this.startTime = Date.now();
  }

  loadQuestions() {
    const pool = questionBank[this.subject] || questionBank.mathematics;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(shuffled.length, this.type === 'mock' ? shuffled.length : 10));
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
          <p style="color:var(--text-light);font-size:0.85rem;">${this.questions.length} Questions • ${this.type === 'mock' ? '60 min' : this.questions.length + ' × 30s'}</p>
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
      english: 'English Language', 
      physics: 'Physics', 
      chemistry: 'Chemistry', 
      biology: 'Biology',
      economics: 'Economics',
      government: 'Government',
      literature: 'Literature in English',
      commerce: 'Commerce',
      civic: 'Civic Education',
      computer: 'Computer Studies'
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
          ${this.type === 'past' ? `<span class="badge badge-info">JAMB ${this.year}</span>` : ''}
        </div>
        <div class="question-text">${q.question}</div>
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

    // Try to save result if user is logged in
    this.trySaveResult(correct, pct);
  }

  async trySaveResult(correct, pct) {
    try {
      const { auth, saveQuizResult, getGuestProfile } = await import('./firebase-config.js');
      const userId = auth.currentUser ? auth.currentUser.uid : (getGuestProfile()?.uid || 'guest_user');
      await saveQuizResult(userId, this.subject, correct, this.questions.length, this.year || '2024');
    } catch (e) {
      console.warn("Quiz save fallback:", e);
    }
  }

  showResults(correct, pct, breakdown) {
    const area = document.getElementById('results-area');
    const quizArea = document.getElementById('question-area');
    const quizNav  = this.container.querySelector('.quiz-nav');
    const submitBtn = document.getElementById('btn-submit');
    const mapWrap = document.getElementById('question-map-wrap');
    const timerWrap = document.getElementById('quiz-timer-wrap');
    if (timerWrap) timerWrap.style.display = 'none';
    if (quizNav)  quizNav.style.display = 'none';
    if (submitBtn) submitBtn.closest('div').style.display = 'none';
    if (mapWrap) mapWrap.style.display = 'none';
    if (quizArea) quizArea.style.display = 'none';

    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';
    const msg = pct >= 80 ? 'Excellent! You are JAMB-ready!' : pct >= 60 ? 'Good job! Keep practising!' : pct >= 40 ? 'Keep studying — you\'re improving!' : 'Don\'t give up! Review and try again!';
    const wrong = this.questions.length - correct;

    area.style.display = 'block';
    area.innerHTML = `
      <div style="text-align:center;margin-bottom:2rem;">
        <h2 style="font-size:1.5rem;margin-bottom:0.25rem;">Quiz Complete! ${emoji}</h2>
        <p style="color:var(--text-light);">${msg}</p>
      </div>
      <div class="results-card" style="max-width:700px;margin:0 auto 2rem;text-align:left;">
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
        <h3 style="font-size:1.1rem;margin-bottom:1.25rem;padding-bottom:0.75rem;border-bottom:1px solid rgba(0,0,0,0.08);">📋 Review Answers</h3>
        <div class="breakdown-list">
          ${breakdown.map((item, i) => `
            <div style="margin-bottom:1.5rem;padding:1.25rem;background:${item.isCorrect ? 'rgba(72,187,120,0.06)' : 'rgba(229,62,62,0.06)'};border:1.5px solid ${item.isCorrect ? 'rgba(72,187,120,0.2)' : 'rgba(229,62,62,0.2)'};border-radius:12px;">
              <div style="display:flex;align-items:flex-start;gap:0.75rem;margin-bottom:0.75rem;">
                <span style="background:${item.isCorrect ? 'var(--success)' : 'var(--danger)'};color:white;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0;">${item.isCorrect ? '✓' : '✗'}</span>
                <p style="font-size:0.9rem;font-weight:600;color:var(--text);margin:0;">${i + 1}. ${item.q.question}</p>
              </div>
              <div style="padding-left:2rem;">
                <p style="font-size:0.85rem;color:var(--text-light);margin-bottom:0.35rem;">Your answer: <strong style="color:${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">${item.userAnswer !== undefined ? item.q.options[item.userAnswer] : 'Not answered'}</strong></p>
                ${!item.isCorrect ? `<p style="font-size:0.85rem;color:var(--text-light);margin-bottom:0.5rem;">Correct answer: <strong style="color:var(--success);">${item.q.options[item.q.answer]}</strong></p>` : ''}
                <div style="background:rgba(0,135,81,0.1);border:1px solid rgba(0,135,81,0.2);border-radius:8px;padding:0.75rem;font-size:0.82rem;color:var(--text-light);margin-top:0.5rem;">
                  💡 ${item.q.explanation}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex;gap:1rem;margin-top:1.5rem;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="location.reload()">Try Again 🔄</button>
          <a href="../pages/subjects.html" class="btn btn-outline">← Back to Subjects</a>
          <a href="dashboard.html" class="btn btn-ghost">Go to Dashboard</a>
        </div>
      </div>
    `;
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

  const engine = new QuizEngine({ subject, year, type, containerId: 'quiz-root' });
  engine.start();
}
