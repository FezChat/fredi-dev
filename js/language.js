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
        'back-text': 'Back',
        'auth-title': 'Welcome to Fredi Dev',
        'auth-subtitle': 'Choose your login method',
        'phone-login-title': 'Login with Phone',
        'phone-login-desc': 'We\'ll send a verification code via WhatsApp',
        'google-login-title': 'Continue with Google',
        'google-login-desc': 'Quick login with your Google account',
        'guest-login-title': 'Continue as Guest',
        'guest-login-desc': 'Limited access without account',
        'phone-form-title': 'Enter Your Phone Number',
        'phone-form-desc': 'We\'ll send a 6-digit verification code via WhatsApp',
        'phone-label': 'Phone Number',
        'code-label': 'Verification Code',
        'resend-text': 'Resend Code',
        'send-code-text': 'Send Verification Code',
        'verify-code-text': 'Verify & Login',
        'back-methods-text': 'Back to Login Methods',
        'google-form-title': 'Sign in with Google',
        'google-form-desc': 'Choose your Google account to continue',
        'continue-google-text': 'Continue with Google',
        'back-methods-text2': 'Back to Login Methods',
        'security-text': 'Your data is securely encrypted',
        'fast-text': 'Fast and secure authentication',
        'live-status-text': 'Authentication System Live', 
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
        'back-text': 'Rudi',
        'auth-title': 'Karibu Fredi Dev',
        'auth-subtitle': 'Chagua njia ya kuingia',
        'phone-login-title': 'Ingia kwa Simu',
        'phone-login-desc': 'Tutatuma msimbo wa uthibitishaji kupitia WhatsApp',
        'google-login-title': 'Endelea kwa Google',
        'google-login-desc': 'Ingia haraka kwa akaunti yako ya Google',
        'guest-login-title': 'Endelea kwa Mgeni',
        'guest-login-desc': 'Ufikiaji mdogo bila akaunti',
        'phone-form-title': 'Weka Namba Yako ya Simu',
        'phone-form-desc': 'Tutatuma msimbo wa tarakimu 6 kupitia WhatsApp',
        'phone-label': 'Namba ya Simu',
        'code-label': 'Msimbo wa Uthibitishaji',
        'resend-text': 'Tuma Tena Msimbo',
        'send-code-text': 'Tuma Msimbo wa Uthibitishaji',
        'verify-code-text': 'Thibitisha & Ingia',
        'back-methods-text': 'Rudi kwa Njia za Kuingia',
        'google-form-title': 'Ingia kwa Google',
        'google-form-desc': 'Chagua akaunti yako ya Google kuendelea',
        'continue-google-text': 'Endelea kwa Google',
        'back-methods-text2': 'Rudi kwa Njia za Kuingia',
        'security-text': 'Data yako imesimbwa kwa usalama',
        'fast-text': 'Uthibitishaji wa haraka na salama',
        'live-status-text': 'Mfumo wa Uthibitishaji Uko Live', 
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
