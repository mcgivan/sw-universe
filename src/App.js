import React from 'react';
import NavMenu from './NavMenu';
import MainView from './MainView';
import Header from './Header';
import { AppProvider } from './AppProvider';

function App() {
    return (
        <div className="wrapper py-6 px-6 flex flex-col min-h-screen max-h-screen">
            <AppProvider>
                <Header />
                <NavMenu />
                <MainView />
            </AppProvider>
        </div>
    );
}

export default App;
