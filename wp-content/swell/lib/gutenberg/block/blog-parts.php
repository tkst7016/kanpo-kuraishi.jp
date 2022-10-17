<?php
namespace SWELL_Theme\Block;

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * ブログパーツブロック
 */
$asset = include T_DIRE . '/build/blocks/blog-parts/index.asset.php';
wp_register_script(
	'swell-block/blog-parts',
	T_DIRE_URI . '/build/blocks/blog-parts/index.js',
	array_merge( $asset['dependencies'], [ 'swell_blocks' ] ),
	SWELL_VERSION,
	true
);

register_block_type_from_metadata( T_DIRE . '/src/gutenberg/blocks/blog-parts', [
	'editor_script'   => 'swell-block/blog-parts',
	'render_callback' => __NAMESPACE__ . '\cb_blog_parts',
]);

function cb_blog_parts( $attrs ) {
	$parts_id = $attrs['partsID'] ?: 0;
	$content  = \SWELL_Theme::get_blog_parts_content( [ 'id' => $parts_id ] );

	$bp_class = 'p-blogParts post_content';
	if ( $attrs['className'] ) {
		$bp_class .= ' ' . $attrs['className'];
	}

	$content = \SWELL_Theme::do_blog_parts( $content );
	return '<div class="' . esc_attr( $bp_class ) . '" data-partsID="' . esc_attr( $parts_id ) . '">' . $content . '</div>';
}
