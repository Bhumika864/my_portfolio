
import './skills.css';
const Skills = () => {
  return (
    <>
    <div className="skills_title">Skills </div>
    <div className='work_content'>
      
      
      <div className="both_sections">
      <div className="skills_text">
            <p><strong>Frontend Technologies:</strong> Html, Css, React.js ,Redux</p>
            <p><strong> Programming Languages: </strong>Javascript ,Python</p>
            <p><strong>Programming Tools:</strong> Git, GitHub, VS Code</p>
            <p><strong>Currently   Learning:</strong> Node.js, MongoDB, etc.</p>
        </div>
      <div className="icon">
      
        <div className="first_row">
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png"
              alt="React JS"
              height="100px"
            />
            <p>React JS</p>
          </div>
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png"
              alt="CSS"
              height="100px"
            />
            <p>CSS</p>
          </div>
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/aa1dc780814cb5c67190adc0b032bf0671309d9c-64x64.png"
              alt="Python"
              height="100px"
            />
            <p>Python</p>
          </div>
        </div>
        <div className="second_row">
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png"
              alt="JavaScript"
              height="100px"
            />
            <p>JavaScript</p>
          </div>
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png"
              alt="HTML"
              height="100px"
            />
            <p>HTML</p>
          </div>
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png"
              alt="Redux"
              height="100px"
            />
            <p>Redux</p>
          </div>
        </div>
        <div className="third_row">
          <div className="icon_item">
            <img
              src="https://cdn.sanity.io/images/soweeiig/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png"
              alt="Git"
              height="100px"
            />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Skills;



