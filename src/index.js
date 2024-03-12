document.addEventListener('DOMContentLoaded', function() {
    const inviteLink = document.getElementById('invite-btn');
    
    if (inviteLink) {
        inviteLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            const inviteSection = document.getElementById('invite-link');
            if (inviteSection) {
                inviteSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
