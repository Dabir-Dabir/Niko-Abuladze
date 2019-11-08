<?php get_header(); ?>

<?php if ( !is_page( 'about' ) ) : ?>
	<?php get_template_part( 'gallery-grid', get_post_format() ); ?>
<?php endif; ?>

<?php if ( is_page( 'about' ) ) : ?>

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		<?php the_content(); ?>

	<?php endwhile; endif; ?>

<?php endif; ?>



<?php get_footer(); ?>