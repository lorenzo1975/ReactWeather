var React = require('react');


/* var About = React.createClass({
    render: function() {
        return(
            <h3>About Component</h3>
        )
    }
}); */

// stateless functional components

var About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application build on React. I have built
                this for the Complete Web App Developer Course.
            </p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used
                </li>
                <li>
                    <a href="http://openweathermap.com">Open Weather Map</a> - A great map weather api.
                </li>
            </ul>
        </div>
    )
}

module.exports = About;