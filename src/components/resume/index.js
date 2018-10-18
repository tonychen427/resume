import React from 'react';
import './styles/index.css';
class Resume extends React.Component {
  
  constructor() {
      super();
      this.state = {};
  }
  render() {
    return (
      <div>
         <div className="main">
              <div className="personal-info-block">
                <div className="text-block">
                    <div className="name">Tony Chen</div>
                    <div className="current-position setting--primary-text">Software Engineer</div>
                    <div className="contacts">
                      <div className="city">California, 95131, USA</div>
                    </div>
                </div>
              </div>
              <div className="experience-group">
                <div className="group-title">
                    <div className="group-title-icon profile"></div>
                    Superior Applications Development
                </div>
                <div className="experience-item">
                    <div className="item-description">
                      <p>Highly Skilled in designing, coding, and testing innovative and effective software, User interface(UI), and e-commerce solutions. Strong project leader accomplished in directing cradle-to-grave software developer life cycle( SDLC). Proficient in industry dominant languageds, methodologies, standards, and the best practices, Superior planner and proritlier with a track record for on-time project delivery.</p>
                      <p>Seeking a software development position that demands utilization of my knowledge and skills. I have years experience in both development and research positions. I create software with user in mind. I understand the importance of maintainable source code &nbsp;and I also constantly learning new technologies.</p>
                    </div>
                </div>
              </div>
              <div className="experience-group">
                <div className="group-title">
                    <div className="group-title-icon work"></div>
                    Career Success
                </div>
                <div className="experience-item">
                    <div className="item-title">Software Engineer at  8x8 Inc., San Jose</div>
                    <div className="item-caption setting--primary-text">October 2015&nbsp;&nbsp;–&nbsp;&nbsp;2018</div>
                    <div className="item-description">
                      <ul>
                          <li>Leveraged ReactJS and Electron to build presentation layer for cross-platform telephony / chat desktop applications</li>
                          <li>Experienced in React JS and working with Redux architecture.&nbsp;</li>
                          <li>Experienced in developing React components. Used Axios with ReactJS for making AJAX Calls. Worked on Webpack for build and webpack-dev-server a server.&nbsp;</li>
                          <li>Design reusable user interface components in ReactJS and Javascript ES6, Managed application state using Redux</li>
                          <li>Write unit test in Jest and Enzyme to save development efforts</li>
                          <li>Contribute in continuous integration and continuous deployment making pull request using GitLab and Jenkins</li>
                          <li>Working in Agile Methodology and team Scrum, and work with story task</li>
                          <li>Ability and experience to work in a critical, dynamic and challenging environment.</li>
                          <li>Excellent understanding of system design and analysis concepts.</li>
                          <li>Document work using self documenting technique.</li>
                      </ul>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="item-title">Software Engineer at  Mobile Programming LLC.</div>
                    <div className="item-caption setting--primary-text">October 2005&nbsp;&nbsp;–&nbsp;&nbsp;October 2015</div>
                    <div className="item-description">
                      <p><strong>A-G Software &amp; Technology, Inc. Ontario, California &nbsp;</strong></p>
                      <p><strong>ASP.NET C# / MVC / IOC/ JQuery / KnockoutJS</strong></p>
                      <ul>
                          <li>Resharper, Ninject, Nunit, LINQ, and Design Patterns.</li>
                          <li>Using best practices, integrated SAP BusinessObjects (.NET 3.5) with ASP.NET MVC 3 (.NET 4.0).</li>
                          <li>Using Dependency Injection for software design pattern.</li>
                          <li>Create user screens from design comps following project style guidelines.</li>
                          <li>Create and unit test intricate client side interactions with jQuery and KnockoutJS(MVVM)/DurandalJS(SPA).</li>
                          <li>Create Mobile Site , using AngularJS (SPA )</li>
                          <li>Using Bootstrap do developer a responsive mobile website.</li>
                          <li>Develop complex MVC Controller, ViewModels and Helper methods linked to backend database.</li>
                          <li>Developed deep understanding of NHibernate configuration and usage.</li>
                          <li>Utilized Cassette for combining and optimizing CSS and JavaScript files.</li>
                          <li>Attend design meetings and provide feedback based on professional experience.</li>
                          <li>Provided mentorship, training and resources to team members.</li>
                      </ul>
                      <p><strong>Prediction Science (ASP.NET C# ) Irvine, California&nbsp;</strong></p>
                      <ul>
                          <li>Developing code using ASP.net and MS-SQL.</li>
                          <li>Working with XML, SOAP, and Web Services&nbsp;</li>
                          <li>Proficient in JavaScript/AJAX&nbsp;</li>
                          <li>Create system design documents and devise an implementation strategy for the projects.</li>
                          <li>Structure and view data online via the web.&nbsp;</li>
                          <li>Developed and tested projects according to specifications.</li>
                      </ul>
                      <p><strong>AVM LP (ASP.NET C# / AJAX) Boca Raton, Florida</strong></p>
                      <ul>
                          <li>Building, deploying, and managing enterprise Web Portal Content Management.</li>
                          <li>Create Custom Chart – Pie Chart, Line Chart, and Bar Chart. &nbsp;</li>
                          <li>Testify the functionality of the Web Product and helped overcome problems regarding UI</li>
                          <li>Web applications written primarily in ASP.NET C# 3.5 / 4.0</li>
                          <li>Applied knowledge of prototype process design and usability process test.</li>
                          <li>Recognize the business objectives and constraints and plan accordingly</li>
                          <li>Participate in all phases of projects, from requirements gathering &amp; estimating to deployment</li>
                          <li>Experienced the development and implementation of user interface for commercial web-based</li>
                      </ul>
                      <p><strong>Four Seasons Sunrooms (className ASP / ASP.NET / AJAX) Long Island, NY&nbsp;</strong></p>
                      <ul>
                          <li>User Interface presentation using Photoshop and cascading style sheet <strong>CSS</strong>.&nbsp;</li>
                          <li>Designed database schema</li>
                          <li>Intranet and Website Maintenance and Updates&nbsp;</li>
                          <li>Translating business requirements into technical architecture and specification&nbsp;</li>
                          <li>Interacting with a team of developers&nbsp;</li>
                          <li>Documenting development processes, methodology and standards&nbsp;</li>
                          <li>Communicating with clients and vendors</li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className="experience-group">
                <div className="group-title">
                    <div className="group-title-icon education"></div>
                    Education
                </div>
                <div className="experience-item">
                    <div className="item-title">Bachelor of Art:  Computer Science, University of New York, New York</div>
                    <div className="item-caption setting--primary-text">October 1998&nbsp;&nbsp;–&nbsp;&nbsp;October 2002</div>
                    <div className="item-description">
                      <p></p>
                    </div>
                </div>
              </div>
          </div>
          <div className="aside">
              <div className="aside-group details">
                <div className="title">Details</div>
                <div className="section">
                    <div className="text">2014 Nunes Dr, California, 95131, USA</div>
                    <div className="text">561-901-5698</div>
                    <div className="text setting--primary-text">tchen427@gmail.com</div>
                </div>
                <div className="section">
                    <div className="label">Nationality</div>
                    <div className="text">Chinese, Asian</div>
                </div>
              </div>
              <div className="aside-group">
                <div className="title with-icon">
                    <div className="title-icon skills"></div>
                    Skills
                </div>
                <div className="section">
                    <div className="text">ReactJS / Redux</div>
                    <div className="progress">
                      <div className="progress-inner setting--primary-background"></div>
                    </div>
                    <div className="text">Javascript / ES5 / ES6</div>
                    <div className="progress">
                      <div className="progress-inner setting--primary-background"></div>
                    </div>
                    <div className="text">CSS / Sass / Stylus</div>
                    <div className="progress">
                      <div className="progress-inner setting--primary-background"></div>
                    </div>
                    <div className="text">NodeJS / npm / </div>
                    <div className="progress">
                      <div className="progress-inner setting--primary-background"></div>
                    </div>
                    <div className="text">Webpack / Gulp / Grant</div>
                    <div className="progress">
                      <div className="progress-inner setting--primary-background"></div>
                    </div>
                    <div className="text">Gitlab/ Github</div>
                    <div className="progress">
                      <div className="progress-inner setting--primary-background"></div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Resume;
