import React from "react";

const Shop = () => {
  return (
    <div>
      <div>
        <div className="card" style={{ width: "80rem" }}>
          <img
            src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/644fae2ba47311864822e9de_img%201.webp"
            style={{ height: "40rem", width: "50" }}
            classame="card-img-top"
            alt="..."
          ></img>
        </div>
        <h1 className="fw-bolder p-4">Shop</h1>
        <p className="fw-bolder p-3">
          From textiles to ceramics to woodworking, we've got everything you
          <br />
          need to start your own handcrafting journey.
        </p>
      </div>
      <div class="container-text-center">
        <div class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
          {/*=== card 1 === */}
          <div class="col">
            <div class="p-5 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5794422f568a8f936d2_image-p-800.jpg"
                  style={{ height: "20rem" }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-warning">SOAP HOLDER</h5>
                  <p className="card-text fs-5 ">$ 15 USD</p>
                  <button type="button" className="btn btn-outline-warning">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*=== card 2 === */}
          <div class="col">
            <div class="p-5">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5b7ae24814cf512f714_image%202.jpg"
                  style={{ height: "20rem" }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    WOODEN TEETH BRUSH
                  </h5>
                  <p className="card-text fs-5 ">$ 12.99 USD</p>
                  <button type="button" className="btn btn-outline-warning">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*=== card 3 === */}
          <div class="col">
            <div class="p-5">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5d5d017b2c58c5797ba_image%203-p-500.jpg"
                  style={{ height: "20rem" }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-warning">WOODEN SOAP BRUSH</h5>
                  <p className="card-text fs-5 ">$ 19.99 USD</p>
                  <button type="button" className="btn btn-outline-warning">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*=== card 4 === */}
          <div class="col">
            <div class="p-5 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.website-files.com/64383cff24c2e21e145b299b/6446352581a0db410bdc62fd_Testimonials%20Img2-p-500.jpg"
                  style={{ height: "20rem" }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    COTTON MAKE UP REMOVING PADS
                  </h5>
                  <p className="card-text fs-5 ">$ 13.99 USD</p>
                  <button type="button" className="btn btn-outline-warning">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*=== card 5 === */}
          <div class="col">
            <div class="p-5 ">
              {" "}
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.website-files.com/64383cff24c2e21e145b299b/644fd64f1de51e96240d2896_img%205-p-500.jpg"
                  style={{ height: "20rem" }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    HANDCRAFTED WOODEN CUTTING BOARD
                  </h5>
                  <p className="card-text fs-5 ">$ 69.22 USD</p>
                  <button type="button" className="btn btn-outline-warning">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*=== card 6 === */}
          <div class="col">
            <div class="p-5 ">
              {" "}
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets.website-files.com/64383cff24c2e21e145b299b/644f9fb7a0033d2c691addcb_image-p-500.jpg"
                  style={{ height: "20rem" }}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    INCREDIBLE COTTON TUNA
                  </h5>
                  <p className="card-text fs-5 ">$ 60.00 USD</p>
                  <button type="button" className="btn btn-outline-warning">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
