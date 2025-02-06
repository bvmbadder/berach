import baloon from "../../assets/baloon.png";
import baloon2 from "../../assets/baloon2.png";
import cloudlb from "../../assets/dcloudlb.png";
import cloudlb2 from "../../assets/dcloudlb2.png";
import cloudrb from "../../assets/dcloudrb.png";
import cloudrb2 from "../../assets/dcloudrb2.png";
const Desc = () => {
  return (
    <section className="relative mb-[400px] flex min-h-screen items-center justify-center overflow-x-clip">
      <div className="relative m-auto max-w-[800px] p-5 text-center">
        <div
          className="hidden md:block"
          style={{
            opacity: 1,
            transform:
              "translateX(304.522px) translateY(-304.522px) translateZ(0px)",
          }}
        >
          <img
            alt="Bera balloon"
            loading="lazy"
            width="419"
            height="763"
            decoding="async"
            data-nimg="1"
            className="w-[300px] md:w-[419px]"
            style={{ color: "transparent" }}
            src={baloon}
          />
        </div>
        <img
          alt="Bera balloon"
          loading="lazy"
          width="419"
          height="763"
          decoding="async"
          data-nimg="1"
          className="mb-10 ml-10 block w-[300px] md:hidden"
          style={{ color: "transparent" }}
          src={baloon2}
        />
        <h3
          style={{ opacity: 1 }}
          className="relative z-10 text-center font-mikado text-2xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] md:text-4xl xl:text-5xl"
        >
          An EVM-identical L1 aligning security and liquidity powered by
          <span className="text-[#F0D8A7]"> Proof Of Liquidity</span>
        </h3>
      </div>
      <img
        alt="cloud left bottom"
        loading="lazy"
        width="270"
        height="142"
        decoding="async"
        data-nimg="1"
        className="absolute -bottom-[300px] left-[5%] hidden animate-float md:block"
        style={
          {
            color: "transparent",
            "--float-rotate": "0deg",
            "--float-duration": "4s",
            width: "auto",
          } as React.CSSProperties
        }
        src={cloudlb}
      />
      <img
        alt="cloud left bottom 2"
        loading="lazy"
        width="141"
        height="92"
        decoding="async"
        data-nimg="1"
        className="absolute -bottom-[10%] left-[20%] hidden animate-float opacity-40 md:bottom-[5%] md:block"
        style={
          {
            color: "transparent",
            "--float-rotate": "0deg",
            "--float-duration": "3s",
            width: "auto",
          } as React.CSSProperties
        }
        src={cloudlb2}
      />
      <img
        alt="cloud right bottom"
        loading="lazy"
        width="320"
        height="180"
        decoding="async"
        data-nimg="1"
        className="absolute -bottom-[10%] -right-[10px] hidden animate-float md:block"
        style={
          {
            color: "transparent",
            "--float-rotate": "0deg",
            "--float-duration": "4s",
            width: "auto",
          } as React.CSSProperties
        }
        src={cloudrb}
      />
      <img
        alt="cloud right bottom"
        loading="lazy"
        width="516"
        height="273"
        decoding="async"
        data-nimg="1"
        className="absolute right-[20%] animate-float"
        style={
          {
            color: "transparent",
            "--float-rotate": "0deg",
            "--float-duration": "6s",
            width: "auto",
          } as React.CSSProperties
        }
        src={cloudrb2}
      ></img>
    </section>
  );
};

export default Desc;
