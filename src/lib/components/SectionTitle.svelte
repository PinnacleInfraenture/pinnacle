<script lang="ts">
	export let title:string;
	export let show:boolean=true;
</script>
<h3 data-text={title} class={`font-semibold sectionTitle font-casta text-4xl relative ${show?'opacity-100':'opacity-0'} transition-opacity duration-500 ease-in-out`}>{title}</h3>

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
@media only screen and (max-width: 600px) {
	.sectionTitle{
		font-size:30px;
	}
	.sectionTitle:after{
		font-size:25px;

	}
}

</style>
