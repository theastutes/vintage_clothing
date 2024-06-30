"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const CategorySelector = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-xl" variant={"ghost"}>
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={useSearchParams().get("category") === ""}
          onCheckedChange={() => router.push(`?category=${""}`)}
        >
          <div className="cursor-pointer">All</div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={useSearchParams().get("category") === "UPR"}
          onCheckedChange={() => router.push(`?category=${"UPR"}`)}
        >
          <div className="cursor-pointer">Top Wear</div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={useSearchParams().get("category") === "BTM"}
          onCheckedChange={() => router.push(`?category=${"BTM"}`)}
        >
          <div className="cursor-pointer">Bottom Wear</div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={useSearchParams().get("category") === "BTMJNS"}
          onCheckedChange={() => router.push(`?category=${"BTMJNS"}`)}
        >
          <div className="cursor-pointer">Jeans</div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={useSearchParams().get("category") === "UPRSRT"}
          onCheckedChange={() => router.push(`?category=${"UPRSRT"}`)}
        >
          <div className="cursor-pointer">Shirts</div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategorySelector;
