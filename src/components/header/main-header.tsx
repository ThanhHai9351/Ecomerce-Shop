import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material'
import { Search, ShoppingCart } from '@mui/icons-material'
import Logo from '@/components/logo'
import AvatarCustomer from '@/components/header/avatar-customer'
import CartSideBar from '@/components/header/cart-side-bar'

const MainHeader = () => {
  return (
    <AppBar sx={{ paddingTop: '15px', paddingBottom: '15px' }} position='static' color='inherit' elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display='flex' alignItems='center' gap={2}>
          <Logo width={50} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            flex: 1,
            mx: 3,
          }}
        >
          <Search />
          <InputBase placeholder='What are you looking for...' fullWidth sx={{ ml: 1 }} />
        </Box>
        <Box>
          <Toolbar
            sx={{
              justifyContent: 'center',
              gap: 4,
              py: 1,
            }}
          >
            {['Catalogs', 'Products', 'Blogs'].map((item) => (
              <Typography
                key={item}
                variant='body2'
                sx={{
                  cursor: 'pointer',
                  color: '#555555',
                  transition: 'all 0.2s ease',
                  textDecoration: 'underline',
                  '&:hover': { color: '#000' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Toolbar>
        </Box>

        <Box display='flex' alignItems='center' gap={2}>
          <AvatarCustomer />
          <CartSideBar />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default MainHeader
