import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()

        table.integer('user_id') // chave estrangeira
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE') 

        table.timestamp('created_at') 
            .defaultTo('now()')   // pega a data do sistema
            .notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}