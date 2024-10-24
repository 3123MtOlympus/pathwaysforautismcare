let users = [];

// Toggle between sign-in and sign-up forms
function toggleForm(formType) {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    
    if (formType === 'signup') {
        signupForm.classList.remove('hidden');
        signinForm.classList.add('hidden');
    } else {
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }
}

// Sign-Up Function
function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    if (username && password && email) {
        const user = {
            username: username,
            password: password,
            email: email
        };

        // Add user to the users array (simulating database storage)
        users.push(user);
        alert('Sign-up successful! Please sign in.');
        
        // Hide sign-up and show sign-in form
        toggleForm('signin');
    } else {
        alert('Please fill out all fields.');
    }
}

// Sign-In Function
function signIn() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Sign-in successful! Welcome ' + user.username);
        // Redirect to the main page or user dashboard (depending on your app's flow)
    } else {
        alert('Invalid username or password.');
    }
}
$(document).ready(function(){
    $('.service-cards').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});