<?php

/**
 * Plugin Name: Rochester.Dev Content Blocks
 * Description: A barebones custom plugin for Rochester.Dev.
 * Version: 1.0
 * Author: Your Name
 * License: GPL2
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Function to run during plugin activation
function rochester_dev_activate()
{
    // Actions to perform once on plugin activation
}
register_activation_hook(__FILE__, 'rochester_dev_activate');

// Function to run during plugin deactivation
function rochester_dev_deactivate()
{
    // Actions to perform once on plugin deactivation
}
register_deactivation_hook(__FILE__, 'rochester_dev_deactivate');

// Include the block registration
require plugin_dir_path(__FILE__) . 'blocks/init.php';
