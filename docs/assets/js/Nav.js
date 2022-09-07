const Toggle = document.getElementById('mainDesktopNavTouchToggle');
const NavToggle = () => {
	const Frame = document.getElementById('AppFrame');
	
	const Toggle = document.getElementById('mainDesktopNavTouchToggle').querySelector('span > i');
	Toggle.classList.toggle('rotate_180');
	const navigationItems = document.querySelectorAll('#navigation .nav-item');
	const logo_1x1 = document.getElementById('logo_1x1');
	const logo_3x1 = document.getElementById('logo_3x1');
	const delay = (time)=> {
		return new Promise(resolve => setTimeout(resolve, time));
	  }
	  
	if( Frame.classList.contains('expanded')){ 
		navigationItems.forEach(async (navItem)=>{
			// navItem.querySelector('.label').classList.add('opacity_10');
			// navItem.querySelector('.label').classList.add('scale_X-100 ');
			let label = navItem.querySelector('.label');
			label.classList.remove('opacity_10');
			await delay(200);
			navItem.classList.remove('m-r_3');
			navItem.querySelector('a').classList.add('justify_center');
			navItem.querySelector('a').classList.remove('justify_start');
			label.classList.add('display_none');
			Frame.classList.remove('expanded');
			logo_1x1.classList.remove('display_none');
			logo_3x1.classList.add('display_none');
			return;
		})
	};
	if( !Frame.classList.contains('expanded')){ 
		navigationItems.forEach(async (navItem)=>{
			navItem.querySelector('a').classList.remove('justify_center');
			navItem.querySelector('a').classList.add('justify_start');
			let label = navItem.querySelector('.label');
			Frame.classList.add('expanded');
			label.classList.remove('display_none');
			logo_1x1.classList.add('display_none');
			logo_3x1.classList.remove('display_none');
			navItem.classList.add('m-r_3');
			await delay(200);
			label.classList.add('opacity_10');
			return;
			
		})
	};
}
Toggle.addEventListener('click', NavToggle);