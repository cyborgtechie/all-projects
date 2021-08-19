import React from "react";

class Option extends React.Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.options}
      </fieldset>
    );
  }
}

export default Option;
