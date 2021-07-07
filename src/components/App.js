import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import CalendarContainer from "containers/CalendarContainer";

const App = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto', 'Exo:900']
            }
        });
    }, []);

    return (
        <CalendarContainer />
    );
}

export default App;