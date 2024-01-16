import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container  mt-2">
        <div className="row">
          <div
            className="col "
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRFT_a_TDOR9EbzfAnoY-nFczlNF_qcoGWVvPVqGp7XEWWp8L1OBcn77XRs6TOqg_a7UE2h3VUj0G7AeAnzl4g"
              alt="img"
              className="circularImage p-2"
            />
            <i className="bi bi-house-door-fill">
              <b className="p-1">Home</b>
            </i>
          </div>
        </div>
        <div className="row ">
          <div className=".col-md-12 col-lg-12">
            {/* <i className="bi bi-search"></i> <input className="form-control  searchBox" type="search" name="" id="" >
            </input> */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></i>
              <input
                className="form-control  searchBox"
                type="search"
                style={{ paddingLeft: "30px" }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <label htmlFor="">For you !</label>
        </div>
        <div className="row mt-2">
          {/* <Card >
            <Card.Body> */}

          {/* </Card.Body>
          </Card> */}

          <Carousel
            controls={false}
            indicators={false}
            style={{ width: "50%" }}
          >
            <Carousel.Item>
              <img
                src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704412800&semt=sph"
                className="d-block w-100"
                alt="one"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvWwUIUEQNF7otsBlEtfxKkGURFm_uCouJ6bJ7JTZKQ&s"
                className="d-block w-100"
                alt="one"
              />
            </Carousel.Item>
          </Carousel>
          <Carousel
            controls={false}
            indicators={false}
            style={{ width: "50%" }}
          >
            <Carousel.Item>
              <img
                src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                className="d-block w-100"
                alt="three"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704412800&semt=sph"
                className="d-block w-100"
                alt="one"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p>Aftab ! what’s your goal ?</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* <h2 className="">Weight Gain</h2> */}
            <img src="src/assets/Images/Weight Gain.png" alt="Weight Gain" />
          </div>
          <div className="col">
            {/* <h2 className="">Muscle Building</h2> */}
            <img
              src="src/assets/Images/Muscle Building.png"
              alt="Muscle Building"
            />
          </div>
          <div className="col">
            {/* <h2 className="">Weight Loss</h2> */}
            <img src="src/assets/Images/Weight Loss.png" alt="Weight Loss" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <p>Top rated stores near you</p>
          </div>
        </div>
        <div className="row mt-4">
          <div
            className="col d-flex"
            style={{ justifyContent: "space-between" }}
            onClick={handleShow}
          >
            <button
              style={{ borderRadius: "20px", color: "black" }}
              className="btn btn-light"
            >
              Filter <i className="bi bi-funnel"></i>
            </button>
            <button
              style={{ borderRadius: "20px", color: "black" }}
              className="btn btn-light"
            >
              Sort By <i className="bi bi-caret-down"></i>
            </button>
            <button
              style={{ borderRadius: "20px", color: "black" }}
              className="btn btn-light"
            >
              Fast Delivery
            </button>

            {/* <Stack direction="horizontal" gap={4}>
                <h6><Badge pill bg="primary">
                Filter
              </Badge></h6>
              
              <Badge pill bg="secondary">
                Sort By
              </Badge>
              <Badge pill bg="success">
                Fast Delivery
              </Badge>
            </Stack> */}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col" style={{ width: "50%" }}>
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="img"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div className="col" style={{ width: "50%" }}>
            <h2>
              {" "}
              <b> House of Nature</b>
            </h2>
            <span>
              <i className="bi bi-star-half"></i> &nbsp;&nbsp; 3.1
            </span>
            <p>
              <b>vegan, Gluteen Free</b>{" "}
            </p>
            <button
              className="btn btn-dark mt-3"
              style={{ borderRadius: "17px" }}
            >
              <i className="bi bi-truck"></i> QAR:40
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <button className="btn ">View All</button> */}
            <img
              src="src/assets/Images/Group 38.png"
              className="float-right"
              alt="img"
            />
          </div>
        </div>
      </div>
      {/* <div className="row find"> */}
      <Offcanvas
        className="canvasBackground"
        show={show}
        onHide={handleClose}
        placement="bottom"
        style={{ marginBottom: "px", height: "400px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="container">
          <hr />
          <Offcanvas.Body>
            <div className="row gy-5">
              <div className="col" width={50}>
                <h2 className="p-2">Sort</h2>
                <h2 className="p-2">explore</h2>
                <h2 className="p-2">Rating</h2>
                <h2 className="p-2">Categories</h2>
                <h2 className="p-2">Others</h2>
              </div>
              {/* <hr /> */}
              <div className="col vl" width={50}>
                <p className="textsort">Sort By</p>
                <div>
                  <input type="radio" name="" id="" />
                  <label className="p-1" htmlFor="">
                    Rating
                  </label>
                  <br />
                  <input type="radio" name="" id="" />
                  <label className="p-1" htmlFor="">
                    Cost Low to High
                  </label>
                  <br />
                  <input type="radio" name="" id="" />
                  <label className="p-1" htmlFor="">
                    Cost High to Low
                  </label>
                </div>
              </div>

              {/* <div className="col vl" width={50}>
                <p className="textsort">Explore</p>
                <div>
                    <input type="radio" name="" id="" />
                    <label className="p-1" htmlFor="">
                    New on DP
                    </label>
                    <br />
                    
                  </div>
              </div> */}
              {/* <div className="col vl" width={50}>
                <p className="textsort">Rating</p>

              </div> */}
              {/* <div className="col vl" width={50}>
                <p className="textsort">Categories</p>
                <div>
                    <input type="radio" name="" id="" />
                    <label className="p-1" htmlFor="">
                      Rating
                    </label>
                    <br />
                    <input type="radio" name="" id="" />
                    <label className="p-1" htmlFor="">
                      Cost Low to High
                    </label>
                    <br />
                    <input type="radio" name="" id="" />
                    <label className="p-1" htmlFor="">
                      Cost High to Low
                    </label>
                  </div>
              </div> */}
              {/* <div className="col vl" width={50}>
                <p className="textsort">Restaurants with</p>
                <div>
                    <input type="radio" name="" id="" />
                    <label className="p-1" htmlFor="">
                      Rating
                    </label>
                   
                  </div>
              </div> */}
            </div>
            <div className="row mt-4">
              <hr />
            </div>
            <div className="row mt-2">
              <div className="col">
                <button className="clarebtn">Clare Filter</button>
              </div>
              <div className="col">
                <button className="applybtn">Apply</button>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
      {/* </div> */}

      <Footer />
    </>
  );
};

export default Home;
