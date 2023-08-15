const insert = (table, data) => {
  const columns = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map((_key) => '?').join(', ');
  return `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
};

const insertMany = (table, data) => {
  const columns = Object.keys(data[0]).join(', ');
  const placeholders = Object.keys(data[0]).map((_key) => '?').join(', ');
  const values = data.map((_data) => `(${placeholders})`).join(', ');
  return `INSERT INTO ${table} (${columns}) VALUES ${values}`;
};

module.exports = {
  insert,
  insertMany
};