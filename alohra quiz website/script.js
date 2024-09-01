// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Function to show the login popup
function showPopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Function to hide the login popup
function hidePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Event listener for the login button to open the popup
const loginButton = document.querySelector('.login-btn');
if (loginButton) {
    loginButton.addEventListener('click', showPopup);
}

// Event listener for the close button to close the popup
const closeButton = document.querySelector('.popup .close');
if (closeButton) {
    closeButton.addEventListener('click', hidePopup);
}

// Event listener to close the popup when clicking outside the popup content
const popupOverlay = document.querySelector('.popup');
if (popupOverlay) {
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            hidePopup();
        }
    });
}
