import JSLogo from '../../assets/tech/javascript.svg';
import ReactLogo from '../../assets/tech/react.svg';
import ScssLogo from '../../assets/tech/scss.svg';
import TSLogo from '../../assets/tech/typescript.svg';
import SvelteLogo from '../../assets/tech/svelte.svg';

const HEIGHT_MARGIN = 32;

const LIST_TECH = [
	{
		title: 'Sass/Scss',
		img: ScssLogo
	},
	{
		title: 'React',
		img: ReactLogo
	},
	{
		title: 'Javscript',
		img: JSLogo
	},
	{
		title: 'Typescript',
		img: TSLogo
	},
	{
		title: 'Svelte',
		img: SvelteLogo
	}
];

const BOUNDARY_OTIONS = {
	isStatic: true,
	render: {
		fillStyle: 'transparent',
		strokeStyle: 'transparent'
	}
};

export { BOUNDARY_OTIONS, LIST_TECH, HEIGHT_MARGIN };
