# Desafio n°2 do chapter iv do Agilizei Bootcamp ⚡
Primeiro iremos **conhecer a aplicação** que vamos validar.

![image](https://user-images.githubusercontent.com/53572219/138148525-0cf013f5-5621-4e70-b2f2-b390a64e6dee.png)

 O [My Store](http://automationpractice.com/index.php) é um ecommerce popular para praticar automação.
 
 ## Desafio proposto
A empresa Thunders, precisa garantir a integridade e a disponibilidade de seus serviços para clientes através de uma página de cadastro em seu site - automation practice.

Essa funcionalidade é a de cadastro de clientes em seu e-commerce, que possui diversos produtos disponíveis, categorias e promoções. Diariamente, novos clientes chegam ao site e precisam efetuar um cadastro para que possam comprar seus produtos, por isso essa funcionalidade é crítica para o negócio.

Para garantir a integridade deste serviço, você deve construir um teste automatizado que simule a jornada de usuário ao realizar um cadastro. Crie um novo projeto, faça as devidas configurações e desenvolva os scripts necessários para completar essa tarefa.

**IMPORTANTE**
- Os dados devem ser diferentes entre um teste e outro.
- Não esqueça de adicionar asserções ao seu teste.
- Utilizar o mochawesome como relatório de execução.
- Não esqueça da execução no Github Actions.
- O relatório deve ser de fácil acesso, usando o Github Pages.

## Instruções para clonar e executar os testes na sua máquina

**PRÉ REQUISITOS**

Antes de prosseguir, primeiro certifique-se de ter instalado:
- [Node](https://nodejs.org/en/)
- [Git](https://git-scm.com/)


**Show! agora vamos aos passos para que você consiga executar na sua máquina!**
- Para clonar o repositório, rode o comando `git clone https://github.com/davisonalves/desafio-2-chapter-iv.git`
- Para instalar o Cypress e as demais dependências de desenvolvimento, rode o comando `npm install`
- Para executar os testes em modo headless, rode o comando `npm run cy:run`
- Para gerar e agrupar os relatórios você deve rodar os comandos `npm run report:merge` e em seguida `npm run report:mocha`
- Para limpar os arquivos gerados nos relatórios você pode rodar também `npm run report:clean`

## Resultado final
Os relatórios do mocha podem ser acessados [Clicando Aqui](https://davisonalves.github.io/desafio-2-chapter-iv/)

E olha como ficou maneiro os testes em execução:
![2021-10-20-15-00-11](https://user-images.githubusercontent.com/53572219/138155754-09291129-1ff0-4d42-9872-26ecc30b8ef0.gif)

Não vamos esquecer também da integração contínua com o GitHub Actions, você pode visualiza-la acessando a aba "Actions" desse repositório ou [Clicando Aqui](https://github.com/davisonalves/desafio-2-chapter-iv/actions/workflows/main.yml)
