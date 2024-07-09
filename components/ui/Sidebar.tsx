import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

interface Props {}

export function Sidebar({}: Props) {
  return (
    <Drawer
      open
      anchor="left"
      onClose={() => {}}
    >

      <Stack width={250}>

        <Box
          sx={{ padding: '5px 10px' }}
        >
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {
            menuItems.map((text, index) => (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {
                    index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItems.map((text, index) => (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {
                    index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))
          }
        </List>
      </Stack>


    </Drawer>
  )
}