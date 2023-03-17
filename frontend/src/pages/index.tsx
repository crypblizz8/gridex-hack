import {Web3Button} from "@web3modal/react";
import {useAccount} from "wagmi";

import {Account} from "../components";

function Page() {
    const {isConnected} = useAccount();

    return (
        <div className="px-4">
            <div className="flex justify-between border mt-4">
                <h1>wagmi + Web3Modal + Next.js</h1>
                <Web3Button />
            </div>

            {isConnected && <Account />}
        </div>
    );
}

export default Page;
