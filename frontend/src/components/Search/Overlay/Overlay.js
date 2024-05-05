import { useEffect, useState } from "react"
import jega from "../../../assets/img/04.jpg"
import useHttps from "../../../hooks/useHttps"
import useToken from "../../../hooks/useToken"
import { Link, useNavigate } from "react-router-dom";

export function Overlay(props) {
    const nav = useNavigate();
    const { http } = useHttps()
    const {token} = useToken()
    const [error, setError] = useState(false)
    const [services, setServices] = useState({
        lieux: [],
        traiteurs: [],
        divertissement: [],
        decoration: [],
        conciergerie: [],
        photographie: []
    })
    const [idPartenaires, setIdPartenaires] = useState([])
    let priceTotal = 0
    const onClickRadio = (e)=>{
        setIdPartenaires({
            ...idPartenaires,
            [e.target.name] : {id:parseInt(e.target.id), price: parseFloat(e.target.value)}
        })
    }
    const onValid = async()=>{
        if(!token){
            nav("/login")
        }
        else{
            const data = Object.values(idPartenaires)
            console.log(data);
            data.map((items)=>{
                priceTotal += items.price
            })
            await http.post("/commands/create",{
                beginDate: props.filter.date,
                totalPrice: priceTotal,
                id_user: token.user.id,
                id_partenaire: data
            }).then((res)=>{
                console.log(res.data);
                nav("/");
            }).catch((err)=>{
                setError(true)
            })
        }
        
    }
    const getService = async(service, pers, location) => {
        await props.change(true)
        const route = service === "lieux" && location !== "" ? `/partenaires/filter/${service}/${pers}?location=${location}` : `/partenaires/filter/${service}/${pers}`
        await http.get(route)
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
                props.change(false)
            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        if (props.service.lieux && props.filter.pers)
            getService("lieux", props.filter.pers, props.filter.location)
        else
            setServices({...services, lieux: []})
        if (props.service.traiteurs && props.filter.pers)
            getService("traiteur", props.filter.pers )
        else
            setServices({...services, traiteurs: []})
        if (props.service.animation && props.filter.pers)
            getService("divertissements", props.filter.pers)
            else
            setServices({...services, divertissement: []})
        if (props.service.decoration && props.filter.pers)
            getService("decoration", props.filter.pers)
            else
            setServices({...services, decoration: []})
        if (props.service.concierge && props.filter.pers)
            getService("conciergerie", props.filter.pers)
            else
            setServices({...services, conciergerie: []})
        if (props.service.photographe && props.filter.pers)
            getService("photographie", props.filter.pers)
            else
            setServices({...services, photographie: []})
    }, [props.filter, props.service, props.state])

    return <>
        <div className={`overlay ${props.state ? "" : "overlay-d"}`}>
            <div className="container py-4">
                <button className="btn-overlay" onClick={props.action}>Fermer</button>
                {
                    error && <div className="alert alert-danger" role="alert">Veuillez modifiez la date, une de ces services n'est plus disponible à cette date</div>
                }
                {
                    services.lieux.length !== 0 && props.service.lieux && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner l'espace à louer
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.lieux.map((res, index) => {
                                    return (<span key={index}>
                                        <label htmlFor={res.id}>
                                            <input type="radio" id={res.id} name="lieux" value={res.price} className="radio-input" onClick={onClickRadio}/>
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
                                    </span>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.traiteurs.length !== 0 && props.service.traiteurs && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le traiteur
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.traiteurs.map((res, index) => {
                                    return (<span key={index}>
                                        <label htmlFor={res.id}>
                                            <input type="radio" id={res.id} name="traiteur" value={res.price} className="radio-input" onClick={onClickRadio}/>
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
                                    </span>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    services.divertissement.length !== 0 && props.service.animation && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le service divertissement et animation
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.divertissement.map((res, index) => {
                                    return (<>
                                        <label htmlFor={res.id}>
                                            <input type="radio" id={res.id} name="divertissement" value={res.price} className="radio-input" onClick={onClickRadio}/>
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
                    services.conciergerie.length !== 0 && props.service.concierge && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le service de concierge
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.conciergerie.map((res, index) => {
                                    return (<>
                                        <label htmlFor={res.id}>
                                            <input type="radio" id={res.id} name="concierge" value={res.price} className="radio-input" onClick={onClickRadio}/>
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
                    services.decoration.length !== 0 && props.service.decoration && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le décorateur de votre choix
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.decoration.map((res, index) => {
                                    return (<>
                                        <label htmlFor={res.id}>
                                            <input type="radio" id={res.id} name="decorateur" value={res.price} className="radio-input" onClick={onClickRadio}/>
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
                    services.photographie.length !== 0 && props.service.photographe && <div>

                        <h2 className="my-4 fw-bold">
                            Selectionner le service de photographe
                        </h2>
                        <div className="d-flex align-items-center m-5 overflow-control">
                            {
                                services.photographie.map((res, index) => {
                                    return (<>
                                        <label htmlFor={res.id}>
                                            <input type="radio" id={res.id} name="photographe" value={res.price} className="radio-input" onClick={onClickRadio}/>
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
                <div className="w-25 my-4 float-right">
                        <button className="float-right btn btn-primary w-100 fw-bold" onClick={onValid } disabled={idPartenaires.length == 0}>Valider ma reservation</button>
                    </div>
            </div>
        </div>
    </>
}