import React, { Component } from "react";

export default class Projects extends Component{
	render() {

        function handleOcto(e) {      
            window.location.assign("/project3");
        }

        function handleTrain(e) {  
        window.open('https://github.com/SummitMedia1/trainstationguide');

        }
        function handleNexter(e) {  
            window.open('https://nexter-jarongallo.herokuapp.com/');
    
            }
        function handleNatours(e) {  
            window.open('https://natours-jarongallo.herokuapp.com/');
    
            }
            function handleTrillo(e) {  
                window.open('https://trillo-jarongallo.herokuapp.com/');
        
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
                        <div className="col s12 zoom" id='' style={{ backgroundColor: 'white' }}>
                        <img className="projectImg dontShowyet" src="assets/img/house-4.jpeg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0' }} />
                        <div className='projectText' style={{ width: '50%', padding: "1em", float: 'left' }}>
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Nexter</h2>
                                <p>Landing page for a realtors site, no Bootstrap, just HTML and CSS!</p>
                                <p className="tag">CSS Grid | Sass</p>
                                <br />
                                <h3 className='projectBtn borderBtn' onClick={handleNexter} style={{color: '#B52637', border: "2px solid #B52637", marginLeft: '0'}}>View Project</h3>
                            </div>
                            <img className="dontShow" src="assets/img/house-4.jpeg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0'  }} />

                        </div>
                    </div>
                </div>

            <br/>
            <div className="row">
                
                <div className="col s12"  >
                    <div className="col s12 zoom" id='' style={{ backgroundColor: 'white' }}>
                        <img className="projectImg" src="assets/img/hotel-2.jpg" style={{ width: '50%',objectFit: 'cover', height: '377px', padding: '10.5px 0 7px 0' }} />

                        <div className='projectText' style={{ width: '50%', padding: "1em", float: 'right' }}>
                            <br className='dontShow' />
                            <br className='dontShow' />
                            <br className='dontShow' />
                            <h2>Trillo</h2>
                            <p >Landing page for fake company using flexbox CSS, just HTML and CSS!</p>
                            <p className="tag">CSS | Flexbox</p>
                            <br />
                            <h3 className='projectBtn borderBtn' onClick={handleTrillo} style={{color: '#B52637', border: "2px solid #B52637", marginLeft: '0'}}>View Project</h3>
                        </div>
                    </div>
                </div>
            </div>
<br/>
                  <div className="row">
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='' style={{ backgroundColor: 'white' }}>
                        <img className="projectImg dontShowyet" src="assets/img/hero-small.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0' }} />
                        <div className='projectText' style={{ width: '50%', padding: "1em", float: 'left' }}>
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Natours</h2>
                                <p >Learned from course called Advanced CSS and Sass, no Bootstrap, just HTML and CSS!</p>
                                <p className="tag">CSS | Sass</p>
                                <br />
                                <h3 className='projectBtn borderBtn' onClick={handleNatours} style={{color: '#B52637', border: "2px solid #B52637", marginLeft: '0'}}>View Project</h3>
                            </div>
                            <img className="dontShow" src="assets/img/hero-small.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0'  }} />

                        </div>
                    </div>
                </div>
                <br/>

                <div className="row">
                
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='' style={{ backgroundColor: 'white' }}>
                            <img className="projectImg" src="assets/img/database.jpg" style={{ width: '50%',objectFit: 'cover', height: '377px', padding: '10.5px 0 7px 0' }} />

                            <div className='projectText' style={{ width: '50%', padding: "1em", float: 'right' }}>
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Forms with MongoDb</h2>
                                <p >Created a basic form that saves data to a Mongo Database and also has a clean UI.</p>
                                <p className="tag">MongoDb | UI</p>
                                <br />
                                <h3 className='projectBtn borderBtn' onClick={handleMongoInfo} style={{color: '#B52637', border: "2px solid #B52637", marginLeft: '0'}}>View Project</h3>
                            </div>
                        </div>
                    </div>
                </div>
<br/>

                <div className="row">
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='' style={{ backgroundColor: 'white' }}>
                        <img className="projectImg dontShowyet" src="assets/img/michal-parzuchowski-262751-unsplash.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0' }} />
                        <div className='projectText' style={{ width: '50%', padding: "1em", float: 'left' }}>
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Denver Train Guide</h2>
                                <p >Developed a interactive train app for Denver with times, weather updates, news, and directions.</p>
                                <p className="tag">APIs | Firebase</p>
                                <br />
                                <h3 className='projectBtn borderBtn' onClick={handleRail} style={{color: '#B52637', border: "2px solid #B52637", marginLeft: '0'}}>View Project</h3>
                            </div>
                            <img className="dontShow" src="assets/img/michal-parzuchowski-262751-unsplash.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0'  }} />

                        </div>
                    </div>
                </div>
                <br/>


                <div className="row">
                    <div className="col s12"  >
                        <div className="col s12 zoom" id='' style={{ backgroundColor: 'white' }}>
                            <img className="projectImg" src="assets/img/parker-byrd-139348-unsplash.jpg" style={{objectFit: 'cover', width: '50%', height: '377px', padding: '10.5px 0 7px 0'  }} />

                            <div className='projectText' style={{ width: '50%', padding: "1em", float: 'right' }}>
                            <br className='dontShow' />
                                <br className='dontShow' />
                                <br className='dontShow' />
                                <h2>Octothorpe (Education Tool)</h2>
                                <p >React app that takes all of the videos from my Web Development program and cuts out silence and irrelevant infomation. </p>
                                <p className="tag">User Auth | React.js</p>
                                <br />
                                <h3 className='projectBtn borderBtn' onClick={handleOcto} style={{color: '#B52637', border: "2px solid #B52637", marginLeft: '0'}}>View Project</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            );
	    }
    }