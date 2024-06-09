import Link from "next/link";

export default function Blogs() {
	return (
		<div>
			All Blogs
			<Link href={"/blogs/1"}>Blog 1</Link>
		</div>
	);
}
