import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const ProductDescriptionTab = () => {
  return (
    <div>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            py: 2,
            backgroundColor: 'transparent',
            borderRadius: '8px',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            The Ultimate Technology
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            {`Find a wide range of products to enhance your life. From headphones
            and phones to speakers, smart watches, gaming equipment, and
            laptops, we have everything you need to stay connected and
            entertained.`}
            <br />
            {`Our headphones are designed for exceptional sound quality, comfort,
            and style. Whether you prefer over-ear, on-ear, or in-ear
            headphones, we have options to suit your needs and budget.`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ProductDescriptionTab
