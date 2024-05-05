import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link, useParams } from "react-router-dom";
import useHttps, { imgUrl } from "../../../hooks/useHttps";
import getService from "../../../utils/getService";
import generateDate from "../../../utils/generateDate";

const CommandDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let response = await http.get(`/commands/${id}`);
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

  function isDateEqualToToday(dateToCheck) {
    const today = new Date();
    const otherDate = new Date(dateToCheck);

    // Compare year, month, and day of both dates
    return (
      today.getFullYear() === otherDate.getFullYear() &&
      today.getMonth() === otherDate.getMonth() &&
      today.getDate() === otherDate.getDate()
    );
  }

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
            <h1>Reservation n°{data.id}</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Reservation</li>
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
                      src={imgUrl + data.user.pdp}
                      width={"40%"}
                      alt="Profile"
                      className="rounded-circle"
                    />
                    <h4>{data.user.name}</h4>
                    <h5>{data.user.email}</h5>
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
                        <h5 className="card-title">Détail</h5>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label ">Date</div>
                          <div className="col-lg-9 col-md-8">
                            {generateDate(data.beginDate)}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Prix total
                          </div>
                          <div className="col-lg-9 col-md-8">
                            {data.totalPrice}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Etat</div>
                          <div className="col-lg-9 col-md-8">
                            {isDateEqualToToday(new Date(data.beginDate)) ? (
                              <span className="badge bg-success">
                                Aujourdhui
                              </span>
                            ) : (
                              <span className="badge bg-warning">Validé</span>
                            )}
                          </div>
                        </div>
                        <h5 className="card-title">Services</h5>
                        {data &&
                          data.relation.map((service, idx) => (
                            <>
                              <div className="row" key={idx}>
                                <div className="col-lg-3 col-md-4 label">
                                  Partenaire n° {idx + 1}
                                </div>
                                <div className="col-lg-9 col-md-8">
                                  <Link
                                    to={`/admin/partner/${service.partenaire.id}`}
                                    className="badge bg-success"
                                  >
                                    {service.partenaire.name}
                                  </Link>
                                </div>
                              </div>
                              <div className="row" key={idx}>
                                <div className="col-lg-3 col-md-4 label">
                                  Service n° {idx + 1}
                                </div>
                                <div className="col-lg-9 col-md-8">
                                  {getService(service.partenaire.type)}
                                </div>
                              </div>
                              <div className="row" key={idx}>
                                <div className="col-lg-3 col-md-4 label">
                                  Email
                                </div>
                                <div className="col-lg-9 col-md-8">
                                  {service.partenaire.email}
                                </div>
                              </div>
                            </>
                          ))}
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
export default CommandDetail;
