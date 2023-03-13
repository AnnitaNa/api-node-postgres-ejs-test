# Projeto Final

> Construção de uma API de Carros utilizando um SSR
> 
> Author: Tatiane A. Nicchetti

## Rodando o Projeto localmente

1) INSTALAÇÃO
   - Instale os pacotes do arquivo **package.json** rodando no terminal:

        ```bash
        npm i
        ```

2) BANCO DE DADOS
   - Substitua a URL do seu banco de dados no seu arquivo **.env** (use o .env-example como base)
   - Depois de criar um schema, você deve subí-lo para o banco de dados com o comando:

        ```bash
        npx prisma db push
        ```
    - Migração: quando migrar pela primeira vez, você irá popular os dados com o arquivo seed.js. Para isso, rode no terminal:
        ```bash
        npx prisma migrate dev --name migration-name
        ```

3) SUBIR O SERVIDOR:
   
    - Rode o comando:
        ```
        npm start
        ```

    - A aplicação rodará na porta 3000. Coloque no seu browser http://localhost:3000/


## Dependências de arquivos e configurações

 - **express-generator**: gera um app express padrão. 
 - **ejs**: Engine utilizada para o front-end
 - **postgres**: banco de dados
 - **sqlite**: ORM
 - **express**: framework para o nodeJs
 - **http-errors**: lidar com erros no browser

## prisma

To use **PRISMA**

```bash
npm i @prisma/client express
```

```bash
npm i -D  prisma
```

it will generate a schema.prisma file

everytime you change anything on schema.prisma file, you need to run the code below to update prisma client

```bash
npx prisma generate
```
after creating your schema, run to push it to the database

```bash
npx prisma db push
```

migration and seeders

1) create a seeder file inside prisma folder
2) on package.json add:
```json
"prisma": {
    "seed": "node prisma/seed.js"
},
```
   when you migrate for the first time, it will also seed your database

```bash
npx prisma migrate dev --name migration-name
```
