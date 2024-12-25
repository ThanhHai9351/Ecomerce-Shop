import { Box, Grid, Typography, Button, Divider, Paper } from "@mui/material";
import type { IProduct } from "@/lib/types";
import { useGetProductsQuery } from "@/store/services/product.service";
import { BsLightningCharge } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { LuInfo, LuTruck } from "react-icons/lu";
import type { FC } from "react";
import Loading from "@/components/bar/loading";
import ImageShowCase from "@/components/product/image-show-case";
import ProductTabs from "@/components/product/product-tabs";
import ProductCard from "@/components/product/product-card";
import Banner from "@/components/banner/banner";
import ProductSlider from "@/components/product/product-slider";
import ProductSelector from "@/components/product/product-selector";

interface Props {
  product: IProduct;
}

const SessionProduct: FC<Props> = ({ product }) => {
  const { isFetching, data } = useGetProductsQuery({});
  const products: IProduct[] | undefined = data?.data;
  if (isFetching) {
    return <Loading />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <ImageShowCase shots={product.imageUrl} />
        <Box display={{ xs: "none", md: "block" }}>
          <ProductTabs />
          <Box>
            <ProductSlider
              products={products}
              title="Similar Items You Might Like"
              subText="Based on what customers bought"
            />
            <ProductSlider
              products={products}
              title="Shop For More Compatible Items"
              subText="Items that pair well together"
            />
          </Box>
          <Banner />
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="caption" display="block" gutterBottom>
          STOCKMART
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        {product.items?.length ? <ProductSelector product={product} /> : <Typography
          variant="h6"
          p={1}
          sx={{ bgcolor: 'red', color: '#fff' }}
          mb={2}
        >
          Sold Out!
        </Typography>}
        <Box display="flex" mb={3}>
          <Box color="success.main" mr={1}>
            <FaCheck />
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Pickup available at shop location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Usually ready in 24 hours
            </Typography>
            <Typography variant="body2" color="text.secondary">
              View store information
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box py={2} display="flex" gap={2}>
          <Box>
            <BsLightningCharge />
          </Box>
          <Box>
            <Typography variant="body2" color="error">
              2 in Stock Now
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upgrade your tech collection with the latest must-have item, available now in limited quantities.
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box py={2} display="flex" gap={2}>
          <Box>
            <LuTruck />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Next Day Delivery
              <LuInfo fontSize="small" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lightning-fast shipping, guaranteed.
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box py={2} display="flex" gap={2}>
          <Box>
            <HiMiniArrowUturnLeft color="primary" />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold" color="primary">
              Free 90-day returns
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Shop risk-free with easy returns.
            </Typography>
          </Box>
        </Box>

        <Box
          my={4}
          p={2}
          border={2}
          borderColor="primary.main"
          borderRadius={1}
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Packaging Note:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Research and development value proposition graphical user interface investor. Startup business plan user
              experience
            </Typography>
          </Box>
          <LuInfo />
        </Box>

        <Box mb={4} p={2} bgcolor="primary.main" color="white" borderRadius={1}>
          <Typography variant="body2" fontWeight="bold">
            StockMart
          </Typography>
          <Typography variant="body2">
            Discount & Free shipping on Your first purchase.
          </Typography>
          <Button variant="contained" color="secondary">
            First-Timer's Deal
          </Button>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            RELATED PRODUCT
          </Typography>
          <ProductCard {...product} />
        </Box>
      </Grid>

      <Grid item xs={12} display={{ md: "none" }}>
        <ProductTabs />
        <Box>
          <ProductSlider
            products={products}
            title="Similar Items You Might Like"
            subText="Based on what customers bought"
          />
          <ProductSlider
            products={products}
            title="Shop For More Compatible Items"
            subText="Items that pair well together"
          />
        </Box>
        <Banner />
      </Grid>
    </Grid>
  );
};

export default SessionProduct;
