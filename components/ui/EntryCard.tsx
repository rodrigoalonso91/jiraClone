import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

interface Props {}

export function EntryCard({}: Props) {
  return (
    <Card
      sx={{ mb: 1}}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>Esto es la descripción</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}