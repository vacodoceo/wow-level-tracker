import { useState, Fragment } from "react";

import { TableRow, Tooltip, Typography } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

import { User } from "../../firebase";

interface RowProps {
  user: User;
}

const Row = ({ user }: RowProps) => {
  const [open, setOpen] = useState(false);

  const maxCharacterLevel = Math.max(
    ...user.characters.map((character) => character.level || 1),
    0
  );

  return (
    <Fragment>
      {/* <TableRow className={classes.root}>
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
          {user.email}
        </StyledTableCell>
        <StyledTableCell>{user.name}</StyledTableCell>
        <StyledTableCell>{user.lastName}</StyledTableCell>
        <StyledTableCell align="right">
          {maxCharacterLevel || (
            <Tooltip title="Debes añadir 1 o más personajes a esta cuenta">
              <HelpIcon fontSize="inherit" color="primary" />
            </Tooltip>
          )}
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        ></StyledTableCell>
      </TableRow> */}
    </Fragment>
  );
};

export default Row;
