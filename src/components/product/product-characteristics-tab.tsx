import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const ProductCharacteristicsTab = () => {
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
            Characteristics
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ py: 2 }}>
          <ul style={{ paddingLeft: 0 }}>
            {/* Add your dynamic content here */}
            {/* {attrs ? (
              Object.entries(attrs).map(([key, value]) => (
                <li key={key} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flexBasis: '20%' }}>
                      <Typography variant="body2" fontWeight="medium">{key}</Typography>
                    </div>
                    <div style={{ flexBasis: '75%' }}>
                      <Typography variant="body2" color="text.secondary">{String(value)}</Typography>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">Updating...</Typography>
            )} */}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ProductCharacteristicsTab
