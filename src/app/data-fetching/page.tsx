"use client";

import { useState, useEffect } from "react";

export default function DataFetching() {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);

	// Sequential Data Fetching
	useEffect(() => {
		async function getPosts() {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			const data = await res.json();
			setPosts(data);
		}

		async function getUsers() {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
			setUsers(data);
		}

		getPosts();
		getUsers();
	}, []);

	// Parallel Data Fetching
	useEffect(() => {
		const fetchData = async () => {
			const [posts, users] = await Promise.all([
				fetch("https://jsonplaceholder.typicode.com/posts"),
				fetch("https://jsonplaceholder.typicode.com/users"),
			]);
			const [postsData, usersData] = await Promise.all([
				posts.json(),
				users.json(),
			]);
			setPosts(postsData);
			setUsers(usersData);
		};

		fetchData();
	}, []);

	return <div>DataFetching Pattern</div>;
}
