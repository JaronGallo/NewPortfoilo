import React, { Component } from "react";

export default class Projects extends Component{
	render() {

        function handleOcto(e) {
       
                    
        window.open('https://github.com/JaronGallo/Octothorpe_v2');
        }

        function handleTrain(e) {
        
                    
        window.open('https://github.com/SummitMedia1/trainstationguide');

        }

        function handleReact(e) {
        
                    
    window.open('https://github.com/JaronGallo/react-game');
        }

        function handleGif(e) {
        
                    
        window.open('https://github.com/JaronGallo/GiphyApi');
        }

        function handleLiri(e) {
        
                    
window.open('https://github.com/JaronGallo/LIRI_Bot');        }

        




		return (

            <div className="container">

                    <div className="row">
                        <h2 style={{textAlign: 'center'}}>Projects</h2>
                        <hr />
                        <br />

                        <div className="col s4 m4">
                            <div className="ui special cards center hvr-float-shadow" onClick={handleOcto}>
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
                            <div className="ui special cards center hvr-float-shadow" onClick={handleTrain}>
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
                            <div className="ui special cards center hvr-float-shadow" onClick={handleReact}>

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
                                        <img src="assets/img/matching.jpg" />
                                    </div>
                                    <div className="content">
                                        <a className="header">Matching Game</a>
                                        <div className="meta">
                                            <span className="date">React.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">
                        

                        <div className="col s4 m4">
                            <div className="ui special cards center hvr-float-shadow" onClick={handleGif}>
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
                            <div className="ui special cards center hvr-float-shadow" onClick={handleLiri}>
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
                            <div className="ui special cards center hvr-float-shadow">

                                <div className="ui raised link centered card">
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