import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import AboutUsView from "../views/AboutUsView/AboutUsView.vue";
import ContactView from "../views/ContactView/Contact.vue";
import OfferView from "@/views/OfferView/OfferView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Contact",
    name: "Contact",

    component: ContactView,
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: AboutUsView,
  },
  {
    path: "/Offer",
    name: "Offer",
    component: OfferView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
