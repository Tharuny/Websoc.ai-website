import { footerLinks, socialMedia } from "../constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col m-10">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src="/images/websoc-noBg.png"
              alt="logo"
              width={50}
              height={46}
              className="m-3"
            />
            <span className="font-dune-rise">WEBSOC.AI</span>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm text-gray-300">
            We are here to serve you the best choice join us we provide you with
            the best design and advanced Mobile & Web Applications our team will
            help you to choose the best. Look at our Web Designs and Mobile
            Application Designs.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-gray-300 rounded-full hover:bg-slate-50 rotate-360-hover"
                key={icon.alt}
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-gray-300">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-gray-400 hover:text-white"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center m-3">
        <div className="flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer">
          <img
            src="\images\copyright_logo.png"
            alt="copyright sign"
            width={30}
            height={30}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
