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

defined('_JEXEC') or die;

JLoader::import('components.com_fields.libraries.fieldsplugin', JPATH_ADMINISTRATOR);

JForm::addFieldPath(JPATH_PLUGINS . '/fields/articles/fields');

/**
 * Fields Articles Plugin
 */
class PlgFieldsArticles extends FieldsPlugin
{
}
