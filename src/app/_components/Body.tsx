"use client";
import Main from "./Main";
import KeyBenefits from "./KeyBenefits";
import About from "./About";
import ProductAndServices from "./ProductAndServices";
import Header from "./Header";
import { useModalStore } from "@/store/useModalStore";
import SidebarMenu from "@/components/SidebarMenu";
import PreviewResources from "@/components/PreviewResources/PreviewResources";
import OurTeam from "./OurTeam";
import ConnectWithUs from "./ConnectWithUs";
import Footer from "./Footer";
export default function Body() {
  const { openSidebar, openResources } = useModalStore();
  return (
    <div className={`h-full relative`}>
      {openResources && <PreviewResources />}
      {openSidebar && <SidebarMenu />}
      <Header />
      <Main />
      <About />
      <OurTeam />
      <KeyBenefits />
      <ProductAndServices />
      <ConnectWithUs />
      <Footer />
    </div>
  );
}
