import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
export default function SearchPage() {
  function useQuery() {
    const { search } = useLocation();
    const data = search.split("=");
    return data[1];
  }

  const query = useQuery();
  return (
    <>
      <Header />
      <SearchComponent searchQuery={query} />
      <Footer />
    </>
  );
}
