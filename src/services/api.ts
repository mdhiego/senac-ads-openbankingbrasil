import axios from 'axios'
import { banks } from './../constants/banks'

export const callOpenBanking = async (baseURL: string, endpoint: string) => {
	const api = axios.create({
		baseURL: `${baseURL}/open-banking/products-services/v1`,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		},
	})

	const currentBank = banks.filter((bank) => bank.apiUrl === baseURL)[0]

	console.log('currentBank', currentBank)

	return await api
		.get(endpoint)
		.then((response) => response.data.data.brand)
		.catch(() => {
			if (currentBank.brandName === 'Banco Bradesco') {
				return {
					"name": "Bradesco S.A",
					"companies": [
						{
							"name": "Banco Bradesco S.A.",
							"cnpjNumber": "60746948000112",
							"urlComplementaryList": "https://banco.bradesco/html/classic/index.shtm",
							"personalCreditCards": [
								{
									"name": "VISA GOLD SMILES",
									"identification": {
										"product": {
											"type": "GOLD",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.003330"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "214.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.026670"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "321.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.026670"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "428.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.943330"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "428.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.142900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.142900",
												"maximumRate": "0.142900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.017860"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.136900"
														},
														"customers": {
															"rate": "0.982140"
														}
													}
												],
												"minimumRate": "0.020000",
												"maximumRate": "0.136900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA SIGNATURE",
									"identification": {
										"product": {
											"type": "OUTROS",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.072990"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "285.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.125070"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "427.500000",
														"currency": "BRL",
														"customers": {
															"rate": "0.035560"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "570.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.766380"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "570.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.133900"
														},
														"customers": {
															"rate": "0.797400"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.138400"
														},
														"customers": {
															"rate": "0.000800"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.142900"
														},
														"customers": {
															"rate": "0.201800"
														}
													}
												],
												"minimumRate": "0.133900",
												"maximumRate": "0.142900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.009990"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.000190"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.128900"
														},
														"customers": {
															"rate": "0.989810"
														}
													}
												],
												"minimumRate": "0.010000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO GRAFITE",
									"identification": {
										"product": {
											"type": "GRAFITE",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.151550"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "249.480000",
														"currency": "BRL",
														"customers": {
															"rate": "0.074610"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "374.220000",
														"currency": "BRL",
														"customers": {
															"rate": "0.045060"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "498.960000",
														"currency": "BRL",
														"customers": {
															"rate": "0.728790"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "498.960000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.133900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.133900",
												"maximumRate": "0.133900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.009470"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.000230"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.118900"
														},
														"customers": {
															"rate": "0.369640"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.128900"
														},
														"customers": {
															"rate": "0.620660"
														}
													}
												],
												"minimumRate": "0.015000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO MAIS",
									"identification": {
										"product": {
											"type": "MAIS",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.146370"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "175.440000",
														"currency": "BRL",
														"customers": {
															"rate": "0.013180"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "263.220000",
														"currency": "BRL",
														"customers": {
															"rate": "0.028460"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "351.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.811990"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "351.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.159900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.159900",
												"maximumRate": "0.159900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.014550"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.011390"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.101900"
														},
														"customers": {
															"rate": "0.000380"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.153900"
														},
														"customers": {
															"rate": "0.973690"
														}
													}
												],
												"minimumRate": "0.015000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "MASTERCARD BLACK",
									"identification": {
										"product": {
											"type": "BLACK",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "MASTERCARD",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.159980"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "594.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.215050"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "891.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.128830"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "1188.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.496140"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "1188.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.102900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.102900",
												"maximumRate": "0.102900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.016380"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.545850"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.437770"
														}
													}
												],
												"minimumRate": "0.010000",
												"maximumRate": "0.097900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "AMEX PLATINUM",
									"identification": {
										"product": {
											"type": "PLATINUM",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "AMERICAN_EXPRESS",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.135950"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "420.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.009500"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "933.280000",
														"currency": "BRL",
														"customers": {
															"rate": "0.002070"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "1399.920000",
														"currency": "BRL",
														"customers": {
															"rate": "0.852480"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "1399.920000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.016390"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.891660"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.091950"
														}
													}
												],
												"minimumRate": "0.014900",
												"maximumRate": "0.097900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "AMEX GOLD",
									"identification": {
										"product": {
											"type": "GOLD",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "AMERICAN_EXPRESS",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.107520"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "288.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.066430"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "432.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.045450"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "576.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.780590"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "576.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.142900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.142900",
												"maximumRate": "0.142900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.012050"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.136900"
														},
														"customers": {
															"rate": "0.987950"
														}
													}
												],
												"minimumRate": "0.020000",
												"maximumRate": "0.136900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO PRIME",
									"identification": {
										"product": {
											"type": "NANQUIM",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.305730"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "528.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.302550"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "792.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.066880"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "1056.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.324840"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "1056.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.102900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.102900",
												"maximumRate": "0.102900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.010480"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.001050"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.452830"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.535640"
														}
													}
												],
												"minimumRate": "0.014900",
												"maximumRate": "0.097900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "AMEX GREEN",
									"identification": {
										"product": {
											"type": "GREEN",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "AMERICAN_EXPRESS",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.045220"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "219.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.020010"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "328.500000",
														"currency": "BRL",
														"customers": {
															"rate": "0.017790"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "438.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.916980"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "438.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.142900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.142900",
												"maximumRate": "0.142900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.009250"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.136900"
														},
														"customers": {
															"rate": "0.990750"
														}
													}
												],
												"minimumRate": "0.020000",
												"maximumRate": "0.136900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO INTERNACIONAL BASICO",
									"identification": {
										"product": {
											"type": "CLASSIC_INTERNACIONAL",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": false,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_CARTAO_BASICO_INTERNACIONAL",
												"code": "ANUIDADE_INTERNACIONAL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "75.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "75.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "75.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.159900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.159900",
												"maximumRate": "0.159900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.006760"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.153900"
														},
														"customers": {
															"rate": "0.993240"
														}
													}
												],
												"minimumRate": "0.015000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA PLATINUM",
									"identification": {
										"product": {
											"type": "PLATINUM",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.111510"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "217.440000",
														"currency": "BRL",
														"customers": {
															"rate": "0.048140"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "326.220000",
														"currency": "BRL",
														"customers": {
															"rate": "0.033650"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "435.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.806700"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "570.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.133900"
														},
														"customers": {
															"rate": "0.008120"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.142900"
														},
														"customers": {
															"rate": "0.991880"
														}
													}
												],
												"minimumRate": "0.133900",
												"maximumRate": "0.142900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.020000"
														},
														"customers": {
															"rate": "0.012160"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.000150"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.136900"
														},
														"customers": {
															"rate": "0.987690"
														}
													}
												],
												"minimumRate": "0.010000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA PLATINUM C/ PROG FIDELI",
									"identification": {
										"product": {
											"type": "PLATINUM",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.977780"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "435.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.022220"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "435.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.159900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.159900",
												"maximumRate": "0.159900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.009730"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.007460"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.099400"
														},
														"customers": {
															"rate": "0.000300"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.153900"
														},
														"customers": {
															"rate": "0.982510"
														}
													}
												],
												"minimumRate": "0.015000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO INTERNACIONAL",
									"identification": {
										"product": {
											"type": "CLASSIC_INTERNACIONAL",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": false,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.154450"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "115.440000",
														"currency": "BRL",
														"customers": {
															"rate": "0.010530"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "173.220000",
														"currency": "BRL",
														"customers": {
															"rate": "0.024620"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "231.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.810390"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "231.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.159900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.159900",
												"maximumRate": "0.159900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.020000"
														},
														"customers": {
															"rate": "0.023210"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.006280"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.101900"
														},
														"customers": {
															"rate": "0.000210"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.153900"
														},
														"customers": {
															"rate": "0.970300"
														}
													}
												],
												"minimumRate": "0.011300",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA INFINITE SMILES",
									"identification": {
										"product": {
											"type": "INFINITE",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.004270"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "594.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.068380"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "891.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.068380"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "1188.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.858970"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "1188.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.102900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.102900",
												"maximumRate": "0.102900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.010750"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.473120"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.516130"
														}
													}
												],
												"minimumRate": "0.014900",
												"maximumRate": "0.097900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO NANQUIM",
									"identification": {
										"product": {
											"type": "NANQUIM",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "194.400000",
														"currency": "BRL",
														"customers": {
															"rate": "0.153490"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "648.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.364340"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "792.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.034110"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "1296.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.448060"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "1296.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.102900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.102900",
												"maximumRate": "0.102900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.019730"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.056400"
														},
														"customers": {
															"rate": "0.001070"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.441070"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.538130"
														}
													}
												],
												"minimumRate": "0.014900",
												"maximumRate": "0.097900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "ELO NACIONAL",
									"identification": {
										"product": {
											"type": "CLASSIC_NACIONAL",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "ELO",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": false,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "AVALIACAO_EMERGENCIAL_CREDITO",
												"code": "AVALIACAO_EMERGENCIAL_CREDITO",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "862.860000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "862.860000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "862.860000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.011520"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "154.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000250"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "231.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.988230"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "231.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.159900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.159900",
												"maximumRate": "0.159900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.020000"
														},
														"customers": {
															"rate": "0.017620"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.006560"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.099400"
														},
														"customers": {
															"rate": "0.000200"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.153900"
														},
														"customers": {
															"rate": "0.975620"
														}
													}
												],
												"minimumRate": "0.015000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA GOLD",
									"identification": {
										"product": {
											"type": "GOLD",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.128200"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "145.500000",
														"currency": "BRL",
														"customers": {
															"rate": "0.047340"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "291.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.674190"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "435.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.150260"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "435.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.142900"
														},
														"customers": {
															"rate": "0.070650"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.151400"
														},
														"customers": {
															"rate": "0.000070"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.159900"
														},
														"customers": {
															"rate": "0.929290"
														}
													}
												],
												"minimumRate": "0.142900",
												"maximumRate": "0.159900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.030000"
														},
														"customers": {
															"rate": "0.023360"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.049900"
														},
														"customers": {
															"rate": "0.006870"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.099400"
														},
														"customers": {
															"rate": "0.000210"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.153900"
														},
														"customers": {
															"rate": "0.969570"
														}
													}
												],
												"minimumRate": "0.015000",
												"maximumRate": "0.153900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA PLATINUM SMILES",
									"identification": {
										"product": {
											"type": "PLATINUM",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.007120"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "288.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.048040"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "432.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.021350"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "576.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.923490"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "576.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.133900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.133900",
												"maximumRate": "0.133900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.015000"
														},
														"customers": {
															"rate": "0.014420"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.128900"
														},
														"customers": {
															"rate": "0.985580"
														}
													}
												],
												"minimumRate": "0.012500",
												"maximumRate": "0.128900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA AETERNUM",
									"identification": {
										"product": {
											"type": "OUTROS",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.061220"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "840.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.040820"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "1260.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.006800"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "1680.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.891160"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "1680.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.102900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.102900",
												"maximumRate": "0.102900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.071430"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.785710"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.142860"
														}
													}
												],
												"minimumRate": "0.014900",
												"maximumRate": "0.097900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/cartoes/aeternum/",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								},
								{
									"name": "VISA INFINITE",
									"identification": {
										"product": {
											"type": "INFINITE",
											"additionalInfo": "NA"
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": "NA"
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "NA"
									},
									"fees": {
										"services": [
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "25.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "25.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "15.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "15.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.199110"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "498.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.371380"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "747.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.037940"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "996.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.391580"
														}
													}
												],
												"minimum": {
													"value": "0.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "996.000000",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "CONTRATO",
												"prices": [
													{
														"interval": "1_FAIXA_VALOR",
														"value": "16.000000",
														"currency": "BRL",
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"value": "0.000000",
														"currency": "BRL",
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimum": {
													"value": "16.000000",
													"currency": "BRL"
												},
												"maximum": {
													"value": "16.000000",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.102900"
														},
														"customers": {
															"rate": "1.000000"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.000000"
														},
														"customers": {
															"rate": "0.000000"
														}
													}
												],
												"minimumRate": "0.102900",
												"maximumRate": "0.102900"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "0.000000",
												"applications": [
													{
														"interval": "1_FAIXA_VALOR",
														"indexer": {
															"rate": "0.014900"
														},
														"customers": {
															"rate": "0.019300"
														}
													},
													{
														"interval": "2_FAIXA_VALOR",
														"indexer": {
															"rate": "0.059500"
														},
														"customers": {
															"rate": "0.506740"
														}
													},
													{
														"interval": "3_FAIXA_VALOR",
														"indexer": {
															"rate": "0.097900"
														},
														"customers": {
															"rate": "0.473260"
														}
													},
													{
														"interval": "4_FAIXA_VALOR",
														"indexer": {
															"rate": "0.132900"
														},
														"customers": {
															"rate": "0.000700"
														}
													}
												],
												"minimumRate": "0.010000",
												"maximumRate": "0.143900"
											}
										],
										"otherCredits": [
											{
												"code": "NA",
												"additionalInfo": "NA"
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.100000",
										"additionalInfo": "NA",
										"elegibilityCriteriaInfo": "https://banco.bradesco/html/classic/produtos-servicos/cartoes/conheca-os-cartoes/index.shtm",
										"closingProcessInfo": "https://banco.bradesco/assets/classic/pdf/regulamento-sumario-utilizacao-cartao-credito-pessoa-fisica.pdf"
									}
								}
							]
						}
					]
				}
			} else if (currentBank.brandName === 'Banco do Brasil S/A') {
				return {
					"name": "Banco do Brasil S/A",
					"companies": [
						{
							"name": "Banco do Brasil S/A",
							"cnpjNumber": "00000000000191",
							"urlComplementaryList": null,
							"personalCreditCards": [
								{
									"name": "OUROCARD VISA GOLD",
									"identification": {
										"product": {
											"type": "GOLD",
											"additionalInfo": null
										},
										"creditCard": {
											"network": "VISA",
											"additionalInfo": null
										}
									},
									"rewardsProgram": {
										"hasRewardProgram": true,
										"rewardProgramInfo": "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/ponto-pra-voce"
									},
									"fees": {
										"services": [
											{
												"name": "ANUIDADE_DIFERENCIADA",
												"code": "ANUIDADE_DIFERENCIADA",
												"chargingTriggerInfo": "Utilizacao de rede de estabelecimentos afiliados, instalada no Pais e no exterior, para pagamentos de bens e servicos, cobrada no maximo uma vez a cada 12 meses, admitido o parcelamento da cobranca.",
												"prices": [
													{
														"interval": "1_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.5191"
														}
													},
													{
														"interval": "2_FAIXA",
														"value": "204.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0035"
														}
													},
													{
														"interval": "3_FAIXA",
														"value": "306.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0024"
														}
													},
													{
														"interval": "4_FAIXA",
														"value": "408.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.4750"
														}
													}
												],
												"minimum": {
													"value": "0.00",
													"currency": "BRL"
												},
												"maximum": {
													"value": "408.00",
													"currency": "BRL"
												}
											},
											{
												"name": "FORNECIMENTO_SEGUNDA_VIA_FUNCAO_CREDITO",
												"code": "EMISSAO_SEGUNDA_VIA",
												"chargingTriggerInfo": "Confec/emissao de novo cartao c/funcao credito, restrito a pedidos de reposicao do detentor do cartao, decorrente de perda,roubo, furto, danificacao e outros motivos nao imputaveis a instit.emitente.",
												"prices": [
													{
														"interval": "1_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "2_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "3_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "4_FAIXA",
														"value": "9.70",
														"currency": "BRL",
														"customers": {
															"rate": "1.0000"
														}
													}
												],
												"minimum": {
													"value": "9.70",
													"currency": "BRL"
												},
												"maximum": {
													"value": "9.70",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_BRASIL",
												"code": "SAQUE_CARTAO_BRASIL",
												"chargingTriggerInfo": "Utilizacao de canais de atendimento disponiveis no Pais para retirada em especie na funcao credito.",
												"prices": [
													{
														"interval": "1_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "2_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "3_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "4_FAIXA",
														"value": "15.00",
														"currency": "BRL",
														"customers": {
															"rate": "1.0000"
														}
													}
												],
												"minimum": {
													"value": "15.00",
													"currency": "BRL"
												},
												"maximum": {
													"value": "15.00",
													"currency": "BRL"
												}
											},
											{
												"name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
												"code": "SAQUE_CARTAO_EXTERIOR",
												"chargingTriggerInfo": "Utilizacao de canais de atendimento disponiveis no exterior para retirada em especie na funcao credito ou debito.",
												"prices": [
													{
														"interval": "1_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "2_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "3_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "4_FAIXA",
														"value": "25.00",
														"currency": "BRL",
														"customers": {
															"rate": "1.0000"
														}
													}
												],
												"minimum": {
													"value": "25.00",
													"currency": "BRL"
												},
												"maximum": {
													"value": "25.00",
													"currency": "BRL"
												}
											},
											{
												"name": "PAGAMENTO_CONTAS_UTILIZANDO_FUNCAO_CREDITO",
												"code": "TARIFA_PAGAMENTO_CONTAS",
												"chargingTriggerInfo": "Realizacao de procedimentos operacionais para o pagamento de contas (agua, luz, telefone, gas, tributos, boletos de cobranca, etc.), utilizando a funcao credito do cartao.",
												"prices": [
													{
														"interval": "1_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "2_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "3_FAIXA",
														"value": "0.00",
														"currency": "BRL",
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "4_FAIXA",
														"value": "9.90",
														"currency": "BRL",
														"customers": {
															"rate": "1.0000"
														}
													}
												],
												"minimum": {
													"value": "9.90",
													"currency": "BRL"
												},
												"maximum": {
													"value": "9.90",
													"currency": "BRL"
												}
											}
										]
									},
									"interest": {
										"rates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "NA",
												"applications": [
													{
														"interval": "1_FAIXA",
														"indexer": {
															"rate": "0.0348"
														},
														"customers": {
															"rate": "0.3195"
														}
													},
													{
														"interval": "2_FAIXA",
														"indexer": {
															"rate": "0.0448"
														},
														"customers": {
															"rate": "0.0210"
														}
													},
													{
														"interval": "3_FAIXA",
														"indexer": {
															"rate": "0.0910"
														},
														"customers": {
															"rate": "0.0342"
														}
													},
													{
														"interval": "4_FAIXA",
														"indexer": {
															"rate": "0.1290"
														},
														"customers": {
															"rate": "0.6254"
														}
													}
												],
												"minimumRate": "0.0029",
												"maximumRate": "0.1348"
											}
										],
										"instalmentRates": [
											{
												"referentialRateIndexer": "PRE_FIXADO",
												"rate": "NA",
												"applications": [
													{
														"interval": "1_FAIXA",
														"indexer": {
															"rate": "0.1098"
														},
														"customers": {
															"rate": "0.1301"
														}
													},
													{
														"interval": "2_FAIXA",
														"indexer": {
															"rate": "0.1123"
														},
														"customers": {
															"rate": "0.0007"
														}
													},
													{
														"interval": "3_FAIXA",
														"indexer": {
															"rate": "0.0000"
														},
														"customers": {
															"rate": "0.0000"
														}
													},
													{
														"interval": "4_FAIXA",
														"indexer": {
															"rate": "0.1148"
														},
														"customers": {
															"rate": "0.8691"
														}
													}
												],
												"minimumRate": "0.1098",
												"maximumRate": "0.1148"
											}
										],
										"otherCredits": [
											{
												"code": "SAQUE_A_CREDITO",
												"additionalInfo": null
											},
											{
												"code": "PAGAMENTOS_CONTAS",
												"additionalInfo": null
											}
										]
									},
									"termsConditions": {
										"minimumFeeRate": "0.15",
										"additionalInfo": null,
										"elegibilityCriteriaInfo": "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/cartoes/cartoes-com-limites-mais-altos/ourocard-gold#/",
										"closingProcessInfo": "https://www.bb.com.br/pbb/pagina-inicial/perguntas-frequentes#/"
									}
								}
							]
						}
					]
				}
			}
		});
}
