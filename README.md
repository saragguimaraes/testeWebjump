# Teste Webjump
+ Instruções para obter uma cópia do projeto em operação na sua máquina local para fins de teste e desenvolvimento. 

## Pré-requisitos 

O que é necessário ter pré-instalado e as versões utilizadas:
+ <b>Visual Studio Code</b>

Para instalar basta fazer o download na página oficial e seguir o passo a passo do VS Code.

+ <b>Git: 2.36.1</b>

Para instalar basta fazer o download na página oficial e seguir o passo a passo do Git.

+ <b>Node.js:</b>

Para instalar basta fazer o download na página oficial e seguir o passo a passo do Node. Obs: com o Node instalado também já teremos o <b><i>npm</i></b>. 

+ <b>Cypress: 9.7.0</b>

Para instalar a ferramenta abrir o terminal da sua máquina e digitar o comando: 
```bash
npm install cypres
```

+ <b>Yarn: 1.22.19</b>

Para instalar a ferramenta abrir o terminal da sua máquina e digitar o comando (com Node e npm já instalados):
```bash
npm install --global yarn
```


## Passos para inicializar o Projeto

1. Com as ferramentas necessárias instaladas para rodar o projeto, fazer o download do repositório na máquina para abrir a pasta do mesmo no <b>Visual Studio Code</b>.

2. Executar os seguintes comandos para instalar as dependências: 
```bash
npm install
```
ou
```bash
yarn install
```

3. No <b>Visual Studio Code</b>, abrir o terminal e inserir os comandos para abrir o Cypress:
```bash
npm run start
```
ou
```bash
yarn start
```

4. Com o <b>Cypress</b> aberto, clicar na opção "Run 3 integration specs" para rodar todos os testes.

## Fazer alterações no projeto

Caso queira contribuir com o projeto, desenvoler novos testes basta seguir os passos e fazer as aleterações necessárias e logo depois abrir o Git Bash na página raiz do projeto e subir as alterações seguindo os seguintes comandos na sequência:

1-
```bash
git status
```

2-
```bash
git add
```

3-
```bash
git status
```

4-
```bash
git commit -m "texto para subir as alterações"
```

5- 
```bash
git push origin -nome da sua branch-
```
