import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vansdata, setVansData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("/api/vans")
          .then((response) => response.json())
          .then((data) => {
            setVansData(data.vans);
            console.log(data);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const vanElements = vansdata.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

export default Vans;
