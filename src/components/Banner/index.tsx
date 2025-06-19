"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
   return (
      <section className="mt-6 mb-24 flex items-center justify-center px-4 sm:px-8">
         <div className="relative inset-0 bg-center z-0 w-full max-w-7xl bg-[#308995] rounded-3xl shadow-xl overflow-hidden px-6 sm:px-10 md:px-16 py-12 md:py-20"

         >


            <div className="absolute inset-0 bg-[#3178a2] opacity-90 z-10" />

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-2 z-10 relative">


               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 text-white"
               >
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight font-serif mb-6">
                     Secure Your futire<br />
                     Job today
                  </h1>
                  <p className="text-yellow-100 text-lg max-w-md mb-8">
                     This is the best online job listing platform
                  </p>
                  <Link href='#'>
                     <button className="bg-[#D4C84F] hover:bg-[#fffac3] transition px-6 py-3 text-sm font-semibold rounded-md shadow text-black hover:text-black">
                        Apply now
                     </button>
                  </Link>

               </motion.div>


               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 hidden lg:flex items-end justify-center relative"
               >

                  <div className="absolute -top-4 right-10 w-20 h-20 bg-[#1A4D31] rounded-full opacity-80 z-0" />
                  <div className="absolute -bottom-6 left-6 w-10 h-10 bg-[#D4C84F] rounded-full z-0" />


                  <img
                     src="/images/bannerImage.png"
                     alt="Financial Advisors"
                     className="absolute -top-40 inset-x-0 mx-auto max-w-[560px] w-full object-contain z-20"
                  />
               </motion.div>




            </div>


            <div className="relative lg:absolute lg:bottom-6 lg:right-10 w-full lg:w-[320px] bg-white text-green-950 rounded-xl shadow-lg px-6 py-4 mt-12 lg:mt-0 z-20 mx-auto">
               <p className="text-center text-sm font-semibold mb-3">
                  Meet our esteemed partners and affiliates
               </p>
               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

                  <img
                     src="/images/smartrob.png"
                     alt="smartrob"
                     className="h-auto w-12 object-contain"
                  />

                  <img
                     src="/images/Google.png"
                     alt="Google"
                     className="h-auto w-20 object-contain"
                  />

                  <img
                     src="/images/Forbes_logo.png"
                     alt="Forbes"
                     className="h-auto w-12 object-contain"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
