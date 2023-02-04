import { useContext, useEffect, useState } from "react";
import Myheader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "./../components/DiaryList";
import { DiaryStateContext } from "../App";
import EmotionItem from "../components/EmotionItem";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `Zayne's Portfolio`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && lastDay >= it.date)
      );
    }
  }, [diaryList, curDate]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const goToBlog = () => {
    window.open("https://zaynelee.tistory.com/");
  };

  const goToGit = () => {
    window.open("https://github.com/ZayneLee");
  };
  return (
    <div>
      <Myheader
        headText={headText}
        leftBlogChild={
          <MyButton
            text={
              <EmotionItem
                emotion_img={process.env.PUBLIC_URL + `/assets/T.png`}
              />
            }
            onClick={goToBlog}
          />
        }
        leftGitChild={
          <MyButton
            text={
              <EmotionItem
                emotion_img={process.env.PUBLIC_URL + `/assets/git.png`}
              />
            }
            onClick={goToGit}
          />
        }
        rightChild={<MyButton text={"KOR / ENG"} onClick={increaseMonth} />}
      />
      <Stack alignItems="center" sx={{ marginTop: "2px" }}>
        <Stack sx={{ width: "25%" }}>
          <img src={process.env.PUBLIC_URL + `/assets/zayne.png`} />
        </Stack>
      </Stack>
      <Typography textAlign="center">
        <h1>About Me</h1>
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} textAlign="center">
          <h2>이름</h2> 이성도
        </Grid>
        <Grid item xs={4} textAlign="center">
          <h2>생년월일</h2> 1990.04.25
        </Grid>
        <Grid item xs={4} textAlign="center">
          <h2>주소</h2> 경북 구미시
        </Grid>
        <Grid item xs={4} textAlign="center">
          <h2>연락처</h2> 010-7767-7475
        </Grid>
        <Grid item xs={4} textAlign="center">
          <h2>이메일</h2> star1582@naver.com
        </Grid>
        <Grid item xs={4} textAlign="center">
          <h2>학력</h2> 한국방송통신대 컴퓨터과학과
        </Grid>
      </Grid>
      {/* <DiaryList diaryList={data} /> */}
    </div>
  );
};

export default Home;
