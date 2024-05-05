import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";
import useHttps from "../../../hooks/useHttps";

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
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Recent Sales <span>| Today</span>
                  </h5>
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="/">#2457</a>
                        </th>
                        <td>Brandon Jacob</td>
                        <td>
                          <a href="/" className="text-primary">
                            At praesentium minu
                          </a>
                        </td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="/">#2147</a>
                        </th>
                        <td>Bridie Kessler</td>
                        <td>
                          <a href="/" className="text-primary">
                            Blanditiis dolor omnis similique
                          </a>
                        </td>
                        <td>$47</td>
                        <td>
                          <span className="badge bg-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="/">#2049</a>
                        </th>
                        <td>Ashleigh Langosh</td>
                        <td>
                          <a href="/" className="text-primary">
                            At recusandae consectetur
                          </a>
                        </td>
                        <td>$147</td>
                        <td>
                          <span className="badge bg-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="/">#2644</a>
                        </th>
                        <td>Angus Grady</td>
                        <td>
                          <a href="/" className="text-primar">
                            Ut voluptatem id earum et
                          </a>
                        </td>
                        <td>$67</td>
                        <td>
                          <span className="badge bg-danger">Rejected</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="/">#2644</a>
                        </th>
                        <td>Raheem Lehner</td>
                        <td>
                          <a href="/" className="text-primary">
                            Sunt similique distinctio
                          </a>
                        </td>
                        <td>$165</td>
                        <td>
                          <span className="badge bg-success">Approved</span>
                        </td>
                      </tr>
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
