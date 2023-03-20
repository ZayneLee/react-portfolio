import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmotionItem from "./components/EmotionItem";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import MyMenu from "./components/MyMenu";
import Diary from "./pages/Diary";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";



function App() {
  const headText = `Zayne's Portfolio`;

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
    console.log('=======')
  });

  return (
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
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
