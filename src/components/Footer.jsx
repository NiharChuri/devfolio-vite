import ReactLogo from '../assets/react.png'; // Update with the correct path
import TailwindLogo from '../assets/tailwind.png'; // Update with the correct path
import FramerLogo from '../assets/framer.png'; // Update with the correct path
import VercelLogo from '../assets/vercel.png'; // Update with the correct path

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-neutral-700 text-neutral-300 text-sm">
      <div className="text-center mt-3 px-4">
        <p className="text-xs sm:text-sm flex mb-1 items-center justify-center">
          © 2024 Neel Shah. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm mb-10 text-neutral-300 flex flex-wrap items-center justify-center gap-2">
          Developed using
          <span className="flex items-center mx-1 my-1 sm:my-0">
            <img src={ReactLogo} alt="React logo" className="max-w-4 w-auto sm:max-w-5 mx-1" />
          </span>
          |
          <span className="flex items-center mx-1 my-1 sm:my-0">
            <img src={TailwindLogo} alt="Tailwind CSS logo" className="max-w-4 w-auto sm:max-w-5 mx-1" />
          </span>
          |
          <span className="flex items-center mx-1 my-1 sm:my-0">
            <img src={FramerLogo} alt="Framer Motion logo" className="max-w-4 w-auto sm:max-w-5 mx-1" />
          </span>
          |
          <span className="flex items-center mx-1 my-1 sm:my-0">
            and hosted using
            <img src={VercelLogo} alt="Vercel logo" className="max-w-4 w-auto sm:max-w-5 mx-1" />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;