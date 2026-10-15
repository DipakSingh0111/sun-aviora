import rawData from "@/data/sun-aviora.json";
import type { SunAvioraTemplateData } from "@/types/sun-aviora.types";

const templateData = rawData as unknown as SunAvioraTemplateData;

export function getSunAvioraSections() {
  return templateData.categories.SunAviora.sections;
}

export function getSunAvioraTemplate() {
  return templateData.categories.SunAviora;
}
