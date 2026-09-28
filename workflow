name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4name: markdownlint

on:
  push:
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      name: markdownlint

on:
  push:
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install markdownlint-cli2
        run: npm install --save-dev markdownlint-cli2

      - name: Run markdownlint
        run: npx markdownlint-cli2 "**/*.md"default: false

MD001: true
MD002: false

MD003:
  style: "atx"

MD004:
  style: "consistent"

MD005: true
MD006: false
MD007: false
MD009: false
MD010: falsename: markdownlint

on:
  push:
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install markdownlint-cli2
        run: npm install --save-dev markdownlint-cli2

      - name: Run markdownlint
        run: npx markdownlint-cli2 "**/*.md"Pyramid/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── web/
│   └── index.html
├── README.md
└── ...