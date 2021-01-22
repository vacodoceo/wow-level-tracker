import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Copyright = () => {
  return (
    <Box pt={3}>
      <Typography variant="body2" color="textSecondary" align="center">
        WoW Level Tracker by{" "}
        <Link variant="overline" href="https://github.com/vacodoceo/">
          Verner Codoceo
        </Link>
      </Typography>
    </Box>
  );
};

export default Copyright;
