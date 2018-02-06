var React = require('react');

/* var WeatherMessage = (props) => {
    var {temp, location} = props;
    return(
        <h3>It's {temp} in {location}.</h3>
    )
} */

// destructuring directly in the parameters.
var WeatherMessage = ({temp, location}) => {
    return(
        <h3 className="text-center">It's {temp} in {location}.</h3>
    )
}

module.exports = WeatherMessage;