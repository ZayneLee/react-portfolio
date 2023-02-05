import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
// import Link from "@mui/material/Link";
import Edit from "../pages/Edit";

const MyMenu = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "#ececec",
      }}
    >
      <Grid
        component={Link}
        underline="hover"
        to="/"
        item
        xs={4}
        textAlign="center"
        sx={{ border: "1px solid #dadada" }}
      >
        About Me
      </Grid>
      <Grid
        item
        xs={4}
        component={Link}
        underline="hover"
        to="/skills"
        textAlign="center"
        sx={{ border: "1px solid #dadada" }}
      >
        Skills
      </Grid>
      <Grid
        item
        xs={4}
        component={Link}
        underline="hover"
        textAlign="center"
        sx={{ border: "1px solid #dadada" }}
      >
        Experience
      </Grid>
    </Grid>
  );
};

export default MyMenu;
