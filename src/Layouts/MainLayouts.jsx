import React from "react";
import Navbar from "@/components/Navbar";

export default function MainLayouts ({children}) {
    return (
        <div>
            <Navbar />,
            <main style={{
            minHeight: "100vh",
            padding: "0 1rem"
            }}>
            {children}
        </main>
</div>
    );
}