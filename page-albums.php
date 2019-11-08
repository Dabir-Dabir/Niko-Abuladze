<?php 

/*
Template Name: Albums
*/

get_header(); ?>

<section class="albums">

<?php 
	$args = array( 
	    'post_type'      => 'post', 
	    'posts_per_page' => -1, 
	    'post_status'    => 'publish', 
        'order'      	 => 'DESC',
        'orderby'    	 => 'date'
	); 

	$posts_archive = new WP_Query( $args );
?>

<?php if ( $posts_archive->have_posts() ) : while ( $posts_archive->have_posts() ) : $posts_archive->the_post(); 

	$post_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' );
	$categories = get_the_category(); ?>

	<div class="album ajax" data-height='<?php echo $post_image[2]; ?>' data-width='<?php echo $post_image[1]; ?>' data-href="<?php echo get_post_permalink(); ?>">
		<img src="" alt="" class="img" data-src="<?php echo $post_image[0]; ?>">
		<div class="album-desc">
			<div class="inner">
				<div class="title"><?php the_title(); ?></div>
				<div class="category"><?php echo $categories[0]->name; ?></div>
			</div>
		</div>
	</div>
<?php endwhile; endif; ?>

</section>

<?php get_footer(); ?>