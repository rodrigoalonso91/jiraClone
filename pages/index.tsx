import { Layout } from "@/components/layouts";
import { EntryList } from "@/components/ui";
import { Card, CardHeader, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Layout>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En progreso" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  );
}
