// import BgImage from "/assets/render3.svg"
import Header from "./header"
import "../index.css"
// import Commander from "/assets/commander.svg"
// import Specialist from "/assets/specialist.svg"
// import Pilot from "/assets/pilot.svg"
// import Flight from "/assets/flight-engineer.svg"
import { useParams, Link } from "react-router-dom"
import { Dot } from "lucide-react"

const Crew = () => {

    const crews = {
        commander: {
            image: "/assets/commander.svg",
            title: "COMMANDER",
            name: "DOUGLAS HURLEY",
            description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        specialist: {
            image: "/assets/specialist.svg",
            title: "MISSION SPECIALIST",
            name: "MARK SHUTTLEWORTH",
            description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        pilot: {
            image: "/assets/pilot.svg",
            title: "PILOT",
            name: "VICTOR GLOVER",
            description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
        },
        flight: {
            image: "/assets/flight-engineer.svg",
            title: "FLIGHT ENGINEER",
            name: "ANOUSHEH ANSARI",
            description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
        }
    }

    const { title } = useParams(); // "commander", "pilot", etc.
    const crew = title ? crews[title as keyof typeof crews] : undefined;

    if (!crew) return <p>Not found</p>;

    return (
        <>
            <div className="relative w-screen min-h-screen overflow-hidden ">
                <div
                    className=" bg-cover bg-center absolute inset-0 
                      w-screen 
                      min-h-screen h-screen 
                      lg:transform-none 
                      rotate-360  lg:rotate-none overflow-hidden"

                    style={{ backgroundImage: `url(/assets/render3.svg)` }}>

                </div>

                <Header />

                <div className=" relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center h-screen text-[#D0D6F9] w-[70%] gap-10 lg:gap-20 text-center -top-15">

                    <div className="flex flex-col gap-10">

                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-[Bellefair] lg:text-left text-center">{crew.title}</h2>
                            <h2 className="lg:text-left text-4xl font-[Bellefair] text-center ">{crew.name}</h2>
                            <p className="max-w-[350px] text-center lg:text-left font-[Barlow_Regular]">{crew.description}</p>
                        </div>

                        <div className=" flex gap-10 items-center justify-center mb-6">
                            {Object.keys(crews).map((key) => {
                                const isActive = title === key

                                return (
                                    <Link
                                        key={key}
                                        to={`/crew/${key}`}
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
                    <div className="w-[200px] lg:w-[500px]">
                        <img src={crew.image} alt={crew.title} />
                    </div>





                </div>

            </div>
        </>
    )

}

export default Crew