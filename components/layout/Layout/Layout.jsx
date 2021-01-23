// import Alert from "../../alert";
import Footer from "../../footer";
import Meta from "../../meta";
import Navigation from "../Navigation/Navigation";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
