import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import Header from './HeaderSection/Header';
import Allbooks from './Allbooks/Allbooks';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Layouts/Footer/Footer';
import Topwriter from './TopWriterSection/Topwriter';
import Blogs from './BlogSection/Blogs';
import Reveiw from './ReveiwSection/Reveiw';
import Extraheader from './ExtraHeaderSection/Extraheader';
import Faqsection from '../FAQsection/Faqsection';

const Home = () => {
    const books = useLoaderData()
    return (
        <div>
           <Navbar></Navbar>
           
           <Extraheader></Extraheader>
           <h1 className='text-center text-red-500 font-bold text-3xl mt-24'>TOP BOOKS</h1>
           <Allbooks books={books}></Allbooks>
           
           <h1 className='text-center text-red-500 font-bold text-3xl mt-10 mb-8'>TOP TRANDING</h1>
           <Blogs></Blogs>
           <Reveiw></Reveiw>
           <Faqsection></Faqsection>
           <Footer></Footer>
        </div>
    );
};

export default Home;