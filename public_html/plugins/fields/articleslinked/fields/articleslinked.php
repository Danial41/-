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

use RegularLabs\Library\RegEx as RL_RegEx;

if (is_file(JPATH_LIBRARIES . '/regularlabs/autoload.php'))
{
	require_once JPATH_LIBRARIES . '/regularlabs/autoload.php';
}

class JFormFieldArticlesLinked extends \RegularLabs\Library\Field
{
	public $type = 'ArticlesLinked';
	public $attributes;

	protected function getInput()
	{
		$this->params = $this->element->attributes();

		JFormHelper::loadFieldClass('radio');

		$this->value = $this->value ?: '0';

		$options = [
			JHtml::_('select.option', '1', JText::_('JSHOW')),
			JHtml::_('select.option', '0', JText::_('JHIDE')),
		];

		$layout = new JLayoutFile('joomla.form.field.radio');

		return $layout->render([
			'name'      => RL_RegEx::replace('\[\]$', '', $this->name),
			'id'        => $this->id,
			'value'     => $this->value,
			'options'   => $options,
			'class'     => 'btn-group btn-group-yesno',
			'readonly'  => false,
			'disabled'  => false,
			'required'  => false,
			'autofocus' => false,
		]);
	}
}
