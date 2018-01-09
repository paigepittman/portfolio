import React from 'react';
import {Component} from 'react';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      colors: ["rgb(136, 152, 255)", "rgb(241, 180, 215)", "rgb(153, 218, 246)", "rgb(184, 155, 249)", "rgb(138, 240, 194)", "rgb(204, 147, 255)"],
      titles: ["", "#Mash", "Porsche Specials Tracker", "Capitol Hill", "GroopUp", "About"],
      descriptions: ["", "#Mash received 3rd place in the Trilogy Education Staff Hackathon. It is a React project manager for Coding Bootcamp students that uses Github authentication to easily integrate project management with student repositories.", "Porsche Specials Tracker is a React application created for a district manager at Porsche to easily track and follow up with the promotions each of his dealerships is currently running by scraping the URLs of each dealership's 'specials' page.", "Capitol Hill is an application designed to easily connect people with their Senators and Congressional representatives, and to keep constituents up to date with their representative’s legislative actions. Users can search for their district’s representatives, or state Senators, and will be returned with that politician’s contact information and voting track record.", "Save money with new friends on cool activities! A more social GroupOn and a more personalized Eventbrite – users get access to activities/services over which friendships form, selecting these activities/services based on various factors such as personality compatibility with existing activity/service participants, number of participants, location, price, etc.", "I got into coding just because I wanted to make my Myspace look cool. 10 years later and I'm having dreams (sometimes nightmares) in React! Since working as a Coding Bootcamp TA I've come to realize I'm one of those nerds who loves debugging. When I'm not programming I'm listening to Techno and hanging out with my dog. Born and raised in LA but open to relocating!"]
              }


    this.slideShow = this.slideShow.bind(this);
    this.animate = this.animate.bind(this);
    this.reverseAnimate = this.reverseAnimate.bind(this);
  }



  componentDidMount() {
    this.slideShow();
  }

  componentDidUpdate() {
    this.slideShow();
  }


//responds to click and moves between slides//
  slideShow() {
    var bg = document.getElementById("slide-container");
    bg.style.background = this.state.colors[this.props.slide];

    var title = document.getElementById("project-title");
    title.innerHTML = this.state.titles[this.props.slide];

    var description = document.getElementById("description");

    var elem = document.getElementById("animate");
    var pos = -50;
    var id = setInterval(frame, 20);
    function frame() {
        if (pos == 60) {
          var paragraph = document.getElementById("description");

          paragraph.setAttribute("class", "show");
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + '%';
        }
    }

  }

//responds to onMouseOver event on image///
  animate(event) {
    var image = document.getElementById("animate");
    var title = document.getElementById("project-title");

    image.style.transition = "transform 1s linear"
    image.style.transform = "rotate(0.07turn)";
    title.style.transition = "transform 1s linear";
    title.style.transition = "font-size 1s linear";
    title.style.transform = "rotate(-0.01turn)";
    title.style["font-size"] = '65px';


  }

  //responds to onMouseLeave event on image///
  reverseAnimate(event) {
    var image = document.getElementById("animate");
    var title = document.getElementById("project-title");

    image.style.transition = "transform 1s linear"
    image.style.transform = "rotate(0.0turn)";
    image.style.transition = "transform 1s linear";
    title.style.transition = "font-size 1s linear";
    title.style.transform = "rotate(0.0turn)";
    title.style["font-size"] = '40px';

  }




  render() {
    return (
      <div className="row slide-row">
        <div className="col-md-1 col-sm-0 name-col">


          <div className="name-left">PAIGE PITTMAN</div>


        </div>
          <div className="col-lg-10 col-md-10 col-sm-12" id="slide-container" onMouseOver={this.animate} onMouseLeave={this.reverseAnimate}>
            <h2 id="project-title">{this.state.titles[this.props.slide]}</h2>
            <p className="hide" id="description">{this.state.descriptions[this.props.slide]}</p>

            <img src={"./images/"+ this.props.images[this.props.slide]} className="hash-screen" id="animate" onMouseOver={this.animate} onMouseLeave={this.reverseAnimate}></img>
          </div>
        <div className="col-md-1 col-sm-0 right-col"></div>
      </div>
    )
  }
}

export default Container;
