export default function Hero () {
    return (
        <section
  className="d-flex align-items-center justify-content-center text-center text-white"
  style={{
    height: "50vh",
    backgroundImage: "url('/img/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginBottom: "30px"
  }}
>
  <div>
    <h1 className="display-4 fw-bold">Bangun Website Profesional</h1>
    <p className="lead">Desain modern, responsif, dan siap pakai untuk bisnis Anda</p>
    <a href="#kontak" className="btn btn-primary btn-lg mt-3">Hubungi Kami</a>
  </div>
</section>

    );
}