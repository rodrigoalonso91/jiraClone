import { ChangeEvent, useState } from "react";
import { Layout } from "@/components/layouts";
import { EntryStatus } from "@/types";
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

export default function EntryPage() {

  const [ inputValue, setInputValue ] = useState('');
  const [ status, setStatus ] = useState<EntryStatus>('pending');
  const [ touched, setTouched ] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setTouched(true);
  }

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  }

  const handleSave = () => {
    
  }

  return (
    <Layout title=".... .. . . .">
      <Grid
        container
        justifyContent="center"
        marginTop={2}  
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title="OpenJira"
              subheader="Subheader"
            />

            <CardContent>
              <TextField
                sx={{ mb: 1, mt: 2 }}
                fullWidth
                multiline
                autoFocus
                label="Nueva entrada"
                placeholder="Nueva entrada"
                value={inputValue}
                onChange={onTextFieldChange}
                onBlur={() => setTouched(true)}
                onFocus={() => setTouched(false)}
                helperText={ !inputValue && touched && 'Ingrese un valor' }
                error={ !inputValue && touched }
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {
                    validStatus.map(status => (
                      <FormControlLabel
                        key={status}
                        value={status}
                        control={<Radio />}
                        label={capitalize(status)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSave}
              >
                Guardar
              </Button>

            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}