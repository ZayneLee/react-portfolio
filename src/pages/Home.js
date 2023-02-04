import { useContext, useEffect, useState } from "react";
import Myheader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "./../components/DiaryList";
import { DiaryStateContext } from "../App";
import EmotionItem from "../components/EmotionItem";
import { useNavigate } from "react-router-dom";
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
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
