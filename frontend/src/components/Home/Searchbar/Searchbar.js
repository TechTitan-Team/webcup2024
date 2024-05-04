export default function Searchbar() {
    return <>
        <div className="container mb-4">
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
                            <i class="bi bi-search me-2"></i>
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
            <div className="s-h fw-bold m-4">
                Les éspaces disponibles
            </div>
            <div className="row location-place">
                <div className="col-md-10">
                    <h4 className="fw-bold">
                        Espace manger
                    </h4>
                    <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    </div>
                    <div className="location-desc">
                        <span>
                            <i class="bi bi-geo-alt-fill me-2"></i>
                            Analakely, Antananarivo 101
                        </span>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100">
                        <i class="bi bi-search me-2"></i>
                        Interesser
                    </button>
                </div>
            </div>
        </div>

    </>
}