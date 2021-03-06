<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\modules\core\widgets\Tabs;

/* @var $this yii\web\View */
/* @var $model backend\modules\article\models\ArticleCategory */
/* @var $form yii\widgets\ActiveForm */
?>

<?php $form = ActiveForm::begin([
    'options' => [
        'class' => 'form-horizontal',
    ],
    'fieldConfig' => [
        'labelOptions' => [
            'class' => 'col-md-1 control-label',
        ],
        'template' => '{label}<div class="col-md-11">{input}{error}</div>',
    ]
]); ?>

    <?= Tabs::widget([
        'items' => [
            [
                'label' => 'Category',
                'content' => $this->render('_form_tab_category_article', [
                    'model' => $model,
                    'form' => $form,
                ]),
                'active' => true,
            ],
            [
                'label' => 'SEO',
                'content' => $this->render('_form_tab_seo', [
                    'model' => $model,
                    'form' => $form,
                ]),
            ]
        ],
    ]); ?>

    <div class="card-footer">

        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']); ?>
        <?= Html::a('Cancel', ['index'], ['class' => ($model->isNewRecord) ? 'btn btn-green btn-flat' : 'btn btn-primary btn-flat']); ?>

    </div>

<?php ActiveForm::end(); ?>