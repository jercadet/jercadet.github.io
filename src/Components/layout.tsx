import Footer from "./footer";
import Header from "./header";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-8 mb-4">
      <div>
        <Header />
      </div>
      <div className="flex-1 my-12 pt-12">{children}</div>
      <div className="text-right overflow-y-auto m-8">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
