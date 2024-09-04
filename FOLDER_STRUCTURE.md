# Next.js 14 Project Organization

ສືບຕໍ່ມາຈາກການເຮັດ Routing, Nextjs ຍັງມີຄວາມສາມາດທີ່ Support ໃນການຈັດການ Project Organization. ແຕ່ວ່າ Next.js ເອງກໍ່ບໍ່ໄດ້ມີ Standard ທີ່ຊັດເຈນ. ດັ່ງນັ້ນການຈະຈັດການໃນສ່ວນນີ້ ແມ່ນຂຶ້ນກັບເຮົາ ຈະປະຍຸກໃຊ້ຄວາມສາມາດຂອງ Framework + ວິທີການຕ່າງໆຂອງໂຕເຮົາເອງ.

ແຕ່ວ່າກ່ອນທີ່ເຮົາຈະໄປຮູ້ຈັກກັບການເຮັດ Folder Structure ເຮົາລອງມາເຮັດຄວາມຮູ້ຈັກກັບຄວາມສາມາດຂອງ Next.js ໃນດ້ານການ Support Project Organization ກັນກ່ອນ ວ່າມີຫຍັງແນ່:

1. Private Folder
2. Route Group
3. src Directory
4. Module Path Aliases

ກ່ອນອື່ນເຮົາຕ້ອງຮູ້ກ່ອນວ່າການເຮັດ Routing ໃນ Nextjs ແມ່ນຈະຂຶ້ນຕາມ Folder ທີ່ຢູ່ໃນ `app` ທີ່ມີກົດໃນການຕັ້ງຊື່ຟາຍວ່າເປັນ `Page.jsx/tsx` ຖ້າຫາກວ່າເປັນຟາຍອື່ນ ຈະບໍ່ຖືກນັບເປັນ routing ດັ່ງຮູບລຸ່ມນີ້:

![Next.js Routing](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-colocation.png&w=3840&q=75)

## 1. Project Organization Features

ເປັນຄວາມສາມາດທີ່ເຂົ້າມາຊ່ວຍ ໃນເລື່ອງການຈັດການຄວາມເປັນລະບຽບຮຽບຮ້ອຍຂອງຟາຍຕ່າງໆໃນໂປຣເຈັກ.

### 1.1 Private Folder

Private Folder ຈະເປັນສິ່ງທີ່ຊ່ວຍໃຫ້ເຮົາສາມາດຈັດກຸ່ມຂອງຟາຍໃຫ້ຢູ່ບ່ອນດຽວກັນໄດ້, ຊ່ວຍໃນເລື່ອງການແຍກ Logic ອອກຈາກ UI ໄດ້. ການເຮັດ Private Folder ແມ່ນເຮັດງ່າຍໆໂດຍການຕັ້ງຊື່ໂຟເດີ້ ທີ່ຂຶ້ນຕົ້ນດ້ວຍ `_folderName`. ພຽງເທົ່ານີ້ Routing System ກໍ່ຈະບໍ່ນັບ Folder ນີ້ເປັນ Route.

![Private Folder](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-private-folders.png&w=3840&q=75)

ເນື້ອໃນພາຍໃນນີ້ຈະເປັນການຈັດການ Folder Structure ໃນຮູບແບບຕ່າງໆທີ່ເປັນມາດຕະຖານ

### 1.2 Route Group

Route Group ຈະມີຄວາມສາມາດຕາມຊື່ເລີຍ ກໍ່ຄືຈະເຮັດໜ້າທີ່ໃນການຈັດການ ແລະ ແບ່ງກຸ່ມຂອງເສັ້ນທາງຕ່າງໆທີ່ຢູ່ເວັບໄຊທ໌ຂອງເຮົາ. ວິທີການເຮັດ Route Group ກໍ່ງ່າຍໆເລີຍ ພຽງແຕ່ຕັ້ງຊື່ໂຟເດີ້ແບບນີ້ `(routeGroup)`.

![Route Group](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-route-groups.png&w=3840&q=75)

### 1.3 src Directory

ເປັນອີກໜຶ່ງທາງເລືອກໃນການຈັດເກັບໂຟເດີ້ຫຼັກແບບ `app` ໃຫ້ຖືກຄອບໂດຍ `src` ເພື່ອບໍ່ໃຫ້ໂຟເດີ້ອື່ນໆໃນອະນາຄົດຢູ່ໃນ root level ຂອງ directory.

![src Directory](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-src-directory.png&w=3840&q=75)

### 1.4 Module Path Aliases (Auto)

ເຂົ້າມາຊ່ວຍໃຫ້ການ import module ຕ່າງໆເຂົ້າມາໃຊ້ມີຄວາມເຂົ້າໃຈ ແລະ ບຳລຸງຮັກສາໄດ້ງ່າຍ

```tsx
// before
import { Button } from '../../../components/button'

// after
import { Button } from '@/components/button'

```

## 2. Project Organization Strategies

