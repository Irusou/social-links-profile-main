import Link, { LinkProps } from "./Links";

interface LinksListProps {
	links: LinkProps[];
}
export default function LinksList({ links }: LinksListProps) {
	return (
		<>
			<div className="links-container">
				{links.map((link, index) => (
					<Link key={index} url={link.url} name={link.name} />
				))}
			</div>
		</>
	);
}
