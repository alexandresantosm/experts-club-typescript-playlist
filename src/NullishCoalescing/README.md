# Nullish Coalescing

O operador de coalescência nula é um recurso do ECMAScript muito utilizado em conjunto com o Optional Chaining.

Você pode pensar neste recurso como uma forma de "retroceder" para um valor padrão ao lidar com nulo ou indefinido.

## Nullish Values

### Zero

```ts
    0 || "olá"
    // retorna 'olá'
```

### Nulo

```ts
    null || "olá"
    // retorna 'olá'
```

### Indefinido

```ts
    undefined || "olá"
    // retorna 'olá'
```

### Não é um número

```ts
    NaN || "olá"
    // retorna 'olá'
```

### String vazia

```ts
    "" || "olá"
    // retorna 'olá'
```

Nullish Coalescing evita que alguns comportamentos não intencionais de 0, NaN e "" sejam tratados como valores falsos.

## Comando

```bash
yarn tsc src/NullishCoalescing/index.ts && node src/NullishCoalescing/index.js
```