ເນື້ອຫາຕໍ່ໄປນີ້ແມ່ນເປັນການປະສົມປະສານລະຫວ່າງ **Project Organization Features** ແລະ **Standard of Folder Structure in React** ເພຶ່ອໃຫ້ໄດ້ຜົນລັບທີ່ໃກ້ຄຽງກັນກັບມາດຕະຖານການເຮັດ Frontend ໂດຍອີງໃສ່ React ເປັນຫຼັກ. ເຊິ່ງການຈັດການ Folder Structure ແມ່ນເຮົາຈະແບ່ງອອກເປັນ 3 Level ດັ່ງນີ້:

### 2.1 Level 1: Grouping by "File Types"

ເປັນການຈັດລະບຽບຂອງຟາຍໃຫ້ຢູ່ກຸ່ມດຽວກັນ ໂດຍອີງຕາມປະເພດຂອງຟາຍ ເຊິ່ງມີຕົວຢ່າງດັ່ງນີ້:

![Level 1](/public/images/level1.png)

- ເໝາະກັບຂະໜາດໂຄງການ: **ນ້ອຍ ຫາ ກາງ**
- ຈຸດເດັ່ນ: **ງ່າຍ ແລະ ບໍ່ຊັບຊ້ອນ**
- ຈຸດດ້ອຍ:
  - **ເມຶ້່ອໂປຣເຈັກໃຫ່ຍຂຶ້ນໄວເລື້ອຍໆ ຈະຍາກຕໍ່ການບຳລຸງຮັກສາ**
  - **ບໍ່ມີການແຍກ Logic ອອກຈາກ UI ຢ່າງຊັດເຈນ.**

### 2.2 Level 2: Grouping by "File Types and Features"

ເປັນການຈັດລະບຽບຂອງຟາຍໃຫ້ຢູ່ດຽວກັນ ໂດຍອີງຕາມປະເພດຂອງຟາຍ ແລະ Feature ຕ່າງໆ

![Level 2](/public/images/level2.png)

- ເໝາະກັບຂະໜາດໂຄງການ: **ກາງ ຫາ ໃຫ່ຍ**
- ຈຸດເດັ່ນ:
  - **ງ່າຍ ແລະ ບໍ່ຊັບຊ້ອນ**
  - **ຟາຍຕ່າງໆ ຖືກຈັດກຸ່ມແຍກຕາມ Feature**
- ຈຸດດ້ອຍ: **Logic ຍັງຖືກແຍກໄວ້ໃນຄົນລະບ່ອນຢູ່**

### 2.3 Level 3: Grouping by "Features/Modules"

ເປັນຂັ້ນທີ່ເໜືອກວ່າທັງ 2 Level ທີ່ຜ່ານມາ ໂດຍຈະເປັນການແຍກແຕ່ລະຟາຍໄວ້ໃນແຕ່ລະ Module ເປັນຫຼັກ.

![Level 3](/public/images/level3.png)

- ເໝາະກັບຂະໜາດໂຄງການ: **ໃຫ່ຍ ຫາ ຊັບຊ້ອນ**
- ຈຸດເດັ່ນ:
  - **ຟາຍຕ່າງໆ ຖືກຈັດເກັບເປັນລະບົບລະບຽບອີງຕາມ Module**
  - **ແຕ່ລະ Module ຈະຈັດເກັບຟາຍທີ່ກ່ຽວຂ້ອງກັບການເຮັດວຽກຂອງຕົນເອງເທົ່ານັ້ນ**
- ຈຸດດ້ອຍ: **ຕ້ອງໃຊ້ປະສົບການ ແລະ ເວລາໃນການຕັດສິນໃຈແຍກ ຫຼື ຈັດກຸ່ມສິ່ງຕ່າງໆໃຫ້ຖືກຕ້ອງ**

## 3. Extras

### 3.1 UI Components

- components: React components - the main UI building blocks.
- design-system: Fundamental UI elements and patterns based on the design system.
- icons: SVG icons that are meant to be used inline.

### 3.2 React Specific

- hooks: Custom React hooks for shared logic.
- hocs: React Higher-order Components.
- contexts/providers: Contains React Contexts and Providers.

### 3.3 Utilities & External Integrations

- utils: Utilities for universal logic that is not related to business logic or any technologies, e.g. string manipulations, mathematic calculations, etc.
- lib: Utilities that are related to certain technologies, e.g. DOM manipulations, HTML-related logic, localStorage, IndexedDB, etc.
- plugins: Third-party plugins (e.g. i18n, Sentry, etc.)

### 3.4 Business Logic

- services: Encapsulates main business & application logic.
- helpers: Provides business-specific utilities.

### 3.5 Styles

- styles: Contains (global) CSS or CSS-in-JS styles.

### 3.6 TypeScript and Configurations

- types: For general TypeScript types, enums and interfaces.
- configs: Configs for the application (e.g. environment variables)
- constants: Constant, unchanged values (e.g. export const MINUTES_PER_HOUR = 60).

### 3.7 Server Communication

- api: For logic that communicates with the server(s).
- graphql: GraphQL-specific code.

### 3.8 State Management

- states/store: Global state management logic (Zustand, Valtio, Jotai, etc.)
- reducers, store, actions, selectors: Redux-specific logic

### 3.9 Routing

- routes/router: Defining routes (if you're using React Router or the like).
- pages: Defining entry-point components for pages.

### 3.10 Testing

tests: Unit tests and other kinds of tests for your code.
