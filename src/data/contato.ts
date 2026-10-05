/*
 * Canais de contato da C&C Turismo.
 *
 * O WhatsApp fica em formato internacional, apenas dígitos:
 * 55 (Brasil) + 12 (DDD) + número, sem +, espaços ou traços.
 */
export const WHATSAPP = '5512982818872';

export const EMAIL_CONTATO = 'contato@ccturismo.com.br';
export const EMAIL_PRIVACIDADE = 'privacidade@ccturismo.com.br';

/**
 * Monta um link wa.me com mensagem pré-preenchida. O texto chega digitado na
 * conversa, mas o visitante ainda precisa apertar enviar.
 */
export function linkWhatsApp(mensagem: string): string {
	return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagem de interesse em um roteiro específico. */
export function mensagemDestino(nome: string, duracao?: string): string {
	const detalhe = duracao ? ` (${duracao})` : '';
	return `Olá! Vi a excursão para ${nome}${detalhe} no site e gostaria de saber as próximas datas e o valor.`;
}

export const MENSAGEM_GERAL =
	'Olá! Gostaria de saber mais sobre as próximas excursões da C&C Turismo.';
