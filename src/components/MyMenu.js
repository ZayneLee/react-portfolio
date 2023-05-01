import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

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
        to="/"
        item
        xs={4}
        textAlign="center"
        sx={{ border: "1px solid #dadada" }}
      >
        Home
      </Grid>
      <Grid
        item
        xs={4}
        component={Link}
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
        to="/exp"
        textAlign="center"
        sx={{ border: "1px solid #dadada" }}
      >
        Experience
      </Grid>
    </Grid>
  );
};

export default MyMenu;
