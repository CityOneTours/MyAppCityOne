<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u516157723_9d6pC' );

/** Database username */
define( 'DB_USER', 'u516157723_xXnFU' );

/** Database password */
define( 'DB_PASSWORD', '<(QqIE$*1n' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'l>n]G4TMF;:-F~d@#7yNv_vS]@|X|VBxr=ZmVRXU,PZ2O?OjG$MP~TOx_MW)MxCe' );
define( 'SECURE_AUTH_KEY',   '1X3Ni~FXT>KB^0Wb,[5mf<%90P+R9Y.KH6zl&Ua0jM)X!x]mIulLII9:JSpCdNeS' );
define( 'LOGGED_IN_KEY',     '7w6J#@1z;][Wx{=]q|es~?S5{`5,#~ d+b.>7@A|>3Z)n/>/5yexv55jc_R*=U[F' );
define( 'NONCE_KEY',         'r?b@{0.F<mScV!rKrVo!+/$i6+Kuv)%]fXgvu$){B0?CG `?>aH`2z5#,@FP?v~&' );
define( 'AUTH_SALT',         '<kE1#|-C^%X-Q5&<hbMI1d6i4EO kwFA&+{#.v^;ILn3U:sI1x$,6TLm9Oi!>`Dp' );
define( 'SECURE_AUTH_SALT',  '=Ihi[~<TyQg/p2@8^_m[MrL]PT)U.|PR?<`;1rq*|$Vg&Ko6)|MdRUq([#rI:Iso' );
define( 'LOGGED_IN_SALT',    'lh@,Y#A1i@@%-tbmQVR^D.1>#Y^MU4a0g%huoJQrFb&8!#l|4Z)my)VhM]8Obiz:' );
define( 'NONCE_SALT',        'f5k7?&G?Jo%[>&+P>#wqi~]VbA10WVJcZ7F2`^e)4^/6-H+r/:&7O^tgeiS?anJO' );
define( 'WP_CACHE_KEY_SALT', 'M 4}e[rM${5Q^?0*FcwjVdZ`)>Y*(~.I$[%H`k^ywCcY_D}CGTVYpLrQS~h1=0v;' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '8ebb6c56edc913c204fe3134af114aef' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
