// Изображение и видео по умолчанию лежат в самом проекте (папка public),
// они показываются, если у ресурса пустые image_url / video_url
const BASE = import.meta.env.BASE_URL;

// Путь к файлу из папки public — от корня приложения, а не от текущей страницы
const publicFile = (path: string) => `${BASE}${path}`;

export const DEFAULT_IMAGE = publicFile("DefaultImage.jpg");
export const DEFAULT_VIDEO = publicFile("DefaultVideo.mp4");

export const imageOrDefault = (url: string) => (url ? publicFile(url) : DEFAULT_IMAGE);
export const videoOrDefault = (url: string) => (url ? publicFile(url) : DEFAULT_VIDEO);
