<script lang="ts">
	export let type: string;
	export let color: string;
	export let position: string;

	function handleWaveClass(position: string, type: string) {
		return `absolute drop-shadow-lg ${position} ${type}-${position}`;
	}

	// style:transition={'translateX 2s cubic-bezier(.5,-.75,.7,2)'}
	// style:transform={`translateY(${offset[0]}px) translateX(${offset[1]}px)`}
</script>

<svg
	class={handleWaveClass(position, type)}
	fill={color}
	id="a"
	xmlns="http://www.w3.org/2000/svg"
	height="1773.18"
	viewBox="0 0 1694.6832 1773.18"
>
<linearGradient id="myGradient" gradientTransform="rotate(90)">
  <stop offset="5%" stop-color="gold" />
  <stop offset="95%" stop-color="red" />
</linearGradient>
<path
d="m1694.6832,1773.18H15.5631c41.65-17.8301,90.91-47.46,104-96,21.02-77.97-88.72-122.48-74-221,17.83-119.37,130.83-151.86,124.9999-249-6.0299-100.4-129.7199-114.87-134.9999-221-4.33-87.08,77.67-102.66,80-210,1.83-84.01-48.01-92.34-49-192-.88-88.7,38.37-105.57,24-174-15.32-72.93-73.76-82.14-86-143C-24.8368,120.95,97.2431,12.75,102.5631,8.18L654.5631,0l1034.5.68,5.6201,1772.5Z"
/>
</svg>

<style lang="postcss">
	.out {
		transform: translate(1000px, 40px);
	}
  
	.wave-in {
    transition: all 2.5s cubic-bezier(0.7, 0.07, 0.49, 0.89);
		transform: translate(50px, -40px);
		z-index: 50;
	}

	.foam-in {
		transition: all 2.5s cubic-bezier(0.7, 0.07, 0.49, 0.89);
		transform: translate(1px, -40px);
		z-index: 2;
	}
  
	.wave-out {
    transition: all 2.5s cubic-bezier(0.7, 0.2, 0.49, 0.89);
		z-index: 50;
	}
  
	.foam-out {
    opacity: 0%;
		transition: all 2.5s cubic-bezier(0.7, 0.07, 0.49, 0.89);
		z-index: 2;
	}
</style>
