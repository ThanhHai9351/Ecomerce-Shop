import { ICategory } from '@/lib/types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    name: string
    slug: string
    imageUrl: string
}

const CollectionCard: FC<Props> = ({ name, slug, imageUrl }) => {
    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate(`/collection/${slug}`)} sx={{ width: 250, textAlign: 'center', padding: 1, cursor: 'pointer' }} elevation={0}>
            <CardMedia
                component='img'
                height={250}
                width={250}
                image={imageUrl}
                alt='Product'
                sx={{
                    transition: 'transform 0.5s ease',
                }}
            />
            <CardContent><Typography variant='body1'>{name}</Typography></CardContent>
        </Card>
    )
}

export default CollectionCard
