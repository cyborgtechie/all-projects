import React from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import CartTotal from "../CartTotal/CartTotal";

class Cart extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <OrderSummary
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption.name}
          cost={selectedOption.cost}
          key={selectedOption.name}
        />
      );
    });
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <CartTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default Cart;
