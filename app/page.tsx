import Image from "next/image";

const links = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-900 w-full h-full">
      <section
        className="min-h-screen  text-white flex flex-col items-center justify-center gap-12"
        id="Home"
      >
        <h1 className="text-4xl md:text-6xl font-light text-center hero_fade_left">
          Hello, I'm{" "}
          <span className="text-blue-500 hover:text-blue-300 transition-no">
            <a href="https://www.linkedin.com/in/gabriel-romme-reyes-966497217/">
              Gabriel
            </a>
          </span>
          .
        </h1>
        <h2 className="text-4xl md:text-6xl font-light text-center hero_fade_right">
          I'm a full stack developer.
        </h2>
        <a
          className="text-xl md:text-3xl border-4 px-4 py-2"
          id="button"
          href="#About"
        >
          View my Work
        </a>
      </section>
      <section id="About" className="min-h-screen">
        <nav className="bg-gray-700 z-10 flex justify-center md:justify-end sticky top-0 w-100">
          <ul className="flex gap-4 md:gap-8  py-2 md:pe-52">
            {links.map((link, id) => (
              <li className="text-blue-200 text-l md:text-xl" key={id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center">
          <section className="mt-12  max-w-7xl">
            <h1 className="text-center text-xl font-bold md:text-6xl text-blue-300">
              About me
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-24">
              <section>
                <p className="fade_left">
                  I'm wholeheartedly committed to the idea of lifelong learning.
                  Currently, I'm diving into the world of full stack development
                  with a deep passion for JavaScript, React, and all things
                  web-related. What really drives me is the perfect mix of
                  creativity, problem-solving, and that constant thrill of
                  discovering something new in technology.
                </p>
              </section>
              <section className="flex justify-center mt-24 md:mt-0">
                <div className="grid grid-cols-3 gap-12">
                  <div className="flex flex-col gap-8 justify-evenly items-center">
                    <Image
                      src={"/images/file-type-html.svg"}
                      alt="html"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                    <Image
                      src={"/images/file-type-css.svg"}
                      alt="css"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                    <Image
                      src={"/images/file-type-js-official.svg"}
                      alt="js"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-12 justify-evenly items-center">
                    <Image
                      src={"/images/file-type-reactjs.svg"}
                      alt="react"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                    <Image
                      src={"/images/next-js.svg"}
                      alt="nextjs"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                    <Image
                      src={"/images/tailwindcss-icon.svg"}
                      alt="tailwind"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                    <Image
                      src={"/images/typescript-icon.svg"}
                      alt="typescript"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-8 justify-evenly items-center">
                    <Image
                      src={"/images/mysql-original-wordmark.svg"}
                      alt="mysql"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                    <Image
                      src={"/images/sanity.svg"}
                      alt="sanity"
                      width={100}
                      height={100}
                      className="hover:scale-125"
                    ></Image>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section
            id="Projects"
            className="min-h-screen mt-24 flex flex-col gap-12"
          >
            <h1 className="text-center text-xl font-bold md:text-6xl text-blue-300">
              Projects
            </h1>
            <section className="grid grid-cols-2">
              <div className="">
                <Image
                  src={"/images/Minify.png"}
                  alt="Minify"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                ></Image>
              </div>
              <div className="px-8 flex flex-col">
                <h1 className="text-xl md:text-3xl font-bold">Minify Blog</h1>
                <p className="text-sm md:text-xl mt-5">
                  Dynamic Blog using Next.js fullstack,Tailwind,TypeScript and
                  Sanity CMS
                </p>
                <span className="mt-5 ">
                  <a
                    href="https://blog-next-git-main-gabriel-romme-reyes-projects.vercel.app/"
                    className="border-b-4 border-blue-500 py-2 hover:text-blue-500"
                  >
                    Live Demo
                  </a>
                </span>
                <span className="mt-5 ">
                  <a
                    href="https://github.com/Gabriel-Romme-Reyes/blog-next"
                    className="border-b-4 border-blue-500 py-2 hover:text-blue-500"
                  >
                    Learn More
                  </a>
                </span>
              </div>
            </section>

            <section className="grid grid-cols-2">
              <div className="px-8 flex flex-col">
                <h1 className="text-xl md:text-3xl font-bold">DripCommerce</h1>
                <p className="text-sm md:text-xl mt-5">
                  Production ready e-commerce application built using Next.js
                  fullstack,Tailwind,TypeScript, Sanity CMS, and Stripe API
                </p>
                <span className="mt-5 ">
                  <a
                    href="https://commerce-next-gabriel-romme-reyes-projects.vercel.app/"
                    className="border-b-4 border-blue-500 py-2 hover:text-blue-500"
                  >
                    Live Demo
                  </a>
                </span>
                <span className="mt-5 ">
                  <a
                    href="https://github.com/Gabriel-Romme-Reyes/commerce-next"
                    className="border-b-4 border-blue-500 py-2 hover:text-blue-500"
                  >
                    Learn More
                  </a>
                </span>
              </div>
              <div className="">
                <Image
                  src={"/images/DripCommerce.png"}
                  alt="DripCommerce"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                ></Image>
              </div>
            </section>
          </section>
          <section id="Contact" className="mt-12">
            <h1 className="text-center text-xl font-bold md:text-6xl text-blue-300">
              Contact
            </h1>
          </section>
        </div>
        <footer className="bg-gray-600 min-h-24 flex justiy-center mt-12">
          <div className="max-w-2xl mx-auto mt-5 flex justify-between gap-6">
            <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
              <a href="https://github.com/Gabriel-Romme-Reyes" target="_blank">
                <Image
                  src={"/images/github.svg"}
                  alt="alt"
                  width={35}
                  height={35}
                ></Image>
              </a>
            </div>
            <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
              <a href="mailto:reyes.gabrielromme@gmail.com" target="_blank">
                <Image
                  src={"/images/mail.svg"}
                  alt="alt"
                  width={35}
                  height={35}
                ></Image>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
