<?php

// =============================================================================
// VIEWS/GLOBAL/_BRAND.PHP
// -----------------------------------------------------------------------------
// Outputs the brand.
// =============================================================================

$site_name        = get_bloginfo( 'name' );
$site_description = get_bloginfo( 'description' );
$logo             = x_make_protocol_relative( x_get_option( 'x_logo' ) );
$site_logo        = '<img src="' . $logo . '" alt="' . $site_description . '">';

?>

