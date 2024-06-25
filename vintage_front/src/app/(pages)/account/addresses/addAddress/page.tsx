
import { auth } from "../../../../../../auth";
import GetAddress from "../../../../../components/GetAddress"
const page = async () => {
    const session = await auth();

    return(
        <div >
            <GetAddress id={session?.user?.id!} />
        </div>
    )
}

export default page