import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  console.log(restaurant);

  const dispatch = useDispatch();



  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.cards[0].card.card.info.name}</h2>
        <img
          src={
            IMG_CDN_URL + restaurant?.cards[0].card.card.info.cloudinaryImageId
          }
          alt="restaurent image"
          width={200}
        />
        <h3>{restaurant?.cards[0].card.card.info.city}</h3>
        <h3>{restaurant?.cards[0].card.card.info.avgRating} stars</h3>
        <h3>{restaurant?.cards[0].card.card.info.costForTwoMessage}</h3>
        
        <div>
          {console.log(
            Object.values(
              restaurant?.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards
            )
          )}
        </div>

        
      </div>
    </div>
  );
};

export default RestaurantMenu;
