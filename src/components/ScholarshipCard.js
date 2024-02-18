import { ScholarshipContext } from "../context/main";
import React from "react";

export default function ScholarshipCard({ scholarship }){
  const scholarshipsContext = React.useContext(ScholarshipContext);
    return(
        <div className="p-4 bg-gray-100 rounded-lg m-2 cursor-pointer" onClick={()=>scholarshipsContext.setSName(scholarship['fields']['slug'])}>
              <div className="text-sm font-light">
                {scholarship['fields']['nodalMinistryName']}
              </div>
              <div className="text-m font-bold text-indigo-600">
                {scholarship['fields']['schemeName']}
              </div>
              <div className="text-m pt-2 font-medium line-clamp-3 ">
                {scholarship['fields']['briefDescription']}
              </div>
            </div>
    );
}