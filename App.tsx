import { Provider as StoreProvider } from "react-redux";

import { store } from "./redux/store";

import Navigation from "./src/Navigation";

export default function App() {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
}
