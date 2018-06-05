import React, { Component } from "react";

export default class NamePlate extends Component{

    
	render() {

        function handleAbout (e) {
            e.preventDefault();
            window.location.assign('/about');
        }
        function handleWork (e) {
            e.preventDefault();
            window.location.assign("/");
            }
            
        function handleGit(e) {
        e.preventDefault();
                    
        window.open('https://github.com/JaronGallo');
        }    

        function handleResume(e) {
        e.preventDefault();
                    
        window.open('assets/img/Resume.pdf');
        }     


        function handleContact (e) {
            e.preventDefault();
            window.location.assign('/contact');
            }
         



		return (
            <div className="container">
                <div className="row">
                <div className="col s12">
                    <div className="col s12" style={{marginTop: '3em',padding: '0'}}>
                        <div className="col l4 m4 s12" style={{padding: "0"}}>
                            <img className="nameLogo" onClick={handleWork} style={{paddingLeft: "0", width: "174px", visibility:'hidden'}} src="assets/img/Logo.svg" />
                        </div>

                        <div className="col l8 m8 s12 nav" style={{padding: '0',textAlign: 'right'}}>
                          
                                 <h3 id='work'  className="noPad navH3" onClick={handleWork}>Work</h3>
                            <h3 id='about' className="navH3" onClick={handleAbout} >About</h3>
                            <h3 className="navH3" onClick={handleGit}>Github</h3>
                            <h3 className="navH3" onClick={handleResume}>Résumé</h3>
                            <h3 id='contact' className="borderBtn" onClick={handleContact} style={{color: '#B52637', border: "2px solid #B52637"}}>Contact</h3>
                            
                           
                        </div>
                    </div>
                </div>
                </div>

            
             
            </div>
        );
	}}