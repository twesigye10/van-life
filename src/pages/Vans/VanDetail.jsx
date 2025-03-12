import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VanDetail() {
  const [vanData, setVanData] = useState(null);
  const params = useParams();
  console.log(params);

  //   van detail
  useEffect(() => {
    const fetchData = () => {
      try {
        fetch(`/api/vans/${params.id}`)
          .then((response) => response.json())
          .then((data) => {
            setVanData(data.vans);
            console.log(data);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {vanData ? (
        <div className="van-detail">
          <img src={vanData.imageUrl} />
          <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
          <h2>{vanData.name}</h2>
          <p className="van-price">
            <span>${vanData.price}</span>/day
          </p>
          <p>{vanData.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
