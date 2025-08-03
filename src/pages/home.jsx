import Link from "next/link";
import MainLayouts from "@/Layouts/MainLayouts";
import Hero from "@/components/Hero";

export default function home () {
    return (
       <MainLayouts>
        <Hero />

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Kustomisasi Penuh</h2>
              <p>Dengan desain yang menarik, modern, dan responsif di berbagai perangkat, kami memastikan setiap website tampil optimal baik di desktop maupun smartphone. Tak hanya tampilan yang memikat, kami juga fokus pada fungsionalitas yang tepat sasaran — mulai dari sistem pemesanan, formulir kontak, integrasi media sosial, hingga fitur e-commerce.</p>
              <button className="btn btn-outline-light" type="button">Pelajari lebih lanjut</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Harga Terjangkau</h2>
              <p>Tim kami siap membantu Anda membangun identitas digital yang kuat dan terpercaya, agar bisnis Anda lebih dikenal luas dan mudah diakses oleh pelanggan. Jadikan website sebagai aset bisnis Anda yang bekerja 24 jam nonstop, meningkatkan kredibilitas dan potensi penjualan!.</p>
              <button className="btn btn-outline-secondary" type="button">Lihat paket</button>
            </div>
          </div>
        </div>

       </MainLayouts>
    )
}