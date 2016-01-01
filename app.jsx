var React = require('react');
var ReactDOM = require('react-dom');

var MenuItem = React.createClass({
  handleClick: function(i){
    console.log("You clicked: " + this.props.id);
  },
  render: function(){
    var className = "glyphicon glyph-title"
    if(this.props.id == "AboutMe") className += " glyphicon-user";
    if(this.props.id == "Resume") className += " glyphicon-list-alt";
    if(this.props.id == "Contact") className += " glyphicon-comment";

    return(
      <div className="col-xs-4" onClick={this.props.onClick}>
        <span className={className}></span>
      </div>
    )
  }
});
var PageHTML = React.createClass({
  getInitialState: function(){
    return {bodyContent: ''};
  },
  render: function(){
    return(

      <div>
        <div id="titleContent">
          <img src="img/propic.jpg" id="propic" className="img-resposive"/>
          <h2>Hi, my name is John and I make stuff</h2>

          <div className="row">
            <MenuItem id="AboutMe" onClick={this.handleAboutClick}/>
            <MenuItem id="Resume" />
            <MenuItem id="Contact" />
          </div>
        </div>
        <div id="bodyContent">

        </div>
      </div>
    );
  },
  handleAboutClick: function(e){
    console.log("foo");

  }
});


ReactDOM.render(
  <PageHTML />,
  document.getElementById('example')
);
