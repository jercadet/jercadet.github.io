import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-8 mb-4">
      <Header />
      <div className="my-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
