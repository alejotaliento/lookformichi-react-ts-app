import type { IBlogCard } from "../components/types";

export const hasImage = (data: IBlogCard[]) => data.every((items) => items.image);
