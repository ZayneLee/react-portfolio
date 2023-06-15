import Grid from "@mui/material/Grid";

const MyHeader = ({ headText, leftBlogChild, leftGitChild, leftLinkedInChild, rightChild }) => {
  return (
    <header>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={4} md={3} lg={2} container justifyContent="flex-start">
          {leftBlogChild}
          {leftGitChild}
          {leftLinkedInChild}
        </Grid>
        <Grid item xs={12} sm={4} md={6} lg={8} textAlign="center">
          {headText}
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2} container justifyContent="flex-end">
          {rightChild}
        </Grid>
      </Grid>
    </header>
  );
};

export default MyHeader;
