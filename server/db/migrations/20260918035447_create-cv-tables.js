/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Profile
  await knex.schema.createTable('profile', (table) => {
    table.increments('id').primary();
    table.string('avatar_url');
    table.string('name').notNullable();
    table.string('title').notNullable();
    table.text('bio');
    table.string('email');
    table.string('github');
    table.string('linkedin');
    table.string('seek');
  });

  // Experience
  await knex.schema.createTable('experiences', (table) => {
    table.increments('id').primary();
    table.string('company').notNullable();
    table.string('role').notNullable();
    table.text('description');
    table.string('start_date');
    table.string('end_date');
  });

  // Projects
  await knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.string('tech_stack');
    table.string('repo_url');
    table.string('deployed');
  });

  // Skills
  await knex.schema.createTable('skills', (table) => {
    table.increments('id').primary();
    table.string('category').notNullable();
    table.string('name').notNullable();
  });

  // Qualifications
  await knex.schema.createTable('qualifications', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('institution');
    table.string('year');
    table.text('description');
  });

  // Pokedex
  await knex.schema.createTable('pokedex', (table) => {
    table.increments('id').primary();
    table.string('category').notNullable();
    table.string('name').notNullable();
    table.integer('level');
    table.text('description');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists('pokedex');
  await knex.schema.dropTableIfExists('qualifications');
  await knex.schema.dropTableIfExists('skills');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('experiences');
  await knex.schema.dropTableIfExists('profile');
}