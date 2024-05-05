import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";
import getService from "../../../utils/getService";

const PartnerList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let response = await http.post("/partenaires/by-type", {
        isValid: true,
      });
      if (response) {
        console.log(response.data);
        setData(response.data);
      }
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  return (
    <AdminLayout>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Liste des Partenaires</h1>
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
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
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
                              <Link to={`/admin/partner/${partner.id}`}>{getService(partner.type)}</Link>
                            </td>
                            <td>
                              <span className="badge bg-success">Approuvé</span>
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
export default PartnerList;
