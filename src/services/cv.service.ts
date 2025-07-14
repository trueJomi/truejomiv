import { cv } from "../const/data";
import type { CV } from "../types/cv.type";

export async function getCV(lang:string): Promise<CV> {
    return cv
}