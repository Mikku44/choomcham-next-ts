"use client"
import Navbar from "../components/nav";
import Footer from '../components/footer';
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Script from 'next/script';
import NavigationBar from "../components/navbar";





const bussiness = [
    { id: '0', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '1', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '2', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '3', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '4', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '5', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '6', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '7', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
]



function Service() {


    return <>

        <NavigationBar current="0" />
        <section className="p-10"></section>
        <Footer />
    </>
}

export default Service