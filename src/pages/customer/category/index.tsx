import Loading from '@/components/bar/loading';
import { ICategory } from '@/lib/types';
import SwiperCategory from '@/pages/customer/category/swiper-category';
import { useGetCategoriesQuery } from '@/store/services/category.service';
import { Box, Breadcrumbs, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = () => {
    const { isLoading, data } = useGetCategoriesQuery({})
    const categories: ICategory[] | undefined = data?.data;

    if (isLoading) {
        <Loading />
    }
    return (
        <Box p={3}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">
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
