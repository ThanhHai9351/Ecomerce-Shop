import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyVND } from '@/helpers/format';

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

interface Props {
    name: string
    slug: string
    imageUrl: string
    price: number
}

const ProductCard: FC<Props> = ({ name, slug, imageUrl, price }) => {
    const navigate = useNavigate();
    return (
        <ProductCardItem>
            <CardMedia
                className="media"
                component="img"
                height="250"
                image={imageUrl}
                alt="Product"
                sx={{
                    transition: 'transform 0.5s ease',
                }}
            />
            <CardContent>
                <Typography variant="h6">{name.length > 25 ? name.slice(0, 25) + '...' : name}</Typography>
                <Typography variant="body1" color="red" sx={{ fontSize: 'bold' }}>
                    {formatCurrencyVND(price)}
                </Typography>
            </CardContent>
            <ProductDetails onClick={() => navigate(`/product/${slug}`)} className="details">
                Xem chi tiết
            </ProductDetails>
        </ProductCardItem>
    );
};

export default ProductCard;
