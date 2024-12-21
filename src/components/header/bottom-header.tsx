import { AppBar, Toolbar, Typography } from '@mui/material'

const BottomHeader = () => {
  return (
    <AppBar position='static' color='inherit' elevation={0}>
      <Toolbar
        sx={{
          justifyContent: 'left',
          gap: 4,
          backgroundColor: '#f5f5f5',
          py: 1,
        }}
      >
        {['Phones', 'Tablet', 'Smartwatch', 'Headphone', 'Laptop', 'Monitor'].map((item) => (
          <Typography
            key={item}
            variant='body2'
            sx={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {item}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default BottomHeader
