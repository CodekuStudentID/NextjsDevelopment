"use client";

export default function ButtonFormLogin () {
    return (
        
      <div className="text-center">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-modal-signin"
          // Atribut ini yang menghubungkan tombol dengan modal secara otomatis
          data-hs-overlay="#hs-modal-signin" 
        >
          Login Admin
        </button>
        </div>

    )
}