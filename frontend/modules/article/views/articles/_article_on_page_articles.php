<?php
use yii\helpers\Url;

/* @var app\modules\article\models\Article $model */
?>
<article class="post-classic">

    <?php if ($model->image): ?>

        <div class="post-media">
            <figure>
                <img src="<?= $model->getPreview([900, 500]); ?>" alt="<?= $model->title; ?>"/>
            </figure>
        </div>

    <?php endif; ?>

    <div class="post-main">
        <div class="post-body">
            <h4><a href="<?= Url::toRoute(['/article/articles/article', 'articleAlias' => $model->alias]); ?>"><?= $model->title; ?></a></h4>
            <?= $model->small_description; ?>
            <div class="post-footer">
                <ul class="post-meta">
                    <li class="object-inline"><span class="novi-icon icon icon-xxs icon-gray-base material-icons-event"></span>
                        <time datetime="<?= date('Y-m-d'); ?>"><?= $model->getDate(); ?></time>
                    </li>

                    <?php if ($model->tags) : ?>

                        <li class="object-inline">
                            <span class="novi-icon icon icon-xxs icon-gray-base material-icons-loyalty"></span>
                            <ul class="list-tags-inline">

                                <?= $model->getArticleTags('<li>{linkTag}</li>'); ?>
                            </ul>
                        </li>

                    <?php endif; ?>

                </ul>
            </div>
        </div>
    </div>
</article>