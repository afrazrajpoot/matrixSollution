import React from 'react'

const What_we_do = ({href,labelBackgroundImage,heading,subHeadings,buttonText}) => {
  return (
    <>
 
                    
                    
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <a href={href}>
                        <span>
                          <label
                            style={{
                              backgroundImage:
                                `url(${labelBackgroundImage})`,
                            }}
                          />
                        </span>
                        <div>
                          <h5>{heading}</h5>
                          <div className="list">
                            {
                              subHeadings?.map((elem,i)=>{
                                return (
                                  <h4 key={i}>{elem}</h4>
                                )
                              })
                            }
                            <h5 className="btn">{buttonText}</h5>
                          </div>
                        </div>
                      </a>
                    </li>
                   
               
    </>
  )
}

export default What_we_do
