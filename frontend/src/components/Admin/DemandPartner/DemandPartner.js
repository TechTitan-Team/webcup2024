import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";

const DemandPartner = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let response = await http.post("/partenaires/by-type", {
        isValid: false,
      });
      if (response) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const approved = async (id) => {
    try {
      let response = await http.post("/partenaires/approve", {
        id,
      });
      if (response) {
        console.log(response.data);
        getData();
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
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Demande de Partenaires</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Partenaires</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div className="card-body pt-3">
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading && (
                        <tr>
                          <td style={{ textAlign: "center" }} colSpan={7}>
                            Chargement...
                          </td>
                        </tr>
                      )}
                      {data &&
                        data.map((partner, idx) => (
                          <tr key={idx}>
                            <th scope="row">
                              <Link to={`/admin/partner/${partner.id}`}>{partner.name}</Link>
                            </th>
                            <td>{partner.email}</td>
                            <td>
                              <Link to={`/admin/partner/${partner.id}`} className="text-primary">
                                {partner.number}
                              </Link>
                            </td>
                            <td>{partner.location}</td>
                            <td>
                              <Link to={`/admin/partner/${partner.id}`}>{partner.type}</Link>
                            </td>
                            <td>
                              <span className="badge bg-danger">
                                Non approuvé
                              </span>
                            </td>
                            <td>
                              <span
                                onClick={() => approved(partner.id)}
                                className="badge cursor-pointer bg-warning"
                              >
                                Aprouver
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AdminLayout>
  );
};
export default DemandPartner;
