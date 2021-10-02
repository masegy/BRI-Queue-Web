import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function BookingDetail() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

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
            type="text"
            placeholder="Search"
            onChange={(e) => searchItems(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-sm-0"
          >
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
              </tr>
            </thead>
            <tbody>
              {searchInput.length > 1
                ? filteredResults.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id_bank}</th>
                        <td>{item.nama_bank}</td>
                        <td>{item.alamat}</td>
                      </tr>
                    );
                  })
                : data.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id_bank}</th>
                        <td>{item.nama_bank}</td>
                        <td>{item.alamat}</td>
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
