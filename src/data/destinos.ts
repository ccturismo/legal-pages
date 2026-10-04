/*
 * Destinos atendidos pela C&C Turismo.
 *
 * Origem: tela de destinos do app (ccturismo/viaje-conectado,
 * src/components/Destinations.tsx). As imagens vieram do mesmo repositório.
 * Ao incluir ou remover um destino, mantenha os dois lugares em sincronia.
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

export interface Destino {
	nome: string;
	uf: string;
	imagem: ImageMetadata;
	descricao: string;
}

export const destinos: Destino[] = [
	{
		nome: 'Capitólio',
		uf: 'MG',
		imagem: capitolio,
		descricao: 'Cânions impressionantes e águas cristalinas em Minas Gerais',
	},
	{
		nome: 'Aparecida',
		uf: 'SP',
		imagem: aparecida,
		descricao: 'O maior santuário mariano do mundo e fé que transforma',
	},
	{
		nome: 'Holambra',
		uf: 'SP',
		imagem: holambra,
		descricao: 'A cidade das flores com charme holandês no interior paulista',
	},
	{
		nome: 'Campos do Jordão',
		uf: 'SP',
		imagem: camposJordao,
		descricao: 'A Suíça brasileira com clima europeu e gastronomia refinada',
	},
	{
		nome: 'Curitiba',
		uf: 'PR',
		imagem: curitiba,
		descricao: 'Cidade modelo com parques incríveis e cultura vibrante',
	},
	{
		nome: 'Poços de Caldas',
		uf: 'MG',
		imagem: pocosCaldas,
		descricao: 'Estância hidrotermal com águas sulfurosas e clima agradável',
	},
	{
		nome: 'Cataratas do Iguaçu',
		uf: 'PR',
		imagem: cataratasIguacu,
		descricao: 'Uma das 7 maravilhas naturais do mundo com quedas espetaculares',
	},
	{
		nome: 'Paraguai',
		uf: 'Internacional',
		imagem: paraguai,
		descricao: 'Compras e turismo internacional em Ciudad del Este',
	},
	{
		nome: 'São Roque',
		uf: 'SP',
		imagem: saoRoque,
		descricao: 'A terra do vinho paulista com vinícolas e gastronomia',
	},
	{
		nome: 'Serra Negra',
		uf: 'SP',
		imagem: serraNegra,
		descricao: 'Estância climática com teleférico e águas minerais',
	},
];
