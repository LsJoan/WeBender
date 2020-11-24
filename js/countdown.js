
(() => {
    // Especifique la fecha límite   11   12   2020  
    const deadlineDate = new Date('November 25, 2020 23:59:59').getTime();

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
    }, 1000);
})();