import React from 'react';
import {Component} from 'react';

class Container extends Component {
  constructor() {
    super();

    this.slideShow = this.slideShow.bind(this);
  }

  componentDidMount() {
    this.slideShow();
  }

  componentDidUpdate() {
    this.slideShow();
  }


  slideShow() {

    var elem = document.getElementById("animate");
    var pos = -70;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }

  }




  render() {
    return (
      <div className="row slide-row">
        <div className="col-md-1 col-sm-0 name-col">


          <div className="name-left">PAIGE PITTMAN</div>


        </div>
          <div className="col-lg-10 col-md-10 col-sm-12 slide-container">
            <img src={"./images/"+ this.props.images[this.props.slide]} className="hash-screen" id="animate"></img>
          </div>
        <div className="col-md-1 col-sm-0"></div>
      </div>
    )
  }
}

export default Container;
