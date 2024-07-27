// Add this to your existing script.js
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    if (name.trim() === "") {
        document.getElementById('message').innerText = "Please enter your name.";
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

    const greetingMessage = `Hello ${name}, you are invited!`;
    document.getElementById('greetingMessage').innerText = greetingMessage;
});

