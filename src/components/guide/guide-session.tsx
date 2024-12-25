import GuideCard from "@/components/guide/guide-card";
import { Button, Box, Grid, Typography, Divider, Paper } from "@mui/material";
import { BsPhone, BsLightningCharge } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";

const guideData = [
  {
    Icon: <IoGameControllerOutline size={24} />,
    text: "how to choose the right gaming laptop for your needs",
    href: "#",
  },
  {
    Icon: <BsPhone size={24} />,
    text: "the best accessories to enhance your smartphone experience",
    href: "#",
  },
  {
    Icon: <FaHeadphones size={24} />,
    text: "the benefits of noise-Cancelling headphones",
    href: "#",
  },
  {
    Icon: <RiToolsFill size={24} />,
    text: "10 tips for maintaining your electronics and extending their lifespan",
    href: "#",
  },
  {
    Icon: <BsLightningCharge size={24} />,
    text: "the future of wearable technology: what's coming next?",
    href: "#",
  },
  {
    Icon: <BsPhone size={24} />,
    text: "5G phones: how will the latest network technology affect your experience?",
    href: "#",
  },
];

const GuideSession = () => {
  return (
    <Box component="section" padding={2}>
      <Box sx={{ pb: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box>
            <Typography variant="caption" display="block" gutterBottom>
              HOW TO
            </Typography>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Guides for Everything You Need
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button variant="outlined">View All Guides</Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {guideData.map((listItem) => (
            <Grid item xs={2} key={listItem.text}>
              <GuideCard {...listItem} />
            </Grid>
          ))}
        </Grid>
        <Box mt={2} sx={{ display: { md: "none" } }}>
          <Button fullWidth variant="contained">
            View All Guides
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GuideSession;
