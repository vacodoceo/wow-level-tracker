import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Copyright = () => {
  return (
    <Box pt={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
          WoW Level Tracker
        </Link>
        &emsp;
        {new Date().getFullYear()}
        &emsp; by &emsp;
        <Link variant="overline" href="https://github.com/vacodoceo/">
          Verner Codoceo
        </Link>
      </Typography>
    </Box>
  );
};

export default Copyright;
