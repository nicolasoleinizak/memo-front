'use client';
import { Londrina_Solid } from "next/font/google";
import BurgerIcon from "./icons/burger-icon";
import { IconButton } from "./icon-button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "./sidebar";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const londrina = Londrina_Solid({
  subsets: ["latin"],
  weight: "400"
});

export default function Menu({className}: {className?: string}) {
  const router = useRouter();
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleToggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const animatedProps = useSpring({
    left: displayMenu ? 0 : -200,
    top: 80,
  });

  return (
    <div className={`w-full ${className}`}>
      <div className={`grid grid-cols-3 justify-items-stretch items-center w-full bg-primary-950 px-5 h-20 text-primary-600 drop-shadow-lg`}>
        <IconButton
          onClick={handleToggleMenu}
          className="justify-self-start text-primary-600"
        >
          <BurgerIcon />
        </IconButton>
        <Link href="/" className="justify-self-center">
          <h1
            className={`${londrina.className} flex flex-row items-center gap-1 text-4xl`}
          >
            <span>Memo</span>
            <svg version="1.1" viewBox="0 0 1576 1600" width="60" height="60" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path transform="translate(151 162)" d="m0 0c0.927-0.00707 1.85-0.0141 2.81-0.0214 1.02 0.00242 2.04 0.00483 3.09 0.00732 1.62-0.00786 1.62-0.00786 3.28-0.0159 3.65-0.0151 7.29-0.0157 10.9-0.0164 2.61-0.00762 5.21-0.016 7.82-0.0252 7.09-0.0229 14.2-0.0308 21.3-0.0358 4.43-0.00325 8.85-0.00978 13.3-0.017 12.3-0.0196 24.5-0.036 36.8-0.0389 0.784-1.88e-4 1.57-3.75e-4 2.38-5.68e-4 1.59-3.66e-4 3.18-7.3e-4 4.77-0.00109 0.789-1.83e-4 1.58-3.66e-4 2.39-5.54e-4 0.79-1.81e-4 1.58-3.61e-4 2.39-5.47e-4 12.8-0.00354 25.6-0.0306 38.4-0.068 13.1-0.038 26.3-0.0574 39.4-0.0577 7.38-5.86e-4 14.8-0.00914 22.2-0.038 6.94-0.027 13.9-0.0285 20.8-0.0123 2.55 0.00182 5.11-0.00497 7.66-0.0208 3.47-0.0203 6.95-0.01 10.4 0.00821 1.02-0.0132 2.04-0.0264 3.09-0.04 2.54 0.0306 4.84 0.0924 7.31 0.655 3.05 3.42 3.75 7.28 4.78 11.7 0.343 1.44 0.687 2.88 1.03 4.31 0.188 0.793 0.375 1.59 0.568 2.4 1.17 4.89 2.42 9.76 3.65 14.6 0.275 1.09 0.549 2.17 0.832 3.29 5.69 22.5 11.5 45 17.7 67.3 0.49 1.78 0.98 3.56 1.47 5.34 0.243 0.882 0.486 1.76 0.736 2.67 3.06 11.1 6.01 22.3 8.96 33.5 4.01 15.2 8.06 30.3 12.2 45.4 3.46 12.6 6.83 25.3 10.2 37.9 3.38 12.8 3.38 12.8 6.85 25.5 3.26 11.8 6.36 23.7 9.45 35.6 3.47 13.3 7.01 26.6 10.7 39.9 3.54 12.7 6.9 25.5 10.3 38.3 1.85 7 3.72 14 5.59 21 2.2 8.23 4.38 16.5 6.54 24.7 3.89 14.9 7.8 29.7 12 44.5 2.54 9 4.95 18 7.35 27.1 1.83 6.88 3.66 13.8 5.53 20.6 0.201 0.739 0.401 1.48 0.608 2.24 0.412 1.52 0.824 3.03 1.24 4.55 3.93 14.5 7.77 29 11.6 43.5 3.41 13.1 6.84 26.1 10.4 39.1 5.63 20.5 11.2 40.9 16.5 61.5 2.73 10.6 5.46 21.2 8.42 31.7 1.72 6.13 3.38 12.3 5.03 18.4 2.15 8.04 4.34 16.1 6.56 24.1 8.74 31.6 8.74 31.6 12.5 46.8 1.5 6.13 3.16 12.2 4.93 18.2 1.04 3.65 1.96 7.33 2.86 11 1.36 5.53 2.81 11 4.36 16.5 2.77 9.91 5.43 19.9 8.08 29.8 0.25 0.937 0.5 1.87 0.757 2.84 5.22 19.6 10.4 39.2 15.5 58.8 5.09 19.4 10.3 38.8 15.6 58.1 3.93 14.2 7.66 28.5 11.3 42.9 5.65 22.2 11.3 44.4 17.9 66.4 2.47 8.42 4.58 16.9 6.67 25.4 2.53 10.2 5.32 20.4 8.15 30.6 3.98 14.3 7.78 28.7 11.4 43.1 0.345 1.36 0.345 1.36 0.697 2.75 0.228 0.899 0.456 1.8 0.692 2.72 0.452 1.78 0.905 3.56 1.36 5.35 0.219 0.864 0.439 1.73 0.665 2.62 2.9 11.4 5.93 22.7 8.99 34.1 0.91 3.38 1.81 6.76 2.71 10.1 3.14 11.8 6.39 23.5 9.89 35.2 0.273 0.919 0.546 1.84 0.828 2.79 0.238 0.793 0.476 1.59 0.722 2.4 0.671 2.49 1.25 4.97 1.81 7.49 0.179 0.81 0.358 1.62 0.542 2.45 0.136 0.617 0.271 1.23 0.411 1.87-58.4 0.0171-117 0.033-175 0.0423-1.3 2.07e-4 -1.3 2.07e-4 -2.62 4.18e-4 -18.8 0.00299-37.6 0.00576-56.3 0.0083-9.21 0.00125-18.4 0.00254-27.6 0.00387-1.37 1.96e-4 -1.37 1.96e-4 -2.78 3.96e-4 -29.7 0.00427-59.4 0.0118-89.2 0.021-30.5 0.00942-61.1 0.0156-91.6 0.0176-4.31 2.88e-4 -8.61 6.14e-4 -12.9 9.62e-4 -0.848 6.74e-5 -1.7 1.35e-4 -2.57 2.04e-4 -13.7 0.00118-27.4 0.00583-41 0.0118-13.7 0.00587-27.5 0.00814-41.2 0.00667-8.17-7.64e-4 -16.3 0.00129-24.5 0.0073-6.08 0.00417-12.2 0.00318-18.2 1.01e-4 -2.47-4.26e-4 -4.95 8.72e-4 -7.42 0.00398-3.34 0.00396-6.68 0.00188-10-0.00184-0.981 0.00263-1.96 0.00525-2.97 0.00796-1.32-0.00337-1.32-0.00337-2.67-0.00681-0.765 1.56e-4 -1.53 3.12e-4 -2.32 4.73e-4 -1.74-0.125-1.74-0.125-2.74-1.12-0.101-2.8-0.135-5.58-0.128-8.38-0.00165-0.895-0.0033-1.79-5e-3 -2.71-0.00437-3.05-0.00151-6.09 0.00123-9.14-0.00165-2.2-0.00373-4.39-0.00622-6.59-0.0056-6.1-0.00489-12.2-0.00322-18.3 6.53e-4 -5.93-0.00337-11.9-0.00726-17.8-0.00789-12.3-0.011-24.6-0.0114-36.9-5.02e-4 -12.5-0.00314-24.9-0.00841-37.4-3.3e-4 -0.785-6.6e-4 -1.57-1e-3 -2.38-0.00135-3.2-0.00271-6.4-0.00409-9.6-0.0163-37.9-0.0227-75.8-0.0274-114-0.00238-18.9-0.00608-37.7-0.01-56.6-0.0127-60.5-0.0234-121-0.0268-181-1.62e-4 -2.89-3.28e-4 -5.78-4.94e-4 -8.68-3.34e-4 -5.8-6.64e-4 -11.6-9.95e-4 -17.4-3.87e-4 -6.79-7.77e-4 -13.6-0.00117-20.4-1.12e-4 -1.94-2.24e-4 -3.89-3.34e-4 -5.83-0.00355-62.5-0.0186-125-0.0419-187-0.0167-44.9-0.0322-89.7-0.0367-135-9.35e-5 -0.922-1.87e-4 -1.84-2.83e-4 -2.79-0.00202-20.2-0.00318-40.5-0.00353-60.7-1.36e-4 -7.24-3.45e-4 -14.5-5.93e-4 -21.7-6.16e-5 -1.8-1.2e-4 -3.6-1.75e-4 -5.4-9.21e-4 -28.7-0.0109-57.5-0.0255-86.2-0.0146-28.9-0.0197-57.9-0.0116-86.8 0.00112-3.99 0.00213-7.99 0.00307-12 2.85e-4 -1.17 2.85e-4 -1.17 5.76e-4 -2.37 0.00274-12.4-0.00463-24.9-0.0161-37.3-0.0111-12.2-0.0116-24.4-6.3e-4 -36.6 0.00559-6.53 0.00597-13.1-0.00651-19.6-0.0112-5.93-0.00894-11.9 0.00467-17.8 0.00246-2.14-2.32e-4 -4.29-0.0084-6.43-0.0103-2.89-0.00244-5.78 0.0103-8.67-0.00741-0.844-0.0148-1.69-0.0224-2.56 0.0217-2.31 0.0217-2.31 0.396-5.95 3.16-2.11 3.9-2.25 7.5-2.26z" />
              <path transform="translate(1174 162)" d="m0 0c0.929-0.00398 1.86-0.00796 2.82-0.0121 1.53 0.00874 1.53 0.00874 3.1 0.0177 1.08-0.00171 2.17-0.00342 3.29-0.00518 3.65-0.00331 7.31 0.00773 11 0.0186 2.61 5.64e-4 5.22 2.48e-4 7.83-8.85e-4 5.63-0.00105 11.3 0.00524 16.9 0.0165 8.14 0.0162 16.3 0.0215 24.4 0.024 13.2 0.00438 26.4 0.0177 39.6 0.0366 12.8 0.0184 25.7 0.0325 38.5 0.041 0.791 5.25e-4 1.58 0.00105 2.4 0.00159 3.97 0.00261 7.93 0.00514 11.9 0.00762 32.9 0.0207 65.8 0.056 98.8 0.101 2.15 3.7 1.89 6.06 1.31 10.3-0.619 5.51-0.477 11.1-0.495 16.6-0.00796 1.39-0.0164 2.78-0.0251 4.17-0.018 3-0.0331 5.99-0.0458 8.99-0.0207 4.85-0.0483 9.71-0.0767 14.6-0.0449 7.81-0.0853 15.6-0.124 23.4-0.066 13.4-0.137 26.8-0.212 40.2-0.0248 4.43-0.0493 8.86-0.073 13.3-0.0989 18.4-0.209 36.7-0.463 55.1-0.778 56.3-0.9 113-0.92 169-3.76e-4 1.01-7.52e-4 2.02-0.00114 3.06-0.00968 27-0.00876 54-0.00477 81 0.00234 16.2 0.00258 32.3 0.00148 48.5-7.64e-5 1.16-1.53e-4 2.33-2.31e-4 3.53-3.12e-4 4.73-6.3e-4 9.46-9.6e-4 14.2-0.00304 44.1-3.21e-4 88.2 0.0051 132 0.00472 38.7 0.00434 77.5-4.61e-4 116-0.00542 43.9-0.00744 87.9-0.00439 132 3.2e-4 4.74 6.33e-4 9.47 9.43e-4 14.2 7.91e-5 1.17 1.58e-4 2.33 2.4e-4 3.53 0.00111 17.2-1.43e-4 34.4-0.00272 51.6-0.00294 19.7-0.00199 39.4 0.00328 59.1 0.00231 8.92 0.0046 17.8 0.00142 26.8-0.0286 83.2 0.618 166 1.13 250h-612c-1.31-3.94-0.393-5.45 0.938-9.38 2.44-7.39 4.57-14.9 6.62-22.4 0.343-1.25 0.686-2.5 1.04-3.78 4.36-15.9 8.58-31.8 12.8-47.7 1.72-6.48 3.45-13 5.18-19.5 0.422-1.58 0.844-3.17 1.27-4.75 2.86-10.7 5.73-21.5 8.63-32.2 3.41-12.6 6.77-25.3 10.1-37.9 0.346-1.3 0.692-2.6 1.04-3.89 5.09-19.1 10.2-38.2 15.2-57.3 3.26-12.3 6.54-24.6 9.87-36.9 2.06-7.64 4.07-15.3 6.04-22.9 1.47-5.68 3.02-11.3 4.59-17 2.36-8.44 4.6-16.9 6.81-25.4 3.46-13.3 7.01-26.5 10.7-39.7 3.54-12.8 6.86-25.6 10.2-38.4 2.06-7.94 4.17-15.9 6.53-23.7 2.2-7.35 4.1-14.7 5.92-22.2 1.41-5.75 2.9-11.5 4.37-17.2 0.376-1.46 0.751-2.93 1.12-4.4 2.47-9.67 5.06-19.3 7.75-28.9 2.09-7.49 4.11-15 6.13-22.5 0.4-1.48 0.799-2.96 1.2-4.44 1.07-3.95 2.13-7.91 3.2-11.9 0.792-2.94 1.59-5.87 2.38-8.81 3.72-13.8 7.38-27.6 11-41.4 5.24-19.9 10.6-39.8 16-59.7 4.88-17.8 9.66-35.6 14.3-53.5 0.436-1.67 0.871-3.35 1.31-5.02 0.216-0.828 0.431-1.66 0.653-2.51 2.99-11.5 6.07-22.9 9.13-34.4 2.8-10.5 5.58-20.9 8.28-31.4 1.69-6.53 3.48-13 5.38-19.5 3.5-12 6.51-24.1 9.56-36.2 2.34-9.24 4.85-18.4 7.58-27.5 1.39-4.71 2.65-9.44 3.86-14.2 0.519-2.01 1.04-4.02 1.56-6.03 0.274-1.06 0.549-2.12 0.832-3.22 2.5-9.64 5.07-19.3 7.62-28.9 1.55-5.86 3.11-11.7 4.66-17.6 2-7.58 4.01-15.2 6.02-22.7 0.187-0.704 0.373-1.41 0.565-2.13 4.37-16.5 8.76-33 13.4-49.4 4.66-16.6 9.02-33.3 13.4-49.9 3.04-11.7 6.12-23.4 9.2-35.1 0.297-1.13 0.594-2.25 0.9-3.41 3.98-15.1 8.03-30.2 12.2-45.2 4.38-16 8.66-31.9 12.9-47.9 0.289-1.09 0.577-2.19 0.875-3.32 3.06-11.6 6.12-23.2 9.17-34.9 1.28-4.87 2.56-9.75 3.85-14.6 0.905-3.44 1.81-6.89 2.71-10.3 0.555-2.11 1.11-4.22 1.67-6.33 0.246-0.945 0.493-1.89 0.746-2.86 1.13-4.28 2.31-8.55 3.61-12.8 0.218-0.716 0.436-1.43 0.66-2.17 1.79-3.78 4.6-4.04 8.36-4.04z" />
            </svg>
            <span>Test</span>
          </h1>
        </Link>
      </div>
      <animated.div style={animatedProps} className="absolute">
        <Sidebar />
      </animated.div>
    </div>
  );
}
