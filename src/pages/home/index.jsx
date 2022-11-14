import React from "react";
import Navbar from "../../component/navbar";
import { Carousel, Row, Col } from "react-bootstrap";
import Gambar1 from "../../pictures/gam1.png";
import Gambar2 from "../../pictures/gam2.png";
import { HiOutlineHeart } from "react-icons/hi";
import { BsFillCartPlusFill } from "react-icons/bs";
import Footer from "../../component/footer";
const index = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div style={{ marginTop: 10, WebkitTextStrokeWidth: 0.1, WebkitTextStrokeColor: "black" }}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Gambar2} alt="First slide" />
            <Carousel.Caption>
              <h3 className="txtcaros">V I S I O N</h3>
              <p className="txtcaro">Our vision is to be able to produce best furniture made of marble, with very good materials and in accordance with the wishes of all over Indonesia to foreign countries.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Gambar1} alt="Second slide" />
            <Carousel.Caption>
              <h3 className="txtcaros">M I S S I O N</h3>
              <p className="txtcaro">Our mission is to encourage all possibilities and develop the potential of existing designs by making marble of higher quality in order to build a more natural and modern design atmosphere.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="list d-flex">
        <Row>
          <Col>
            <div className="cardlist">
              <button className="btncard">
                <div>
                  <img style={{ width: "200px" }} src="https://cdn.shoplightspeed.com/shops/645035/themes/16218/assets/subcat-3115594.jpg?20221012095924" alt="1" />
                </div>
                <div>Costum Dining</div>
              </button>
            </div>
          </Col>
          <Col>
            <div className="cardlist">
              <button className="btncard">
                <div>
                  <img style={{ width: "200px" }} src="https://cdn.shoplightspeed.com/shops/645035/themes/16218/assets/subcat-3121236.jpg?20221012095924" alt="2" />
                </div>
                <div>Office Tables</div>
              </button>
            </div>
          </Col>
          <Col>
            <div className="cardlist">
              <button className="btncard">
                <div>
                  <img style={{ width: "200px" }} src="https://cdn.shoplightspeed.com/shops/645035/themes/16218/assets/subcat-3115593.jpg?20221012095924" alt="3" />
                </div>
                <div>Side Tables</div>
              </button>
            </div>
          </Col>
          <Col>
            <div className="cardlist">
              <button className="btncard">
                <div>
                  <img style={{ width: "200px" }} src="https://cdn.shoplightspeed.com/shops/645035/themes/16218/assets/subcat-3122735.jpg?20221012095924" alt="4" />
                </div>
                <div>Flower Vase</div>
              </button>
            </div>
          </Col>
          <Col>
            <div className="cardlist">
              <button className="btncard">
                <div>
                  <img style={{ width: "200px" }} src="https://cdn.shoplightspeed.com/shops/645035/themes/16218/assets/subcat-3115595.jpg?20221012095924" alt="5" />
                </div>
                <div>Coffe Tables</div>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <div className="midtxt">
        <span className="txtgreen">SMALL THINGS MATTER !</span> <br /> THE TINY MISSING PIECE ! SHOP THIS COLLECTION
      </div>

      <div className="listsell d-flex">
        <Row>
          <Col>
            <div className="cardsell">
              <div style={{ fontSize: 25, textAlign: "right", marginRight: 10 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <img className="imgcardlist" src="https://cdn.shoplightspeed.com/shops/645035/files/39633798/660x660x1/estetico-home-black-tafel-office-table-1.jpg" alt="1" />
              </div>
              <button className="addcart">
                <div>
                  <BsFillCartPlusFill style={{ fontSize: 20, marginBottom: 5 }} /> Add to cart
                </div>
              </button>
              <div className="namecard">Black Tafel Office Table</div>
              <div className="pricecard">Rp6,990,000.00</div>
            </div>
          </Col>
          <Col>
            <div className="cardsell">
              <div style={{ fontSize: 25, textAlign: "right", marginRight: 10 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <img className="imgcardlist" src="https://cdn.shoplightspeed.com/shops/645035/files/39634238/660x660x1/estetico-home-grey-string-crown-office-table-1.jpg" alt="1" />
              </div>
              <button className="addcart">
                <div>
                  <BsFillCartPlusFill style={{ fontSize: 20, marginBottom: 5 }} /> Add to cart
                </div>
              </button>
              <div className="namecard">Grey Tafel Office Table</div>
              <div className="pricecard">Rp4,990,000.00</div>
            </div>
          </Col>
          <Col>
            <div className="cardsell">
              <div style={{ fontSize: 25, textAlign: "right", marginRight: 10 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <img className="imgcardlist" src="https://cdn.shoplightspeed.com/shops/645035/files/39633862/660x660x1/estetico-home-beige-zuri-office-table-1.jpg" alt="1" />
              </div>
              <button className="addcart">
                <div>
                  <BsFillCartPlusFill style={{ fontSize: 20, marginBottom: 5 }} /> Add to cart
                </div>
              </button>
              <div className="namecard">Black Zuhri Table</div>
              <div className="pricecard">Rp10,990,000.00</div>
            </div>
          </Col>
          <Col>
            <div className="cardsell">
              <div style={{ fontSize: 25, textAlign: "right", marginRight: 10 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <img className="imgcardlist" src="https://cdn.shoplightspeed.com/shops/645035/files/39633824/660x660x1/estetico-home-white-zuri-office-table-1.jpg" alt="1" />
              </div>
              <button className="addcart">
                <div>
                  <BsFillCartPlusFill style={{ fontSize: 20, marginBottom: 5 }} /> Add to cart
                </div>
              </button>
              <div className="namecard">White Zuhri Table</div>
              <div className="pricecard">Rp5,000,000.00</div>
            </div>
          </Col>
          <Col>
            <div className="cardsell">
              <div style={{ fontSize: 25, textAlign: "right", marginRight: 10 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <img className="imgcardlist" src="https://cdn.shoplightspeed.com/shops/645035/files/39634238/660x660x1/estetico-home-grey-string-crown-office-table-1.jpg" alt="1" />
              </div>
              <button className="addcart">
                <div>
                  <BsFillCartPlusFill style={{ fontSize: 20, marginBottom: 5 }} /> Add to cart
                </div>
              </button>
              <div className="namecard">Grey Tafel Office Table</div>
              <div className="pricecard">Rp4,990,000.00</div>
            </div>
          </Col>
          <Col>
            <div className="cardsell">
              <div style={{ fontSize: 25, textAlign: "right", marginRight: 10 }}>
                <HiOutlineHeart />
              </div>
              <div>
                <img className="imgcardlist" src="https://cdn.shoplightspeed.com/shops/645035/files/39633862/660x660x1/estetico-home-beige-zuri-office-table-1.jpg" alt="1" />
              </div>
              <button className="addcart">
                <div>
                  <BsFillCartPlusFill style={{ fontSize: 20, marginBottom: 5 }} /> Add to cart
                </div>
              </button>
              <div className="namecard">Black Zuhri Table</div>
              <div className="pricecard">Rp10,990,000.00</div>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default index;
