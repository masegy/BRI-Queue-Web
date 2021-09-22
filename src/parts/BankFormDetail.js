import React from "react";
import Fade from "react-reveal/Fade";

export default function BookingDetail({ data }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="d-flex flex-column align-items-center text-center pb-5">
          <h2 className="h2">Daftar Bank</h2>
          <span className="text-gray-400">Daftar bank yang tersedia</span>
        </div>
        <form className="form-inline mb-3">
          <input
            className="form-control mr-sm-2"
            style={{ height: 48.5 }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-sm-0" type="submit">
            Search
          </button>
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
              {data.bankDetails.map((item, index) => {
                return (
                  <tr key={`${index}`}>
                    <th scope="row">{item._id}</th>
                    <td>{item.bank}</td>
                    <td>{item.alamat}</td>
                    <td>{item.detail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  );
}
