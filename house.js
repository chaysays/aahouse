document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById('envelope').style.display = 'none';
    const greetingCard = document.getElementById('greetingCard');
    greetingCard.style.display = 'block';
    greetingCard.style.animation = 'slideIn 1s forwards';
    
    document.getElementById('guestName').innerText = name;
    document.getElementById('eventDate').innerText = "August 24, 2024";
    document.getElementById('eventTime').innerText = "9:00 AM";
    document.getElementById('eventPlace').innerText = "3987 Trailway Commons Cir, Auburn Hills, MI 48326";
});


document.getElementById('rsvpForm1').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('guestName').innerText;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const numGuests = document.getElementById('num').value;

    if (!attendance || !numGuests) {
        alert("Please complete the RSVP.");
        return;
    }

    // Send email using EmailJS
    emailjs.send('service_t6olu3k', 'template_2njaiuq', {
        guest_name: name,
        guest_count: numGuests,
        guest_response: attendance
    }).then(function(response) {
        alert(`Thank you, ${name}! Your RSVP has been sent successfully.`);
    }, function(error) {
        alert(`Failed to send RSVP. Please try again.`);
    });
});


