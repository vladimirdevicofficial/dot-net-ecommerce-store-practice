import { clone } from '@utils/Object/clone';

export const renameKey = (object: Record<string, string>, key: string, newKey: string) => {
  const clonedObj = clone(object);
  const targetKey = clonedObj[key];

  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};
