interface HeroProps {
	name: string;
	livingAt: string;
	about: string;
}
export function Hero({ name, livingAt, about }: HeroProps) {
	return (
		<>
			<section className="hero-section">
				<h1 className="hero-name">{name}</h1>
				<h2 className="hero-location">{livingAt}</h2>
				<p className="hero-about">"{about}"</p>
			</section>
		</>
	);
}
