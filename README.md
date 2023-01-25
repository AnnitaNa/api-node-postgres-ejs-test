# Projeto Final

> Projeto final do 6º modulo OiDevs by ADA
>
> APi de Carros
> 
> Author: Tatiane A. Nicchetti

## Dependências de arquivos e configurações

### App express default

O **express-generator** gera um app express padrão. Vamos usar a engine **ejs** para o front-end.

```bash
npx express-generator --ejs
```

Depois devemos baixar os módulos adicionados ao package.json

```bash
npm i
```

Vamos usar um bando de dado in memory, para isso precisamos baixar:

```bash
npm i -D mongodb-memory-server
npm i moongose
```
