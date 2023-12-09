import React, { createContext, useState, useEffect } from 'react';
import keycloak from './ContextKeyClock'; // Asegúrate de que la ruta sea correcta

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const updateAuthenticationStatus = () => {
            setIsAuthenticated(keycloak.authenticated);
        };

        keycloak.onAuthSuccess = updateAuthenticationStatus;
        keycloak.onAuthLogout = updateAuthenticationStatus;
        updateAuthenticationStatus();

        return () => {
            keycloak.onAuthSuccess = null;
            keycloak.onAuthLogout = null;
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
