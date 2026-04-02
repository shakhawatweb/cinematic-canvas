import { ReactNode } from "react";
import CustomCursor from "./CustomCursor";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <CustomCursor />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
