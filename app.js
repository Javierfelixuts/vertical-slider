let slideRight = document.getElementById('slide-right');
        let slideLeft = document.getElementById('slide-left');

        const itemsLentgth = (slideLeft.querySelectorAll('.slide').length - 1) * 100;
        
        slideLeft.style.transform = `translateY(-${itemsLentgth}vh)`;
        let trayectoRight = 100;
        let trayectoLeft = -200;

        document.getElementById('arrow-up').addEventListener('click', onUp)
        document.getElementById('arrow-down').addEventListener('click', onDown)
        function onUp() {
            startUpAnimation()
            startDownAnimation()
        }
        function onDown() {
            startDownAnimation()
            startUpAnimation()
        }

        function startDownAnimation(){
            trayectoLeft += 100
            slideLeft.style.transform = `translateY(${trayectoLeft}vh)`;
            if (trayectoLeft == 0) {
                trayectoLeft = -300;
            }
        }

        function startUpAnimation(){
            slideRight.style.transform = `translateY(-${trayectoRight}vh)`;
            trayectoRight += 100;
            if (trayectoRight == 300) {
                trayectoRight = 0;
            }
        }