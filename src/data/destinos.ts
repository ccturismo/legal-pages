/*
 * Destinos atendidos pela C&C Turismo.
 *
 * Origem: app ccturismo/viaje-conectado — src/components/Destinations.tsx
 * (lista) e src/pages/DestinationDetail.tsx (roteiros, duração e capacidade).
 * As imagens vieram do mesmo repositório. Ao incluir ou remover um destino,
 * mantenha os dois lugares em sincronia.
 *
 * O campo `nextDate` do app não foi trazido: os valores lá são de janeiro e
 * fevereiro de 2025 e já venceram. Datas de saída mudam a cada temporada e
 * precisam de uma fonte que seja mantida, não de uma cópia que envelhece.
 *
 * Todas as viagens são nacionais, com hospedagem no Brasil. Dois roteiros
 * incluem travessia de fronteira por um dia — marcada em `travessia`.
 *
 * Curitiba aparece em dois roteiros de propósito, não por duplicação: um vai
 * à cidade direto, o outro passa por ela na volta do litoral catarinense.
 */
import aparecida from '../assets/destinos/aparecida.jpg';
import camposJordao from '../assets/destinos/campos-jordao.jpg';
import capitolio from '../assets/destinos/capitolio.jpg';
import cataratasIguacu from '../assets/destinos/cataratas-iguacu.jpg';
import curitiba from '../assets/destinos/curitiba.jpg';
import holambra from '../assets/destinos/holambra.jpg';
import paraguai from '../assets/destinos/paraguai.jpg';
import pocosCaldas from '../assets/destinos/pocos-caldas.jpg';
import saoRoque from '../assets/destinos/sao-roque.jpg';
import serraNegra from '../assets/destinos/serra-negra.jpg';

export interface Etapa {
	dia: string;
	titulo: string;
	descricao: string;
}

export interface Destino {
	slug: string;
	nome: string;
	uf: string;
	descricao: string;
	/**
	 * Campos opcionais: os destinos vindos do app têm todos preenchidos; os
	 * acrescentados depois aguardam foto, roteiro e capacidade. A página do
	 * destino omite as seções que faltarem, em vez de inventar conteúdo.
	 */
	imagem?: ImageMetadata;
	duracao?: string;
	grupo?: string;
	/** Roteiro com travessia de fronteira por um dia, sem pernoite no exterior. */
	travessia?: string;
	roteiro?: Etapa[];
	/** O que o roteiro inclui, quando a divisão por dias ainda não foi definida. */
	destaques?: string[];
}

