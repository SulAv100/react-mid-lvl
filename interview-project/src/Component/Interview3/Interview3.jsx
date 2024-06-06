import React from "react";
import "./Interview3.css";
import { useQuery } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";

function Interview3() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: () => 
      fetch("http://universities.hipolabs.com/search?country=United+States").then((response) => response.json()),
    
  });
    

  const FetchData = ({index,style})=>(
    <div style={style} className="tanstack-data">
            {data[index].name}
        </div>
  )

  if(error) return <span>An error has occured</span>
  if(isLoading) return <span> Data is fetching</span>

  return (
    <>
      <div className="tanstack-container">
        <List
            height={300}
            itemCount={data.length}
            itemSize={40}
            width={300}
        >
            {FetchData}
        </List>
        <button>Fetch Post</button>
      </div>
    </>
  );
}

export default Interview3;
