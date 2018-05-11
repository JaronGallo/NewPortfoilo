import React, { Component } from "react";

export default class Footer extends Component{
	render() {

        function handleResume(e) {
            e.preventDefault();
                        
            window.open('assets/img/Resume.pdf');
            }     
    
    
            function handleContact (e) {
                e.preventDefault();
                window.location.replace('/contact');
                }
		return (
            <div className="container footer">
                <div className="row">
                <div className="col s12">
                    
                    
                        <div className="col s12" style={{padding: '0',textAlign: 'right', margin:'1em 0 1em 0'}}>
                            <div className="col l10 m5 line" style={{width:'108%',marginLeft:'-25%', backgroundColor:'white', height: '2px', marginTop:'9px'}}></div>
                            <div className="col l2 m7 s12 insideFooter" style={{float:'right', padding: '0'}}>
                            <h3 onClick={handleResume}>Résumé</h3>
                            <h3 onClick={handleContact}style={{color: '#B52637', border: "2px solid #B52637"}}>Contact</h3>
                           </div>
                            
                        </div>
                    
                </div>
                </div>

            
             
            </div>
                );
	        }
}