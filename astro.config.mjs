// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'C&C Turismo',
			description:
				'Políticas e documentos legais da C&C Turismo: termos de uso, privacidade e cookies.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português (Brasil)', lang: 'pt-BR' },
			},
			sidebar: [
				{
					label: 'Políticas',
					items: [
						{ label: 'Termos de Uso', slug: 'termos-de-uso' },
						{ label: 'Política de Privacidade', slug: 'privacidade' },
						{ label: 'Política de Cookies', slug: 'cookies' },
					],
				},
			],
		}),
	],
});
