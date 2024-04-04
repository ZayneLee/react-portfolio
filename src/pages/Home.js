import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Stack style={{  alignItems: "center" }}>
      Check out my new portfolio:{" "}
      <a
        href="https://zaynelee.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "5px", color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
      >
        Zayne's 2024 New Portfolio
      </a>
    </Stack>
      <Stack alignItems="center">
        <Stack sx={{ width: "50%", mt: 5, mb: 5 }}>
          <img
            src={process.env.PUBLIC_URL + `/assets/lee2.jpg`}
            alt="Profile_PIC"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </Stack>
      </Stack>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2.5rem", marginBottom: "2rem" }}>
        About Me
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <h3>Name (English Name)</h3>
          <p>SeongDo Lee (Zayne Lee)</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>Date of Birth</h3>
          <p>1990.04.25</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>Address</h3>
          {/* <p>Gumi, Gyeongsangbuk-do</p> */}
          <p>Southend on Sea, Essex, United Kingdom</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>Email</h3>
          <p>zaynelee90@gmail.com</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>Education</h3>
          <p>Computer Science,<br/>Korea National Open University</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>Contact</h3>
          <p>Korea Phone Number: +8210-7767-7475<br/>
          UK Phone Number: +447717045838<br/>
          Instagram: zaynelee90</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
