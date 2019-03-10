function notificarUsuario(sms, email) {
    console.log('Iniciar notificação');
    setTimeout(function() {
        sms();
        setTimeout(function() {
            email();
        }, 2000);
    }, 1000);
}

notificarUsuario(
    function() {
        console.log("Enviando notificação");
    },
    function() {
        console.log("Enviando e-mail");
    }
);
console.log("terminou");