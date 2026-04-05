import { ReactNode } from "react";
import CustomCursor from "./CustomCursor";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <CustomCursor />
    <Navigation />
    <CartDrawer />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
