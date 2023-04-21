import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from '.././src/Metha/sup-compo/handleCart/sup-compo/dataContext';
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import { Suspense } from 'react';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLangs: [ "th","en", "ch"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.render(
  <CartProvider>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </CartProvider>,
  document.getElementById("root")
);
