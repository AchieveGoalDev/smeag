<script lang="ts">
	export let params: {
		themeColor: string;
	};

	function handleThemeColor(themColor: string) {
		return 'bg-orange-50 h-[50px]';
	}
</script>

<div class={handleThemeColor(params.themeColor)}>
	<slot />
</div>
