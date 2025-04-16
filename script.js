const text = "frontend developer";
    const speed = 100; // typing speed
    const delay = 1000; // delay after full text
    const eraseSpeed = 50;

    let i = 0;
    let isDeleting = false;
    const element = document.getElementById("typewriter");

    function typeLoop() {
      if (!isDeleting) {
        element.textContent = text.substring(0, i + 1);
        i++;
        if (i === text.length) {
          setTimeout(() => {
            isDeleting = true;
            typeLoop();
          }, delay);
          return;
        }
      } else {
        element.textContent = text.substring(0, i - 1);
        i--;
        if (i === 0) {
          isDeleting = false;
        }
      }
      setTimeout(typeLoop, isDeleting ? eraseSpeed : speed);
    }

    document.addEventListener("DOMContentLoaded", typeLoop);
