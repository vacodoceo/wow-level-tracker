import { useEffect, useState } from "react";
import { MenuItem, Select, Tooltip } from "@material-ui/core";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  ValueFormatterParams,
} from "@material-ui/data-grid";
import HelpIcon from "@material-ui/icons/Help";

import { Character, User } from "../../firebase";

interface PlayerDataGridProps {
  users: User[];
}

interface UserWithId extends User {
  id: string;
}

const columns: ColDef[] = [
  { field: "email", headerName: "Correo", width: 240 },
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
      ),
  },
  { field: "name", headerName: "Nombre", width: 160 },
  { field: "lastName", headerName: "Apellido", width: 160 },
  {
    field: "group",
    headerName: "Grupo",
    width: 240,
    renderCell: (params: ValueFormatterParams) => (
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={params.getValue("group")}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem>Ten</MenuItem>
        <MenuItem>Twenty</MenuItem>
        <MenuItem>Thirty</MenuItem>
      </Select>
    ),
  },
];

const PlayerDataGrid = ({ users }: PlayerDataGridProps) => {
  const [usersWithId, setUsersWithId] = useState<UserWithId[]>([]);

  useEffect(() => {
    const newUsersWithId: UserWithId[] = users.map((user: User) => ({
      ...user,
      id: user.email,
    }));
    setUsersWithId(newUsersWithId);
  }, [users]);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={usersWithId}
          columns={columns}
          autoPageSize
          rowHeight={32}
          headerHeight={48}
        />
      </div>
    </div>
  );
};

export default PlayerDataGrid;
