<?php
namespace SWELL_Theme\Block;

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 関連記事ブロック
 */
$asset = include T_DIRE . '/build/blocks/ad-tag/index.asset.php';
wp_register_script(
	'swell-block/ad-tag',
	T_DIRE_URI . '/build/blocks/ad-tag/index.js',
	array_merge( $asset['dependencies'], [ 'swell_blocks' ] ),
	SWELL_VERSION,
	true
);

register_block_type_from_metadata( T_DIRE . '/src/gutenberg/blocks/ad-tag', [
	'editor_script'   => 'swell-block/ad-tag',
	'render_callback' => __NAMESPACE__ . '\cb_ad_tag',
]);

function cb_ad_tag( $attrs ) {
	// \SWELL_Theme::set_use( 'count_CTR', true );
	ob_start();
	echo do_shortcode( '[ad_tag id="' . $attrs['adID'] . '" class="' . $attrs['className'] . '"]' );
	return ob_get_clean();
}
