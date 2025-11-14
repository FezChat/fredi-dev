// Language texts
const texts = {
    en: {
        // Welcome Page
        'welcome-title': 'Fredi Dev',
        'welcome-subtitle': 'Full-Stack Developer & AI Specialist',
        'login-btn': 'Login with WhatsApp',
        'guest-btn': 'Continue as Guest',
        'view-projects': 'View Projects',
        'about-me': 'About Me',
        'services-link': 'Services',
        'live-text': 'Live Status: Online',
        'stat-users-text': 'Active Users',
        'stat-projects-text': 'Projects',
        'stat-languages-text': 'Programming Languages',

        // Auth Page
        'auth-title': 'WhatsApp Authentication',
        'auth-subtitle': 'Secure login with WhatsApp verification',
        'phone-label': 'Phone Number:',
        'code-label': 'Verification Code:',
        'send-code-btn': 'Send Verification Code',
        'verify-btn': 'Verify Code',
        'info-title': 'Authentication Info:',
        'info-text': 'Code will be sent from:',
        'info-note': 'This is a simulation for demo purposes',
        'footer-text': 'Having trouble?',

        // Dashboard
        'online-text': 'Online',
        'lang-text': 'EN/SW',
        'logout-text': 'Logout',
        'user-role': 'Full-Stack Developer',
        'projects-text': 'Projects',
        'years-text': 'Years',
        'nav-dashboard': 'Dashboard',
        'nav-projects': 'Projects',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'welcome-back': 'Welcome Back, Fredi!',
        'dashboard-subtitle': 'Here\'s your development dashboard',
        'total-users': '10,284',
        'total-users-text': 'Total Users',
        'active-bots-text': 'Active Bots',
        'movies-text': 'Movies Library',
        'languages-text': 'Languages',
        'recent-activity': 'Recent Activity',
        'activity-1': 'FREDI-MD updated with new plugins',
        'activity-2': 'Movies library added 50 new titles',
        'activity-3': 'New coding tools deployed',
        'visit-count': 'Visits: 1,284',
        'online-count': 'Online: 47'
    },
    sw: {
        // Welcome Page
        'welcome-title': 'Fredi Dev',
        'welcome-subtitle': 'Msanidi Programu Kamili & Mtaalamu wa AI',
        'login-btn': 'Ingia kwa WhatsApp',
        'guest-btn': 'Endelea kwa Mgeni',
        'view-projects': 'Angalia Miradi',
        'about-me': 'Kuhusu Mimi',
        'services-link': 'Huduma',
        'live-text': 'Hali ya Moja kwa Moja: Online',
        'stat-users-text': 'Watumiaji Active',
        'stat-projects-text': 'Miradi',
        'stat-languages-text': 'Lugha za Programu',

        // Auth Page
        'auth-title': 'Uthibitishaji wa WhatsApp',
        'auth-subtitle': 'Ingia kwa usalama kwa uthibitishaji wa WhatsApp',
        'phone-label': 'Namba ya Simu:',
        'code-label': 'Msimbo wa Uthibitishaji:',
        'send-code-btn': 'Tuma Msimbo wa Uthibitishaji',
        'verify-btn': 'Thibitisha Msimbo',
        'info-title': 'Taarifa za Uthibitishaji:',
        'info-text': 'Msimbo utatumwa kutoka:',
        'info-note': 'Huu ni mfano tu kwa ajili ya onyesho',
        'footer-text': 'Una shida?',

        // Dashboard
        'online-text': 'Online',
        'lang-text': 'EN/SW',
        'logout-text': 'Toka',
        'user-role': 'Msanidi Programu Kamili',
        'projects-text': 'Miradi',
        'years-text': 'Miaka',
        'nav-dashboard': 'Dashibodi',
        'nav-projects': 'Miradi',
        'nav-services': 'Huduma',
        'nav-about': 'Kuhusu',
        'nav-contact': 'Mawasiliano',
        'welcome-back': 'Karibu Tenaa, Fredi!',
        'dashboard-subtitle': 'Hapa kuna dashibodi yako ya maendeleo',
        'total-users': '10,284',
        'total-users-text': 'Watumiaji Wote',
        'active-bots-text': 'Boti Active',
        'movies-text': 'Hifadhi ya Filamu',
        'languages-text': 'Lugha',
        'recent-activity': 'Shughuli za Hivi Karibuni',
        'activity-1': 'FREDI-MD imesasishwa kwa programu-jalizi mpya',
        'activity-2': 'Hifadhi ya filamu imeongeza vichwa 50 vipya',
        'activity-3': 'Vifaa vipya vya coding zimewekwa',
        'visit-count': 'Matembezi: 1,284',
        'online-count': 'Watu Wako Online: 47'
    }
};

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    localStorage.setItem('language', currentLang);
    updateTexts();
}

// Update all texts based on current language
function updateTexts() {
    const langTexts = texts[currentLang];
    for (const [key, value] of Object.entries(langTexts)) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.innerHTML = currentTheme === 'light' ? 
            '<i class="fas fa-moon"></i>' : 
            '<i class="fas fa-sun"></i>';
    }
}
