import Meta from "./Meta";
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
