import React from 'react'

const Footer = () => {
  return (
    <>
       <footer>
        <div id="footer" className="footer-links">
          <div className="footer">
            <div className="inner">
              <div className="footer-logo">
                <img src="/images/matrix-logo.svg" />
              </div>
              <div className="footer-left">
                <div className="footer-contact">
                  <h4>We are available at...</h4>
                  <span>
                    Mob:{" "}
                    <a
                      className="mob-num"
                      href="tel:+923008485536"
                      data-tel={+923008485536}
                    >
                      +92 300 848 5536
                    </a>{" "}
                  </span>
                </div>
                <div className="footer-offices">
                  <h4>Our locations are…</h4>
                  <div className="offices-list">
                    <ul>
                      <li>
                        666, Askari IX
                        <br />
                        Lahore Cantt, Pakistan
                      </li>
                      <li>
                        129 J, Model Town
                        <br />
                        Lahore, Pakistan
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="patner-link">
                  <h4>Our partners are...</h4>
                  <a href="https://smallbackroom.co.uk/" target="_blank">
                    Smallbackroom
                  </a>
                  <a href="http://www.matrixmanagement.com.pk/" target="_blank">
                    Matrix Management
                  </a>
                  <a href="https://zealsoftsolutions.com/" target="_blank">
                    Zealsoft
                  </a>
                  <a href="https://storyandco.eu" target="_blank">
                    Story&Co
                  </a>
                </div>
              </div>
              <div className="social-link">
                <div className="social-inner">
                  <a
                    className="facebook ir"
                    href="https://facebook.com/Matrix-Solutions-101790821682744"
                    title="Facebook"
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    className="twitter ir"
                    href="javascript:;"
                    style={{ display: "none" }}
                    title="Twitter"
                    target="_blank"
                  >
                    Twitter
                  </a>
                  <a
                    className="linked-in ir"
                    href="https://www.linkedin.com/in/matirx-solutions-2177bb1b7/"
                    title="LinkedIn"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="youtube ir"
                    href="https://www.youtube.com/channel/UCIpSvDsdtmJy67Gig8m6RUQ"
                    title="Youtube"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span className="copyright-text">© Copyright 2000-2022.</span>
          <a href="terms-and-conditions" className="copyright-link">
            Terms &amp; Conditions
          </a>
          <a href="privacy-policy" className="copyright-link">
            Privacy Policy
          </a>
          <a href="cookie-policy" className="copyright-link">
            Cookies Policy
          </a>
        </div>
      </footer> 
    </>
  )
}

export default Footer
