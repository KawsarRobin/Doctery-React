import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQ/FAQ';
import Services from '../Services/Services';
import Footer from './../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
