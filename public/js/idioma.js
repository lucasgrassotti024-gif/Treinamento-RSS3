// Sistema de Tradução RSS3 Treinamentos
const translations = {
    pt: {
        'site-title': 'RSS3 Treinamentos',
        'nav-courses': 'Cursos',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        
        'hero-title': 'Treinamentos em Segurança Industrial',
        'hero-subtitle': 'Capacitação profissional para ambientes de trabalho seguros',
        'hero-cta': 'Ver Cursos',
        
        'courses-title': 'Nossos Cursos',
        
        'course-epi-title': 'Equipamentos de Proteção Individual (EPI)',
        'course-epi-desc': 'Uso correto e manutenção de EPIs para proteção do trabalhador',
        
        'course-ergo-title': 'Ergonomia no Trabalho',
        'course-ergo-desc': 'Prevenção de lesões e doenças ocupacionais',
        
        'course-fire-title': 'Prevenção e Combate a Incêndios',
        'course-fire-desc': 'Técnicas de prevenção e combate a incêndios industriais',
        
        'course-first-title': 'Primeiros Socorros',
        'course-first-desc': 'Atendimento de emergência no ambiente de trabalho',
        
        'course-lock-title': 'Lockout/Tagout',
        'course-lock-desc': 'Procedimentos de bloqueio de energia para manutenção',
        
        'course-height-title': 'Trabalho em Altura',
        'course-height-desc': 'Segurança em trabalhos realizados em altura',
        
        'course-access': 'Acessar Curso',
        'course-soon': 'Em breve',
        
        'about-title': 'Sobre a RSS3',
        'about-text': 'A RSS3 Treinamentos é especializada em capacitação profissional para segurança industrial, oferecendo cursos completos e atualizados com as melhores práticas do mercado.',
        
        'feature-expertise': 'Expertise',
        'feature-expertise-text': 'Profissionais qualificados com anos de experiência',
        
        'feature-cert': 'Certificação',
        'feature-cert-text': 'Certificados reconhecidos no mercado',
        
        'feature-flex': 'Flexibilidade',
        'feature-flex-text': 'Cursos online disponíveis 24/7',
        
        'footer-rights': 'Todos os direitos reservados.',
        
        // Curso EPI
        'course-epi-hero-title': 'Equipamentos de Proteção Individual',
        'course-epi-hero-subtitle': 'Aprenda a utilizar e manter EPIs corretamente para sua segurança',
        'course-epi-intro': 'Os Equipamentos de Proteção Individual (EPIs) são fundamentais para garantir a segurança dos trabalhadores em diversos ambientes industriais. Neste curso, você aprenderá sobre os diferentes tipos de EPIs, sua importância, uso correto e manutenção.',
        
        'epi-section-1-title': 'O que são EPIs?',
        'epi-section-1-text': 'Equipamentos de Proteção Individual (EPI) são todos os dispositivos ou produtos de uso individual utilizado pelo trabalhador, destinado à proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho.',
        
        'epi-section-2-title': 'Tipos de EPIs',
        'epi-section-2-text': 'Existem diversos tipos de EPIs, cada um destinado a proteger uma parte específica do corpo contra diferentes tipos de riscos.',
        
        'epi-head-protection': 'Proteção da Cabeça',
        'epi-head-desc': 'Capacetes protegem contra impactos, quedas de objetos e choques elétricos.',
        
        'epi-eye-protection': 'Proteção Ocular',
        'epi-eye-desc': 'Óculos e viseiras protegem contra partículas, radiação e respingos químicos.',
        
        'epi-hand-protection': 'Proteção das Mãos',
        'epi-hand-desc': 'Luvas protegem contra cortes, produtos químicos, calor e eletricidade.',
        
        'epi-foot-protection': 'Proteção dos Pés',
        'epi-foot-desc': 'Botas e calçados de segurança protegem contra quedas, objetos perfurantes e choques elétricos.',
        
        'epi-respiratory': 'Proteção Respiratória',
        'epi-respiratory-desc': 'Máscaras e respiradores protegem contra poeira, gases e vapores tóxicos.',
        
        'epi-body-protection': 'Proteção do Corpo',
        'epi-body-desc': 'Aventais, macacões e coletes protegem contra produtos químicos, calor e riscos mecânicos.',
        
        'epi-section-3-title': 'Uso Correto dos EPIs',
        'epi-section-3-text': 'O uso correto dos EPIs é essencial para garantir sua eficácia. Siga estas orientações:',
        
        'epi-use-1': 'Verifique o estado do EPI antes de cada uso',
        'epi-use-2': 'Utilize o EPI adequado para cada tipo de risco',
        'epi-use-3': 'Siga as instruções do fabricante',
        'epi-use-4': 'Substitua o EPI danificado imediatamente',
        'epi-use-5': 'Mantenha o EPI limpo e em bom estado',
        
        'epi-section-4-title': 'Manutenção e Conservação',
        'epi-section-4-text': 'A manutenção adequada dos EPIs prolonga sua vida útil e garante sua eficácia:',
        
        'epi-maint-1': 'Limpe regularmente conforme instruções',
        'epi-maint-2': 'Armazene em local adequado e protegido',
        'epi-maint-3': 'Realize inspeções periódicas',
        'epi-maint-4': 'Registre todas as manutenções',
        'epi-maint-5': 'Siga o calendário de substituição',
        
        'epi-alert-title': 'Importante',
        'epi-alert-text': 'O EPI é a última barreira de proteção. Sempre priorize medidas de proteção coletiva e eliminação dos riscos na fonte.',
        
        'epi-quiz-title': 'Teste seu Conhecimento',
        'epi-quiz-question-1': 'O que significa EPI?',
        'epi-quiz-question-2': 'Qual é a principal função do capacete de segurança?',
        'epi-quiz-question-3': 'Quando um EPI deve ser substituído?',
        'epi-quiz-question-4': 'Qual é a importância da manutenção dos EPIs?',
        'epi-quiz-question-5': 'O que deve ser feito antes de usar um EPI?',
        
        'epi-quiz-q1-a': 'Equipamento de Produção Industrial',
        'epi-quiz-q1-b': 'Equipamento de Proteção Individual',
        'epi-quiz-q1-c': 'Elemento de Proteção Integrada',
        'epi-quiz-q1-d': 'Equipamento de Prevenção Individual',
        
        'epi-quiz-q2-a': 'Proteger contra o sol',
        'epi-quiz-q2-b': 'Proteger contra impactos e quedas de objetos',
        'epi-quiz-q2-c': 'Melhorar a aparência',
        'epi-quiz-q2-d': 'Aumentar a produtividade',
        
        'epi-quiz-q3-a': 'Apenas quando estiver sujo',
        'epi-quiz-q3-b': 'Quando estiver danificado ou fora da validade',
        'epi-quiz-q3-c': 'No final de cada mês',
        'epi-quiz-q3-d': 'Quando o chefe determinar',
        
        'epi-quiz-q4-a': 'Não tem importância',
        'epi-quiz-q4-b': 'Apenas para manter a aparência',
        'epi-quiz-q4-c': 'Garantir a eficácia e prolongar a vida útil',
        'epi-quiz-q4-d': 'É apenas uma burocracia',
        
        'epi-quiz-q5-a': 'Colocar diretamente',
        'epi-quiz-q5-b': 'Verificar seu estado de conservação',
        'epi-quiz-q5-c': 'Pedir para outro usar primeiro',
        'epi-quiz-q5-d': 'Não é necessário verificar',
        
        'quiz-submit': 'Enviar Respostas',
        'quiz-result-title': 'Resultado do Quiz',
        'quiz-score': 'Sua pontuação',
        'quiz-correct': 'Respostas corretas',
        'quiz-incorrect': 'Respostas incorretas',
        'quiz-congratulations': 'Parabéns! Você acertou',
        'quiz-try-again': 'Tente novamente! Você acertou',
        'quiz-retry': 'Refazer Quiz',
        'quiz-back': 'Voltar para os Cursos'
    },
    
    es: {
        'site-title': 'RSS3 Capacitación',
        'nav-courses': 'Cursos',
        'nav-about': 'Acerca de',
        'nav-contact': 'Contacto',
        
        'hero-title': 'Capacitación en Seguridad Industrial',
        'hero-subtitle': 'Capacitación profesional para ambientes de trabajo seguros',
        'hero-cta': 'Ver Cursos',
        
        'courses-title': 'Nuestros Cursos',
        
        'course-epi-title': 'Equipos de Protección Individual (EPI)',
        'course-epi-desc': 'Uso correcto y mantenimiento de EPIs para protección del trabajador',
        
        'course-ergo-title': 'Ergonomía en el Trabajo',
        'course-ergo-desc': 'Prevención de lesiones y enfermedades ocupacionales',
        
        'course-fire-title': 'Prevención y Combate de Incendios',
        'course-fire-desc': 'Técnicas de prevención y combate de incendios industriales',
        
        'course-first-title': 'Primeros Auxilios',
        'course-first-desc': 'Atención de emergencia en el ambiente de trabajo',
        
        'course-lock-title': 'Lockout/Tagout',
        'course-lock-desc': 'Procedimientos de bloqueo de energía para mantenimiento',
        
        'course-height-title': 'Trabajo en Altura',
        'course-height-desc': 'Seguridad en trabajos realizados en altura',
        
        'course-access': 'Acceder al Curso',
        'course-soon': 'Próximamente',
        
        'about-title': 'Acerca de RSS3',
        'about-text': 'RSS3 Capacitación está especializada en capacitación profesional para seguridad industrial, ofreciendo cursos completos y actualizados con las mejores prácticas del mercado.',
        
        'feature-expertise': 'Experiencia',
        'feature-expertise-text': 'Profesionales calificados con años de experiencia',
        
        'feature-cert': 'Certificación',
        'feature-cert-text': 'Certificados reconocidos en el mercado',
        
        'feature-flex': 'Flexibilidad',
        'feature-flex-text': 'Cursos online disponibles 24/7',
        
        'footer-rights': 'Todos los derechos reservados.',
        
        // Curso EPI
        'course-epi-hero-title': 'Equipos de Protección Individual',
        'course-epi-hero-subtitle': 'Aprenda a usar y mantener EPIs correctamente para su seguridad',
        'course-epi-intro': 'Los Equipos de Protección Individual (EPIs) son fundamentales para garantizar la seguridad de los trabajadores en diversos ambientes industriales. En este curso, aprenderá sobre los diferentes tipos de EPIs, su importancia, uso correcto y mantenimiento.',
        
        'epi-section-1-title': '¿Qué son los EPIs?',
        'epi-section-1-text': 'Los Equipos de Protección Individual (EPI) son todos los dispositivos o productos de uso individual utilizados por el trabajador, destinados a la protección de riesgos susceptibles de amenazar la seguridad y la salud en el trabajo.',
        
        'epi-section-2-title': 'Tipos de EPIs',
        'epi-section-2-text': 'Existen diversos tipos de EPIs, cada uno destinado a proteger una parte específica del cuerpo contra diferentes tipos de riesgos.',
        
        'epi-head-protection': 'Protección de la Cabeza',
        'epi-head-desc': 'Cascos protegen contra impactos, caídas de objetos y choques eléctricos.',
        
        'epi-eye-protection': 'Protección Ocular',
        'epi-eye-desc': 'Gafas y viseras protegen contra partículas, radiación y salpicaduras químicas.',
        
        'epi-hand-protection': 'Protección de las Manos',
        'epi-hand-desc': 'Guantes protegen contra cortes, productos químicos, calor y electricidad.',
        
        'epi-foot-protection': 'Protección de los Pies',
        'epi-foot-desc': 'Botas y calzado de seguridad protegen contra caídas, objetos perforantes y choques eléctricos.',
        
        'epi-respiratory': 'Protección Respiratoria',
        'epi-respiratory-desc': 'Mascarillas y respiradores protegen contra polvo, gases y vapores tóxicos.',
        
        'epi-body-protection': 'Protección del Cuerpo',
        'epi-body-desc': 'Delantales, monos y chalecos protegen contra productos químicos, calor y riesgos mecánicos.',
        
        'epi-section-3-title': 'Uso Correcto de los EPIs',
        'epi-section-3-text': 'El uso correcto de los EPIs es esencial para garantizar su eficacia. Siga estas orientaciones:',
        
        'epi-use-1': 'Verifique el estado del EPI antes de cada uso',
        'epi-use-2': 'Utilice el EPI adecuado para cada tipo de riesgo',
        'epi-use-3': 'Siga las instrucciones del fabricante',
        'epi-use-4': 'Reemplace el EPI dañado inmediatamente',
        'epi-use-5': 'Mantenga el EPI limpio y en buen estado',
        
        'epi-section-4-title': 'Mantenimiento y Conservación',
        'epi-section-4-text': 'El mantenimiento adecuado de los EPIs prolonga su vida útil y garantiza su eficacia:',
        
        'epi-maint-1': 'Limpie regularmente según instrucciones',
        'epi-maint-2': 'Almacene en lugar adecuado y protegido',
        'epi-maint-3': 'Realice inspecciones periódicas',
        'epi-maint-4': 'Registre todos los mantenimientos',
        'epi-maint-5': 'Siga el calendario de reemplazo',
        
        'epi-alert-title': 'Importante',
        'epi-alert-text': 'El EPI es la última barrera de protección. Siempre priorice medidas de protección colectiva y eliminación de riesgos en la fuente.',
        
        'epi-quiz-title': 'Pruebe su Conocimiento',
        'epi-quiz-question-1': '¿Qué significa EPI?',
        'epi-quiz-question-2': '¿Cuál es la función principal del casco de seguridad?',
        'epi-quiz-question-3': '¿Cuándo debe reemplazarse un EPI?',
        'epi-quiz-question-4': '¿Cuál es la importancia del mantenimiento de los EPIs?',
        'epi-quiz-question-5': '¿Qué se debe hacer antes de usar un EPI?',
        
        'epi-quiz-q1-a': 'Equipo de Producción Industrial',
        'epi-quiz-q1-b': 'Equipo de Protección Individual',
        'epi-quiz-q1-c': 'Elemento de Protección Integrada',
        'epi-quiz-q1-d': 'Equipo de Prevención Individual',
        
        'epi-quiz-q2-a': 'Proteger contra el sol',
        'epi-quiz-q2-b': 'Proteger contra impactos y caídas de objetos',
        'epi-quiz-q2-c': 'Mejorar la apariencia',
        'epi-quiz-q2-d': 'Aumentar la productividad',
        
        'epi-quiz-q3-a': 'Solo cuando esté sucio',
        'epi-quiz-q3-b': 'Cuando esté dañado o fuera de validez',
        'epi-quiz-q3-c': 'Al final de cada mes',
        'epi-quiz-q3-d': 'Cuando el jefe determine',
        
        'epi-quiz-q4-a': 'No tiene importancia',
        'epi-quiz-q4-b': 'Solo para mantener la apariencia',
        'epi-quiz-q4-c': 'Garantizar la eficacia y prolongar la vida útil',
        'epi-quiz-q4-d': 'Es solo una burocracia',
        
        'epi-quiz-q5-a': 'Colocar directamente',
        'epi-quiz-q5-b': 'Verificar su estado de conservación',
        'epi-quiz-q5-c': 'Pedir que otro use primero',
        'epi-quiz-q5-d': 'No es necesario verificar',
        
        'quiz-submit': 'Enviar Respuestas',
        'quiz-result-title': 'Resultado del Quiz',
        'quiz-score': 'Su puntuación',
        'quiz-correct': 'Respuestas correctas',
        'quiz-incorrect': 'Respuestas incorrectas',
        'quiz-congratulations': '¡Felicitaciones! Usted acertó',
        'quiz-try-again': '¡Intente nuevamente! Usted acertó',
        'quiz-retry': 'Rehacer Quiz',
        'quiz-back': 'Volver a los Cursos'
    },
    
    en: {
        'site-title': 'RSS3 Training',
        'nav-courses': 'Courses',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        'hero-title': 'Industrial Safety Training',
        'hero-subtitle': 'Professional training for safe work environments',
        'hero-cta': 'View Courses',
        
        'courses-title': 'Our Courses',
        
        'course-epi-title': 'Personal Protective Equipment (PPE)',
        'course-epi-desc': 'Correct use and maintenance of PPE for worker protection',
        
        'course-ergo-title': 'Workplace Ergonomics',
        'course-ergo-desc': 'Prevention of injuries and occupational diseases',
        
        'course-fire-title': 'Fire Prevention and Combat',
        'course-fire-desc': 'Techniques for fire prevention and combat in industrial settings',
        
        'course-first-title': 'First Aid',
        'course-first-desc': 'Emergency care in the work environment',
        
        'course-lock-title': 'Lockout/Tagout',
        'course-lock-desc': 'Energy lockout procedures for maintenance',
        
        'course-height-title': 'Work at Height',
        'course-height-desc': 'Safety in work performed at height',
        
        'course-access': 'Access Course',
        'course-soon': 'Coming Soon',
        
        'about-title': 'About RSS3',
        'about-text': 'RSS3 Training specializes in professional training for industrial safety, offering complete and updated courses with the best market practices.',
        
        'feature-expertise': 'Expertise',
        'feature-expertise-text': 'Qualified professionals with years of experience',
        
        'feature-cert': 'Certification',
        'feature-cert-text': 'Market-recognized certificates',
        
        'feature-flex': 'Flexibility',
        'feature-flex-text': 'Online courses available 24/7',
        
        'footer-rights': 'All rights reserved.',
        
        // Curso EPI
        'course-epi-hero-title': 'Personal Protective Equipment',
        'course-epi-hero-subtitle': 'Learn to use and maintain PPE correctly for your safety',
        'course-epi-intro': 'Personal Protective Equipment (PPE) is essential to ensure worker safety in various industrial environments. In this course, you will learn about different types of PPE, their importance, correct use, and maintenance.',
        
        'epi-section-1-title': 'What are PPEs?',
        'epi-section-1-text': 'Personal Protective Equipment (PPE) are all devices or products of individual use used by the worker, intended for protection against risks likely to threaten safety and health at work.',
        
        'epi-section-2-title': 'Types of PPEs',
        'epi-section-2-text': 'There are various types of PPEs, each designed to protect a specific part of the body against different types of risks.',
        
        'epi-head-protection': 'Head Protection',
        'epi-head-desc': 'Helmets protect against impacts, falling objects, and electrical shocks.',
        
        'epi-eye-protection': 'Eye Protection',
        'epi-eye-desc': 'Glasses and visors protect against particles, radiation, and chemical splashes.',
        
        'epi-hand-protection': 'Hand Protection',
        'epi-hand-desc': 'Gloves protect against cuts, chemicals, heat, and electricity.',
        
        'epi-foot-protection': 'Foot Protection',
        'epi-foot-desc': 'Boots and safety shoes protect against falls, piercing objects, and electrical shocks.',
        
        'epi-respiratory': 'Respiratory Protection',
        'epi-respiratory-desc': 'Masks and respirators protect against dust, gases, and toxic vapors.',
        
        'epi-body-protection': 'Body Protection',
        'epi-body-desc': 'Aprons, coveralls, and vests protect against chemicals, heat, and mechanical risks.',
        
        'epi-section-3-title': 'Correct Use of PPEs',
        'epi-section-3-text': 'The correct use of PPEs is essential to ensure their effectiveness. Follow these guidelines:',
        
        'epi-use-1': 'Check the condition of the PPE before each use',
        'epi-use-2': 'Use the appropriate PPE for each type of risk',
        'epi-use-3': 'Follow the manufacturer\'s instructions',
        'epi-use-4': 'Replace damaged PPE immediately',
        'epi-use-5': 'Keep PPE clean and in good condition',
        
        'epi-section-4-title': 'Maintenance and Conservation',
        'epi-section-4-text': 'Proper maintenance of PPEs extends their useful life and ensures their effectiveness:',
        
        'epi-maint-1': 'Clean regularly according to instructions',
        'epi-maint-2': 'Store in an appropriate and protected place',
        'epi-maint-3': 'Perform periodic inspections',
        'epi-maint-4': 'Record all maintenance',
        'epi-maint-5': 'Follow the replacement schedule',
        
        'epi-alert-title': 'Important',
        'epi-alert-text': 'PPE is the last barrier of protection. Always prioritize collective protection measures and risk elimination at the source.',
        
        'epi-quiz-title': 'Test Your Knowledge',
        'epi-quiz-question-1': 'What does PPE mean?',
        'epi-quiz-question-2': 'What is the main function of a safety helmet?',
        'epi-quiz-question-3': 'When should a PPE be replaced?',
        'epi-quiz-question-4': 'What is the importance of PPE maintenance?',
        'epi-quiz-question-5': 'What should be done before using a PPE?',
        
        'epi-quiz-q1-a': 'Industrial Production Equipment',
        'epi-quiz-q1-b': 'Personal Protective Equipment',
        'epi-quiz-q1-c': 'Integrated Protection Element',
        'epi-quiz-q1-d': 'Individual Prevention Equipment',
        
        'epi-quiz-q2-a': 'Protect against the sun',
        'epi-quiz-q2-b': 'Protect against impacts and falling objects',
        'epi-quiz-q2-c': 'Improve appearance',
        'epi-quiz-q2-d': 'Increase productivity',
        
        'epi-quiz-q3-a': 'Only when dirty',
        'epi-quiz-q3-b': 'When damaged or expired',
        'epi-quiz-q3-c': 'At the end of each month',
        'epi-quiz-q3-d': 'When the boss determines',
        
        'epi-quiz-q4-a': 'It has no importance',
        'epi-quiz-q4-b': 'Only to maintain appearance',
        'epi-quiz-q4-c': 'Ensure effectiveness and extend useful life',
        'epi-quiz-q4-d': 'It\'s just bureaucracy',
        
        'epi-quiz-q5-a': 'Put on directly',
        'epi-quiz-q5-b': 'Check its conservation status',
        'epi-quiz-q5-c': 'Ask someone else to use first',
        'epi-quiz-q5-d': 'No need to check',
        
        'quiz-submit': 'Submit Answers',
        'quiz-result-title': 'Quiz Result',
        'quiz-score': 'Your score',
        'quiz-correct': 'Correct answers',
        'quiz-incorrect': 'Incorrect answers',
        'quiz-congratulations': 'Congratulations! You got',
        'quiz-try-again': 'Try again! You got',
        'quiz-retry': 'Retry Quiz',
        'quiz-back': 'Back to Courses'
    }
};

// Estado atual do idioma
let currentLanguage = 'pt';

// Função para traduzir elementos
function translateElements(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

// Função para mudar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    translateElements(lang);
    
    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Salvar preferência no localStorage
    localStorage.setItem('rss3-language', lang);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Verificar idioma salvo
    const savedLanguage = localStorage.getItem('rss3-language');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else {
        translateElements(currentLanguage);
    }
    
    // Adicionar event listeners aos botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

// Exportar função para uso em outras páginas
window.changeLanguage = changeLanguage;
window.translateElements = translateElements;
