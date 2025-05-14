"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useState, useEffect } from "react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import AIOutput from "@/utils/schema"; // Assuming this contains mongoose model
import connectToDB from "@/utils/db"; // Import your MongoDB connection

// History interface for type checking
interface HISTORY {
  aiResponse: string;
  createdBy: string;
  createdAt: string;
}

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  // Connect to DB once, when the component mounts
  useEffect(() => {
    if (user) {
      connectToDB(); // Connect to DB only once when the user is available
      GetData(); // Fetch the data
    }
  }, [user]);

  const GetData = async () => {
    try {
      // Assuming AIOutput is a Mongoose model
      const result: HISTORY[] = await AIOutput.find({
        createdBy: user?.primaryEmailAddress?.emailAddress ?? "",
      }).exec();
      GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      // Assuming `aiResponse` is a string and we count its length as usage
      total = total + Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log(total);
  };

  return (
    <div className="m-5">
      <div className="bg-primary p-3 rounded-lg text-white">
        <h2 className="font-medium">Credits</h2>
        <div className="bg-[#9981f9] mt-3 rounded-full w-full h-2">
          <div
            className="bg-white rounded-full h-2"
            style={{
              width: (totalUsage / 40000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="my-2 text-sm">{totalUsage}/40,000 credits used</h2>
      </div>
      {/* <Button variant={'secondary'} className='my-3 w-full text-primary'>Upgrade</Button> */}
    </div>
  );
}

export default UsageTrack;
