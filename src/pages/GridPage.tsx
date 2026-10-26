import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MinValueFilter } from "../components/MinValueFilter";
import { ResourceCard } from "../components/ResourceCard";
import { getGreenhouseResources, type GreenhouseResource } from "../modules/greenhouseApi";
import { ROUTES } from "../Routes";
import "./GridPage.css";

// Плитка ресурсов: фильтр по минимальному значению и карточки в две колонки
export const GridPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // значение фильтра хранится в адресе (?min_value=), поэтому сохраняется после перехода в ленту и обратно
  const [minValue, setMinValue] = useState(searchParams.get("min_value") ?? "");
  const [resources, setResources] = useState<GreenhouseResource[]>([]);

  useEffect(() => {
    const filter = searchParams.get("min_value");
    setResources(getGreenhouseResources(filter ? Number(filter) : undefined));
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams(minValue.trim() ? { min_value: minValue.trim() } : {});
  };

  return (
    <section className="gridPage">
      <h1 className="gridPageTitle">Ресурсы</h1>
      <MinValueFilter value={minValue} setValue={setMinValue} onSubmit={handleSearch} />

      <Container className="gridPageCards">
        {resources.length === 0 ? (
          <p className="gridPageEmpty">Ничего не найдено. Уменьшите значение фильтра.</p>
        ) : (
          <Row xs={2} className="g-3">
            {resources.map((resource) => (
              <Col key={resource.resource_id}>
                <ResourceCard
                  resource={resource}
                  onClick={(id) => navigate(`${ROUTES.FEED}/${id}`)}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};
