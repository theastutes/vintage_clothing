'use client'

import { useState } from "react";

const Search = () => {
        const [tab, settab] = useState("top");
        return (

                <input className="w-full h-full px-4 mx-auto bg-black/80 border-2 text-black rounded-2xl" />

        );
}
export default Search;