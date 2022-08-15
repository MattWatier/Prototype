---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## library

{% for netflix_prototype in site.netflix_prototype %}

  <ul class="ul_none ">
	<li class="p_3 p-l_0 h:bg_primary-5">
		<a href="{{ netflix_prototype.url | append: site.github.build_revision | relative_url }}">
      		{{ netflix_prototype.name }} - {{ netflix_prototype.uri }}
    	</a>
	</li>
  </ul>
{% endfor %}
