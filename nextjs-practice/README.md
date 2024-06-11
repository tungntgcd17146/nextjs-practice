## Getting Started

Clone Repository

```
    git clone git@gitlab.asoft-python.com:tung.nguyen/nextjs-training.git
```

Checkout branch

```
    git checkout develop
```

Install Dependencies

```
    npm install
```

Run the development server:

```
npm run dev
```

Run Unit Test:

```
npm run test
```

Run Storybook:

```
npm run storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Source Structure
.
├── public
│   ├── images
│   │   └── logo.png
│   ├── fonts
│   │   └── custom-font.woff2
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── blog
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   └── api
│   │       └── hello.ts
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   └── Modal.tsx
│   │   └── forms
│   │       └── ContactForm.tsx
│   ├── styles
│   │   ├── globals.css
│   │   ├── Home.module.css
│   │   └── tailwind.css
│   ├── hooks
│   │   └── useAuth.ts
│   ├── context
│   │   └── AuthContext.tsx
│   ├── lib
│   │   └── api.ts
│   ├── api
│   │   ├── auth.ts
│   │   └── user.ts
│   ├── middleware
│   │   └── logger.ts
│   ├── constants
│   │   └── index.ts
│   ├── config
│   │   └── env.ts
│   ├── services
│   │   └── AuthService.ts
│   ├── types
│   │   └── index.ts
│   ├── tests
│   │   ├── components
│   │   │   └── Button.test.tsx
│   │   └── app
│   │       └── page.test.tsx
│   └── storybook
│       ├── main.js
│       ├── preview.js
│       └── stories
│           └── Button.stories.tsx
├── .eslintrc.json
├── .prettierrc
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json

