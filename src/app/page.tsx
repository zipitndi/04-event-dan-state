"use client";
import Tombol_1, { Tombol_2 } from "@/components/button";

export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <h2>kuis kota</h2>
                <Tombol_1 />
                <hr></hr>
                <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
            </div>
        </>
    );
}