import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

function appReducer(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, { view: '', search: '' });

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
}

export { AppProvider, useAppContext };
