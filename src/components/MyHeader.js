const MyHeader = ({ headText, leftBlogChild, leftGitChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">
        {leftBlogChild}
        {leftGitChild}
      </div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
