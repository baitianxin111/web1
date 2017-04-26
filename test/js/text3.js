$(function(){
			$('#btn').bind('click',event1);
			$('#btn').bind('click',event2);
			$('#btn').off('click',event2);
			
			
		});
		function event1 () {
			alert(111);
			console.log('event1');
		}
		function event2 () {
			console.log('event2');
		}
		