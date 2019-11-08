<?php 

add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );

add_action('after_setup_theme', function(){
	register_nav_menus( array(
		'header_menu' => 'Header menu',
		'sidebar_menu' => 'Sidebar menu'
	) );
});


add_image_size( 'for-mobile', 500, 800, true );
add_image_size( 'for-tablet', 800 );

// Register the three useful image sizes for use in Add Media modal
function add_image_sizes() {
add_image_size( 'featured', 285, 100, TRUE );
add_image_size( 'videos', 300, 200, TRUE );
add_image_size( 'slider', 1140, 480, TRUE );
}
add_action( 'init', 'add_image_sizes' );