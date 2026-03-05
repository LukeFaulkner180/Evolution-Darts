/* Count down */
document.addEventListener('DOMContentLoaded', function() {
    const competitionDate = new Date('April 18, 2026 19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = competitionDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (distance < 0) {
            document.querySelector('.timer-countdown').innerHTML = '<h3>Competition has started!</h3>';
            clearInterval(timerInterval);
        }
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    // Menu toggle
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !sideMenu.contains(event.target)) {
            sideMenu.classList.remove('open');
        }
    });
});