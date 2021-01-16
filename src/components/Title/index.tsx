import Typography from "@material-ui/core/Typography";

interface TitleProps {
  children: string | React.FC;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};

export default Title;
