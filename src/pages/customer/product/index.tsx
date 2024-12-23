import Loading from "@/components/bar/loading";
import { IProduct } from "@/lib/types";
import ProductListing from "@/pages/customer/product/product-listing";
import SidebarFilters from "@/pages/customer/product/sidebar-filters";
import Sorter from "@/pages/customer/product/sorter";
import { useGetProductsQuery } from "@/store/services/product.service";
import {
    Box,
    Breadcrumbs,
    Button,
    Divider,
    Grid,
    Pagination,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    const [page, setPage] = useState(1); // Start from page 1
    const [sortDir, setSortDir] = useState("");
    const [search, setSearch] = useState("");
    const [price, setPrice] = useState([0, 20000000]);

    const { isLoading, data } = useGetProductsQuery({
        page: page - 1,
        sortDir: sortDir,
        search: search,
        priceFrom: price[0],
        priceTo: price[1],
    });

    const products: IProduct[] | undefined = data?.data;
    const totalPages: number = data?.totalPage || 1;

    const fetchData = (search: string, price: number[]) => {
        setSearch(search);
        setPrice(price);
    };

    const resetFilter = () => {
        setSearch("");
        setPrice([0, 20000000]);
        setSortDir("");
        setPage(1); // Reset to the first page
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box p={3}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">
                    <Typography variant="body2">Home</Typography>
                </Link>
                <Typography variant="body2">Products</Typography>
            </Breadcrumbs>
            <Box p={2}>
                <Typography variant="h4" sx={{ fontFamily: "fantasy" }}>
                    PRODUCTS
                </Typography>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <Stack>
                    <Sorter sortDir={sortDir} setSortDir={setSortDir} />
                </Stack>
            </Box>
            <Box sx={{ pb: { xs: 8, lg: 24 }, width: "100%" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5} lg={3} display={{ xs: "none", md: "block" }}>
                        <Box display="flex" justifyContent="flex-end" mb={2}>
                            <Button
                                onClick={resetFilter}
                                variant="outlined"
                                color="primary"
                                sx={{ textDecoration: "underline", color: "slategray", mr: 2 }}
                            >
                                Reset all
                            </Button>
                        </Box>
                        <SidebarFilters search={search} price={price} fetchData={fetchData} />
                    </Grid>
                    <Grid item xs={12} md={7} lg={9}>
                        {products && products.length > 0 ? (
                            <>
                                <ProductListing products={products} />
                                <Box display="flex" justifyContent="center" mt={3}>
                                    <Pagination
                                        count={totalPages}
                                        page={page}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Box>
                            </>
                        ) : (
                            "Not found!"
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Index;
