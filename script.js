// Function to add floating hearts animation
// function addFloatingHearts() {
//     const container = document.querySelector('.day-container');
//     for (let i = 0; i < 10; i++) {
//         const heart = document.createElement('div');
//         heart.className = 'heart';
//         heart.textContent = '❤️';
//         heart.style.left = Math.random() * 100 + '%';
//         heart.style.animationDelay = Math.random() * 6 + 's';
//         container.appendChild(heart);
//     }
// }

document.getElementById('yes-btn')?.addEventListener('click', () => {
    const yesMessage = document.getElementById('yes-message').textContent;
    alert(yesMessage);

    document.querySelector('.question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.success-message').style.display = 'block';
});

// Handle "No" button hover (make it move away)
document.getElementById('no-btn')?.addEventListener('mouseover', () => {
    const container = document.querySelector('.day-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = document.getElementById('no-btn').getBoundingClientRect();
    
    const newLeft = Math.random() * (containerRect.width - btnRect.width);
    const newTop = Math.random() * (containerRect.height - btnRect.height);
    
    document.getElementById('no-btn').style.position = 'absolute';
    document.getElementById('no-btn').style.left = `${newLeft}px`;
    document.getElementById('no-btn').style.top = `${newTop}px`;
});

// Handle "No" button click
document.getElementById('no-btn')?.addEventListener('click', () => {
    alert("Nice try! But you can't say no to love. 😉");
});

// Handle mailbox icon click to open letter
document.querySelectorAll('.mailbox-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const overlay = icon.nextElementSibling;
        overlay.style.display = 'flex';
    });
});

// Handle closing the letter
document.querySelectorAll('.close-letter').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.letter-overlay').style.display = 'none';
    });
});

// Close letter on overlay click
document.querySelectorAll('.letter-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

// List of 10 random cute messages for No button hover
const noMessages = [
    "Please think again 😊",
    "Are you sure? 💕",
    "Love is calling! ❤️",
    "Don't break my heart 💔",
    "One more chance? 😘",
    "You're my everything! 🌟",
    "Say yes to happiness! 😍",
    "Think of the cuddles! 🤗",
    "Forever starts with yes! 💍",
    "My heart says yes! 💖"
];

// Function to add floating hearts animation
// function addFloatingHearts() {
//     const container = document.querySelector('.day-container');
//     for (let i = 0; i < 10; i++) {
//         const heart = document.createElement('div');
//         heart.className = 'heart';
//         heart.textContent = '❤️';
//         heart.style.left = Math.random() * 100 + '%';
//         heart.style.animationDelay = Math.random() * 6 + 's';
//         container.appendChild(heart);
//     }
// }

// Function to create continuous falling animation for Yes button (20 seconds)
function createFallingAnimation(emojis) {
    const container = document.querySelector('.day-container');
    let intervalId = setInterval(() => {
        const item = document.createElement('div');
        item.className = 'falling-item';
        item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        item.style.left = Math.random() * 100 + '%';
        container.appendChild(item);
        // Remove after animation (4 seconds)
        setTimeout(() => item.remove(), 4000);
    }, 500); // New item every 500ms

    // Stop after 20 seconds
    setTimeout(() => clearInterval(intervalId), 20000);
}

// Handle "Yes" button click (trigger 20-second animation, then show success - NO redirect)
// document.getElementById('yes-btn')?.addEventListener('click', () => {
//     const dayTitle = document.querySelector('.day-title').textContent;
//     let emojis = ['❤️']; // Default

//     if (dayTitle.includes('Rose Day')) emojis = ['🌹'];
//     else if (dayTitle.includes('Propose Day')) emojis = ['❤️', '💍'];
//     else if (dayTitle.includes('Chocolate Day')) emojis = ['🍫'];
//     else if (dayTitle.includes('Teddy Day')) emojis = ['🧸'];
//     else if (dayTitle.includes('Promise Day')) emojis = ['❤️'];
//     else if (dayTitle.includes('Hug Day')) emojis = ['🤗'];
//     else if (dayTitle.includes('Kiss Day')) emojis = ['💋'];
//     else if (dayTitle.includes("Valentine's Day")) emojis = ['❤️', '🌹'];

//     createFallingAnimation(emojis);
//     // Hide question/buttons and show success after 20 seconds (user stays on page)
//     setTimeout(() => {
//         document.querySelector('.question').style.display = 'none';
//         document.querySelector('.buttons').style.display = 'none';
//         document.querySelector('.success-message').style.display = 'block';
//     }, 20000); // 20 seconds
// });

// Handle "Yes" button click (open modal with animation, then proceed)
document.getElementById('yes-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('yes-modal');
    modal.style.display = 'flex';
    
    // Add floating hearts to modal
    const modalContent = modal.querySelector('.modal-content');
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'modal-heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 80 + '%';
        heart.style.top = Math.random() * 80 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        modalContent.appendChild(heart);
    }
    
    // Close modal after 5 seconds, then start rain and show success
    setTimeout(() => {
        modal.style.display = 'none';
        // Clear hearts
        modalContent.querySelectorAll('.modal-heart').forEach(h => h.remove());
        
        // Start 20-second rain
        const dayTitle = document.querySelector('.day-title').textContent;
        let emojis = ['❤️'];
        if (dayTitle.includes('Rose Day')) emojis = ['🌹'];
        else if (dayTitle.includes('Propose Day')) emojis = ['❤️', '💍'];
        else if (dayTitle.includes('Chocolate Day')) emojis = ['🍫'];
        else if (dayTitle.includes('Teddy Day')) emojis = ['🧸'];
        else if (dayTitle.includes('Promise Day')) emojis = ['❤️'];
        else if (dayTitle.includes('Hug Day')) emojis = ['🤗'];
        else if (dayTitle.includes('Kiss Day')) emojis = ['💋'];
        else if (dayTitle.includes("Valentine's Day")) emojis = ['❤️', '🌹'];
        
        createFallingAnimation(emojis);
        
        // Show success after rain
        setTimeout(() => {
            document.querySelector('.question').style.display = 'none';
            document.querySelector('.buttons').style.display = 'none';
            document.querySelector('.success-message').style.display = 'block';
        }, 20);
    }, 8000); // 5 seconds for modal
});

