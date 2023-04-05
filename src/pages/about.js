import Meta from "@/components/Meta";
import Tiptap from "@/components/Tiptap";

const About = () => {
  return (
    <div>
      <Meta title="About" keywords="about keywords" />
      <h1>About</h1>
      <p>
        A simple next js example app that uses a very simple api hooked upto a
        static json file for the blog articles
      </p>

      <Tiptap />
    </div>
  );
};

export default About;
