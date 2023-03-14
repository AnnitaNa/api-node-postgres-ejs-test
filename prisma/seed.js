const {prisma} = require('./client')
let {seedData} = require('./seedData')


async function seedCar() {
  for (let i =0; i< seedData.length; i++) {
    console.log('seeding...')
    await prisma.car.upsert({
      where: { name: seedData[i].name },
      update: {},
      create: seedData[i]
    })
  }
}


async function main() {
  await seedCar();
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