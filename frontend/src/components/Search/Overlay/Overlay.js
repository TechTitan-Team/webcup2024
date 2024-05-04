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
    const getService = (service, pers_min, pers_max, location) => {
        http.get(`/partenaires/filter/${service}/${pers_max}/${pers_min}/${location}`)
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
        if (props.service.lieux)
            getService("lieux", props.filter.pers_min, props.filter.pers_max, props.filter.location)
        if (props.service.traiteurs)
            getService("traiteur", props.filter.pers_min, props.filter.pers_max)
        if (props.service.animation)
            getService("divertissements", props.filter.pers_min, props.filter.pers_max)
        if (props.service.decoration)
            getService("decoration", props.filter.pers_min, props.filter.pers_max)
        if (props.service.concierge)
            getService("conciergerie", props.filter.pers_min, props.filter.pers_max)
        if (props.service.photographe)
            getService("photographie", props.filter.pers_min, props.filter.pers_max)
    }, [props.filter, props.service])

    return <>
        <div className={`overlay ${props.state ? "" : "overlay-d"}`}>
            <div className="container py-4">
                <button className="btn-overlay" onClick={props.action}>Fermer</button>
                {
                    services.lieux.length !== 0 && <div>

                        <h1 className="my-4 fw-bold">
                            Selectionner l'espace à louer
                        </h1>
                        <p>
                            Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                        </p>
                        <div className="d-flex align-items-center justify-content-center m-5">
                            {
                                services.lieux.map((res, index) => {
                                    return (
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
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.traiteurs.length !== 0 && <div>

                        <h1 className="my-4 fw-bold">
                            Selectionner le traiteur
                        </h1>
                        <p>
                            Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                        </p>
                        <div className="d-flex align-items-center justify-content-center m-5">
                            {
                                services.traiteurs.map((res, index) => {
                                    return (
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
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.divertissement.length !== 0 && <div>

                        <h1 className="my-4 fw-bold">
                            Selectionner le service divertissement et animation
                        </h1>
                        <p>
                            Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                        </p>
                        <div className="d-flex align-items-center justify-content-center m-5">
                            {
                                services.divertissement.map((res, index) => {
                                    return (
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
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.conciergerie.length !== 0 && <div>

                        <h1 className="my-4 fw-bold">
                            Selectionner le service de concierge
                        </h1>
                        <p>
                            Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                        </p>
                        <div className="d-flex align-items-center justify-content-center m-5">
                            {
                                services.conciergerie.map((res, index) => {
                                    return (
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
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.decoration.length !== 0 && <div>

                        <h1 className="my-4 fw-bold">
                            Selectionner l'espace à louer
                        </h1>
                        <p>
                            Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                        </p>
                        <div className="d-flex align-items-center justify-content-center m-5">
                            {
                                services.decoration.map((res, index) => {
                                    return (
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
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.photographie.length !== 0 && <div>

                        <h1 className="my-4 fw-bold">
                            Selectionner le service de photographe
                        </h1>
                        <p>
                            Vous pouvez choisir un espace à louer en cliquant l'un des cartes en dessous.
                        </p>
                        <div className="d-flex align-items-center justify-content-center m-5">
                            {
                                services.photographie.map((res, index) => {
                                    return (
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