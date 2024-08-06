import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, Container } from "@mui/material";
import { BRANDNAME } from "../../Services/Utils";

const Navbar = () => {
  return (
    <div position="static" className="navbar">
      <Container>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {BRANDNAME}
          </Typography>
          <div>
            <Link color="inherit" component={Link} to="/pricing">
              Pricing
            </Link>
            <Link color="inherit" component={Link} to="/about">
              About
            </Link>
          </div>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Navbar;
