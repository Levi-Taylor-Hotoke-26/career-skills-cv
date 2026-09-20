/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('qualifications', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('institution').notNullable();
    table.string('year');
    table.text('description');
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('qualifications');
}