
import React, { createContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

export const KeycloakContext = createContext();

export const KeycloakProvider = ({ children }) => {
    const [keycloak, setKeycloak] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const keycloakInstance = new Keycloak({
            url: 'http://localhost:9595/',
            realm: 'Reservacion-ID',
            clientId: 'Reservation-app'
        });

        keycloakInstance.init({ onLoad: 'check-sso', checkLoginIframe: false }).then(authenticated => {
            setKeycloak(keycloakInstance);
            setIsAuthenticated(authenticated);
        });
    }, []);

    return (
        <KeycloakContext.Provider value={{ keycloak, isAuthenticated }}>
            {children}
        </KeycloakContext.Provider>
    );
};
