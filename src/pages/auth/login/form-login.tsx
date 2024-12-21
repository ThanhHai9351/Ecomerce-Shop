import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useLoginAccountMutation } from '@/store/services/account.service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '@/app_provider'

type LoginFormInputs = {
  email: string
  password: string
}

const FormLogin = () => {
  const navigate = useNavigate()
  const { setSessionToken } = useAppContext()
  const [login, { isLoading }] = useLoginAccountMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const result = await login(data).unwrap()
      if (result.status === 200) {
        toast.success('Đăng nhập thành công!')
        localStorage.setItem('accessToken', result.accessToken)
        localStorage.setItem('refreshToken', result.refreshToken)
        setSessionToken(result.accessToken)
        setTimeout(() => navigate('/'), 1500)
      } else {
        toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin!')
      }
    } catch {
      toast.error('Network error!')
    }
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: 400,
        p: 4,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant='h5' fontWeight='bold' mb={2} textAlign='center'>
        Chào mừng đến với hệ thống E-Commerce
      </Typography>

      <TextField
        fullWidth
        label='Email'
        variant='outlined'
        margin='normal'
        {...register('email', {
          required: 'Email là bắt buộc',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Email không hợp lệ',
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        fullWidth
        label='Mật khẩu'
        type='password'
        variant='outlined'
        margin='normal'
        {...register('password', {
          required: 'Mật khẩu là bắt buộc',
          minLength: {
            value: 2,
            message: 'Mật khẩu phải có ít nhất 2 ký tự',
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      {isLoading ? (
        'Đang xử lý ....'
      ) : (
        <Button type='submit' variant='contained' fullWidth sx={{ mt: 2, py: 1.5 }} disabled={isLoading}>
          Đăng nhập
        </Button>
      )}
      <Typography variant='body2' mt={2} textAlign='center'>
        Chưa có tài khoản?{' '}
        <a href='/account/register' style={{ textDecoration: 'none', color: '#1976d2' }}>
          Đăng ký
        </a>
      </Typography>
    </Box>
  )
}

export default FormLogin
