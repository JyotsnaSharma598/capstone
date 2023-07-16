import React from 'react';
import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import Personas from 'components/Personas';
import CyberProblems from 'components/CyberProblems';
import SignUp from 'components/SignUp';
import Footer from 'components/Footer';

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Banner />
        <Personas />
        <CyberProblems />
        <SignUp />
        </main>
      <Footer />
    </>
  );
}
