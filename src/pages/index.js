import Head from "next/head";
import React, { useEffect, useState } from "react";
import allNavData from "../data/navData.json";
import $ from "jquery";
import { Power2, gsap } from "gsap";
import {
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  SplitText,
} from "@/plugins";
import {
  CursorAnimation,
  Switcher,
  ScrollTop,
  Preloader,
  CreativeAgencyHeader,
  CreativeAgencyHero,
  CreativeAgencyAbout,
  CreativeAgencyService,
  CreativeAgencyAward,
  CreativeAgencyPortfolio,
  CreativeAgencyTeam,
  CreativeAgencyBrand,
  CreativeAgencyBlog,
  CreativeAgencyCTA,
  CreativeAgencyFooter,
  StartupAgencyHero,
  StartupAgencyWorkflow,
  StartupAgencyFeature,
  StartupAgencyService,
  StartupAgencyFaq,
  StartupAgencyPortfolio,
  StartupAgencyBrand,
  StartupAgencyTestimonial,
  StartupAgencySolution,
  StartupAgencyBlog,
  StartupAgencyCTA,
  StartupAgencyFooter,
  DigitalAgencyBlog,
} from "@/components";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const CreativeAgency = () => {
  const [navData, setNavData] = useState({});
  const [mode, setMode] = useState("");
  useEffect(() => {
    setNavData(allNavData);
    if (typeof window !== "undefined") {
      if (mode == "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
      let tHero = gsap.context(() => {
        $(".btn-hover").on("mouseenter", function (e) {
          var x = e.pageX - $(this).offset().left;
          var y = e.pageY - $(this).offset().top;

          $(this).find("span").css({
            top: y,
            left: x,
          });
        });

        $(".btn-hover").on("mouseout", function (e) {
          var x = e.pageX - $(this).offset().left;
          var y = e.pageY - $(this).offset().top;

          $(this).find("span").css({
            top: y,
            left: x,
          });
        });

        const all_btns = gsap.utils.toArray(".btn_wrapper");
        if (all_btns.length > 0) {
          var all_btn = gsap.utils.toArray(".btn_wrapper");
        } else {
          var all_btn = gsap.utils.toArray("#btn_wrapper");
        }
        const all_btn_cirlce = gsap.utils.toArray(".btn-item");
        all_btn.forEach((btn, i) => {
          $(btn).mousemove(function (e) {
            callParallax(e);
          });
          function callParallax(e) {
            parallaxIt(e, all_btn_cirlce[i], 80);
          }

          function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
              x: ((relX - $this.width() / 2) / $this.width()) * movement,
              y: ((relY - $this.height() / 2) / $this.height()) * movement,
              ease: Power2.easeOut,
            });
          }
          $(btn).mouseleave(function (e) {
            gsap.to(all_btn_cirlce[i], 0.5, {
              x: 0,
              y: 0,
              ease: Power2.easeOut,
            });
          });
        });

        let arr1 = gsap.utils.toArray("#btn_wrapper");
        let arr2 = gsap.utils.toArray(".btn_wrapper");
        const all_buttons = arr1.concat(arr2);

        all_buttons.forEach((btn) => {
          if (!btn.classList.contains("hero__button")) {
            gsap.from(btn, {
              scrollTrigger: {
                trigger: btn,
                start: "top center+=150",
                markers: false,
              },
              opacity: 0,
              y: -70,
              ease: "bounce",
              duration: 1.5,
            });
          }
        });
        let splitTitleLines = gsap.utils.toArray(".title-anim");

        splitTitleLines.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "words, lines",
          });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        });
        let splitTextLines = gsap.utils.toArray(".text-anim p");

        splitTextLines.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              duration: 2,
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        });
      });
      return () => tHero.revert();
    }
  }, [mode]);
  return (
    <div>
      <Head>
        <title>Creative Agency</title>
        <meta name="description" content="Creative Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/imgs/logo/favicon.png"
        />
      </Head>
      <main>
        <div className="has-smooth" id="has_smooth"></div>
        <Preloader />
        <CursorAnimation />
        <ScrollTop />
        <CreativeAgencyHeader navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <CreativeAgencyHero /> 
            <DigitalAgencyBlog/>
              
            {/* <CreativeAgencyBrand />  */}
            {/* <CreativeAgencyAward />  */}
        {/* <CreativeAgencyAbout /> */}
            <StartupAgencyWorkflow />
            <StartupAgencyFeature /> 
            <StartupAgencyFaq />  
            <StartupAgencyTestimonial />
            <CreativeAgencyFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreativeAgency;
