import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Guarantee from "@/components/Guarantee";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Main = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Hero/>
                <Benefits/>
                <Guarantee/>
                <Reviews/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
};
export default Main;
