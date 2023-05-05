const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const emotionList = [
  {
    emotion_id: 1,
    img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "끔찍함",
  },
  {
    id: 1,
    img: process.env.PUBLIC_URL + `/assets/T.png`,
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + `/assets/git.png`,
  },
];
