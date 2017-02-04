import React from 'react';
// import Todo from './Todo';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';

// import MuithemeProvider from 'material-ui/styles/MuithemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// 기존 Todo 
/*class App extends React.Component {
    render() {
        return (
            <MuithemeProvider>
                <Todo/>
            </MuithemeProvider>
            
        );
    }
}*/
class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }
 
}
 
export default App;