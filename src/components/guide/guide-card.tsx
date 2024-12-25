import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";


const GuideCard: FC<{ Icon: ReactNode | any; text: string; href: string }> = ({ Icon, text, href }) => {
  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      <Paper
        variant="outlined"
        sx={{
          height: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-4px)",
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <Box mb={2} display="flex" flexDirection="column" alignItems="center">
          <Box
            mb={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: "#fff",
              color: "primary.main",
              boxShadow: 1,
            }}
          >
            {Icon}
          </Box>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            align="center"
            sx={{ textTransform: "capitalize" }}
          >
            {text}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "text.secondary",
            borderBottom: "2px solid transparent",
            "&:hover": { color: "primary.main", borderBottomColor: "primary.main" },
          }}
        >
          Read More
        </Typography>
      </Paper>
    </Link>
  );
};

export default GuideCard