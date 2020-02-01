
$.noConflict();
jQuery(document).ready(function($) {

	// $(document).ready(function() {


	$('.fa-tree').click(function(){
		$('.fa-tree').addClass('active');
		$('.fa-car').removeClass('active');
		$('.toggle-btn').removeClass('toggled');
		$('.scene').addClass('scene-tree');
		$('.scene').removeClass('scene-car');

		$('.text').html('The resulting savings is enough to offset the energy efficiency of <strong>10 new trees</strong> being planted in the world.');
	});
	
	$('.fa-car').click(function(){
		$('.fa-car').addClass('active');
		$('.fa-tree').removeClass('active');
		$('.toggle-btn').addClass('toggled');
		$('.scene').addClass('scene-car');
		$('.scene').removeClass('scene-tree');

		$('.text').html('The resulting savings is enough to offset the energy consumption of <strong>six average-size cars</strong> for one month.');
	});

	$('.graph--value-02 .graph-bar').hover(function(){
		$('.tree:nth-child(3n)').removeClass('hide');
		$('.car:nth-child(2n)').addClass('hide');
	});

	$('.graph--value-01 .graph-bar').hover(function(){
		$('.tree:nth-child(3n)').addClass('hide');
		$('.car:nth-child(2n)').removeClass('hide');
	});

	
		
	// });
	// close document.ready
}); // end jQuery conflict
