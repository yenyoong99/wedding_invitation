const audio = new Audio('./audios/background-music.mp3');
audio.loop = true;

function enterSite() {
    document.getElementById('introScreen').style.opacity = '0';
    document.getElementById('mainContent').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('introScreen').style.display = 'none';
        audio.play();
    }, 500);
    window.scrollTo(0, 0);
}

function downloadInvitation() {
    window.open('./uploads/wedding_card.pdf', '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Parallax effect for background decoration
    window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector(".background-decoration").style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Fade-in animation for sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 },
    );

    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    });

    // 监听滚动事件来控制音乐播放
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 && audio.paused) {
            audio.play();
        }
    });

    // 添加鼠标悬停效果
    document.querySelector('.enter-button').addEventListener('mouseover', function() {
        document.querySelector('.intro-image').style.animation = 'none';
    });

    document.querySelector('.enter-button').addEventListener('mouseout', function() {
        document.querySelector('.intro-image').style.animation = 'pulse 2s infinite';
    });
});

function scrollToContent() {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    document.body.appendChild(petal);
    
    // Randomize petal position, size, and speed
    let startPositionX = Math.random() * window.innerWidth;
    let startPositionY = -50;
    let rotation = Math.random() * 360;
    let petalSize = Math.random() * 20 + 15; // Adjust size range
    let speed = Math.random() * 5 + 2;

    petal.style.left = `${startPositionX}px`;
    petal.style.top = `${startPositionY}px`;
    petal.style.transform = `rotate(${rotation}deg)`;
    petal.style.width = `${petalSize}px`;
    petal.style.height = `${petalSize}px`;

    let animation = petal.animate([ 
        { transform: `translateY(0px) rotate(${rotation}deg)`, opacity: 1 },
        { transform: `translateY(${window.innerHeight + 50}px) rotate(${rotation + 360}deg)`, opacity: 0 }
    ], {
        duration: speed * 1000,
        easing: 'linear'
    });

    animation.onfinish = () => petal.remove();
}

// function toggleParkingInfo() {
//     var popup = document.getElementById("parkingInfoPopup");
//     if (popup.style.display === "block") {
//         popup.style.display = "none";
//     } else {
//         popup.style.display = "block";

//         document.addEventListener("click", function (event) {
//             if (!popup.contains(event.target) && !event.target.closest(".parking-tooltip button")) {
//                 popup.style.display = "none";
//             }
//         }, { once: true });
//     }
// }

// Adjust interval for mobile
let petalInterval = window.innerWidth < 600 ? 500 : 300;
setInterval(createPetal, petalInterval);

// window.onload = function() {
//     document.querySelector(".enter-button").click();
// };