//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';
import { Layout } from '../components/layouts';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (


    <Layout>


      <Typography variant='h1' color='primary'>
        Hola Mundo
      </Typography>

    </Layout>


  )
}
