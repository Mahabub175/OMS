import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { router } from "./routes/routes.jsx";
import { ConfigProvider } from "antd";
import { theme } from "./utilities/configs/antDesignConfigs.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </PersistGate>
        <Toaster position="top-center" richColors />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
