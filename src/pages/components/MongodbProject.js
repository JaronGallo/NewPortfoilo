import React, { Component } from "react";

export default class MongodbProject extends Component{
	render() {
        
		return (
            <div className="container-fluid">

                <div className="row container">
                    <div className="col s12 noTop"id='' style={{ marginTop: '5em',paddingLeft: '0' }}>
                        <div className="col m12" style={{ fontWeight: "300", paddingLeft: "0" }}>
                            <h1 >Forms with MongoDb</h1>
                            <p className="tag" style={{ marginBottom: '3em',paddingLeft: '0'  }}>MongoDb | UI</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <div className="row container" >
                        <div className="col s12" style={{ marginTop: '3em',paddingLeft: '0'  }}>
                            <div id='' className="col l6 m12 s12" style={{ padding: "0 40px 0 0" }}>
                            <p className="aboutHeading">OBJECTIVE</p>
                                <p >Build an app that saves data the user enters into the form. Have a fresh user interface that works on both desktop and mobile devices.</p>
                                <br/>
                                <p className="aboutHeading" style={{marginBottom:'0'}}>CHALLENGE</p>
                                <p>Lots of challenges were involved in building this project but the largest was to make sure that the database would react with the front-end. The data inputted had to be validated before entered into the database. When the user entered in false data, such as a email address without "@", they will be prompted to enter a valid email.</p>                                
                                
                                <p>Responsiveness was important to have when the user changed the window size or was on mobile.</p>
                            <br/>
                            </div>

                            <div id='' className="col l6 m12 s12" style={{ float: "right", padding: "0 40px 0 0"  }}>
                                <p className="aboutHeading">SOLUTION</p>
                                <p>Created a form that requires First Name, Email, Password and Repeat Password. Built and styled the app using Materialize (CSS Framework) and also used media queries (Styling the site based on screen size) to make sure the user interface was clean no matter what size of screen.</p>
                                <p>Used mongo.js and mongoose.js to link my server to the database and push data if validated by schema and front-end. Made button that links to an API where the user can view or delete the database.</p>
<br/>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row container" >
                    <div className="col s12" style={{ marginTop: '3em', padding:'0' }}>
                    <img className="detailImg"src="assets/img/business-coffee-computer-374006.jpg" style={{ width: '100%', objectFit: 'cover',height:'400px'}} />
                        <div />
                        
                    </div>

                    
                    
                </div>
                
                </div>
            );
	   }
}