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

c

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

ການເຮັດ Dynamic Route ກໍ່ສາມາດເຮັດໄດ້ງ່າຍດາຍໂດຍທີ່ບໍ່ຈຳເປັນຕ້ອງລົງ ຫຼື ໂຫຼດ Library ມາເພີ່ມເຕີມ. Nextjs ສາມາດເຮັດ Dynamic Route ແບບງ່າຍດາຍດ້ວຍການ ສ້າງ folder `/app/blog/[id]` ແລະ ພາຍໃນ Folder ດັ່ງກ່າວກໍ່ປະກອບດ້ວຍຟາຍຫຼັກຊື່ວ່າ `page.js/jsx/tsx`

```jsx
"use client";

import { useState, useEffect } from "react";

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

```

## 2. Data Fetching

ການດຶງຂ້ໍມູນຂອງ Nextjs ແມ່ນສາມາດເຮັດໄດ້ດ້ວຍ `fetch` ຟັງເຊິນທີ່ມີມາໃຫ້ແລ້ວ. ການດຶງ Data ໃນ Nextjs ສາມາດດຶງໄດ້ 2 ວິທີຄື: **Sequential** ແລະ **Parallel**

![Data Fetching Pattern](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fsequential-parallel-data-fetching.png&w=1920&q=75)

### 2.1 Sequential Data Fetching

ເປັນການດຶງຂໍ້ມູນແບບລຽງລຳດັບ ເໝາະສຳລັບການດຶງຂໍ້ມູນແບບແຍກສ່ວນໃຜມັນ. ແຕ່ວ່າຂໍ້ເສຍຄືຕ້ອງໄດ້ຖ້າຕົວໃດຕົວໜຶ່ງດຶງແລ້ວ ຕົວຕໍ່ໄປຈິ່ງຈະເຮັດວຽກ. ເວລາທີ່ເຮົາມີການດຶງຂໍ້ມູນຫຼາຍໆ Route ອາດເຮັດໃຫ້ການໂຫຼດຂໍ້ມູນຊ້າໄດ້.

```jsx
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

  // getPosts ຈະເຮັດວຽກ່ອນ ແລ້ວຕໍ່ຈາກນັ້ນຈິ່ງແມ່ນ getUsers
  getPosts();
  getUsers();
 }, []);
```

### 2.2 Parallel Data Fetching

ເປັນການດຶງຂໍ້ມູນແບບຫຼາຍໆຕົວພ້ອມກັນ ຊ່ວຍໃຫ້ຫຼຸດເວລາໃນການດຶງຂໍ້ມູນໃຫ້ໜ້ອຍລົງ ເນື່ອງຈາກວ່າການດຶງຂໍ້ມູນແບບນີ້ ຈະເຮັດວຽກພ້ອມກັນ ໂດຍທີ່ບໍ່ຈຳເປັນຕ້ອງຖ້າຕົວໃດໜຶ່ງເຮັດວຽກແລ້ວກ່ອນ. ແຕ່ວ່າຂໍ້ເສຍແມ່ນ **ເມື່ອມີຕົວໃດຕົວໜຶ່ງຕາຍຖືວ່າຕາຍໝົດ**

```jsx
const [posts, setPosts] = useState([]);
 const [users, setUsers] = useState([]);

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
```

## 3. Rendering

ປັດຈຸບັນ React v18+ ຂຶ້ນໄປແມ່ນສາມາດຮອງຮັບ Server Component ເຊິ່ງກໍ່ຄື Component ທີ່ສາມາດເຮັດວຽກຢູ່ເທິງ Server ໄດ້. ດັ່ງນັ້ນ, ໃນການຂຽນ Next.js 13+ App Router ແມ່ນສາມາດຂຽນໄດ້ 2 ວິທີຄື:

### 3.1 Server Component (Default)

ເປັນ 1 ໃນ Feature ໃໝ່ທີ່ເຂົ້າມາຊ່ວຍໃນການເພີ່ມປະສິດທິພາບການເຮັດວຽກຂອງເວັບເຮົາໄດ້.

ເຊິ່ງມີຂໍ້ດີເບື້ອງຕົ້ນດັ່ງນີ້:

- Security
- Caching
- Performance
- SEO Optimization

```jsx
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main></main>
}

```

> ຈຸດເດັ່ນຫຼັກໆຂອງ Server Component ແມ່ນການດຶງຂໍ້ມູນຜ່ານ Server. ແຕ່ວ່າການດຶງຂໍ້ມູນແບບນີ້ ອາດພົບບັນຫາທີ່ວ່າ ຈະບໍ່ໄດ້ຂໍ້ມູນແບບ Real Time ຄື Client ເປັນຜູ້ດຶງເອງ ເນື່ອງຈາກວ່າມີການເກັບ Cache. ດັ່ງນັ້ນການດຶງຂໍ້ມູນແບບນີ້ເໝາະສຳລັບການດຶງຂໍ້ມູນທີ່ບໍ່ໄດ້ປ່ຽນແປງຫຼາຍ ເຊັ່ນ: ບົດຄວາມຂ່າວສານຕ່າງໆເປັນຕົ້ນ.

> ການໃຊ້ React Server Component ແມ່ນຈະບໍ່ສາມາດໃຊ້ລູກຫຼິ້ນຕ່າງໆກ່ຽວກັບ Browser API ໄດ້ ແລະ ລວມເຖິງການໃຊ້ React Hook ຕ່າງໆດ້ວຍ. ຖ້າຫາກຢາກໃຊ້ ຕ້ອງປ່ຽນເປັນຮູບແບບຂອງ Client.

### 3.2 Client Component

ເປັນ Component ແບບ Basic ທົ່ວໄປແບບທີ່ເຮົາເຄີຍໃຊ້ຜ່ານມາ. ແຕ່ວ່າວິທີການນຳໃຊ້ແມ່ນຈຳເປັນຕ້ອງໄດ້ເພີ່ມ `"use client"` ຢູ່ເທິງຫົວສຸດຂອງຟາຍ.

```jsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

> ແນ່ນອນຂໍ້ດີຂອງ Client Component ແມ່ນເຮົາສາມາດໃຊ້ Hook ຕ່າງໆໄດ້ ລວມເຖິງການເຂົ້າເຖິງ localStorage ໄດ້ອີກດ້ວຍ.

![React Server Component](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fuse-client-directive.png&w=1920&q=75)
