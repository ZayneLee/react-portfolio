const ButtonItem = ({
  emotion_id,
  img,
  emotion_descript,
  onClick,
  className,
}) => {
  return (
    <div
      className={`button-item-container ${className}`}
      onClick={() => onClick(emotion_id)}
    >
      <img src={img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default ButtonItem;
