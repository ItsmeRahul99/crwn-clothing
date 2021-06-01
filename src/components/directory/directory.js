import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";
import sectionsItem from "../../directory.data";
import "./directory.scss";
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sectionsItem,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ key, ...otherSectionProps }) => {
          return <MenuItem key={key} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
