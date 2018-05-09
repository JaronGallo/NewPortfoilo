import React, { Component } from "react";

export default class Projects extends Component{
	render() {

        function handleOcto(e) {      
            window.location.assign("/project3");
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

        function handleMongoInfo (e) {
            e.preventDefault();
            window.location.assign("/project");
            }

            function handleRail (e) {
                e.preventDefault();
                window.location.assign("/project2");
                }
		return (

            <div className="container">
                 
                <div className="row">
                
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='greenSock2' style={{ backgroundColor: 'white' }}>
                            <img className="projectImg" src="assets/img/database.jpg" style={{ width: '50%',objectFit: 'cover', height: '377px', padding: "1em" }} />

                            <div className='projectText' style={{ width: '50%', padding: "1em", float: 'right' }}>
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Forms with MongoDb</h2>
                                <p >Created a basic form that saves data to a Mongo Database and also has a clean UI.</p>
                                <p className="tag">MongoDb | UI</p>
                                <br />
                                <h3 className='projectBtn ' onClick={handleMongoInfo} style={{color: 'red', border: "2px solid red", marginLeft: '0'}}>View Project</h3>
                            </div>
                        </div>
                    </div>
                </div>
<br/>

                <div className="row">
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='greenSock3' style={{ backgroundColor: 'white' }}>
                        <img className="projectImg dontShowyet" src="assets/img/michal-parzuchowski-262751-unsplash.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: "1em" }} />
                        <div className='projectText' style={{ width: '50%', padding: "1em", float: 'left' }}>
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Denver Train Guide</h2>
                                <p >Developed a interactive train app for Denver with times, weather updates, news, and directions.</p>
                                <p className="tag">APIs | Firebase</p>
                                <br />
                                <h3 className='projectBtn' onClick={handleRail} style={{color: 'red', border: "2px solid red", marginLeft: '0'}}>View Project</h3>
                            </div>
                            <img className="dontShow" src="assets/img/michal-parzuchowski-262751-unsplash.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: "1em" }} />

                        </div>
                    </div>
                </div>
                <br/>


                <div className="row">
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='greenSock4' style={{ backgroundColor: 'white' }}>
                            <img className="projectImg" src="assets/img/parker-byrd-139348-unsplash.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: "1em" }} />

                            <div className='projectText' style={{ width: '50%', padding: "1em", float: 'right' }}>
                            <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Octothorpe (Education Tool)</h2>
                                <p >React app that takes all of the videos from my Web Development program and cuts out silence and irrelevant infomation. </p>
                                <p className="tag">User Auth | React.js</p>
                                <br />
                                <h3 className='projectBtn' onClick={handleOcto} style={{color: 'red', border: "2px solid red", marginLeft: '0'}}>View Project</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
	    }
    }