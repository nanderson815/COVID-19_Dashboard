module.exports = {
  Query: {
    locations: async (parent, args, { models }) => {
      const Locations = await models.Location.find({});
      return Locations;
    }
  }
};
