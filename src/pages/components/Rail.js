import React, { Component } from "react";

export default class Rail extends Component{
	render() {
		return (
            <div className="container-fluid">

                <div className="row container">
                    <div className="col s12 noTop" style={{ marginTop: '5em',paddingLeft: '0' }}>
                        <div className="col m12" id="" style={{ fontWeight: "300", paddingLeft: "0" }}>
                            <h1 >Denver Train Guide</h1>
                            <p className="tag" style={{ marginBottom: '3em',paddingLeft: '0'  }}>MongoDb | UI</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <div className="row container" >
                        <div className="col s12" style={{ marginTop: '3em',paddingLeft: '0'  }}>
                            <div id="" className="col l6 m12 s12" style={{ padding: "0 40px 0 0"  }}>
                            <p className="aboutHeading">OBJECTIVE</p>
                                <p>A group project where my focus was on creating a page that uses Google Maps API to find current location, add markers to each rail station, and provide a link for directions.</p>
                                <br/>
                                <p className="aboutHeading" style={{marginBottom:'0'}}>CHALLENGE</p>
                                <p>Google Maps API was the hardest feat. A week prior I just learned about using APIs so learning a brand new API was difficult. Through trial and error I learned how to utilize Google Maps API.</p>
                                
                                <br/>
                            </div>

                            <div id="" className="col l6 m12 s12" style={{ float: "right",padding: "0 40px 0 0"  }}>
                                <p className="aboutHeading">SOLUTION</p>
                                <p>Scrolling down the main page, the button that says, "Where am I?." This links to my part of the group project.</p>
                                <p>Google Maps intergraded within the page that first asks permission if user will allow app to see location. After agreeing, an alert shows where you are compared to the custom markers of each rail station. When clicked, the markers shows the name of station, what lines travel there, and a link to Google Maps to get directions straight from your location.</p>
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
                
                </div>
            );
	   }
}