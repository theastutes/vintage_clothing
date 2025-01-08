"use client";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?query=${query}`);
  };
  return (
    <form
      onSubmit={submit}
      className="relative flex flex-row items-center h-14 sm:h-11 w-full sm:w-96 mx-auto py-2 px-8 bg-transparent gap-2 pt-8"
    >
      <Input
        endContent={<AiOutlineSearch size={28} />}
        placeholder="Search..."
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
