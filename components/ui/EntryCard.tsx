import type { Entry } from "@/types";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
  entry: Entry
}

export function EntryCard({ entry }: Props) {
  return (
    <Card
      sx={{ mb: 1}}
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