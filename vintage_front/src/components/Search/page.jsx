'use client'

import { useState } from "react";

const Search = () => {
    const [tab, settab] = useState("top");
    return (
        <input className="w-full h-full px-4 mx-auto bg-white/10 text-white backdrop-blur-3xl rounded-2xl" />


    );
}
export default Search;