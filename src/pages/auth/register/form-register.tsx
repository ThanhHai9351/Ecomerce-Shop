import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button, TextField, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterAccountMutation } from '@/store/services/account.service'

export type RegisterFormInputs = {
  firstName: string
  lastName: string
  email: string
  password: string
  repassword: string
}

const FormRegister = () => {
  const navigate = useNavigate()
  const [registerAccount, { isLoading }] = useRegisterAccountMutation()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>()

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const { repassword, ...account }: RegisterFormInputs = data
    const customer = { ...account, role: 'customer' }
    try {
      const result = await registerAccount(customer).unwrap()
      if (result.status === 200) {
        toast.success('Đăng ký thành công!')
        setTimeout(() => navigate('/account/login'), 1500)
      } else {
        toast.error(result.message)
      }
    } catch {
      toast.error('Network error!')
    }
  }

  const password = watch('password')

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
        label='Họ'
        variant='outlined'
        margin='normal'
        {...register('firstName', { required: 'Họ là bắt buộc' })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        fullWidth
        label='Tên'
        variant='outlined'
        margin='normal'
        {...register('lastName', { required: 'Tên là bắt buộc' })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
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
            value: 3,
            message: 'Mật khẩu phải có ít nhất 6 ký tự',
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        fullWidth
        label='Xác nhận mật khẩu'
        type='password'
        variant='outlined'
        margin='normal'
        {...register('repassword', {
          required: 'Xác nhận mật khẩu là bắt buộc',
          validate: (value) => value === password || 'Mật khẩu không khớp',
        })}
        error={!!errors.repassword}
        helperText={errors.repassword?.message}
      />
      <Button type='submit' variant='contained' fullWidth sx={{ mt: 2, py: 1.5 }} disabled={isLoading}>
        {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
      </Button>
      <Typography variant='body2' mt={2} textAlign='center'>
        Đã có tài khoản?{' '}
        <Link to='/account/login' style={{ textDecoration: 'none', color: '#1976d2' }}>
          Đăng nhập
        </Link>
      </Typography>
    </Box>
  )
}

export default FormRegister
