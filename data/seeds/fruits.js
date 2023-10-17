/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { fruit_name: 'apple', avg_weight_oz: 1.5, delicious: null, color: "red" },
    { fruit_name: 'orange', avg_weight_oz: 2.5, delicious: true, color: "green" },
    { fruit_name: 'pear', avg_weight_oz: 3.0, delicious: 0, color: "green" },
  ]);
};
