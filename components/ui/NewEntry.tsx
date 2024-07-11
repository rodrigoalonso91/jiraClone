import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props { }

export function NewEntry({}: Props) {

  const [ inputValue, setInputValue ] = useState('');
  const [ touched, setTouched ] = useState(false);

  const { addEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTouched(true);
  }

  const onSave = () => {
    if (inputValue.length === 0) return;
    addEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue('');
  }

  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 2
      }}
    >
      {
        isAddingEntry 
        ? (
          <>
            <TextField
              value={inputValue}
              onChange={handleChange}
              onBlur={() => setTouched(false)}
              fullWidth
              placeholder="Nueva entrada"
              autoFocus
              multiline
              label="Nueva entrada"
              helperText={!inputValue && touched && 'Ingrese un valor'}
              error={touched && !inputValue}
              sx={{
                marginTop: 2,
                marginBottom: 1
              }}
            />

            <Stack direction="row" justifyContent="space-between">
              <Button
                variant="text"
                onClick={() => {
                  setIsAddingEntry(false);
                  setTouched(false);
                  setInputValue('');
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Stack>
          </>
        )
        : (
          <Button
            startIcon={<AddIcon />}
            fullWidth
            variant="outlined"
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar tarea
          </Button>
        )
      }
    </Box>
  )
}