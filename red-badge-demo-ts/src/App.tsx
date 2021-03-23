import React from "react";
import PropsExample from "./components/PropsExample";
import PropsMappingExample from "./components/PropsMapping";

function App() {
  const visitedPlaces = ["Montego Bay", "Hong Kong", "Cancun", "New Orleans"];
  return (
    <div>
      <PropsExample name="Tom" business="MySpace" />
      <PropsMappingExample visited={visitedPlaces} />
    </div>
  );
}

export default App;

