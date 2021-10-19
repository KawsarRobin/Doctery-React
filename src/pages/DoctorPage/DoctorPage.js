import React from 'react';
import Doctors from '../../components/Doctors/Doctors';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const DoctorPage = () => {
    return (
        <>
            <Header></Header>
            <Doctors></Doctors>
            <Footer></Footer>
        </>
    );
};

export default DoctorPage;