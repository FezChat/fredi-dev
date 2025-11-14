// Common utility functions
let currentLang = 'en';
let currentTheme = 'light';

// Show loading spinner
function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'flex';
}

// Hide loading spinner
function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Go back to previous page
function goBack() {
    showLoading();
    setTimeout(() => {
        window.history.back();
    }, 500);
}

// Update user counter (simulated)
function updateUserCounter() {
    const userCount = Math.floor(Math.random() * 50) + 1;
    const userCountElement = document.getElementById('user-count');
    if (userCountElement) {
        userCountElement.textContent = `Users Online: ${userCount}`;
    }
}

// Logout function
function logout() {
    showLoading();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    hideLoading();
    updateUserCounter();
    
    // Update user counter every 30 seconds
    setInterval(updateUserCounter, 30000);
    
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    
    // Apply saved language
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
        updateTexts();
    }
});
