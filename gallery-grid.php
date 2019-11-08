<section id="images-grid">

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
	        <div class="image-container" data-width="<?php echo $small_image[1]; ?>" data-height="<?php echo $small_image[2]; ?>" data-hashtags="<?php echo $hashtags; ?>">
	            <img src='' data-src="<?php echo $small_image[0]; ?>" data-medium-image="<?php echo $medium_image[0]; ?>" data-big-image="<?php echo $big_image[0]; ?>" class="img" alt="<?php echo $image_title; ?>" />
	            <span class="img-ov">
					<h3><?php echo $image_title; ?></h3>
				</span>
			</div>
            <?php
        endforeach; 
    ?>

</sectioin>

<!-- Lightbox -->
<div id="lightbox"><div id="close-lightbox" class="close"><div class="l1"></div><div class="l2"></div></div><div id="slideshow"></div><div id="lightbox-image-title"></div><nav id="lightbox-nav"><span id="prev-image"><img src="<?php echo get_bloginfo('template_directory'); ?>/img/arrow.svg" alt="Previous">Prev.</span><span id="next-image"><img src="<?php echo get_bloginfo('template_directory'); ?>/img/arrow.svg" alt="next">Next</span></nav><div id="lightbox-image-container"><img id="lightbox-image" src="" alt=""></div><div id="hashtags"></div><div id="share"><span>Share</span><ul><li><a href="" target="blank"><i class="fa fa-facebook-square"></i></a></li><li><a href="" target="blank"><i class="fa fa-twitter-square"></i></a></li><li><a href="" target="blank"><i class="fa fa-google-plus-square"></i></a></li><li><a href="" target="blank"><i class="fa fa-pinterest"></i></a></li></ul></div><div id="slideshow-loader"><div></div></div></div>
<!-- /Lightbox -->