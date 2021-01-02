import { useState, Fragment } from "react";

import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { StyledTableCell, User } from "./index";
import playersTableRowStyles from "./rowStyles";

interface RowProps {
  user: User;
}

const Row = ({ user }: RowProps) => {
  const [open, setOpen] = useState(false);
  const classes = playersTableRowStyles();

  return (
    <Fragment>
      <TableRow className={classes.root}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {user.name}
        </StyledTableCell>
        <StyledTableCell>{user.lastName}</StyledTableCell>
        <StyledTableCell>{}</StyledTableCell>
        <StyledTableCell align="right">{}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
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
                  {user.characters.map(character => (
                    <TableRow key={`${character.name}-${character.realm}`}>
                      <StyledTableCell component="th" scope="row">
                        {character.name}
                      </StyledTableCell>
                      <StyledTableCell>{character.realm}</StyledTableCell>
                      <StyledTableCell align="right">
                        {character.level}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </Fragment>
  );
};

export default Row;
