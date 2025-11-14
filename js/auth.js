// Real-time Authentication System
let verificationCode = '';
let countdownTimer;
let timeLeft = 120; // 2 minutes
let selectedGoogleAccount = '';

// Show phone verification form
function showPhoneForm() {
    document.querySelector('.login-methods').style.display = 'none';
    document.getElementById('phone-form').style.display = 'block';
    document.getElementById('google-form').style.display = 'none';
    
    // Reset form
    document.getElementById('phone').value = '';
    document.getElementById('code').value = '';
    document.getElementById('code-group').style.display = 'none';
    document.getElementById('verify-btn').style.display = 'none';
    document.getElementById('send-code-btn').style.display = 'flex';
}

// Show Google sign in form
function showGoogleForm() {
    document.querySelector('.login-methods').style.display = 'none';
    document.getElementById('phone-form').style.display = 'none';
    document.getElementById('google-form').style.display = 'block';
}

// Show login methods (back button)
function showLoginMethods() {
    document.querySelector('.login-methods').style.display = 'flex';
    document.getElementById('phone-form').style.display = 'none';
    document.getElementById('google-form').style.display = 'none';
    
    // Reset any ongoing processes
    resetVerificationProcess();
}

// Google Sign In
function googleSignIn() {
    showGoogleForm();
}

// Select Google Account
function selectGoogleAccount(accountType) {
    selectedGoogleAccount = accountType;
    
    // Remove selected class from all accounts
    document.querySelectorAll('.google-account').forEach(account => {
        account.classList.remove('selected');
    });
    
    // Add selected class to clicked account
    event.currentTarget.classList.add('selected');
}

