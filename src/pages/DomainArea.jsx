import React from 'react'
import Header from './../sections/Header';
import Hero from '../sections/Services/Hero';
import DomainCard from '../components/DomainArea/DomainCard';
import Contact from './../sections/Home/Contact';
import Footer from '../sections/Footer';

function DomainArea() {
    const data = [
        { title: "Alabama", img: "", icon: "" },
        { title: "Alaska", img: "", icon: "" },
        { title: "Arizona", img: "", icon: "" },
        { title: "Arkansas", img: "", icon: "" },
        { title: "California", img: "", icon: "" },
        { title: "Colorado", img: "", icon: "" },
        { title: "Connecticut", img: "", icon: "" },
        { title: "Delaware", img: "", icon: "" },
        { title: "Florida", img: "", icon: "" },
        { title: "Georgia", img: "", icon: "" },
        { title: "Hawaii", img: "", icon: "" },
        { title: "Idaho", img: "", icon: "" },
        { title: "Illinois", img: "", icon: "" },
        { title: "Indiana", img: "", icon: "" },
        { title: "Iowa", img: "", icon: "" },
        { title: "Kansas", img: "", icon: "" },
        { title: "Kentucky", img: "", icon: "" },
        { title: "Louisiana", img: "", icon: "" },
        { title: "Maine", img: "", icon: "" },
        { title: "Maryland", img: "", icon: "" },
        { title: "Massachusetts", img: "", icon: "" },
        { title: "Michigan", img: "", icon: "" },
        { title: "Minnesota", img: "", icon: "" },
        { title: "Mississippi", img: "", icon: "" },
        { title: "Missouri", img: "", icon: "" },
        { title: "Montana", img: "", icon: "" },
        { title: "Nebraska", img: "", icon: "" },
        { title: "Nevada", img: "", icon: "" },
        { title: "New Hampshire", img: "", icon: "" },
        { title: "New Jersey", img: "", icon: "" },
        { title: "New Mexico", img: "", icon: "" },
        { title: "New York", img: "", icon: "" },
        { title: "North Carolina", img: "", icon: "" },
        { title: "North Dakota", img: "", icon: "" },
        { title: "Ohio", img: "", icon: "" },
        { title: "Oklahoma", img: "", icon: "" },
        { title: "Oregon", img: "", icon: "" },
        { title: "Pennsylvania", img: "", icon: "" },
        { title: "Rhode Island", img: "", icon: "" },
        { title: "South Carolina", img: "", icon: "" },
        { title: "South Dakota", img: "", icon: "" },
        { title: "Tennessee", img: "", icon: "" },
        { title: "Texas", img: "", icon: "" },
        { title: "Utah", img: "", icon: "" },
        { title: "Vermont", img: "", icon: "" },
        { title: "Virginia", img: "", icon: "" },
        { title: "Washington", img: "", icon: "" },
        { title: "West Virginia", img: "", icon: "" },
        { title: "Wisconsin", img: "", icon: "" },
        { title: "Wyoming", img: "", icon: "" }
    ];

    return (
        <>
            <Header />
            <Hero />
            <Contact />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {data.map((item) => (
                    <DomainCard data={item} />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default DomainArea