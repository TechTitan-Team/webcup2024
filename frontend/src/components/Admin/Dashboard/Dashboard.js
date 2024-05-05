import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import useHttps from "../../../hooks/useHttps";
import { Link } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import getService from "../../../utils/getService";

const Dashboard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();
  const { token } = useToken();

  const getData = async () => {
    try {
      let response = await http.get("/users/dashboard/state");
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
    getData();
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
            <h1>Dashboard {token && token.user.type != "admin" && "partenaire"}</h1>
          </div>
          {/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg-8">
                <div className="row">
                  {/* Sales Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">Utilisateurs</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people" />
                          </div>
                          <div className="ps-3">
                            <h6>{data.users}</h6>
                            <span className="text-success small pt-1 fw-bold">
                              en total
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Sales Card */}
                  {/* Revenue Card */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">
                      <div className="card-body">
                        <h5 className="card-title">Partenaires</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-card-checklist"></i>
                          </div>
                          <div className="ps-3">
                            <h6>{data.partner}</h6>
                            <span className="text-muted small pt-2 ps-1">
                              totale des actives
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Revenue Card */}
                  {/* Customers Card */}
                  <div className="col-xxl-4 col-xl-12">
                    <div className="card info-card customers-card">
                      <div className="card-body">
                        <h5 className="card-title">En attente</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-card-list"></i>
                          </div>
                          <div className="ps-3">
                            <h6>{data.demand}</h6>
                            <span className="text-danger small pt-1 fw-bold">
                              demande
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Customers Card */}
                  {/* Recent Sales */}
                  <div className="col-12">
                    <div className="card recent-sales overflow-auto">
                      <div className="card-body">
                        <h5 className="card-title">Dernier partenaires</h5>
                        <table className="table table-borderless datatable">
                          <thead>
                            <tr>
                              <th scope="col">Numero</th>
                              <th scope="col">Nom</th>
                              <th scope="col">Email</th>
                              <th scope="col">Services</th>
                              <th scope="col">Statut</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data &&
                              data.recentPartner &&
                              data.recentPartner.map((partner, idx) => (
                                <tr key={idx}>
                                  <th scope="row">
                                    <Link to={`/admin/partner/${partner.id}`}>
                                      {partner.id}
                                    </Link>
                                  </th>
                                  <td>{partner.name}</td>
                                  <td>
                                    <Link
                                      to={`/admin/partner/${partner.id}`}
                                      className="text-primary"
                                    >
                                      {partner.email}
                                    </Link>
                                  </td>
                                  <td>{getService(partner.type)}</td>
                                  <td>
                                    {partner.isValid ? (
                                      <span className="badge bg-success">
                                        Aprouvé
                                      </span>
                                    ) : (
                                      <span className="badge bg-danger">
                                        Non aprouvé
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End Recent Sales */}
                </div>
              </div>
              {/* End Left side columns */}
              {/* Right side columns */}
              <div className="col-lg-4">
                {/* Recent Activity */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Commandes récentes</h5>
                    <div className="activity">
                      <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                        <div className="activity-content">
                          Quia quae rerum{" "}
                          <a href="/" className="fw-bold text-dark">
                            explicabo officiis
                          </a>{" "}
                          beatae
                        </div>
                      </div>
                      {/* End activity item*/}
                      <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                        <div className="activity-content">
                          Voluptatem blanditiis blanditiis eveniet
                        </div>
                      </div>
                      {/* End activity item*/}
                      <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                        <div className="activity-content">
                          Voluptates corrupti molestias voluptatem
                        </div>
                      </div>
                      {/* End activity item*/}
                      <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                        <div className="activity-content">
                          Tempore autem saepe{" "}
                          <a href="/" className="fw-bold text-dark">
                            occaecati voluptatem
                          </a>{" "}
                          tempore
                        </div>
                      </div>
                      {/* End activity item*/}
                      <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                        <div className="activity-content">
                          Est sit eum reiciendis exercitationem
                        </div>
                      </div>
                      {/* End activity item*/}
                      <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                        <div className="activity-content">
                          Dicta dolorem harum nulla eius. Ut quidem quidem sit
                          quas
                        </div>
                      </div>
                      {/* End activity item*/}
                    </div>
                  </div>
                </div>
                {/* End Recent Activity */}
              </div>
              {/* End Right side columns */}
            </div>
          </section>
        </main>
      )}
    </AdminLayout>
  );
};

export default Dashboard;
