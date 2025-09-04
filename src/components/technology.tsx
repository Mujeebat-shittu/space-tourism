import Header from "../components/header"
import "../index.css"
import { useParams, Link } from "react-router-dom"

const Technology = () => {

    const technologies = {
        vehicle: {
            image: "/assets/rocket.svg",
            title: "LAUNCH VEHICLE",
            description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        spaceport: {
            image: "/assets/technology-image-b.svg",
            title: "SPACEPORT",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
        },
        capsule: {
            image: "/assets/technology-image-c.svg",
            title: "SPACE CAPSULE",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    }

    const { title } = useParams(); // "capsule", "spaceport", etc.
    const tech = title ? technologies[title as keyof typeof technologies] : undefined;

    if (!tech) return <p>Not found</p>;

    return (
        <>
            <div className="relative w-screen min-h-screen overflow-hidden ">
                <div
                    className=" bg-cover bg-center absolute inset-0 
                      w-screen min-h-screen h-screen rotate-360  lg:rotate-none overflow-hidden"
                    style={{ backgroundImage: `url(/assets/render4.svg)` }}>

                </div>

                <Header />

                <div className=" relative z-10 text-[#D0D6F9] p-6 lg:px-16">

                      <div className="flex flex-row lg:flex-col items-center justify-center gap-10 h-full">

                        <div className=" flex lg:flex-2/3 flex-col lg:flex-row gap-10 items-center text-center lg:justify-start lg:text-left">
                            <div className="flex flex-row lg:flex-col gap-10 items-center justify-center px-4 lg:px-0 overflow-visible">
                            {Object.keys(technologies).map((key, index) => {
                                const isActive = title === key

                                return (
                                    <Link
                                        key={key}
                                        to={`/technology/${key}`}
                                        className={`flex items-center justify-center text-[24px] gap-2 uppercase w-20 h-20 rounded-full border-2 
                                            ${isActive ? "bg-white text-[#0B0D17]" : "text-white border-white bg-none"
                                            }`}
                                    >
                                        {/* nav number*/}
                                            {index + 1}
                                    </Link>
                                )
                            })}

                            </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h2 className="font-[Bellefair] text-2xl lg:text-left">THE TERMINOLOGY</h2>
                            <h2 className="text-[40px] font-[Bellefair] lg:text-left text-center">{tech.title}</h2>
                            <p className="max-w-[350px] text-center lg:text-left font-[Barlow_Regular]">{tech.description}</p>
                        </div>
                        
                    <div className="lg:flex-1/3 w-full">
                        <img src={tech.image} alt={tech.title} className="lg:flex-1/3 w-full h-[400px] bg-cover"/>
                    </div>


                        </div>

                    </div>

                </div>
                </div>
        </>
    )

}

export default Technology