import './LastContainer.css'

const LastContainer = () => {
  return (
    <div className="last-container" data-aos="zoom-in-up">
      <div className="home-last-main-sec-name">
        <h5 className="home-last-main-sec-Testimonial">TESTIMONIALS</h5>
        <h1>What Our Customers Say</h1>
      </div>
      <div className="home-last-container-flex-container">
        <div className="home-last-container-flex-container-image-container">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNq-qigMJ5-MozNQeJUZPMgAS-CSZCQsPsEpLOcMr7E8OhU1rM" alt="image" height="450px" />
        </div>
        <div className="home-last-container-flex-container-comment-container">
          <h3>"I'm grateful for the handmade face mask brush I received. I love the sleek design and how it feels like a luxurious self-care tool every time I use it."</h3>
          <h5>Jack Silk</h5>
          <p>Client</p>
          <div className="home-last-container-flex-container-comment-container-button-container" >
            <button className="home-last-container-flex-container-comment-container-button"> « </button>
            <button className="home-last-container-flex-container-comment-container-button"> » </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastContainer