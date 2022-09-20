import React from "react";
import Heading from "../ui/Heading";

const TimeLine = () => {
  const timeline = [
    {
      date: "03 Oct 2022",
      title: "Pre launch",
      description: "Pre launch will be open to the public",
    },
    {
      date: "05 Oct 2022",
      title: "Pre launch closed",
      description: "",
    },
    {
      date: "15 Nov 2022",
      title: "Opened only for prebooked users",
      description: "",
    },
    {
      date: "15 Nov 2022",
      title: "Alpha release",
      description: "Alpha release for the user with Shopify module",
    },
    {
      date: "30 Nov 2022",
      title: "Beta release ",
      description: "Beta release with bug fix",
    },
    {
      date: "18-24 Dec 2022",
      title: "Yeezy  module",
      description: "Yeezy module will be added to the bot  ",
    },
    {
      date: "15-20 Jan 2023",
      title: "Chat system",
      description:
        "In built chat system for Nuclear software will be released for all the bot users.",
    },
    {
      date: "15-20 Feb 2023",
      title: "Supreeme module",
      description: "Yeezy module will be added to the bot ",
    },
    {
      date: "15-20 Mar 2023",
      title: "Footlocker and more Shopify",
      description: "footlocker will be added with more shopify site ",
    },
    {
      date: "15-20 April 2023",
      title: "Update you soon",
      description:
        "slowly buy surely we will add all the mazor seneaker retail site in owr bot",
    },
  ];
  return (
    <div>
      <section>
        <div class=" bg-secondary-100 py-8">
          <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24 ">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 md:ml-14">
              <p class="ml-2 text-secondary uppercase tracking-tighter">
                Working Process
              </p>
              <p class="text-5xl md:text-6xl font-bold mb-2">Launch Timeline</p>
              <p class="text-sm mb-4">
                Here’s your guide to the launch and update process Nuclear. Go through all the steps to know the exact
                process of the launch and update.
              </p>
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #a6adba",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    class="border-2-2 border-yellow-555 absolute h-full border"
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
                        class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                      >
                        <div class="order-1 w-5/12"></div>
                        <div class="order-1 w-5/12 px-1 py-4 text-right text-xs">
                          <p class="mb-3  text-secondary tracking-tighter">
                            {" "}
                            {item.date}{" "}
                          </p>
                          <h4 class="mb-3 font-bold leading-tight text-lg md:text-2xl tracking-tighter">
                            {item.title}
                          </h4>
                          <p class="text-sm text-opacity-100 tracking-tighter">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={key}
                        class="mb-8 flex justify-between items-center w-full right-timeline"
                      >
                        <div class="order-1 w-5/12"></div>

                        <div class="order-1  w-5/12 px-1 py-4">
                          <p class="mb-3  text-secondary tracking-tighter text-xs">
                            {item.date}
                          </p>
                          <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left tracking-tighter leading-tight">
                            {item.title}
                          </h4>
                          <p class="text-sm  leading-snug  text-opacity-100">
                            {item.description ? item.description : ""}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <img
                  class="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimeLine;
