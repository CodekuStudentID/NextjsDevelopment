"use client"

// import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/service";
import FormLogin from "./components/formLogin";
// import Footer from "./components/footer";

export default function Home() {

  return (
<div>
   {/* <Navbar /> */}
   <Hero />
   <FormLogin />
   <Services />
   {/* <Footer /> */}
</div>
  );
}