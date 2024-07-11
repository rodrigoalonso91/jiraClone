import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "@/types";
import { DragEvent, useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import styles from './EntryList.module.css';    

interface Props {
  status: EntryStatus
}

export function EntryList({ status }: Props) {

  const { entries } = useContext(EntriesContext);
  const { isDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

  const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text');
  }

  const allowDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <div
      className={isDragging ? styles.dragging : ''}
      onDrop={handleOnDrop}
      onDragOver={allowDrag}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 250px)', overflow: 'auto',
          backgroundColor: 'transparent', padding: '2px 10px'
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
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

