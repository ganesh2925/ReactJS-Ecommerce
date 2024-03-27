import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";
import TV from "./TV";
import Books from "./Books";
import Speakers from "./Speakers";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Books />
      <Watch />
      <Men />
      <Woman />
      <Furniture />
      <AC />
      <TV />
      <Kitchen />
      <Speakers />
    </div>
  );
};

export default Products;
