"use client";
import React from "react";
import ContactForm from "./components/ContactUsPage";
import Navbar from "@/app/home/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />

      <ContactForm />
    </>
  );
};

export default page;
