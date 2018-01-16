import React from 'react';
import {Motion, spring} from 'react-motion';
import Slide1 from './Slide1';
import Title from './Title';

const springSettings = {stiffness: 170, damping: 26};
const NEXT = 'show-next';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [[1000, 350],[0,350], [1000, 350],[0,350], [1000, 350],[0,350], [1000, 350], [0,350]],
      currPhoto: 0,
    };
  };

  handleChange = ({target: {value}}) => {
    this.setState({currPhoto: value});
  };

  clickHandler = (btn) => {
    let photoIndex = btn === NEXT ? this.state.currPhoto+1 : this.state.currPhoto-1;

    photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
    photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

    this.setState({
      currPhoto: photoIndex
    })

    if (photoIndex % 2 !== 0) {
      setTimeout(function() {
        this.clickHandler(btn);
      }.bind(this), 1200);
    }

  };

transitionHandler = (index, btn) => {

  console.log(index);
        if (index % 2 !== 0 ) {
          let photoIndex = btn === NEXT ? this.state.currPhoto+1 : this.state.currPhoto-1;

          photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
          photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

          this.setState({
            currPhoto: photoIndex
          })
        }

}


  render() {
    const {photos, currPhoto} = this.state;
    const [currWidth, currHeight] = photos[currPhoto];

    const widths = photos.map(([origW, origH]) => currHeight / origH * origW);

    const leftStartCoords = widths
      .slice(0, currPhoto)
      .reduce((sum, width) => sum - width, 0);

    let configs = [];
    photos.reduce((prevLeft, [origW, origH], i) => {
      configs.push({
        left: spring(prevLeft, springSettings),
        height: spring(currHeight, springSettings),
        width: spring(widths[i], springSettings),
      });
      return prevLeft + widths[i];
    }, leftStartCoords);

    return (
      <div className="col-lg-10 col-md-10 col-sm-12 outer">
          <Motion style={{height: spring(currHeight), width: spring(currWidth)}}>
            {container =>
              <div className="demo4-inner" style={container}>
                <Title currPhoto={this.state.currPhoto} />

                {configs.map((style, i) =>
                  <Motion key={i} style={style}>
                    {style =>
                      // <img className="demo4-photo" src={`./images/${i}.png`} style={style} />
                      <Slide1 slide={this.state.currPhoto}/>
                    }
                  </Motion>
                )}
              </div>
            }
          </Motion>
        <div className="row arrows">
          <div className="col-md-4 col-sm-4 left">
          <a href="#"><i class="fa fa-chevron-left leftArr" value="-" aria-hidden="true" onClick={this.clickHandler.bind(null, '')}></i></a>
        </div>

        <div className="col-md-4 col-sm-4 range-slider">
        <input
          type="range"
          min={0}
          max={photos.length - 1}
          value={currPhoto}
          onChange={this.handleChange} />
        </div>

        <div className="col-md-4 col-sm-4 right">
          <a href="#"><i class="fa fa-chevron-right rightArr" value="+" idaria-hidden="true" onClick={this.clickHandler.bind(null, NEXT)}></i></a>
        </div>
        </div>
      </div>
    );
  };
}

export default Gallery;
