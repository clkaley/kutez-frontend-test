import React from "react";
import Card from "../component/Card";
import t1 from "../img/t-1.jpg";
import t3 from "../img/t-3.jpg";
import t4 from "../img/t-4.jpg";
import t5 from "../img/t-5.jpg";
import t6 from "../img/t-6.jpg";
import t7 from "../img/t-7.jpg";
import t8 from "../img/t-8.jpg";
import t9 from "../img/t-9.jpg";
import ImageGallery from 'react-image-gallery';
function Products() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Card
            img={t1}
            name="Black T-shirt"
            about="lorem ipsum sit amet"
            price="18"
          />
          <Card
            img={t7}
            name="Red T-shirt"
            about="lorem ipsum sit amet"
            price="15"
          />
          <Card
            img={t3}
            name="Black T-shirt"
            about="lorem ipsum sit amet"
            price="14"
          />
          <Card
            img={t4}
            name="White T-shirt"
            about="lorem ipsum sit amet"
            price="10"
          />
          <Card
            img={t5}
            name="Black T-shirt"
            about="lorem ipsum sit amet"
            price="30"
          />
           <Card
            img={t7}
            name="Red T-shirt"
            about="lorem ipsum sit amet"
            price="12"
          />
           <Card
            img={t8}
            name="White T-shirt"
            about="lorem ipsum sit amet"
            price="15"
          />
           <Card
            img={t9}
            name="White T-shirt"
            about="lorem ipsum sit amet"
            price="25"
          />
             <Card
            img={t6}
            name="Brown T-shirt"
            about="lorem ipsum sit amet"
            price="22"
          />
        </div>
      </div>
    </>
  );
}

export default Products;
