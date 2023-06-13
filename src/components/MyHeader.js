import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const MyHeader = ({ headText, leftBlogChild, leftGitChild, leftLinkedInChild,rightChild }) => {
  return (
    <header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack
          direction="row"
          alignItems={{ xs: "center", sm: "flex-start" }}
          flexGrow={1}
        >
          {leftBlogChild}
          {leftGitChild}
          {leftLinkedInChild}
        </Stack>
        <Box className="head_text" textAlign={{ xs: "center", sm: "center" }}>
          {headText}
        </Box>
        <Box
          className="head_btn_right"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {rightChild}
        </Box>
      </Box>
    </header>
  );
};

export default MyHeader;
