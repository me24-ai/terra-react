type Some<T> = T;
type None = null;
export type Option<T> = Some<T> | None;
export declare function convertToProperIsoFormat(date: Date): string;
export {};
