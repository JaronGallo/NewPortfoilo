import React, { Component } from "react";

export default class Projects extends Component{
	render() {

        function handleOcto(e) {      
        window.open('https://github.com/JaronGallo/Octothorpe_v2');
        }

        function handleTrain(e) {  
        window.open('https://github.com/SummitMedia1/trainstationguide');

        }

        function handleForms(e) {        
        window.open('https://desolate-sea-56537.herokuapp.com/');
        }

        function handleGif(e) {
        window.open('https://github.com/JaronGallo/GiphyApi');
        }

        function handleLiri(e) {   
        window.open('https://github.com/JaronGallo/LIRI_Bot');
        }
		return (

            <div className="container">

                    <div className="row">
                        <h2 style={{textAlign: 'center'}}>Projects</h2>
                        <hr />
                        <br />

                        <div className="col s4 m4">
                            <div className="ui special cards center " onClick={handleOcto}>
                                <div className="ui raised link centered card hvr-float-shadow">
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
                                        <img src="assets/img/octo.gif" />
                                    </div>
                                    <div className="content">
                                        <a className="header">Octothorpe</a>
                                        <div className="meta">
                                            <span className="date">Group Project</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s4 m4">
                            <div className="ui special cards center" onClick={handleTrain}>
                                <div className="ui raised link centered card hvr-float-shadow">
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
                                        <img src="assets/img/train.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">Train Guide</a>
                                        <div className="meta">
                                            <span className="date">Group Project</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s4 m4">
                            <div className="ui special cards center" onClick={handleForms}>

                                <div className=" ui raised link centered card hvr-float-shadow">
                                    <div className="blurring dimmable image">
                                        <div className="ui dimmer">
                                            <div className="content">
                                                <div className="center">
                                                    <div className="ui inverted button" id="btn2">View Code</div>
                                                    <br /> <br />
                                                    <div className="ui inverted button" id="btn2Heroku">View on Heroku</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="assets/img/database.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">MongoDb</a>
                                        <div className="meta">
                                            <span className="date">Using API</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br className="dontShow"/>
                    
                    <div className="row">
                        
                        <div className="col s4 m4">
                            <div className="ui special cards center" onClick={handleGif}>
                                <div className="ui raised link centered card hvr-float-shadow">
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
                                        <img src="assets/img/gif.gif" />
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

                        <div className="col s4 m4">
                            <div className="ui special cards center" onClick={handleLiri}>
                                <div className=" ui raised link centered card hvr-float-shadow">
                                    <div className="blurring dimmable image">
                                        <div className="ui dimmer">
                                            <div className="content">
                                                <div className="center">
                                                     <div className="ui inverted button" id="btn3">View Code</div>
                                                   <br /> <br />
                                                </div>
                                            </div>
                                        </div>
                                        <img src="assets/img/ai.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">LIRI Bot</a>
                                        <div className="meta">
                                            <span className="date ">Siri for Node.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s4 m4">
                            <div className="ui special cards center">

                                <div className="ui raised link centered card hvr-float-shadow">
                                    <div className="blurring dimmable image">
                                        <div className="ui dimmer">
                                            <div className="content">
                                            </div>
                                        </div>
                                        <img src="assets/img/soon.jpg" />
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
            );
	    }
    }