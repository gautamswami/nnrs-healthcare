import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Tablet1 from "../../../public/assets/imgs/home-7/clinidipine.png";
import Tablet2 from "../../../public/assets/imgs/home-7/clindipineTab.png";
import Tablet3 from "../../../public/assets/imgs/home-7/dapagliflozin.png";
import Tablet4 from "../../../public/assets/imgs/home-7/sabser.png";
import Tablet5 from "../../../public/assets/imgs/home-7/sunkit.png";
import Tablet6 from "../../../public/assets/imgs/home-7/minokit.png";
import Tablet7 from "../../../public/assets/imgs/home-7/kitocrit.png";
import Tablet8 from "../../../public/assets/imgs/home-7/glitin.png";
import Tablet9 from "../../../public/assets/imgs/home-7/delikit.png";
import Tablet10 from "../../../public/assets/imgs/home-7/cabovit.png";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBlog = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  const products = [
    {
      img: Tablet1,
      title: "Cilanac",
      salts: "Cilnidipine & Telmisartan Tablets",
      detail:
        "High blood pressure (hypertension) and help prevent heart-related complications like strokes and heart attacks.",
    },
    {
      img: Tablet2,
      title: "Cilanac-10",
      salts: "Cilnidipine Tablets I.P. 10mg",
      detail:
        "Manage high blood pressure by relaxing blood vessels, making it easier for the heart to pump blood.",
    },
    {
      img: Tablet3,
      title: "Delikit-M",
      salts:
        "Dapagliflozin & Metformin Hydrochloride Extended-release Tablets (10mg+500mg)",
      detail: "Used to control blood sugar levels in type 2 diabetes patients.",
    },
    {
      img: Tablet4,
      title: "Sabser-F",
      salts: "Ferrous Ascorbate & Folic Acid Tablets I.P.",
      detail:
        "Helps treat and prevent iron deficiency anemia, especially during pregnancy.",
    },
    {
      img: Tablet5,
      title: "Sunkit 60k",
      salts: "Cholecalciferol Chewable Tablets 60,000 I.U.",
      detail:
        "Used to treat or prevent vitamin D3 deficiency and support bone health.",
    },
    {
      img: Tablet6,
      title: "Minokit-D",
      salts: "Methylcobalamin with Alpha Lipoic Acid, Thiamine Hydrochloride",
      detail:
        "Supports nerve health and helps in the treatment of diabetic neuropathy.",
    },
    {
      img: Tablet7,
      title: "Kitocrit",
      salts: "Alpha Ketoanalogue Tablets",
      detail:
        "Used in chronic kidney disease to delay dialysis and manage protein metabolism.",
    },
    {
      img: Tablet8,
      title: "Glitin-M 60",
      salts:
        "Gliclazide Modified-release & Metformin Hydrochloride Extended-release Tablets",
      detail:
        "Helps control blood sugar in type 2 diabetes by improving insulin function.",
    },
    {
      img: Tablet9,
      title: "Delikit-10",
      salts: "Dapagliflozin Tablets 10mg",
      detail:
        "Used to lower blood sugar in type 2 diabetes and support heart and kidney health.",
    },
    {
      img: Tablet10,
      title: "Cabovit-500",
      salts: "Calcium & Vitamin D3 Tablets I.P.",
      detail:
        "Supports bone strength and helps prevent or treat calcium and vitamin D deficiency.",
    },
  ];

  return (
    <>
      <section className="blog__area no-pb blog__animation" id="products">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
                <h3 className="sec-title">OUR PRODUCTS</h3>
              </div>
            </div>

            {products?.map((data, index) => {
              return (
                <div
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 mb-4 mt-4"
                  key={`tablet-${index}`}
                >
                  <article className="blog__item">
                    <div className="blog__img-wrapper">
                      <div className="img-box-custom">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          className="image-box__item"
                          src={data.img}
                          alt=""
                        />
                      </div>
                    </div>

                    <h5>{data?.title}</h5>
                    {data?.salts}
                    <br />
                    <p style={{ fontWeight: 300 }}>{data?.detail}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBlog;
