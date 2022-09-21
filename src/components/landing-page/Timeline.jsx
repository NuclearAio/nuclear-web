import React from "react";
import Heading from "../ui/Heading";

const TimeLine = () => {
  const timeline = [
    {
      date: "11 Oct 2022",
      title: "Pre launch",
      description: "The pre-launch will be open to the public.",
    },
    {
      date: "12-15 Oct 2022",
      title: "Pre-launch will be closed.",
      description: "",
    },
    {
      date: "15 Nov 2022",
      title: "The bot will only be available to pre-booked users.",
      description: "",
    },
    {
      date: "15 Nov 2022",
      title: "Alpha release",
      description: "Alpha release with the Shopify module.",
    },
    {
      date: "30 Nov 2022",
      title: "Beta release ",
      description: "Beta release with bug fixes.",
    },
    {
      date: "18-24 Dec 2022",
      title: "Yeezy  module",
      description: "The Yeezy module will be added to the bot.",
    },
    {
      date: "15-20 Jan 2023",
      title: "Chat application",
      description:
        "An in-built chat system will be released for Nuclear software.",
    },
    {
      date: "15-20 Feb 2023",
      title: "Supreme module",
      description: "The Supreme module will be added to the bot.",
    },
    {
      date: "15-20 Mar 2023",
      title: "Footlocker and more Shopify module",
      description: "Footlocker and more Shopify shops will be added.",
    },
    {
      date: "15-20 April 2023",
      title: "We'll keep you updated",
      description:
        "We will gradually include all the Mazor sites.",
    },
  ];
  return (
    <div> 
      <section>
        <div className=" bg-secondary-100 py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24 ">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 md:ml-14">
              <p className="ml-2 text-secondary uppercase tracking-tighter">
                Work in progress!
              </p>
              <p className="text-5xl md:text-6xl font-bold mb-2">Launch Timeline</p>
              <p className="text-sm mb-4">
              Here's a walkthrough of the Nuclear launch and update process. Follow all of the steps to fully understand the launch and update process.
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #a6adba",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #a6adba",
                      borderRadius: "1%",
                    }}
                  ></div>

                  {timeline.map((item, key) =>
                    key % 2 === 0 ? (
                      <div
                        key={key}
                        className="mb-0 flex justify-between flex-row-reverse items-center w-full left-timeline"
                      >
                        <div className="order-1 w-5/12"></div>
                        <div className="order-1 w-5/12 px-1 py-4 text-right text-xs">
                          <p className="mb-3  text-secondary tracking-tighter">
                            {" "}
                            {item.date}{" "}
                          </p>
                          <h4 className="mb-3 font-bold leading-tight text-lg md:text-2xl tracking-tighter">
                            {item.title}
                          </h4>
                          <p className="text-sm text-opacity-100 tracking-tighter">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={key}
                        className="mb-0 flex justify-between items-center w-full right-timeline"
                      >
                        <div className="order-1 w-5/12"></div>

                        <div className="order-1  w-5/12 px-1 py-4">
                          <p className="mb-3  text-secondary tracking-tighter text-xs">
                            {item.date}
                          </p>
                          <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left tracking-tighter leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-sm  leading-snug  text-opacity-100">
                            {item.description ? item.description : ""}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeLine;
