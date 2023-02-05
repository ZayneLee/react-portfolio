import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmotionItem from "./components/EmotionItem";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import MyMenu from "./components/MyMenu";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const headText = `Zayne's Portfolio`;

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      dataId.current = parseInt(diaryList[0].id) + 1;

      dispatch({ type: "INIT", data: diaryList });
    }
  }, []);
  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const goToBlog = () => {
    window.open("https://zaynelee.tistory.com/");
  };

  const goToGit = () => {
    window.open("https://github.com/ZayneLee");
  };

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <MyHeader
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
            rightChild={
              <MyButton
                text={"KOR / ENG"}
                onClick={(e) => {
                  console.log(e);
                }}
              />
            }
          />
          <MyMenu />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/exp" element={<Experience />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
