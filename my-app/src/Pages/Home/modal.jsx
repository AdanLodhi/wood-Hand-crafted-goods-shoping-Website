import React from 'react'

const Modal = (props) => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel text-center "> Your Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-bold d-flex justify-content-between">
                            <img style={{ width: "5rem", height: "5rem" }} src={props.imgSrc} alt={props.imgSrc} />
                            <p>{props.title}</p>
                            <p>{props.price}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary ">Continue To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal