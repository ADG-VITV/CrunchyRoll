export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  url: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  title_english: string;
}