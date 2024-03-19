import React, { useEffect } from "react";
import SliderComponent from "../../components/SliderComponent";
import AOS from "aos";
// import Recent from "../../components/Recent";
import Recent from "../../components/homeComponents/Recent";
import {
  our_technologie,
  recentData,
  what_we_data,
  why_choose,
} from "../../data/data";
import What_we_do from "../../components/homeComponents/What_we_do";
import Our_technologies from "../../components/homeComponents/Our_technologies";
import Why_choose_us from "../../components/homeComponents/Why_choose_us";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div id="outer-wrapper">
        <section>
          <div id="content">
            <div id="slider" className="full-h">
              <div id="content-inner" className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{ backgroundImage: "url(/images/img-home.jpg)" }}
                    >
                      <img
                        src="/images/softwaresliderimg.jpg"
                        alt="Group chatting in bar"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="description">
                      <div className="content-inner">
                        <div className="c-inner">
                          <div className="dep-inner">
                            <div className="inner-center">
                              <h1>
                                Precision and Accuracy <br />
                                Our rules to follow.
                              </h1>
                              <p>
                                We offers IT solutions integrated on system
                                platforms at the cutting edge technology
                                landscape.
                              </p>
                              <a className="btn scroll" href="../services/">
                                Our services
                              </a>
                              <a className="btn" href="our-work">
                                Our work
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="recent-work" id="recent-work">
              <div className="content-inner">
                <div className="recent-work-inner aos-all">
                  <h3 className="heading">Recent work</h3>
                  {recentData?.map((elem, i) => (
                    <Recent key={i} {...elem} />
                  ))}
                </div>
              </div>
            </div>
            <div className="our-services">
              <div className="content-inner">
                <div id="what-we-do" className="osv-inner">
                  <h3>What we do</h3>
                  <ul>
                    {what_we_data?.map((elem, i) => (
                      <What_we_do key={i} {...elem} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div id="our-clients" className="div-clients related">
              <div className="content-inner">
                <h3>Our clients</h3>
                <SliderComponent />
              </div>
            </div>
            <div className="project" id="our-technologies">
              <div className="content-inner">
                <div className="project-inner">
                  <h3>Our technologies</h3>
                  <ul>
                    {our_technologie?.map((elem, i) => (
                      <Our_technologies key={i} {...elem} />
                    ))}
                  </ul>
                </div>
                <a href="technology" className="btn-cta">
                  Go to technology
                </a>
              </div>
            </div>
            <div className="grid-box">
              <div className="content-inner">
                <div className="grid-inner" id="why-to-choose-us">
                  <h3>Why choose us</h3>
                  <div className="grid-box">
                    {why_choose?.map((elem, i) => (
                      <Why_choose_us key={i} {...elem} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
