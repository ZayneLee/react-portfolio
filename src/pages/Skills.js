import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const HoverImage = styled(CardMedia)(({ theme }) => ({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));
const Skills = () => {
  return (
    <Stack alignItems="center" sx={{ mt: 2, mb: 2 }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Front-End
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/html.png`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    HTML5 + CSS3 + JS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/react1.png`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    React
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/TS1.png`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    TypeScript
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Back-End
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/jsp.jpg`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    JSP
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/spring1.png`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    Spring Framwork
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Version Control System
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/github.png`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    Git/Github
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <HoverImage
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={process.env.PUBLIC_URL + `/assets/svn.png`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    SVN
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default Skills;
