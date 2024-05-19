import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ICourseDetails } from "../../utils/interface";
import "../SearchComponent/SearchComponent.css";
import SearchedResults from "../SearchedResults/SearchedResults";
import { BASE_URL } from "../../utils/interface";

export default function SearchComponent({ searchQuery }) {
  let [result, setResult] = useState<ICourseDetails[]>([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/courses/search?query=${searchQuery}`)
      .then((response) => {
        setResult(response.data.data);
      });
  }, [result]);

  return (
    <Container>
      <Row>
        <Col>
          {result.map((res) => (
            <SearchedResults searchData={res} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
