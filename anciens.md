---
layout: defaultPage
title: Ils ont travaillé au 24ème
---

<div class="row container-shuffle">
    {% for member in site.people_anciens %}
    <div class="col-sm-6 bloc-shuffle">
        <div class="team-member">
            <img src="/img/team/{{ member.pic }}.jpg" class="img-responsive img-circle" alt="">
            <h4>{{ member.name }}</h4>
            <p class="text-muted">{{ member.position }}</p>
            <ul class="list-inline social-buttons">
                {% for network in member.social %}
                <li>
                    <a href="{{ network.url }}">
                        <i class="fa fa-{{ network.title }}"></i>
                    </a>
                </li>
                {% endfor %}

            </ul>
        </div>
    </div>
    {% endfor %}
</div>