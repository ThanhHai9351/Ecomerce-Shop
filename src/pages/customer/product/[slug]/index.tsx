import type { IProduct } from "@/lib/types";
import { useGetProductDetailQuery } from "@/store/services/product.service";
import { Box, Container, Typography, CircularProgress, Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import RelatedProductsSection from "@/components/product/related-products-session";
import GuideSession from "@/components/guide/guide-session";
import SessionProduct from "@/components/product/session-product";

const Index = () => {
    const path = useLocation();
    const { isFetching, data } = useGetProductDetailQuery(path.pathname.split("/")[2] as string);
    const product: IProduct | undefined = data?.data;
    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            <Box p={3}>
                <Box mb={3}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            <Typography variant="body2">Home</Typography>
                        </Link>
                        <Link to="/products">
                            <Typography variant="body2">Products</Typography>
                        </Link>
                        <Typography variant="body2">Detail products</Typography>
                    </Breadcrumbs>
                </Box>

                <Box mb={10}>
                    <SessionProduct product={product as IProduct} />
                </Box>
            </Box>
            <RelatedProductsSection />
            <GuideSession />
        </Box>
    );
};

export default Index;
