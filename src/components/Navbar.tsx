import { Link, NavLink } from 'react-router-dom';
import { useWalletProvider } from 'context/WalletProvider';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import NetworkSelector from './NetworkSelector';

interface INavbarProps {
  showUserInfoModal: () => void;
}

function Navbar({ showUserInfoModal }: INavbarProps) {
  const { accounts, connect, isLoggedIn } = useWalletProvider()!;
  const userAddress = accounts?.[0];

  return (
    <header className="relative z-20 flex w-full items-center justify-center bg-black bg-opacity-30 text-white shadow-sm backdrop-blur-sm">
      <Link to="/bridge" className="absolute left-6">
        <img
          src={`${process.env.PUBLIC_URL}/hyphen-logo.svg`}
          className="h-8 w-auto"
          alt="Hyphen Logo"
        />
      </Link>
      <nav className="flex gap-7 text-white">
        <NavLink to="/bridge">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? 'relative'
                  : 'relative text-gray-400 hover:text-white'
              }
            >
              Bridge
              <span
                className={
                  isActive
                    ? 'absolute -inset-1 top-[33px] block h-[5px] rounded-t-full bg-white'
                    : 'hidden'
                }
                aria-hidden="true"
              ></span>
            </span>
          )}
        </NavLink>
        <NavLink
          to="/pool"
          className={({ isActive }) => (isActive ? 'relative' : 'relative')}
        >
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? 'relative'
                  : 'relative text-gray-400 hover:text-white'
              }
            >
              Pool
              <span
                className={
                  isActive
                    ? 'absolute -inset-1 top-[33px] block h-[5px] rounded-t-full bg-white'
                    : 'hidden'
                }
                aria-hidden="true"
              ></span>
            </span>
          )}
        </NavLink>
        <a
          target="_blank"
          href="https://hyphen-info.biconomy.io/"
          rel="noreferrer"
          className="relative flex items-center text-gray-400 hover:text-white"
        >
          Stats
          <HiOutlineArrowSmRight className="absolute top-[2px] right-[-12px] h-3 w-3 -rotate-45" />
        </a>
      </nav>
      <div className="absolute right-6 flex items-center">
        <NetworkSelector />
        <button
          className="font-base ml-2.5 cursor-pointer rounded-xl bg-hyphen-purple bg-opacity-50 px-4 py-1 font-mono text-white"
          onClick={isLoggedIn ? showUserInfoModal : connect}
        >
          {isLoggedIn
            ? `${userAddress?.slice(0, 6)}...${userAddress?.slice(-6)}`
            : 'Connect Wallet'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
