import React from "react";

// Updated to accept totalItems and itemsPerPage as props
const Pagination = ({ pageNo, setPageNo, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems/itemsPerPage)
  const prevThreeNoArr = Array.from ({ length:2 }, (_,index) => pageNo -1- index
  ).filter((value)=>value > 0 )
  .reverse();
   console.log(prevThreeNoArr)
  const nextFourNoArr = Array.from(
    { length :4 },
    (_,index) =>
      pageNo + index
    
  ).filter((value) => value <= totalPages);

  const paginationArr = [...prevThreeNoArr, ...nextFourNoArr]

  const handleNext = () => {
    if(pageNo < totalPages){
      setPageNo(pageNo + 1);
    }
    
  };

  const handlePrev = () => {
    if(pageNo > 1){
      setPageNo(pageNo - 1);
    }
    
  };

  return (
    <div className="flex justify-center items-center space-x-4 py-4">
      { pageNo > 1 && <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        {"<"}
      </button>
 }
      
     {paginationArr.map((value) =>{
      return(

  <div key={value} 
  
  onClick={() => setPageNo(value)} 
  className={`px-4 py-2  rounded cursor-pointer 
    ${value === pageNo
      ? "bg-black text-white" :"bg-gray-300 hover:bg-gray-400" 

    } `} >
    
    {value}</div>
      )
     })} 
     {pageNo < totalPages &&(
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        {">"}
      </button>
      )}
    </div>
  );
};

export default Pagination;

