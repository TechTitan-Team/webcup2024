import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";

const UserList = () => {
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
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Age</th>
                        <th scope="col">Start Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>Designer</td>
                        <td>28</td>
                        <td>2016-05-25</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Bridie Kessler</td>
                        <td>Developer</td>
                        <td>35</td>
                        <td>2014-12-05</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Ashleigh Langosh</td>
                        <td>Finance</td>
                        <td>45</td>
                        <td>2011-08-12</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Angus Grady</td>
                        <td>HR</td>
                        <td>34</td>
                        <td>2012-06-11</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Raheem Lehner</td>
                        <td>Dynamic Division Officer</td>
                        <td>47</td>
                        <td>2011-04-19</td>
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
export default UserList;
