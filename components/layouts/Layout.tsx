import { Box } from '@mui/material';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Navbar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string
}

export function Layout({ children, title = 'OpenJira' }: Props) {



  return (
    <Box sx={{ flexGrow: 1 }}>

      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>

    </Box>
  )
}