import React, { Component } from 'react';
import WebFont from 'webfontloader';
import GlobalStyle from "./styles/GlobalStyle";
import Calendar from "./components/calendar/Calendar";

class App extends Component {

    componentDidMount() {
        WebFont.load({
            google: {
                families: ["Roboto", "Noto Sans KR", "Exo:900"]
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Calendar />
            </React.Fragment>
        );
    }
}

export default App;