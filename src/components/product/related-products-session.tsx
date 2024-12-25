import Loading from "@/components/bar/loading";
import ProductCard from "@/components/product/product-card";
import { IProduct } from "@/lib/types";
import { useGetProductsQuery } from "@/store/services/product.service";
import { Box, Container, Grid, Typography } from "@mui/material";

const RelatedProductsSection = () => {
    const { isFetching, data } = useGetProductsQuery({});
    const products: IProduct[] | undefined = data?.data;

    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Loading />
            </Box>
        );
    }

    return (
        <Box sx={{ paddingBottom: 6, paddingX: 2 }}>
            <Box marginBottom={3}>
                <Typography variant="h6" fontWeight="bold">
                    Related Products
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {products &&
                    products.map((product) => (
                        <Grid item key={product.name}>
                            <ProductCard {...product} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

export default RelatedProductsSection;