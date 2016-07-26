var React = require('react');
var ReactDOM = require('react-dom');
var AboutContent = require('./js/about_content.jsx');
var ResumeContent = require('./js/resume_content.jsx');
var ContactContent = require('./js/contact_content.jsx');
var ProjectsContent = require('./js/projects_content.jsx');

var BodyContent = React.createClass({
  render: function(){
    if(this.props.status == "AboutMe")
      return (
        <AboutContent />
      );
    else if(this.props.status == "Resume")
      return (
        <ResumeContent />
      );
    else if(this.props.status == "Contact")
      return(
        <ContactContent />
      );
    else if(this.props.status == "Projects")
        return(
            <ProjectsContent />
        );
    else
      throw "Incorrect Route";
  }
});


var MenuItem = React.createClass({
  render: function(){
    var className = "glyphicon glyph-title";
    if(this.props.id == "AboutMe") className += " glyphicon-user";
    else if(this.props.id == "Resume") className += " glyphicon-briefcase";
    else if(this.props.id == "Contact") className += " glyphicon-comment";
    else if(this.props.id == "Projects") className += " glyphicon-th-list";
    else throw "Incorrect Route for MenuItem";

    return(
        <div className="col-xs-4">
          <span className={className} onClick={this.props.onClick}></span>
        </div>
    );
  }
});


var PageHTML = React.createClass({
  getInitialState: function(){
    return {status: 'Projects', bodyStyle: {height: '90vh'}, splashStyle: {}};
  },
  render: function(){
    //Prepend arguments for menuclick
    var aboutClick = this.menuClick.bind(this, 'AboutMe');
    var resumeClick = this.menuClick.bind(this, 'Resume');
    var projectsClick = this.menuClick.bind(this, "Projects");
    return(
      <div>
        <div id="titleContent">
          <div className="row" id="menuBar">
            <MenuItem id="Projects" status={this.state.status} onClick={projectsClick}/>
            <MenuItem id="AboutMe" status={this.state.status} onClick={aboutClick}/>
            <MenuItem id="Resume" status={this.state.status} onClick={resumeClick}/>
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


    $("#bodyContent").fadeOut(function(){
      this.setState({status: route});
      $("#bodyContent").fadeIn();
    }.bind(this));

    return false;
  }
});


ReactDOM.render(
  <PageHTML />,
  document.getElementById('example')
);
