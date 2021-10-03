# Optional Chaining

O encadeamento opcional nos permite escrever código em que o TypeScript pode interromper imediatamente a execução de algumas expressões se encontrarmos um valor nulo ou indefinido. A estrela do show em encadeamento opcional é `?.`, o operador para acessos de propriedade opcionais.

## Access property in object

```ts
const firstName = student?.name?.firstname;
```

## Function call

```ts
adventurer.someNonExistentMethod?.();
```

## Access array item

```ts
const item = arr?.[3];
```

## Comando

```bash
yarn tsc src/OptionalChaining/index.ts && node src/OptionalChaining/index.js
```