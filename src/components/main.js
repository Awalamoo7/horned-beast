import HornedBeast from "./HornedBeast";
import data from "../services/beastData.json";

export default function Main() {
	const beasts = data.map((item) => {
		return (
			<HornedBeast
				key={item._id}
				title={item.title}
				imageUrl={item.image_url}
				description={item.description}
			/>
		);
	});

	return <main>{beasts}</main>;
}
