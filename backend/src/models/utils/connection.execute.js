const insert = (table, data) => {
  const columns = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map((_key) => '?').join(', ');
  return `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
};

module.exports = {
  insert,
};