<?php

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    /**
     * @var string $basePath The Web-accessible directory that contains the asset files in this bundle
     */
    public $basePath = '@webroot';

    /**
     * @var string $baseUrl The base URL for the relative asset files listed in $js and $css.
     */
    public $baseUrl = '@web';

    /**
     * @var array $css List of CSS files that this bundle contains.
     */
    public $css = [
        'css/style.css',
        'css/fonts.css',
        'css/prism.css',
    ];

    /**
     * @var array $js List of JavaScript files that this bundle contains.
     */
    public $js = [
        'js/core.min.js',
        'js/script.js',
        'js/prism.js',
    ];

    /**
     * @var array $depends List of bundle class names that this bundle depends on.
     */
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

    /**
     * @var array $publishOptions The options to be passed to yii\web\AssetManager::publish() when the asset bundle is being published.
     */
    public $publishOptions = [
        'forceCopy' => YII_DEBUG ? true : false,
    ];
}
