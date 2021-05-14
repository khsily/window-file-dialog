exports.objToPsOptions = (options = {}) => {
  const optionsArr = Object.entries(options).map(([key, value]) => {
    if (typeof value === "boolean") value = `$${value}`;
    else value = `'${value}'`;
    return `${key} = ${value}`;
  })

  return optionsArr.join(';\n');
}