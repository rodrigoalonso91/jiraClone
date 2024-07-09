import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";

interface Props {}

export function EntryList({}: Props) {
  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)', overflow: 'auto',
          backgroundColor: 'transparent', padding: '2px 10px'
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List> 
      </Paper>
    </div>
  )
}

