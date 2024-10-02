import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ShopCategoryLoader from "@/components/loader/shop/shop-category-loader";

const CategoryFilter = ({ setCurrPage, shop_right = false }) => {
  const { data: categories, isLoading, isError } = useGetShowCategoryQuery();
  const router = useRouter();
  const dispatch = useDispatch();

  // handle category route
  const handleCategoryRoute = (title) => {
    setCurrPage(1);
    router.push(
      `/${shop_right ? "shop-right-sidebar" : "shop"}?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`,
      undefined,
      { scroll: false } // Thêm tùy chọn này để giữ nguyên vị trí cuộn
    );
    dispatch(handleFilterSidebarClose());
  };
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <ShopCategoryLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.data?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.data?.length > 0) {
    const category_items = categories.data;
    content = category_items.map((item) => (
      <li key={item.id}>
        <a
          onClick={() => handleCategoryRoute(item.name)}
          style={{ cursor: "pointer" }}
          className={
            router.query.category ===
            item.name.toLowerCase().replace("&", "").split(" ").join("-")
              ? "active"
              : ""
          }
        >
          {item.name} <span>{item.productCount}</span>
        </a>
      </li>
    ));
  }
  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Categories</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
