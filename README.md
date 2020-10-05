

# UNIPAM - Topicos Especiais III - Google Cloud Function/Datastore

> Joãozinho está fazendo uma coleção de dados de todos os carros que ele já viu. Para guardar esses dados ele quer salvar no datastore/firestore os carros com seus atributos placa, cor, preço, modelo e marca para isso você deverá implementar uma google cloud function, em qualquer linguagem que seja possível, que receba uma requisição http com os atributos mencionados e salve no datastore. Faça uma outra function que seja capaz de mostrar os dados de um veículo recebendo a placa como parâmetro. O trabalho deve ser comitado no git (github, gitlab) deve ter um readme.md mostrando o endpoint que deve ser usado para enviar os dados e para ler os dados, bem como um print do resultado da chamada da function, um mostrando o dado persistido no DataStore e outro print demonstrando a function que busca os dados.

## ROUTES

| Method | URL | Params |
| -------|-----|--------|
| GET | https://us-central1-cloud-function-291520.cloudfunctions.net/functionGetCars | query: { plaque: string } |
| POST | https://us-central1-cloud-function-291520.cloudfunctions.net/functionSaveCar | body: { plaque: string, color: string, price: number, model: string, brand: string } |

### IMAGE GET
![](https://i.imgur.com/7FcdfgF.png)

### IMAGE POST
![](https://i.imgur.com/9n2ISUh.png)

### IMAGE DATASTORE
![](https://i.imgur.com/IoHkhxq.png)

Owner: https://github.com/jeffnogueira