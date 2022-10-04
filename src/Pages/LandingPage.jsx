import React, { useState } from "react";

import styles from "../Stylesheets/cohortsLandingPage.module.scss";
import Carousal from "react-elastic-carousel";
import laptopimage from "../Assets/Images/student-cohort-laptop-image.png";
import whitebackground from "../Assets/Images/background.png";
import ellipseWhite from "../Assets/Images/Ellipse12.png";
import { Button } from "@mui/material";
import workbrightimage from "../Assets/Images/workbright.png";
import ohiyaimage from "../Assets/Images/ohiya.png";
import dopeimage from "../Assets/Images/dope.png";
import rpalabsimage from "../Assets/Images/image 4.png";
import ladyTeachingImage from "../Assets/Images/lady_with_board.png";
import workWithCompanyImage from "../Assets/Images/work-wth-company.png";
import salesBoxImage from "../Assets/Images/sales-box-image.png";
import benefitIcon2 from "../Assets/Images/benefit-icon-2.png";
import benefitIcon3 from "../Assets/Images/benefit-icon-3.png";
import moneyImage from "../Assets/Images/money.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Footer from "./Footer";
import sondermind from "../Assets/Images/sondermind.png";
import { useRef } from "react";
import { useEffect } from "react";
import Header from "./Header";
const upcomingCohort = [
  {
    key: "1",
    bootcampName: "Bootcamp1",
    cohortName: "Cohort1",
    dates: "July 11-18 , 2022",
  },
  {
    key: "2",
    bootcampName: "Bootcamp2",
    cohortName: "Cohort2",
    dates: "July 19-22 , 2022",
  },
  {
    key: "3",
    bootcampName: "Bootcamp3",
    cohortName: "Cohort3",
    dates: "July 24-27 , 2022",
  },
  {
    key: "4",
    bootcampName: "Bootcamp4",
    cohortName: "Cohort4",
    dates: "July 28-31 , 2022",
  },
  {
    key: "5",
    bootcampName: "Bootcamp5",
    cohortName: "Cohort5",
    dates: "July 28-31 , 2022",
  },
];
const dedicatedPartners = [
  {
    key: "1",
    src: workbrightimage,
  },
  {
    key: "2",
    src: ohiyaimage,
  },
  {
    key: "3",
    src: dopeimage,
  },
  {
    key: "4",
    src: rpalabsimage,
  },
  {
    key: "5",
    src: sondermind,
  },
];
const testimonial = [
  {
    key: "1",
    text: "“From a Bartender to Landing a Sales Job, Gritly empowered me to break into tech through sales”",
    name: "Mariah - SonderMind",
    designation: "Manager @ Slytherin",
  },
  {
    key: "2",
    text: "“With no sales exposure, Gritly gave me the skills and confidence, that helped me crack a Sales Job at the prestigious DopeSite.”",
    name: "David - Dopesite",
    designation: "Manager @ Howarts",
  },
  {
    key: "3",
    text: "“With relevant skills and connecting with great sales professionals, I stood out as a sales candidate”",
    name: "Oscar - Dopesite",
    designation: "Team Leader @ Gryffindor",
  },
  {
    key: "4",
    text: "“With relevant skills and connecting with great sales professionals, I stood out as a sales candidate”",
    name: "Oscar - Dopesite",
    designation: "Team Leader @ Gryffindor",
  },
  {
    key: "5",
    text: "“With relevant skills and connecting with great sales professionals, I stood out as a sales candidate”",
    name: "Oscar - Dopesite",
    designation: "Team Leader @ Gryffindor",
  },
  {
    key: "6",
    text: "“With relevant skills and connecting with great sales professionals, I stood out as a sales candidate”",
    name: "Oscar - Dopesite",
    designation: "Team Leader @ Gryffindor",
  },
  {
    key: "7",
    text: "“With relevant skills and connecting with great sales professionals, I stood out as a sales candidate”",
    name: "Oscar - Dopesite",
    designation: "Team Leader @ Gryffindor",
  },
];
const breakpoints = [
  { width: 100, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 850, itemsToShow: 2 },
  { width: 1150, itemsToShow: 3 },
  { width: 1450, itemsToShow: 3 },
  { width: 1750, itemsToShow: 3 },
];
export default function LandingPage(props) {
  const ref = useRef(null);
  const [doc, setDocument] = useState();
  useEffect(() => {
    const box = document.querySelector("#cardmap");
    setDocument(box);
  }, []);

  const previousAction = () => {
    const width = doc.clientWidth;
    doc.scrollLeft = doc.scrollLeft - width;
  };
  const nextAction = () => {
    const width = doc.clientWidth;
    doc.scrollLeft = doc.scrollLeft + width;
  };

  return (
    <div className={styles["main-div"]}>
      <Header />
      <div className={styles["banner-wrapper"]}>
        <div className={styles["banner"]}>
          <div className={styles["header-wrapper"]}>
            <div className={styles["left-side-headers"]}>
              <div className={styles["launch-your-career"]}>
                Launch Your Career in Tech
              </div>
              <div className={styles["launch-career-subtext"]}>
                At Gritly, we are catalyzing balance of representation within
                the tech workforce. With an outcome-oriented curriculum, we
                provide high-growth companies with qualified talent.
              </div>
              <div className={styles["apply-section"]}>
                <Button className={styles["apply-now-button"]}>
                  Apply Now
                </Button>
                <div className={styles["hire-students"]}>Hire Students</div>
              </div>
            </div>
            <div className={styles["right-side-images"]}>
              <div className={styles["header-images"]}>
                <img
                  src={laptopimage}
                  alt="white"
                  className={styles["laptop-image"]}
                />
                <img
                  src={whitebackground}
                  alt="white"
                  className={styles["white-background"]}
                />

                <img
                  src={ellipseWhite}
                  alt="white"
                  className={styles["ellipse-image"]}
                />
              </div>
            </div>
          </div>
          <div className={styles["bootcamp-card-wrapper"]}>
            <Carousal breakPoints={breakpoints}>
              {upcomingCohort.map((item) => {
                return (
                  <div className={styles["bootcamp-menu"]} key={item.key}>
                    <div className={styles["upcoming-cohort"]}>
                      <span className={styles["yellow-round"]}></span>
                      <span className={styles["bootcamp-title"]}>
                        {item.bootcampName}
                      </span>
                    </div>
                    <div className={styles["upcoming-cohort-wrapper"]}>
                      <span className={styles["upcoming"]}>Upcoming</span>
                      <span className={styles["cohort-name"]}>
                        {item.cohortName}
                      </span>
                    </div>
                    <div className={styles["dates-wrapper"]}>
                      <span className={styles["dates"]}>Dates</span>
                      <span className={styles["date-text-format"]}>
                        {item.dates}
                      </span>
                    </div>
                    <div className={styles["enroll-now-section"]}>
                      <Button className={styles["enroll-now-button"]}>
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                );
              })}
            </Carousal>
          </div>
        </div>
      </div>

      <div className={styles["dedicated-partners"]}>
        <div className={styles["dedicated-partners-text"]}>
          Our Dedicated Partners
        </div>
        <div className={styles["dedicated-partners-image-wrapper"]}>
          <div className={styles["dedicated-partners-images"]}>
            {dedicatedPartners.map((item) => {
              return (
                <div className={styles["image-wrapper"]} key={item.key}>
                  <img
                    src={item.src}
                    alt="white"
                    className={styles["dedicated-images"]}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles["dedicated-partners-images"]}>
            {dedicatedPartners.map((item) => {
              if (item.key !== "5") {
                return (
                  <div className={styles["image-wrapper"]} key={item.key}>
                    <img
                      src={item.src}
                      alt="white"
                      className={styles["dedicated-images"]}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles["what-is-gritly"]}>
        <span className={styles["what-is-gritly-text"]}>What is Gritly</span>
        <span className={styles["what-is-gritly-sub-text"]}>
          We're a group of curious and overly charming sales professionals who
          are here to help you become one of us! We provide a basics-advanced
          sales curriculum, designed to train and provide our students with a
          direct sneak peek into what a career in sales looks like in the US.{" "}
          <br />
          <br />
          We believe that our students and partner companies will get the best
          solution to create a valuable sales workgroup and career advancement
          in sales jobs.
        </span>
      </div>
      <div className={styles["what-we-do-section"]}>
        <div className={styles["what-we-do-header"]}>What We Do</div>
        <div className={styles["what-we-do-subtext"]}>
          Our goal is simple. We empower, educate and train students through
          sales bootcamps to prepare them for the most in-demand job in the
          country - Sales. We also help our students connect with our partner
          companies and ensure they end up with their most dream sales jobs.
        </div>
      </div>
      <div className={styles["what-we-do-boxes"]}>
        <div className={styles["first-row"]}>
          <div className={styles["conduct-cohort-based-bootcamp"]}>
            <div className={styles["title"]}>
              Conduct Cohort Based Bootcamps
            </div>
            <div className={styles["cohort-based-bootcamp"]}>
              Our sales bootcamps are customized to deliver both theoretical and
              practical knowledge in the field of sales.
            </div>
            <div className={styles["lady-image"]}>
              <img src={ladyTeachingImage} alt="lady-teaching" />
            </div>
          </div>
          <div className={styles["train-for-job-in-sales"]}>
            <div className={styles["title"]}>Train for a jobs in sales</div>
            <div className={styles["cohort-based-bootcamp"]}>
              We hold regular L&D courses, as well as interviews and job
              training, to help you easily land your dream job after completing
              a sales bootcamp.
            </div>
            <div className={styles["lady-image"]}>
              <img src={salesBoxImage} alt="lady-teaching" />
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className={styles["second-row"]}>
          <div className={styles["work-with-partners"]}>
            <div className={styles["title"]}>
              Work with Our Partner Companies
            </div>
            <div className={styles["work-with-partners-sub-text"]}>
              At the end of the sales boot camp, we have the privilege of
              partnering with many of the leading companies in the United States
              and ensuring our students have the opportunity to work for them.
            </div>
            <div className={styles["lady-image"]}>
              <img src={workWithCompanyImage} alt="lady-teaching" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={styles["how-you-benefit-section"]}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["header-section"]}>
            <br />
            <br />
            <div className={styles["heading"]}>How You Benefit</div>

            <div className={styles["sub-text-heading"]}>
              We are an online sales Bootcamp designed to help underrepresented
              communities enter sales in high-demand industries with no upfront
              cost or prior experience, while increasing the diversity of our
              partner companies
            </div>
          </div>
          <div className={styles["get-started-now-button-section"]}>
            <Button className={styles["get-started-now-button"]}>
              Get Started Now
            </Button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={styles["info-block-section"]}>
          <div className={styles["point-1"]}>
            <img src={benefitIcon2} alt="white" className={styles["image1"]} />
            <div className={styles["point-1-header"]}>We are Accessible</div>
            <div className={styles["point-1-info"]}>
              You get access to Gritly’s boot-camp anytime and anywhere. Our
              program is designed for convenience and hence it’s online. Each
              stage simplifies your journey to push your boundaries, and allows
              an affordable option for students as well.
            </div>
          </div>
          <div className={styles["point-2"]}>
            <img src={benefitIcon2} alt="white" className={styles["image2"]} />
            <div className={styles["point-2-header"]}>
              We are Experience <br />
              Oriented
            </div>
            <div className={styles["point-2-info"]}>
              Gritly aims to give you a holistic experience that makes you both
              practical and theoretically sound. You learn directly from the
              sales gurus and enter the field with confidence.
            </div>
          </div>
          <div className={styles["point-3"]}>
            <img src={benefitIcon3} alt="white" className={styles["image3"]} />
            <div className={styles["point-3-header"]}>
              We are Success Driven
            </div>
            <div className={styles["point-3-info"]}>
              Gritly is results-oriented, not just knowledge-oriented. We have
              produced many success stories that have impacted our partner
              companies and fostered diversity.
            </div>
          </div>
        </div>
      </div>
      <div className={styles["join-next-cohort-banner"]}>
        <div className={styles["header-section"]}>
          Want to join our Next Cohort, and break into tech?
        </div>
        <div className={styles["sub-section"]}>
          With technology roles being in high demand, Gritly teaches you
          everything you need to know to enter a tech role without having to
          code in only 12 weeks.
        </div>
        <br />
        <br />
        <Button className={styles["fill-details"]}>Fill Details</Button>
      </div>
      <div className={styles["who-is-gritly-for-section"]}>
        <div className={styles["heading-section"]}>
          <div className={styles["heading"]}>Who is Gritly for?</div>
          <div className={styles["sub-heading"]}>
            We say any and everyone who is looking for a career in sales. But,
            more specifically for :
          </div>
        </div>
        <div className={styles["blocks-section"]}>
          <div className={styles["block-1"]}>
            <img
              src={moneyImage}
              alt="moneyLogo"
              className={styles["blockimage1"]}
            />
            <div className={styles["info"]}>
              People who can't afford to go to school.
            </div>
          </div>
          <div className={styles["block-2"]}>
            <div className={styles["blockimage2"]} />
            <div className={styles["info"]}>
              People who need flexible study schedules and jobs.
            </div>
          </div>
          <div className={styles["block-3"]}>
            <div className={styles["blockimage3"]} />
            <div className={styles["info"]}>
              People who are looking to pursue a career in sales.
            </div>
          </div>
        </div>
      </div>
      <div className={styles["testimonials-section"]}>
        <div className={styles["header-section"]}>
          <div className={styles["header"]}>Our Testimonials</div>
          <div className={styles["direction-buttons"]}>
            <div>
              {" "}
              <Button
                className={styles["left-direction"]}
                onClick={previousAction}
              >
                <KeyboardBackspaceIcon />
              </Button>
            </div>
            <div>
              <Button
                className={styles["right-direction"]}
                onClick={nextAction}
              >
                <KeyboardBackspaceIcon sx={{ transform: " rotate(-180deg)" }} />
              </Button>
            </div>
          </div>
        </div>
        <div className={styles["card-section"]} id="cardmap" ref={ref}>
          {testimonial.map((item) => {
            return (
              <div className={styles["card"]} key={item.key}>
                <div className={styles["text"]}>{item.text}</div>
                <div className={styles["username"]}>{item.name}</div>
                <div className={styles["designation"]}>{item.designation}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
