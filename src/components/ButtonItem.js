const ButtonItem = ({
  emotion_id,
  img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : "EmotionItem_off",
      ].join(" ")}
      onClick={() => onClick(emotion_id)}
    >
      <img src={img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default ButtonItem;
