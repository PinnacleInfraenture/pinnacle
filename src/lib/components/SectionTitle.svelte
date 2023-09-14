<script lang="ts">
	export let title:string;
</script>
<h3 data-text={title} class="font-semibold sectionTitle font-casta text-4xl relative">{title}</h3>

<style>
.sectionTitle{
	font-weight: 600;
	font-family: "Casta";
	color:transparent;
      	-webkit-text-stroke: 1px #D8C691;
      	font-size:60px;
	width:fit-content;
}

.sectionTitle:after{
	background: linear-gradient(to top, #333333,#333333,transparent);
	position:absolute;
	width:100%;
	top:15px;
	left:0;
     	text-align: center;
     	font-size:50px;
     	font-weight:600;
	color:#D8C691;
	content:attr(data-text);
}
</style>
