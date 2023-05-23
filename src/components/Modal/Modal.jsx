import "./Modal.css"

const Modal = ({ isVisible, children }) => {
    if(!isVisible) return null;
    return (
    <div className="modal">{children}</div>
  )
}

export default Modal