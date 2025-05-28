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
define( 'AUTH_KEY',         'tDrQUGWtOoj0`6p$QRg t:d|4;rKCeD%$`g6T7s#&$TZS 7Ta!m2c=bPDL4M#cT&' );
define( 'SECURE_AUTH_KEY',  'x2z2#af_N%y:1CU9t?FO& O3@+@c>&I|iS0|6QfDx5v-NoaFCoTea^#ePEr%>IjC' );
define( 'LOGGED_IN_KEY',    '0?5!+<X}/ahLcV$De=A^;OE6-o <*YJzrDad7,-tC<ga=NLYL3@v&ii|{tem:wbF' );
define( 'NONCE_KEY',        'R^6,Lh|v^v<;[:H-*-)C^&!~51L( %|a)|]O*40Jz>r(CysU#,rgr*]11-GSH+AK' );
define( 'AUTH_SALT',        '`<awLLEvZReGKM!mFTah)(6UQ`3-Mz>,vl6kS,KFONqX_:9@MYRS&aFfA{gIoY+|' );
define( 'SECURE_AUTH_SALT', '+Y{]*&.Sp>FbSxeK.05- l0)m=2-F)vb,EDjWsTFih40)0J$UR g]B=,PTI3%lA-' );
define( 'LOGGED_IN_SALT',   '5p  *V2S57D;m[`WJ:ek,[gyd|}NgU L;WmEmHsFr![a/XAsZ8uB6~Jl.VExRfP^' );
define( 'NONCE_SALT',       'c2eC^) hVO>ho56##Gv>~9v{XgBY:XiMQ<%[MCFRjVEY007WMX:y/{##FbpkJ68o' );

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
