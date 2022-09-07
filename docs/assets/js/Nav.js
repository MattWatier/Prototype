const Toggle = document.getElementById('mainDesktopNavTouchToggle');
const NavToggle = () => {
	const Frame = document.getElementById('AppFrame');
	Frame.classList.toggle('expanded');
	const Toggle = document.getElementById('mainDesktopNavTouchToggle').querySelector('span > i');
	Toggle.classList.toggle('rotate_180');
	const navigationItems = document.querySelectorAll('#navigation .nav-item');
	const delay = (time)=> {
		return new Promise(resolve => setTimeout(resolve, time));
	  }
	  
	if( !Frame.classList.contains('expanded')){ 
		navigationItems.forEach(async (navItem)=>{
			navItem.querySelector('a').classList.add('justify_center');
			navItem.querySelector('a').classList.remove('justify_start');
			// navItem.querySelector('.label').classList.add('opacity_10');
			// navItem.querySelector('.label').classList.add('scale_X-100 ');
			let label = navItem.querySelector('.label');
			label.classList.add('display_none');
			label.classList.remove('opacity_10');
			
			
		})
	};
	if( Frame.classList.contains('expanded')){ 
		navigationItems.forEach(async (navItem)=>{
			navItem.querySelector('a').classList.remove('justify_center');
			navItem.querySelector('a').classList.add('justify_start');
			let label = navItem.querySelector('.label');
			label.classList.remove('display_none');
			await delay(200);
			label.classList.add('opacity_10');
			
		})
	};
}
Toggle.addEventListener('click', NavToggle);