import bp1 from "../../assets/bp1.png";
import bp2 from "../../assets/bp2.png";
import bp3 from "../../assets/bp3.png";
import bp4 from "../../assets/bp4.png";
import bp5 from "../../assets/bp5.png";

const Third = () => {
  return (
    <section className="relative mx-auto flex min-h-[500vh] max-w-[1200px] select-none justify-center py-48">
      <div className="sticky top-10 h-fit text-center md:top-[100px]">
        <div className="h-4" id="history"></div>
        <div className="flex h-[80vh] flex-col items-center justify-center gap-10">
          <div className="mb-5 hidden flex-grow-0 items-end gap-4 px-16 md:flex max-w-[1200px] -mt-[200px]">
            <div>
              <img
                alt="Bera portal"
                loading="lazy"
                width="248"
                height="253"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={bp1}
              />
            </div>
            <div style={{ opacity: "1" }}>
              <img
                alt="Bera portal"
                loading="lazy"
                width="192"
                height="319"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={bp2}
              />
            </div>
            <div style={{ opacity: "1" }}>
              <img
                alt="Bera portal"
                loading="lazy"
                width="219"
                height="399"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={bp3}
              />
            </div>
            <div style={{ opacity: "1" }}>
              <img
                alt="Bera portal"
                loading="lazy"
                width="213"
                height="471"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={bp4}
              />
            </div>
            <div style={{ opacity: "1" }}>
              <img
                alt="Bera portal"
                loading="lazy"
                width="410"
                height="541"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={bp5}
              />
            </div>
          </div>
          <div className="relative mb-0 h-[300px] w-[300px] md:hidden">
            <div style={{ opacity: "0" }} className="absolute bottom-0 ml-12">
              <img
                alt="Bera portal"
                loading="lazy"
                width="304"
                height="304"
                decoding="async"
                data-nimg="1"
                className="w-[168px]"
                style={{ color: "transparent" }}
                src={bp1}
              />
            </div>
            <div style={{ opacity: "0" }} className=" absolute bottom-0 ml-16">
              <img
                alt="Bera portal"
                loading="lazy"
                width="304"
                height="304"
                decoding="async"
                data-nimg="1"
                className="w-[168px]"
                style={{ color: "transparent" }}
                src={bp2}
              />
            </div>
            <div style={{ opacity: "0" }} className="absolute bottom-0 ml-16">
              <img
                alt="Bera portal"
                loading="lazy"
                width="304"
                height="304"
                decoding="async"
                data-nimg="1"
                className="w-[168px]"
                style={{ color: "transparent" }}
                src={bp3}
              />
            </div>
            <div style={{ opacity: "0" }} className=" absolute bottom-0 ml-16">
              <img
                alt="Bera portal"
                loading="lazy"
                width="304"
                height="304"
                decoding="async"
                data-nimg="1"
                className="w-[168px]"
                style={{ color: "transparent" }}
                src={bp4}
              />
            </div>
            <div style={{ opacity: "1" }} className="absolute bottom-0 ml-4">
              <img
                alt="Bera portal"
                loading="lazy"
                width="304"
                height="304"
                decoding="async"
                data-nimg="1"
                className="w-[250px]"
                style={{ color: "transparent" }}
                src={bp5}
              />
            </div>
          </div>
          <div className="relative w-[90vw] font-mikado text-white font-bold [letter-spacing:-0.025em] [text-shadow:-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
            <div
              className="absolute top-0 w-full text-center text-xl text-white md:text-4xl"
              style={{ opacity: 0 }}
            >
              <span className="h-4" id="history-mobile"></span>
              Started as an NFT project for fun
              <br /> in the <span className="text-[#F0D8A7]">DeFi</span>{" "}
              ecosystem
            </div>

            <div
              className="absolute top-0 w-full text-center text-xl text-white md:text-4xl"
              style={{ opacity: 0 }}
            >
              Made the <span className="text-[#F0D8A7]">NFTs</span> rebase and
              grew a massive cult community
            </div>

            <div
              className="absolute top-0 w-full text-center text-xl text-white md:text-4xl"
              style={{ opacity: 0 }}
            >
              Identified major gaps in protocol level alignment between{" "}
              <span className="text-[#F0D8A7]">liquidity and security</span>
            </div>

            <div
              className="absolute top-0 w-full text-center text-xl text-white md:text-4xl"
              style={{ opacity: 0 }}
            >
              Raised VC from some of the{" "}
              <span className="text-[#F0D8A7]">best firms</span> in the game
            </div>

            <div
              className="absolute top-0 w-full text-center text-xl text-white md:text-4xl"
              style={{ opacity: 1 }}
            >
              <span className="text-[#F0D8A7]">Launched</span> a chain 🚀 🚀 🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
