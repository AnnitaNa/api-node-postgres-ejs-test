const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function seedCar() {
  await prisma.car.upsert({
    where: { name: 'Car 01' },
    update: {},
    create: {
      name: 'Car 01',
      model: 'model 01',
      color: 'blue',
      year: '1993'
    }
  })

  await prisma.car.upsert({
    where: { name: 'Car 02' },
    update: {},
    create: {
      name: 'Car 02',
      model: 'model 02',
      color: 'white',
      year: '1993'
    }
  })

  await prisma.car.upsert({
    where: { name: 'Car 03' },
    update: {},
    create: {
      name: 'Car 03',
      model: 'model 01',
      color: 'white',
      year: '1992'
    }
  })

  await prisma.car.upsert({
    where: { name: 'Car 04' },
    update: {},
    create: {
      name: 'Car 04',
      model: 'model 02',
      color: 'blue',
      year: '1992'
    }
  })

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