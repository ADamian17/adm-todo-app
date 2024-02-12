import Columns from "../../components/Columns";
import Hero from '../../components/Hero'
import ThemeProvider from "../../components/ThemeProvider";

const ColumnsContainer = () => {
  return (
    <>
      <ThemeProvider />
      <Hero />

      <Columns />
    </>
  )
};

export default ColumnsContainer;