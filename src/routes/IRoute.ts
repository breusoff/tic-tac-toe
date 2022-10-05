import {ReactNode} from "react";

export interface IRoute {
    /**
     * Url по которому доступна страница
     */
    url: (param?: string | number) => string;
    /**
     * Заголовок страницы
     */
    title?: string;
    /**
     * Страница, которая рендерится
     */
    page?: ReactNode;
}
