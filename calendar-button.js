window.addEventListener('load', function() {
    // Ensure the Google scheduling script is loaded
    if (!window.calendar || !calendar.schedulingButton) {
        console.error('Google scheduling script not loaded yet.');
        return;
    }

    calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0aEyp-sXZJ3x-nfx1bDjIROhy7fKacVEt0DDS4EpZINRactPbAq2_-EKL8QeqRGxTeARkAYA5t?gv=true', // replace with your schedule URL
        color: '#FFCDB2',
        label: 'Book a visit',
        target: document.getElementById('visit-button')
    });
});