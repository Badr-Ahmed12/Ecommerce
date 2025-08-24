import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import OffersGrid from "@/components/Grid";
import AmazonNavbar from "@/components/Nav";

export default function Home() {
  return (
    <div>
    <AmazonNavbar />
     <Banner /> 
     <OffersGrid />
     <Footer />
    </div>
  );
}
