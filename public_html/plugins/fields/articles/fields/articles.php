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

use Joomla\Registry\Registry;
use RegularLabs\Library\Form;
use RegularLabs\Library\Parameters as RL_Parameters;

if (is_file(JPATH_LIBRARIES . '/regularlabs/autoload.php'))
{
	require_once JPATH_LIBRARIES . '/regularlabs/autoload.php';
}

require_once JPATH_PLUGINS . '/fields/articles/filters.php';

class JFormFieldArticles extends \RegularLabs\Library\Field
{
	public $type = 'Articles';
	public $attributes;

	protected function getInput()
	{
		$this->params = $this->element->attributes();

		$plugin_params = RL_Parameters::getInstance()->getPluginParams('articles', 'fields');

		if ( ! is_array($this->value))
		{
			$this->value = explode(',', $this->value);
		}

		$attributes = [
			'fieldtype' => 'articles',
			'multiple'  => $this->get('multiple', $plugin_params->multiple),
			'currentid' => $this->getCurrentArticleId(),
			'ordering'  => $this->get('articles_ordering', 'title')
				. ' ' . $this->get('articles_ordering_direction', 'ASC'),
		];

		$filters = $this->getFilters();

		$attributes = array_merge($attributes, $filters);

		$this->attributes = $options = new Registry($attributes);

		$options = $this->getOptions();

		return Form::selectListSimple(
			$options,
			$this->name, $this->value, $this->id,
			$this->attributes->get('size'), $this->attributes->get('multiple')
		);
	}

	private function getFilters()
	{
		$filters = new PlgFieldsArticlesFilters($this, $this->form);

		return $filters->get();
	}

	private function getCurrentArticleId()
	{
		$filters = new PlgFieldsArticlesFilters($this, $this->form);

		return $filters->getCurrentArticleId();
	}

	public function getOptions()
	{
		$query = $this->db->getQuery(true)
			->select('COUNT(*)')
			->from($this->db->quoteName('#__content', 'i'))
			->where('i.access > -1');

		$filters = new PlgFieldsArticlesFilters($this->attributes, $this->form);
		$filters->addToQuery($query);

		$categories = $filters->getCategories();

		$this->db->setQuery($query);
		$total = $this->db->loadResult();

		if ($total > $this->max_list_count)
		{
			return -1;
		}

		$ordering = 'i.' . $this->attributes->get('ordering', 'title ASC');
		$extras   = ['language', 'id'];

		$query->clear('select')
			->select('i.id, i.title as name, i.language, i.state as published');

		if (count($categories) > 1)
		{
			$extras = ['language', 'cat', 'id'];

			$query->select('c.title as cat')
				->join('LEFT', '#__categories AS c ON c.id = i.catid');

			if (strpos($ordering, 'ordering'))
			{
				$ordering = 'c.title ASC, ' . $ordering;
			}
		}

		$query->order($ordering);

		$this->db->setQuery($query);
		$list = $this->db->loadObjectList('id');

		$options = $this->getOptionsByList($list, $extras);

		$currentid = $this->attributes->get('currentid');

		if (isset($options[$currentid]))
		{
			$options[$currentid]->disable = true;
			$options[$currentid]->text    .= ' (' . JText::_('RL_CURRENT') . ')';
			if (strpos($options[$currentid]->text, 'color:grey') === false)
			{
				$options[$currentid]->text = '[[:font-style:italic;color:grey;:]]' . $options[$currentid]->text;
			}
		}

		if ( ! $this->attributes->get('multiple'))
		{
			array_unshift($options, JHtml::_('select.option', '-', '&nbsp;', 'value', 'text', true));
			array_unshift($options, JHtml::_('select.option', '-', '- ' . JText::_('Select Item') . ' -'));
		}

		return $options;
	}
}
