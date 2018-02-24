import React, { Component } from "react";

export default class NamePlate extends Component{
	render() {
		return (
            <div className="row" id="namePlate" style={{textAlign: 'center'}}>
                <h1 className="name">Jaron Gallo</h1>
                <div class="ui text shape center">
                    <div class="sides">
                        <p class="active header side">Built on React.js</p>
                        <p class="header side">Enjoy</p>
                    </div>
                </div>
            </div>
        );
	}}