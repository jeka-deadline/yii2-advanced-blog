<?php

namespace app\modules\portfolio\models;

use Yii;
use common\models\portfolio\Work as BaseWork;
use common\behaviors\ThumbBehavior;
use yii\helpers\Url;
use yii\helpers\Html;
use DateTime;

class Work extends BaseWork
{
    /**
     * {@inheritdoc}
     *
     * @return array
     */
    public function behaviors()
    {
        return  [
            'thumbBehavior' => [
                'class' => ThumbBehavior::className(),
                'fileAttribute' => 'image', //атрибут модели для картинки
                'saveDir' => 'files/portfolio/', //путь для сохранения картинок
                'thumbsSaveDir' => 'files/portfolio/thumbs/', // путь для сохранения превью картинок
            ],
        ];
    }

    /**
     * Generate string tags for this work
     *
     * @param string $template Template for tag url
     * @param string $separatorTags Separator for link tag
     * @return string
     */
    public function getListWorkTags($template = '{linkTag}', $separatorTags = ', ')
    {
        $listTags = [];

        foreach ($this->tags as $tag) {
            $tagUrl  = Url::toRoute(['/portfolio/works/tag', 'tagAlias' => $tag->alias]);
            $tagLabel = $tag->name;

            $listTags[] = strtr($template, [
                '{linkTag}'   => Html::a($tagLabel, $tagUrl),
                '{tagUrl}'    => $tagUrl,
                '{tagLabel}'  => $tagLabel,
            ]);
        }

        return implode($separatorTags, $listTags);
    }

    /**
     * Get date work by format
     *
     * @param string $format Return date format by this format
     * @param bool $monthType
     * @return string
     */
    public function getDate($format = '{day}/{monthNumber}/{year}', $monthType = 'simple')
    {
        $workDayDatePartials   = explode('-', $this->date);

        $monthType = ($monthType === 'simple') ? true : false;

        $monthName = $this->getMonthByNumber($workDayDatePartials[ 1 ]);

        return strtr($format, [
            '{day}'         => $workDayDatePartials[ 2 ],
            '{monthNumber}' => $workDayDatePartials[ 1 ],
            '{monthName}'   => $monthName,
            '{year}'        => $workDayDatePartials[ 0 ],
        ]);
    }

    /**
     * Get name month by number
     *
     * @param integer $monthNumber Month number
     * @param bool $simple
     * @return string
     */
    protected function getMonthByNumber($monthNumber, $simple = true)
    {
        switch ((int)$monthNumber) {
            case 1:
                return ($simple) ? 'Январь' : 'Января';
            case 2:
                return ($simple) ? 'Февраль' : 'Февраля';
            case 3:
                return ($simple) ? 'Март' : 'Марта';
            case 4:
                return ($simple) ? 'Апрель' : 'Апреля';
            case 5:
                return ($simple) ? 'Май' : 'Мая';
            case 6:
                return ($simple) ? 'Июнь' : 'Июня';
            case 7:
                return ($simple) ? 'Июль' : 'Июля';
            case 8:
                return ($simple) ? 'Август' : 'Августа';
            case 9:
                return ($simple) ? 'Сентябрь' : 'Сентября';
            case 10:
                return ($simple) ? 'Октябрь' : 'Октября';
            case 11:
                return ($simple) ? 'Ноябрь' : 'Ноября';
            case 12:
                return ($simple) ? 'Декабрь' : 'Декабря';
        }
    }

    /**
     * Generate list url for sitemap
     *
     * @param string $frequently Value frequently
     * @param string $priority Value priority
     * @return array
     */
    public static function getListItemsForSitemap($frequently, $priority = '0.5')
    {
        $items = [];
        $works = static::find()
            ->where(['active' => 1])
            ->all();

        foreach ($works as $work) {
            $dateUpdateWork = new DateTime($work->updated_at);

            $items[] = [
                'loc'         => Url::toRoute(['/portfolio/works/work', 'workAlias' => $work->alias], true),
                'lastmod'     => $dateUpdateWork->format(DateTime::W3C),
                'changefreq'  => $frequently,
                'priority'    => $priority,
            ];
        }

        return $items;
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getLinksWorkToCategory()
    {
        return $this->hasMany(LinksWorkToCategory::className(), ['work_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getLinksWorkToTag()
    {
        return $this->hasMany(LinksWorkToTag::className(), ['work_id' => 'id']);
    }

    public function getCategory()
    {
        if ($this->categories) {
            return $this->getCategories()->one();
        }

        return null;
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategories()
    {
        return $this->hasMany(Category::className(), ['id' => 'category_id'])
            ->viaTable(LinksWorkToCategory::tableName(), ['work_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTags()
    {
        return $this->hasMany(Tag::className(), ['id' => 'tag_id'])
            ->viaTable(LinksWorkToTag::tableName(), ['work_id' => 'id']);
    }
}
