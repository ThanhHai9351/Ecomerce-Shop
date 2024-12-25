import { Box, Typography } from "@mui/material"

const Banner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'primary.main',
                padding: 2,
            }}
        >
            <Typography variant="h6" sx={{ color: 'yellow.500', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                Earn Cashback on Every Purchase
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
                Get a percentage back on all purchases
            </Typography>
        </Box>
    )
}

export default Banner
