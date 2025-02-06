import core1 from "../../assets/core1.png";
import core2 from "../../assets/core2.png";
import core3 from "../../assets/core3.png";
import poly from "../../assets/backed/poly.png";
import arrington from "../../assets/backed/arrington.svg";
import brev from "../../assets/backed/brev.svg";
import dao from "../../assets/backed/dao.png";
import framework from "../../assets/backed/framework.svg";
import hack from "../../assets/backed/hack.png";
import laser from "../../assets/backed/laser.svg";
import robot from "../../assets/backed/robot.png";
import samsung from "../../assets/backed/samsung.svg";
import tribe from "../../assets/backed/tribe.png";

const Core = () => {
  return (
    <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-[52px] md:px-0">
      <section className="relative select-none py-48 md:px-8">
        <h3 className="mb-12 text-center font-mikado text-4xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] lg:text-6xl">
          <span>Core Principles</span>
        </h3>
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xl:h-[600px] xl:flex-row">
          <div className="relative flex flex-1 justify-between gap-4 rounded-2xl bg-white bg-opacity-10 p-6 pr-9 backdrop-blur-2xl sm:p-9 sm:pr-[180px] xl:pr-9">
            <div className="flex flex-col gap-1 xl:gap-3">
              <div className="xl:leading-12 mb-2 text-2xl text-white xl:text-3xl">
                Defragmenting liquidity
              </div>
              <div className="text-md pr-20 text-white sm:pr-0 xl:text-xl xl:leading-8">
                Simple DeFi legos (AMM, Perps, Lend) and pools built into the
                chain and powered by
                <span className="text-[#F0D8A7]">validators</span>
              </div>
            </div>
            <img
              alt="1"
              loading="lazy"
              width="450"
              height="369"
              decoding="async"
              data-nimg="1"
              className="absolute bottom-0 right-0 w-[100px] flex-1 flex-shrink-0 flex-grow-0 object-contain sm:w-[150px] xl:left-0 xl:w-[350px]"
              style={{ color: "transparent" }}
              src={core1}
            />
          </div>
          <div className="relative flex flex-1 justify-between gap-4 rounded-2xl bg-white bg-opacity-10 p-6 pr-9 backdrop-blur-2xl sm:p-9 sm:pr-[180px] xl:pr-9">
            <div className="flex flex-col gap-3">
              <div className="xl:leading-12 mb-2 text-2xl font-bold text-white xl:text-3xl">
                Turbocharging Applications
              </div>
              <div className="text-md pr-20 text-white sm:pr-0 xl:text-xl xl:leading-8">
                Validators{" "}
                <span className="text-[#F0D8A7]">direct network emissions</span>{" "}
                towards decentralized dApps building on Berachain
              </div>
            </div>
            <img
              alt="1"
              loading="lazy"
              width="450"
              height="384"
              decoding="async"
              data-nimg="1"
              className="absolute bottom-0 right-0 w-[100px] flex-1 flex-shrink-0 flex-grow-0 object-contain sm:w-[160px] xl:left-0 xl:w-[300px]"
              style={{ color: "transparent" }}
              src={core2}
            />
          </div>
          <div className="relative flex flex-1 justify-between gap-4 rounded-2xl bg-white bg-opacity-10 p-6 pr-9 backdrop-blur-2xl sm:p-9 sm:pr-[180px] xl:pr-9">
            <div className="flex flex-col gap-3">
              <div className="xl:leading-12 mb-2 text-2xl font-bold text-white xl:text-3xl">
                Highly Accessible
              </div>
              <div className="pr-20 text-white sm:pr-0 xl:text-xl xl:leading-8">
                <span className="text-[#F0D8A7]">EVM-identical blockchain</span>
                compatible with all existing ethereum ERCs and opcodes
              </div>
            </div>
            <img
              alt="1"
              loading="lazy"
              width="280"
              height="323"
              decoding="async"
              data-nimg="1"
              className="absolute bottom-0 right-4 w-[80px] flex-1 flex-shrink-0 flex-grow-0 object-contain sm:w-[120px] xl:left-16 xl:w-[200px]"
              style={{ color: "transparent" }}
              src={core3}
            />
          </div>
        </div>
      </section>
      <section className="overflow-hidden py-12 md:py-24">
        <h3 className="mb-12 text-center font-mikado text-4xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] lg:text-6xl">
          Backed by the best
        </h3>

        <div className="flex w-full animate-slide flex-nowrap items-center justify-center gap-4 ">
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={poly}
            />
          </div>
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={poly}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={arrington}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={brev}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={dao}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={framework}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={hack}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={laser}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={robot}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={samsung}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={tribe}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={poly}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={arrington}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={brev}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={dao}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={framework}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={hack}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={laser}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={robot}
            />
          </div>{" "}
          <div className="m-4 w-fit shrink-0">
            <img
              alt="Polychain Capital"
              loading="lazy"
              width="180"
              height="60"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent", height: "auto" }}
              src={samsung}
            />
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default Core;
