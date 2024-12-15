import ContactMe from "./features/ContactMe";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Landing from "./features/Landing";
import LatestProject from "./features/LatestProject";
import { Box } from "@chakra-ui/react";
import Testimony from "./features/Testimonial";
function App() {
  return (
    <>
      <main>
        <Box>
          <Header />
          <Landing />
          <LatestProject />
          <ContactMe />
          <Testimony />
        </Box>
      </main>
      <Footer />
    </>
  );
}

export default App;
