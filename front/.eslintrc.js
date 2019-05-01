module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "array-bracket-newline": ["warn", "never"],
        "array-bracket-spacing": ["warn", "never"],
        "block-spacing": ["warn", "never"],
        "brace-style": ["warn", "allman"],
        "camelcase": ["warn", {
            "properties": "always"
        }],
        "comma-dangle": ["warn", {
            "comma-dangle": ["error", "never"]
        }],
        "comma-spacing": ["warn", {
            "before": false,
            "after": false
        }],
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn", "never"],
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["warn", "never"],
        "func-name-matching": ["warn", "always"],
        "func-names": ["warn", "never"],
        "func-style": ["warn", "expression", {
            "allowArrowFunctions": true
        }],
        "function-paren-newline": ["warn", "never"],
        "id-blacklist": ["warn", "delete", 'data', 'var'], //禁用JS关键字命名
        "id-match": ["warn", "^([a-z]+)|([a-z]+([A-Z][a-z]+))*$"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["warn", "tab"],
        "jsx-quotes": ["warn", "prefer-double"],
        "key-spacing": ["warn", {
            "beforeColon": false,
            "afterColon": false
        }],
        "keyword-spacing": ["warn", {
            "before": false,
            "after": false
        }],
        "linebreak-style": ["warn", "unix"],
        "lines-between-class-members": ["warn", "never"],
        "multiline-ternary": ["warn", "never"],
        "new-cap": ["warn", {
            "newIsCap": true
        }],
        "new-parens": ["warn"],
        "no-lonely-if": ["warn"],
        "no-mixed-spaces-and-tabs": ["warn"],
        "no-multiple-empty-lines": ["warn", {
            "max": 0
        }],
        "no-trailing-spaces": ["warn", {
            "skipBlankLines": false,
            "ignoreComments": false,
        }],
        "no-unneeded-ternary": ["warn"],
        "no-whitespace-before-property": ["warn"],
        "nonblock-statement-body-position": ["warn", "beside"],
        "object-curly-newline": ["warn", "never"],
        "object-curly-spacing": ["warn", "never"],
        "object-property-newline": ["warn", {
            "allowAllPropertiesOnSameLine": true
        }],
        "one-var": ["warn", {
            "var": "consecutive",
            "let": "consecutive",
            "const": "consecutive",
            "initialized": "consecutive",
            "uninitialized": "consecutive",
        }],
        "one-var-declaration-per-line": ["warn", "always"],
        "operator-assignment": ["warn", "always"],
        "operator-linebreak": ["warn", "none"],
        "padded-blocks": ["warn", "never"],
        "padding-line-between-statements": ["warn", "never"],
        "quote-props": ["warn", "consistent-as-needed", {
            "keywords": true,
            "numbers": true
        }],
        "quotes": ["warn", "backtick", {
            "allowTemplateLiterals": true
        }],
        "semi": ["warn", "always", {
            "omitLastInOneLineBlock": true
        }],
        "semi-spacing": ["warn", {
            "before": false,
            "after": false
        }],
        "semi-style": ["warn", "last"],
        /* "sort-keys": ["warn", "asc", {
            "caseSensitive": true,
            "natural": true
        }], */
        "space-before-blocks": ["warn", "never"],
        "space-before-function-paren": ["warn", "never "],
        "space-in-parens": ["warn", "never "],
        "space-infix-ops": ["warn", {
            "int32Hint": false
        }],
        "space-unary-ops": ["warn", {
            "words": false,
            "nonwords": false,
        }],
        "switch-colon-spacing": ["warn", {
            "after": false,
            "before": false
        }],
        "template-tag-spacing": ["warn", "never"],
        "arrow-spacing": ["warn", {
            "after": false,
            "before": false
        }],
        "constructor-super": ["warn"],
        "generator-star-spacing": ["warn", "both"],
        "no-class-assign": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-new-symbol": "error",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-const": "warn",
        "prefer-destructuring": ["warn"],
        "prefer-template": "error",
        "rest-spread-spacing": ["warn", "never"],
        "template-curly-spacing": ["warn", "never"],
        "yield-star-spacing": ["warn", "both"]
    }
};