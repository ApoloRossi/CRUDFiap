import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Login } from '../containers/Login'
import { Principal } from '../containers/Principal'
import { Register } from '../containers/Register'
import styles from '../styles/Home.module.css'

const RegisterUser: NextPage = () => {

  return (
    <>
      {
       <Register/>
      }
    </>
  );
}

export default RegisterUser
