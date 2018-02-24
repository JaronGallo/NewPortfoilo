import React, { Component } from "react";

export default class Skills extends Component{
	render() {
		return (
            <div className="container-fluid ui inverted segment" style={{textAlign: 'center'}}>

                    <h2 style={{textAlign: 'center'}}>Skills</h2>
                    <div class="ui divider"></div>

                    <div className="row">
                        <div className="col s6">
                            <p>HTML</p>
                            <div className="ui red  progress" data-percent="99" id="htmlBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>CSS</p>
                            <div className="ui orange  progress" data-percent="95" id="cssBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <p>JavaScript</p>
                            <div className="ui yellow  progress" data-percent="85" id="jsBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>jQuery</p>
                            <div className="ui blue progress" data-percent="90" id="jqueryBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <p>React.js</p>
                            <div className="ui green inverted progress" data-percent="80" id="reactBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>MySql</p>
                            <div className="ui teal progress" data-percent="70" id="myBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <p>MongoDB</p>
                            <div className="ui blue inverted progress" data-percent="85" id="mongoBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>Express</p>
                            <div className="ui red progress" data-percent="90" id="expressBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <p>User Auth</p>
                            <div className="ui purple inverted progress" data-percent="80" id="authBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>Testing</p>
                            <div className="ui pink inverted progress" data-percent="75" id="testingBar">
                                <div className="bar">
                                    <div className="progress" style={{color: 'black',fontSize: "1.3em"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
	    }
}