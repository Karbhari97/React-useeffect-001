import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Search() {
  let [dataa, setDataa] = useState([]);
  let [catigorey, setCatigorey] = useState("pizza");
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${catigorey}&app_id=756aaf77&app_key=2472b42af63b395b80faea4fc936c81a`
      )
      .then((res) => {
        setDataa(res.data.hits);
      })
      .catch((error) => {
        alert("Not Found ");
      });
  }, [catigorey]);

  return (
    <div className="container">
      <div className="input-group mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Favourite Recipe"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(event) => {
            setCatigorey(event.target.value);
          }}
        />
        <button
          className="btn btn-success p-2"
          type="button"
          id="button-addon2"
          
        >
          Button
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {dataa.map((ele) => {
          console.log(ele.recipe);
          return (
            <div className="mt-5" style={{ padding: "19px" }}>
              <div
                class="card"
                style={{
                  width: "18rem",
                  height: "30rem",
                  boxShadow: "0px 0px 10px black",
                }}
              >
                <img src={ele.recipe.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{ele.recipe.label}</h5>
                  <p class="card-text">
                    <span>Dish Type :</span> {ele.recipe.dishType} <br />
                  </p>
                  <a href={ele.recipe.url} class="btn btn-primary">
                    For more ...
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
