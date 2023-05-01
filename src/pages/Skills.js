import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Skills = () => {
  return (
    <Stack alignItems="center">
      <Box sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Front-End
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Front-end development focuses on creating the user interface and
            user experience of a website or application. It involves the use of
            HTML, CSS, and JavaScript to create visually appealing and
            responsive designs that provide a seamless experience for users.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300"
                  image={process.env.PUBLIC_URL + `/assets/react.png`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300"
                  image={process.env.PUBLIC_URL + `/assets/typescript.png`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    TypeScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    TypeScript is a statically-typed superset of JavaScript that
                    adds optional type annotations to the language. It provides
                    better code maintainability, readability, and tooling
                    support, making it easier to catch errors early in the
                    development process. TypeScript is often used with modern
                    front-end frameworks like React and Angular.
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
          <Typography color="text.secondary" variant="body2">
            Back-end development focuses on the server-side logic, database
            management, and infrastructure that power web applications and
            services. It involves the creation of APIs, server-side scripting,
            and integration with databases to store and process data. Common
            back-end technologies include Node.js, Ruby on Rails, Django, and
            Java Spring.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={process.env.PUBLIC_URL + `/assets/jsp.jpg`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JSP
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    JavaServer Pages (JSP) is a server-side technology that
                    allows developers to create dynamic web pages using Java.
                    JSP separates the presentation layer (HTML) from the
                    business logic (Java code) by embedding Java code within
                    HTML tags. This makes it easier to build and maintain
                    large-scale web applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={process.env.PUBLIC_URL + `/assets/spring.png`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Spring Framwork
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Spring Framework is a powerful Java-based framework for
                    building enterprise applications. It simplifies the
                    development process by providing a comprehensive programming
                    and configuration model, addressing various infrastructure
                    concerns like database access, security, and transaction
                    management. Spring Boot, a sub-project of Spring, makes it
                    even easier to create stand-alone, production-ready Spring
                    applications with minimal configuration.
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
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={process.env.PUBLIC_URL + `/assets/github.png`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Git/Github
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Git is a widely used distributed version control system
                    designed to handle everything from small to large projects
                    with speed and efficiency. It enables developers to track
                    changes in their code, collaborate with others, and revert
                    to previous versions if necessary. GitHub is a web-based
                    platform that provides Git repository hosting, issue
                    tracking, and collaboration features, making it easier for
                    teams to work together on projects and contribute to
                    open-source software.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="SVN logo"
                  height="200"
                  image={process.env.PUBLIC_URL + `/assets/svn.png`} // Replace this with the SVN image URL
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    SVN
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subversion (SVN) is a centralized version control system
                    that allows developers to track changes in their code and
                    collaborate with others. It stores the history of changes in
                    a central repository, and developers can commit their
                    changes, update their local copies, and resolve conflicts
                    when needed. While not as popular as Git in recent years,
                    SVN is still used in some projects and organizations.
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
