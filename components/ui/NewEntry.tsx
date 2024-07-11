import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from "@/context/entries";

interface Props { }

export function NewEntry({}: Props) {

  const [ isAdding, setIsAdding ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');
  const [ touched, setTouched ] = useState(false);

  const { addEntry } = useContext(EntriesContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTouched(true);
  }

  const onSave = () => {
    if (inputValue.length === 0) return;
    addEntry(inputValue);
    setIsAdding(false);
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
        isAdding 
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
                  setIsAdding(false);
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
            onClick={() => setIsAdding(true)}
          >
            Agregar tarea
          </Button>
        )
      }
    </Box>
  )
}