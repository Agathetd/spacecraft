import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import LoginScreen from "./src/screens/LoginScreen";
import { Offline } from "./src/screens/Offline";
import { ScreenContainer } from "./src/screens/ScreenContainer";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
//import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ScreenContainer title={"Offline"} />
    </QueryClientProvider>

    //<TermsScreen />;
    //<LoginScreen />;
  );
};

export default App;
