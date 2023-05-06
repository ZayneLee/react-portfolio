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
                <h2>스리랑카 농산물 수출입검역 프로젝트</h2>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              UN 산하기관의 UNOPS(유엔프로젝트조달기구)와 KOICA(한국국제협력단)
              그리고 JAICA(일본국제협력기구)에서 공동으로 진행하고 있는 스리랑카
              농산물 수출입검역 프로젝트 참여
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
                  <Divider sx={{ mt: 1 }} variant="middle" />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Tools
                    </Typography>
                    VS code, MySQL Workbench, GitHub, Docker
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Skills
                    </Typography>
                    Node.js, React, Typescript, Java, Spring, MyBatis, MySQL
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <h2>순천향대학병원</h2>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              순천향대학병원 구미병원팀의 전산팀에서 사용자 편의를 위한 단위업무
              개발 및 통계 쿼리 생성 작업
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
                    image={process.env.PUBLIC_URL + `/assets/sch.png`}
                  />
                  <Divider sx={{ mt: 1 }} variant="middle" />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Tools
                    </Typography>
                    Xplatform, Eclipse, SQLGate, SVN
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Skills
                    </Typography>
                    Javascript, Java, Jsp, Oracle
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <h2>자동차검사시스템 기능개선 및 구성개편 프로젝트</h2>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              한국교통안전공단에서 발주한 자동차검사시스템 기능개선 및 구성개편
              프로젝트에 참여
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
                    image={process.env.PUBLIC_URL + `/assets/TS.png`}
                  />
                  <Divider sx={{ mt: 1 }} variant="middle" />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Tools
                    </Typography>
                    WebSquare5, Eclipse
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Skills
                    </Typography>
                    Java, Spring Framework, Sysbase
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          <Box sx={{ my: 3, mx: 2, mb: -3 }}>
            <Grid container alignItems="center">
              <h2>개인 프로젝트</h2>
            </Grid>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <a
                  href="https://zayne-portfolio.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 500 }}>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Zayne's portfolio
                    </div>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="text.secondary"
                      style={{ fontStyle: "italic" }}
                    >
                      (Click to view project)
                    </Typography>
                    <Divider variant="middle" />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Tools
                      </Typography>
                      VS code, firebase
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Skills
                      </Typography>
                      Node.js, React
                    </CardContent>
                  </Card>
                </a>
                <a
                  href="https://zayne-portfolio.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 500, mt: 2 }}>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Emotion Diary
                    </div>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="text.secondary"
                      style={{ fontStyle: "italic" }}
                    >
                      (Click to view project)
                    </Typography>
                    <Divider variant="middle" />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Tools
                      </Typography>
                      VS code, firebase
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Skills
                      </Typography>
                      Node.js, React
                    </CardContent>
                  </Card>
                </a>
                <a
                  href="https://zayne-portfolio.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 500, mt: 2 }}>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Zayne's previous portfolio
                    </div>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="text.secondary"
                      style={{ fontStyle: "italic" }}
                    >
                      (Click to view project)
                    </Typography>
                    <Divider variant="middle" />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Tools
                      </Typography>
                      Atom Editor
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Skills
                      </Typography>
                      HTML5, CSS3
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Experience;
