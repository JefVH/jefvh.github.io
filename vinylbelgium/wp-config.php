<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'belgianvinyl');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?)I+q47PG:SH4qLSUMU?QH8Dl.4;/Mh#o-ffnr|V?{;SYa6OE1|)SKHZkH%dW/V2');
define('SECURE_AUTH_KEY',  '+I;oGAS7PiZNb& W%0t&!nyJI)en9w@.pc%qOn_Ke-FUY7bipdttX#~V[>-|pYJL');
define('LOGGED_IN_KEY',    '/J5bb9b<!D_m^iUi_I;;+]o&+$`HW5<7x7ZB+[,H}zo>9%vUA1Uagb2L-SZ|S&7}');
define('NONCE_KEY',        '[O8-jkBUY_S]w=k7-nW6~md9j]-iz$FG^pJVd&82T!i_+a&]e^~G@g>W]7kr*/~g');
define('AUTH_SALT',        'DoVpTiXjo[?GrzE+p,0~.^sGnJpID]>kPK}DD!U^3BI4*z0DL<~.vJ<9/29N!nE`');
define('SECURE_AUTH_SALT', 'Q9wBw92X.),^L3R/:s![w)s]F{*0y1s+2b^38u:?0,owqO}CX`npF,[Fz`qX4?Qi');
define('LOGGED_IN_SALT',   ' 4.[doN&rLa|8cscu|z~X@!#3H>yv2xW@4M([J;,y2$[cXpjnVCaa]GH5Ld2Du%4');
define('NONCE_SALT',       '!w4Y+d+.kjyv#gI($jj8rkx%RP ]A_0REG^i:]#LYl)I5SyD)VK|,pdop}iM;={W');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
