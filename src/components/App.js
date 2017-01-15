import React from 'react';
import Todo from './Todo';
import MuithemeProvider from 'material-ui/styles/MuithemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
            <MuithemeProvider>
                <Todo/>
            </MuithemeProvider>
            
        );
    }
}

export default App;