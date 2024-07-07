<?php
// Register custom block category
function rochester_dev_block_categories($categories)
{
    return array_merge(
        array(
            array(
                'slug'  => 'rochester-dev',
                'title' => __('Rochester.Dev', 'rochester-dev-content-blocks'),
                'icon'  => 'html',
            ),
        ),
        $categories
    );
}
add_filter('block_categories_all', 'rochester_dev_block_categories', 10, 2);

// Enqueue block scripts and styles
function rochester_dev_enqueue_block_assets()
{
    wp_enqueue_script(
        'rochester-dev-responsive-spacer',
        plugins_url('../build/responsive-spacer.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'),
        filemtime(plugin_dir_path(__FILE__) . '../build/responsive-spacer.js')
    );

    wp_enqueue_style(
        'rochester-dev-blocks-editor',
        plugins_url('../src/editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . '../src/editor.css')
    );

    wp_enqueue_style(
        'rochester-dev-blocks',
        plugins_url('../src/style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . '../src/style.css')
    );
}
add_action('enqueue_block_assets', 'rochester_dev_enqueue_block_assets');
