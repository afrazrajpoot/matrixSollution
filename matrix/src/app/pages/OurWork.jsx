import Aos from "aos";
import { useEffect } from "react";
import OurWorkCards from "../../components/ourWorkComponents/OurWorkCards";
import { ourWorkData } from "../../data/data";

export const Our_work = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div id="outer-wrapper">
        <section>
          <div id="content">
            <div id="slider" className="small-h">
              <div id="content-inner" className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{ backgroundImage: "url(../images/img-home.jpg)" }}
                    >
                      <img
                        src="../images/softwaresliderimg.jpg"
                        alt="Group chatting in bar"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="description">
                      <div className="content-inner">
                        <div className="c-inner">
                          <div className="dep-inner">
                            <div className="inner-center">
                              <h1>Our Work</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="breadcrumb" style={{ backgroundColor: "#f3f4f5" }}>
              <div className="content-inner">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Our work</li>
                </ul>
              </div>
            </div>

            <div className="our-work full-w">
              <div className="content-inner">
                <h3>All Projects</h3>
                <ul className="aos-all">
                  {ourWorkData?.map((elem, i) => (
                    <OurWorkCards key={i} {...elem} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
