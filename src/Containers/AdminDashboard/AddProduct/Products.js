import { useState } from "react";
import ProductDialog from "../../../Components/dialogs/ProductDialog.js";

import prod from "./product.module.css";

const Products = () => {
  const [open, setOpen] = useState(false);
  const handleAdd = () => {
    setOpen(true);
  };

  return (
    <div className={prod.container}>
      <button className={prod.fab} onClick={handleAdd}>
        +
      </button>
      {open && <ProductDialog open={open} />}
    </div>
  );
};

export default Products;
