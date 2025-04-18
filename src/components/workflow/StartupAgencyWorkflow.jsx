import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Thumb1 from "../../../public/assets/imgs/icon/4862470.png";
import Thumb4 from "../../../public/assets/imgs/icon/6492349.png";
import Thumb5 from "../../../public/assets/imgs/icon/pngtree-business-deadline-line-icon-png-image_3695357-removebg-preview.png";
import Thumb2 from "../../../public/assets/imgs/icon/track-icon-9.jpg";
import Thumb3 from "../../../public/assets/imgs/icon/oversee-control-supervise-superintend-check-1024.webp";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_workflow_6 = gsap.utils.toArray(
          ".animation_workflow_6 .workflow__item-4"
        );
        if (animation_workflow_6) {
          if (device_width < 1023) {
            animation_workflow_6.forEach((item, i) => {
              gsap.from(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 0,
                x: -30,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.from(".animation_workflow_6 .workflow__item-4", {
              scrollTrigger: {
                trigger: ".animation_workflow_6",
                start: "top center+=200",
                markers: false,
              },
              opacity: 0,
              x: -30,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area-4" id='about'>
        <div className="container line_4 pt-100 pb-130">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row animation_workflow_6">
            <div className="col-xxl-12">
              <div className="title-wrapper-6 text-anim">
                <h2 className="sec-subtile-6">Process</h2>
                <h3 className="sec-title-6 title-anim">Project Management</h3>
                <p>
                  Seamless execution through structured planning <br /> and
                  expert oversight.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb1}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Create detailed schedule & resource plan
                </h4>
                <p>
                  Develop a comprehensive roadmap with clear timelines and
                  resource allocation.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb4}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Communicate to all team members
                </h4>
                <p>
                  Ensure transparent and timely communication across all
                  stakeholders.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb5}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Complete and commission the project on time
                </h4>
                <p>
                  Deliver outcomes efficiently, meeting deadlines and regulatory
                  standards.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb2}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Track project and fine-tune deviations
                </h4>
                <p>
                  Monitor progress consistently and adjust plans proactively.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb3}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Supervise closely on quality of work done
                </h4>
                <p>
                  Maintain high-quality standards through rigorous supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyWorkflow;
