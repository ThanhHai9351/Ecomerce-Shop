import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const ProductCardItem = styled(Card)({
    position: 'relative',
    overflow: 'hidden',
    width: 250,
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.0)',
    },
    '&:hover .details': {
        opacity: 1,
        transform: 'scale(1)',
    },
    '&:hover .media': {
        transform: 'scale(1.3)',
    },
});

const ProductDetails = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    opacity: 0,
    transition: 'opacity 0.5s ease, transform 0.5s ease',
    cursor: 'pointer',
    transform: 'scale(0.9)',
});

const ProductCard = () => {
    const navigate = useNavigate();
    return (
        <ProductCardItem>
            <CardMedia
                className="media"
                component="img"
                height="250"
                image="https://product.hstatic.net/1000360022/product/ao-thun-icondenim-prominent-line__3__8ec99a0503334443a06915f0aaa67c99_1024x1024.jpg"
                alt="Product"
                sx={{
                    transition: 'transform 0.5s ease',
                }}
            />
            <CardContent>
                <Typography variant="h6">Tên sản phẩm</Typography>
                <Typography variant="body2" color="text.secondary">
                    Giá: 100.000đ
                </Typography>
            </CardContent>
            <ProductDetails onClick={() => navigate('#')} className="details">
                Xem chi tiết
            </ProductDetails>
        </ProductCardItem>
    );
};

export default ProductCard;
