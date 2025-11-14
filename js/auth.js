// Authentication functionality
let verificationCode = '';

// Send verification code
function sendVerification() {
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        alert('Please enter your phone number');
        return;
    }
    
    if (phone.length !== 9) {
        alert('Please enter a valid 9-digit phone number');
        return;
    }
    
    showLoading();
    
    // Simulate sending verification code
    setTimeout(() => {
        verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        alert(`Verification code sent to +255${phone}\nCode: ${verificationCode}\n\nThis is a simulation. In real implementation, code would be sent via WhatsApp.`);
        
        // Enable verify button
        document.querySelector('.verify-btn.secondary').disabled = false;
        
        hideLoading();
    }, 2000);
}

// Verify code
function verifyCode() {
    const codeInput = document.getElementById('code');
    const code = codeInput.value.trim();
    
    if (!code) {
        alert('Please enter the verification code');
        return;
    }
    
    if (code !== verificationCode) {
        alert('Invalid verification code. Please try again.');
        return;
    }
    
    showLoading();
    
    // Simulate successful verification
    setTimeout(() => {
        alert('Verification successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Initialize auth page
document.addEventListener('DOMContentLoaded', function() {
    // Disable verify button initially
    document.querySelector('.verify-btn.secondary').disabled = true;
    
    // Add input validation
    const phoneInput = document.getElementById('phone');
    const codeInput = document.getElementById('code');
    
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    codeInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});
