import React from 'react';
import {Component} from 'react';


class Title extends Component {

  constructor() {
    super();

    this.state = {
      title: "",
      titlesArray: ["Welcome", "", "#Mash", "", "Porsche Specials", "", "Capitol Hill", "", "GroopUp", ""]
    }
  }




render() {
  return <h1 id="project-title">{this.state.titlesArray[this.props.currPhoto]}</h1>
}


}

export default Title;
