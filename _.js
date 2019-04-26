$(function(){
	$('main>section').each((i,sections_h2)=>
		$(sections_h2).click('>h2',function(){
				// console.log(this);
				console.log(this.className,this.className.indexOf('on'));
				if($('section.on')[0]===this)
					$('section.on').toggleClass('on');
				else 
					$(this).toggleClass('on');
			}
		)		
	);
});