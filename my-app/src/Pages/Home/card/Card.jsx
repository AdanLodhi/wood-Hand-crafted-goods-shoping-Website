
const Card = (props) => {
    return (
        <>
            <div className="">
                <div className="card  " >
                    <img style={{height:"20rem", width:"20rem"}} src={props.imgSrc} className="card-img-top" alt={props.imgSrc}  />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.price}</p>
                        <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card