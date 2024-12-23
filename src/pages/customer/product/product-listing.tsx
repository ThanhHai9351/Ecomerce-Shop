import { FC } from "react";
import { Grid } from "@mui/material";
import { IProduct } from "@/lib/types";
import ProductCard from "@/pages/customer/product/product-card";

interface ProductListingProps {
  products: IProduct[];
}

const ProductListing: FC<ProductListingProps> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid
          item
          key={index}
        >
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListing;
