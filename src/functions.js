export const react_objs = {
	top_menu: null,
	bottom_menu: null,
}

export const my_scroll = {
	current_scroll_height: 0,
	init: function(scroll_element){
		scroll_element.addEventListener("scroll", function(){
			var new_scroll_height = scroll_element.scrollY;
			var sensitivity = 20;

			//sensitivity
			if(Math.abs(new_scroll_height - my_scroll.current_scroll_height) > sensitivity){
				if(new_scroll_height > my_scroll.current_scroll_height){

					//scrolling down
					react_objs.top_menu.setState({
						displayed: false,
					});

					react_objs.bottom_menu.setState({
						displayed: false,
					});
				}
				else{

					//scrolling up
					react_objs.top_menu.setState({
						displayed: true,
					});

					react_objs.bottom_menu.setState({
						displayed: true,
					});
				}

				my_scroll.current_scroll_height = new_scroll_height;
			}
		})
	},
}

