import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import Logo from '@/components/logo'
const Index = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                py: 4,
                px: 2,
                borderTop: "1px solid #ddd",
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {/* Logo and Copyright Section */}
                <Grid item xs={12} md={3}>
                    <Logo width={50} />

                    <Typography variant="body2" mt={2} color="textSecondary">
                        © Copyright Stockmart Modern 2024 by Devsphere labs
                    </Typography>
                </Grid>

                {/* Links Sections */}
                {["Starter Sites", "Collections", "Sales"].map((section) => (
                    <Grid item xs={6} md={2} key={section}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", mb: 1 }}
                        >
                            {section}
                        </Typography>
                        {["Home", "Collections", "Cart", "Checkout", "Blogs"].map(
                            (item) => (
                                <Typography
                                    key={item}
                                    variant="body2"
                                    component={Link}
                                    href="#"
                                    sx={{
                                        display: "block",
                                        textDecoration: "none",
                                        color: "inherit",
                                        "&:hover": { textDecoration: "underline" },
                                    }}
                                >
                                    {item}
                                </Typography>
                            )
                        )}
                    </Grid>
                ))}

                {/* Contact Section */}
                <Grid item xs={12} md={3}>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1 }}
                    >
                        If you have any questions, please contact us 24/7:
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        +84 1234 555 77
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Index;
