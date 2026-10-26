import { GREENHOUSE_RESOURCES_MOCK } from "./mock";

// Атрибут ресурса — дополнительная характеристика (вертикальная таблица атрибутов)
export interface ResourceAttribute {
  attribute_name: string;
  attribute_value: string;
}

// Ресурс теплицы (услуга). Поля совпадают с ответом веб-сервиса
export interface GreenhouseResource {
  resource_id: number;
  resource_name: string;
  short_description: string;
  image_url: string;
  video_url: string;
  unit: string;
  min_value: number;
  likes_count: number;
  attributes: ResourceAttribute[];
}

// Список опубликованных ресурсов с фильтром по минимальному значению.
// В ЛР5 данные берутся только из mock-коллекции, без бэкенда.
export const getGreenhouseResources = (minValue?: number): GreenhouseResource[] =>
  GREENHOUSE_RESOURCES_MOCK.filter(
    (resource) => minValue === undefined || resource.min_value >= minValue,
  );

// Лента: одна карточка. Без id — первая, с next — следующая после указанной (по кругу)
export const getGreenhouseResourceFeed = (
  resourceId?: number,
  next = false,
): GreenhouseResource | undefined => {
  const list = GREENHOUSE_RESOURCES_MOCK;
  if (resourceId === undefined) return list[0];
  const index = list.findIndex((resource) => resource.resource_id === resourceId);
  if (index === -1) return undefined;
  return next ? list[(index + 1) % list.length] : list[index];
};
