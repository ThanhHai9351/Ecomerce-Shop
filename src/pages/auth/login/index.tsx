import { Box, Grid, Typography } from '@mui/material'
import Logo from '@/components/logo'
import FormLogin from '@/pages/auth/login/form-login'
import { Helmet } from 'react-helmet-async'
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <link rel='canonical' href='' />
        <meta name='description' content='Login account ecomerce in here.' />
      </Helmet>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid bgcolor={'#000'} height={'100vh'} item xs={6}>
          <Box
            p={3}
            sx={{
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Logo color='white' width={70} />
          </Box>
          <Box sx={{ position: 'fixed', left: 10, bottom: 30 }}>
            <Typography color='white'>
              "Chào mừng bạn đến với hệ thống E-Commerce của chúng tôi. {<br />} Đăng nhập để khám phá những sản phẩm và
              ưu đãi đặc biệt dành riêng cho bạn!"
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={6}>
          <FormLogin />
        </Grid>
      </Grid>
    </>
  )
}

export default Index
