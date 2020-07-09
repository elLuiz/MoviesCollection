import React, { Component } from 'react';
import Search from './Search';
export class Nav extends Component {
    render() {
        return (
        <>
            <nav className="main-nav">
                <div className = "slogan-div">
                    <i className="fas fa-film"></i>
                    <h1 className="title">MYMOVIES</h1>
                </div>
                <Search />
            </nav>
        </>
        )
    }
}

export default Nav