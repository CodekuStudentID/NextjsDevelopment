import React from "react";
import Navbar from "@/components/Navbar";

export default function MainLayouts ({children}) {
    return (
        <main style={{
            minHeight: "100vh",
            padding: "0 1rem"
            }}>
                <Navbar />,
            {children}
        </main>
    );
}