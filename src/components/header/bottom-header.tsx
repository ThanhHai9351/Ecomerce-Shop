import { ICategory } from '@/lib/types'
import { useGetCategoriesQuery } from '@/store/services/category.service'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BottomHeader = () => {
  const { isLoading, data } = useGetCategoriesQuery({ limit: 10 })
  const categories: ICategory[] | undefined = data?.data
  const navigate = useNavigate();
  if (isLoading || !data) {
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
          <Typography
            variant='body2'
            sx={{
              color: 'red',
              cursor: 'pointer',
            }}
          >
            Trạng thái không connect Backend!
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
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
        {categories && categories.map((item) => (
          <Typography
            onClick={() => navigate(`/collection/${item.slug}`)}
            key={item._id}
            variant='body2'
            sx={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {item.name}
          </Typography>
        ))}

      </Toolbar>
    </AppBar>
  )
}

export default BottomHeader
