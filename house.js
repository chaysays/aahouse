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
    document.getElementById('eventDateTime').innerText = "August 24th - 12:00 PM";
    document.getElementById('eventPlace').innerText = "3987 Trailway Commons Cir, Auburn Hills, MI 48326";
});


document.getElementById('rsvpForm1').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('guestName').innerText;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const numGuests = attendance === 'yes' || attendance === 'maybe' ? document.getElementById('num').value : '0';

    if (!attendance) {
        alert("Please complete the RSVP.");
        return;
    }

    emailjs.init({
      publicKey: 'XdF_LEk7SXz7ZuIyq',
    });


    var templateParams = {
        guest_name: name,
        guest_count: numGuests,
        guest_response: attendance
    };
    
    emailjs.send('service_t6olu3k', 'template_2njaiuq', templateParams).then(
      (response) => {
        alert("Thank you for your RSVP. Your RSVP is successfully sent.");
      },
      (error) => {
        alert("Please try again later or contact the homeowners immediately!");
      },
    );

    
});

document.querySelectorAll('input[name="attendance"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const guestCountInput = document.getElementById('num');
        if (this.value === 'no') {
            guestCountInput.value = '';
            guestCountInput.disabled = true;
        } else {
            guestCountInput.disabled = false;
        }
    });
});


