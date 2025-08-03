import Link from "next/link";
import MainLayouts from "@/Layouts/MainLayouts";

export default  function index () {
    return (
     <MainLayouts>
           <>
            <p>this default pages next js</p>
        
            <img style={{
                width: "200px",
                height: "200px",
                marginBottom: "20px"
            }} src="/img/logo.jpeg" />

            <button
                style={{
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
                href="/home">Go to default Page</Link>
            </button>
        </>
     </MainLayouts>    
        )
}