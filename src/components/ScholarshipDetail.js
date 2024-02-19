import React from "react";
import axios from "axios";
import { ScholarshipContext } from "../context/main";

// import { Skeleton } from "@/components/ui/skeleton"
 
// function SkeletonCard() {
//   return (
//     <div className="flex flex-col space-y-3">
//       <Skeleton className="h-full w-full rounded-xl" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   )
// }

export default function ScholarshipDetail() {
  const [scholarshipData, setScholarshipData] = React.useState();
  const scholarshipsContext = React.useContext(ScholarshipContext);

  React.useEffect(() => {
    const fetchData = async () => {
      
      console.log("data",scholarshipsContext.sName)
      const dataToSend = {
        api_key: '4f1d9e8c3b2a7f6e5d0c9b8a7f6e5d0c',
        url: `https://www.myscheme.gov.in/schemes/${scholarshipsContext.sName}`,
        // Add other data properties as needed
      };
      // const url = `https://scheme-scraper.vercel.app`;
      const url = `https://scheme-scraper.vercel.app/`
      const response = await axios.post(url, dataToSend);
      console.log(response.data);
      setScholarshipData(response.data['data']['details']);
    };
    fetchData();
},[scholarshipsContext.sName]
  );
  return (
    <>
    {scholarshipData}
    </>
  );
}
