/**
 * Точки перелома дизайна
 */
export enum BreakPoints {
    mobile = 428,
}

/**
 * Вспомогательные функции для styled-components
 */
const Media = {
    greaterThan: (breakPoint: BreakPoints) =>
        `@media (min-width: ${breakPoint + 1}px)`,
    lessThan: (breakPoint: BreakPoints) =>
        `@media (max-width: ${breakPoint}px)`,
    between: (start: BreakPoints, end: BreakPoints) =>
        `@media (min-width: ${start + 1}px) and (max-width: ${end}px)`,
};

export default Media;
