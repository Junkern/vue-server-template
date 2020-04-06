import fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import * as path from 'path'

const run = async () => {
    const server = fastify({logger: true})

    // TODO 
    server.register(fastifyStatic, {
        root: path.join(__dirname, '..', 'dist')
    })

    server.get('/', async (request, reply) => {
        return reply.send('Working!')
    })
    server.get('/api/test', async (request, reply) => {
        return reply.send('Api working!')
    })
    await server.listen(3000, '0.0.0.0')
}

run()