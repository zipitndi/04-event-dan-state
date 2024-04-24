"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/components/button";
import Form, { Form_2 } from "@/components/form";
import Gallery from "@/components/gallery";
import Accordion from "@/components/accordion";
import Chat from "@/components/chat";

export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <h2>kuis kota</h2>
                <Tombol_1 />
                <hr></hr>
                <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
            </div>
            <br></br>
            <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
              <Tombol_3 isiPesan="Child Elment : Tombol-1" namaTombol="Tombol-1" />
              <Tombol_3 isiPesan="Child Elment : Tombol-2" namaTombol="Tombol-2" />
            </div>
            <br></br>
            <Gallery />
            <br></br>
            <Form />
            <br></br>
            <Form_2 />
            <br></br>
            <Accordion />
            <br></br>
            <Chat />
        </>
    );
}