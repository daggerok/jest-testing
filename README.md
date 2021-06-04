# jest-testing
Testing with Jest

## From scratch

### degit

```bash
npx degit daggerok/jest-testing#main jest-testing 
```

### @vitejs/app

```bash
npm init @vitejs/app jest-testing -- --template vanilla
cd jest-testing ; rm -rf favicon.svg index.html main.js style.css
npm i -ED jest @types/jest @types/node
#vi package.json...
npm run test
```
