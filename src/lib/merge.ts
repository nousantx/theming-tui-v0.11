export function merge(...objects: any) {
  return objects.reduce((result: any, obj: any) => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        result[key] = merge(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
    return result;
  }, {});
}
