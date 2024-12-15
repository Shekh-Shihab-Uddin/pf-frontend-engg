import i18next from "i18next";
import homeBN from "./bn/home.json";
import homeEN from "./en/home.json";
import projectsEN from "./en/projects.json";
import projectsBN from "./bn/projects.json";
import testimonyEN from "./en/testimonial.json";
import testimonyBN from "./bn/testimonial.json";
import contactEN from "./en/contact.json";
import contactBN from "./bn/contact.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en-US",
    resources: {
      "en-US": {
        home: homeEN,
        projects: projectsEN,
        testimonial: testimonyEN,
        contact: contactEN,
      },
      bn: {
        home: homeBN,
        projects: projectsBN,
        testimonial: testimonyBN,
        contact: contactBN,
      },
    },
  });
