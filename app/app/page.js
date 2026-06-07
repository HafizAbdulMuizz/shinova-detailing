"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("Essential Wash");
  return (
    
    <>
      <Navbar />
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing setSelectedPackage={setSelectedPackage} />
      <Gallery />
      <Booking selectedPackage={selectedPackage} />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}