// Handle "No" button hover (show random message and slight move)
document.getElementById('no-btn')?.addEventListener('mouseover', () => {
    const btn = document.getElementById('no-btn');
    const container = document.querySelector('.day-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    
    // Slight random move
    const newLeft = Math.random() * (containerRect.width - btnRect.width);
    const newTop = Math.random() * (containerRect.height - btnRect.height);
    btn.style.position = 'absolute';
    btn.style.left = `${newLeft}px`;
    btn.style.top = `${newTop}px`;
    
    // Show random tooltip message
    let tooltip = document.querySelector('.no-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'no-tooltip';
        document.body.appendChild(tooltip);
    }
    tooltip.textContent = noMessages[Math.floor(Math.random() * noMessages.length)];
    tooltip.style.left = `${newLeft + 50}px`;
    tooltip.style.top = `${newTop - 40}px`;
    tooltip.style.display = 'block';
    
    // Hide tooltip after 2 seconds
    setTimeout(() => tooltip.style.display = 'none', 2000);
});

// Handle "No" button click
document.getElementById('no-btn')?.addEventListener('click', () => {
    alert("Nice try! But love wins. 😉");
});

// Handle mailbox icon click to open letter
document.querySelectorAll('.mailbox-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const overlay = icon.nextElementSibling;
        overlay.style.display = 'flex';
    });
});

// Handle closing the letter
document.querySelectorAll('.close-letter').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.letter-overlay').style.display = 'none';
    });
});

// Close letter on overlay click
document.querySelectorAll('.letter-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

// Run on page load for day pages
// if (document.querySelector('.day-container')) {
//     addFloatingHearts();
// }

// Run on page load for day pages
// if (document.querySelector('.day-container')) {
//     addFloatingHearts();
// }

function addEmojiBackground(emojis) {
    const layer = document.createElement('div');
    layer.className = 'emoji-bg';

    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDelay = Math.random() * 10 + 's';
        emoji.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
        layer.appendChild(emoji);
    }

    document.body.appendChild(layer);
}

const title = document.querySelector('.day-title')?.textContent || '';

if (title.includes('Rose Day')) {
    addEmojiBackground(['🌹', '❤️']);
}
else if (title.includes('Propose Day')) {
    addEmojiBackground(['💍', '❤️', '✨']);
}
else if (title.includes('Chocolate Day')) {
    addEmojiBackground(['🍫', '🤎']);
}
else if (title.includes('Teddy Day')) {
    addEmojiBackground(['🧸', '💕']);
}
else if (title.includes('Promise Day')) {
    addEmojiBackground(['🤞', '💍', '❤️']);
}
else if (title.includes('Hug Day')) {
    addEmojiBackground(['🤗', '💞']);
}
else if (title.includes('Kiss Day')) {
    addEmojiBackground(['💋', '❤️']);
}
else if (title.includes("Valentine")) {
    addEmojiBackground(['❤️', '💖', '🌹', '✨']);
}

document.addEventListener("DOMContentLoaded", function () {

    const viewer = document.getElementById("imageViewer");
    const viewerImg = document.getElementById("viewerImg");

    if (!viewer || !viewerImg) return;

    document.querySelectorAll(".gallery img, .main-image").forEach(img => {
        img.addEventListener("click", function () {
            viewerImg.src = this.src;
            viewer.classList.add("active");
        });
    });

    // close on background click
    viewer.addEventListener("click", function () {
        viewer.classList.remove("active");
        viewerImg.src = "";
    });

    // close on ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            viewer.classList.remove("active");
            viewerImg.src = "";
        }
    });

});
