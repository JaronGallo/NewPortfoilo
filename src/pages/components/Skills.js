import React, { Component } from "react";

export default class Skills extends Component{
	render() {
		return (
            <div className="container-fluid"style={{backgroundColor: 'white', width: '100%'}}>

            <div className="row container" >
                    <div className="col s12" style={{ padding: '0',height:'10px' }}>
                        <div  className="col l8 m6 s12" style={{ margin: '2em 0 2em 0', padding: '0 8em 0 0', float: 'left' }} >
                        <p  className="aboutHeading">ABOUT ME</p>
                        </div>
                        <div className="col l2 m6 s12 dontShow2" style={{ margin: '2em 0 2em 0', padding: '0 5em 0 0', float: 'left' }} >
                            <p  className="aboutHeading">SKILLS</p>
                                
                        </div>
                    </div>
            </div>

                <div className="row container" id='greenSock4' >
                    <div className="col s12" style={{ padding: '0' }}>
                        <div className="col l8 m6 s12 aboutRow" style={{ margin: '2em 0 3em 0', padding: '1em 10em 0 0', float: 'left' }} >
                            
                            <p className='aboutText'>Web Development doesn't seem like work to me. I truly enjoy every second of coding a website which looks great and gives the user a unqiue experience. I finished my degree in marketing at Metropolitan State University of Denver. A year later I got a Web Development certificate at University of Denver.</p>
                            <br />
                            <p className='aboutText'>Today I am currently looking for a position at a company where I can showcase my skills in both front-end and back-end development.</p>
                        </div>
                        <div className="col l2 m6 s12 dontShowyet2" style={{ margin: '2em 0 2em 0', padding: '0 5em 0 0', float: 'left' }} >
                            <p className="aboutHeading">SKILLS</p>
                                
                        </div>
                        <div className="col l2 m3 s6 noMargin" style={{ margin: '2em 0 2em 0', padding: '1em 5em 0 0', float: 'left' }} >
                            <div className="skills "id='greenSock3'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>jQuery</p>
                                <p>React.js</p>
                                </div>
                        </div>
                        <div className="col l2 m3 s6 noMargin" style={{ margin: '2em 0 2em 0', padding: '1em 2em 0 0', float: 'left' }} >
                        <div className="skills" id='greenSock2'>
                                <p>MySql</p>
                                <p>MongoDB</p>
                                <p>Express</p>
                                <p>User Auth</p>
                                <p>Testing</p>
                                </div>
                        </div>
                    </div>
                    
                </div>



         <div className="push"></div>
        </div>

            );
	    }
}