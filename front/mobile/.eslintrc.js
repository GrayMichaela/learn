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
		"SharedArrayBuffer": "readonly",
		"require":false,
		"process":false,
		"module":false,
		"__dirname":false,
		"import":false
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
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],//强制双引号
		"semi": [
			"error",
			"always"
		],//强制分号
		"array-bracket-newline": ["error", { "multiline": true }],//[]前强制换行
		"array-bracket-spacing": ["error", "never"],//[]内禁止出现空格
		"array-element-newline": ["error", { "multiline": true }],//强制数组元素间出现换行
		"block-spacing": ["error", "never"],//禁止或强制在代码块中开括号前和闭括号后有空格
		// "brace-style": ["error", "allman",{"allowSingleLine":true}],//大括号风格要求
		"camelcase": ["error", {
			"properties": "always"
		}],//强制驼峰
		"comma-dangle": ["error", "never"],//禁止尾逗号
		"comma-spacing": ["error", {
			"before": false,
			"after": false
		}],//禁止在逗号前后使用空格
		"comma-style": ["error", "first"],//逗号必须在XX之前
		"computed-property-spacing": ["error", "never"],//禁止在动态变量命前后空格
		"eol-last": ["error", "never"],//文件末尾禁止有空行
		"func-call-spacing": ["error", "never"],//禁止在函数调用中间有空格
		"func-name-matching": ["error", "always"],//aaa(){},!var a=function b(){}
		"func-names": ["error", "never"],//禁止赋值具名函数
		"func-style": ["error", "expression", {
			"allowArrowFunctions": true
		}],//函数赋值方式
		"function-paren-newline": ["error", "multiline"],//函数参数换行
		"implicit-arrow-linebreak": ["error", "beside"],//箭头函数换行
		"jsx-quotes": ["error", "prefer-double"],//jsx使用双引号
		"key-spacing": ["error", {
			"beforeColon": false,
			"afterColon": false
		}],//对象冒号前后空格
		"keyword-spacing": ["error", {
			"before": false,
			"after": false
		}],//关键字前后空格
		"lines-between-class-members": ["error", "never"],//类成员之间无空行
		"new-cap": ["error", {
			"newIsCap": true
		}],//类名大写
		"new-parens": ["error"],//new带小括号
		"no-lonely-if": ["error"],//禁止if嵌套
		"no-mixed-spaces-and-tabs": ["error"],//禁止使用 空格 和 tab 混合缩进
		"no-multiple-empty-lines": ["error", {
			"max": 1
		}],//连续换行
		"no-trailing-spaces": ["error", {
			"skipBlankLines": false,
			"ignoreComments": false,
		}],//禁止行尾空格
		"no-unneeded-ternary": ["error"],//禁止可以表达为更简单结构的三元操作符
		"no-whitespace-before-property": ["error"],//禁止属性前有空白
		"nonblock-statement-body-position": ["error", "beside"],//单语句在一行
		"object-curly-newline": ["error", { "multiline": true }],//强制在花括号内使用一致的换行符
		"object-curly-spacing": ["error", "never"],//强制在花括号中使用一致的空格
		"object-property-newline": ["error", {
			"allowAllPropertiesOnSameLine": true
		}],//强制将对象的属性放在不同的行上
		"one-var": ["error", {
			"var": "consecutive",
			"let": "consecutive",
			"const": "consecutive"
		}],//连续声明
		"one-var-declaration-per-line": ["error", "always"],//var声明换行
		"operator-assignment": ["error", "always"],//operator-assignment
		"semi-style": ["error", "last"],//分号位置
		"semi-spacing": ["error", {
			"before": false,
			"after": false
		}],//分号前后空格
		"operator-linebreak": ["error", "none"],//禁止前后有换行符
		"padded-blocks": ["error", "never"],//禁止块内连续换行
		"padding-line-between-statements": ["error", {
			"blankLine": "never",
			"prev": "*",
			"next": "*",
		}],//有争议
		"quote-props": ["error", "consistent", {
			"keywords": true,
			"numbers": true
		}],//属性名引号
		"space-before-blocks": ["error", "never"],
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": ["error", {
			"int32Hint": false
		}],
		"space-unary-ops": ["error", {
			"words": false,
			"nonwords": false,
		}],
		"switch-colon-spacing": ["error", {
			"after": false,
			"before": false
		}],
		"template-tag-spacing": ["error", "never"],
		"arrow-spacing": ["error", {
			"after": false,
			"before": false
		}],
		"constructor-super": ["error"],
		"generator-star-spacing": ["error", "both"],
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
		"prefer-const": "error",
		"prefer-destructuring": ["error"],
		"prefer-template": "error",
		"rest-spread-spacing": ["error", "never"],
		"template-curly-spacing": ["error", "never"],
		"yield-star-spacing": ["error", "both"]
	}
};