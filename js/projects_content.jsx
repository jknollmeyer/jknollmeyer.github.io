var React = require('react');

var projectStyle = {
    minWidth: 700 + 'px',
    borderRadius: 5 + 'px'
};
module.exports = React.createClass({
    render: function(){
        return(
            <div id="SentimentProject" style={projectStyle}>
                <div id="sentiment-graph"></div>
            </div>
        );
    },
    componentWillMount: function(){
        const graphScript = document.createElement("script");

        graphScript.src = "js/barchart.js";
        graphScript.async = true;

        document.body.appendChild(graphScript);
    }
});
