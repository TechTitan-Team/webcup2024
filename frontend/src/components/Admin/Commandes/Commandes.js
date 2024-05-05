import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";
import generateDate from "../../../utils/generateDate";
import useToken from "../../../hooks/useToken";

const Commandes = () => {
  const { token } = useToken();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let url = "/commands";
      if (token)
        url =
          token.user.type == "partner"
            ? `/commands/partner/${token.user.id}`
            : "/commands";
      console.log(url);
      let response = await http.get(url);
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

  const deleteCommande = async (id) => {
    try {
      let response = await http.delete(`/commands/${id}`);
      if (response) {
        getData();
      }
    } catch (error) {
      console.log(error);
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
                        {token && token.user && token.user.type != "admin" && (
                          <th scope="col">Action</th>
                        )}
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
                      {token &&
                        token.user.type == "partner" &&
                        data &&
                        data.map((reservation, idx) => (
                          <tr key={idx}>
                            <th scope="row">
                              <Link to={`/admin/command/${reservation.commands.id}`}>
                                {reservation.commands.user.id}
                              </Link>
                            </th>
                            <td>{reservation.commands.user.email}</td>
                            <td>
                              <Link
                                to={`/admin/command/${reservation.commands.id}`}
                                className="text-primary"
                              >
                                {reservation.commands.totalPrice}
                              </Link>
                            </td>
                            <td>
                              {generateDate(reservation.commands.beginDate)}
                            </td>
                            <td>
                              {isDateEqualToToday(
                                new Date(reservation.commands.beginDate)
                              ) ? (
                                <span className="badge bg-success">
                                  Aujourdhui
                                </span>
                              ) : (
                                <span className="badge bg-warning">Validé</span>
                              )}
                            </td>
                            {token && token.user && token.user.type && (
                              <td>
                                <span
                                  onClick={() =>
                                    deleteCommande(reservation.commands.id)
                                  }
                                  className="badge cursor-pointer bg-danger color-white"
                                >
                                  Effectué
                                </span>
                              </td>
                            )}
                          </tr>
                        ))}

                      {token &&
                        token.user.type == "admin" &&
                        data &&
                        data.map((reservation, idx) => (
                          <tr key={idx}>
                            <th scope="row">
                              <Link to={`/admin/command/${reservation.id}`}>
                                {reservation.user.id}
                              </Link>
                            </th>
                            <td>{reservation.user.email}</td>
                            <td>
                              <Link
                                to={`/admin/command/${reservation.id}`}
                                className="text-primary"
                              >
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
