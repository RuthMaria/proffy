import express from 'express'
import db from './database/connection'
import convertHourToMinutes from './utils/convertHourToMinutes'
const routes = express.Router()

interface ScheduleItem {
    week_day: number
    from: string
    to: string
}

routes.post('/classes', async ( req, res) => {

    const { name, avatar, whatsapp, bio, subject, cost, schedule} = req.body
    /* serve para que todas as transações seja feita no banco de dados de uma vez, 
     para não haver inconsistência de dados */
    const trx = await db.transaction() 

    try {
        // await aguarda a operação acontecer para depois executar o restante do código
        const insertedUsersIds = await trx('users').insert({ 
            name, 
            avatar, 
            whatsapp, 
            bio 
        })
    
        const user_id = insertedUsersIds[0]

        const insertedClassesIds = await trx('classes').insert({ 
            subject, 
            cost, 
            user_id 
        })

        const class_id = insertedClassesIds[0]

        // percorre o array e define a interface com o tipo do objeto do array
        const classSchedule = schedule.map((scheduleItm: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItm.week_day,
                from: convertHourToMinutes(scheduleItm.from),
                to: convertHourToMinutes(scheduleItm.to)
            }
        })

        await trx('class_schedule').insert(classSchedule)

        await trx.commit()

        return res.status(201).send()

    } catch (error) {
        await trx.rollback()

     return res.status(400).json({
         error: 'Unexpected error while creating new class'
     })   
    }
})

export default routes