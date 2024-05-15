export interface LinkProps {
	url: string;
	name: string;
}
export default function Link({ url, name }: LinkProps) {
	return (
		<a className="link" href={url}>
			{name}
		</a>
	);
}
