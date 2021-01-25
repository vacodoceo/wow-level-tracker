import { ChangeEvent, useEffect, useState } from "react";
import { Grid, IconButton, MenuItem, Select, Tooltip } from "@material-ui/core";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  ValueFormatterParams
} from "@material-ui/data-grid";
import HelpIcon from "@material-ui/icons/Help";

import { Character, firestore, User } from "../../firebase";
import programs, { Program } from "../../constants/programs";
import dashboardStyles from "./styles";
import { AccountCircle, Delete } from "@material-ui/icons";

interface PlayerDataGridProps {
  users: User[];
}

interface UserWithId extends User {
  id: string;
}

const updateUser = (email: string, key: string, value: unknown) => {
  firestore.doc(`users/${email}`).update({
    [key]: value
  });
  return;
};

const makeColumns = (classes: any): ColDef[] => [
  { field: "email", headerName: "Correo", width: 200 },
  {
    field: "maxLevel",
    headerName: "Nivel",
    description: "Nivel del personaje más alto.",
    width: 120,
    valueGetter: (params: ValueGetterParams) =>
      Math.max(
        ...params.row.characters.map(
          (character: Character) => character.level || 1
        ),
        0
      ),
    renderCell: (params: ValueFormatterParams) =>
      params.getValue("maxLevel") === 0 ? (
        <Tooltip title="Debes añadir 1 o más personajes a esta cuenta">
          <HelpIcon fontSize="inherit" color="primary" />
        </Tooltip>
      ) : (
        params.row.maxLevel
      )
  },
  { field: "name", headerName: "Nombre", width: 160 },
  { field: "lastName", headerName: "Apellido", width: 160 },
  {
    field: "group",
    headerName: "Grupo",
    width: 200,
    renderCell: (params: ValueFormatterParams) => (
      <Select
        value={params.getValue("group")}
        onChange={(e: ChangeEvent<{ value: unknown }>) =>
          updateUser(params.row.email, "group", e.target.value)
        }
      >
        <MenuItem value="">
          <em>Sin grupo</em>
        </MenuItem>
        <MenuItem value="25 de diciembre">25 de diciembre</MenuItem>
        <MenuItem value="1 de enero">1 de enero</MenuItem>
        <MenuItem value="8 de enero">8 de enero</MenuItem>
        <MenuItem value="15 de enero">15 de enero</MenuItem>
        <MenuItem value="22 de enero">22de enero</MenuItem>
      </Select>
    )
  },
  {
    field: "program",
    headerName: "Programa",
    hide: true,
    width: 200,
    renderCell: (params: ValueFormatterParams) => (
      <Select
        value={params.getValue("program")}
        onChange={(e: ChangeEvent<{ value: unknown }>) =>
          updateUser(params.row.email, "program", e.target.value)
        }
      >
        <MenuItem value="">
          <em>Sin programa</em>
        </MenuItem>
        {programs.map((program: Program) => (
          <MenuItem value={program.id}>{program.label}</MenuItem>
        ))}
      </Select>
    )
  },
  {
    field: "actions",
    flex: 1,
    headerName: "Acciones",
    renderCell: (params: ValueFormatterParams) => (
      <Grid container spacing={1}>
        <Grid item>
          <IconButton aria-label="account-info" size="small">
            <AccountCircle />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" size="small">
            <Delete style={{ fill: "#ff4569" }} />
          </IconButton>
        </Grid>
      </Grid>
    )
  }
];

const PlayerDataGrid = ({ users }: PlayerDataGridProps) => {
  const [usersWithId, setUsersWithId] = useState<UserWithId[]>([]);

  useEffect(() => {
    const newUsersWithId: UserWithId[] = users.map((user: User) => ({
      ...user,
      id: user.email
    }));
    setUsersWithId(newUsersWithId);
  }, [users]);

  const classes = dashboardStyles();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          autoPageSize
          columns={makeColumns(classes)}
          disableSelectionOnClick
          headerHeight={48}
          hideFooterRowCount
          hideFooterSelectedRowCount
          rowHeight={32}
          rows={usersWithId}
        />
      </div>
    </div>
  );
};

export default PlayerDataGrid;
