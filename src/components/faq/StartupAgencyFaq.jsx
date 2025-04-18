import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Accordion } from "react-bootstrap";
import Link from "next/link.js";
import imgsBg41 from "../../../public/assets/imgs/bg/4/1.png";
import imgsBg42 from "../../../public/assets/imgs/bg/4/2.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyFaq = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_3");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_3", {
            scrollTrigger: {
              trigger: ".fade_bottom_3",
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
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="faq__area-4 pt-150 pb-150">
        <div className="container g-0">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6">
              <div className="faq__sec-title text-anim">
                <h3 className="sec-title-6 title-anim">Core values.</h3>
                <p>
                  Core values of NNRS pharmecuticals are the guiding principles<br/> that
                  dictate our behavior and action.
                </p>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
              <div className="faq__list-4">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item
                    eventKey="0"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      Safety
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                        The safety of our employees and the public is{" "}
                        {"everyone's"} responsibility. Plan safety into every
                        aspect of our work and do not deviate from that plan.
                        <span>Strive for zero incidents.</span>.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="1"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      Transparency
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                        {
                          "Our actions must match our words. Each day we must strive to earn our reputation rather than simply manage it. To that end, we must operate in a manner in which our integrity and values cannot be questioned - that is, we must be authentic."
                        }
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="2"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      Teamwork
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                        Our culture of teamwork allows us to work together
                        within the Company, and with our clients to deliver
                        better solutions and collectively accomplishing our
                        goals.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="3"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      Entreprenuership
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                        Each employee should show initiative and be motivated by
                        a desire to win, to commit, and to succeed.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <Image
            priority
            width={94}
            height={62}
            className="faq__img6-1"
            src={imgsBg41}
            alt="Shape"
          />
          <Image
            priority
            width={134}
            height={178}
            className="faq__img6-2"
            src={imgsBg42}
            alt="Shape"
          />
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFaq;
