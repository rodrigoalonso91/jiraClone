import { UIContext } from "@/context/ui";
import type { Entry } from "@/types";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { DragEvent, useContext } from "react";

interface Props {
  entry: Entry
}

export function EntryCard({ entry }: Props) {

  const { endDragging, startDragging } = useContext(UIContext)

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  }

  const handleDragEnd = () => {
    endDragging();
  }

  return (
    <Card
      sx={{ mb: 1}}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}