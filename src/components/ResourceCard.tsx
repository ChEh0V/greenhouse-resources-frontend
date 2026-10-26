import { Card } from "react-bootstrap";
import type { GreenhouseResource } from "../modules/greenhouseApi";
import { imageOrDefault } from "../modules/media";
import "./ResourceCard.css";

interface ResourceCardProps {
  resource: GreenhouseResource;
  onClick: (resourceId: number) => void;
}

// Карточка ресурса в плитке: изображение, название, поле фильтрации и лайки
export const ResourceCard = ({ resource, onClick }: ResourceCardProps) => (
  <Card className="resourceCard" onClick={() => onClick(resource.resource_id)}>
    <Card.Img
      variant="top"
      className="resourceCardImage"
      src={imageOrDefault(resource.image_url)}
      alt={resource.resource_name}
    />
    <Card.Body className="resourceCardBody">
      <Card.Title className="resourceCardName">{resource.resource_name}</Card.Title>
      <div className="resourceCardValue">от {resource.min_value}</div>
      <div className="resourceCardLikes">♥ {resource.likes_count}</div>
    </Card.Body>
  </Card>
);
