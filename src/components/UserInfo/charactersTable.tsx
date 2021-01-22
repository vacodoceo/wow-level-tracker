import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Character } from "../../firebase";

interface charactersTableProps {
  characters: Character[];
}

const charactersTable = ({ characters }: charactersTableProps) => {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  return (
    <Box margin={1}>
      <Typography variant="subtitle1">Personajes</Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Reino</StyledTableCell>
            <StyledTableCell align="right">Nivel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
            <TableRow key={`${character.name}-${character.realm.slug}`}>
              <StyledTableCell component="th" scope="row">
                {character.name}
              </StyledTableCell>
              <StyledTableCell>{character.realm.name}</StyledTableCell>
              <StyledTableCell align="right">{character.level}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default charactersTable;
