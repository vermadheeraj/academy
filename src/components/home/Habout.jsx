import React from 'react'
import "./Habout.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

export const Habout = () => {
  return (
    <>
      <h1 style={{ paddingTop: "500px" }} ></h1>

      <div className="untree_co-section">
        <div className="container">
          <div className="row-heading ">
            <div className="col-lg text-center" data-aos="fade-up" data-aos-delay="0">
              <h2 className="line-bottom ">Top Best Courses</h2>
            </div>
          </div>
          <div className="rows align-items-stretch">
            <div className="col" data-aos="fade-up" data-aos-delay="0">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-atom"></i>
                </div>
                <div>
                  <h3>Science</h3>
                  <span>1,391 courses</span>
                </div>
              </a>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="100">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-briefcase"></i>
                </div>
                <div>
                  <h3>Science</h3>
                  <span>1,391 courses</span>
                </div>
              </a>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="200">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-calculator"></i>
                </div>
                <div>
                  <h3>Finance Accounting</h3>
                  <span>931 courses</span>
                </div>
              </a>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-pen"></i>
                </div>
                <div>
                  <h3>Design</h3>
                  <span>7,291 courses</span>
                </div>
              </a>
            </div>


            <div className="col" data-aos="fade-up" data-aos-delay="0">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-music"></i>
                </div>
                <div>
                  <h3>Music</h3>
                  <span>9,114 courses</span>
                </div>
              </a>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="100">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-chart-pie"></i>
                </div>
                <div>
                  <h3>Marketing</h3>
                  <span>2,391 courses</span>
                </div>
              </a>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="200">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-camera"></i>
                </div>
                <div>
                  <h3>Photography</h3>
                  <span>7,991 courses</span>
                </div>
              </a>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <i className="uil uil-circle-layer"></i>
                </div>
                <div>
                  <h3>Animation</h3>
                  <span>6,491 courses</span>
                </div>
              </a>
            </div>


          </div>

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
            <div className="col-lg-8 text-center">

            </div>
          </div>
        </div>
      </div>


      <br />
      <br />

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./image/python.jpg" className="d-block w-100" alt="/" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Python Program Course</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./image/python.jpg" className="d-block w-100" alt="/" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Java Program Course</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./image/html.jpg" className="d-block w-100" alt="/" />
            <div className="carousel-caption d-none d-md-block">
              <h5>HTML Program Course</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <br />

      <div className="untree">
        <div className="container">
          <div className="row ">
            <div className="heading" data-aos="fade-up" data-aos-delay="0">
              <h2 className="line">Best Lessons Course </h2>
            </div>
          </div>
          <br />
          <div className="row2">
            <div className="col2 ">
              <div className="custom-media">
                <a href="/"><img src='./image/python.jpg' alt='' /></a>
                <div className="custom-media-body">
                  <div className="d-flex justify-content-between pb-3">
                    <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 lesson</span></div>
                    <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                  </div>
                  <h3>Python Program Course</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet once is consectetur adipisicing elit optio.</p>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">$87.00</span></div>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col2 ">
              <div className="custom-media">
                <a href="/"><img src='./image/html.jpg' alt='' /></a>
                <div className="custom-media-body">
                  <div className="d-flex justify-content-between pb-3">
                    <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 lesson</span></div>
                    <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                  </div>
                  <h3>HTML Program Course</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet once is consectetur adipisicing elit optio.</p>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">$93.00</span></div>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col2 ">
              <div className="custom-media">
                <a href="/"><img src='./image/java.jpg' alt='' /></a>
                <div className="custom-media-body">
                  <div className="d-flex justify-content-between pb-3">
                    <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 lesson</span></div>
                    <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                  </div>
                  <h3>Java Program Course</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet once is consectetur adipisicing elit optio.</p>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">$93.00</span></div>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col2">
              <div className="custom-media">
                <a href="/"><img src='./image/python.jpg' alt='' /></a>
                <div className="custom-media-body">
                  <div className="d-flex justify-content-between pb-3">
                    <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 lesson</span></div>
                    <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                  </div>
                  <h3>Javascript Program Course</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet once is consectetur adipisicing elit optio.</p>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">$93.00</span></div>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col2">
              <div className="custom-media">
                <a href="/"><img src='./image/python.jpg' alt='' /></a>
                <div className="custom-media-body">
                  <div className="d-flex justify-content-between pb-3">
                    <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 lesson</span></div>
                    <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                  </div>
                  <h3>Javascript Program Course</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet once is consectetur adipisicing elit optio.</p>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">$93.00</span></div>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col2 ">
              <div className="custom-media">
                <a href="/"><img src='./image/python.jpg' alt='' /></a>
                <div className="custom-media-body">
                  <div className="d-flex justify-content-between pb-3">
                    <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 lesson</span></div>
                    <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                  </div>
                  <h3>Machine Learning Program Course</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet once is consectetur adipisicing elit optio.</p>
                  <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                    <div><span className="price">$65.00</span></div>
                    <div><a href="/">Learn More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section pt-0 bg-img overlay">
        <div className="container">

        </div>
      </div>

      <br />

      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />


      <div className="accordion" style={{ padding: "0px 20px" }} id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={{ background: "#bcbcbc" }} >
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Top Best Course Python
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Top Best Course HTML
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Top Best Course React
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <br />
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
          <a href=""><p>HTML</p></a>
          <a href=""><p>Free PHP Web Development</p></a>
          <a href=""><p>Learn Web Developments Course</p> </a>
          <a href=""><p>Hotel Management</p></a>
          <a href=""><p>Medical Sciences</p></a>
          <a href=""> <p>Fashion Designing</p></a>
          <a href=""><p>Engineering</p></a>
        </div>
      </div>

      <br />
      <br />


      <section className="apply-now" id="apply">
        <div className="container">
          <div className="row-count">
            <div className="col-row">
              <div className="rowco">
                <div className="itemscard">
                  <div className="item">
                    <h3>APPLY FOR BACHELOR DEGREE</h3>
                    <p>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout.</p>
                    <div className="main-button-red">
                      <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                    </div>
                  </div>
                </div>
                <div className="itemscard">
                  <div className="item">
                    <h3>APPLY FOR BACHELOR DEGREE</h3>
                    <p>You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.</p>
                    <div className="main-button-yellow">
                      <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="accordion" style={{ padding: "0px 20px", margin: 'auto' }} id="accordionPanelsStayOpenExample">
              <div className="accordion-item"  >
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Top Best Course Python
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the hat just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item" >
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Top Best Course HTML
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item" >
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Top Best Course React
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that ables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>





    </>
  )
}

export default Habout;

