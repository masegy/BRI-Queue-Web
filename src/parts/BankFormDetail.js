import React from "react";
import Fade from "react-reveal/Fade";

export default function BookingDetail() {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="d-flex flex-column align-items-center text-center pb-5">
          <h2 className="h2">Daftar Bank</h2>
          <span className="text-gray-400">Daftar bank yang tersedia</span>
        </div>
        <form className="form-inline mb-3">
            <input className="form-control mr-sm-2" style ={{height:48.5}} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-sm-0" type="submit">Search</button>
        </form>
        <div className="d-flex flex-column align-items-center">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Bank</th>
                <th scope="col">Alamat</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  );
}
