const { RestaurantSchema } = require("./Resturant.Schema");

const getAllResturants = () => {
    return new Promise((resolve, reject) => {
      try {
        RestaurantSchema.find({})
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  };

module.exports = { getAllResturants };