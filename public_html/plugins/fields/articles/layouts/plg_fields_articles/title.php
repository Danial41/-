<?php
/**
 * @package         Articles Field
 * @version         3.0.1
 * 
 * @author          Peter van Westen <info@regularlabs.com>
 * @link            http://www.regularlabs.com
 * @copyright       Copyright © 2019 Regular Labs All Rights Reserved
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */

defined('_JEXEC') or die();

$article  = $displayData['article'];
$settings = $displayData['settings'];

$title = htmlentities($article->title);

if ($settings->link_title)
{
	if ( ! class_exists('ContentHelperRoute'))
	{
		require_once JPATH_SITE . '/components/com_content/helpers/route.php';
	}

	$slug = $article->alias ? ($article->id . ':' . $article->alias) : $article->id;
	$link = JRoute::_(ContentHelperRoute::getArticleRoute($slug, $article->catid, $article->language));

	$title = '<a href="' . $link . '">' . $title . '</a>';
}

echo $title;
