import { Box, Button, Stack, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props {}

export function NewEntry({}: Props) {
  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 2
      }}
    >

      <Button
        startIcon={<AddIcon />}
        fullWidth
        variant="outlined"
      >
        Agregar tarea
      </Button>

      <TextField
        fullWidth
        placeholder="Nueva entrada"
        autoFocus
        multiline
        label="Nueva entrada"
        helperText="Ingrese un valor"
        sx={{
          marginTop: 2,
          marginBottom: 1
        }}
      />

      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="text"
        >
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Stack>
    </Box>
  )
}