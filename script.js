document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const fbButton = document.getElementById('fbLogin');
    const signUpLink = document.getElementById('signUp');
    const getHelp = document.getElementById('getHelp');

    if (!loginForm || !usernameInput || !passwordInput || !fbButton) return;

    // Login form submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('⚠️ Please fill in both fields.');
            return;
        }

        if (username === 'Batman' && password === 'Gothamneedsyou') {
            alert('✅ Successfully logged in.Welcome,Bruce Wayne!.');
        } else {
            alert('❌ Unknown vigilante detected. The Dark Knight does not recognize these credentials.');
        }

        // Clear fields
        usernameInput.value = '';
        passwordInput.value = '';
    });

    // Facebook login
    fbButton.addEventListener('click', () => {
        alert("🦇 Facebook login successful! Welcome to Gotham’s feed patrol.");
    });

    // Get help
    getHelp.addEventListener('click', (e) => {
        e.preventDefault();
        alert("🔐 Pretend you’re resetting your password… Gotham has no backend here!");
    });

    // Sign up
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('🎉 Account created! Time to protect the feeds from villainous cat videos!');
   });
});
