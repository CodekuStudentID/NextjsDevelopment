import Link from "next/link";
import React from "react";
import MainLayouts from "@/Layouts/MainLayouts";

export default function app ( ) {
    return (
      <MainLayouts>
          <>
            <p>this app next js</p>

                <img style={{
                width: "200px",
                height: "200px",
                marginBottom: "20px"
            }} src="/img/app.jpg" />
            

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
                href="/">Go to default Page</Link>
            </button>
        </>
      </MainLayouts>
    )
}