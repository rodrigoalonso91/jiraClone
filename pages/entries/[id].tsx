import { ChangeEvent, useContext, useState } from "react";
import { Layout } from "@/components/layouts";
import type { Entry, EntryStatus } from "@/types";
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { EntriesContext } from "@/context/entries";
import { GetServerSideProps } from "next";
import { dbentries } from "@/database";

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
  entry: Entry
}
export default function EntryPage({ entry }: Props) {

  const { updateEntry } = useContext(EntriesContext);

  const [ inputValue, setInputValue ] = useState(entry.description);
  const [ status, setStatus ] = useState<EntryStatus>(entry.status);
  const [ touched, setTouched ] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setTouched(true);
  }

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  }

  const handleSave = () => {

    if (inputValue.trim().length === 0) return;

    const updatedEntry = {
      ...entry,
      status,
      description: inputValue
    }

    updateEntry(updatedEntry, true);
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
  const { id } = params as { id: string };
  
  const entry = await dbentries.getEntryById( id );


  if ( !entry ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      entry
    }
  }
}