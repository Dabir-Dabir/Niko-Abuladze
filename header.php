<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php wp_title('|', true, 'right'); ?> <?php echo get_bloginfo( 'name' ); ?></title>
	<link href="https://fonts.googleapis.com/css?family=Fira+Sans:100,200,300, 400,500,600,700,800,900" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/css/font-awesome.min.css">
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta property="og:url"                content="<?php echo get_home_url(); ?>" />
	<meta property="og:type"               content="website" />
	<meta property="og:title"              content="Photographer Niko Abuladze" />
	<meta property="og:description"        content="Photos that you would like!" />
	<meta property="og:image"              content="http://nikoabuladze.com/wp-content/uploads/2018/03/profile-900x899.jpg" />
	<?php wp_head(); ?>

</head>
<body>

<?php 

$custom_logo_id = get_theme_mod( 'custom_logo' );
$logo_src = wp_get_attachment_image_src( $custom_logo_id , 'full' ); 

?>

<div class="preloader">
	<div class="wrap">
		<h3>Photography</h3>
		<h1>Niko Abuladze</h1>
	</div>
</div>

<header>
	<div class="top-line">
		<a href="<?php echo get_home_url(); ?>" class="logo"><img src="<?php echo $logo_src[0]; ?>" alt="Logo"></a>
		<div class="title">
			<h2>Niko Abuladze</h2>
		</div>

		<!-- Hamburger for menu and for close button -->
		<div id="hamburger" class="hamburger">
			<div class="l1"></div>
			<div class="l2"></div>
			<div class="l3"></div>
		</div>
		<!-- / Hamburger -->

	</div>

	<?php 
	wp_nav_menu( array(
		'theme_location'  => 'header_menu',
		'menu'            => '', 
		'container'       => 'nav', 
		'container_id'    => 'mobile-nav',
		'menu_class'      => 'menu',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
		'depth'           => 2,
		'walker'          => '',
	) ); ?>
</header>

<aside id="left-side">

	<a href="<?php echo get_home_url(); ?>" class="logo"><img src="<?php echo $logo_src[0]; ?>" alt="Logo"></a>
	<div class="title">
		<h2>Niko Abuladze</h2>
	</div>
	<?php 
	wp_nav_menu( array(
		'theme_location'  => 'sidebar_menu',
		'menu'            => '', 
		'container'       => 'nav', 
		'container_id'    => 'navigation',
		'menu_class'      => 'menu',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
		'depth'           => 2,
		'walker'          => '',
	) ); ?>
</aside>

<section id="content">
	<div id="inner" data-page-title="<?php wp_title('|', true, 'right'); ?> <?php echo get_bloginfo( 'name' ); ?>" >
	