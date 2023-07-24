import React from "react";

const products = [
  {
    imgSrc:
      "https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5794422f568a8f936d2_image-p-800.jpg",
    title: "SOAP HOLDER",
    price: "$ 15 USD",
  },
  {
    imgSrc:
      "https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5b7ae24814cf512f714_image%202.jpg",
    title: "WOODEN TEETH BRUSH",
    price: "$ 12.99 USD",
  },
  {
    imgSrc:
      "https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5d5d017b2c58c5797ba_image%203-p-500.jpg",
    title: "WOODEN SOAP BRUSH",
    price: "$ 19.99 USD",
  },
  {
    imgSrc:
      "https://assets.website-files.com/64383cff24c2e21e145b299b/6446352581a0db410bdc62fd_Testimonials%20Img2-p-500.jpg",
    title: "COTTON MAKEUP REMOVING PADS",
    price: "$ 19.99 USD",
  },
  {
    imgSrc:
      "https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5d5d017b2c58c5797ba_image%203-p-500.jpg",
    title: "WOODEN SOAP BRUSH",
    price: "$ 19.99 USD",
  },
  {
    imgSrc:
      "https://assets.website-files.com/64383cff24c2e21e145b299b/644fd5d5d017b2c58c5797ba_image%203-p-500.jpg",
    title: "WOODEN SOAP BRUSH",
    price: "$ 19.99 USD",
  },
];

const Shop = () => {
  return (
    <div>
      <div>
        <div className="card" style={{ width: "100%" }}>
          <img
            src="https://assets.website-files.com/64383cfe24c2e2d67e5b297b/644fae2ba47311864822e9de_img%201.webp"
            style={{ height: "40rem", width: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <h1 className="fw-bolder p-3">Shop</h1>
        <p className="fw-bolder p-3">
          From textiles to ceramics to woodworking, we've got everything you
          <br />
          need to start your own handcrafting journey.
        </p>
      </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="p-5">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={product.imgSrc}
                    style={{ height: "20rem" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-warning">{product.title}</h5>
                    <p className="card-text fs-5 ">{product.price}</p>
                    <button type="button" className="btn btn-outline-warning">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Shop;
