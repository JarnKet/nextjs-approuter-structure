"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// ການນຳໃຊ້ useSearchParams ເພື່ອດຶງເອົາ query parameter ບາງຕົວຈຳເປັນຕ້ອງໃຊ້ຮ່ວມກັບ Suspense ເນື່ອງຈາກວ່າ ເຖິງວ່າຈະເປັນ "use client" ກໍ່ຕາມ ແຕ່ວ່າ Next ມັນກໍ່ນຳໄປ Server Render ຄືເກົ່າ. ດັ່ງນັ້ນ, ຈິ່ງເອົາ Suspense ເຂົ້າມາຄອບໄວ້ ເພື່ອໃຫ້ຕົວ Next ຮູ້ວ່າຈະມີການ Hold ໄວ້ກ່ອນຈົນກວ່າ Client ຈະເຮັດວຽກກັບມັນ.

function UseSearchParamsComponent() {
	const searchParams = useSearchParams();

	useEffect(() => {
		const name = searchParams.get("name");

		// ..... another logic
	}, [searchParams]);

	return <div>UseSearchParams</div>;
}

export default function UseSearchParams() {
	return (
		<Suspense>
			<UseSearchParamsComponent />
		</Suspense>
	);
}
