export const convertArrayToQueryObject = (items: string[]) => {
  return items.reduce(
    (acc, item, index) => {
      acc[`productCategory[${index}]`] = item;
      return acc;
    },
    {} as Record<string, string>,
  );
};
