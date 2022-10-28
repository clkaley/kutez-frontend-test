import React from "react";
import Card from "../component/Card";

function Products() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Card name="Black T-shirt" about="lorem ipsum sit amet" price="18" />
          <Card name="Red T-shirt" about="lorem ipsum sit amet" price="15" />
          <Card name="Black T-shirt" about="lorem ipsum sit amet" price="14" />
          <Card name="White T-shirt" about="lorem ipsum sit amet" price="10" />
          <Card name="Black T-shirt" about="lorem ipsum sit amet" price="30" />
          <Card name="Red T-shirt" about="lorem ipsum sit amet" price="12" />
          <Card name="White T-shirt" about="lorem ipsum sit amet" price="15" />
          <Card name="White T-shirt" about="lorem ipsum sit amet" price="25" />
          <Card name="Brown T-shirt" about="lorem ipsum sit amet" price="22" />
        </div>
      </div>
    </>
  );
}

export default Products;
