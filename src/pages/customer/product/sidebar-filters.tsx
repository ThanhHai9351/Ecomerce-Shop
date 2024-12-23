import React, { FC, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Box, Typography, Button, TextField } from "@mui/material";

import { formatCurrencyVND } from "@/helpers/format";

interface SideBarProps {
    fetchData: (search: string, price: number[]) => void;
    search: string;
    price: number[];
}

const PRICE_RANGE = [1, 20000000]; // Constant price range

const SidebarFilters: FC<SideBarProps> = ({ fetchData, search, price }) => {
    const [searchTerm, setSearchTerm] = useState(search);
    const [priceTerm, setPriceTerm] = useState(price);

    const renderTabsPriceRange = () => {
        const [activeTab, setActiveTab] = useState(true);

        return (
            <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button
                        variant="text"
                        onClick={() => setActiveTab((prev) => !prev)}
                        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                        color="inherit"
                    >
                        Price
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setPriceTerm([...PRICE_RANGE])} // Reset to full range
                        sx={{ textDecoration: "underline", color: "gray" }}
                    >
                        Reset
                    </Button>
                </Box>
                {activeTab && (
                    <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                        <Slider
                            range
                            min={PRICE_RANGE[0]}
                            max={PRICE_RANGE[1]}
                            step={1}
                            defaultValue={[priceTerm[0], priceTerm[1]]}
                            allowCross={false}
                            onChange={(input: number | number[]) =>
                                Array.isArray(input) && input.length === 2 && setPriceTerm(input)
                            }
                        />
                        <Typography variant="body2" color="textSecondary">
                            Price: {formatCurrencyVND(priceTerm[0])} - {formatCurrencyVND(priceTerm[1])}
                        </Typography>
                    </Box>
                )}
            </Box>
        );
    };

    const renderTextFilters = () => {
        const [activeTab, setActiveTab] = useState(true);

        return (
            <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button
                        variant="text"
                        onClick={() => setActiveTab((prev) => !prev)}
                        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                        color="inherit"
                    >
                        Name
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setSearchTerm("")}
                        sx={{ textDecoration: "underline", color: "gray" }}
                    >
                        Reset
                    </Button>
                </Box>
                {activeTab && (
                    <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                        <Typography color="inherit" variant="body2" fontWeight="bold">
                            Search by name
                        </Typography>
                        <TextField
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            variant="outlined"
                            placeholder="Enter the name..."
                            fullWidth
                        />
                    </Box>
                )}
            </Box>
        );
    };

    return (
        <Box sx={{ backgroundColor: "white", borderRadius: 2, overflow: "hidden" }}>
            <Box sx={{ borderBottom: "1px solid #ccc" }}>{renderTextFilters()}</Box>
            <Box sx={{ borderBottom: "1px solid #ccc" }}>{renderTabsPriceRange()}</Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <Button variant="contained" onClick={() => fetchData(searchTerm, priceTerm)}>
                    Search
                </Button>
            </Box>
        </Box>
    );
};

export default SidebarFilters;
