import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// internal
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import ProfileArea from "@/components/my-account/profile-area";
import { useGetUserOrdersQuery } from "@/redux/features/order/orderApi";
import Loader from "@/components/loader/loader";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  console.log(user?._id);
  const {
    data: order,
    isError,
    isLoading,
  } = useGetUserOrdersQuery(user?._id, {
    skip: !user?._id,
  });
  const orderData = order?.data;
  useEffect(() => {
    const isAuthenticate = Cookies.get("userInfo");
    if (!isAuthenticate) {
      router.push("/login");
    }
  }, [router]);

  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Loader loading={isLoading} />
      </div>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Profile" />
      <HeaderTwo style_2={true} />
      <ProfileArea orderData={orderData} />
      <Footer style_2={true} />
    </Wrapper>
  );
};

export default ProfilePage;
