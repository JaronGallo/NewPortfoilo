import React, { Component } from "react";

class Home extends Component{
	render() {

		return (
<div className="container-fluid">

<div className="ui modal">
  <i className="close icon"></i>
  <div className="header">
    Modal Title
  </div>
  <div className="image content">
    <div className="image">
      An image can appear on left or an icon
    </div>
    <div className="description">
      A description can appear on the right
    </div>
  </div>
  <div className="actions">
    <div className="ui button">Cancel</div>
    <div className="ui button">OK</div>
  </div>
</div>

    <div className="row" id="namePlate" style={{textAlign: 'center'}}>
        <h1 className="name">Jaron Gallo</h1>

        <div class="ui text shape center">
            <div class="sides">

                <p class="active header side">Built on React.js</p>
                <p class=" header side">Enjoy</p>

            </div>
        </div>
    </div>


    <div className="row">
        <div className="container" id="exp">
            <h2 style={{textAlign: 'center'}}>Education</h2>
            <h3>Certificate, University of Denver Coding Bootcamp --- 2018</h3>
            <h3>Bachelors of Science, Marketing --- 2016</h3>
                    <div className="center">
                    <button className="ui button teal create_btn big" type="button" id="test" style={{marginBottom: '1em'}}>Look at Resume</button>
                    <br />
                    <button className="ui button teal big" type="button" id="docs">View on Google Docs</button>
                          <div className="ui modal test">
                      <i className="close icon"></i>
                      <div className="header">
                        My Resume
                      </div>
                      <div className="content" style={{height: '530px'}}>
                        <embed src="Resume.pdf" type="application/pdf" style={{width: '100%',height: '100%',border: 'none'}}>
                          </embed>
                        
                      </div>
                      <div className="actions">
                        <div className="ui positive right labeled icon button" style={{marginBottom:"1em"}}>
                          All Done
                          <i className="checkmark icon"></i>
                        </div>
                      </div>
                    </div>
                    </div>




        </div>
    </div>
    <div class="ui divider"></div>
    <div className="row">
        <div className="container">
            <h2 style={{textAlign: 'center'}}>Goals</h2>
            <h3>1) To be part of a team that innovates and sets high but realistic expections.</h3>
            <h3>2) Expand my knowledge and skills by learning new programming languages.</h3>
            <h3>3) Be known as a leader.</h3>
        </div>
    </div>



    <div className="container-fluid ui inverted segment" style={{textAlign: 'center'}}>

        <h2 style={{textAlign: 'center'}}>Skills</h2>
        <div class="ui divider"></div>

        <div className="row">
            <div className="col s6">
                <p>HTML</p>
                <div className="ui red  progress" data-percent="99" id="htmlBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <p>CSS</p>
                <div className="ui orange  progress" data-percent="95" id="cssBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="col s6">
                <p>JavaScript</p>
                <div className="ui yellow  progress" data-percent="85" id="jsBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <p>jQuery</p>
                <div className="ui blue progress" data-percent="90" id="jqueryBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="col s6">
                <p>React.js</p>
                <div className="ui green inverted progress" data-percent="80" id="reactBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <p>MySql</p>
                <div className="ui teal progress" data-percent="70" id="myBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="col s6">
                <p>MongoDB</p>
                <div className="ui blue inverted progress" data-percent="85" id="mongoBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <p>Express</p>
                <div className="ui red progress" data-percent="90" id="expressBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="col s6">
                <p>User Auth</p>
                <div className="ui purple inverted progress" data-percent="80" id="authBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <p>Testing</p>
                <div className="ui pink inverted progress" data-percent="75" id="testingBar">
                    <div className="bar">
                        <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <br />
    <div className="container">

        <div className="row">
            <h2 style={{textAlign: 'center'}}>Projects</h2>
            <hr />
            <br />

            <div className="col s12 m4">
                <div className="ui special cards center">

                    <div className="ui raised link centered card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button" id="btn1">View Code</div>
                                        <br /><br />
                                        <div className="ui inverted button" id="btn1Heroku">View on Heroku</div>
                                    </div>
                                </div>
                            </div>
                            <img src="/octo.gif" />
                        </div>
                        <div className="content">
                            <a className="header">Octothorpe</a>
                            <div className="meta">
                                <span className="date">Educational Coding Videos</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

<div className="col s12 m4">
                <div className="ui special cards center">

                    <div className="ui raised link centered card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                       <div className="ui inverted button" id="btn4">View Code</div>
                                        <br /><br />
                                        <div className="ui inverted button" id="btn4Github">View on Github</div>
                                    </div>
                                </div>
                            </div>
                            <img src="/train.jpg" />
                        </div>
                        <div className="content">
                            <a className="header">Train Guide</a>
                            <div className="meta">
                                <span className="date">Train Group Project</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div className="col s12 m4">
                <div className="ui special cards center">

                    <div className=" ui raised link centered card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button" id="btn2">View Code</div>
                                        <br /> <br />
                                        <div className="ui inverted button" id="btn2Github">View on Github</div>
                                    </div>
                                </div>
                            </div>
                            <img src="/matching.jpg" />
                        </div>
                        <div className="content">
                            <a className="header">Matching Game</a>
                            <div className="meta">
                                <span className="date">Built in React.js</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            




        </div>

        <hr />
        <div className="row">
            <br />

            <div className="col s12 m4">
                <div className="ui special cards center">

                    <div className="ui raised link centered card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button" id="btn5">View Code</div>
                                        <br /> <br />
                                        <div className="ui inverted button" id="btn5Github">View on Github</div>
                                    </div>
                                </div>
                            </div>
                            <img src="/gif.gif" />
                        </div>
                        <div className="content">
                            <a className="header">GiphyAPI</a>
                            <div className="meta">
                                <span className="date">Using API calls</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
<div className="col s12 m4">
                <div className="ui special cards center">

                    <div className=" ui raised link centered card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                         <div className="ui inverted button" id="btn3">View Code</div>
                                       <br /> <br />
                                    </div>
                                </div>
                            </div>
                            <img src="/ai.jpg" />
                        </div>
                        <div className="content">
                            <a className="header">LIRI Bot</a>
                            <div className="meta">
                                <span className="date">Kinda like Siri but for Node.js</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

           
            <div className="col s12 m4">
                <div className="ui special cards center">

                    <div className="ui raised link centered card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    
                                </div>
                            </div>
                            <img src="/soon.jpg" />
                        </div>
                        <div className="content">
                            <a className="header">In Progress</a>
                            <div className="meta">
                                <span className="date">Coming soon...</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            
           


            


        </div>
    </div>

    <div className="row" id="footer" style={{textAlign: 'center'}}>
    	
            <div className="ui icon" data-content="Add users to your feed">
                <img className="logosGit" src="/Github.png" />
                <img className="logosLink" src="/Linkedin.png" />
            </div>
            
     	
    </div>


</div>
		);
	}
}
export default Home;



