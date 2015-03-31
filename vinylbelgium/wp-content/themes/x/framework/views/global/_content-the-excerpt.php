<?php

// =============================================================================
// VIEWS/GLOBAL/_CONTENT-THE-EXCERPT.PHP
// -----------------------------------------------------------------------------
// Display of the_excerpt() for various entries.
// =============================================================================

?>

<?php do_action( 'x_before_the_excerpt_begin' ); ?>

<div class="entry-content excerpt">
	<?php the_date(); ?>
<?php do_action( 'x_after_the_excerpt_begin' ); ?>
  
  <?php the_content(); ?>

<?php do_action( 'x_before_the_excerpt_end' ); ?>

</div>

<?php do_action( 'x_after_the_excerpt_end' ); ?>