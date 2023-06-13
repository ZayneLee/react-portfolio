import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonItem from "./components/ButtonItem";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import MyMenu from "./components/MyMenu";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import "./App.css";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const headText = "Zayne's Portfolio";
  const externalLinks = [
    { url: "https://zaynelee.tistory.com/", img: "/assets/T.png" },
    { url: "https://github.com/ZayneLee", img: "/assets/git.png" },
  ];

  const handleClick = (url) => {
    window.open(url);
  };

  const [comingSoonVisible, setComingSoonVisible] = useState(false);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    console.log("=======");
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyHeader
          headText={headText}
          leftBlogChild={
            <MyButton
              text={
                <ButtonItem
                  img={process.env.PUBLIC_URL + externalLinks[0].img}
                />
              }
              onClick={() => handleClick(externalLinks[0].url)}
            />
          }
          leftGitChild={
            <MyButton
              text={
                <ButtonItem
                  img={process.env.PUBLIC_URL + externalLinks[1].img}
                />
              }
              onClick={() => handleClick(externalLinks[1].url)}
            />
          }
          rightChild={
            <MyButton
              text={"ENG / KOR"}
              onClick={(e) => {
                setComingSoonVisible(true);
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
          </Routes>
        </div>
      </BrowserRouter>
      {comingSoonVisible && (
        <ComingSoon close={() => setComingSoonVisible(false)} />
      )}
      <Footer />
    </>
  );
}

export default App;
