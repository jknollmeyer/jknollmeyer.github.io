var React = require('react');
var ReactDOM = require('react-dom');

var PageHTML = React.createClass({
  render: function(){
    return(
      <div className="titleContent">
        <img src="img/propic.jpg" id="propic" className="img-resposive"/>
        <h2 id="titleText">Hi, my name is John and I make stuff</h2>

        <div className="row">
          <div className="col-xs-4">
            <span className="glyphicon glyphicon-user glyph-title"></span>
          </div>
          <div className="col-xs-4">
            <span className="glyphicon glyphicon-list-alt glyph-title"></span>
          </div>
          <div className="col-xs-4">
            <span className="glyphicon glyphicon-comment glyph-title"></span>
          </div>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <PageHTML />,
  document.getElementById('example')
);
