import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
