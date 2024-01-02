# vscode 快捷生成vue模板页面

编辑器右下角管理-用户代码片段-vue.json

```json
{
	"Print to console": {
		"prefix": "vue",
		"body": [
			"<template>",
			"  <div></div>",
			"</template>",
			"",
			"<script>",
			"export default {",
			"  data () {",
			"    return {",
			"      ",
			"    };",
			"  },",
			"  components: {},",
			"  mounted () {},",
			"  created () {},",
			"  methods: {}",
			"}",
			"</script>",
			"",
			"<style lang='less' scoped>",
			"</style>"
		],
		"description": "Log output to console"
	}
}
```