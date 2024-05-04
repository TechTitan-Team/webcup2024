import { useState } from "react";
import { Overlay } from "../Overlay/Overlay";

export default function Searchbar() {
    const [overlay, setOverlay] = useState(false);

    return <>
        <div className="container mb-4 dis-header">
            <div className="fw-bold m-4">
                Rechercher maintenant un éspaces à réservés
            </div>
            <div className="search-bar p-4">
                <div className="row">
                    <div className="col-md">
                        <div className="s-l">
                            Espace
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Rechercher" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="s-l">
                            Espace
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Rechercher" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100 h-100">
                            <i className="bi bi-search me-2"></i>
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="s-h fw-bold">
                    Les services suggérés
                </div>
                <div className="m-4">
                    Choisissez un espace
                </div>
                <div className="d-flex justify-content-center">
                    <div className="checkbox">
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-input" />
                            <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle cx="96" cy="144.00002" r="10"></circle>
                                        <circle cx="160" cy="144.00002" r="10"></circle>
                                        <path d="M74.4017,80A175.32467,175.32467,0,0,1,128,72a175.32507,175.32507,0,0,1,53.59754,7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M181.59717,176.00041A175.32523,175.32523,0,0,1,128,184a175.32505,175.32505,0,0,1-53.59753-7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M155.04392,182.08789l12.02517,24.05047a7.96793,7.96793,0,0,0,8.99115,4.20919c24.53876-5.99927,45.69294-16.45908,61.10024-29.85086a8.05225,8.05225,0,0,0,2.47192-8.38971L205.65855,58.86074a8.02121,8.02121,0,0,0-4.62655-5.10908,175.85294,175.85294,0,0,0-29.66452-9.18289,8.01781,8.01781,0,0,0-9.31925,5.28642l-7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M100.95624,182.08757l-12.02532,24.0508a7.96794,7.96794,0,0,1-8.99115,4.20918c-24.53866-5.99924-45.69277-16.459-61.10006-29.85069a8.05224,8.05224,0,0,1-2.47193-8.38972L50.34158,58.8607a8.0212,8.0212,0,0,1,4.62655-5.1091,175.85349,175.85349,0,0,1,29.66439-9.18283,8.0178,8.0178,0,0,1,9.31924,5.28642l7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                    </svg>
                                </span>
                                <span className="checkbox-label">Espaces</span>
                            </span>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-input" />
                            <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle cx="96" cy="144.00002" r="10"></circle>
                                        <circle cx="160" cy="144.00002" r="10"></circle>
                                        <path d="M74.4017,80A175.32467,175.32467,0,0,1,128,72a175.32507,175.32507,0,0,1,53.59754,7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M181.59717,176.00041A175.32523,175.32523,0,0,1,128,184a175.32505,175.32505,0,0,1-53.59753-7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M155.04392,182.08789l12.02517,24.05047a7.96793,7.96793,0,0,0,8.99115,4.20919c24.53876-5.99927,45.69294-16.45908,61.10024-29.85086a8.05225,8.05225,0,0,0,2.47192-8.38971L205.65855,58.86074a8.02121,8.02121,0,0,0-4.62655-5.10908,175.85294,175.85294,0,0,0-29.66452-9.18289,8.01781,8.01781,0,0,0-9.31925,5.28642l-7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M100.95624,182.08757l-12.02532,24.0508a7.96794,7.96794,0,0,1-8.99115,4.20918c-24.53866-5.99924-45.69277-16.459-61.10006-29.85069a8.05224,8.05224,0,0,1-2.47193-8.38972L50.34158,58.8607a8.0212,8.0212,0,0,1,4.62655-5.1091,175.85349,175.85349,0,0,1,29.66439-9.18283,8.0178,8.0178,0,0,1,9.31924,5.28642l7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                    </svg>
                                </span>
                                <span className="checkbox-label">Services traiteurs</span>
                            </span>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-input" />
                            <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle cx="96" cy="144.00002" r="10"></circle>
                                        <circle cx="160" cy="144.00002" r="10"></circle>
                                        <path d="M74.4017,80A175.32467,175.32467,0,0,1,128,72a175.32507,175.32507,0,0,1,53.59754,7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M181.59717,176.00041A175.32523,175.32523,0,0,1,128,184a175.32505,175.32505,0,0,1-53.59753-7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M155.04392,182.08789l12.02517,24.05047a7.96793,7.96793,0,0,0,8.99115,4.20919c24.53876-5.99927,45.69294-16.45908,61.10024-29.85086a8.05225,8.05225,0,0,0,2.47192-8.38971L205.65855,58.86074a8.02121,8.02121,0,0,0-4.62655-5.10908,175.85294,175.85294,0,0,0-29.66452-9.18289,8.01781,8.01781,0,0,0-9.31925,5.28642l-7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M100.95624,182.08757l-12.02532,24.0508a7.96794,7.96794,0,0,1-8.99115,4.20918c-24.53866-5.99924-45.69277-16.459-61.10006-29.85069a8.05224,8.05224,0,0,1-2.47193-8.38972L50.34158,58.8607a8.0212,8.0212,0,0,1,4.62655-5.1091,175.85349,175.85349,0,0,1,29.66439-9.18283,8.0178,8.0178,0,0,1,9.31924,5.28642l7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                    </svg>
                                </span>
                                <span className="checkbox-label">Animations</span>
                            </span>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-input" />
                            <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle cx="96" cy="144.00002" r="10"></circle>
                                        <circle cx="160" cy="144.00002" r="10"></circle>
                                        <path d="M74.4017,80A175.32467,175.32467,0,0,1,128,72a175.32507,175.32507,0,0,1,53.59754,7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M181.59717,176.00041A175.32523,175.32523,0,0,1,128,184a175.32505,175.32505,0,0,1-53.59753-7.99971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M155.04392,182.08789l12.02517,24.05047a7.96793,7.96793,0,0,0,8.99115,4.20919c24.53876-5.99927,45.69294-16.45908,61.10024-29.85086a8.05225,8.05225,0,0,0,2.47192-8.38971L205.65855,58.86074a8.02121,8.02121,0,0,0-4.62655-5.10908,175.85294,175.85294,0,0,0-29.66452-9.18289,8.01781,8.01781,0,0,0-9.31925,5.28642l-7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                        <path d="M100.95624,182.08757l-12.02532,24.0508a7.96794,7.96794,0,0,1-8.99115,4.20918c-24.53866-5.99924-45.69277-16.459-61.10006-29.85069a8.05224,8.05224,0,0,1-2.47193-8.38972L50.34158,58.8607a8.0212,8.0212,0,0,1,4.62655-5.1091,175.85349,175.85349,0,0,1,29.66439-9.18283,8.0178,8.0178,0,0,1,9.31924,5.28642l7.97318,23.91964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                                    </svg>
                                </span>
                                <span className="checkbox-label">Décorations</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-100 my-4">
                <button className="btn btn-primary w-100 fw-bold" onClick={()=>setOverlay(!overlay)}>C'est parti</button>
            </div>
        </div>
        <Overlay state={overlay} action={()=>setOverlay(!overlay)}/>
    </>
}