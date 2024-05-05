import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";
import generateDate from "../../../utils/generateDate";

const Commandes = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let response = await http.get("/commands");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Reservation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Liste des Reservation</li>
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
                        <th scope="col">Client num</th>
                        <th scope="col">Email</th>
                        <th scope="col">Prix total</th>
                        <th scope="col">Date</th>
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
                        data.map((reservation, idx) => (
                          <tr key={idx}>
                            <th scope="row">
                              <Link to={`/admin/command/${reservation.id}`}>{reservation.user.id}</Link>
                            </th>
                            <td>{reservation.user.email}</td>
                            <td>
                              <Link to={`/admin/command/${reservation.id}`} className="text-primary">
                                {reservation.totalPrice}
                              </Link>
                            </td>
                            <td>{generateDate(reservation.beginDate)}</td>
                            <td>
                              {isDateEqualToToday(
                                new Date(reservation.beginDate)
                              ) ? (
                                <span className="badge bg-success">
                                  Aujourdhui
                                </span>
                              ) : (
                                <span className="badge bg-warning">Validé</span>
                              )}
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
export default Commandes;
