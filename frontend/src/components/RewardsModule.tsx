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
const tabs = [{name: "Strategy", href: "#", current: false}];

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

export default function RewardsModule() {
    const [depositComp, setDepositcomp] = useState(true);

    useEffect(() => {}, [depositComp]);

    return (
        <div className=" w-4/12 bg-[#242741] rounded-lg mt-6	">
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
                                className={"text-[#9A9CB1] whitespace-nowrap py-4 px-1 text-sm font-medium"}
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
                <div className="flex justify-between w-full my-2 bg-[#2E3151] p-4 rounded-lg">
                    <p className="text-[#9A9CB1]">Reward</p>
                    <p className="text-[#9A9CB1]">XXX GDX</p>
                </div>
            </div>
        </div>
    );
}
