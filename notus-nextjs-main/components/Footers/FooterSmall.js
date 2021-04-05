import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-white  text-sm font-semibold block py-1 px-3">
                Copyright © {new Date().getFullYear()}{" "}

                Cyrus coin
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                {/* <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                      <a
                        className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                        href="https://creative-tim.com/terms?ref=nnjs-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                        href="https://creative-tim.com/privacy?ref=nnjs-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                        href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                      >
                        Contact Us
                      </a>
                    </li>
                {/* <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li> */}
                <li>
                  {/* <a
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}