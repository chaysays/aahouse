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
    
    const greetingMessage = `Hello ${name}, you are invited!`;
    document.getElementById('greetingMessage').innerText = greetingMessage;
});
