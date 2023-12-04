import { FC } from "react";
import  Head  from "next/head"
import { Box } from "@mui/material"
import { Navbar } from "../ui";

/* Defini la estructura de las props en la interface */
/* Estableci que Layout es un funcional component y recibe algo 
tipo "Props" y si el titulo no tiene nada va ser "OpenJira" por defecto */


interface Props {
    title?: string;
    children?: any;
}

export const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
   <Box sx={{ flexFlow: 1 }}>

    <Head>
        <title>{title}</title>
    </Head>

    {/* Navbar */}
    <Navbar />
    {/* Sidebar */}

    <Box sx={{ padding: '10px 20px'  }}>
        { children }
    </Box>
    

   </Box>
  )
}
