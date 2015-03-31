<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'maximumimage_hyundai');

/** MySQL database username */
define('DB_USER', 'hyundai');

/** MySQL database password */
define('DB_PASSWORD', 'maximumimage');

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
define('AUTH_KEY',         'tGORhs2Xx|oKKO~yWY+B}4.d|>V~J~gx:li^dBm4}7I|P6P+jtG-V#@_+fy}lW+S');
define('SECURE_AUTH_KEY',  '<IxnY!;^No|6U*@zoP=N[HcsF!ENTE8=`qYJfbdZ&qGK7JZ~n]9O[E<LLr89Z+|%');
define('LOGGED_IN_KEY',    'to6H?.4H1H[Jh;AW@SyiwJ5#+GL53=4LM6F|G*7f+l$9&TV!4r0^+I(3L|$?)_nD');
define('NONCE_KEY',        'DHx_xLM1OJ90@=!:x|zF#]M.7NF(+d_IDT>, N?caa_-^yd, eG!UiT3}h=@,*-S');
define('AUTH_SALT',        '7k(D%Pp=8u@FO1D,OWQ4!4?~JBhCjs$`FS$VQuaz1-7]-=Z->5I:1p1RQw,h zP^');
define('SECURE_AUTH_SALT', ' .7QdZ+-.Z-XzzYQc=W|@VLH0b7%%fu01u|!]+XhPotc?Zw>SL7J]u9v-_7Y;heZ');
define('LOGGED_IN_SALT',   'n@awcQee `k}5r2 |S_|<zap2<o#(c?Q3j<WZ#+h=3&Y8S}e#5Z>,k4-DG9+b]M0');
define('NONCE_SALT',       '4&xFN[_jBWBr(F_cG5@2=9of2l1aH.pZ#-1)X> K`DVsC@oA=58/npGj/9Y{&W2+');

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
