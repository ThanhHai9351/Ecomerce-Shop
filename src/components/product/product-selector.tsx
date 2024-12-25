import { Button, Typography, Box } from "@mui/material";
import { formatCurrencyVND } from "@/helpers/format";
import type { IProduct } from "@/lib/types";
import { useEffect, useState, type FC } from "react";

interface Props {
  product: IProduct;
}

const ProductSelector: FC<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.items[0]?._id || 0);
  const [selectedColor, setSelectedColor] = useState(
    product.items[0]?.items[0]?.color || ""
  );

  useEffect(() => {
    const sizeIndex = product.items.findIndex((p) => p._id === selectedSize);
    const newColor = product.items[sizeIndex]?.items[0]?.color || "";
    setSelectedColor(newColor);
  }, [selectedSize, product.items]);

  const sizeIndex = product.items.findIndex((p) => p._id === selectedSize);
  const colorIndex = product.items[sizeIndex]?.items.findIndex(
    (s) => s.color === selectedColor
  );

  const variant = product.items[sizeIndex]?.items[colorIndex];

  return (
    <Box mb={3}>
      <Box mb={2}>
        <Typography variant="h5" fontWeight="bold">
          <span style={{ color: "green" }}>
            {variant ? formatCurrencyVND(variant.price) : ""}
          </span>
        </Typography>
        <Typography
          variant="h6"
          p={1}
          sx={{ bgcolor: 'Green', color: '#fff' }}
          mb={2}
          mt={1}
        >
          Tax included!
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </Box>

      <Box display="flex" gap={2} alignItems="center">
        <Typography variant="body2">Size:</Typography>
        {product.items.map((item, index) => (
          <Button
            key={index}
            onClick={() => setSelectedSize(item._id)}
            variant={selectedSize === item._id ? "contained" : "outlined"}
            color={selectedSize === item._id ? "primary" : "inherit"}
          >
            {item._id}
          </Button>
        ))}
      </Box>

      <Box display="flex" gap={2} alignItems="center" mt={2}>
        <Typography variant="body2">Color:</Typography>
        {product.items[sizeIndex]?.items.map((item, index) => (
          <Button
            key={index}
            onClick={() => setSelectedColor(item.color)}
            variant={selectedColor === item.color ? "contained" : "outlined"}
            color={selectedColor === item.color ? "primary" : "inherit"}
          >
            {item.color}
          </Button>
        ))}
      </Box>

      <Box mt={2} display="flex" gap={3}>
        <Button variant="outlined" fullWidth>
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductSelector;
