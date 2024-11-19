import React from "react";
import { getMenuData } from "@/data/menu-data";
import Link from "next/link";
import Image from "next/image";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { HomeNewArrivalPrdLoader } from "@/components/loader";
import ErrorMsg from "@/components/common/error-msg";
import ProductItem from "@/components/products/electronics/product-item";

// internal
import cosmetic from "@assets/img/instagram/3/instagram-6.jpg";
import fashion from "@assets/img/instagram/2/insta.jpg";
import jewelry from "@assets/img/instagram/4/instagram-4.jpg";
import electronics from "@assets/img/instagram/5/insta.jpg";

const home_data = [
  { id: 1, link: "/", img: cosmetic },
  { id: 2, link: "/home-2", img: fashion },
  { id: 3, link: "/home-3", img: jewelry },
  { id: 4, link: "/home-4", img: electronics },
];
const Menus = () => {
  const menuData = getMenuData();

  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({
    type: "electronics",
    query: "new=true",
  });

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeNewArrivalPrdLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }

  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }

  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;

    content = (
      <div className="row">
        {product_items.slice(0, 4).map((item) => (
          <div key={item.id} className="col-md-3">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    );
  } else {
    // If there are no products or an error occurs, set content to an empty array
    content = [];
  }
  return (
    <ul>
      {menuData.map((menu) =>
        menu.homes ? (
          <li key={menu.id} className="has-dropdown has-mega-menu">
            <Link href={menu.link}>{menu.title}</Link>
            <div className="home-menu tp-submenu tp-mega-menu">
              <div className="container-fluid">
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
                  {home_data.map((item) => (
                    <div className="col" key={item.id}>
                      <div className="tp-instagram-item-2">
                        <Image
                          src={item.img}
                          alt="instagram img"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <div className="tp-instagram-icon-2">
                          <Link href={item.link} className="popup-image">
                            <i class="fa-regular fa-house"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
                {menu.home_pages.map((home, i) => (
                  <div key={i} className="col">
                    <div className="home-menu-item"></div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ) : menu.products ? (
          <li key={menu.id} className="has-dropdown has-mega-menu ">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu tp-mega-menu mega-menu-style-2">
              {menu.product_pages.map((p, i) => (
                <li key={i} className="has-dropdown">
                  <Link href={p.link} className="mega-menu-title">
                    {p.title}
                  </Link>
                  <ul className="tp-submenu">
                    {p.mega_menus.map((m, i) => (
                      <li key={i}>
                        <Link href={m.link}>{m.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ) : menu.sub_menu ? (
          <li key={menu.id} className="has-dropdown">
            <Link href={menu.link}>{menu.title}</Link>
            <ul className="tp-submenu">
              {menu.sub_menus.map((b, i) => (
                <li key={i}>
                  <Link href={b.link}>{b.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Menus;
