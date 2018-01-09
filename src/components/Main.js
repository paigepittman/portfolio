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
  }

  changeSlide(event) {
    console.log("before: " + this.state.slide);
    let direction = event.target.getAttribute("value");
    let paragraph = document.getElementById("description");

    if (direction === "+" && this.state.slide <= 4) {
      paragraph.setAttribute("class", "hide");
      this.setState({slide: this.state.slide+1});

    } else if (direction === "-" && this.state.slide >= 1) {
      paragraph.setAttribute("class", "hide");
      this.setState({slide: this.state.slide-1});

    }
  }

  render() {
    return (
      <div className="container">

        <Nav />

          <Container slide={this.state.slide} images={this.state.images}/>
          <div className="row arrows">
            <div className="col-md-6 left">
            <a href="#"><i class="fa fa-chevron-left leftArr" value="-" aria-hidden="true" onClick={this.changeSlide}></i></a>
          </div>
          <div className="col-md-6 right">
            <a href="#"><i class="fa fa-chevron-right rightArr" value="+" idaria-hidden="true" onClick={this.changeSlide}></i></a>
          </div>
          </div>


        </div>
    )
  }

}

export default Main;
