
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Default section setup
    const defaultSection = document.getElementById('home-section');
    if (defaultSection) {
        defaultSection.classList.remove('hidden');
        console.log('Home section visible by default');
    }

    // Navigation click event listener
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').replace('#', '');
            document.querySelectorAll('section > div').forEach(sec => sec.classList.add('hidden'));
            const targetSection = document.getElementById(`${sectionId}-section`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                console.log(`${sectionId} section is now visible`);
            } else {
                console.error(`Section with ID '${sectionId}-section' not found`);
            }
        });
    });

    // Example Chart.js setup for Analytics section
    const analyticsCanvas = document.getElementById('analyticsChart');
    if (analyticsCanvas) {
        const ctx = analyticsCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Data Points',
                    data: [10, 20, 15, 25, 30],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                }
            }
        });
        console.log('Chart initialized');
    } else {
        console.error('Analytics chart canvas not found');
    }
});
