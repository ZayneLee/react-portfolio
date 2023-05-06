import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const MyHeader = ({ headText, leftBlogChild, leftGitChild, rightChild }) => {
  return (
    <header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={1}
          flexGrow={1}
        >
          {leftBlogChild}
          {leftGitChild}
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
