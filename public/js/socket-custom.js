var socket = io();
// Los on son par escuchar los procesos.
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexion');

});

// Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    // usuario: 'Victor',
    messaje: 'Primer mensaje'
}, function(resp) {
    console.log('respuesta servidor: ', resp);

});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});