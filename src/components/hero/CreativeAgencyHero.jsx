import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Home7sh4 from "../../../public/assets/imgs/home-7/adna.png";
import Home7sh2 from "../../../public/assets/imgs/home-7/atables.png";
import Home7sh3 from "../../../public/assets/imgs/home-7/atablet.png";
import Home7sh1 from "../../../public/assets/imgs/home-7/atabletcard.png";
import Home7scroll from "../../../public/assets/imgs/home-7/scroll.png";
import Home7shape6 from "../../../public/assets/imgs/home-7/shape-6.png";
import Image from "next/image.js";

const CreativeAgencyHero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let creative = document.querySelector(".service__hero-right-2 .creative");
      let solution = document.querySelector(".service__hero-right-2 .solution");
      let heroContent = document.querySelector(
        ".service__hero-right-2 .animate_content"
      );
      let tHero = gsap.context(() => {
        let hero7_thum_anim = document.querySelector(".hero7__thum-anim");
        if (hero7_thum_anim) {
          gsap.from(".image-1", {
            x: 65,
            yPercent: 100,
            opacity: 0,
            duration: 2,
            delay: 1,
          });

          gsap.from(".image-2", {
            delay: 1.5,
            scale: 0,
            duration: 1.5,
          });

          gsap.from(".image-3", {
            x: 65,
            yPercent: -100,
            duration: 2,
            opacity: 0,
            delay: 1,
          });
          gsap.from(".image-4", {
            xPercent: -100,
            yPercent: -100,
            duration: 2,
            opacity: 0,
            delay: 1,
          });
        }

        let split_creative = new SplitText(creative, { type: "chars" });
        let split_solution = new SplitText(solution, { type: "chars" });
        let split_herocontent = new SplitText(heroContent, {
          type: "chars words",
        });

        gsap.from(split_creative.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_solution.chars,
          { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 },
          "-=1.5"
        );
        gsap.from(
          split_herocontent.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__hero-2" id='home'>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__hero-inner-2">
                <div className="service__hero-left-2">
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh1}
                    alt="Image"
                    className="image-1"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh2}
                    alt="Image"
                    className="image-2"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh3}
                    alt="Image"
                    className="image-3"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Home7sh4}
                    alt="Image"
                    className="image-4"
                  />
                </div>
                <div className="service__hero-right-2 hero7__thum-anim">
                  <h1 className="title creative">
                    HEALTHCARE <span className="solution">PRODUCTS</span>{" "}
                  </h1>
                  <p className="animate_content">
                    {" "}
                    We Aim To Be The Go-to Destination For All Your Pharmaceutical Needs.
                  </p>
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={Home7scroll}
                    alt="scroll Image"
                    className="scroll"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={132}
          height={132}
          src={Home7shape6}
          alt="Shape Image"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default CreativeAgencyHero;
