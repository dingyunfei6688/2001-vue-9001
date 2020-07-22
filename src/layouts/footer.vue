<template>
	<div class="footer">
		<ul>
			<router-link to="/home" tag="li" active-class="active"><a class="iconfont icon-zhuye" href="javascript:;"></a></router-link>
			<router-link to="/column" tag="li" active-class="active"><a class="iconfont icon-shu" href="javascript:;"></a></router-link>
			<router-link to="/user" tag="li" active-class="my-active"><a class="iconfont icon-iconfuzhi" href="javascript:;"></a></router-link>
		</ul>
	</div>
</template>

<script>
	import '../assets/css/iconfont/iconfont.css'
	export default {
		name: "my-footer",
	};
</script>

<style scoped>
	.footer {
		width: 100%;
		height: 0.81rem;
		background: linear-gradient(to bottom,white,#C4C1DA);
		position: fixed;
		left: 0;
		bottom: -0.01rem;
	}

	.footer ul {
		width: 4.6rem;
		margin: 0 auto;
		height: 0.8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer ul li .icon-zhuye{
		font-weight: bold;
	}

	.footer ul li a {
		display: block;
		width: 100%;
		height: 100%;
		font-size: 0.5rem;
		color: darkorange;
	}

	.footer ul li {
		width: 0.5rem;
		height: 0.5rem;
		box-sizing: content-box;
		padding: 0.1rem;
	}
	.active{
		border-radius: 50%;
		background: linear-gradient(to top,#A1EA8D,#FFF893);
	}
	.footer .active a{
		color: #FF009B;
	}
</style>
