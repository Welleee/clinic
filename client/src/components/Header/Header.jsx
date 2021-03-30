import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    "& a": {
      color: "white",
    },
  },
  buttonMenu: {
    "& span": {
      color: "white",
    },
  },

  navLink: {
    color: "white",
    textTransform: "uppercase",
    marginRight: "15px",
  },

  active: {
    color: "#bfbfbf",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          <Link to="/">Historias Clinicas</Link>
        </Typography>
        <Typography variant="body1">
          <NavLink
            to="/"
            exact
            className={classes.navLink}
            activeClassName={classes.active}
          >
            {/* <Button className={classes.buttonMenu}>Pacientes</Button> */}
            Pacientes
          </NavLink>
        </Typography>

        <Typography variant="body1">
          <NavLink
            to="/alta-paciente"
            className={classes.navLink}
            activeClassName={classes.active}
          >
            {/* <Button className={classes.buttonMenu}>Agregar Paciente</Button> */}
            Agregar Paciente
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
