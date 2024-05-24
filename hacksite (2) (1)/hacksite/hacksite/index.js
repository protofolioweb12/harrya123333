document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const commandInput = document.getElementById('commandInput');
    const customAlert = document.getElementById('customAlert');
    const closeAlert = document.getElementById('closeAlert');
    const jokerOverlay = document.getElementById('jokerOverlay');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const vibrateSound = document.getElementById('vibrateSound');
    
    // Variable to track the interval
    let dimInterval;

    const dummyCodeSnippets = [
        "console.log('Hacking in progress...');",
        "let breachDetected = true;",
        "fetch('https://secure-server.com/data');",
        "while(true) { console.log('Accessing data...'); }",
        "const secretKey = 'ABC123XYZ';",
        "if (breachDetected) { alert('Data breach detected!'); }",
        "document.write('Access granted.');",
        "// TODO: Encrypt data",
        "function hackServer() { return 'Success'; }",
        "console.error('Intrusion detected!');"
    ];

    const audioFiles = [
        'mixkit-ambulance-siren-uk-1640.wav',
        'mixkit-manual-siren-fire-alert-1652.wav',
        'mixkit-slot-machine-win-siren-1929.wav'
        // Add more audio files as needed
    ];

    const printToTerminal = (message) => {
        const newLine = document.createElement('p');
        newLine.innerHTML = message;
        terminal.appendChild(newLine);
        terminal.scrollTop = terminal.scrollHeight;
    };

    // Add a new paragraph to show live typing
    const typingParagraph = document.createElement('p');
    terminal.appendChild(typingParagraph);

    // Function to get random dummy code snippet
    const getRandomCodeSnippet = () => {
        return dummyCodeSnippets[Math.floor(Math.random() * dummyCodeSnippets.length)];
    };

    // Function to vibrate the device
    const vibrateDevice = () => {
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
            vibrateSound.play(); // Play the vibrate sound
        }
    };

    // Function to toggle image dimming effect
    const toggleImageDim = () => {
        let opacity = 1;
        dimInterval = setInterval(() => {
            opacity = opacity === 1 ? 0.5 : 1;
            // jokerOverlay.style.opacity = opacity;
        }, 1000);
    };

    // Function to play multiple audio files
    const playMultipleAudios = (audioFiles, index) => {
        if (index < audioFiles.length) {
            const audio = new Audio(audioFiles[index]);
            audio.addEventListener('ended', () => {
                playMultipleAudios(audioFiles, index + 1);
            });
            audio.play();
        }
    };

    // Event listener for input changes
    commandInput.addEventListener('input', () => {
        const randomCode = getRandomCodeSnippet();
        typingParagraph.innerHTML = '> ' + commandInput.value + '<br>' + randomCode;
        terminal.scrollTop = terminal.scrollHeight;
    });

    // Event listener for Enter key
    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value;
            commandInput.value = '';

            printToTerminal(`> ${command}`);
            typingParagraph.innerHTML = ''; // Clear the typing paragraph

            // Simulate hacker-like response for any command
            setTimeout(() => {
                printToTerminal(getRandomCodeSnippet());
                setTimeout(() => {
                    printToTerminal(getRandomCodeSnippet());
                    setTimeout(() => {
                        printToTerminal(getRandomCodeSnippet());
                        customAlert.style.display = 'block';
                        jokerOverlay.style.display = 'block';
                        toggleImageDim(); // Start toggling image dimming effect
                        vibrateDevice(); // Vibrate the device when alert is shown
                        playMultipleAudios(audioFiles, 0); // Play multiple audio files
                    }, 1000);
                }, 1000);
            }, 500);
        }
    });

    // Event listener to close the custom alert box
    closeAlert.addEventListener('click', () => {
        customAlert.style.display = 'none';
        jokerOverlay.style.display = 'none';
        clearInterval(dimInterval); // Stop the image dimming effect
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const enternameInput = document.getElementById('entername');
    const welcomeName = document.getElementById('welcomeName'); // Add this line
    const loginMessage = document.getElementById('loginMessage');
    const loginContainer = document.querySelector('.login-container');
    const hackerContainer = document.getElementById('hackerContainer');
    const vibrateSound = document.getElementById('vibrateSound');

    // Sample username and password (for testing purposes)
    const correctUsername = 'user';
    const correctPassword = 'password';

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const username = usernameInput.value;
        const password = passwordInput.value;
        const entername = enternameInput.value;

        // Check if username and password match the correct ones
        if (username === correctUsername && password === correctPassword) {
            loginMessage.textContent = `Welcome to ${entername}`;
            loginMessage.style.color = 'green';

            welcomeName.textContent = entername; // Display name in welcome message

            window.location.href = '#hackerContainer';

            // Hide the login container and show the hacker simulation container
            loginContainer.style.display = 'none';
            hackerContainer.style.display = 'block';
        } else {
            loginMessage.textContent = 'Invalid username or password';
            loginMessage.style.color = 'red';
        }

        // Clear input fields
        usernameInput.value = '';
        passwordInput.value = '';
        enternameInput.value = '';
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const smsForm = document.getElementById('smsForm');

    phoneNumberInput.addEventListener('input', () => {
        const phoneNumber = phoneNumberInput.value.trim();
        if (!isValidPhoneNumber(phoneNumber)) {
            phoneNumberInput.style.borderColor = 'red';
        } else {
            phoneNumberInput.style.borderColor = 'green';
        }
    });

    smsForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const phoneNumber = phoneNumberInput.value.trim();

        if (!isValidPhoneNumber(phoneNumber)) {
            phoneNumberInput.style.borderColor = 'red';
            return; // Stop execution if phone number is not valid
        }

        // Send SMS message (replace with your actual SMS sending logic)
        sendSMS(phoneNumber);
    });

    function isValidPhoneNumber(phoneNumber) {
        // You can implement your own phone number validation logic here
        // For simplicity, let's assume a valid phone number is 10 digits long
        return /^\d{10}$/.test(phoneNumber);
    }

    function sendSMS(phoneNumber) {
        // Replace this with actual code to send SMS message
        // For example, you can use an API provided by a service like Twilio

        // Dummy response
        const responseDiv = document.getElementById('response');
        responseDiv.textContent = `Message sent to ${phoneNumber}`;
    }
});
