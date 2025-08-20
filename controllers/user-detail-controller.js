import { userStore } from "../models/user-store.js";

export const userDetailsController = {
  async userDetails(request, response) {
    const userEmail = request.cookies.station;
    const viewData = {
      title: "User Details",
      loggedInUser: await userStore.getUserByEmail(userEmail),
    };
    console.log("User details rendering");
    response.render("user-details-view", viewData);
  },

  async editUserDetails(request, response) {
    const userEmail = request.cookies.station;
    const viewData = {
      title: "Edit User Details",
      loggedInUser: await userStore.getUserByEmail(userEmail),
    };
    console.log("Edit user details rendering");
    response.render("edit-user-details-view", viewData);
  },


};