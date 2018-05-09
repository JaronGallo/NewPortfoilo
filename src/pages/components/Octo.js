import React, { Component } from "react";

export default class Octo extends Component{
	render() {
		return (
            <div className="container-fluid">

                <div className="row container">
                    <div className="col s12 noTop" style={{ marginTop: '5em',paddingLeft: '0' }}>
                        <div className="col  m12" id="greenSock2" style={{ fontWeight: "300", paddingLeft: "0" }}>
                            <h1 >Octothorpe</h1>
                            <p className="tag" style={{ marginBottom: '3em',paddingLeft: '0'  }}>User Auth | React.js</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <div className="row container" >
                        <div className="col s12" style={{ marginTop: '3em',paddingLeft: '0'  }}>
                            <div className="col l6 m12 s12"id="greenSock4" style={{ paddingLeft: "0" }}>
                            <p className="aboutHeading">OBJECTIVE</p>
                            <p>Implement user authentication using Google and Facebook into our final group project. After being authenticated, routing the user to our page with the videos</p>
                                <br/>
                                <p className="aboutHeading" style={{marginBottom:'0'}}>CHALLENGE</p>
                                <p>Given a 4 week window to finish the project, I knew how to use Facebook and Google authentication but not in React. I first built the authentication using regular JavaScript but had a hard time getting it to connect to our React site. I ended up having to re-code the whole thing in order to be compatible. </p>
                               <br/>
                                
                                
                            
                            </div>

                            <div id="greenSock3"className="col l6 m12 s12" style={{ float: "right", padding: "0" }}>
                                <p className="aboutHeading">SOLUTION</p>
                                    <p>A simple landing page which asks the user to sign in using either Facebook or Google. Once they sign in, they are sent to a page with a list of videos that were hand edited to get rid of unimportant info.</p>
                             <p>With good communication and team work we were able to put all of our parts together fairly easy but video list not complete.</p>
                             <br/>
                             </div>
                        </div>
                    </div>
                </div>


                <div className="row container" >
                    <div className="col s12" style={{ marginTop: '3em', padding:'0' }}>
                    <img className="detailImg" src="assets/img/business-coffee-computer-374006.jpg" style={{ width: '100%', objectFit: 'cover',height:'400px'}} />
                        <div />
                        
                    </div>

                    
                    
                </div>
                <div className="row container" >
                    <div className="col s12" style={{ padding:'0' }}>
                    <img className="detailImg" src="assets/img/business-cellphone-codes-92904.jpg" style={{ width: '50%',  objectFit: 'cover',height:'350px',padding:'0 1em 0  0'}} />
                    <img className="detailImg" src="assets/img/codes-coding-computer-247791.jpg" style={{ width: '50%', objectFit: 'cover',height:'350px',padding:'0 0 0 1em', float: 'right'}} />
                    <br/>
                    <div />
                        
                    </div>

                    
                    
                </div>
                </div>
            );
	   }
}