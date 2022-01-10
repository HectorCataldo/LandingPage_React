import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import Stickyfooter from "./components/Stickyfooter";

function App() {
  return (
    <Layout>
    <Banner/>
    <Explanation/>
    <Presentation/>
    <Stickyfooter/>
    </Layout>
  );
}

export default App;
