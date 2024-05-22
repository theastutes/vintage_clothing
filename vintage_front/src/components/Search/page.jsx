'use client'

import { useState } from "react";

const Search = () => {
    const [tab, settab] = useState("top");
    return (
        <div className="h-14 w-full p-2">
            <input className="w-full max-w-96 h-full px-4 mx-auto bg-white/10 text-white backdrop-blur-3xl rounded-3xl" />
        </div>

    );
}
export default Search;