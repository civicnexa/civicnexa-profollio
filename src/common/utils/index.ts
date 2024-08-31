
/**
 * Converts a pixel value to rem
 */
export const pxToRem = (px: number) => `${px / 16}rem`;

/**
 * Checks if a value is an object
 */
export const isObject = (item: any): boolean => {
  return item && typeof item === "object" && !Array.isArray(item);
};

/**
 * Recursively makes all properties of T optional
 */
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
  };

/**
 * Deep merges two objects
 */
export const mergeDeep = (target: any, source: any): any => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};