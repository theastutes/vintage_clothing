"use client"

import { dosis } from "./ui/fonts";
import { KeyboardEvent, useState } from "react";
import Link from "next/link";

import {  useRouter } from "next/navigation";
import { CgSearch } from "react-icons/cg";
const Search = ({width,height}:{width:number,height:number}) => {

  const router = useRouter();

  const [searchQ, setSearchQ] = useState("");

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search/${searchQ}`);
    }
  };

  return (
    <div className={`${dosis.className}  flex flex-row gap-3 items-center `} >
      <input type="text"
        placeholder={"Search Your Style . . ."}
        
        onKeyDown={(e)=>handleKeyPress(e)}
        onChange={(e)=>setSearchQ(e.target.value)}
        
        className= {`rounded-3xl px-3 w-${width} h-${height} text-base outline-none`}
      />
      <Link className="cursor-pointer" href={`/search/${searchQ}`}>
        <CgSearch size={25} />
      </Link>
    </div>);
};

export default Search;