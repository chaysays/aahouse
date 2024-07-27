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
    document.getElementById('eventDate').innerText = "August 15, 2024";
    document.getElementById('eventTime').innerText = "5:00 PM";
    document.getElementById('eventPlace').innerText = "1234 Elm Street, Springfield";
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

    alert(`Thank you, ${name}! You have selected "${attendance}" with ${numGuests} guests.`);
});
