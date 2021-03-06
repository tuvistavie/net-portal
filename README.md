# Net Portal 2.0

Replacement for Waseda Net Portal to get a usable interface.
Only the Course Navi module is being developed at the present. Other modules will come later.

## Local install
### Dependencies
As Django does not support Python 3 yet, all the code are written in Python 2.

* [Python 2](http://www.python.org/download/)
* [Django 1.4](https://www.djangoproject.com/download/) ``pip install Django``
* [Psycopg 2](http://pypi.python.org/pypi/psycopg2) ``pip install psycopg2``
* [BeautifulSoup4](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) ``pip install beautifulsoup4``
* [lxml 2.3](http://lxml.de/index.html#download) ``pip install lxml``
* [python-rsa 3](http://stuvel.eu/files/python-rsa-doc/installation.html) ``pip install rsa``
* [django-debug-toolbar](https://github.com/django-debug-toolbar/django-debug-toolbar) ``pip install django-debug-toolbar``

These dependencies can be installed automatically by running.

    python2 setup.py develop

Postgresql needs to be installed and `pg_config` available on the path for psycopg2 to be installed properly.


### Installation
Run

    python2 scripts/parse_subjects.py

to generate the initial database data (it may take a while) and

    python2 scripts/generate_keys.py OUTPUT_DIR

to generate RSA keys to use in the program.

Check the database settings in `src/net_portal/settings.py` and sync the database (it may take a while) by running

    python2 src/django_app/manage.py syncdb
