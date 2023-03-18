import Image from "next/image";
import {useState, useEffect} from "react";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
    {name: "Deposit", href: "#", current: false},
    {name: "Withdraw", href: "#", current: false},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const someRendering = (
    <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
            Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            // defaultValue={tabs.find((tab) => tab.current).name}
        >
            {tabs.map((tab) => (
                <option className="w-1/2" key={tab.name}>
                    {tab.name}
                </option>
            ))}
        </select>
    </div>
);

export default function DespositModule() {
    const [depositComp, setDepositcomp] = useState(true);

    useEffect(() => {}, [depositComp]);

    return (
        <div className=" w-4/12 bg-[#242741] rounded-lg	">
            {someRendering}

            {/* // Nav Component / useState for Deposit and Withdraw */}
            <div className="hidden sm:block">
                <div className="">
                    <nav
                        className="-mb-px flex space-x-8 bg-[#111320] px-2 rounded-t-lg                        "
                        aria-label="Tabs"
                        onClick={() => setDepositcomp(!depositComp)}
                    >
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    !depositComp
                                        ? "border-transparent text-[#9A9CB1] w-1/2 text-center hover:border-gray-300 hover:text-gray-700"
                                        : "border-transparent text-[#9A9CB1] w-1/2 text-center hover:border-gray-300 hover:text-gray-700",
                                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* // Main Other Components */}
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: 16,
                }}
            >
                <div className="flex justify-between w-full my-2">
                    <p className="text-[#9A9CB1]"> Select Token</p>
                    <p className="text-[#9A9CB1]">Available: XXX</p>
                </div>

                <div className="flex flex-stretch w-full">
                    <div className="h-12 w-1/6 rounded-lg bg-[#111320] flex justify-center items-center">
                        <Image src="/GDXPair.png" width="50" height="50" alt={""} />
                    </div>
                    <div className="h-12 ml-4 w-5/6 py-2  rounded-lg flex justify-between items-center bg-[#111320]	">
                        <p className="text-lg pl-4 text-[#9A9CB1]">0</p>
                        {/* <input className="text-lg pl-4 text-[#9A9CB1]" type={"number"}></input> */}
                        <button class="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            MAX
                        </button>
                    </div>
                </div>

                <button class="mt-4 bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 mpx-4 rounded-lg">
                    {depositComp ? "Deposit" : "Withdraw"}
                </button>
            </div>
        </div>
    );
}
