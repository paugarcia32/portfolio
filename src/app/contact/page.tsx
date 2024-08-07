// pages/contact.tsx

/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import ContactForm from "@/components/contact-form";
import ContactCardBuilder from "@/components/ContactCardBuilder";
import { Divider } from "@/components/style/Divider";
import Layout from "@/components/style/Layout";
import { Heading1 } from "@/components/style/Headings";

export default function Contact() {
  return (
    <main className="container mx-auto p-4">
      <Layout title="Contact">
        {" "}
        <div className="mb-8 w-full">
          <Heading1>Get In Touch</Heading1>
          <Divider />
          <div className="flex flex-col md:flex-row gap-5 mb-5 w-full ">
            <div className="md:mt-4 mx-4">
              <p className="font-body text-base mb-2">
                Welcome to my Contact Me page!
              </p>
              <p className="font-body text-base mb-2">
                Whether you have an exciting project in mind, are interested in
                collaboration, or simply want to connect, I'm here to listen and
                help.
              </p>
              <p className="font-body text-base mb-2">
                Feel free to drop me a message and let's start a conversation.
                Your ideas, questions, and thoughts are valuable to me, and I'm
                eager to hear from you.
              </p>
              <p className="font-body text-base mb-2">
                Together, we can create something amazing. Looking forward to
                the opportunity to work with you and explore new possibilities.
              </p>
            </div>
            <ContactForm />
          </div>
          <ContactCardBuilder />
        </div>
      </Layout>
    </main>
  );
}
