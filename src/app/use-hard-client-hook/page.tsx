"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

function Child({ isSmallDevice }: { isSmallDevice: boolean }) {
	return (
		<>
			<h1>Hi This is will show on Browser</h1>
			<p>{isSmallDevice ? "Mobile" : "PC"}</p>
		</>
	);
}

function Parent() {
	// ບ່ອນຈັດເກັບ Custom Hook ທີ່ມີການຫຼິ້ນກັບ Browser ໜັກໆ
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	return (
		<Suspense>
			<Child isSmallDevice={isSmallDevice} />
		</Suspense>
	);
}

// ປິດ Server Side Rendering ແບບສົມບູນ
const UseHardClientHookComponent = dynamic(() => Promise.resolve(Parent), {
	ssr: false,
});

export default function UseHardClientHook() {
	return <UseHardClientHookComponent />;
}
