// import {Outlet} from "react-router-dom";
import { Component, useState } from "react";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import UserContext from "../utils/userContext";


// //****************This Example combined class based componentprofile and function componenet profile */
// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <p>This  is About us</p>
//       <Profile name={"Mounika"}/>
//       <ProfileFunctionalComponent name={"Mounikafunction"}/>
//       {/* <Outlet /> */}
//     </div>
//   );
// };

// export default About;
// //***************************************** */

// About class based componennt

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-constructor");
  }

  componentDidMount() {
    //Api call

    console.log(" parent -ComponentDidMount");
  }

  render() {
    console.log("parent -render");
    return (
      <div>
        <h1>About us page</h1>
        {/* //context used in classbased components */}
        <UserContext.Consumer>
          {({user}) => <h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>}
          </UserContext.Consumer>
        <p>This is About us</p>
        <Profile name={"first child"} />
        {/* <Profile name={"second child"} /> */}

        {/* <Outlet /> */}
      </div>
    );
  }
}
export default About;
