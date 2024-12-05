import ReactLogo from '../assets/react.png'; // Update with the correct path
import TailwindLogo from '../assets/tailwind.png'; // Update with the correct path
import FramerLogo from '../assets/framer.png'; // Update with the correct path
import VercelLogo from '../assets/vercel.png'; // Update with the correct path

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-neutral-700 text-neutral-300 text-sm py-6 px-4">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Copyright Text */}
        <p className="text-center text-xs sm:text-sm">
          © 2024 <span className="font-semibold">Neel Shah</span>. All rights reserved.
        </p>

        {/* Technology Stack */}
        <div className="text-center text-xs sm:text-sm text-neutral-400 flex flex-col items-center gap-4">
          <span>Developed using:</span>
          <div className="grid grid-cols-2 gap-6 sm:flex sm:items-center sm:justify-center sm:gap-4">
            {/* React Logo */}
            <div className="flex flex-col items-center gap-2">
              <img src={ReactLogo} alt="React logo" className="h-6 w-auto" />
              <span>React</span>
            </div>

            {/* Tailwind Logo */}
            <div className="flex flex-col items-center gap-2">
              <img src={TailwindLogo} alt="Tailwind CSS logo" className="h-6 w-auto" />
              <span>Tailwind CSS</span>
            </div>

            {/* Framer Logo */}
            <div className="flex flex-col items-center gap-2">
              <img src={FramerLogo} alt="Framer Motion logo" className="h-6 w-auto" />
              <span>Framer Motion</span>
            </div>

            {/* Vercel Logo */}
            <div className="flex flex-col items-center gap-2">
              <img src={VercelLogo} alt="Vercel logo" className="h-6 w-auto" />
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;