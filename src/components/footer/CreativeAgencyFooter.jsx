import Link from "next/link";
import React from "react";
import ArrowBlack from "../../../public/assets/imgs/icon/arrow-black.png";
import Image from "next/image";

const CreativeAgencyFooter = () => {
  return (
    <>
      <footer className="footer__area-2 pt-130">
        <div className="container">
          <div className="footer__top-2 text-anim">
            <div className="row">
              <div className="col-xxl-12">
                <h2 className="sec-title-3 title-anim">
                  Get in touch <br /> now
                </h2>
                <p className="footer__sub-title">
                  If you would like to work with us or just want to get in
                  touch, we’d love to hear from you!
                </p>
              </div>
            </div>
          </div>

          <div className="footer__middle-2">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="footer__location-2">
                  <div className="location">
                    <h3>Address</h3>
                    <p>
                      Bana sidh goria lane <br />
                      Dhok Paloura JAMMU
                    </p>
                    <h3>Phone</h3>
                    <p>
                      +91 9906114426 <br />
                      +91 7006622837
                    </p>
                    <h3>Email</h3>
                    <p>
                      khajurianaresh26@gmail.com
                    </p>
                  </div>
                  {/* <div className="location">
                    <h3>New York</h3>
                    <p>
                      Nenuya Centre, Elia Street <br />
                      New York, USA
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="footer__subscribe-2">
                  <form action="#">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className="submit">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        src={ArrowBlack}
                        alt="Arrow Icon"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__btm-2">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                <div className="footer__copyright-2">
                  <p>
                    © 2022 - 2025 | Alrights reserved by{" "}
                    {/* <a href="https://wealcoder.com/" target="_blank"> */}
                      NNRS
                    {/* </a> */}
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                <div className="footer__nav">
                  <ul className="footer-menu menu-anim">
                    {/* <li>
                      <Link href="/about">about us</Link>
                    </li>
                    <li>
                      <Link href="/contact">contact</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CreativeAgencyFooter;
