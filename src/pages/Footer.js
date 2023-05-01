import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.500",
        color: "white",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2023. SeongDo Lee. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
