// import BgImage from "/assets/render4.svg"
import Header from "../components/header"
import "../index.css"
// import Vehicle from "/assets/rocket.svg"
// import Spaceport from "/assets/technology-image-b.svg"
// import Capsule from "/assets/technology-image-c.svg"
import { useParams, Link } from "react-router-dom"
import { Dot } from "lucide-react"

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
                      w-screen 
                      min-h-screen h-screen 
                      lg:transform-none 
                      rotate-360  lg:rotate-none overflow-hidden"

                    style={{ backgroundImage: `url(/assets/render4.svg)` }}>

                </div>

                <Header />

                <div className=" relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center h-screen text-[#D0D6F9] w-[70%] gap-10 lg:gap-20 text-center -top-15">

                    <div className="flex flex-col gap-10">

                    <div className="">
                        <img src={tech.image} alt={tech.title} className="w-[100vw] h-[300px]" />
                    </div>

                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-[Bellefair] lg:text-left text-center">{tech.title}</h2>
                            <p className="max-w-[350px] text-center lg:text-left font-[Barlow_Regular]">{tech.description}</p>
                        </div>

                        <div className=" flex gap-10 items-center justify-center mb-6">
                            {Object.keys(technologies).map((key) => {
                                const isActive = title === key

                                return (
                                    <Link
                                        key={key}
                                        to={`/technology/${key}`}
                                        className={`flex items-center gap-2 uppercase ${isActive ? "border-b-2 border-white text-white" : "text-gray-400"
                                            }`}
                                    >
                                        {/* Dot with ring if active */}
                                        <div className="relative flex items-center justify-center">
                                            <Dot strokeWidth={10} size={20} className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                                            {isActive && (
                                                <span className="absolute w-6 h-6 rounded-full border-2 border-white"></span>
                                            )}
                                        </div>
                                    </Link>
                                )
                            })}

                        </div>
                    </div>





                </div>

            </div>
        </>
    )

}

export default Technology