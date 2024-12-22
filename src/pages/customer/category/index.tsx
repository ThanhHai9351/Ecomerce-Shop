import { ICategory } from '@/lib/types';
import SwiperCategory from '@/pages/customer/category/swiper-category';
import { useGetCategoriesQuery } from '@/store/services/category.service';
import { Box, Breadcrumbs, Divider, Link, Typography } from '@mui/material';

const Index = () => {
    const { isFetching, data } = useGetCategoriesQuery({})
    const categories: ICategory[] | undefined = data?.data;
    return (
        <Box p={3}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    <Typography variant='body2'>Home</Typography>
                </Link>
                <Typography variant='body2'>Collections</Typography>
            </Breadcrumbs>
            <Box p={2}>
                <Typography variant='h4' sx={{ fontFamily: 'fantasy' }}>COLLECTIONS</Typography>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                {categories ? <SwiperCategory categories={categories} /> : "Not found category"}
            </Box>
        </Box>
    );
}
export default Index;
