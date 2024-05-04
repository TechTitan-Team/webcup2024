import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();

    return <>
        <div className="container d-flex dis-header my-5">
            <div className="col-md-6">
                <img src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="alt" className="img-fluid br" />
            </div>
            <div className="col-md-6 px-5">

                <h1 className="fw-bold">Title</h1>
                <div className="location-desc my-2">
                    <span>
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        Analakely, Antananarivo 101
                    </span>
                    <span class="badge bg-success mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill me-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Disponible
                    </span>
                </div>

                <div className="fw-bold fs-5 my-2">À partir de 300 000 ar</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="row location-desc">
                    
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success w-100">Réserver l'éspace</button>
                        <button className="btn btn-warning my-2 w-100">
                            <i class="bi bi-heart-fill"></i>
                            Ajouter aux favoris
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}