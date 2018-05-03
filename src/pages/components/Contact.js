import React, { Component } from "react";
import axios from 'axios';



export default class ContactMe extends Component{

    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({[ e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const  { name, email, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }


	render() {
		return (
            <div className="container">

                <div className="row">
                    <div className="col s12 noTop" style={{ marginTop: '5em' }}>
                        <div className="col l6 m6 s12" style={{ fontWeight: "300", paddingLeft: "0" }}>
                            <h1 >Contact Me.</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 noTop" style={{ marginTop: '5em' }}>
                        <div className="col l8 s12" style={{ fontWeight: "300", paddingLeft: "0" }}>
                            <form onSubmit={this.handleSubmit} className="ui form">
           
                                <div className="fields">
                                    <div className="field" style={{width:"47%", marginRight:'3%'}}>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        required placeholder="Your Name" 
                                        onChange={this.handleChange}
                                        style={{fontSize:'18px', fontFamily: 'Montserrat sans-serif' }} />
                                    </div>
                                    <div className="field" style={{width:"47%", marginLeft:'3%'}} >
                                        <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        onChange={this.handleChange}
                                        style={{fontSize:'18px', fontFamily: 'Montserrat sans-serif'  }} />
                                    </div>
                                </div>
                                

                                <div className="field">
                                    <textarea
                                    name="message"
                                    maxlength="500"
                                    placeholder="Your Message..."
                                    onChange={this.handleChange}
                                    style={{ marginTop: '1em', height: "15em", backgroundColor: "white", borderRadius: '0', fontSize:'18px', fontFamily: 'Montserrat sans-serif' }} className="materialize-textarea"></textarea>

                                </div>

                                <input type="submit" name='submit' value="Send"  className="ui button btn" style={{ float: 'right', backgroundColor: '#C1272D', color: '#FFFFFF', borderRadius: '0',width:'164px', marginRight:'-2.15em' }}/>
                            </form>
                        </div>
                        <div className="col s1"></div>
                        <div className="col l3 m12 s11" style={{ float: "right", padding: "0" }}>
                            <p className="contactSide">Send me a message! I would love to hear from you.</p>
                        </div>
                    </div>
                </div>
                <div className='pushContact'></div>
            </div>
            );
	   }
}