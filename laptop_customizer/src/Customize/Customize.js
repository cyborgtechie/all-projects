import React from "react";
import slugify from "slugify";
import FeatureOption from "../FeatureOption/FeatureOption";
import Option from "../Option/Option";

class Customize extends React.Component {
  static defaultProps = {
    features: {}
  };
  render() {
    console.log(this.props.features);
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

        return (
          <FeatureOption
            selected={this.props.selected}
            itemHash={itemHash}
            feature={feature}
            item={item}
            key={item.name}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <Option
          key={idx}
          feature={feature}
          options={options}
          featureHash={featureHash}
        />
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default Customize;
