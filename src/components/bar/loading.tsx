import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Loading
        </Typography>
        <CircularProgress
          sx={{
            animation: 'spin 1.5s linear infinite',
            color: 'primary.main'
          }}
        />
      </Box>
    </Box>
  );
}
