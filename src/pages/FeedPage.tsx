import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getGreenhouseResourceFeed, type GreenhouseResource } from "../modules/greenhouseApi";
import { imageOrDefault, videoOrDefault } from "../modules/media";
import { ROUTES } from "../Routes";
import "./FeedPage.css";

// Лента: одна карточка ресурса поверх вертикального видео
export const FeedPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState<GreenhouseResource | undefined>();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setResource(getGreenhouseResourceFeed(id ? Number(id) : undefined));
    setExpanded(false);
  }, [id]);

  if (!resource) {
    return <p className="feedEmpty">Ресурс не найден.</p>;
  }

  const showNext = () => {
    const nextResource = getGreenhouseResourceFeed(resource.resource_id, true);
    if (nextResource) navigate(`${ROUTES.FEED}/${nextResource.resource_id}`);
  };

  return (
    <section className="feed">
      {/* key пересоздаёт видео при смене карточки, иначе браузер оставит старый источник */}
      <video
        key={resource.resource_id}
        className="feedVideo"
        autoPlay
        muted
        loop
        playsInline
        poster={imageOrDefault(resource.image_url)}
        src={videoOrDefault(resource.video_url)}
      />

      {/* справа: лайки, два поля по теме и кнопка «следующий» */}
      <aside className="feedSide">
        <span className="feedAction">
          ♥<em>{resource.likes_count}</em>
        </span>
        <span className="feedField">
          <small>ед. изм.</small>
          {resource.unit}
        </span>
        <span className="feedField">
          <small>мин.</small>
          {resource.min_value}
        </span>
        <Button className="feedAction feedNext" onClick={showNext} aria-label="Следующий ресурс">
          ↓
        </Button>
      </aside>

      {/* внизу: название, описание с «ещё / меньше» и атрибуты ресурса */}
      <div className="feedInfo">
        <div className="feedTitle">
          <img className="feedAvatar" src={imageOrDefault(resource.image_url)} alt="" />
          <p className="feedName">{resource.resource_name}</p>
        </div>
        <p className={`feedDescription ${expanded ? "feedDescriptionExpanded" : ""}`}>
          {resource.short_description}
        </p>
        {expanded && resource.attributes.length > 0 && (
          <Table size="sm" borderless className="feedAttributes">
            <tbody>
              {resource.attributes.map((attribute) => (
                <tr key={attribute.attribute_name}>
                  <td>{attribute.attribute_name}</td>
                  <td>{attribute.attribute_value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <button className="feedMore" onClick={() => setExpanded(!expanded)}>
          {expanded ? "меньше" : "ещё"}
        </button>
      </div>
    </section>
  );
};
