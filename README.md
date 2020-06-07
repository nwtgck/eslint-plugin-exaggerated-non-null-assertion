# eslint-plugin-exaggerated-non-null-assertion

## Rule Details

Example of **incorrect** code for this rule:

```ts
const foo: number | undefined = undefined;
const bar = foo!;
```

Example of **correct** code for this rule:

```ts
const foo: number | undefined = undefined;
const bar = foo!!!;
```
