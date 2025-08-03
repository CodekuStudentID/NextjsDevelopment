import Link from "next/link";
import MainLayouts from "@/Layouts/MainLayouts";

export default  function index () {
    return (
     <MainLayouts>
            <div>

                <h1 style={{
                    marginTop: "200px",
                    textAlign: "center"
                }}>Welcome To Development Website Next Js !</h1>

               <div 
               style={{
                display: "flex",
                justifyContent: "center"
               }}
               >
                 <button
                style={{
                    marginTop: "10px",
                    width: "auto",
                    height: "40px",
                    padding: "8px",
                    backgroundColor: "black",
                    borderRadius: "5px",
                    border: "none"
                }}
            >
                <Link
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                href="/home">Go to Home Page</Link>
            </button>
               </div>
            </div>
     </MainLayouts>    
        )
}