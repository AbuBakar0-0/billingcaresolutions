import React, { useEffect } from 'react'
import Header from './../sections/Header';
import DomainCard from '../components/DomainArea/DomainCard';
import Contact from './../sections/Home/Contact';
import Footer from '../sections/Footer';
import Hero from '../sections/DomainArea/Hero';
import { Helmet } from 'react-helmet';



function DomainArea() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const data = [
        { title: "Alabama", img: "./assets/domain_area/images/alabama.webp", flag: "./assets/domain_area/flags/Flag_of_Alabama.svg", link: "https://medicaid.alabama.gov/", },
        { title: "Alaska", img: "./assets/domain_area/images/alaska.webp", flag: "./assets/domain_area/flags/Flag_of_Alaska.svg", link: "https://www.medicaidalaska.com/", },
        { title: "Arizona", img: "./assets/domain_area/images/arizona.webp", flag: "./assets/domain_area/flags/Flag_of_Arizona.svg", link: "https://www.azahcccs.gov/", },
        { title: "Arkansas", img: "./assets/domain_area/images/arkansas.webp", flag: "./assets/domain_area/flags/Flag_of_Arkansas.svg", link: "https://portal.mmis.arkansas.gov/armedicaid/provider/Home/tabid/135/Default.aspx", },
        { title: "California", img: "./assets/domain_area/images/california.webp", flag: "./assets/domain_area/flags/Flag_of_California.svg", link: "https://www.dhcs.ca.gov/formsandpubs/publications/Pages/Medi-CalProviderManuals.aspx", },
        { title: "Colorado", img: "./assets/domain_area/images/colorado.webp", flag: "./assets/domain_area/flags/Flag_of_Colorado.svg", link: "https://hcpf.colorado.gov/", },
        { title: "Connecticut", img: "./assets/domain_area/images/connecticut.webp", flag: "./assets/domain_area/flags/Flag_of_Connecticut.svg", link: "https://www.medicaid.gov/state-overviews/stateprofile.html?state=Connecticut", },
        { title: "Delaware", img: "./assets/domain_area/images/delaware.webp", flag: "./assets/domain_area/flags/Flag_of_Delaware.svg", link: "https://www.dhss.delaware.gov/dhss/dmma/medicaid.html", },
        { title: "Florida", img: "./assets/domain_area/images/florida.webp", flag: "./assets/domain_area/flags/Flag_of_Florida.svg", link: "https://ahca.myflorida.com/medicaid/rules/rule-59g-4.002-provider-reimbursement-schedules-and-billing-codes", },
        { title: "Georgia", img: "./assets/domain_area/images/georgia.webp", flag: "./assets/domain_area/flags/Flag_of_Georgia.svg", link: "https://medicaid.georgia.gov/ ", },
        { title: "Hawaii", img: "./assets/domain_area/images/hawaii.webp", flag: "./assets/domain_area/flags/Flag_of_Hawaii.svg", link: "https://medquest.hawaii.gov/", },
        { title: "Idaho", img: "./assets/domain_area/images/idaho.webp", flag: "./assets/domain_area/flags/Flag_of_Idaho.svg", link: "https://healthandwelfare.idaho.gov/services-programs/medicaid-health ", },
        { title: "Illinois", img: "./assets/domain_area/images/illinois.webp", flag: "./assets/domain_area/flags/Flag_of_Illinois.svg", link: "https://hfs.illinois.gov/ ", },
        { title: "Indiana", img: "./assets/domain_area/images/indiana.webp", flag: "./assets/domain_area/flags/Flag_of_Indiana.svg", link: "https://www.in.gov/medicaid/", },
        { title: "Iowa", img: "./assets/domain_area/images/lowa.webp", flag: "./assets/domain_area/flags/Flag_of_Iowa.svg", link: "https://hhs.iowa.gov/programs/welcome-iowa-medicaid", },
        { title: "Kansas", img: "./assets/domain_area/images/kansas.webp", flag: "./assets/domain_area/flags/Flag_of_Kansas.svg", link: "https://www.kancare.ks.gov/", },
        { title: "Kentucky", img: "./assets/domain_area/images/kentucky.webp", flag: "./assets/domain_area/flags/Flag_of_Kentucky.svg", link: "https://www.chfs.ky.gov/agencies/dms/Pages/default.aspx ", },
        { title: "Louisiana", img: "./assets/domain_area/images/louisiana.webp", flag: "./assets/domain_area/flags/Flag_of_Louisiana.svg", link: "https://ldh.la.gov/subhome/1", },
        { title: "Maine", img: "./assets/domain_area/images/maine.webp", flag: "./assets/domain_area/flags/Flag_of_the_State_of_Maine.svg", link: "https://www.maine.gov/dhhs/ofi/programs-services/health-care-assistance ", },
        { title: "Maryland", img: "./assets/domain_area/images/maryland.webp", flag: "./assets/domain_area/flags/Flag_of_Maryland.svg", link: "https://health.maryland.gov/mmcp/Pages/home.aspx", },
        { title: "Massachusetts", img: "./assets/domain_area/images/massachusetts.webp", flag: "./assets/domain_area/flags/Flag_of_Massachusetts.svg", link: "https://www.mass.gov/topics/masshealth", },
        { title: "Michigan", img: "./assets/domain_area/images/michigan.webp", flag: "./assets/domain_area/flags/Flag_of_Michigan.svg", link: "https://www.michigan.gov/mdhhs/assistance-programs/medicaid", },
        { title: "Minnesota", img: "./assets/domain_area/images/minnesota.webp", flag: "./assets/domain_area/flags/Flag_of_Minnesota.svg", link: "https://mn.gov/dhs/medicaid-matters/medicaid-minnesotacare-basics/", },
        { title: "Mississippi", img: "./assets/domain_area/images/mississippi.webp", flag: "./assets/domain_area/flags/Flag_of_Mississippi.svg", link: "https://medicaid.ms.gov/", },
        { title: "Missouri", img: "./assets/domain_area/images/missouri.webp", flag: "./assets/domain_area/flags/Flag_of_Missouri.svg", link: "https://mydss.mo.gov/mhd ", },
        { title: "Montana", img: "./assets/domain_area/images/montana.webp", flag: "./assets/domain_area/flags/Flag_of_Montana.svg", link: "https://dphhs.mt.gov/MontanaHealthcarePrograms/MemberServices ", },
        { title: "Nebraska", img: "./assets/domain_area/images/nebraska.webp", flag: "./assets/domain_area/flags/Flag_of_Nebraska.svg", link: "https://dhhs.ne.gov/Pages/Medicaid-Eligibility.aspx ", },
        { title: "Nevada", img: "./assets/domain_area/images/nevada.webp", flag: "./assets/domain_area/flags/Flag_of_Nevada.svg", link: "https://www.medicaid.nv.gov/", },
        { title: "New Hampshire", img: "./assets/domain_area/images/new hampshire.webp", flag: "./assets/domain_area/flags/Flag_of_New_Hampshire.svg", link: "https://www.dhhs.nh.gov/programs-services/medicaid ", },
        { title: "New Jersey", img: "./assets/domain_area/images/new jersey.webp", flag: "./assets/domain_area/flags/Flag_of_New jersey.svg", link: "https://www.nj.gov/getcoverednj/getstarted/family/ ", },
        { title: "New Mexico", img: "./assets/domain_area/images/new mexico.webp", flag: "./assets/domain_area/flags/Flag_of_New_Mexico.svg", link: "https://www.hca.nm.gov/lookingforassistance/centennial-care-overview/ ", },
        { title: "New York", img: "./assets/domain_area/images/new york.webp", flag: "./assets/domain_area/flags/Flag_of_New_York.svg", link: "https://health.ny.gov/health_care/medicaid/ ", },
        { title: "North Carolina", img: "./assets/domain_area/images/new carolina.webp", flag: "./assets/domain_area/flags/Flag_of_North_Carolina.svg", link: "https://medicaid.ncdhhs.gov  ", },
        { title: "North Dakota", img: "./assets/domain_area/images/north dakota.webp", flag: "./assets/domain_area/flags/Flag_of_North dakota.svg", link: "https://www.hhs.nd.gov/healthcare/medicaid ", },
        { title: "Ohio", img: "./assets/domain_area/images/ohio.webp", flag: "./assets/domain_area/flags/Flag_of_Ohio.svg", link: "https://medicaid.ohio.gov/ ", },
        { title: "Oklahoma", img: "./assets/domain_area/images/oklahoma.webp", flag: "./assets/domain_area/flags/Flag_of_Oklahoma.svg", link: "https://oklahoma.gov/ohca.html ", },
        { title: "Oregon", img: "./assets/domain_area/images/oregon.webp", flag: "./assets/domain_area/flags/Flag_of_Oregon.svg", link: "https://www.oregon.gov/oha/hsd/ohp/pages/index.aspx ", },
        { title: "Pennsylvania", img: "./assets/domain_area/images/pennsylvania.webp", flag: "./assets/domain_area/flags/Flag_of_Pennsylvania.svg", link: "https://www.pa.gov/en/agencies/dhs/resources/medicaid.html ", },
        { title: "Rhode Island", img: "./assets/domain_area/images/rhode island.webp", flag: "./assets/domain_area/flags/Flag_of_Rhode_Island.svg", link: "https://eohhs.ri.gov/Consumer/FamilieswithChildren/RIteCare.aspx  ", },
        { title: "South Carolina", img: "./assets/domain_area/images/south carolina.webp", flag: "./assets/domain_area/flags/Flag_of_South_Carolina.svg", link: "https://www.scdhhs.gov/ ", },
        { title: "South Dakota", img: "./assets/domain_area/images/south dakota.webp", flag: "./assets/domain_area/flags/Flag_of_South_Dakota.svg", link: "https://dss.sd.gov/medicaid/ ", },
        { title: "Tennessee", img: "./assets/domain_area/images/tennessee.webp", flag: "./assets/domain_area/flags/Flag_of_Tennessee.svg", link: "https://www.tn.gov/tenncare/members-applicants/eligibility/tenncare-medicaid.html ", },
        { title: "Texas", img: "./assets/domain_area/images/texas.webp", flag: "./assets/domain_area/flags/Flag_of_Texas.svg", link: "https://www.tmhp.com/", },
        { title: "Utah", img: "./assets/domain_area/images/utah.webp", flag: "./assets/domain_area/flags/Flag_of_Utah.svg", link: "https://medicaid.utah.gov/ ", },
        { title: "Vermont", img: "./assets/domain_area/images/vermont.webp", flag: "./assets/domain_area/flags/Flag_of_Vermont.svg", link: "http://dvha.vermont.gov/members ", },
        { title: "Virginia", img: "./assets/domain_area/images/virginia.webp", flag: "./assets/domain_area/flags/Flag_of_Virginia.svg", link: "https://www.dmas.virginia.gov/ ", },
        { title: "Washington", img: "./assets/domain_area/images/washington.webp", flag: "./assets/domain_area/flags/Flag_of_Washington.svg", link: "https://www.dshs.wa.gov/altsa/home-and-community-services/medicaid ", },
        { title: "West Virginia", img: "./assets/domain_area/images/west virginia.webp", flag: "./assets/domain_area/flags/Flag_of_West_Virginia.svg", link: "https://dhhr.wv.gov/bms/Members/Apply/Pages/default.aspx ", },
        { title: "Wisconsin", img: "./assets/domain_area/images/wisconsin.webp", flag: "./assets/domain_area/flags/Flag_of_Wisconsin.svg", link: "https://www.dhs.wisconsin.gov/medicaid/index.htm  ", },
        { title: "Wyoming", img: "./assets/domain_area/images/wyoming.webp", flag: "./assets/domain_area/flags/Flag_of_Wyoming.svg", link: "https://health.wyo.gov/healthcarefin/medicaid/ ", },
    ];


    return (
        <>
            <Helmet>
                <title>
                    Domain Area - Billing Care Solutions
                </title>
                <meta name="description" content="At Billing Care Solutions, we excel in navigating the intricacies of healthcare management through our comprehensive domain areas. Our expertise spans the entire revenue cycle, ensuring that healthcare practices achieve optimal financial performance and operational excellence. Experience unparalleled expertise in healthcare management with Billing Care Solutions. Together, we’ll drive success in your practice!" />
                <meta property="og:title" content="Domain Area - Billing Care Solutions" />
                <meta property="og:description" content="At Billing Care Solutions, we excel in navigating the intricacies of healthcare management through our comprehensive domain areas. Our expertise spans the entire revenue cycle, ensuring that healthcare practices achieve optimal financial performance and operational excellence. Experience unparalleled expertise in healthcare management with Billing Care Solutions. Together, we’ll drive success in your practice!" />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet>
            <Header />
            <Hero />
            <Contact />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {data.map((item) => (
                    <a href={item.link}>
                        <DomainCard data={item} />
                    </a>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default DomainArea