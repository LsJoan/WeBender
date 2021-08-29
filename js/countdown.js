
(() => {
    // Especifique la fecha límite   11   12   2020  
    const deadlineDate = new Date('August 30, 2021 23:59:59').getTime();
    const header = document.querySelector(".header");
    const cejas1 = document.querySelector(".slider-cejas1");
    const cejas2 = document.querySelector(".slider-cejas2");
    const ojos1 = document.querySelector(".slider-pupila1");
    const ojos2 = document.querySelector(".slider-pupila2");
    const title = document.querySelector(".title");
    // Guarde en caché todos los cuadros de cuenta atrás en consts
    const countdownDays = document.getElementById('dia');
    const countdownHours = document.getElementById('hora');
    const countdownMinutes = document.getElementById('minuto');
    const countdownSeconds = document.getElementById('segundo');

    // Actualice la cuenta atrás cada 1 segundo (1000 milisegundos)
    setInterval(() => {
        // Obtener fecha y hora actual
        const currentDate = new Date().getTime();

        // Calcule la distancia entre la fecha y hora actuales y la fecha y hora límite
        const distance = deadlineDate - currentDate;

        // Calcula los datos de los días, horas, minutos y segundos restantes.
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;

        
    if(days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
        countdownDays.innerHTML = 0;
        countdownHours.innerHTML = 0;
        countdownMinutes.innerHTML = 0;
        countdownSeconds.innerHTML = 0;
        cejas1.style.animation = " cejasActiva 60s linear infinite normal";
        cejas2.style.animation = " cejasActiva 60s linear infinite normal";
        title.style.display = "none";
        ojos1.style.animation = " ojoActivo 60s linear infinite alternate";
        ojos2.style.animation = " ojoActivo 60s linear infinite alternate";
    }
    else {
        return true;
    }

    }, 1000);


})();
