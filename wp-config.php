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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

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
define( 'AUTH_KEY',         'mTCxXw]<4TXnL3-Zjv00~I^I8YL<8EF} =4Kv;42P+=kv3L>5eG?B@]KbD^t4:%X' );
define( 'SECURE_AUTH_KEY',  'V@HrMkuy78_K)B@B=nYMDD6j>RW)isw MO[Ajup~|Enxe.GN_]lNI)pU-TktC9A=' );
define( 'LOGGED_IN_KEY',    '%C#|b)CZosqT$}!gjc|-^hi}6Q;hR6WFT,R3#<3*-+tBhUZ3b<3RW.z~IZPs:uW]' );
define( 'NONCE_KEY',        '.l:c9,3~OR!IZ}3Hskw#RdW;rPwj?AQdZ%cnQ5>ZvC2AJ3`okh(-g&$P3|ZK~*I]' );
define( 'AUTH_SALT',        ':YH>W8Yqd]--j4wl[LclcG3,h4aNq9+#$/U7L4W5LekSS:v>Ao^o:htqWA45pXBd' );
define( 'SECURE_AUTH_SALT', 'SB8=DE._}F6Tp*>U,/ DW[@zbn1VXPk$g@_#kDgTs+d|>Z@6Hb(($.Wdp5(h;q]9' );
define( 'LOGGED_IN_SALT',   '{ew9MLxvc_^1z=tq+NSKRaU/;z4/z$7m4WP`4C,vGx=5xL|Qo!GG/x4dH3@t$|`7' );
define( 'NONCE_SALT',       's~TXGfhrb_OwPzvv:8dk-UV>;q1c4-3{$pVitObVfJSq[ax*AATV^o`UNaA(NG).' );

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
