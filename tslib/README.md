# tslib

This is a runtime library for [TypeScript](https://www.typescriptlang.org/) that contains all of the TypeScript helper functions.

This library is primarily used by the `--importHelpers` flag in TypeScript.
When using `--importHelpers`, a module that uses helper functions like `__extends` and `__assign` in the following emitted file:

```ts
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.x = {};
exports.y = __assign({}, exports.x);

```

will instead be emitted as something like the following:

```ts
var tslib_1 = require("tslib");
exports.x = {};
exports.y = tslib_1.__assign({}, exports.x);
```

Because this can avoid duplicate declarations of things like `__extends`, `__assign`