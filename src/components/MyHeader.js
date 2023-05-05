import Box from "@mui/material/Box";

const MyHeader = ({ headText, leftBlogChild, leftGitChild, rightChild }) => {
  return (
    <header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          className="head_btn_left"
          display="flex"
          alignItems="center"
          flexGrow={1}
        >
          {leftBlogChild}
          {leftGitChild}
        </Box>
        <Box className="head_text" textAlign={{ xs: "center", sm: "center" }}>
          {headText}
        </Box>
        <Box
          className="head_btn_right"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          {rightChild}
        </Box>
      </Box>
    </header>
  );
};

export default MyHeader;
