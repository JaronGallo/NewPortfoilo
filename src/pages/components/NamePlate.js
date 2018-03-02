import React, { Component } from "react";

export default class NamePlate extends Component{
	render() {

        
        

        function handleResume(e) {
        e.preventDefault();
                    
        window.open('assets/img/Resume.pdf');
        }     

        function handleGit(e) {
        e.preventDefault();
                    
        window.open('https://github.com/JaronGallo');
        }     



		return (
            <div className="container-fluid ">
            <div className="row " id="namePlate" style={{textAlign: 'center'}}>
                <h1 className="name ">Jaron Gallo</h1>
                <p className="tag " style={{textAlign: 'center'}}>Web Developer</p>
                </div>
                <div className="hold container-fuild row center-align" style={{maxWidth:'800px', margin:'auto'}}> 
                 <img id="resume" className="col s6 m6 hvr-float-shadow" onClick={handleResume} src="assets/img/btns/btn1.png" style={{maxHeight:'450px',maxWidth:'400px', padding:'0', marginBottom: '2.5em'}}/>
                  <img id="githubBtn" className="col s6 m6 hvr-float-shadow " onClick={handleGit} src="assets/img/btns/btn2.png" style={{maxHeight:'450px',maxWidth:'400px', padding:'0', marginBottom: '2.5em'}}/>
                 {/*<button className="ui button big center" type="button" id="docs" style={{zIndex:'3', position: 'absolute', margin:'11.2em 20em 20em 20em'}}>Resume via Google Docs</button>*/}
                </div>
           
            </div>
        );
	}}