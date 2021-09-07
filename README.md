<h1 align="center">

<img src="https://raw.githubusercontent.com/JuanPabllo/good-news/main/public/images/avatar.svg" alt="rocketshoes" width="100px"/>

</h1>

<p align="center">
  Good News - Portal de boas notícias 📰
  <br>
  <br>

  <a href="https://www.linkedin.com/in/juanpablodev/">
    <img alt="Made by Juan Pablo" src="https://img.shields.io/badge/made%20by-JuanPabllo-%237519C1">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/JuanPabllo/good-news">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
</p>

<br>

## :dart: Sobre

O projeto Good News é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.

## :rocket: Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando

```bash
# Clone this project
$ git clone https://github.com/JuanPabllo/good-news

# Access
$ cd good-news

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
