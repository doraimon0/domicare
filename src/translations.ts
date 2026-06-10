export type Language = 'ar' | 'en' | 'fr';

export interface TranslationSchema {
  navTitle: string;
  presentation: string;
  playGame: string;
  learnMore: string;
  protectYourself: string;
  aboutUs: string;
  contactUs: string;
  heroTagline: string;
  heroSub: string;
  selectLanguage: string;
  
  // Slide Content
  slidesTitle: string;
  slidesSubtitle: string;
  slideProblemTitle: string;
  slideProblemText: string;
  slideSolutionTitle: string;
  slideSolutionText: string;
  slideAudienceTitle: string;
  slideAudienceText: string;
  prev: string;
  next: string;
  viewDetails: string;
  backToPresentation: string;

  // Characters section
  charactersTitle: string;
  charactersSubtitle: string;
  
  // Game section
  gameTitle: string;
  gameSubtitle: string;
  gameGoal: string;
  gamePlayers: string;
  gameStartScore: string;
  gameRulesText: string;
  playVsAI: string;
  setupGame: string;
  choosePlayersCount: string;
  startGameBtn: string;
  playerTurn: string;
  aiTurn: string;
  drawCard: string;
  points: string;
  yourHand: string;
  playCard: string;
  playedCardsPile: string;
  deckRemaining: string;
  gameLog: string;
  gameOver: string;
  victoryMessage: string;
  defeatMessage: string;
  playAgain: string;
  turnStatus: string;
  shieldActive: string;
  shieldActivatedLog: string;
  dangerMitigatedLog: string;
  pointScoreLog: string;
  dangerTriggeredLog: string;
  aiPlayedCard: string;

  // Card Names & Descriptions
  cardDomiName: string;
  cardDomiDesc: string;
  cardJeebiName: string;
  cardJeebiDesc: string;
  cardHumaName: string;
  cardHumaDesc: string;
  cardQasboName: string;
  cardQasboDesc: string;
  cardFoloName: string;
  cardFoloDesc: string;
  cardSoyoName: string;
  cardSoyoDesc: string;
  cardDawaoName: string;
  cardDawaoDesc: string;
  cardNiftoName: string;
  cardNiftoDesc: string;

  // Contact & About
  aboutTextTitle: string;
  aboutTextBody: string;
  contactTitle: string;
  contactEmail: string;
  contactInstagram: string;
  contactScanQR: string;
  backToTop: string;
}

