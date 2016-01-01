var React = require('react');
var ReactDOM = require('react-dom');
var AboutContent = require('./js/about_content.jsx')
var ResumeContent = require('./js/resume_content.jsx')
var ContactContent = require('./js/contact_content.jsx')
var BodyContent = React.createClass({
  render: function(){
    if(this.props.status == "splash")
      return (
        <div></div>
      )
    if(this.props.status == "AboutMe")
      return (
        <AboutContent />
      )
    if(this.props.status == "Resume")
      return (
        <ResumeContent />
      )
    if(this.props.status == "Contact")
      return(
        <ContactContent />
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
      <div className="col-xs-4">
        <span className={className} onClick={this.props.onClick}></span>
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
    var aboutClick = this.menuClick.bind(this, 'AboutMe');
    var resumeClick = this.menuClick.bind(this, 'Resume');
    var contactClick = this.menuClick.bind(this, 'Contact');
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
    $(".glyph-title").removeClass("active");
    e.target.className += " active"
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
