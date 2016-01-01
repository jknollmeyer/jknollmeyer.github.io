var React = require('react');
var ReactDOM = require('react-dom');
var AboutContent = require('./js/about_content.jsx')
var ResumeContent = require('./js/resume_content.jsx')
var ContactContent = require('./js/contact_content.jsx')
var BodyContent = React.createClass({
  render: function(){
    if(this.props.status == "Splash")
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
  render: function(){
    var className = "glyphicon glyph-title"
    if(this.props.id == "AboutMe") className += " glyphicon-user";
    if(this.props.id == "Resume") className += " glyphicon-list-alt";
    if(this.props.id == "Contact") className += " glyphicon-comment";
    if(this.props.id == "Splash"){
      if(this.props.status == "Splash") return(<div></div>)
      className += " glyphicon-home";
    }
    if(this.props.status == "Splash")
      return(
        <div className="col-xs-4">
          <span className={className} onClick={this.props.onClick}></span>
        </div>
      )
    else
      return(
        <div className="col-xs-3">
          <span className={className} onClick={this.props.onClick}></span>
        </div>
      )
  }
});
var PageHTML = React.createClass({
  getInitialState: function(){
    return {status: 'Splash', bodyStyle: {}, splashStyle: {}};
  },
  render: function(){
    //Prepend arguments for menuclick
    var aboutClick = this.menuClick.bind(this, 'AboutMe');
    var resumeClick = this.menuClick.bind(this, 'Resume');
    var contactClick = this.menuClick.bind(this, 'Contact');
    var splashClick = this.menuClick.bind(this, 'Splash');
    return(
      <div>
        <div id="titleContent">
          <div id="splash" style={this.state.splashStyle}>
            <img src="img/propic.jpg" id="propic" className="img-resposive"/>
            <h2>Hi, my name is John and I make stuff</h2>
          </div>
          <div className="row" id="menuBar">
            <MenuItem id="Splash" status={this.state.status} onClick={splashClick}/>
            <MenuItem id="AboutMe" status={this.state.status} onClick={aboutClick}/>
            <MenuItem id="Resume" status={this.state.status} onClick={resumeClick}/>
            <MenuItem id="Contact" status={this.state.status} onClick={contactClick}/>
          </div>
        </div>
        <div id="bodyContent" style={this.state.bodyStyle}>
          <BodyContent status={this.state.status}/>
        </div>
      </div>
    );
  },
  menuClick: function(route, e){
    e.preventDefault();
    e.stopPropagation();
    $(".glyph-title").removeClass("active");
    e.target.className += " active";


    //If we are leaving the splash page
    if(this.state.status == "Splash"){
      //Change the height of the body
      this.setState({bodyStyle: {height: '100vh'}});
      //Fade the menu bar to add the home button
      $("#menuBar").fadeOut(function(){
        //Change the current route, so that the new menubar gets rendered
        this.setState({status: route});
        $("#menuBar").fadeIn(function(){
          $("html, body").animate({
            scrollTop: $('#menuBar').offset().top
          },1000);
          $('#splash').fadeOut(1000,function(){
            window.scrollTo(0,0);
          });
        });

        $("#bodyContent").fadeIn();
      }.bind(this));

    //Going to the splash
    }else if(route == "Splash"){
      $('#splash').fadeIn({
        "duration": 5000,
        "start": function(e){
          //Scroll to menubar, otherwise the screen will jump because of the
          //newly rendered splash screen at the top
          $('html, body').animate({scrollTop: $('#menuBar').offset().top}, 0);
          $('html, body').animate({scrollTop: 0}, 1000);

        }
      });
      //$("html, body").animate({scrollTop: 0},'slow');
      $('#bodyContent').fadeOut(1000, function(){
        this.setState({bodyStyle: {}, status: route});
      }.bind(this));
    }

    //between panes
    else{
      $("#bodyContent").fadeOut(function(){
        this.setState({status: route});
        $("#bodyContent").fadeIn();
      }.bind(this));
    }
    return false;
  }
});


ReactDOM.render(
  <PageHTML />,
  document.getElementById('example')
);
