import "@glidejs/glide/dist/css/glide.core.min.css"
import type { FC } from "react"
import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm"
import { useEffect, useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import type { IProduct } from "@/lib/types"
import ProductCard from "@/components/product/product-card"
import { Box, IconButton, Typography, Grid } from "@mui/material"

type RowProps = {
  title: string
  subText?: string
  href?: string
  products: IProduct[] | undefined
}

const ProductSlider: FC<RowProps> = ({ title, subText, products }) => {
  const glideRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!glideRef.current) return
    new Glide(glideRef.current, {
      type: "carousel",
      startAt: 0,
      gap: 0,
      perView: 3,
      bound: true,
      breakpoints: {
        800: { perView: 2 },
        500: { perView: 1 },
      },
    }).mount({ Controls, Breakpoints })
  }, [])

  return (
    <Box mb={4}>
      <div ref={glideRef}>
        <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" fontWeight="bold">{title}</Typography>
            {subText && <Typography variant="body2" color="text.secondary" mt={1}>{subText}</Typography>}
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={2} data-glide-el="controls">
              <IconButton
                size="small"
                data-glide-dir="<"
                sx={{ backgroundColor: 'white', color: 'primary.main', borderRadius: '50%' }}
              >
                <FaChevronLeft />
              </IconButton>
              <IconButton
                size="small"
                data-glide-dir=">"
                sx={{ backgroundColor: 'white', color: 'primary.main', borderRadius: '50%' }}
              >
                <FaChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box mt={4} data-glide-el="track">
          <Grid container spacing={2}>
            {products && products.map((product, index) => (
              <Grid item key={index}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Box>
  )
}

export default ProductSlider
