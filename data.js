const updateValue = (item) => {
  if (
    item.children &&
    Array.isArray(item.children) &&
    item.children.length > 0
  ) {
    item.value = item.children
      .map((child) => updateValue(child))
      .reduce((prev, curr) => prev + curr, 0);
  } else if (!item.value || isNaN(item.value)) {
    item.value = 0;
  }
  return item.value;
};

const sumOver = (_data) => {
  updateValue(_data);
  return _data;
};

export const data = sumOver({
  name: "Junho",
  children: [
    {
      name: "고정비",
      children: [
        { name: "고정비1", value: 1 },
        { name: "고정비2", value: 1 },
        { name: "고정비3", value: 1 },
        { name: "고정비4", value: 1 },
      ],
    },
    {
      name: "비고정비",
      children: [
        { name: "교통비", value: 30000 },
        { name: "평일점심값", value: 160000 },
        { name: "비고정비3", value: 3 },
        { name: "비고정비4", value: 4 },
      ],
    },
  ],
});
