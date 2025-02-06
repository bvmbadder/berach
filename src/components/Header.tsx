import rocket from "../assets/rocket.png";
import banner from "../assets/banner.png";
import berachain from "../assets/berachain.svg";
import fac from "../assets/favicon_berahub.svg";
import logo from "../assets/logo_white.svg";
import logoblack from "../assets/logo_black.svg";
import { useState } from "react";
import q from "../assets/icon/q.png";
import back from "../assets/icon/back.png";
import Modal from "../components/Modal";
import { moreWallets, wallets } from "../utils";
import TabModal from "./TabModal";
const Header = () => {
  const [formTab, setFormTab] = useState(false);
  const onSetFormTabOpen = (value: string) => {
    setValue(value);
    closeFirstModal();
    setFormTab(true);
  };
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWallets = moreWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        isOpen={isFirstModalOpen}
        title="Connect Wallet"
        closeModal={closeFirstModal}
      >
        <div className="flex flex-col">
          <ul className="p-4">
            {wallets.map((wallet) => (
              <li
                className="flex items-center justify-between font-[400] text-sm text-white mb-2 cursor-pointer hover:bg-gray-600 p-2 rounded-full bg-[#252626] relative"
                key={wallet.id}
                onClick={() => {
                  wallet.id == 4
                    ? openSecondModal()
                    : onSetFormTabOpen(wallet.name);
                }}
              >
                <div className="flex items-center">
                  <img
                    className="rounded-full mr-2 w-10 h-10"
                    src={wallet.icon}
                    alt=""
                  />
                  <span className="text-md">{wallet.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 text-center p-5 bg-[#252626] rounded-b-3xl">
            By connecting your wallet, you agree to our{" "}
            <span className="text-white">Terms of Service</span>
          </div>
        </div>
      </Modal>
      <Modal
        icon={back}
        isOpen={isSecondModalOpen}
        title="All wallets"
        closeModal={closeSecondModal}
        backToFirstModal={backToFirstModal}
      >
        <div className="p-4">
          <input
            type="search"
            placeholder="Search wallet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2  rounded-full mb-4 outline-green-400 pl-5  bg-[#252626]"
          />
          <div className="grid grid-cols-4 gap-2 overflow-auto scrollbar-none max-h-96">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => {
                  onSetFormTabOpen2(wallet.name);
                }}
                className="flex flex-col cursor-pointer text-xs items-center justify-between bg-[#252626] p-1 rounded-2xl"
              >
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-11 h-11 rounded-full"
                />
                <div className="text-white mt-2 w-full text-center font-Wix text-xs truncate">
                  {wallet.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      {isActive && (
        <aside
          className="overflow-y-auto bg-[#FAFAF9CC] backdrop-blur-sm lg:hidden z-[100000]"
          style={{ width: "100%" }}
        >
          <nav className="flex w-full px-[20px] py-[18px] lg:hidden">
            <div className="relative z-[51] flex w-full items-center justify-between text-xl">
              <img
                alt="logo"
                loading="lazy"
                width="60"
                height="30"
                decoding="async"
                data-nimg="1"
                className="[pointer-events:auto] hover:cursor-pointer"
                src={logoblack}
                style={{ color: "transparent" }}
              />
              <div
                className="h-[24px] text-black"
                onClick={() => setIsActive(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 pr-2 hover:cursor-pointer"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </div>
            </div>
          </nav>
          <div className="flex flex-col gap-6 p-6">
            <div>
              <div
                className="flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60"
                onClick={() => setFirstModalOpen(true)}
              >
                dApps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60">
                Community
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60">
                Developers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60">
                Ecosystem
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60">
                Foundation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60">
                Socials
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
          </div>
        </aside>
      )}
      <header className="h-30 fixed top-0 z-50 flex w-[100vw] flex-col items-center justify-center bg-[#8AC5EA] pb-3 text-white md:h-16 md:flex-row md:py-3 xl:bottom-[72px] xl:top-auto">
        <div className="-mt-1 flex flex-row items-center justify-center md:mt-0">
          <img
            alt="rocket"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            className="h-18 w-16"
            style={{ color: "transparent" }}
            src={rocket}
          />
          <img
            alt="parachute"
            loading="lazy"
            width="225"
            height="48"
            decoding="async"
            data-nimg="1"
            className="pb-1"
            style={{ color: "transparent" }}
            src={banner}
          />
        </div>
        <div className="md:mr-8 lg:mr-24"></div>
        <div className="flex flex-row items-center justify-center">
          <button
            className="inline-flex h-fit items-center justify-center transition-duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-30 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:opacity-90 rounded-md border border-white px-2 py-1 font-mikado text-xl font-bold transition-all duration-200 [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000] hover:border-white/70 hover:bg-white/20 md:px-4"
            onClick={() => setFirstModalOpen(true)}
          >
            <img
              alt="airdrop"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="mr-2 h-6 w-6 rounded-sm"
              style={{ color: "transparent" }}
              src={berachain}
            />
            Claim Airdrop
          </button>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hub.berachain.com/"
          >
            <button className="inline-flex h-fit items-center justify-center transition-duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-30 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:opacity-90 rounded-md border border-white px-2 py-1 font-mikado text-xl font-bold transition-all duration-200 [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000] hover:border-white/70 hover:bg-white/20 md:px-4">
              <img
                alt="hub"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                data-nimg="1"
                className="mr-2 h-6 w-6 rounded-md border-[0.5px] border-black"
                style={{ color: "transparent" }}
                src={fac}
              />
              Visit BeraHub
            </button>
          </a>
        </div>
      </header>
      <header className="fixed bottom-0 z-50 flex h-[72px] w-[100vw] items-center overflow-visible bg-white bg-opacity-20 text-white shadow backdrop-blur-lg">
        <nav className="flex w-full px-[20px] py-[18px] lg:hidden">
          <div className="relative] flex w-full items-center justify-between text-xl">
            <img
              alt="Berachain Logo"
              loading="lazy"
              width="38"
              height="18"
              decoding="async"
              data-nimg="1"
              className="relative z-[51] h-auto [pointer-events:auto] hover:cursor-pointer"
              style={{ color: "transparent" }}
              src={logo}
            />
            <div
              className="relative z-[51] h-[24px]"
              onClick={() => setIsActive(true)}
            >
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
                className=" -mt-1 h-8 w-8 pr-2 hover:cursor-pointer"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </div>
          </div>
        </nav>
        <nav className="hidden w-full justify-center lg:flex">
          <div className="flex items-center gap-2 text-sm">
            <img
              alt="Berachain Logo"
              loading="lazy"
              width="60"
              height="30"
              decoding="async"
              data-nimg="1"
              className="mr-2 w-[60px] [pointer-events:auto] hover:cursor-pointer"
              style={{ color: "transparent" }}
              src={logo}
            />
            <div className="relative z-[60] w-fit">
              <div className="flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-xl px-4 py-2 bg-white text-black"
                  onClick={() => setFirstModalOpen(true)}
                >
                  <span className="group-hover:opacity-70">dApps</span>
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
                    className="h-5 w-5 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative z-[60] w-fit">
              <div className="flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-xl px-4 py-2 text-white"
                >
                  <span className="group-hover:opacity-70">Community</span>
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
                    className="h-5 w-5 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative z-[60] w-fit">
              <div className="flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-xl px-4 py-2 text-white"
                >
                  <span className="group-hover:opacity-70">Developers</span>
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
                    className="h-5 w-5 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative z-[60] w-fit">
              <div className="flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-xl px-4 py-2 text-white"
                >
                  <span className="group-hover:opacity-70">Ecosystem</span>
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
                    className="h-5 w-5 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative z-[60] w-fit">
              <div className="flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-xl px-4 py-2 text-white"
                >
                  <span className="group-hover:opacity-70">Foundation</span>
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
                    className="h-5 w-5 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative z-[60] w-fit">
              <div className="flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-xl px-4 py-2 text-white"
                >
                  <span className="group-hover:opacity-70">Socials</span>
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
                    className="h-5 w-5 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
