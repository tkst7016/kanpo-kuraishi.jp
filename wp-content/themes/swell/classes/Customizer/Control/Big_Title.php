<?php
namespace SWELL_Theme\Customizer\Control;

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 大タイトル出力用
 */
class Big_Title extends \WP_Customize_Control {

	public $classname = ''; //追加したメンバ変数

	// 出力するコンテンツ
	public function render_content() {
		if ( isset( $this->label ) ) {
			echo '<div class="customize-control-title -big">' . esc_html( $this->label ) . '</div>';
		}
		if ( isset( $this->description ) ) {
			echo '<span class="description customize-control-description">' . esc_html( $this->description ) . '</span>';
		}
	}

	protected function render() {
		$id    = 'customize-control-' . str_replace( [ '[', ']' ], [ '-', '' ], $this->id );
		$class = 'customize-control customize-control-' . $this->type;

		if ( isset( $this->classname ) ) {
			$class .= ' ' . $this->classname; //追加した処理
		}

		printf( '<li id="%s" class="%s">', esc_attr( $id ), esc_attr( $class ) );
		$this->render_content();
		echo '</li>';
	}
}
