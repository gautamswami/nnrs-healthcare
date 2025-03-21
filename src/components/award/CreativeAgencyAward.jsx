import React, { useEffect } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Home7m from "../../../public/assets/imgs/home-7/m.png";
import Home7w from "../../../public/assets/imgs/home-7/w.png";
import Home7fwa from "../../../public/assets/imgs/home-7/fwa.png";
import Home7webby from "../../../public/assets/imgs/home-7/webby.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CreativeAgencyAward = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            gsap.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
          });
        } else {
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });

          const counterNumber = document.querySelectorAll(".counter__number");

          gsap.from(counterNumber, {
            textContent: 0,
            duration: 1,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
              trigger: ".counter__number",
            },
          });
          gsap.set(".zoom_in", { opacity: 0, y: 30, scale: 0.5 });
          gsap.to(".zoom_in", {
            scrollTrigger: {
              trigger: ".zoom_in",
              start: "top center+=200",
              markers: false,
            },
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="award__area-7">
        <div className="container">
          <div className="row inherit_row">
            <div className="col-xxl-12">
              <div className="award__top-7">
                <div className="award__counter fade_bottom_2">
                  <h2 className="counter__number">25k</h2>
                  <p>Medicines Devlivered</p>
                </div>
                <div className="award-video-7">
                  <video loop muted autoPlay playsInline>
                    <source src="assets/video/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="award__btm-7">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                <div className="award__left-7">
                  <h2 className="sec-title title-anim">
                    Client <br /> First
                  </h2>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-3 col-lg-3 col-md-8">
                <div className="award__mid-7 text-anim">
                  <p style={{maxWidth:"unset"}}>
                    CLIENT FIRST We Have Vast Experience And Considerable
                    Expertise Dealing With In Modern Technology Based Services.
                    Our Up-to-date Technologies Are The Perfect Example Of
                    Modern Quality Service. We Follow High Standards In
                    Providing Of Manufacturing Products Clients Satisfaction
                    Is Our Main Concern, We Are Working Hard Every Day To Assert
                    Ourself And Preserve The Trust Of Clients. Our Experience Is
                    An Asset Which Allow Us To Provide Best Quality Of Service
                    According To Their Needs And Requirements.
                  </p>
                </div>
              </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyAward;
