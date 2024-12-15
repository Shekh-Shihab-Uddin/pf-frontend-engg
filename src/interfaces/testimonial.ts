export type TestimonialPropsType = {
  id: string;
  name: DuoLangType;
  designation: DuoLangType;
  image: ImageType[];
  testimony: DuoLangType;
};

export type ImageType = {
  downloadURL: string;
  lastModifiedTS: number;
  name: string;
  ref: string;
};
export type DuoLangType = {
  "en-US": string;
  bn: string;
};
