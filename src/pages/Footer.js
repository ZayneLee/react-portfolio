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
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Crafted with ❤️ by SeongDo Lee | React & Responsive Web Design | 2023
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
