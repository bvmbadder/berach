import astrobear from "../assets/astro-bear.png";
import x from "../assets/x.png";
import discord from "../assets/discord.png";
import git from "../assets/git.png";
import open from "../assets/open.png";
import build from "../assets/build.png";
import telegram from "../assets/telegram.png";
import bera from "../assets/bera.png";
import bm1 from "../assets/bm1.png";
import bm2 from "../assets/bm2.png";
import bm3 from "../assets/bm3.png";
import bm from "../assets/bm.png";
import bm4 from "../assets/bm4.png";
import bm5 from "../assets/bm5.png";
import bm6 from "../assets/bm6.png";
import Third from "./components/Third";
import Light from "./components/Light";
import Eco from "./components/Eco";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import POL from "./components/POL";
import Core from "./components/Core";

const Home = () => {
  return (
    <div className="layout">
      <div className="overflow-clip">
        <div className="absolute max-w-[100vw] w-full overflow-hidden">
          <canvas
            style={{ width: "100vw", height: "900vh" }}
            width="1280"
            height="7200"
          ></canvas>
        </div>
        <div className="relative mx-auto max-w-[1440px] px-[52px] md:px-0">
          <section
            id="community"
            className="flex h-screen items-center justify-center p-6 py-56"
          >
            <div className="relative w-full md:w-1/2 xl:w-1/3">
              <div className="absolute bottom-0 right-[-50px] w-[60%] md:bottom-[-50px] md:right-[-150px] smooth-bounce ">
                <div
                  style={{ transform: "translateY(5.19042px) translateZ(0px)" }}
                >
                  <img
                    alt="Astro Bear"
                    loading="lazy"
                    width="1240"
                    height="922"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={astrobear}
                  />
                </div>
              </div>
              <div
                className="absolute left-[30%] top-[-50px] w-[20%] smooth-bounce "
                tabIndex={0}
              >
                <a target="_blank" href="https://twitter.com/berachain">
                  <img
                    alt="x planet"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="animate-float"
                    style={{
                      color: "transparent",
                    }}
                    src={x}
                  />
                </a>
              </div>
              <div
                className="lg:top[45%] absolute -right-[40px] top-[15%] w-[20%] lg:right-[-100px] smooth-bounce "
                tabIndex={0}
              >
                <a target="_blank" href="https://discord.gg/berachain">
                  <img
                    alt="Discord planet"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="animate-float"
                    style={{
                      color: "transparent",
                    }}
                    src={discord}
                  />
                </a>
              </div>
              <div
                className="absolute bottom-[0%] -left-[30px] w-[20%] lg:left-[-100px] smooth-bounce "
                tabIndex={0}
              >
                <a target="_blank" href="https://github.com/berachain">
                  <img
                    alt="Github planet"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="animate-float"
                    style={{
                      color: "transparent",
                    }}
                    src={git}
                  />
                </a>
              </div>
              <div
                className="absolute bottom-[-100px] left-[40%] w-[20%] smooth-bounce "
                tabIndex={0}
              >
                <a
                  target="_blank"
                  href="https://opensea.io/collection/bongbears"
                >
                  <img
                    alt="Opensea planet"
                    loading="lazy"
                    width="80"
                    height="80"
                    decoding="async"
                    data-nimg="1"
                    className="animate-float"
                    style={{
                      color: "transparent",
                    }}
                    src={open}
                  />
                </a>
              </div>
              <div
                className="absolute top-[30%] -left-[20%] w-[20%] smooth-bounce "
                tabIndex={0}
              >
                <a target="_blank" href="https://t.me/BerachainEco">
                  <img
                    alt="buildoor"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="animate-float"
                    style={{
                      color: "transparent",
                    }}
                    src={build}
                  />
                </a>
              </div>
              <div
                className="absolute top-[70%] right-[0%] w-[15%] smooth-bounce "
                tabIndex={0}
              >
                <a target="_blank" href="https://t.me/BerachainPortal">
                  <img
                    alt="buildoor"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="animate-float"
                    style={{
                      color: "transparent",
                    }}
                    src={telegram}
                  />
                </a>
              </div>
              <img
                className=""
                alt="Bera Moon"
                loading="lazy"
                width="1234"
                height="1052"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={bera}
              />
            </div>
          </section>
          <section
            id="careers"
            className="flex min-h-[1000px] sm:min-h-[1300px] items-center justify-center"
          >
            <div className="absolute -mt-[900px] flex flex-col items-center justify-center gap-1">
              <h3 className="font-mikado text-4xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] lg:text-6xl">
                <span>Want to join us?</span>
              </h3>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-md flex cursor-pointer items-center gap-1 text-center font-mikado font-bold text-white [letter-spacing:-0.025em] [text-shadow:-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xl:text-xl"
                href="https://careers.berachain.com/"
              >
                View Careers
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

            <div className="relative w-full max-w-[1600px] text-center">
              <div className="m-auto mb-[100px] flex w-full  items-center justify-center">
                <div className=" absolute h-[600px] w-[600px] flex-shrink-0 lg:relative smooth-bounce ">
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="200"
                    height="252"
                    decoding="async"
                    data-nimg="1"
                    className="absolute left-[150px] top-0 mx-auto animate-float"
                    style={{ color: "transparent" }}
                    src={bm1}
                  />
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="300"
                    height="452"
                    decoding="async"
                    data-nimg="1"
                    className="absolute bottom-0 right-0 animate-float"
                    style={{ color: "transparent" }}
                    src={bm2}
                  />
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="200"
                    height="452"
                    decoding="async"
                    data-nimg="1"
                    className="absolute  bottom-[150px] left-0 animate-float"
                    style={{ color: "transparent" }}
                    src={bm3}
                  />
                </div>
                <img
                  alt="Bera Moon"
                  loading="lazy"
                  width="227"
                  height="452"
                  decoding="async"
                  data-nimg="1"
                  className="relative z-10 md:hidden"
                  style={{ color: "transparent" }}
                  src={bm}
                />
                <div
                  className="relative hidden flex-shrink-0 md:block smooth-bounce "
                  style={{ color: "transparent" }}
                >
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="227"
                    height="452"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={bm}
                  />
                </div>
                <div className="relative hidden h-[600px] w-[600px] flex-shrink-0 lg:block smooth-bounce ">
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="300"
                    height="379"
                    decoding="async"
                    data-nimg="1"
                    className="absolute bottom-0 left-0 mx-auto animate-float"
                    style={{ color: "transparent" }}
                    src={bm4}
                  />
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="200"
                    height="240"
                    decoding="async"
                    data-nimg="1"
                    className="absolute left-[230px] top-0 mx-auto animate-float"
                    style={{ color: "transparent" }}
                    src={bm5}
                  />
                  <img
                    alt="Bera Moon"
                    loading="lazy"
                    width="200"
                    height="217"
                    decoding="async"
                    data-nimg="1"
                    className="absolute right-0 top-[200px] mx-auto animate-float"
                    style={{ color: "transparent" }}
                    src={bm6}
                  />
                </div>
              </div>
            </div>
          </section>
          <Third />
        </div>
        <section className="flex min-h-[800px] items-center justify-center pb-72">
          <div className="relative w-full pb-8 text-center md:w-3/4 xl:w-1/2">
            <div className="flex flex-col items-center">
              <div
                className="text-white font-mikado text-[100px] md:text-[200px]"
                style={{
                  width: "1300px",
                  height: "350px",
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  pointerEvents: "none",
                }}
              >
                BeaconKit
              </div>
              {/* <div id="tsparticles">
                <canvas
                  data-generated="true"
                  style={{
                    width: "1300px",
                    height: "390px",
                    position: "relative",
                    top: "0px",
                    left: "0px",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                  width="2600"
                  height="780"
                />
              </div> */}
              <p className="m-8 xs:-mt-6 sm:-mt-12 lg:-mt-24 flex cursor-pointer items-center gap-1 text-center font-mikado text-xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] md:text-3xl">
                BeaconKit is a high-performance, EVM-indentical blockchain SDK
                enabling the development of modular L1 blockchain.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-md flex cursor-pointer items-center gap-1 text-center font-mikado font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xl:text-xl"
                href="https://github.com/berachain/beacon-kit"
              >
                BeaconKit Repo
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
          </div>
        </section>
        <Light />
        <Eco />
        <Core />
        <POL />
        <Desc />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
