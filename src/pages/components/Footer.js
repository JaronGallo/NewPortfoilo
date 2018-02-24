import React, { Component } from "react";

export default class Footer extends Component{
	render() {
		return (
                <div className="row" id="footer" style={{textAlign: 'center'}}>
            	
                    <div className="ui icon" data-content="Add users to your feed">
                        <img className="logosGit" src="assets/img/Github.png" />
                        <img className="logosLink" src="assets/img/Linkedin.png" />
                    </div>
                        
                </div>
                );
	        }}