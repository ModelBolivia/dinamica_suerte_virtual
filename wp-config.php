<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dinamica_suerte_virtual' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'fcDr>?QO<o32bnQq>;LSbA7|jT)xs2%Lydbj&HCU[w*,&zPN.>p(2+WU%_P<r|L#' );
define( 'SECURE_AUTH_KEY',  ',O_(+ND<[rJ?DIyE+kz*Et v-v+1(hVrgF:(u!Y}TECdO8}0.;T{C:C~AeRA#|#?' );
define( 'LOGGED_IN_KEY',    '9aSD++2AHsSQUpI[*8e;tEE}b%m#<.TulAt5GbFgTwF)YyDX%P;hcJ%i/Uy58B ]' );
define( 'NONCE_KEY',        'No470>):g$A7d )cR7PAd 9oF(8{wal</^7,wDCDvx?n[tOU/Q!obaN-bW|5lj(Y' );
define( 'AUTH_SALT',        'jb:w[mT3ikNSPkvHS$?[Wgftxc0X[^lO<|0lO<{Xbb,A`R>x12)reGYt|@j!0{@X' );
define( 'SECURE_AUTH_SALT', 'grQ)q48LF.+~X|nsfpS6@`Q-/may.YM~7T0z@umW s,&uLsZbe.x$K^3<->3VTBs' );
define( 'LOGGED_IN_SALT',   'Gx2sxnTaPXk[2w 2QF)hJ6ZP&ggp9/Zc@T73%s?4|=o.!IDE~+EHs!fv>bN+^;hI' );
define( 'NONCE_SALT',       'BmGh=?_v;|NYSyJMzh<5,<LQ2ya$ywEgG*7YRVXb|W4i}}(2B9yo@G[t_(Q-XhVL' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
