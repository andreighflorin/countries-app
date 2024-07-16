import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Container from "./Components/UI/Container/Container";
import Search from "./Components/Search/Search";
import Spinner from "./Components/UI/Spinner/Spinner";
import Card from "./Components/UI/Card/Card";
import useFetch from "./hooks/useFetch";
import { useSelector } from "react-redux";

const base = "https://restcountries.com/v3.1/all";
const optional = "?&fields=name,capital,region,population,flags";
const apiUrl = `${base}${optional}`;

function App() {
  const data = useSelector((state) => state.data.countries);
  const isLoading = useSelector((state) => state.data.isLoading);
  const error = useSelector((state) => state.data.error);
  const filtered = useSelector((state) => state.data.filtered);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData(apiUrl);
  }, [fetchData]);

  return (
    <>
      <Header />
      <Container>
        {data && <Search />}
        {isLoading && <Spinner />}
        {error && (
          <h2 className="error">There is an error with the fetch request...</h2>
        )}
        {data && !filtered && <Card countries={data} />}
        {filtered && <Card countries={filtered} />}
      </Container>
    </>
  );
}

export default App;
