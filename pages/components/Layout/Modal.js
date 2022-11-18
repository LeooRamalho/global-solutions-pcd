import { useEffect, useState } from "react"

const Modal = ({ tituloModal, children }) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [open])

    return (
        <div className="d-flex justify-content-center align-items-center">
            <button type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#mainModal">
                Abrir Modal
            </button>
            <div id="mainModal"
                className="modal fade"
                tabIndex="-1"
                aria-labelledby="mainModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mainModalLabel">{tituloModal}</h5>
                            <button type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal