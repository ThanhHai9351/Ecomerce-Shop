import { Box, Typography } from "@mui/material"

const SalesNav = () => {
  return (
    <Box p={1} sx={{ textAlign: 'center', bgcolor: "#000", color: '#fff' }}>
      <Typography variant="caption">
        Midseason Sale: 20% Off — Auto Applied at Checkout — Limited Time Only
      </Typography>
    </Box>
  )
}

export default SalesNav
