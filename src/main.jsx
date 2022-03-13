import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Profile from "./routes/profile";
import Login from "./routes/login";
import RequireAuth from "./RequireAuth";
import StoreProvider from "./store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
