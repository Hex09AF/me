<script lang="ts">
	import Case from './SelectedCase/Case.svelte';
	import foodeliveImg from '../assets/project/foodelive.webp';
	import devouchImg from '../assets/project/devouch.webp';
	import sudokuImg from '../assets/project/sudoku.webp';
	import elearningImg from '../assets/project/elearning.webp';

	const listProject = [
		{
			title: 'Foodelive',
			role: [
				'Product environment',
				'Jira',
				'Agile',
				'Figma',
				'CMS',
				'Client',
				'Vendor',
				'Docker',
				'Gatsby',
				'NextJS',
				'Custom hook',
				'Laravel',
				'Asynchronous',
				'RESTful',
				'MVC MVVM MVP',
				'RBAC',
				'SOLID DRY WET',
				'Race condition',
				'Rabit hole'
			],
			description: 'Ordering food for two or hosting a party for thousands people.',
			bg: 'bg-red-500',
			txt: 'text-red-400',
			projectImg: foodeliveImg
		},
		{
			title: 'Devouch',
			role: [
				'Design pattern',
				'Garbage collection',
				'Side effect',
				'Middleware',
				'Function*',
				'HOC HOF',
				'Immutable data',
				'Profiler',
				'Performance',
				'Admin',
				'MUI',
				'Localization',
				'Leader',
				'Server',
				'Nginx',
				'Deploy'
			],
			description: 'An Admin CMS for manager vendors and vouchers.',
			bg: 'bg-sky-500',
			txt: 'text-sky-400',
			projectImg: devouchImg
		},
		{
			title: 'Sudoku',
			role: [
				'Type safety',
				'Monorepo',
				'ExpressJS',
				'Nodemon PM2',
				'Vite',
				'Remix',
				'Prisma',
				'ChatGPT',
				'Socket IO',
				'CORS',
				'HTTP/HTTPS',
				'Heroku'
			],
			description: 'A game where we can train our mind and have fun with friends.',
			bg: 'bg-amber-500',
			txt: 'text-amber-400',
			projectImg: sudokuImg
		},
		{
			title: 'ELearning',
			role: [
				'Backlog',
				'Frontend developer',
				'Postman',
				'Swagger',
				'Shadow',
				'AWS',
				'Memoization',
				'Redux Saga Injector',
				'Sign url image',
				'Infinity loading',
				'Lazy loading',
				'Virtualize list viewport',
				'Place google javascript api',
				'Husky Lint Prettier',
				'Code splitting'
			],
			description: 'Learning app that help self-learning business people.',
			bg: 'bg-lime-500',
			txt: 'text-lime-400',
			projectImg: elearningImg
		}
	];
</script>

<section id="projects" class="my-10">
	{#each listProject as item, idx}
		{@const isOdd = idx % 2 == 1}
		<Case {isOdd} {item} />
	{/each}
</section>