// Complete Google Sign In
function completeGoogleSignIn() {
    if (!selectedGoogleAccount) {
        showNotification('Please select a Google account', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate Google authentication
    setTimeout(() => {
        const email = selectedGoogleAccount === 'primary' ? 'frediezra360@gmail.com' : 'frediezra60@gmail.com';
        
        // Store user session
        localStorage.setItem('userAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('loginMethod', 'google');
        localStorage.setItem('loginTime', new Date().toISOString());
        
        showNotification('Successfully signed in with Google!', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
        hideLoading();
    }, 2000);
}

// Guest Access
function guestAccess() {
    showLoading();
    
    setTimeout(() => {
        localStorage.setItem('userAuthenticated', 'true');
        localStorage.setItem('userEmail', 'guest@fredidev.com');
        localStorage.setItem('loginMethod', 'guest');
        localStorage.setItem('loginTime', new Date().toISOString());
        
        showNotification('Welcome! Continuing as guest...', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
        hideLoading();
    }, 1000);
}

// Send verification code via WhatsApp
function sendVerification() {
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        showNotification('Please enter your phone number', 'error');
        return;
    }
    
    if (phone.length !== 9) {
        showNotification('Please enter a valid 9-digit phone number', 'error');
        return;
    }
    
    // Validate Tanzanian phone number
    const validPrefixes = ['75', '76', '77', '78', '79', '62', '65', '66', '67', '68', '69'];
    const prefix = phone.substring(0, 2);
    
    if (!validPrefixes.includes(prefix)) {
        showNotification('Please enter a valid Tanzanian phone number', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate sending verification code via WhatsApp
    setTimeout(() => {
        verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // In real implementation, this would call a backend API to send WhatsApp message
        console.log(`WhatsApp message sent to +255${phone}: Your verification code is ${verificationCode}`);
        
        // Show success message with code (for demo purposes)
        showNotification(`Verification code sent to +255${phone}`, 'success');
        
        // Show code input and verify button
        document.getElementById('code-group').style.display = 'block';
        document.getElementById('verify-btn').style.display = 'flex';
        document.getElementById('send-code-btn').style.display = 'none';
        
        // Start countdown timer
        startCountdown();
        
        // Auto-focus code input
        document.getElementById('code').focus();
        
        hideLoading();
    }, 2000);
}

// Verify code
function verifyCode() {
    const codeInput = document.getElementById('code');
    const phoneInput = document.getElementById('phone');
    const code = codeInput.value.trim();
    const phone = phoneInput.value.trim();
    
    if (!code) {
        showNotification('Please enter the verification code', 'error');
        return;
    }
    
    if (code.length !== 6) {
        showNotification('Please enter a valid 6-digit code', 'error');
        return;
    }
    
    if (code !== verificationCode) {
        showNotification('Invalid verification code. Please try again.', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate successful verification
    setTimeout(() => {
        // Store user session
        localStorage.setItem('userAuthenticated', 'true');
        localStorage.setItem('userPhone', `+255${phone}`);
        localStorage.setItem('loginMethod', 'whatsapp');
        localStorage.setItem('loginTime', new Date().toISOString());
        
        showNotification('Verification successful! Welcome to Fredi Dev!', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
        hideLoading();
    }, 1000);
}

// Resend verification code
function resendCode() {
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        showNotification('Please enter your phone number first', 'error');
        return;
    }
    
    // Disable resend button during countdown
    const resendBtn = document.getElementById('resend-btn');
    resendBtn.disabled = true;
    
    showLoading();
    
    setTimeout(() => {
        verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // In real implementation, this would call a backend API to send WhatsApp message
        console.log(`WhatsApp message resent to +255${phone}: Your verification code is ${verificationCode}`);
        
        showNotification(`New verification code sent to +255${phone}`, 'success');
        
        // Reset and restart countdown
        resetCountdown();
        startCountdown();
        
        hideLoading();
    }, 1500);
}

// Start countdown timer
function startCountdown() {
    timeLeft = 120; // Reset to 2 minutes
    updateTimerDisplay();
    
    countdownTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById('resend-btn').disabled = false;
            document.getElementById('timer').textContent = 'Code expired';
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Reset countdown
function resetCountdown() {
    clearInterval(countdownTimer);
    timeLeft = 120;
    updateTimerDisplay();
    document.getElementById('resend-btn').disabled = true;
}

// Reset verification process
function resetVerificationProcess() {
    clearInterval(countdownTimer);
    timeLeft = 120;
    verificationCode = '';
    document.getElementById('resend-btn').disabled = false;
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Initialize auth page
document.addEventListener('DOMContentLoaded', function() {
    // Add input validation
    const phoneInput = document.getElementById('phone');
    const codeInput = document.getElementById('code');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    
    if (codeInput) {
        codeInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        
        // Auto verify when 6 digits are entered
        codeInput.addEventListener('input', function() {
            if (this.value.length === 6) {
                verifyCode();
            }
        });
    }
    
    // Check if user is already authenticated
    checkAuthenticationStatus();
});

// Check authentication status
function checkAuthenticationStatus() {
    const isAuthenticated = localStorage.getItem('userAuthenticated');
    const loginTime = localStorage.getItem('loginTime');
    
    if (isAuthenticated && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now - loginDate) / (1000 * 60 * 60);
        
        // Auto-logout after 24 hours for security
        if (hoursDiff < 24) {
            // User is still within valid session, redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Session expired, clear storage
            localStorage.clear();
        }
    }
}

// Enhanced loading function
function showLoading(message = 'Processing...') {
    // Remove existing loading spinner
    const existingLoader = document.getElementById('customLoadingSpinner');
    if (existingLoader) {
        existingLoader.remove();
    }
    
    const loader = document.createElement('div');
    loader.id = 'customLoadingSpinner';
    loader.innerHTML = `
        <div class="loading-overlay">
            <div class="loading-spinner-modern">
                <div class="spinner-circle"></div>
                <div class="spinner-text">${message}</div>
            </div>
        </div>
    `;
    
    // Add styles for modern loading spinner
    loader.style.cssText = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        
        .loading-spinner-modern {
            text-align: center;
            color: white;
        }
        
        .spinner-circle {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid var(--primary-blue);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        .spinner-text {
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('customLoadingSpinner');
    if (loader) {
        loader.remove();
    }
}
