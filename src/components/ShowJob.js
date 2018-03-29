import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ShowJob.css';
import ApplyButton from './ApplyButton';
import Footer from './Footer';

class ShowJob extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="show-job">
                <div className="show-job-header d-flex flex-row flex-wrap justify-content-between">
                  <div className=" show-job-header-title d-flex flex-row">
                    <span><img className="img-fluid" src="/img/zenly.png" alt="Compagny logo"/></span>
                    <span>
                      <h5>Zenly</h5>
                    </span>
                  </div>
                  <div className="show-job-header-links d-flex flex-row">
                    <span className="button-container"><button className="button-secondary" href=""><Link to=""><span>Website</span></Link></button></span>
                    <span><Link to=""><i className="fa fa-linkedin"></i></Link></span>
                    <span><Link to=""><i className="fa fa-facebook"></i></Link></span>
                    <span><Link to=""><i className="fa fa-twitter"></i></Link></span>
                  </div>
                </div>
                <hr/>
                <div className="show-job-hero">
                  <h3 className="text-center">Software Engineer, Web</h3>
                  <div className="d-flex flex-row flex-wrap justify-content-center">
                    <span className="category Development">Development</span>
                    <span className="job-type"><span><i className="fa fa-clock-o"></i></span> Full Time</span>
                    <ul className="list-unstyled d-flex flex-row flex-wrap justify-content-center">
                      <li className="tag"><span><i className="fa fa-tags"></i></span>user experience</li>
                      <li className="tag"><span><i className="fa fa-tags"></i></span>front end</li>
                      <li className="tag"><span><i className="fa fa-tags"></i></span>user iterface</li>
                    </ul>
                  </div>
                </div>
                <ApplyButton />
                <div className="job-content">
                  <div className="job-description">
                      <h4>Job description</h4>
                      <hr/>
                      <div>
                        <h5><strong>About us</strong></h5>
                        <p>Zenly started in 2011 as a small team of passionate designers, engineers, and entrepreneurs gathered around the idea that frictionless location sharing is the next mobile commodity. Our R&D has brought us to release the best location sharing app in the world ;)</p>
                        <p>And now, Zenly is the mobile application that lets you instantaneously see where your friends are. We believe that making maps more social and personalised is our opportunity to improve the way people live, communicate and share moments together. Our product empowers people to find themselves, enjoy improvised moments and have fun together.</p>
                        <p>We’re looking for a Web Engineer to join us at Zenly! Working from our Paris, France headquarters, you’ll play a key role in building and shaping key features that millions of Zenlyers will use every day!</p>
                        <p>Our office is big and comfortable with a fully equipped kitchen (including unlimited snacks and drinks), rest areas and sound isolation booths. Everyone at Zenly is provided with a spacious desk and top of the line computer and phone to help you build your own workspace.</p>
                        <p>We also offer a great package to all our employees including:<br/>
                        <span style={{marginLeft: 40, display: "block"}}># Advantageous health coverage extendable to your family</span>
                        <span style={{marginLeft: 40, display: "block"}}># Public transport reimbursement</span>
                        <span style={{marginLeft: 40, display: "block"}}># Weekly lunch (and regular french pastry for breakfast!</span>
                        <span style={{marginLeft: 40, display: "block"}}># Flexible time off polic</span>
                        <span style={{marginLeft: 40, display: "block"}}># Handling of relocation/visa procedure</span>
                        </p>
                        <h5><strong>Role</strong></h5>
                        <p>As a Web Engineer, you will be responsible for architecting, developing and releasing our web applications. That include every application we do internally from Zenly app feature backend apps and visualisation systems to dedicated tools to help other squads.</p>
                        <p>Our web applications are mostly pure javascript SPAs built with React for the front-end, and either Go or NodeJS for server side backend. Some datasource include real-time stream or huge batches of data while some other experiments include GopherJS (Go transpiled to Javascript).</p>
                        <p>You will work with passionated product and engineering people to build life saving as well as growth impacting applications; targeting both all Zenly users as well as the entire Zenly team. You will ensure a high standard of coding, following best practices and continuous integration processes. In your code, you will keep our core values in mind: usability, security and customer service.</p>
                        <h5><strong>Requirements</strong></h5>
                        <span style={{marginLeft: 40, display: "block"}}># Excellent knowledge of Javascript</span>
                        <span style={{marginLeft: 40, display: "block"}}># Experience with new wave frontend libraries such as React, Ember or Angular</span>
                        <span style={{marginLeft: 40, display: "block"}}># Experience with server-side development in whichever technology (Go, Python, Ruby, Node</span>
                        <span style={{marginLeft: 40, display: "block"}}># Experience with software engineering best practices (testing, code reviews, continuous integration, design documentation…)</span>
                        <span style={{marginLeft: 40, display: "block"}}># Self-organised, proactive with ability to prioritise tasks effectively</span>
                        <h5><strong>Bonus</strong></h5>
                        <span style={{marginLeft: 40, display: "block"}}># Experience with Web Graphics API such as WebGL or its frameworks ThreeJS or LumaG</span>
                        <span style={{marginLeft: 40, display: "block"}}># Experience with Web Map libraries such as Mapbox, Tangram or Leafle</span>
                        <h5><strong>Applying</strong></h5>
                        <p>We are more interested in your experiences and projects, past and current, than your résumé. We'd rather hear about these and what you think you'll bring to the team. GitHub and Twitter usernames are also useful to share. All applications should be made in English</p>
                        <ApplyButton />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ShowJob;