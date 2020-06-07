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


## Installation

```bash
npm i -D nwtgck/eslint-plugin-exaggerated-non-null-assertion
```

Add the following settings to `.eslintrc.js` or the other ESLint setting file.

```js
    ...
    "plugins": [
      ...
      "exaggerated-non-null-assertion"
    ],
```

```js
  ...
  "rules": {
    ...
    // NOTE: Disable no-extra-non-null-assertion and no-non-null-assertion
    "@typescript-eslint/no-extra-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    // Enable Exaggerated Non-Null Assertion
    "exaggerated-non-null-assertion/exaggerated-non-null-assertion": "error",
  }
```

## Example

Here is an example using this lint.
<https://github.com/nwtgck/eslint-plugin-exaggerated-non-null-assertion-example>
