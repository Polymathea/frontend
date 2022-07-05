/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended",
		"@vue/eslint-config-prettier",
	],
	plugins: ["prettier"],
	env: {
		"vue/setup-compiler-macros": true,
	},
	rules: {
		// allows for single word components (eg: Logo.vue)
		"vue/multi-word-component-names": "off",
		indent: ["warn", "tab"],
		"no-tabs": "off",
		"prettier/prettier": "error",
	},
};
