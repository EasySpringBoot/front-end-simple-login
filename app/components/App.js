var React = require('react');


export default class App extends React.Component {

    render() { // Every react component has a render method.

        let now = new Date();
        let datetimeString =`${now.toDateString()}  ${now.toTimeString()}`;

        return ( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <h1>
                Hello World, Now Time is {datetimeString}
            </h1>
        );
    }
}