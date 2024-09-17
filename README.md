# Calculadora de Horas Trabalhadas

Este projeto é uma API simples para calcular as horas trabalhadas com base no horário de início, fim e intervalo.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/calculadora-horas.git
   cd calculadora-horas
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando a aplicação

Para iniciar o servidor, execute:

```
npm start
```

O servidor será iniciado na porta 3000.

## Endpoint

A API possui um único endpoint:

- **GET /calcular-horas**

### Parâmetros da requisição

- `inicio`: Horário de início do trabalho (formato: HH:MM ou HHMM)
- `fim`: Horário de fim do trabalho (formato: HH:MM ou HHMM)
- `intervalo`: Duração do intervalo (formato: HH:MM ou HHMM)

### Exemplo de requisição

```
GET /calcular-horas?inicio=08:00&fim=18:00&intervalo=01:00
```

### Resposta

A API retornará as horas trabalhadas no formato:

```
Horas trabalhadas: HH:MM
```

## Executando os testes

Para executar os testes unitários, use o comando:

```
npm test
```

Isso executará os testes definidos no arquivo `calculadora_horas.test.js`.
