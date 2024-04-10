import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ICourseDetails } from "../../utils/interface";
import SearchPageDropDown from "../../components/SearchPageDropDown/SearchPageDropDown"
import "../SearchComponent/SearchComponent.css";
import SearchedResults from "../SearchedResults/SearchedResults";
import { Link } from "react-router-dom";
export default function SearchComponent({ searchQuery }) {
  let [result, setResult] = useState<ICourseDetails[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/search?query=${searchQuery}`)
      .then((response) => {
        setResult(response.data.data);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={3}>
       <SearchPageDropDown/>
        </Col>
        <Col lg={9}>
          {result.map((res) => (
            <SearchedResults searchData={res} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
