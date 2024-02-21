import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, email: 'rowValue1', username: 'one' },
    { id: 2, email: 'rowValue2', username: 'two' },
    { id: 3, email: 'rowValue3', username: 'three' },
  ]);

  await knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
}
