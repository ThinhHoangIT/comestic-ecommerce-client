import home_1 from "@assets/img/menu/menu-home-1.jpg";
import home_2 from "@assets/img/menu/menu-home-2.jpg";
import home_3 from "@assets/img/menu/menu-home-3.jpg";
import home_4 from "@assets/img/menu/menu-home-4.jpg";
import i18next from "i18next";

export const getMenuData = () => [
  {
    id: 1,
    homes: true,
    title: i18next.t("menu.home"),
    link: "/",
    home_pages: [
      {
        img: home_1,
        title: i18next.t("menu.electronics"),
        link: "/",
      },
      {
        img: home_2,
        title: i18next.t("menu.fashion"),
        link: "/home-2",
      },
      {
        img: home_3,
        title: i18next.t("menu.beauty"),
        link: "/home-3",
      },
      {
        img: home_4,
        title: i18next.t("menu.jewelry"),
        link: "/home-4",
      },
    ],
  },
  {
    id: 2,
    products: true,
    title: i18next.t("menu.products"),
    link: "/shop",
    product_pages: [
      {
        title: i18next.t("menu.shopPage"),
        link: "/shop",
        mega_menus: [
          { title: i18next.t("menu.onlyCategories"), link: "/shop-category" },
          { title: i18next.t("menu.shopGridWithSidebar"), link: "/shop" },
          { title: i18next.t("menu.productDetails"), link: "/product-details" },
        ],
      },
      {
        title: i18next.t("menu.products"),
        link: "/product-details",
        mega_menus: [
          { title: i18next.t("menu.productSimple"), link: "/product-details" },
          // { title: "With Video", link: "/product-details-video" },
          // { title: "With Countdown Timer", link: "/product-details-countdown" },
          // { title: "Variations Swatches", link: "/product-details-swatches" },
        ],
      },
      {
        title: i18next.t("menu.eCommerce"),
        link: "/shop",
        mega_menus: [
          { title: i18next.t("menu.shoppingCart"), link: "/cart" },
          { title: i18next.t("menu.compare"), link: "/compare" },
          { title: i18next.t("menu.wishlist"), link: "/wishlist" },
          { title: i18next.t("menu.checkout"), link: "/checkout" },
          { title: i18next.t("menu.myAccount"), link: "/profile" },
        ],
      },
      {
        title: i18next.t("menu.morePages"),
        link: "/shop",
        mega_menus: [
          { title: i18next.t("setting.login"), link: "/login" },
          { title: i18next.t("setting.register"), link: "/register" },
          { title: i18next.t("setting.forgotPassword"), link: "/forgot" },
        ],
      },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: i18next.t("menu.shop"),
    link: "/shop",
    sub_menus: [
      { title: "Shop", link: "/shop" },
      { title: "Right Sidebar", link: "/shop-right-sidebar" },
      { title: "Hidden Sidebar", link: "/shop-hidden-sidebar" },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: i18next.t("menu.coupons"),
    link: "/coupon",
  },
  {
    id: 5,
    sub_menu: true,
    title: i18next.t("menu.blogs"),
    link: "/blog",
    sub_menus: [
      { title: "Blog Standard", link: "/blog" },
      { title: "Blog Grid", link: "/blog-grid" },
      { title: "Blog List", link: "/blog-list" },
      { title: "Blog Details", link: "/blog-details" },
      { title: "Blog Details Full Width", link: "/blog-details-2" },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: i18next.t("menu.contact"),
    link: "/contact",
  },
];

// mobile_menu
export const getMobileMenu = () => [
  {
    id: 1,
    homes: true,
    title: i18next.t("menu.home"),
    link: "/",
    home_pages: [
      {
        img: home_1,
        title: i18next.t("menu.electronics"),
        link: "/",
      },
      {
        img: home_2,
        title: i18next.t("menu.fashion"),
        link: "/home-2",
      },
      {
        img: home_3,
        title: i18next.t("menu.beauty"),
        link: "/home-3",
      },
      {
        img: home_4,
        title: i18next.t("menu.jewelry"),
        link: "/home-4",
      },
    ],
  },
  {
    id: 2,
    sub_menu: true,
    title: "Products",
    link: "/shop",
    sub_menus: [
      { title: "Shop", link: "/shop" },
      { title: "Right Sidebar", link: "/shop-right-sidebar" },
      { title: "Hidden Sidebar", link: "/shop-hidden-sidebar" },
      { title: "Only Categories", link: "/shop-category" },
      { title: "Product Simple", link: "/product-details" },
      { title: "With Video", link: "/product-details-video" },
      { title: "With Countdown Timer", link: "/product-details-countdown" },
      { title: "Variations Swatches", link: "/product-details-swatches" },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: "eCommerce",
    link: "/cart",
    sub_menus: [
      { title: "Shopping Cart", link: "/cart" },
      { title: "Compare", link: "/compare" },
      { title: "Wishlist", link: "/wishlist" },
      { title: "Checkout", link: "/checkout" },
      { title: "My account", link: "/profile" },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: "More Pages",
    link: "/login",
    sub_menus: [
      { title: "Login", link: "/login" },
      { title: "Register", link: "/register" },
      { title: "Forgot Password", link: "/forgot" },
      { title: "404 Error", link: "/404" },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: "Coupons",
    link: "/coupon",
  },
  {
    id: 5,
    sub_menu: true,
    title: "Blog",
    link: "/blog",
    sub_menus: [
      { title: "Blog Standard", link: "/blog" },
      { title: "Blog Grid", link: "/blog-grid" },
      { title: "Blog List", link: "/blog-list" },
      { title: "Blog Details", link: "/blog-details" },
      { title: "Blog Details Full Width", link: "/blog-details-2" },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];
