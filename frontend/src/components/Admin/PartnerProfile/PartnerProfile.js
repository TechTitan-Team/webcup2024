import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link, useParams } from "react-router-dom";
import useHttps, { imgUrl } from "../../../hooks/useHttps";

const PartnerProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let response = await http.get(`/partenaires/${id}`);
      if (response) {
        console.log(response.data);
        setData(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  return (
    <AdminLayout>
      {loading ? (
        <main id="main" className="main text-center">
          <p>Chargement...</p>
        </main>
      ) : null}
      {data && (
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Partenaires</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Partenaires</li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <section className="section profile">
            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img
                      src={imgUrl+data.image}
                      width={"40%"}
                      alt="Profile"
                      className="rounded-circle"
                    />
                    <h4>{data.name}</h4>
                    <h5>{data.email}</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body pt-3">
                    {/* Bordered Tabs */}
                    <ul className="nav nav-tabs nav-tabs-bordered">
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-overview"
                        >
                          A propos
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content pt-2">
                      <div
                        className="tab-pane fade show active profile-overview"
                        id="profile-overview"
                      >
                        <h5 className="card-title">Description</h5>
                        <p className="small fst-italic">{data.description}</p>
                        <h5 className="card-title">Détail</h5>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label ">
                            Adresse
                          </div>
                          <div className="col-lg-9 col-md-8">
                            {data.location}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Téléphone
                          </div>
                          <div className="col-lg-9 col-md-8">{data.number}</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Service</div>
                          <div className="col-lg-9 col-md-8">{data.type}</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Prix</div>
                          <div className="col-lg-9 col-md-8">
                            {data.price || 0}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Personne minimum
                          </div>
                          <div className="col-lg-9 col-md-8">
                            {data.pers_min || 0}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Personne maxinimum
                          </div>
                          <div className="col-lg-9 col-md-8">
                            {data.pers_max || 0}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Validé</div>
                          <div className="col-lg-9 col-md-8">
                            {data.isValid ? "Oui" : "Non"}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Bordered Tabs */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </AdminLayout>
  );
};
export default PartnerProfile;
