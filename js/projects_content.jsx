var React = require('react');

var projectStyle = {
    minWidth: 700 + 'px',
    borderRadius: 5 + 'px',
    color: "black",
    padding: '10px'
};

var headingStyle = {
    color: "gray",
    textAlign: "center"
};

module.exports = React.createClass({
    render: function(){
        return(
            <div id="SentimentProject" style={projectStyle}>
                <h2 style={headingStyle}>
                    Which U.S. Presidential Candidate has the Most Positive Attiude?
                </h2>
                <p>
                    Personality is a huge component in winning the hearts of
                    American voters. "Positivity" and "Negativity" have been
                    metrics of interest, for example they were a point of 
                    contention between Hillary Clinton and Barack Obama in the 
                    2008 Democratic Primary.
                </p>
                <p>
                    Candidates will go back and forth about each others
                    attitudes, but we can quantify their attitude using
                    sentiment analysis. I used a Naive Bayes Classifier
                    trained on the NLTK movie reviews corpus as a means
                    to classify statements as either positive or negative.
                    The candidates' statements were obtained from transcripts
                    of 7 Democratic and 12 GOP Primary debates.
                </p>
                <p>
                    Below is a chart showing the percentage of each
                    candidates statements which were classified as positive.
                </p>
                <div id="sentiment-graph"></div>
                <p>
                    Tools used: d3.js, Python, NLTK
                    <br />
                    <a href="https://github.com/jknollmeyer/debate-lingo">
                        GitHub Repository
                    </a>
                </p>
            </div>
        );
    },
    componentWillMount: function(){

        // Load the js file containing the graph
        // the barchart will append to "#sentiment-graph"
        const graphScript = document.createElement("script");

        graphScript.src = "js/barchart.js";
        graphScript.async = true;

        document.body.appendChild(graphScript);
    }
});
