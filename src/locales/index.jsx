import en from "./en";
import id from "./id";

const locales = { en, id };

export const DEFAULT_LANG = "en";
export const LANGUAGES = Object.values(locales).map((l) => l.meta);

export default locales;
