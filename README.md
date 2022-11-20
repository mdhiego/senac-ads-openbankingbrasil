Protótipo de comparador de ofertas de produtos financeiros dos participantes do ecossistema Open Finance brasileiro!

Licença MIT.

# Open Banking Brasil

No dia 1º de fevereiro de 2021, foi implementado o Open Banking no Brasil. Ele promete revolucionar o mercado financeiro, pois com ele será possível o compartilhamento de informações bancárias entre diferentes instituições.

A primeira fase do Open Banking Brasil disponibiliza informações sobre as instituições financeiras, como taxas e tarifas cobradas por serviços prestados pelos bancos. Neste primeiro momento, isso permite que o cliente possa comparar as instituições e que escolha a melhor opção para o seu caso, incentivando a competição por serviços e crédito mais barato e de melhor qualidade.

Essas informações públicas são disponibilizadas através de _RESTful APIs_. Para mais informações sobre as APIs, consulte esta [documentação](https://openbankingbrasil.atlassian.net/wiki/spaces/OF/overview).

## `Contas pessoa física`

A API de contas pessoa física leva o nome de **`personal-accounts`** e retorna as formas de movimentações e suas tarifas, termos e condições de contrato, entre outras coisas.

`GET` https://**url-base-disponibilizado-pelo-banco**/open-banking/products-services/v1/**personal-accounts**

## `Empréstimo pessoa física`

A API de empréstimo pessoa física leva o nome de **`personal-loans`** e retorna as taxas cobradas para os diferentes tipos de empréstimo, termos e condições de contrato e outras informações sobre empréstimo para pessoa física.

`GET` https://**url-base-disponibilizado-pelo-banco**/open-banking/products-services/v1/**personal-loans**

## `Empréstimo pessoa jurídica`

A API de empréstimo pessoa jurídica leva o nome de **`business-loans`** e retorna as taxas cobradas para os diferentes tipos de empréstimo, termos e condições de contrato e outras informações sobre empréstimo para pessoa jurídica.

`GET` https://**url-base-disponibilizado-pelo-banco**/open-banking/products-services/v1/**business-loans**
