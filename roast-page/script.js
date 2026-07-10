document.addEventListener('DOMContentLoaded', () => {
    // Add touch interactions for glass cards to simulate a lift effect on tap
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('touched');
        }, { passive: true });

        card.addEventListener('touchend', () => {
            setTimeout(() => {
                card.classList.remove('touched');
            }, 150); // Small delay to let the user see the effect
        }, { passive: true });
        
        card.addEventListener('touchcancel', () => {
            card.classList.remove('touched');
        }, { passive: true });
    });
});
