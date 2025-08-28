"use client"

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/service";
import Footer from "./components/footer";
import FormLogin from "./components/formLogin";

export default function Home() {

  return (
<div>
   <Navbar />
   <Hero />
   <FormLogin />
   <Services />
   <Footer />
</div>
  );
}