export const translations: Record<Language, TranslationSchema> = {
  ar: {
    navTitle: "دومي كير | DomiCare",
    presentation: "دليل الوقاية والوعي",
    playGame: "العب وتعلّم",
    learnMore: "اكتشف",
    protectYourself: "احم نفسك",
    aboutUs: "من نحن",
    contactUs: "تواصل معنا",
    heroTagline: "مع دومي... وعيك يحميك",
    heroSub: "منصة توعوية وقائية شاملة للأطفال والأهالي حول نقص إنزيم G6PD (أنيميا الفول) ممزوجة بمتعة اللعب والمحاكاة التفاعلية المبسطة.",
    selectLanguage: "اللغة",
    
    slidesTitle: "منهجية التوعية والوقاية",
    slidesSubtitle: "رؤية تفاعلية شاملة لتبسيط فهم نقص إنزيم G6PD وضمان سلامة الأطفال",
    slideProblemTitle: "التحدي: تبسيط وعي الأطفال بنقص G6PD",
    slideProblemText: "تواجه عائلات الأطفال المصابين بنقص G6PD (أنيميا الفول) صعوبة كبيرة في إفهام الأطفال الصغار طبيعة المواد المحظورة كالفول والصويا والنفتالين بشكل مشوق ومستدام. قلة إدراك الطفل لهذه المخاطر قد تعرضه لاستهلاك مفاجئ يؤدي لتكسر خلايا الدم الحمراء بشكل حرج.",
    slideSolutionTitle: "المبادرة: أدوات التعليم والتبسيط البصري",
    slideSolutionText: "ابتكرنا في دومي كير واجهة توعوية مبسطة تحول الإرشادات الطبية والوقائية الصارمة إلى مرئيات كرتونية ومحاكاة تفاعلية سهلة الفهم. عبر تتبع أبطالنا 'دومي' و 'جيبي'؛ يتعلم الطفل التعرف التلقائي على محفزات التكسر لحماية نفسه بثقة وأمان.",
    slideAudienceTitle: "الأثر المرجو والمجتمع الصحي",
    slideAudienceText: "تستهدف المنصة الأطفال المصابين (من عمر 5 إلى 12 سنة) لبناء رقابة ذاتية ذكية، وأولياء الأمور كمرجع معرفي تفاعلي سريع، بالإضافة إلى المدارس ومراكز الرعاية لتوحيد جهود التوعية الصحية وتقديم بيئة وقائية مرنة.",
    prev: "السابق",
    next: "التالي",
    viewDetails: "تفاصيل الشخصية",
    backToPresentation: "العودة للدليل",

    charactersTitle: "أبطال عالم دومي كير 🦸‍♂️",
    charactersSubtitle: "تعرف على الأصدقاء الذين سيرافقونك في رحلة الحماية والوعي والتحدي!",
    
    gameTitle: "محاكي لعبة بطاقات دومي كير التفاعلية",
    gameSubtitle: "اختبر مهاراتك الوقائية ضد المحاكي التفاعلي، اجمع النقاط، واحذر الممنوعات!",
    gameGoal: "الهدف: الفوز بالوصول إلى 15 نقطة أولاً! كل لاعب يبدأ بـ 5 نقاط و 5 بطاقات.",
    gamePlayers: "اللاعبون",
    gameStartScore: "البدء بـ +5 نقاط",
    gameRulesText: "قوانين اللعبة: في كل دور، اسحب بطاقة ثم العب بطاقة. كروت الخير والإنزيمات (دومي +3، جيبي +2) ترفع نقاطك. كروت الخطر (فولو -1، سويو -1، دوا -1، نفتو -3) تنقص نقاطك إلا إذا كان لديك درع حماية (حمى) أو كارت (قصبو) الذي يلغي الخطر فوراً ويعيد عافيتك!",
    playVsAI: "العب ضد المحاكي التفاعلي",
    setupGame: "تجهيز المحاكاة التفاعلية",
    choosePlayersCount: "اختر عدد المنافسين في المحاكاة التفاعلية:",
    startGameBtn: "ابدأ التحدي الآن 🃏",
    playerTurn: "دورك الآن! اسحب بطاقة ثم حدد كارت لتلعبه.",
    aiTurn: "الخصم الآلي يفكر ويلعب حالياً...",
    drawCard: "اسحب كارت 📥",
    points: "نقاط",
    yourHand: "بطاقاتك الحالية",
    playCard: "العب الكارت",
    playedCardsPile: "كومة اللعب الأخيرة",
    deckRemaining: "الكروت المتبقية في السحب",
    gameLog: "سجل حركات المحاكاة والوقاية",
    gameOver: "انتهت اللعبة!",
    victoryMessage: "مبروك! لقد نجحت في تحقيق كامل شروط الوعي وحماية بطلنا من كافة المخاطر المتوقعة! 🎉🏆",
    defeatMessage: "حاول مرة أخرى! لقد استنفدت نقاط المناعة، تذكر دائماً قواعد الصحة والوقاية من المثيرات الممنوعة! 💔",
    playAgain: "إعادة اللعب والتعلم 🔄",
    turnStatus: "الوضع الحالي للعبة",
    shieldActive: "درع حماية نشط 🛡️",
    shieldActivatedLog: "قام بتفعيل درع الحماية (حمى)! يحميه من المحفزات المؤكسدة القادمة.",
    dangerMitigatedLog: "نجحت الوقاية! تم إبطال مفعول خطر الكارت باستخدام درع الحماية أو كارت الإنقاذ قصبو بشكل فعال!",
    pointScoreLog: "حصل على نقاط دعم للدم ونشاط بفضل",
    dangerTriggeredLog: "تعرض لتأثير سلبي وتكسر جزئي من محفز الخطر",
    aiPlayedCard: "لعب بطاقة",

    cardDomiName: "دومي البطل (Domi Hero)",
    cardDomiDesc: "البطل الخارق الحامي لخلايا الدم! يمنحك +3 نقاط فورية، ويحمي خلاياك من التكسر والضعف.",
    cardJeebiName: "جيبي الإنزيم (Jeebi G6PD)",
    cardJeebiDesc: "الإنزيم الهام لحماية جدران خلايا الدم الحمراء. يمنحك +2 نقاط ويقي الدم من الانحلال.",
    cardHumaName: "حِمى الدرع (Huma Shield)",
    cardHumaDesc: "درع الحماية المتين! يمنع تدمير الخلايا ويصد الممنوعات والأخطار المؤكسدة المحتملة.",
    cardQasboName: "قصبو المنقذ (Qasbo Rescue)",
    cardQasboDesc: "عسل قصب السكر الطبيعي المضاد للأكسدة! يلغي تأثير الخطر فوراً ويعيد الطاقة للجسم.",
    cardFoloName: "فولو (Folo)",
    cardFoloDesc: "خطر الفول الأخضر وزهرته (-1 نقطة). يسبب انحلالاً دموياً مباشراً لدى مصابي G6PD ويجب منعه تماماً.",
    cardSoyoName: "سويو (Soyo)",
    cardSoyoDesc: "خطر منتجات ومشتقات الصويا (-1 نقطة). تسبب تكسراً دموياً ويجب التفتيش عليها في المكونات المعالجة.",
    cardDawaoName: "دوا المحظور (Dawao)",
    cardDawaoDesc: "خطر بعض الأدوية غير الآمنة (-1 نقطة). تسبب تكسر خلايا الدم، ولا تتناول أي دواء دون استشارة طبيب مختص.",
    cardNiftoName: "نفتو النفتالين (Nifto)",
    cardNiftoDesc: "الخطر الشديد السام (-3 نقاط!). استنشاق كرات النفثالين في الملابس يسبب انحلال دموياً حاداً وسريعاً جداً.",

    aboutTextTitle: "مبادرة DomiCare للتوعية والوقاية",
    aboutTextBody: "انطلقت مبادرة DomiCare من رغبة حقيقية وإنسانية لتبسيط ورفع الوعي الصحي حول مرض نقص إنزيم G6PD المسمى بأنيميا الفول. يعاني الأطفال المصابون من صعوبات بالغة في فهم وتذكر قائمة الممنوعات الدائمة في المدرسة أو الخارج. تهدف منصتنا لتحويل التنبيهات المكتوبة الجافة إلى تجارب بصرية ممتعة ورسوم كرتونية تفاعلية يسهل على الطفل والأسرة استذكارها في أي وقت لضمان سلامة تامة دون قلق.",
    contactTitle: "تواصل معنا لمزيد من التفاصيل",
    contactEmail: "البريد الإلكتروني للتعاون والأبحاث",
    contactInstagram: "حساب غلاف إنستغرام التوعوي",
    contactScanQR: "امسح الـ QR Code لتجربة المحتوى التفاعلي المباشر والحصول على الدليل",
    backToTop: "العودة للأعلى ↑"
  },
  en: {
    navTitle: "DomiCare",
    presentation: "Prevention & Awareness",
    playGame: "Play & Learn",
    learnMore: "Discover",
    protectYourself: "Protect Yourself",
    aboutUs: "About Us",
    contactUs: "Contact",
    heroTagline: "With Domi... Your awareness protects you!",
    heroSub: "An interactive, simplified G6PD (favism) awareness platform designed specifically to guide children and families on safety guidelines using fun play mechanics.",
    selectLanguage: "Language",

    slidesTitle: "Our Vision & Mission",
    slidesSubtitle: "An interactive approach to simplifying G6PD deficiency concepts and ensuring child safety",
    slideProblemTitle: "The Challenge: Empowering G6PD child awareness",
    slideProblemText: "Children with G6PD deficiency (favism) struggle to comprehend why certain common substances like fava beans, soy derivatives, medications, or naphthalene balls are strictly unsafe. Traditional flyers are often dry and clinical, leaving children feeling confused or isolated without building genuine cautious instincts.",
    slideSolutionTitle: "Our Approach: Visual Learning & Gamified Guidance",
    slideSolutionText: "Transforming strict healthcare guidance into an educational cartoon experience! Through superhero figures like 'Domi' and 'Jeebi' (the G6PD enzyme), children learn to identify biological triggers (like Folo and Nifto) and understand how to mitigate them using safety shield cards in an intuitive, highly memorable play simulator.",
    slideAudienceTitle: "Target Audience & Community Care",
    slideAudienceText: "Dedicated to supporting children with G6PD to foster early self-caution, parents and general school educators as an interactive reference sheet, and public healthcare officers seeking creative pediatric engagement models.",
    prev: "Previous",
    next: "Next",
    viewDetails: "View Details",
    backToPresentation: "Back to Guide",

    charactersTitle: "DomiCare Champions 🦸‍♂️",
    charactersSubtitle: "Meet the friendly characters accompanying you on your quest to learn, protect, and win!",

    gameTitle: "DomiCare Educational Card Game Simulator",
    gameSubtitle: "Test your prevention skills against the challenge simulator, accumulate score, and avoid forbidden triggers!",
    gameGoal: "Goal: Reach 15 points first to win! Each player starts with 5 cards and 5 points.",
    gamePlayers: "Players",
    gameStartScore: "Starts with +5 points",
    gameRulesText: "Rules: Every turn, you draw one card and then play one card. Positive enzyme cards (Domi +3, Jeebi +2) increase your score. Danger cards (Folo -1, Soyo -1, Dawao -1, Nifto -3) decrease your score unless you hold a protection shield (Huma) or a rescue card (Qasbo) which neutralizes danger instantly!",
    playVsAI: "Play vs Challenge Simulator",
    setupGame: "Simulation Setup",
    choosePlayersCount: "Choose the number of simulation opponents:",
    startGameBtn: "Start Challenge 🃏",
    playerTurn: "Your turn! Draw a card, then choose one to play.",
    aiTurn: "Simulation opponent is thinking and playing...",
    drawCard: "Draw Card 📥",
    points: "Pts",
    yourHand: "Your Hand",
    playCard: "Play Card",
    playedCardsPile: "Discard Pile",
    deckRemaining: "Deck Remaining",
    gameLog: "Simulation Action Log",
    gameOver: "Game Over!",
    victoryMessage: "Congratulations! You completed the health awareness checkpoints and successfully guarded our hero from all triggers! 🎉🏆",
    defeatMessage: "Try again! The danger triggers reduced our safety margins. Review the prevention rules and keep our hero safe next time! 💔",
    playAgain: "Play & Learn Again 🔄",
    turnStatus: "Game Status",
    shieldActive: "Active Shield 🛡️",
    shieldActivatedLog: "activated a protection shield (Huma)! Protected from subsequent oxidative hazards.",
    dangerMitigatedLog: "Immunity defense successful! Forbidden trigger neutralized using Huma shield or Qasbo rescue card!",
    pointScoreLog: "gained points thanks to",
    dangerTriggeredLog: "suffered health point reduction from hazard",
    aiPlayedCard: "played",

    cardDomiName: "Domi Hero (Domi)",
    cardDomiDesc: "Rare superhero character. Grants +3 points instantly, and gives extra inner strength, protecting red blood cells from sudden hemolysis.",
    cardJeebiName: "Jeebi G6PD",
    cardJeebiDesc: "The vital G6PD enzyme. Grants +2 points, protects red blood cells from external triggers and lysis.",
    cardHumaName: "Huma Shield",
    cardHumaDesc: "The protective shield. Protects the body, active immune shield stops fava or soy hazards.",
    cardQasboName: "Qasbo Rescue",
    cardQasboDesc: "Sugar cane honey rescue! Instantly neutralizes fava/medication hazards. Helps in minor fatigues, but alerts parents.",
    cardFoloName: "Folo Fava",
    cardFoloDesc: "Forbidden fava bean (-1 point). One of the most dangerous beans, triggers direct breakdown of blood cells.",
    cardSoyoName: "Soyo Beans",
    cardSoyoDesc: "Forbidden soy bean (-1 point). Soybean derivatives cause hemolysis triggers, highly toxic to patients.",
    cardDawaoName: "Dawao Pill",
    cardDawaoDesc: "Unsafe medicines (-1 point). Certain pills disintegrate blood cells. Never consume medicine without medical approval.",
    cardNiftoName: "Nifto Naphthalene",
    cardNiftoDesc: "Acute Naphthalene (-3 points!). Avoid touching or inhaling naphthalene balls, causes severe immediate blood breakdown.",

    aboutTextTitle: "DomiCare Initiative & Wellness Mission",
    aboutTextBody: "DomiCare is an educational initiative born out of a profound desire to simplify medical guidelines for G6PD deficiency (favism). Living with a metabolic condition can be daunting for children as they navigate meals, school lunches, or household allergens. We bridge that gap by replacing complex clinical charts with vibrant, interactive characters and games that empower children to understand their health in a safe, stress-free layout.",
    contactTitle: "Get in touch for details",
    contactEmail: "Email for Research & Partnerships",
    contactInstagram: "Instagram for following adventures",
    contactScanQR: "Scan the QR code to experience interactive resources and download the guide freely",
    backToTop: "Back to Top ↑"
  },
  fr: {
    navTitle: "DomiCare",
    presentation: "Guide de Prévention",
    playGame: "Jouer et Apprendre",
    learnMore: "Découvrir",
    protectYourself: "Se Protéger",
    aboutUs: "À Propos",
    contactUs: "Contactez-nous",
    heroTagline: "Avec Domi... Votre vigilance vous protège !",
    heroSub: "Une plateforme éducative interactive dédiée à simplifier la compréhension de la déficience en G6PD (favisme) et à guider les enfants de façon autonome.",
    selectLanguage: "Langue",

    slidesTitle: "Cadre de Prévention & Éducation",
    slidesSubtitle: "Une approche interactive pour simplifier la sensibilisation au G6PD et garantir la sécurité des enfants",
    slideProblemTitle: "Le Défi: Responsabiliser les enfants face au G6PD",
    slideProblemText: "Les enfants atteints d'un déficit en G6PD (favisme) peinent à assimiler l'interdiction de substances courantes comme les fèves, les produits de soja ou la naphtaline. Les supports traditionnels sont souvent trop techniques, ce qui isole l'enfant sans lui inculquer de réflexes préventifs autonomes.",
    slideSolutionTitle: "Notre Approche: Apprentissage Visuel et Ludique",
    slideSolutionText: "Transformer la rigueur des consignes médicales en une aventure cartoon mémorable ! À travers des personnages comme 'Domi' et 'Jeebi', l'enfant apprend à identifier les déclencheurs (comme Folo ou Nifto) et à s'en préserver grâce aux cartes boucliers dans un simulateur visuel fluide.",
    slideAudienceTitle: "Public Cible & Impact Communautaire",
    slideAudienceText: "Dédié aux enfants de 5 à 12 ans pour encourager l'auto-vigilance, aux parents et enseignants comme outil d'accompagnement intuitif, et aux professionnels de santé engagés dans l'éducation pédiatrique moderne.",
    prev: "Précédent",
    next: "Suivant",
    viewDetails: "Détails Perso",
    backToPresentation: "Retour au Guide",

    charactersTitle: "Les Champions DomiCare 🦸‍♂️",
    charactersSubtitle: "Découvrez les compagnons qui vous accompagnent dans votre voyage de protection et de sensibilisation !",

    gameTitle: "Simulateur de Jeu Educatif DomiCare",
    gameSubtitle: "Testez vos connaissances contre l'adversaire simulé, accumulez les points et évitez les déclencheurs !",
    gameGoal: "But: Atteindre 15 points en premier! Chaque joueur commence avec 5 cartes et 5 points.",
    gamePlayers: "Joueurs",
    gameStartScore: "Débute avec +5 points",
    gameRulesText: "Règles: À chaque tour, piochez une carte puis jouez-en une. Les enzymes saines (Domi +3, Jeebi +2) rapportent des points. Les déclencheurs dangereux (Folo -1, Soyo -1, Dawao -1, Nifto -3) vous en font perdre sauf si vous possédez un bouclier actif (Huma) ou la carte Qasbo qui supprime le danger !",
    playVsAI: "Jouer contre le Simulateur",
    setupGame: "Configuration de la Simulation",
    choosePlayersCount: "Choisissez le nombre d'adversaires simulés :",
    startGameBtn: "Lancer le Défi 🃏",
    playerTurn: "À vous de jouer! Piochez une carte puis sélectionnez-en une à poser.",
    aiTurn: "L'adversaire simulé réfléchit et joue...",
    drawCard: "Piocher 📥",
    points: "Pts",
    yourHand: "Votre Main",
    playCard: "Jouer la carte",
    playedCardsPile: "Défausse",
    deckRemaining: "Cartes restantes",
    gameLog: "Historique de la Simulation",
    gameOver: "Partie Terminée !",
    victoryMessage: "Félicitations! Vous maîtrisez maintenant parfaitement la grille de vigilance et avez protégé notre héros avec brio ! 🎉🏆",
    defeatMessage: "Dommage ! Les déclencheurs de crise ont affaibli vos globules. Mémorisez les interdits et tentez à nouveau votre chance ! 💔",
    playAgain: "Recommencer et Apprendre 🔄",
    turnStatus: "Statut du Jeu",
    shieldActive: "Bouclier Actif 🛡️",
    shieldActivatedLog: "a activé un bouclier protecteur (Huma)! Protégé contre les agressions oxydatives.",
    dangerMitigatedLog: "Protection réussie! Le déclencheur a été bloqué grâce au bouclier Huma ou à la carte Qasbo !",
    pointScoreLog: "a marqué des points sains avec",
    dangerTriggeredLog: "a subi une perte de points à cause de la carte",
    aiPlayedCard: "a joué",

    cardDomiName: "Domi Rare (Héros Domi)",
    cardDomiDesc: "Le super-héros rare ! Procure +3 points immédiatement et vous protège contre la destruction brutale des cellules (hémolyse).",
    cardJeebiName: "Jeebi G6PD",
    cardJeebiDesc: "L'enzyme G6PD essentielle. Procure +2 points, préserve l'intégrité des globules rouges face aux agressions extérieures.",
    cardHumaName: "Huma Bouclier",
    cardHumaDesc: "Le bouclier défensif ! Empêche la destruction cellulaire, bloque activement les agressions comme les fèves ou le soja.",
    cardQasboName: "Qasbo Secours",
    cardQasboDesc: "Le sirop de sucre de canne de secours ! Annule l'effet fève/médocs immédiatement. Soulage la fatigue passagère.",
    cardFoloName: "Folo Fève",
    cardFoloDesc: "Fèves et fleurs de fève (-1 point). Déclencheur féroce, provoque une destruction directe des globules chez les déficients G6PD.",
    cardSoyoName: "Soyo Soja",
    cardSoyoDesc: "Le soja interdit (-1 point). Les protéines et dérivés de soja déclenchent l'hémolyse et doivent être fuis.",
    cardDawaoName: "Dawao Médicaments",
    cardDawaoDesc: "Médicaments à risque (-1 point). Certaines pilules détruisent le sang. Ne prenez aucun médicament sans avis médical.",
    cardNiftoName: "Nifto Naphtaline",
    cardNiftoDesc: "La Naphtaline aiguë (-3 points!). Évitez de toucher ou de respirer les boules de naphtaline, hautement toxiques.",

    aboutTextTitle: "Initiative DomiCare & Mission de Santé",
    aboutTextBody: "L'initiative DomiCare est née du désir d'alléger le quotidien des familles concernées par le déficit en G6PD (favisme). Les enfants ont souvent du mal à comprendre de manière rigide les restrictions alimentaires ou médicales. Notre mission est de simplifier ces protocoles de santé en utilisant des codes visuels mémorables et interactifs, permettant aux enfants de s'auto-protéger de façon sereine.",
    contactTitle: "Contactez-nous pour en savoir plus",
    contactEmail: "E-mail pour études et partenariats",
    contactInstagram: "Instagram pour suivre nos aventures",
    contactScanQR: "Scannez le code QR pour découvrir les ressources interactives et obtenir le guide gratuitement",
    backToTop: "Retour en Haut ↑"
  }
};
