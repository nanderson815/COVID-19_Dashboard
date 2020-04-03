module.exports = {
  Query: {
    allLocations: async (parent, args, { models }) => {
      let Locations = args.country
        ? await models.Location.find({ Country_Region: args.country })
        : await models.Location.find({});
      return Locations;
    },
    allCountries: async (parent, args, { models }) => {
      let Countries = await models.Location.aggregate([
        {
          $group: {
            _id: {Country_Region: "$Country_Region"},
            Confirmed: { $sum: "$Confirmed" },
            Deaths: { $sum: "$Deaths" },
            Recovered: { $sum: "$Recovered" }
            
          }
        }
      ]);
      console.log(Countries);
      return Countries;
    }
  }
};
