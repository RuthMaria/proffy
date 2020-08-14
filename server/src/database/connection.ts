import knex from 'knex'
import path from 'path'

// migrations - controlam a versão do banco de dados

const db = knex ({
    client:'sqlite3',
    connection: {
        filename:path.resolve(__dirname, 'database.sqlite')
    },

    useNullAsDefault: true,
})

export default db

/*"id": 1,
    "subject": "Matemática",
    "cost": "120",
    "user_id": 4,
    "name": "Mayara Rysia",
    "avatar": "https://avatars1.githubusercontent.com/u/10697959?s=460&u=3f493c6c586f256d6edbb694257ae97371588e4f&v=4",
    "whatsapp": "123456789",
    "bio": "Software Developer | Back end Developer. Information Systems - IFAL. Looking for jobs in Maceió or remotely anywhere. https://gitlab.com/mayararysia"
  } 
  
  {
	"name": "ruth maria",
	"avatar": "https://avatars2.githubusercontent.com/u/18095161?s=460&u=afaad6043224735425d5501f9815aafb9e930db4&v=4",
	"whatsapp": "82988312265",
	"bio": "Junior web developer | Computer Science - UFAL | Looking for a job in Maceió.",
	"subject": "Matemática",
	"cost": 80,
	"schedule": [
		{ "week_day": 1, "from": "8:00", "to": "12:00"},
		{ "week_day": 3, "from": "10:00", "to": "18:00"},
		{ "week_day": 4, "from": "8:00", "to": "12:00"}
	]
}*/