var React = require('react');
module.exports = React.createClass({
  render: function(){
    return(
      <div style={{fontSize: '16pt'}}>
        <h2 style={{color: '#3399ff'}}>My name is John, I'm an asipring software developer, currently studying Computer Engineering at Boston University</h2>
        <br/>
        <p>I've been enthralled by computer technology ever since I started breaking down and assembling PC's in grade school. I've built on this with high school and college computer engineering classes, and love building software and hardware for just for fun.</p>
        <br />
        <p>What have I been doing in college you ask?</p>
          <ul>
            <li>Building cool projects at various hackathons</li>
            <li>Running BostonHacks at BU</li>
            <li>Hanging out at MakeBU's Hack Nights</li>
            <li>Coding some side projects</li>
            <li>Performing research in one of BU's labs</li>
          </ul>
        <br />
        <p>When I'm not occupied with those, I'm usually running along the Esplanade, sailing on the Charles, and playing basketball at FitRec</p>

        <h2 style={{color: '#3399ff'}}>Where you can find me</h2>
        <p><a style={{color: "white" }} href="https://github.com/jknollmeyer">
          GitHub <img src="img/github2.png" />

        </a></p>
      <p><a href="http://www.linkedin.com/in/jknollmeyer" style={{color: "white"}}>
          LinkedIn <img src="img/linkedin.png"/>
      </a></p>
      </div>
    )
  }
});
