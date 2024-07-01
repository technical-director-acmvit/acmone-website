import React from "react";
import Navbar from "../../ui/components/Navbar";
import Image from "next/image";

const About: React.FC = () => {
  
  return (
    <div
      className="flex flex-col bg-black h-screen w-full bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('PurpleCirclePinkStripes.png '),url('PurpleGreenSplash.png ')",
        backgroundPosition: "top 110% right 127%,top 145% left 123%",
        backgroundSize: "36%, 52%",
      }}
    >
      <Navbar logoColor="black"/>
    <div className="h-[80vh] w-full flex justify-center items-center align-middle">
      <div className="relative" role="region" aria-roledescription="carousel">
        <div className="overflow-hidden">
          <div className="flex -ml-4 md:w-[30vw] w-[60vw]">
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex flex-col justify-center items-center"
            >
              <Image
                alt="Host a ride screenshot"
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/host.svg"
              />
              <h2 className="text-white text-xl font-bold text-center pt-5">
                Host a carpool!
              </h2>
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex flex-col justify-center items-center"
            >
              <Image
                alt="Available rides screenshot"
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/available.svg"
              />
              <h2 className="text-white text-xl font-bold text-center pt-5">
                Join an available ride
              </h2>
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex flex-col justify-center items-center"
            >
              <Image
                alt="Interested riders screenshot"
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/interested.svg"
              />
              <h2 className="text-white text-xl font-bold text-center pt-5">
                View requests to join your carpool
              </h2>
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex flex-col justify-center items-center"
            >
              <Image
                alt="Request page screenshot"
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/request.svg"
              />
              <h2 className="text-white text-xl font-bold text-center pt-5">
                
              </h2>
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex flex-col justify-center items-center"
            >
              <Image
                alt="Accept/Reject page screenshot"
                loading="lazy"
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/rejectUser.svg"
              />
              <h2 className="text-white text-xl font-bold text-center pt-5">
                Accept or reject requests based on your preference
              </h2>
            </div>
          </div>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left h-4 w-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 md:w-full w-[350%] h-full bg-bottom bg-no-repeat bg-contain -z-10" style={{ backgroundImage: "url('/purple-ellipse.svg')" }}></div>
    </div>
    </div>
    )
  }

export default About;
