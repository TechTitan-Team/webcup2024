export function Overlay(props) {
    return <>
        <div className={`overlay ${props.state ? "" : "overlay-d"}`}>
            <div className="container py-4">
                <button className="btn-overlay" onClick={props.action}>Fermer</button>
                <h1 className="my-4 fw-bold">
                    Selectionner l'espace à louer
                </h1>
                <p>
                    Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                </p>
                <div className="d-flex align-items-center justify-content-center m-5">
                    <div className="crd">
                        <div className="crd-img">
                            <img src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KKK" className="img-fluid"/>
                        </div>
                        <div className="crd-txt">
                            <h2 className="fw-bold">Espace 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="crd">
                        <div className="crd-img">
                            <img src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KKK" className="img-fluid"/>
                        </div>
                        <div className="crd-txt">
                            <h2 className="fw-bold">Espace 1</h2>
                            <div className="location-desc">
                                <i className="bi bi-geo-alt-fill"></i> Analakely, Antananarivo 101
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="crd">
                        <div className="crd-img">
                            <img src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KKK" className="img-fluid"/>
                        </div>
                        <div className="crd-txt">
                            <h2 className="fw-bold">Espace 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}