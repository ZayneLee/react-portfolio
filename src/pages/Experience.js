import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Experience = () => {
  return (
    <div>
      <Stack alignItems="center">
        <Box
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  스리랑카 농산물 수출입검역 프로젝트
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              Front-end development focuses on creating the user interface and
              user experience of a website or application. It involves the use
              of HTML, CSS, and JavaScript to create visually appealing and
              responsive designs that provide a seamless experience for users.
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{
                      width: "100%", // Set the width to 100%
                      objectFit: "cover",
                    }}
                    image={process.env.PUBLIC_URL + `/assets/npqs.png`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      HTML5 + CSS3 + JS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      React is a popular JavaScript library for building user
                      interfaces, particularly for single-page applications.
                      Developed by Facebook, it allows developers to create
                      reusable UI components and efficiently manage the state of
                      their applications, resulting in faster and more scalable
                      solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Experience;
