import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
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
        <Box sx={{ my: 3, mx: 2, mb: -4 }}>
          <h1>Front-End</h1>
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
                  image={process.env.PUBLIC_URL + `/assets/css.jpg`}
                />
                <CardContent>
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    HTML5 + CSS3 + JS
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 90%
                  </div>
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
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    React
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 70%
                  </div>
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
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    TypeScript
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 70%
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 3, mx: 2, mt: 6, mb: -4 }}>
          <h1>Back-End</h1>
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
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    JSP
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 90%
                  </div>
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
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Spring Framework
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 70%
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 3, mx: 2, mt: 6, mb: -4 }}>
          <h1>Version Control System</h1>
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
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Git/Github
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 80%
                  </div>
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
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    SVN
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{ mt: 1 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      color: "grey",
                    }}
                  >
                    Confidence Level: 80%
                  </div>
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
