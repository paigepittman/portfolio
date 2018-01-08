import React from 'react';
import {Component} from 'react';
import Nav from './children/Nav';
import Container from './children/Container';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
      images: ["hash_screen.png", "porsche_screen.png", "capitol_screen.png", "groop_screen.png"]
    }
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide(event) {
    console.log("before: " + this.state.slide);
    let direction = event.target.getAttribute("id");
    this.setState({slide: this.state.slide+direction+1})
    console.log("after: " + this.state.slide);

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
