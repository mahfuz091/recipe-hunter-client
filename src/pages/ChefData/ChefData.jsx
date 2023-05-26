import React, { useEffect, useState } from "react";
import ChefDataCard from "../ChefDataCard/ChefDataCard";

const ChefData = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-mahfuz091.vercel.app/chef"
    )
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="text-center"><h2 className=" text-center p-4 uppercase font-bold mt-12 inline-block" style={{ color: "#411e08", background: '#ffc033' }}>Always Tasty Food</h2 ></div>
      <h2 className='text-center text-5xl mt-12 uppercase font-extrabold mb-20 ' style={{ color: "#411e08" }} > Choose our chef & Enjoy</h2 >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  wrapper'>
        {chefData.map((chef) => (
          <ChefDataCard key={chef.id} chef={chef}></ChefDataCard>
        ))}
      </div>

    </>
  );
};

export default ChefData;
