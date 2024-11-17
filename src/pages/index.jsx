import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import BeautyBanner from "@/components/banner/beauty-banner";
import BeautyCategory from "@/components/categories/beauty-category";
import BeautyFeatured from "@/components/features/beauty-featured";
import ProductArea from "@/components/products/beauty/product-area";
import BeautyOfferBanner from "@/components/offer-banner/beauty-offer-banner";
import ProductAreaTwo from "@/components/products/beauty/product-area-2";
import TrendingSpecialPrd from "@/components/products/beauty/trending-special-prd";
import BeautyTestimonial from "@/components/testimonial/beauty-testimonial";
import FeatureArea from "@/components/features/feature-area";
import InstagramArea from "@/components/instagram/instagram-area";
import Footer from "@/layout/footers/footer";
// import UserChatWidget from "@/components/chat/UserChatWidget";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Header />
      <BeautyBanner />
      <BeautyCategory />
      <BeautyFeatured />
      <ProductArea />
      <BeautyOfferBanner />
      <ProductAreaTwo />
      <TrendingSpecialPrd />
      <BeautyTestimonial />
      <FeatureArea />
      <InstagramArea />
      <Footer style_3={true} />
      {/* <UserChatWidget /> */}
    </Wrapper>
  );
}
