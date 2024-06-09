# Next.js 14 App Router

## 1. Routing

Nextjs ມີການຈັດການກັບ Routing ຜ່ານ Folder ທີ່ມີຊື່ວ່າ `app` ເຊິ່ງເປັນ Folder ຫຼັກໃນການຈັດເກັບທຸກໆ Route ທີ່ມີຢູ່ໃນລະບົບ.

![App Router Routing](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-segments-to-path-segments.png&w=1920&q=75)

ເຊິ່ງຟາຍທີ່ບົ່ງບອກວ່າເປັນໜ້າໃດໜຶ່ງ ຫຼື Path ໃດໜຶ່ງກໍ່ຄືຟາຍທີ່ມີຊື່ວ່າ `page.js/.tsx` ເຊິ່ງມັນທຽບເທົ່າກັບ `app/page.js` = `domainname.com/`

- `app/about-us/page.js` = `domainname.com/about-us`

![Pages](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fpage-special-file.png&w=1920&q=75)

```jsx
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>
}
```

### 1.1 Layout

layout ເປັນໜຶ່ງໃນຟາຍຊະນິດພິເສດຂອງ Nextjs ທີ່ເຮັດໜ້າທີ່ເປັນຕົວຄວບ ທຸກໆໜ້າທີ່ຢູ່ໃນ path ດຽວກັນເພື່ອກຳນົດຄຸນລັກສະນະໃດໜຶ່ງພາຍໃນເວັບ ໃຫ້ສະແດງຜົນໃນສິ່ງດຽວກັນ.

layout ແບ່ງອອກເປັນ 2 ຊະນິດຄື: Root Layout ແລະ Locale Layout.

#### 1.1.1 Root Layout

ເປັນ top level ທີ່ຢູ່ໃນ folder app ທີ່ຈະປະກອບດ້ວຍ Tag html ແລະ body. ໃນສ່ວນຂອງຟາຍນີ້ເປັນສ່ວນທີ່ສຳຄັນຫຼາຍ ໃນການຈັດການ ແລະ ປັບແຕ່ງ HTML File ເພື່ອທີ່ຈະໃຫ້ Server ສົ່ງໄປຫາ Client.

ການຈັດການ ແລະ Custom ທີ່ເກີດຂຶ້ນຢູ່ໃນຟາຍ Root Layout ແມ່ນມີ useCase ດັ່ງນີ້:

- ການເຮັດຫຼາຍພາສາ multi-language.
- ການເຮັດ Static ແລະ Dynamic SEO.
- ການກຳນົດ Font ຂອງລະບົບ ໂດຍສະເພາະ Google Font ທີ່ Nextjs Integate ແລະ Optimize ມາໃຫ້ແລ້ວ.
- ການກຳນົດ Provider ໃຫ້ກັບ Third Party ອື່ນໆເຊັ້ນ: Stripe, I18 ແລະ ອື່ນໆ.

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
```

#### 1.1.2 Local Layout

local layout ຫຼື nested layout ເປັນຟາຍທີ່ເຮັດວຽກກ່ຽວກັບ UI ເປັນສ່ວນໃຫ່ຍ ທີ່ໄວ້ກຳນົດຄຸນລັກສະນະສະເພາະໃດໜຶ່ງ ທີ່ຢູ່ພາຍໃນ path ໃດໜຶ່ງ. ຕົວຢ່າງ:​ Sidebar ທີ່ມີສະເພາະໃນໜ້າ Dashboard ເທົ່ານັ້ນ. ສ່ວນໜ້າອື່ນໆບໍ່ມີ ເປັນຕົ້ນ.

![Nextjs Layout](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Flayout-special-file.png&w=1920&q=75)

```jsx
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  )
}
```

![Nested Layout](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnested-layouts-ui.png&w=1920&q=75)

### 1.2 Linking and Navigating

ການນຳທາງ ຫຼື ປ່ຽນເສັ້ນທາງຂອງ Nextjs ຈະມີຢູ່ 4 ວິທີທີ່ໃຊ້ ອີງຕາມສະຖານະການ. ເຊິ່ງປະກອບມີດັ່ງນີ້:

#### 1.2.1 Link Component

`<Link></Link>` ທຽບເທົ່າກັບແທັກ `<a></a>` ໃນ HTML ປົກກະຕິ. ແຕ່ວ່າໃນ Nextjs ຈະແນະນຳໃຫ້ໃຊ້ Link ເປັນຫຼັກ.

```jsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

#### 1.2.2 useRouter (Client Component)

`useRouter` ເປັນອີກໜຶ່ງທາງເລືອກໃນການຊ່ວຍໃຫ້ນຳທາງໄປອີກໜ້າໃດໜຶ່ງ ແຕ່ວ່າ useRouter ຈະຖືກໃຊ້ສະເພາະ action ໃດໜຶ່ງທີ່ເກີດຂຶ້ນກັບຜູ້ໃຊ້ຕໍ່ Broswer (Client Side)

```jsx
'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

useRouter ຈະປະກອບມີ 4 method ຫຼັກໆດັ່ງນີ້:

1. push ນຳທາງໄປຫາໜ້າໃດໜຶ່ງ
2. replace ປ່ຽນໜ້າໃດໜຶ່ງ ແທນໜ້າໃດໜຶ່ງ
3. refresh ຣີເຟສໜ້າໃດໜຶ່ງ
4. prefecth
5. back ກັບຄືນ
6. forward ໄປໜ້າ

### 1.3 Dynamic Route
