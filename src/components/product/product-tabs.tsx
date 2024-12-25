import React from "react"
import ProductCharacteristicsTab from "@/components/product/product-characteristics-tab"
import ProductDescriptionTab from "@/components/product/product-description-tab"
import { Tabs, Tab, Box } from "@mui/material"

const ProductTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ mb: 4 }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600 }}>
        About
      </h3>
      <Tabs value={value} onChange={handleChange} aria-label="Product Tabs" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tab label="Description" />
        <Tab label="Characteristics" />
      </Tabs>
      <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2 }}>
        <ProductDescriptionTab />
        <ProductCharacteristicsTab />
      </Box>
    </Box>
  )
}

export default ProductTabs
