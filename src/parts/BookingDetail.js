import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function BookingDetail() {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="d-flex flex-column align-items-center text-center pb-5">
          <h2 className="h2">Booking Nomor Antrian</h2>
          <span className="text-gray-400">
            Mohon mengisi form untuk mendapakan antrian anda
          </span>
        </div>
        <div className="d-flex flex-column align-items-start">
          <p className="mb-4 font-weight-light text-gray-700">
            Book Antrian untuk Besok (Jum’at, 9 July 2021)
          </p>
          <div className="container row d-flex flex column">
            <p className="mb-2 font-weight-light text-gray-700">Bank Tujuan</p>
            <div className="input-group mb-3">
              <select className="custom-select" id="inputGroupSelect02">
                <option selected>Pilih...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="container row d-flex flex column pb-3">
            <p className="mb-2 font-weight-light text-gray-700">Keperluan Layanan</p>
            <div className="input-group mb-3">
              <select className="custom-select" id="inputGroupSelect02">
                <option selected>Pilih...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <Button
              className="btn px-5"
              hasShadow
              isPrimary
            >
              Dapatkan Nomor Antrian
            </Button>
        </div>
      </Fade>
    </section>
  );
}
