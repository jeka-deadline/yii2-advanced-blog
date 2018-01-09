<?php

namespace app\assets;

use yii\web\View;
use yii\web\AssetBundle;

/**
 * Asset bundle position head.
 */
class HeadAsset extends AssetBundle
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
     * @var array $js List of JavaScript files that this bundle contains.
     */
    public $js = [
        'js/google-tag-manager.js',
    ];

    /**
     * @var array $jsOptions The options that will be passed to yii\web\View::registerJsFile() when registering the JS files in this bundle.
     */
    public $jsOptions = [
        'position' => View::POS_HEAD,
    ];

    /**
     * @var array $publishOptions The options to be passed to yii\web\AssetManager::publish() when the asset bundle is being published.
     */
    public $publishOptions = [
        'forceCopy' => YII_DEBUG ? true : false,
    ];
}
