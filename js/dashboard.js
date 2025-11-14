// Dashboard specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard components
    initializeDashboard();
    
    // Update activity feed
    updateActivityFeed();
    
    // Initialize real-time updates
    startRealTimeUpdates();
});

function initializeDashboard() {
    // Add any dashboard-specific initialization here
    console.log('Dashboard initialized');
}

function updateActivityFeed() {
    // Simulate updating activity feed
    const activities = [
        { icon: 'whatsapp', text: 'FREDI-MD updated with new plugins', time: '2 hours ago' },
        { icon: 'film', text: 'Movies library added 50 new titles', time: '5 hours ago' },
        { icon: 'code', text: 'New coding tools deployed', time: '1 day ago' },
        { icon: 'robot', text: 'AI chat system improved', time: '2 days ago' }
    ];
    
    // In real implementation, this would fetch from API
}

function startRealTimeUpdates() {
    // Simulate real-time updates
    setInterval(() => {
        updateUserCounter();
        
        // Randomly update some stats
        const stats = document.querySelectorAll('.stat-card h3');
        if (stats.length > 0) {
            const randomStat = stats[Math.floor(Math.random() * stats.length)];
            const currentValue = parseInt(randomStat.textContent.replace(/,/g, ''));
            if (!isNaN(currentValue)) {
                const newValue = currentValue + Math.floor(Math.random() * 10);
                randomStat.textContent = newValue.toLocaleString();
            }
        }
    }, 30000); // Update every 30 seconds
}

// Project filtering for projects page
function initializeProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize project filter if on projects page
if (window.location.pathname.includes('projects.html')) {
    document.addEventListener('DOMContentLoaded', initializeProjectFilter);
}
