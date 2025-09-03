import BgImage from "../assets/render2.svg"
import Header from "../components/header"
import "../index.css"
import Moon from "../assets/moon.svg"
import Mars from "../assets/mars.svg"
import Europa from "../assets/europa.svg"
import Titan from "../assets/titan.svg"
import { useParams, Link } from "react-router-dom"

const Destination = () => {

    const destinations = {
        moon: {
            image: Moon,
            place: "MOON",
            description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,000 KM",
            tt: "3 DAYS"
        },
        mars: {
            image: Mars,
            place: "MARS",
            description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
            distance: "225 MIL.KM",
            tt: "9 MONTHS"
        },
        europa: {
            image: Europa,
            place: "EUROPA",
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL.KM",
            tt: "3 YEARS"
        },
        titan: {
            image: Titan,
            place: "TITAN",
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL.KM",
            tt: "7 YEARS"
        }
    }

    const { place } = useParams(); // "moon", "mars", etc.
    const destination = place ? destinations[place as keyof typeof destinations] : undefined;

    if (!destination) return <p>Not found</p>;

    return (
        <>
            <div className="relative w-screen min-h-screen overflow-hidden ">
                <div
                    className=" bg-cover bg-center absolute inset-0 
                      w-screen min-h-screen h-screen overflow-hidden"

                    style={{ backgroundImage: `url(${BgImage})` }}>
                </div>

                <Header />

                <div className=" relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center h-screen text-[#D0D6F9] w-[70%] gap-10 lg:gap-20 text-center -top-15">
                    <div className="w-[200px] lg:w-[500px]">
                        <img src={destination.image} alt={destination.place} />
                    </div>

                    <div className="flex flex-col">
                        <div className=" flex gap-10 items-center justify-center mb-6">
                            {Object.keys(destinations).map((key) => (
                                <Link
                                    key={key}
                                    to={`/destination/${key}`}
                                    className={`uppercase ${place === key ? "border-b-2 border-white text-white" : "text-gray-400"
                                        }`}
                                >
                                    {destinations[key as keyof typeof destinations].place}
                                </Link>
                            ))}
                        </div>


                        <div className="">
                            <h2 className="text-5xl font-[Bellefair] lg:text-left text-center">{destination.place}</h2>
                            <p className="max-w-[350px] text-center lg:text-left">{destination.description}</p>
                        </div>

                        <div className="w-full h-0.5 bg-white my-4 lg:mx-0 mx-auto flex items-center justify-center"></div>

                        <div className="flex flex-row gap-10 mx-auto lg:mx-0 text-left">
                            <div className="">
                                <h2 className="font-[Barlow_Condensed]">AVG. DISTANCE</h2>
                                <h2 className="font-[Bellefair] text-2xl">{destination.distance}</h2>

                            </div>
                            <div className="">
                                 <h2 className="font-[Barlow_Condensed]">EST. TRAVEL TIME</h2>
                                <h2 className="font-[Bellefair] text-2xl">{destination.tt}</h2>

                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </>
    )

}

export default Destination