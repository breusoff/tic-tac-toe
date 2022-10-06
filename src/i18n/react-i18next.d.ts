import "react-i18next";
import ru from "./locales/ru/translations.json";

declare module "react-i18next" {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface CustomTypeOptions {
        defaultNS: "translations";
        resources: typeof ru;
    }
}
