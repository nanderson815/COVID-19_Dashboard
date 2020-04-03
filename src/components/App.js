import React from "react";
import "../styles/App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="App">
      <Query query={ROOT_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading....</div>;
          if (error) return <div>Error!</div>;

          const dataToRender = data.locations;

          return <Dashboard data={dataToRender} />;
        }}
      </Query>
    </div>
  );
}

export default App;

const ROOT_QUERY = gql`
  {
    locations {
      Lat
      Long_
      Confirmed
      Deaths
      Recovered
      Admin2
      Province_State
      Country_Region
    }
  }
`;
