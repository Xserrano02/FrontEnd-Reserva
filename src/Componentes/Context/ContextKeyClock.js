import Keycloak from 'keycloak-js';;
const keycloak = new Keycloak({
    url: 'http://localhost:9595/',
    realm: 'Reservacion-ID',
    clientId: 'Reservation-app'
});

keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false });


export default keycloak;
