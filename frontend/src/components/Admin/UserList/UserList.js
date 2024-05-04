import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";
import generateDate from "../../../utils/generateDate";

const UserList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { http } = useHttps();

  const getData = async () => {
    try {
      let response = await http.get("/users");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Utilisateurs</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Liste des Utilisateurs</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Numero</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Start Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading && (
                        <tr>
                          <td style={{ textAlign: "center" }} colSpan={4}>
                            Chargement...
                          </td>
                        </tr>
                      )}
                      {data &&
                        data
                          .filter((user) => user.type != "admin")
                          .map((user, idx) => (
                            <tr key={idx}>
                              <th scope="row">{user.id}</th>
                              <td>{user.name + " " + user.last_name}</td>
                              <td>{user.email}</td>
                              <td>{generateDate(user.createdAt)}</td>
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
export default UserList;
