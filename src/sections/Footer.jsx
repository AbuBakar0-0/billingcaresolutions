import React from 'react'
import FooterLine from './../components/Home/FooterLine';
import { Link } from 'react-router-dom';

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const quicklinks = [
    {
      title: "Schedule a Demo",
      link: "/contact",
    },
    {
      title: "Why Billing Care Solutions",
      link: "/whybcs",
    },
    {
      title: "Specialities",
      link: "/specialities",
    },
    {
      title: "Domain Area",
      link: "/domain",
    },
    {
      title: "FAQs",
      link: "/faqs",
    },
    {
      title: "Blog",
      link: "/blogs",
    },
  ];

  const services = [
    {
      title: "Medical Billing and Coding Services",
      link: "/servicesDetails?index=0",
    },
    {
      title: "Credentialing Services",
      link: "/serviceDetails?index=1",
    },
    {
      title: "Revenue Cycle Management Services",
      link: "/serviceDetails?index=2",
    },
    {
      title: "AR & Denial Management Services",
      link: "/serviceDetails?index=5",
    },
    {
      title: "Billing & Coding Audit Services",
      link: "/serviceDetails?index=3",
    },
    {
      title: "Verification & Prior Authorization Services",
      link: "/serviceDetails?index=6",
    },
  ];

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-secondary text-white font-custom px-20 py-10 text-sm space-y-4'>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-start'>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-start space-y-2'>
            <p className='text-xl text-left uppercase font-bold'>Quick Links</p>
            <FooterLine />
            <div className='flex flex-col gap-2 text-md'>
              {quicklinks.map((item) => (
                <Link to={item.link}>{item.title}</Link>
              ))}
            </div>
          </div>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-start space-y-2'>
            <p className='text-xl text-left uppercase font-bold'>Our Services</p>
            <FooterLine />
            <div className='flex flex-col gap-2 text-md'>
              {services.map((item) => (
                <Link to={item.link}>{item.title}</Link>
              ))}
            </div>
          </div>
          <div className='w-full md:w-1/3 flex flex-col justify-center items-start space-y-2'>
            <p className='text-xl text-left uppercase font-bold'>Get In Touch</p>
            <FooterLine />
            <div className='flex flex-col space-y-2 gap-3 text-md'>
              <p className='w-full'>
                Billing Care Solutions is facilitating in business cost reduction, IT solutions, revenue maximization and outsourcing solutions.
              </p>
              <div className='w-full flex flex-row justify-start gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p>(302) 244-0434</p>
              </div>
              <div className='w-full flex flex-row justify-start gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p>info@billingcaresolutions.com</p>
              </div>
              <div className='w-full flex flex-row justify-start gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                <p >30 N GOULD, ST, STE R SHERIDAN, WY 82801</p>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <a href="https://www.facebook.com/BillingCareSolutions">
                  <FaFacebook className='size-8 fill-secondary bg-white p-1 rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
                <a href="https://www.instagram.com/billingcaresolutions/?hl=en">
                  <RiInstagramFill className='size-8 fill-secondary bg-white p-1 rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
                <a href="https://www.linkedin.com/company/68852117/admin/feed/posts/">
                  <FaLinkedin className='size-8 fill-secondary bg-white p-1 rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
                <a href="https://x.com/billing_care ">
                  <FaXTwitter className='size-8 fill-secondary bg-white p-[0.30rem] rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
                <a href="https://www.pinterest.com/Billingcaresolutions/ ">
                  <FaPinterest className='size-8 fill-secondary bg-white p-1 rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
                <a href="https://www.threads.net/@billingcaresolutions?hl=en " className='flex justify-center items-center '>
                  <BsFillThreadsFill className='size-8 fill-secondary bg-white p-1 rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
                <a href="https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw">
                  <FaYoutube className='size-8 fill-secondary bg-white p-1 rounded-xl hover:bg-primary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-white flex items-center justify-center w-full bg-secondary text-white p-2 text-xs text-center'>
        Copyright © 2025 All rights reserved | Designed and Developed by Billing Care Solutions
      </div>
    </>
  )
}

export default Footer