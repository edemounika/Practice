// import { IMG_CDN_URL } from "../constants";

// const RestaurentCard = ({
//     name,
//     cuisines,
//     cloudinaryImageId,
//     totalRatingsString,
//   }) => {
//     return (
//       <div className="card">
//         <img
//           src={
//             IMG_CDN_URL+
//             cloudinaryImageId
//           }
//         />
//         <h2> {name}</h2>
//         <h4>{cuisines.join(",")}</h4>
//         <h5>{totalRatingsString}</h5>
//       </div>
//     );
//   };
//   export default RestaurentCard;

// import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const FoodItem = () => {
  return (
    <div >
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/enbmyibbnmg6ksse9siv" width={250}/>
      <h2 className="font-bold text-1xl"> RestroName-kritinga</h2>
      <h3 className="font-bold text-1xl"> price-150rs</h3>
    </div>
  );
};

export default FoodItem;
