"use client";

export default function AccessLocalStorage() {
	const dataFromLCS =
		typeof window !== "undefined" &&
		JSON.parse(localStorage.getItem("your-key-data") || "{}");

	return <div>AccessLocalStorage {dataFromLCS || "No Data"}</div>;
}
