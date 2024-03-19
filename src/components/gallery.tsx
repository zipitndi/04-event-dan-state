import { use, useState } from 'react';
import { sculptureList } from "@/data/article";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index <  sculptureList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    function handleClickBack() {
        if (index <  sculptureList.length - 1) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    };

    let sculpture = sculptureList[index];

    return (
        <>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Selanjutnya </button>

            <button
                onClick={handleClickBack}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Sebelumnya </button>
            <h2><i>{sculpture.name} </i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}