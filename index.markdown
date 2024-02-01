---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: Prototype-TableofContents
---

## library
 {% assign sortedPosts = site.netflix_prototype | sort: 'name' %} 
{% for netflix_prototype in sortedPosts %}

  <ul class="ul_none ">
	<li class="p_3 p-l_0 h:bg_primary-5">
		<a href="{{ netflix_prototype.url | append: site.github.build_revision | relative_url }}">
      		{{ netflix_prototype.name }} - {{ netflix_prototype.uri }}
    	</a>
	</li>
  </ul>
{% endfor %}
## library V2
{% assign sortedPosts = site.derubis | sort: 'name' %} 
{% for derubis in sortedPosts %}

  <ul class="ul_none ">
	<li class="p_3 p-l_0 h:bg_primary-5">
		<a href="{{ derubis.url | append: site.github.build_revision | relative_url }}">
      		{{ derubis.name }} - {{ derubis.uri }}
    	</a>
	</li>
  </ul>
{% endfor %}