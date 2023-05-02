import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: 'Orlin',
            email: 'orlin@gmail.com'
        }
    })
    console.log(user)
}

async function findMany() {
    const users = await prisma.user.findMany()
    console.log(users)
}

async function createUserPosts() {
    const user = await prisma.user.create({
            data: {
                name: 'Yaneth',
                email: 'yaneth@gmail.com',
                posts: {
                    create: {
                        title: 'Hello World'
                    }
                }
            }
        })

    console.log(user)
}

async function findManyIncludingDetail() {
    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true
        }
    })
    console.dir(usersWithPosts, { depth: null})
}

async function main() {
    // 1. Create User
    // await createUser()    

    // 2. Find many
    // await findMany()
   
    // 3. Create User with posts
    // await createUserPosts()
   
    // 4. Find all including posts
    // await findManyIncludingDetail()
   
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })