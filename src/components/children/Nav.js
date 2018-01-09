import React from 'react';
import {Component} from 'react';

class Nav extends Component {
  constructor() {
    super();


  }

  render() {
    return (
       <div className="row navbar-row">
         <div className="col-md-12">
          <navbar className="navbar">
            <nav className="menu">
                <nav className="projects link"><a onClick={() => this.props.handleClick("projects")} >Projects</a></nav>
                <nav className="about link"><a onClick={() => this.props.handleClick("about")}>About</a></nav>
            </nav>

          </navbar>
        </div>
    </div>
  )
  }
}

export default Nav;
