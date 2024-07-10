import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "@/types";
import { useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries";

interface Props {
  status: EntryStatus
}

export function EntryList({ status }: Props) {

  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)', overflow: 'auto',
          backgroundColor: 'transparent', padding: '2px 10px'
        }}
      >
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List> 
      </Paper>
    </div>
  )
}
