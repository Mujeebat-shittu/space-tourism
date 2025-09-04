// import BgImage from "/assets/home-bg.svg"
import Header from "../components/header"
import "../index.css"
// import { useState, useEffect } from "react";


const Home = () => {

    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     const img = new Image();
    //     img.src = BgImage;
    //     img.onload = () => setLoaded(true);
    // }, []);

    return (
        <>
            <div className="relative w-screen min-h-screen overflow-hidden ">
                <div
                    className={`bg-cover bg-center absolute inset-0 
        w-[100vw] lg:w-screen 
        min-h-screen h-screen 
        transform lg:transform-none 
        rotate-90 lg:rotate-none overflow-hidden `}
        style={{backgroundImage: "url(/assets/home-bg.svg)"}}
        /></div>


                {/* Fallback placeholder (while bg loads)
                <div className="absolute inset-0 bg-[#0B0D17]" /> */}

                <Header />


                <div className=" relative mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center min-h-screen justify-center text-[#D0D6F9] w-[70%] gap-10 text-center lg:text-left -top-15 lg:top-0 lg:mr-5">
                    <div className="flex gap-10 flex-col">
                        <p className="tracking-wider font-[Barlow_Condensed] text-2xl">SO. YOU WANT TO TRAVEL TO </p>
                        <h1 className="text-6xl font-[Barlow_Regular] ">SPACE</h1>
                        <p className="max-w-[400px] font-[Barlow_Regular text-base">
                            Let's face it; if you want to go to space. you might as well genuinely go to
                            outer space and not over kind of on the edge of it. Well, sit back, and relax
                            because we'll give you a truly out of this world experience
                        </p>
                    </div>

                    <div className="">
                        <button className="bg-white rounded-full w-40 lg:w-60 lg:h-60 h-40 text-[#0B0D17] text-2xl px-4 ">EXPLORE</button>

                    </div>

                </div>

        </>
    )

}

export default Home