import { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

import { functions, User } from "../../firebase";
import programs, { Program } from "../../constants/programs";

interface HeaderProps {
  users: User[] | undefined;
  groupFilter: string;
  setGroupFilter(groupFilter: string): void;
}

const Header = ({ users, groupFilter, setGroupFilter }: HeaderProps) => {
  const [updating, setUpdating] = useState<boolean>(false);
  const [lastUpdate, setLastUpdate] = useState<string>("Sin información");

  useEffect(() => {
    if (users) {
      const updateTimestamps = users!.map(user => user.updatedAt);
      const lastTimestamp = updateTimestamps.sort()[0];
      setLastUpdate(lastTimestamp.toDate().toLocaleString());
    }
  }, [users]);

  const updateCharactersInfo = async () => {
    setUpdating(true);
    await functions.httpsCallable("updateAllCharactersData")();
    setUpdating(false);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Tabs
          value={groupFilter}
          onChange={(e, newValue: string) => setGroupFilter(newValue)}
        >
          {programs.map((program: Program) => (
            <Tab value={program.id} label={program.label} />
          ))}
        </Tabs>
      </Grid>

      <Grid
        container
        xs={12}
        md={6}
        justify="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs="auto">
          <Typography align="center">
            Última actualización:
            <br />
            {lastUpdate}
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            endIcon={
              updating ? <CircularProgress size={18} /> : <RefreshIcon />
            }
            onClick={() => updateCharactersInfo()}
            disabled={updating}
          >
            Actualizar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
