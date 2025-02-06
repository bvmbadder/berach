import honey from "../../assets/honeyJar.png";
import berra from "../../assets/berra.png";
const POL = () => {
  return (
    <section className="relative flex min-h-[70vh] select-none flex-col items-center justify-end overflow-x-clip px-10 py-48">
      <div
        className="mb-20 flex w-full max-w-[800px] animate-float flex-col items-center justify-center gap-2"
        style={
          {
            "--float-rotate": "0deg",
            "--float-duration": "3s",
          } as React.CSSProperties
        }
      >
        <div className="text-centerfont-mikado w-fit self-center whitespace-nowrap rounded-xl bg-white bg-opacity-10 p-[6px] font-bold text-white  backdrop-blur-2xl [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xs:text-[3vw] sm:text-sm md:text-xl xl:p-2">
          Solve stake centralization
        </div>
        <img
          alt="honey jar"
          loading="lazy"
          width="125"
          height="125"
          decoding="async"
          data-nimg="1"
          className="mx-auto w-[12%]"
          style={{ color: "transparent" }}
          src={honey}
        />
      </div>
      <div className="mb-10 flex w-full max-w-[800px] items-start justify-between md:mb-[80px]">
        <div
          className="-mt-12 flex w-[30%] animate-float flex-col gap-2 sm:mt-0 md:gap-8"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "3s",
            } as React.CSSProperties
          }
        >
          <div className="w-fit self-center whitespace-nowrap rounded-xl bg-white bg-opacity-10 p-[6px] text-center font-mikado font-bold text-white backdrop-blur-2xl [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xs:text-[3vw] sm:text-sm md:ml-0 md:text-xl xl:p-2">
            Systematically <br className="block sm:hidden" /> build liquidity
          </div>
          <img
            alt="honey jar"
            loading="lazy"
            width="125"
            height="125"
            decoding="async"
            data-nimg="1"
            className="mx-auto w-[40%]"
            style={{ color: "transparent" }}
            src={honey}
          />
        </div>
        <img
          alt="Bera kongfu"
          loading="lazy"
          width="450"
          height="450"
          decoding="async"
          data-nimg="1"
          className="w-[40%]"
          style={{ color: "transparent" }}
          src={berra}
        />
        <div
          className="-mt-12 flex w-[30%] animate-float flex-col gap-2 sm:mt-0 md:gap-8"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "3s",
            } as React.CSSProperties
          }
        >
          <div className="w-fit self-center whitespace-nowrap rounded-xl bg-white bg-opacity-10 p-[6px] text-center font-mikado font-bold text-white backdrop-blur-2xl [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] xs:text-[3vw] sm:text-sm md:ml-0 md:text-xl xl:p-2">
            Align protocols <br className="block sm:hidden" /> and validators
          </div>
          <img
            alt="honey jar"
            loading="lazy"
            width="125"
            height="125"
            decoding="async"
            data-nimg="1"
            className="mx-auto w-[40%]"
            style={{ color: "transparent" }}
            src={honey}
          />
        </div>
      </div>
    </section>
  );
};

export default POL;