export const destinos: Destino[] = [
	{
		slug: 'capitolio',
		nome: 'Capitólio',
		uf: 'MG',
		imagem: capitolio,
		descricao: 'Cânions impressionantes e águas cristalinas do Lago de Furnas',
		duracao: '3 dias',
		grupo: 'até 40 pessoas',
		roteiro: [
			{
				dia: 'Dia 1',
				titulo: 'Saída e chegada',
				descricao:
					'Saída às 22h do ponto de embarque. Viagem noturna com paradas estratégicas para descanso.',
			},
			{
				dia: 'Dia 2',
				titulo: 'Passeio de lancha',
				descricao:
					'Check-in no hotel, almoço e passeio de lancha pelos cânions do Lago de Furnas. Jantar e pernoite.',
			},
			{
				dia: 'Dia 3',
				titulo: 'Mirantes e retorno',
				descricao:
					'Café da manhã, visita aos mirantes, tempo livre para compras e retorno à cidade de origem.',
			},
		],
	},
	{
		slug: 'aparecida',
		nome: 'Aparecida',
		uf: 'SP',
		imagem: aparecida,
		descricao: 'O maior santuário mariano do mundo e centro de fé',
		duracao: '1 dia',
		grupo: 'até 46 pessoas',
		roteiro: [
			{
				dia: 'Dia único',
				titulo: 'Visita ao santuário',
				descricao:
					'Saída às 5h, chegada por volta das 9h. Visita à Basílica Nova, Basílica Velha, Passarela da Fé e Porto Itaguaçu. Retorno às 18h.',
			},
		],
	},
	{
		slug: 'holambra',
		nome: 'Holambra',
		uf: 'SP',
		imagem: holambra,
		descricao: 'A cidade das flores com arquitetura holandesa encantadora',
		duracao: '1 dia',
		grupo: 'até 46 pessoas',
		roteiro: [
			{
				dia: 'Dia único',
				titulo: 'Cidade das flores',
				descricao:
					'Saída às 6h, visita ao Parque Van Gogh e ao Moinho Povos Unidos, tempo livre para compras de flores e produtos holandeses. Retorno às 18h.',
			},
		],
	},
	{
		slug: 'campos-jordao',
		nome: 'Campos do Jordão',
		uf: 'SP',
		imagem: camposJordao,
		descricao: 'A Suíça brasileira com clima europeu e chocolates artesanais',
		duracao: '2 dias',
		grupo: 'até 44 pessoas',
		roteiro: [
			{
				dia: 'Dia 1',
				titulo: 'Chegada e Capivari',
				descricao:
					'Saída às 6h, chegada ao meio-dia. Check-in, almoço e passeio pelo bairro de Capivari. Jantar e pernoite.',
			},
			{
				dia: 'Dia 2',
				titulo: 'Morro do Elefante',
				descricao:
					'Café da manhã, teleférico ao Morro do Elefante, visita à fábrica de chocolates, almoço e retorno.',
			},
		],
	},
	{
		slug: 'curitiba',
		nome: 'Curitiba',
		uf: 'PR',
		imagem: curitiba,
		descricao: 'Cidade modelo com parques incríveis e cultura vibrante',
		duracao: '3 dias',
		grupo: 'até 44 pessoas',
		roteiro: [
			{
				dia: 'Dia 1',
				titulo: 'Saída',
				descricao:
					'Saída às 22h, viagem noturna com ar-condicionado e poltronas reclináveis.',
			},
			{
				dia: 'Dia 2',
				titulo: 'City tour',
				descricao:
					'Check-in, almoço e city tour pela Linha Turismo: Jardim Botânico, Ópera de Arame e Museu Oscar Niemeyer.',
			},
			{
				dia: 'Dia 3',
				titulo: 'Passeio de trem',
				descricao:
					'Passeio de trem pela Serra do Mar até Morretes, almoço com barreado típico e retorno.',
			},
		],
	},
	{
		slug: 'pocos-de-caldas',
		nome: 'Poços de Caldas',
		uf: 'MG',
		imagem: pocosCaldas,
		descricao: 'Estância hidrotermal com águas sulfurosas e clima agradável',
		duracao: '3 dias',
		grupo: 'até 44 pessoas',
		roteiro: [
			{
				dia: 'Dia 1',
				titulo: 'Chegada',
				descricao:
					'Saída às 6h, chegada ao meio-dia. Check-in e tarde livre para conhecer o centro histórico.',
			},
			{
				dia: 'Dia 2',
				titulo: 'Passeios',
				descricao:
					'Visita ao Cristo Redentor, Véu das Noivas e Fonte dos Amores, com banho nas termas sulfurosas.',
			},
			{
				dia: 'Dia 3',
				titulo: 'Compras e retorno',
				descricao:
					'Café da manhã, tempo livre para compras de doces e malhas, almoço e retorno.',
			},
		],
	},
	{
		slug: 'cataratas-do-iguacu',
		nome: 'Cataratas do Iguaçu',
		uf: 'PR',
		imagem: cataratasIguacu,
		descricao: 'Uma das 7 maravilhas naturais do mundo com quedas espetaculares',
		duracao: '4 dias',
		grupo: 'até 44 pessoas',
		travessia:
			'A hospedagem é em Foz do Iguaçu. Um dos dias do roteiro atravessa a fronteira para o lado argentino do parque, com retorno ao Brasil no mesmo dia. Leve documento de identificação válido para a travessia.',
		roteiro: [
			{
				dia: 'Dia 1',
				titulo: 'Saída',
				descricao: 'Saída às 20h, viagem noturna com todo conforto.',
			},
			{
				dia: 'Dia 2',
				titulo: 'Chegada e Cataratas',
				descricao:
					'Chegada, check-in e visita ao Parque Nacional do Iguaçu, lado brasileiro.',
			},
			{
				dia: 'Dia 3',
				titulo: 'Lado argentino',
				descricao:
					'Travessia da fronteira para o lado argentino das Cataratas, com retorno a Foz no mesmo dia. Passeio de barco Macuco Safari opcional.',
			},
			{
				dia: 'Dia 4',
				titulo: 'Compras e retorno',
				descricao: 'Tempo livre para compras no Duty Free e retorno à cidade de origem.',
			},
		],
	},
	{
		slug: 'foz-e-ciudad-del-este',
		nome: 'Foz e Ciudad del Este',
		uf: 'PR',
		imagem: paraguai,
		descricao: 'Base em Foz do Iguaçu e um dia inteiro de compras no Paraguai',
		duracao: '3 dias',
		grupo: 'até 46 pessoas',
		travessia:
			'A hospedagem é em Foz do Iguaçu. O dia de compras atravessa a fronteira para Ciudad del Este, no Paraguai, com retorno ao Brasil no mesmo dia. Leve documento de identificação válido e observe os limites da cota de importação da Receita Federal.',
		roteiro: [
			{
				dia: 'Dia 1',
				titulo: 'Saída',
				descricao: 'Saída às 20h, viagem noturna confortável.',
			},
			{
				dia: 'Dia 2',
				titulo: 'Compras em Ciudad del Este',
				descricao:
					'Chegada e check-in em Foz do Iguaçu. Travessia da fronteira e dia inteiro de compras nos shoppings e lojas de Ciudad del Este, com retorno a Foz no fim do dia.',
			},
			{
				dia: 'Dia 3',
				titulo: 'Retorno',
				descricao: 'Manhã livre para as últimas compras e retorno à cidade de origem.',
			},
		],
	},
	{
		slug: 'sao-roque',
		nome: 'São Roque',
		uf: 'SP',
		imagem: saoRoque,
		descricao: 'A terra do vinho paulista com vinícolas e gastronomia',
		duracao: '1 dia',
		grupo: 'até 46 pessoas',
		roteiro: [
			{
				dia: 'Dia único',
				titulo: 'Rota do Vinho',
				descricao:
					'Saída às 7h, visita a três vinícolas com degustação, almoço típico italiano, tempo para compras e retorno às 19h.',
			},
		],
	},
	{
		slug: 'beto-carrero-balneario-curitiba',
		nome: 'Beto Carrero, Balneário Camboriú e Curitiba',
		uf: 'SC e PR',
		descricao:
			'Parque temático e praia no litoral catarinense, com parada em Curitiba na volta',
		destaques: [
			'Dia no Beto Carrero World, em Penha',
			'Balneário Camboriú',
			'Parada em Curitiba no caminho de volta',
		],
	},
	{
		slug: 'ibitinga',
		nome: 'Ibitinga e passeio de barco',
		uf: 'SP',
		descricao:
			'A capital nacional do bordado, com passeio de barco pela eclusa e tempo nas feiras',
		destaques: [
			'Passeio de barco pela eclusa',
			'Feiras de cama, mesa e banho',
			'Tempo livre para compras nas lojas da cidade',
		],
	},
	{
		slug: 'jaguariuna',
		nome: 'Jaguariúna e Pedreira',
		uf: 'SP',
		descricao: 'Passeio de trem de Jaguariúna a Pedreira, com almoço na cidade das porcelanas',
		destaques: [
			'Passeio de trem de Jaguariúna até Pedreira',
			'Almoço em Pedreira',
			'Tempo na cidade',
		],
	},
	{
		slug: 'zoo-de-itatiba',
		nome: 'Zoo de Itatiba',
		uf: 'SP',
		descricao:
			'Dia no zoológico de Itatiba, no interior paulista, com ingresso e guia inclusos',
		destaques: [
			'Ingresso do zoológico incluso',
			'Guia acompanhando o grupo durante a viagem',
			'Transporte em ônibus fretado, ida e volta',
		],
	},
	{
		slug: 'serra-negra',
		nome: 'Serra Negra',
		uf: 'SP',
		imagem: serraNegra,
		descricao: 'Estância climática com teleférico e águas minerais',
		duracao: '1 dia',
		grupo: 'até 46 pessoas',
		roteiro: [
			{
				dia: 'Dia único',
				titulo: 'Passeio completo',
				descricao:
					'Saída às 6h, passeio de teleférico, visita à fonte de água mineral, almoço, tempo livre no centro e retorno às 18h.',
			},
		],
	},
];
