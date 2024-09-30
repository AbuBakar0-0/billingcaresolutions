import React from 'react'
import Header from './../sections/Header';
import DomainCard from '../components/DomainArea/DomainCard';
import Contact from './../sections/Home/Contact';
import Footer from '../sections/Footer';
import Hero from '../sections/DomainArea/Hero';

function DomainArea() {
    window.scrollTo(0, 0);

    const data = [
        { title: "Alabama", img: "./assets/domain_area/images/alabama.webp", flag: "./assets/domain_area/flags/Flag_of_Alabama.svg" },
        { title: "Alaska", img: "./assets/domain_area/images/alaska.webp", flag: "./assets/domain_area/flags/Flag_of_Alaska.svg" },
        { title: "Arizona", img: "./assets/domain_area/images/arizona.webp", flag: "./assets/domain_area/flags/Flag_of_Arizona.svg" },
        { title: "Arkansas", img: "./assets/domain_area/images/arkansas.webp", flag: "./assets/domain_area/flags/Flag_of_Arkansas.svg" },
        { title: "California", img: "./assets/domain_area/images/california.webp", flag: "./assets/domain_area/flags/Flag_of_California.svg" },
        { title: "Colorado", img: "./assets/domain_area/images/colorado.webp", flag: "./assets/domain_area/flags/Flag_of_Colorado.svg" },
        { title: "Connecticut", img: "./assets/domain_area/images/connecticut.webp", flag: "./assets/domain_area/flags/Flag_of_Connecticut.svg" },
        { title: "Delaware", img: "./assets/domain_area/images/delaware.webp", flag: "./assets/domain_area/flags/Flag_of_Delaware.svg" },
        { title: "Florida", img: "./assets/domain_area/images/florida.webp", flag: "./assets/domain_area/flags/Flag_of_Florida.svg" },
        { title: "Georgia", img: "./assets/domain_area/images/georgia.webp", flag: "./assets/domain_area/flags/Flag_of_Georgia.svg" },
        { title: "Hawaii", img: "./assets/domain_area/images/hawaii.webp", flag: "./assets/domain_area/flags/Flag_of_Hawaii.svg" },
        { title: "Idaho", img: "./assets/domain_area/images/idaho.webp", flag: "./assets/domain_area/flags/Flag_of_Idaho.svg" },
        { title: "Illinois", img: "./assets/domain_area/images/illinois.webp", flag: "./assets/domain_area/flags/Flag_of_Illinois.svg" },
        { title: "Indiana", img: "./assets/domain_area/images/indiana.webp", flag: "./assets/domain_area/flags/Flag_of_Indiana.svg" },
        { title: "Iowa", img: "./assets/domain_area/images/lowa.webp", flag: "./assets/domain_area/flags/Flag_of_Iowa.svg" },
        { title: "Kansas", img: "./assets/domain_area/images/kansas.webp", flag: "./assets/domain_area/flags/Flag_of_Kansas.svg" },
        { title: "Kentucky", img: "./assets/domain_area/images/kentucky.webp", flag: "./assets/domain_area/flags/Flag_of_Kentucky.svg" },
        { title: "Louisiana", img: "./assets/domain_area/images/louisiana.webp", flag: "./assets/domain_area/flags/Flag_of_Louisiana.svg" },
        { title: "Maine", img: "./assets/domain_area/images/maine.webp", flag: "./assets/domain_area/flags/Flag_of_the_State_of_Maine.svg" },
        { title: "Maryland", img: "./assets/domain_area/images/maryland.webp", flag: "./assets/domain_area/flags/Flag_of_Maryland.svg" },
        { title: "Massachusetts", img: "./assets/domain_area/images/massachusetts.webp", flag: "./assets/domain_area/flags/Flag_of_Massachusetts.svg" },
        { title: "Michigan", img: "./assets/domain_area/images/michigan.webp", flag: "./assets/domain_area/flags/Flag_of_Michigan.svg" },
        { title: "Minnesota", img: "./assets/domain_area/images/minnesota.webp", flag: "./assets/domain_area/flags/Flag_of_Minnesota.svg" },
        { title: "Mississippi", img: "./assets/domain_area/images/mississippi.webp", flag: "./assets/domain_area/flags/Flag_of_Mississippi.svg" },
        { title: "Missouri", img: "./assets/domain_area/images/missouri.webp", flag: "./assets/domain_area/flags/Flag_of_Missouri.svg" },
        { title: "Montana", img: "./assets/domain_area/images/montana.webp", flag: "./assets/domain_area/flags/Flag_of_Montana.svg" },
        { title: "Nebraska", img: "./assets/domain_area/images/nebraska.webp", flag: "./assets/domain_area/flags/Flag_of_Nebraska.svg" },
        { title: "Nevada", img: "./assets/domain_area/images/nevada.webp", flag: "./assets/domain_area/flags/Flag_of_Nevada.svg" },
        { title: "New Hampshire", img: "./assets/domain_area/images/new hampshire.webp", flag: "./assets/domain_area/flags/Flag_of_New_Hampshire.svg" },
        { title: "New Jersey", img: "./assets/domain_area/images/new jersey.webp", flag: "./assets/domain_area/flags/Flag_of_New jersey.svg" },
        { title: "New Mexico", img: "./assets/domain_area/images/new mexico.webp", flag: "./assets/domain_area/flags/Flag_of_New_Mexico.svg" },
        { title: "New York", img: "./assets/domain_area/images/new york.webp", flag: "./assets/domain_area/flags/Flag_of_New_York.svg" },
        { title: "North Carolina", img: "./assets/domain_area/images/new carolina.webp", flag: "./assets/domain_area/flags/Flag_of_North_Carolina.svg" },
        { title: "North Dakota", img: "./assets/domain_area/images/north dakota.webp", flag: "./assets/domain_area/flags/Flag_of_North dakota.svg" },
        { title: "Ohio", img: "./assets/domain_area/images/ohio.webp", flag: "./assets/domain_area/flags/Flag_of_Ohio.svg" },
        { title: "Oklahoma", img: "./assets/domain_area/images/oklahoma.webp", flag: "./assets/domain_area/flags/Flag_of_Oklahoma.svg" },
        { title: "Oregon", img: "./assets/domain_area/images/oregon.webp", flag: "./assets/domain_area/flags/Flag_of_Oregon.svg" },
        { title: "Pennsylvania", img: "./assets/domain_area/images/pennsylvania.webp", flag: "./assets/domain_area/flags/Flag_of_Pennsylvania.svg" },
        { title: "Rhode Island", img: "./assets/domain_area/images/rhode island.webp", flag: "./assets/domain_area/flags/Flag_of_Rhode_Island.svg" },
        { title: "South Carolina", img: "./assets/domain_area/images/south carolina.webp", flag: "./assets/domain_area/flags/Flag_of_South_Carolina.svg" },
        { title: "South Dakota", img: "./assets/domain_area/images/south dakota.webp", flag: "./assets/domain_area/flags/Flag_of_South_Dakota.svg" },
        { title: "Tennessee", img: "./assets/domain_area/images/tennessee.webp", flag: "./assets/domain_area/flags/Flag_of_Tennessee.svg" },
        { title: "Texas", img: "./assets/domain_area/images/texas.webp", flag: "./assets/domain_area/flags/Flag_of_Texas.svg" },
        { title: "Utah", img: "./assets/domain_area/images/utah.webp", flag: "./assets/domain_area/flags/Flag_of_Utah.svg" },
        { title: "Vermont", img: "./assets/domain_area/images/vermont.webp", flag: "./assets/domain_area/flags/Flag_of_Vermont.svg" },
        { title: "Virginia", img: "./assets/domain_area/images/virginia.webp", flag: "./assets/domain_area/flags/Flag_of_Virginia.svg" },
        { title: "Washington", img: "./assets/domain_area/images/washington.webp", flag: "./assets/domain_area/flags/Flag_of_Washington.svg" },
        { title: "West Virginia", img: "./assets/domain_area/images/west virginia.webp", flag: "./assets/domain_area/flags/Flag_of_West_Virginia.svg" },
        { title: "Wisconsin", img: "./assets/domain_area/images/wisconsin.webp", flag: "./assets/domain_area/flags/Flag_of_Wisconsin.svg" },
        { title: "Wyoming", img: "./assets/domain_area/images/wyoming.webp", flag: "./assets/domain_area/flags/Flag_of_Wyoming.svg" }
    ];
    

    return (
        <>
            <Header />
            <Hero/>
            <Contact />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {data.map((item) => (
                    <DomainCard data={item} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default DomainArea