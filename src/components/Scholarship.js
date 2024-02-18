import ScholarshipCard from "./ScholarshipCard";


export default function Scholarship({ scholarships }){
    return (
        <>
        {scholarships.map((scholarship) => (
          <ScholarshipCard scholarship={scholarship}/>
        ))}
        </>
    );
}