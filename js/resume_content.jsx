var React = require('react')
module.exports = React.createClass({
  render: function(){
    return(
      <div className="row">
        {/*Box for skills*/}
        <div id="TechnicalSkills" className="resume-box col-sm-4 col-xs-12">
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
              <li>Scikit-learn</li>
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
                <li>Cloud Computing</li>
              </ul>
        </div>
        {/*Box for work experience */}
        <div id="WorkExperience" className="resume-box col-sm-8 col-xs-12">
          <h2>Work Experience</h2>
          <h4><span>Research Assistant at BU PEAC Lab</span>
              <span className="work-date">April 2015 - Present</span></h4>
            <ul>
              <li>Create Bash scripts to collect filesystem data from application installations from Virtual Machines in Google Compute Engine</li>
              <li>Create Python scripts for labeling experimental data using scit-kit learn</li>
              <li>Describe experimental methodology in academic research paper</li>
            </ul>
          <h4><span>Imaging R&D Intern at Neurologica</span>
              <span className="work-date">May 2014 - August 2014</span></h4>
            <ul>
              <li>Programmed a tool in C++ for predicting the level of CT Quantum Noise in water phantoms based on scan parameters and predicting parameters required to meet noise target</li>
              <li>Wrote 2 reports on experiments which tested the effect of scanner parameters on CT Quantum Noise</li>
            </ul>
          </div>
          {/* box for extracurricular activities */}
          <div id="ExtracurricularBox" className="resume-box col-sm-8 col-xs-12">
            <h2>Extracurricular Involvement</h2>
            <h4>
              <span>Microsoft Student Partner</span>
              <span className="work-date">September 2015 - Present</span>
            </h4>
            <ul>
              <li>Run workshops on-campus to educate students on Microsoft Technologies and other tech-related skills</li>
              <li>Attend hackathons and mentor hackers to develop their understanding technology</li>
            </ul>
            <h4>
                <span>Assistant Director of BostonHacks</span>
                <span className="work-date">April 2015 - Present</span>
            </h4>
            <ul>
              <li>Reserve venue spaces for 400 hackers to cover 24 hour hackathon</li>
              <li>Solicit recruiters and industry representatives to meet obtain sponsorhip for event</li>
              <li>Move supplies, set up props & decorations, and perform other necessary handywork in high stress environment during the 24hr event</li>
            </ul>
            <h4>
              <span>Treasurer of MakeBU</span>
              <span className="work-date">May 2015 - Present</span>
            </h4>
            <ul>
              <li>Filed and submitted funding requests to Student Activities Organization to cover ~$70,000 hackathon budget</li>
              <li>Attend and invite guest speakers to MakeBU weekly hack nights</li>
            </ul>

          </div>
          {/*box for college education */}
          <div id="EducationBox" className="resume-box col-xs-12">
            <h2>Education</h2>
            <h4>
              <span>Boston University</span>
              <span className="work-date">Fall 2014 - Spring 2017 (expected) </span>
            <br />
              <span>B.S. Computer Engineering, Technology Innovation Concentration</span>
              <span className="work-date">3.50 GPA</span>
            </h4>


          </div>
          <div id="footer" className="col-xs-12">
            Created using <a href="http://getbootstrap.com/">Bootstrap</a> and <a href="https://facebook.github.io/react/">React</a>. Updated January 2016.
          </div>
      </div>
    )
  }
})
