import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";

const DemandPartner = () => {
  return (
    <AdminLayout>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Demande de Partennaires</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Partennaires</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
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
export default DemandPartner;
