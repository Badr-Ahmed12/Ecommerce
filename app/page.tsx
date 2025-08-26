import Banner from "@/components/Banner";
import BestSellers from "@/components/BestSellers";
import BrandsSlider from "@/components/Brands";
import FeaturedCategories from "@/components/Featured";
import FlashSale from "@/components/FlashSales";
import Footer from "@/components/Footer";
import OffersGrid from "@/components/Grid";
import Navbar from "@/components/Nav";
import CustomerReviews from "@/components/Testmenoil";

export default function Home() {
  return (
    <div>
    <Navbar />
     <Banner /> 
     <OffersGrid />
     <FeaturedCategories />
     <BestSellers />
     <FlashSale />
     <BrandsSlider />
     <CustomerReviews />
     <Footer />
    </div>
  );
}
