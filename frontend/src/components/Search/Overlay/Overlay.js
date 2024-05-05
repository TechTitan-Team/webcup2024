import { useEffect, useState } from "react"
import jega from "../../../assets/img/04.jpg"
import useHttps from "../../../hooks/useHttps"
export function Overlay(props) {
    const { http } = useHttps()
    const [services, setServices] = useState({
        lieux: [],
        traiteurs: [],
        divertissement: [],
        decoration: [],
        conciergerie: [],
        photographie: []
    })

    
    const getService = (service, pers, location) => {
        const route = service === "lieux" && location !== "" ? `/partenaires/filter/${service}/${pers}?location=${location}` : `/partenaires/filter/${service}/${pers}`
        http.get(route)
            .then((res) => {
                if (service === "lieux") {
                    console.log(res.data);
                    setServices({ ...services, lieux: res.data })
                }
                if (service === "traiteur") {
                    console.log(res.data);
                    setServices({ ...services, traiteurs: res.data })
                }
                if (service === "divertissements") {
                    console.log(res.data);
                    setServices({ ...services, divertissement: res.data })
                }
                if (service === "conciergerie") {
                    console.log(res.data);
                    setServices({ ...services, conciergerie: res.data })
                }
                if (service === "decoration") {
                    console.log(res.data);
                    setServices({ ...services, decoration: res.data })
                }
                if (service === "photographie") {
                    console.log(res.data);
                    setServices({ ...services, photographie: res.data })
                }
            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        if (props.service.lieux && props.filter.pers)
            getService("lieux", props.filter.pers, props.filter.location)
        if (props.service.traiteurs && props.filter.pers)
            getService("traiteur", props.filter.pers )
        if (props.service.animation && props.filter.pers)
            getService("divertissements", props.filter.pers)
        if (props.service.decoration && props.filter.pers)
            getService("decoration", props.filter.pers)
        if (props.service.concierge && props.filter.pers)
            getService("conciergerie", props.filter.pers)
        if (props.service.photographe && props.filter.pers)
            getService("photographie", props.filter.pers)
    }, [props.filter, props.service])

    return <>
        <div className={`overlay ${props.state ? "" : "overlay-d"}`}>
            <div className="container py-4">
                <button className="btn-overlay" onClick={props.action}>Fermer</button>
                {
                    services.lieux.length !== 0 && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner l'espace à louer
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.lieux.map((res, index) => {
                                    return (<>
                                        <label for={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.id} className="radio-input" />
                                            <h4><span className="badge bg-success">Selectionné</span></h4>
                                            <div className="crd" key={index}>
                                                <div className="crd-img">
                                                    <img src={`http://localhost:9001/images/${res.image}`} alt="KKK" className="img-fluid" />
                                                </div>
                                                <div className="crd-txt">
                                                    <h2 className="fw-bold">{res.name}</h2>
                                                    <div className="location-desc">
                                                        <i className="bi bi-geo-alt-fill"></i> {res.location}
                                                    </div>
                                                    <div className="fw-bold">
                                                        <i className="bi bi-cash "></i> Prix: {res.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.lieux.length !== 0 && services.traiteurs.length !== 0 && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le traiteur
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.traiteurs.map((res, index) => {
                                    return (<>
                                        <label for={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.id} className="radio-input" />
                                            <h4><span className="badge bg-success">Selectionné</span></h4>
                                            <div className="crd" key={index}>
                                                <div className="crd-img">
                                                    <img src={`http://localhost:9001/images/${res.image}`} alt="KKK" className="img-fluid" />
                                                </div>
                                                <div className="crd-txt">
                                                    <h2 className="fw-bold">{res.name}</h2>
                                                    <div className="location-desc">
                                                        <i className="bi bi-geo-alt-fill"></i> {res.location}
                                                    </div>
                                                    <div className="fw-bold">
                                                        <i className="bi bi-cash "></i> Prix: {res.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.divertissement.length !== 0 && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le service divertissement et animation
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.divertissement.map((res, index) => {
                                    return (<>
                                        <label for={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.id} className="radio-input" />
                                            <h4><span className="badge bg-success">Selectionné</span></h4>
                                            <div className="crd" key={index}>
                                                <div className="crd-img">
                                                    <img src={`http://localhost:9001/images/${res.image}`} alt="KKK" className="img-fluid" />
                                                </div>
                                                <div className="crd-txt">
                                                    <h2 className="fw-bold">{res.name}</h2>
                                                    <div className="location-desc">
                                                        <i className="bi bi-geo-alt-fill"></i> {res.location}
                                                    </div>
                                                    <div className="fw-bold">
                                                        <i className="bi bi-cash "></i> Prix: {res.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>

                                    </>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.conciergerie.length !== 0 && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le service de concierge
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.conciergerie.map((res, index) => {
                                    return (<>
                                        <label for={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.id} className="radio-input" />
                                            <h4><span className="badge bg-success">Selectionné</span></h4>
                                            <div className="crd" key={index}>
                                                <div className="crd-img">
                                                    <img src={`http://localhost:9001/images/${res.image}`} alt="KKK" className="img-fluid" />
                                                </div>
                                                <div className="crd-txt">
                                                    <h2 className="fw-bold">{res.name}</h2>
                                                    <div className="location-desc">
                                                        <i className="bi bi-geo-alt-fill"></i> {res.location}
                                                    </div>
                                                    <div className="fw-bold">
                                                        <i className="bi bi-cash "></i> Prix: {res.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.decoration.length !== 0 && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le décorateur de votre choix
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.decoration.map((res, index) => {
                                    return (<>
                                        <label for={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.id} className="radio-input" />
                                            <h4><span className="badge bg-success">Selectionné</span></h4>
                                            <div className="crd" key={index}>
                                                <div className="crd-img">
                                                    <img src={`http://localhost:9001/images/${res.image}`} alt="KKK" className="img-fluid" />
                                                </div>
                                                <div className="crd-txt">
                                                    <h2 className="fw-bold">{res.name}</h2>
                                                    <div className="location-desc">
                                                        <i className="bi bi-geo-alt-fill"></i> {res.location}
                                                    </div>
                                                    <div className="fw-bold">
                                                        <i className="bi bi-cash "></i> Prix: {res.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.photographie.length !== 0 && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le service de photographe
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.photographie.map((res, index) => {
                                    return (<>
                                        <label for={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.id} className="radio-input" />
                                            <h4><span className="badge bg-success">Selectionné</span></h4>
                                            <div className="crd" key={index}>
                                                <div className="crd-img">
                                                    <img src={`http://localhost:9001/images/${res.image}`} alt="KKK" className="img-fluid" />
                                                </div>
                                                <div className="crd-txt">
                                                    <h2 className="fw-bold">{res.name}</h2>
                                                    <div className="location-desc">
                                                        <i className="bi bi-geo-alt-fill"></i> {res.location}
                                                    </div>
                                                    <div className="fw-bold">
                                                        <i className="bi bi-cash "></i> Prix: {res.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
}