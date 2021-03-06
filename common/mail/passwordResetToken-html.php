<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $user frontend\modules\user\models\User */

$resetLink = Yii::$app->urlManager->createAbsoluteUrl(['/user/security/reset-password', 'token' => $user->password_reset_token]);
?>
<div class="password-reset">
    <p>Hello <?= Html::encode($user->login) ?>,</p>

    <p>Follow the link below to reset your password:</p>

    <p><?= Html::a(Html::encode($resetLink), $resetLink) ?></p>
</div>
