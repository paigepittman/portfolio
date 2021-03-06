import React from 'react';
import {Component} from 'react';
import Nav from './children/Nav';
import Container from './children/Container';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
      images: ["", "hash_screen.png", "porsche_screen.png", "capitol_screen.png", "groop_screen.png", ""]
    }
    this.changeSlide = this.changeSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(click) {
    if (click === "projects") {
      this.setState({slide: 0});
    }
    else if (click === "about") {
      this.setState({slide: 5});
    }
  }

  changeSlide(event) {
    console.log("before: " + this.state.slide);
    var direction = event.target.getAttribute("value");

    if (direction === "+" && this.state.slide <= 4) {
      this.setState({slide: this.state.slide+1});




    } else if (direction === "-" && this.state.slide >= 1) {
      this.setState({slide: this.state.slide-1});


    }
  }

  render() {
    return (
      <div className="container">

        <Nav handleClick={this.handleClick}/>

          <Container slide={this.state.slide} images={this.state.images}/>



        </div>
    )
  }

}

export default Main;
