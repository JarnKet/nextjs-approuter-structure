"use client";

import { useState, useEffect } from "react";

import Button from "@/app/(core)/_components/Button";

type BlogDetail = {
	title: string;
};

export default function Blog({ params }: { params: { id: string } }) {
	const { id } = params;

	const [blogDetail, setBlogDetail] = useState({} as BlogDetail);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}`,
			);
			const data = await res.json();
			setBlogDetail(data);
		};

		fetchData();
	}, [id]);

	return (
		<article>
			<h1>{blogDetail.title}</h1>
			<small>Blog {id}</small>
		</article>
	);
}
