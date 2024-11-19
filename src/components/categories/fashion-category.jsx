import React from "react";
import { useRouter } from "next/router";
// internal
import ErrorMsg from "../common/error-msg";
import { ArrowRightLong } from "@/svg";
import { HomeTwoCateLoader } from "../loader";
import { useGetProductTypeCategoryQuery } from "@/redux/features/categoryApi";

const FashionCategory = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductTypeCategoryQuery("fashion");
  const router = useRouter();

  // handle category route
  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeTwoCateLoader loading={isLoading} />;
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
      <div key={item.id} className="col-xxl-4 col-lg-6">
        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
          <div
            className="tp-banner-thumb-2 include-bg transition-3"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <h3 className="tp-banner-title-2">
            <a
              className="cursor-pointer"
              onClick={() => handleCategoryRoute(item.name)}
            >
              {item.name}
            </a>
          </h3>
          <div className="tp-banner-btn-2">
            <a
              onClick={() => handleCategoryRoute(item.name)}
              className="cursor-pointer tp-btn tp-btn-border tp-btn-border-sm"
            >
              Shop Now <ArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <>
      <section className="tp-banner-area mt-20">
        <div className="container-fluid tp-gx-40">
          <div className="row tp-gx-20">{content}</div>
        </div>
      </section>
    </>
  );
};

export default FashionCategory;
