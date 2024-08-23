import { UIContext } from "@/context/ui";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import { useContext } from "react";

interface Props {}

export function Navbar({}: Props) {

  const { openSidebar } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          sx={{ mr: 1.5 }}
          onClick={openSidebar}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref style={{ textDecoration: 'none', color: 'white'}}>
          <Typography variant="h6">Open Jira</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}