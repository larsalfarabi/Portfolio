import Link from "next/link";
import React from "react";

export default function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);

  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //   }, [isOpen]);

  // const navbarText = [
  //   { text: "Home", href: "/", number: "01" },
  //   { text: "About", href: "/about", number: "02" },
  //   { text: "Projects", href: "/projects", number: "03" },
  // ];

  return (
    <div className={`w-full pt-3`}>
      <div className="flex h-24 items-center justify-between px-7 lg:px-14">
        <Link href="/" className="text-primary">
          <h1
            className={`text-2xl font-semibold font-pop`}
            data-aos="fade-down"
            data-aos-duration="550"
          >
            Alfarabi.
          </h1>
        </Link>

        {/* Hamburger Button */}
        {/* <div className="flex lg:hidden">
          <button
            aria-label={
              !isOpen ? "Open Navigation Menu" : "Close Navigation Menu"
            }
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30"
          >
            {!isOpen ? (
              <BiMenuAltRight className="h-10 w-10 fill-current text-accent" />
            ) : (
              <BiX className="h-10 w-10 fill-current text-accent" />
            )}
          </button>
        </div> */}

        {/* Navbar Text */}
        {/* <div className="text-base-content hidden gap-8 lg:flex">
          {navbarText.map((item, index) => (
            <Link
              href={item.href}
              className={`flex flex-col items-end text-sm  text-primary hover:text-base_col transition-all duration-300 xl:text-base font-roboto_mono`}
              key={index}
              data-aos="fade-down"
              data-aos-delay={`${index}00`}
              data-aos-duration="550"
              data-aos-once="true"
              scroll={false}
            >
              <span className="text-xs text-base_col">{item.number}</span>
              <p>{`// ${item.text}`}</p>
            </Link>
          ))}
        </div> */}
      </div>

      {/* Sidebar */}
      {/* <div
        className={`fixed top-0 h-screen w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-300 ease-in"
            : "translate-x-0 transition-all duration-300 ease-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4 bg-secondary_darker drop-shadow-lg md:w-1/2">
          <div className="mt-44 flex flex-col items-center justify-center gap-12 text-base md:text-lg">
            {navbarText.map((item, index) => (
              <Link
                href={item.href}
                className="text-center font-mono text-primary hover:text-accent"
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <p className="flex flex-col">
                  <span className="text-sm text-accent">{item.number}.</span>
                  {`${item.text}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
