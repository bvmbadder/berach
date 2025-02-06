import ufo from "../../assets/ufo.png";
import ufoLight from "../../assets/ufo-light.png";
import emojiArrow from "../../assets/emoji_arrow.svg";
const Light = () => {
  return (
    <div className="relative mx-auto max-w-[1440px] px-[52px] md:px-0">
      <section className="flex min-h-[100vh] select-none">
        <div className="sticky top-0 flex h-[100vh] w-full items-center text-center">
          <div className="mx-auto flex w-full max-w-[1200px] justify-center ">
            <div
              style={{
                transform: "translateY(-10%) translateZ(0px)",
              }}
            >
              <div
                className="animate-float smooth-bounce"
                style={
                  {
                    "--float-rotate": "0deg ",
                    "--float-duration": "5s",
                  } as React.CSSProperties
                }
              >
                <img
                  alt="Bera portal"
                  loading="lazy"
                  width="458"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  style={{ color: "transparent" }}
                  src={ufo}
                />
                <div
                  style={{ opacity: "1" }}
                  className="flex w-full justify-center"
                >
                  <img
                    alt="Bera beam"
                    loading="lazy"
                    width="458"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="-ml-[10%] -mt-[15%] md:-ml-12 md:-mt-[70px]"
                    style={{ color: "transparent" }}
                    src={ufoLight}
                  />
                </div>
              </div>
              <div
                style={{ opacity: "1" }}
                className="-mt-20 flex w-full flex-col justify-between gap-8 sm:flex-row"
              >
                <a
                  target="_blank"
                  className="border-[#EFE87A] flex-1 animate-float flex-col rounded-xl border-2 p-1 text-white opacity-80 transition-transform duration-300 ease-in-out hover:-rotate-6 hover:cursor-pointer hover:border-white xs:h-[180px] sm:h-[240px]"
                  href="https://bartio.bex.berachain.com/"
                >
                  <div className="mx-auto my-2 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" fill="#DA5D19"></rect>
                      <path
                        d="M24 16C24 13.8783 23.1571 11.8434 21.6569 10.3431C20.1566 8.84285 18.1217 8 16 8C13.7635 8.00841 11.6169 8.88109 10.0089 10.4356L8 12.4444"
                        stroke="#FEE1C7"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 8V12.4444H12.4444"
                        stroke="#FEE1C7"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24C18.2365 23.9916 20.3831 23.1189 21.9911 21.5644L24 19.5556"
                        stroke="#FEE1C7"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M19.5557 19.5557H24.0001V24.0001"
                        stroke="#FEE1C7"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="mx-1 flex -rotate-6 flex-col gap-2 transition-transform">
                    <span className="font-mikado text-3xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] sm:text-5xl">
                      BEX
                    </span>
                    <span className="text-md font-mikado font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] sm:text-lg">
                      Swaps tokens and
                      <br />
                      provide liquidity
                    </span>
                    <img
                      alt="arrow"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="flex self-center"
                      style={{ color: "transparent" }}
                      src={emojiArrow}
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  className="border-[#EC8A18] flex-1 animate-float flex-col rounded-xl border-2 p-1 text-white opacity-80 transition-transform duration-300 ease-in-out hover:-rotate-6 hover:cursor-pointer hover:border-white xs:h-[180px] sm:h-[240px]"
                  href="https://bartio.honey.berachain.com/"
                >
                  <div className="mx-auto my-2 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="7.625"
                        fill="#D97706"
                      ></rect>
                      <path
                        d="M11.6475 23.1198H9.30856C8.90035 23.1198 8.53627 23.0283 8.19426 22.8455C7.85224 22.6627 7.58746 22.4088 7.37784 22.0838L6.13114 20.0525C5.93255 19.7478 5.83325 19.4228 5.83325 19.0572C5.83325 18.6915 5.93255 18.3767 6.13114 18.072L7.3999 16.0102L6.13114 13.9586C5.93255 13.6539 5.83325 13.3187 5.83325 12.9632C5.83325 12.6078 5.93255 12.2726 6.13114 11.9679L7.37784 9.9366C7.57642 9.6116 7.85224 9.35768 8.19426 9.17487C8.53627 8.99205 8.91139 8.89048 9.30856 8.89048H11.6475L12.8832 6.87949C13.0818 6.55449 13.3576 6.30057 13.6996 6.11776C14.0416 5.93494 14.4167 5.83337 14.8139 5.83337H17.1859C17.5941 5.83337 17.9582 5.92478 18.3002 6.11776C18.6423 6.30057 18.907 6.55449 19.1167 6.87949L20.3634 8.89048H22.7023C23.1105 8.89048 23.4746 8.98189 23.8166 9.17487C24.1586 9.35768 24.4234 9.6116 24.633 9.9366L25.8687 11.9679C26.0673 12.2726 26.1666 12.5976 26.1666 12.9632C26.1666 13.3289 26.0673 13.6539 25.8687 13.9586L24.5999 16.0102L25.8687 18.072C26.0673 18.3767 26.1666 18.7017 26.1666 19.0572C26.1666 19.4126 26.0673 19.7478 25.8687 20.0525L24.633 22.0838C24.4344 22.4088 24.1586 22.6627 23.8166 22.8455C23.4746 23.0283 23.0995 23.1198 22.7023 23.1198H20.3634L19.1167 25.1307C18.9181 25.4558 18.6423 25.7097 18.3002 25.8925C17.9582 26.0753 17.5831 26.1667 17.1859 26.1667H14.8139C14.4057 26.1667 14.0416 26.0753 13.6996 25.8925C13.3576 25.7097 13.0928 25.4558 12.8832 25.1307L11.6475 23.1198ZM20.3634 14.9945H22.7354L23.949 12.9632L22.7354 10.9319H20.3634L19.1167 12.9632L20.3634 14.9945ZM14.847 18.0415H17.1639L18.3995 16.0102L17.1639 13.9789H14.847L13.6113 16.0102L14.847 18.0415ZM14.847 11.9476H17.1639L18.4326 9.88582L17.197 7.88499H14.8249L13.5893 9.88582L14.858 11.9476H14.847ZM12.8942 12.9632L11.6585 10.9319H9.3196L8.08393 12.9632L9.3196 14.9945H11.6585L12.8942 12.9632ZM12.8942 19.0572L11.6585 17.0258H9.2865L8.0729 19.0572L9.30856 21.0885H11.6475L12.8832 19.0572H12.8942ZM14.847 20.0728L13.5782 22.1244L14.8139 24.1354H17.1859L18.4216 22.1244L17.1528 20.0728H14.836H14.847ZM20.3634 21.0885H22.7023L23.938 19.0572L22.7023 17.0258H20.3634L19.1167 19.0572L20.3634 21.0885Z"
                        fill="#FEF3C7"
                      ></path>
                    </svg>
                  </div>
                  <div className="mx-1 flex -rotate-6 flex-col gap-2 transition-transform">
                    <span className="font-mikado text-3xl font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.4px_-0.4px_0_#000,_0.4px_-0.4px_0_#000,_-0.4px_0.4px_0_#000,_0.4px_0.4px_0_#000,_0_2px_2px_rgba(0,0,0,0.3)] sm:text-5xl">
                      HONEY
                    </span>
                    <span className="text-md font-mikado font-bold text-white [letter-spacing:-0.025em] [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000,_0_1px_1px_rgba(0,0,0,0.3)] sm:text-lg">
                      Minting &amp; Redeeming
                      <br />
                      HONEY
                    </span>
                    <img
                      alt="arrow"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      className="flex self-center"
                      style={{ color: "transparent" }}
                      src={emojiArrow}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Light;
