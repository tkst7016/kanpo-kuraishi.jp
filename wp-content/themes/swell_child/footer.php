<?php
if (!defined('ABSPATH'))
    exit;
$SETTING = SWELL_FUNC::get_setting();
if (SWELL_FUNC::is_show_sidebar())
    get_sidebar();
?>
</div>
<?php
if ('pjax' === $SETTING['use_pjax'])
    echo '</div>'; // End : Barba[data-barba="container"]




    
// フッター前ウィジェット
if (is_active_sidebar('before_footer')) :
    echo '<div id="before_footer_widget" class="w-beforeFooter">';
    if (!USE_AJAX_FOOTER)
        SWELL_FUNC::get_parts('parts/footer/before_footer');
    echo '</div>';
endif;

// ぱんくず
if ('top' !== $SETTING['pos_breadcrumb']) :
    SWELL_FUNC::get_parts('parts/breadcrumb');
endif;
?>
<footer id="footer" class="l-footer">
    <!--<div class="contact-area">
        <div class="mask">
            <div class="contact-set">
                <div class="contact-title">
                    <div class="sub">Contact</div>
                    <div class="main">お問い合わせ</div>
                </div>
                <div class="contact-btn">
                    <a href="/contact/"><span>お問い合わせへ</span></a>
                </div>
            </div>
        </div>-->
<?php if (!USE_AJAX_FOOTER) SWELL_FUNC::get_parts('parts/footer/footer_contents'); ?>
</footer>
<?php
// 固定フッターメニュー
if (has_nav_menu('fix_bottom_menu')) :
    $cache_key = $SETTING['cache_bottom_menu'] ? 'fix_bottom_menu' : '';
    SWELL_FUNC::get_parts('parts/footer/fix_menu', null, $cache_key);
endif;

// 固定ボタン
SWELL_FUNC::get_parts('parts/footer/fix_btns');

// モーダル
SWELL_FUNC::get_parts('parts/footer/modals');
?>
</div><!--/ #all_wrapp-->
<?php
wp_footer();
echo $SETTING['foot_code']; // phpcs:ignore
?>
</body></html>
