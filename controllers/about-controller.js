export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "About This Application",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
  async addStation(request, response) {
    const newStation = {
      title: request.body.title,
    };
    console.log(`adding station ${newStation.title}`);
    response.redirect("/dashboard");
  },
};
