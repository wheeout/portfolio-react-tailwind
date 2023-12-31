import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import render from "../public/render-webdev.png";
import codingfolder from "../public/coding-folder.png";
import design from "../public/design.png";
import syntaxfolder from "../public/syntax-folder.png";
import html from "../public/html-5-svgrepo-com.png";
import css from "../public/css-3-svgrepo-com.png";
import javascript from "../public/javascript-svgrepo-com.png";
import python from "../public/python-svgrepo-com.png";
import node from "../public/node-js-svgrepo-com.png";
import sql from "../public/sql-database-sql-azure-svgrepo-com.png";
import csharp from "../public/c--4.png";
import php from "../public/php-svgrepo-com.png";
import react from "../public/react-svgrepo-com.png";
import flutter from "/public/flutter-svgrepo-com.png";
import laravel from "../public/laravel-svgrepo-com.png";
import photoshop from "../public/photoshop-cc-logo-svgrepo-com.png";
import figma from "../public/figma-svgrepo-com.png";
import Image from "next/image";
import GitHubRepoWidget from "./githubRepoWidget";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const hoverClass = isMobile ? "group-tap" : "group-hover";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1lq3nIQsOxhMiBzarpcWh4iBB0sdzb81r";
    link.download = "Curriculum Matheus - 2023 (English).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const linkedinLink = () => {
    window.open("https://www.linkedin.com/in/abreuelimamatheus/", "_blank");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Matheus&apos; Portfolio</title>
        <link rel="icon" href="/wheeout_icon.ico" />
      </Head>
      <main className=" bg-pink-50 px-10 dark:bg-gray-600 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="cursor-pointer bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-semibold text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={handleDownload}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-purple-300 font-bebas dark:text-purple-300 md:text-6xl">
              MATHEUS ABREU E LIMA
            </h2>
            <h3 className="text-2xl py-2 font-bold dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Blending front-end finesse with back-end robustness, creating
              comprehensive applications that deliver seamless user experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <span onClick={linkedinLink}>
                <AiFillLinkedin className="cursor-pointer" />
              </span>
            </div>
            <div className="mx-auto h-44 w-56 relative overflow-hidden mt-20 md:h-80 md:w-96">
              <Image src={render} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <div>
              <h3 className="flex justify-center gap-16 py-3 text-4xl font-extrabold py-1 dark:text-gray-800 ">
                KNOWLEDGE
              </h3>
              <p className="flex justify-center text-md py-3 leading-8 text-gray-800 dark:text-gray-600">
                A quick overview of my proficiency in a range of programming
                languages, frameworks, and technologies.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center bg-gray-50 shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <div className="flex justify-center">
                  <Image src={codingfolder} width={100} height={100} alt="" />
                </div>
                <h3 className="text-lg font-extrabold pt-2 pb-8 ">LANGUAGES</h3>
                <div className="flex flex-row justify-center gap-2">
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={html}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Proficient in creating structured and semantically
                        meaningful web pages.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={css}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Skilled in styling and layout techniques for elegant and
                        responsive design.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={javascript}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Strong grasp of both vanilla JS and modern ES6+ syntax
                        for dynamic and interactive web applications.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={python}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Experienced in building versatile applications and
                        backend services.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={node}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Proficient in server-side development and creating
                        scalable applications.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={sql}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Competent in database management and complex query
                        optimization.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={csharp}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Extensive experience in desktop application development
                        and WPF frameworks.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={php}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Basic understanding for backend development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center bg-gray-50 shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <div className="flex justify-center">
                  <Image src={syntaxfolder} width={100} height={100} alt="" />
                </div>
                <h3 className="text-lg font-extrabold pt-2 pb-8 ">
                  FRAMEWORKS
                </h3>
                <div className="flex flex-row justify-center gap-2">
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={react}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Proficient in creating dynamic and efficient user
                        interfaces.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={flutter}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Capable of building cross-platform mobile applications
                        with native performance.
                      </p>
                    </div>
                  </div>
                  <div className={`relative group ${hoverClass}`}>
                    <Image
                      src={laravel}
                      width={35}
                      height={35}
                      alt=""
                      className="filter grayscale transition duration-500 ease-in-out transform group-tap group-hover:filter-none"
                    />
                    <div className="absolute text-center opacity-0 group-hover:opacity-100 bg-white px-3 py-4 w-24 md:w-56 px-10 py-10 rounded shadow-lg">
                      <p className="text-gray-800 text-xs md:text-sm">
                        Base knowledge for creating robust and scalable web
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center bg-gray-50 shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt="" />
              </div>
              <h3 className="text-lg font-extrabold pt-8 pb-2  ">
                BEAUTIFUL DESIGNS
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 font-bold text-fuchsia-700">
                Design Tools I Use
              </h4>
              <div className="flex flex-row justify-center gap-2">
                <Image
                  src={photoshop}
                  width={35}
                  height={35}
                  alt=""
                  className="filter grayscale transition duration-500 ease-in-out transform hover:filter-none"
                />
                <Image
                  src={figma}
                  width={35}
                  height={35}
                  alt=""
                  className="filter grayscale transition duration-500 ease-in-out transform hover:filter-none"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="flex justify-center gap-16 py-3 text-4xl font-extrabold py-1 dark:text-white ">
              SHOWCASE
            </h3>
            <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              This section offers a curated glimpse into my diverse portfolio of
              software engineering endeavors. From dynamic web applications to
              cross-platform mobile solutions, these ventures reflect my
              commitment to crafting innovative and user-centric software
              experiences. Explore the showcased projects to witness firsthand
              the range and depth of my technical proficiency.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <section>
              <GitHubRepoWidget />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
