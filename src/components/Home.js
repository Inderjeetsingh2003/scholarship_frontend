import Header from "./Header";
import Scholarship from "./Scholarship";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ScholarshipContext } from "../context/main";
import ScholarshipDetail from "./ScholarshipDetail"
export default function Home() {
  const scholarshipsContext = useContext(ScholarshipContext);
  const [pageNo, setPageNo] = React.useState(1);
  const [totalScholarships, setTotalScholarships] = useState(null)
  const handleNextPageClick = () => {
    setPageNo((pageNo) => pageNo + 1);
    scholarshipsContext.nextPage();
  };
  const handlePrePageClick = () => {
    if (pageNo != 1){
    setPageNo((pageNo) => pageNo - 1);
    scholarshipsContext.prePage();}
  };
  const fetchData = async () => {
    const url = `https://api.myscheme.gov.in/search/v4/schemes?lang=en&keyword=&sort=&from=${scholarshipsContext.index}&size=10`;

    const headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,gu;q=0.7",
      Origin: "https://www.myscheme.gov.in",
      "Sec-Ch-Ua":
        '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      "Sec-Ch-Ua-Mobile": "?1",
      "Sec-Ch-Ua-Platform": '"Android"',
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36",
      "X-Api-Key": "tYTy5eEhlu9rFjyxuCr7ra7ACp4dv1RH8gWuHTDc",
    };

    try {
      // const data = {}
      const response = await axios.get(url, { headers });
      console.log(response.data["data"]["hits"]["items"]);
      scholarshipsContext.handleScholarships(
        response.data["data"]["hits"]["items"]
      );
      
      console.log(response.data['data']['summary']['total']);
      setTotalScholarships(response.data['data']['summary']['total'])
    } catch (error) {
      console.error("Error fetching scheme data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [scholarshipsContext.index]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="font-sans">
      <Header />
      <div className="flex flex-row gap-2 bg-blue-50 pt-24 px-1 ">
        <div className="flex flex-row justify-center gap-2 px-4">
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Gender
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Student
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              State
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Age
            </a>
          </div>

          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Caste
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Residence
            </a>
          </div>

          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Residence
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Minority
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              Benefit Type
            </a>
          </div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-black hover:bg-transparent  font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              DBT Scheme
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div class="h-[25px] border-l-1 border-gray-500 mx-2 border "></div>
          <div
            type="button"
            class="group flex shrink-0 items-center rounded-lg transition"
          >
            <a
              class="inline-block border rounded-full border-black  px-4 pb-1  text-White hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 font-sans font-semibold tracking-wider text-m"
              href="#"
            >
              All Filters
            </a>
          </div>
        </div>
      </div>
      <div class="flex bg-blue-50 h-1/3">
        <div class="flex-shrink-0 w-1/3 p-4 ">
        <div class="overflow-y-auto max-h-screen">
          {scholarshipsContext.scholarships && (
            <Scholarship scholarships={scholarshipsContext.scholarships} />
          )}
          
          </div>
          <ol className="flex justify-center gap-1 text-xs font-medium pt-2">
            <li>
              <div
                href="#"
                className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${pageNo != 1 ? 'cursor-pointer' : ''}`}
                onClick={handlePrePageClick} 
              >
                <span className="sr-only"  >Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>

            <li>
              <div
                
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                {pageNo}
              </div>
            </li>

            <li>
              <div
                
                className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${pageNo != Math.ceil(totalScholarships/10) ? 'cursor-pointer' : ''}`}
                onClick={handleNextPageClick}
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ol>
        </div>

        {/* <!-- Right Section --> */}
        <div class="flex-shrink-0 w-2/3 p-4 ">
          <div class="overflow-y-auto max-h-screen">
            <ScholarshipDetail/>
            
          </div>
        </div>
      </div>
    </div>
  );
}
