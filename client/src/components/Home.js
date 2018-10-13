import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#members">Members</a>
                    <div className="dropdown">
                        <button onClick={() => this.className='display-true dropbtn'} className="dropbtn">Careers&nbsp; 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                        <a href="#">North America</a>
                        <a href="#">United Kingdom</a>
                        <a href="#">Japan</a>
                        </div>
                    </div> 
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}