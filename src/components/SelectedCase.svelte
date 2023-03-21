<script lang="ts">
	import Case from './SelectedCase/Case.svelte';
	import foodeliveImg from '../assets/project/foodelive.png';
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
			description:
				"Whether you're ordering food for two or hosting a party for thousands people, you will always find the best menu and service that's right for you.",
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
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-lime-500',
			txt: 'text-lime-400'
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
			description: 'Where we can train our mind. Play with friends. May the force be with you!',
			bg: 'bg-teal-500',
			txt: 'text-teal-400'
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
			description: 'A platform built in company that have courses to level up your skill',
			bg: 'bg-sky-500',
			txt: 'text-sky-400'
		}
	];
</script>

<section id="projects" class="my-10">
	{#each listProject as item, idx}
		{@const isOdd = idx % 2 == 1}
		<Case {isOdd} {item} />
	{/each}
</section>
