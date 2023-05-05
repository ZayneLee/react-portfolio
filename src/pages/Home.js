import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div>
      <Stack alignItems="center" sx={{ marginTop: "2px" }}>
        <Stack
          sx={{ width: { xs: "50%", sm: "30%", md: "15%" }, mt: 3, mb: 5 }}
        >
          <img
            src={process.env.PUBLIC_URL + `/assets/lee.jpg`}
            alt="Profile_PIC"
            style={{ width: "100%" }}
          />
        </Stack>
      </Stack>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "4rem",
        }}
      >
        About Me
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <h2>이름</h2> 이성도
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <h2>생년월일</h2> 1990.04.25
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <h2>주소</h2> 경북 구미시
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <h2>연락처</h2> 010-7767-7475
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <h2>이메일</h2> star1582@naver.com
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <h2>학력</h2> 한국방송통신대 컴퓨터과학과
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
