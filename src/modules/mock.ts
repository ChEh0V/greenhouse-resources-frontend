import type { GreenhouseResource } from "./greenhouseApi";

// Mock-коллекция ресурсов теплицы. Пустые image_url и video_url —
// у таких карточек показываются изображение и видео по умолчанию
export const GREENHOUSE_RESOURCES_MOCK: GreenhouseResource[] = [
  {
    resource_id: 1,
    resource_name: "Площадь теплицы",
    short_description:
      "Полезная площадь под посадку. Зависит от схемы размещения растений и ширины технологических проходов.",
    image_url: "media/greenhouse_frame.jpg",
    video_url: "media/greenhouse_frame.mp4",
    unit: "м²",
    min_value: 8,
    likes_count: 2,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Теплица из поликарбоната 4 мм" },
      { attribute_name: "Производитель", attribute_value: "Воля" },
      { attribute_name: "Срок службы", attribute_value: "15 лет" },
    ],
  },
  {
    resource_id: 2,
    resource_name: "Электроэнергия",
    short_description:
      "Досветка растений в период короткого светового дня. Расход зависит от мощности облучателей и длительности досветки.",
    image_url: "media/led_lighting.jpg",
    video_url: "media/led_lighting.mp4",
    unit: "кВт·ч",
    min_value: 45,
    likes_count: 3,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Фитооблучатели LED" },
      { attribute_name: "Производитель", attribute_value: "Philips GreenPower" },
      { attribute_name: "Срок службы", attribute_value: "35 000 ч" },
      { attribute_name: "Норма на 1 м² теплицы", attribute_value: "0,25 кВт·ч в сутки" },
    ],
  },
  {
    resource_id: 3,
    resource_name: "Тепловая энергия",
    short_description:
      "Обогрев теплицы в зимний период. На Севере разница температур внутри и снаружи достигает 50 °C.",
    image_url: "media/heating_boiler.jpg",
    video_url: "",
    unit: "Гкал",
    min_value: 3.2,
    likes_count: 1,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Газовый котёл" },
      { attribute_name: "Производитель", attribute_value: "Viessmann Vitoplex 100" },
      { attribute_name: "Срок службы", attribute_value: "20 лет" },
    ],
  },
  {
    resource_id: 4,
    resource_name: "Вода для полива",
    short_description:
      "Полив через капельные линии. Норма зависит от культуры, фазы вегетации и типа субстрата.",
    image_url: "media/drip_irrigation.jpg",
    video_url: "",
    unit: "м³",
    min_value: 12,
    likes_count: 1,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Капельная система полива" },
      { attribute_name: "Производитель", attribute_value: "Netafim" },
      { attribute_name: "Норма на 1 м² теплицы", attribute_value: "4 л в сутки" },
    ],
  },
  {
    resource_id: 5,
    resource_name: "Углекислый газ",
    short_description:
      "Подкормка углекислым газом повышает интенсивность фотосинтеза при закрытых форточках.",
    image_url: "",
    video_url: "",
    unit: "кг",
    min_value: 5.5,
    likes_count: 1,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Система дозирования CO2" },
      { attribute_name: "Производитель", attribute_value: "Priva" },
    ],
  },
  {
    resource_id: 6,
    resource_name: "Минеральные удобрения",
    short_description:
      "Питательный раствор подаётся вместе с поливом. Состав корректируется по фазе развития растения.",
    image_url: "media/fertilizers.jpg",
    video_url: "",
    unit: "кг",
    min_value: 2.8,
    likes_count: 1,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Водорастворимые удобрения" },
      { attribute_name: "Производитель", attribute_value: "Yara" },
    ],
  },
  {
    resource_id: 7,
    resource_name: "Субстрат",
    short_description: "Корнеобитаемая среда вместо грунта. Заменяется каждый производственный цикл.",
    image_url: "",
    video_url: "",
    unit: "м³",
    min_value: 1.5,
    likes_count: 1,
    attributes: [
      { attribute_name: "Оборудование", attribute_value: "Минеральная вата" },
      { attribute_name: "Производитель", attribute_value: "Grodan" },
      { attribute_name: "Срок службы", attribute_value: "1 сезон" },
    ],
  },
];
