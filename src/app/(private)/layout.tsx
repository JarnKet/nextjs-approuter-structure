"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PrivateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token") || null;
		if (!token) {
			console.log("No token found");
			setIsAuthenticated(false);
			return;
		}

		setIsAuthenticated(true);
	}, []);

	useEffect(() => {
		if (!isAuthenticated) {
			router.replace("/");
		}
	}, [isAuthenticated, router.replace]);

	return (
		<div>
			Private
			{children}
		</div>
	);
}
