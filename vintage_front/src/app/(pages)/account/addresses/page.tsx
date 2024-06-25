
import { auth } from "../../../../../auth";
import { IAddress } from "../../../../../types/types";
import { getAddress } from "../../../../../action/action";
import { CgAdd } from "react-icons/cg";
import Link from "next/link";
const page = async () => {

    const session = await auth();

    const userAddress: IAddress[] = await getAddress(session?.user?.id!);    

    return (
        <div className="h-screen w-screen sm:pl-14 flex justify-center items-center bg-brown">
            {userAddress && userAddress.map((adress, index) => (
                <div  key={index} className=" sm:w-80 sm:aspect-square sm:flex-row sm:flex-wrap sm:gap-4
                p-2 
                    w-full h-[25%] flex flex-col gap-2
                ">
                    <div className="text-lg">
                        {adress.fullname}
                    </div>
                    <div className="text-base">{adress.phoneno}</div>
                    <div className="text-sm" >{adress.adres}</div>
                    <div></div>
                </div>))}
                <Link href={'/addAddress'} className="sm:w-80 sm:aspect-square justify-center items-center
                p-2 
                    w-full h-[25%] flex flex-col gap-2"><CgAdd/></Link>
        </div>)

}

export default page