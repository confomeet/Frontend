import { isObjectEmpty, isFullArray } from "utils";

export function shouldIgnoreDataUpdate(newData, stateData) {
    const had_data = !isObjectEmpty(stateData) && isFullArray(stateData);
    const has_data_now = !isObjectEmpty(stateData) && isFullArray(newData);
    return !had_data && !has_data_now;
}
