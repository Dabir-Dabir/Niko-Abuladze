<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
	$categories = get_the_category(); ?>

	<section class="single-album">

		<div class="album-description">
			<div class="title"><?php the_title(); ?></div>
			<div class="category"><?php echo $categories[0]->name; ?></div>
		</div>
		

		<?php
		wp_reset_query();
			$gallery = get_post_gallery( get_the_ID(), false );
			$args = array( 
			    'post_type'      => 'attachment', 
			    'posts_per_page' => -1, 
			    'post_status'    => 'published', 
		        'order'      	 => 'ASC',
		        'orderby'    	 => 'post__in',
			    'post__in'       => explode( ',', $gallery['ids'] ) 
			); 
			$attachments = get_posts( $args );

			foreach ( $attachments as $attachment ) :

			    $image_alt = get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true);
			    $image_title = $attachment->post_title;
			    $hashtags = $attachment->post_excerpt;
			    $small_image = wp_get_attachment_image_src( $attachment->ID, 'medium' );
			    $medium_image = wp_get_attachment_image_src( $attachment->ID, 'large' );
			    $big_image = wp_get_attachment_image_src( $attachment->ID, 'full' );

			 ?>
				<div class="album-image" data-height='<?php echo $small_image[2]; ?>' data-width='<?php echo $small_image[1]; ?>'><img class="img" data-src="<?php echo $small_image[0]; ?>" alt=""></div>
	            <?php
	        endforeach; 
	    ?>

		<span class="back-to-albums ajax" data-href="<?php echo get_permalink( get_page_by_path( 'albums' ) ); ?>"><span><< </span>Go to Albums</span>
	</sectioin>

<?php endwhile; endif; ?>

<?php get_footer(); ?>