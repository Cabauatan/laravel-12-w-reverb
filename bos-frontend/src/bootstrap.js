import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'reverb',
    key: '6cxxrezhtljlsffn4lha',
    secret: 'ypviko4si8caifr3qgta',
    wsHost: '192.168.100.30',
    wsPort: 8080,
    wssPort: 8080,
    forceTLS: 'http',
    enabledTransports: ['ws', 'wss']
});
