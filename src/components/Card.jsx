export default function Card() {
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card bg-dark text-white h-100 shadow overflow-hidden">
          <img
            src="https://down-id.img.susercontent.com/file/b5c4cf14a22ffe2d3683728f144d4073"
            className="card-img-top"
            alt="Gambar 1"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Landing Page</h5>
              <p className="card-text">
                jasa pembuatan website landing page solusi khusus buat kamu yang ingin meningkatkan penjualan product melalui platfrom digital.
              </p>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <small className="text-muted">03 Agustus 2025</small>
              <a href="#" className="btn btn-outline-light btn-sm">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card bg-dark text-white h-100 shadow overflow-hidden">
          <img
            src="https://kadekbudiasa.com/wp-content/uploads/2023/01/Jasa-Web-Design-600x600.png"
            className="card-img-top"
            alt="Gambar 2"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Hiring Andorid Developer</h5>
              <p className="card-text">
                Daftarkan diri kamu menjadi kandidat terbaik kesempatan bergabung bersama kami menjadi programmer andorid developer.
              </p>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <small className="text-muted">01 Agustus 2025</small>
              <a href="#" className="btn btn-outline-light btn-sm">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
