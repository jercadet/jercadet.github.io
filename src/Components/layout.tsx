import Footer from "./footer";
import Header from "./header";



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
