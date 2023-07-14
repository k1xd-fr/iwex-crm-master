import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiTranslate } from "react-icons/hi";
import styles from "./language.module.sass";
import i18next from "i18next";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: any) => {
    i18next.changeLanguage(language);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <HiTranslate className={styles.icon_translate} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => changeLanguage("kg")}>Kg</MenuItem>
        <MenuItem onClick={() => changeLanguage("ru")}>Ru</MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>En</MenuItem>
        <MenuItem onClick={() => changeLanguage("deu")}>Deu</MenuItem>
      </Menu>
    </div>
  );
}
