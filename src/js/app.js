export default function extractSpecialOptions(obj) {
  const specialOptions = [];

  obj.special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = el;
    specialOptions.push({
      id, name, icon, description,
    });
  });
  return specialOptions;
}
