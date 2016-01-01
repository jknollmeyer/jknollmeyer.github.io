var React = require('react')
module.exports = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-xs-5">
          <div id="TechnicalSkills" className="resume-box">
            <h2>Technical Skills</h2>
              <h4>Programming Languages</h4>
              <ul>
                <li>C++</li>
                <li>C</li>
                <li>Python</li>
                <li>Java</li>
                <li>MATLAB</li>
                <li>x86 Assembly</li>
              </ul>
              <h4>Web and Software Technologies</h4>
              <ul>
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js Express</li>
                <li>Angular.js</li>
                <li>MongoDB</li>
                <li>Django</li>
              </ul>
              <h4>Hardware Technologies</h4>
              <ul>
                <li>Arduino</li>
                <li>VHDL</li>
              </ul>
              <h4>Other Skills and Backgrounds</h4>
                <ul>
                  <li>Machine Learning</li>
                  <li>Scientific Writing</li>
                  <li>Medical Imaging</li>
                </ul>
          </div>
        </div>
        <div className="col-xs-7">
          <div id="WorkExperience" className="resume-box">
            <h2>Work Experience</h2>
              <ul>
                <li>Foo</li>
                <li>Bar</li>
                <li>Baz</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
})
