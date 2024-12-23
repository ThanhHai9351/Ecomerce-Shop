import React, { FC, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

interface SortProps {
    setSortDir: (value: string) => void;
    sortDir: string;
}

const Sorter: FC<SortProps> = ({ sortDir, setSortDir }) => {
    const sortOptions = [
        { key: 1, value: "All", sortDir: "" },
        { key: 2, value: "Increase Price", sortDir: "asc" },
        { key: 3, value: "Decrease Price", sortDir: "desc" },
    ];

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeSortKey, setActiveSortKey] = useState(1);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section style={{ margin: "8px" }}>
            <div style={{ paddingBottom: "40px" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "24px", alignItems: "center" }}>
                    <div>
                        <p style={{ fontSize: "14px", color: "gray" }}>Sort by:</p>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            onClick={handleOpen}
                            endIcon={<MdKeyboardArrowDown />}
                            style={{ textTransform: "none", minWidth: "150px" }}
                            color="info"
                        >
                            {sortOptions.find((option) => option.sortDir === sortDir)?.value}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >
                            {sortOptions.map((option) => (
                                <MenuItem
                                    key={option.key}
                                    onClick={() => {
                                        setActiveSortKey(option.key);
                                        setSortDir(option.sortDir);
                                        handleClose();
                                    }}
                                    selected={activeSortKey === option.key}
                                >
                                    {option.value}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sorter;
