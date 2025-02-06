import helli from "../../assets/heli.png";
import hellis from "../../assets/helliSM.png";
import cloud from "../../assets/cloud.png";
import cloudTop from "../../assets/cloudTop.png";
import cloudRB from "../../assets/cloudRB.png";
const Eco = () => {
  return (
    <section className="z-11 relative flex h-[900px] items-center justify-center overflow-hidden">
      <div className="absolute top-0 flex flex-col items-center justify-center gap-1">
        <h3 className="font-mikado text-4xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] lg:text-6xl">
          <span>The Bera Ecosystem</span>
        </h3>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-md flex cursor-pointer items-center gap-1 text-center font-mikado font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xl:text-xl"
          href="https://ecosystem.berachain.com"
        >
          View Projects
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
            className="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div>
        <div
          className=""
          style={{
            transform: "translateX(-16.8886%) translateZ(0px)",
          }}
        >
          <div className="relative animate-float">
            <img
              alt="helicopter helicopter"
              loading="lazy"
              width="246"
              height="1084"
              decoding="async"
              data-nimg="1"
              className="mt-36 block md:hidden "
              style={{ color: "transparent" }}
              src={cloud}
            />
          </div>
          <div
            className="animate-float"
            style={
              {
                "--float-rotate": "0deg",
                "--float-duration": "3.5s",
              } as React.CSSProperties
            }
          >
            <img
              alt="Bera blimp"
              loading="lazy"
              width="800"
              height="571"
              decoding="async"
              data-nimg="1"
              className="hidden md:block"
              style={{ color: "transparent" }}
              src={helli}
            />
          </div>
          <div
            className="animate-float"
            style={
              {
                "--float-rotate": "0deg",
                "--float-duration": "3.5s",
              } as React.CSSProperties
            }
          >
            <img
              alt="Bera blimp"
              loading="lazy"
              width="246"
              height="1084"
              decoding="async"
              data-nimg="1"
              className="mt-36 block md:hidden "
              style={{ color: "transparent" }}
              src={hellis}
            />
          </div>
        </div>
      </div>
      <img
        alt="cloud right"
        loading="lazy"
        width="843"
        height="245"
        decoding="async"
        data-nimg="1"
        className="absolute right-0 animate-float"
        style={{ height: "auto", color: "transparent" }}
        src={cloud}
      />
      <img
        alt="cloud right bottom"
        loading="lazy"
        width="516"
        height="273"
        decoding="async"
        data-nimg="1"
        className=" absolute bottom-0 left-0 hidden animate-float md:bottom-[20%] md:block"
        style={{ width: "auto", color: "transparent" }}
        src={cloudRB}
      ></img>
      <img
        alt="cloud top left"
        loading="lazy"
        width="516"
        height="273"
        decoding="async"
        data-nimg="1"
        className="absolute left-[20%] top-0 hidden animate-float md:block"
        style={{ width: "auto", color: "transparent" }}
        src={cloudTop}
      ></img>
    </section>
  );
};

export default Eco;
