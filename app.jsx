var React = require('react');
var ReactDOM = require('react-dom');
var AboutContent = require('./js/about_content.jsx')

var BodyContent = React.createClass({
  render: function(){
    if(this.props.status == "splash")
      return (
        <div></div>
      )
    if(this.props.status == "about")
      return (
        <AboutContent />
      )
    if(this.props.status == "resume")
      return (
        <span>RESUME</span>
      )
    if(this.props.status == "contact")
      return(
        <span>CONTACT</span>
      )
  }
});
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
    return {status: 'splash', bodyStyle: {}, splashStyle: {}};
  },
  render: function(){
    //Prepend arguments for menuclick
    var aboutClick = this.menuClick.bind(this, 'about');
    var resumeClick = this.menuClick.bind(this, 'resume');
    var contactClick = this.menuClick.bind(this, 'contact');
    return(
      <div>
        <div id="titleContent">
          <div id="splash" style={this.state.splashStyle}>
            <img src="img/propic.jpg" id="propic" className="img-resposive"/>
            <h2>Hi, my name is John and I make stuff</h2>
          </div>
          <div className="row" id="menuBar">
            <MenuItem id="AboutMe" onClick={aboutClick}/>
            <MenuItem id="Resume" onClick={resumeClick}/>
            <MenuItem id="Contact" onClick={contactClick}/>
          </div>
        </div>
        <div id="bodyContent" style={this.state.bodyStyle}>
          <BodyContent status={this.state.status}/>
        </div>
      </div>
    );
  },
  menuClick: function(route, e){

    this.setState({bodyStyle: {height: '100vh'}});
    $("#bodyContent").fadeOut(function(){
      this.setState({status: route});
      $("#bodyContent").fadeIn();
      $('#splash').fadeOut(2000,function(){
        window.scrollTo(0,0);
      });
    }.bind(this));
    $("html, body").animate({
      scrollTop: $('#menuBar').offset().top
    },2000);
  }
});


ReactDOM.render(
  <PageHTML />,
  document.getElementById('example')
);
