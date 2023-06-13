import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const MyHeader = ({ headText, leftBlogChild, leftGitChild, leftLinkedInChild,rightChild }) => {
  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        <Stack
          direction="row"
          sx={{width:"20%"}}
        >
          {leftBlogChild}
          {leftGitChild}
          {leftLinkedInChild}
        </Stack>
        <Box
          className="head_text"
          textAlign="center" 
          sx={{width:"60%"}}

        >
          {headText}
        </Box>
        <Box
          className="head_btn_right"
          display="flex"
          justifyContent="flex-end"
          sx={{width:"20%"}}

        >
          {rightChild}
        </Box>
      </Box>
    </header>
  );
};

export default MyHeader;
