#!/usr/bin/env python2
#-*- coding: utf-8 -*-

import parse_subjects
import inspect
import os
import sys
import psycopg2
from django.core.management import execute_from_command_line

CURRENT_DIR = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
DATAFILE = os.path.join(CURRENT_DIR, "../src/django_app/courses/fixtures/initial_data.json")
PARSE_SCRIPT = os.path.join(CURRENT_DIR, "parse_subjects.py")

def reset_db():
    conn = psycopg2.connect("user=postgres password=root")
    conn.set_isolation_level(0)
    cur = conn.cursor()
    cur.execute("DROP DATABASE IF EXISTS net_portal;")
    cur.execute("CREATE DATABASE net_portal;")
    cur.close()
    conn.close()
    print "Database has been reset."

def main():
    sys.path.append(os.path.join(CURRENT_DIR, "../src/django_app"))
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "net_portal.settings")
    if not os.path.exists(DATAFILE) or os.path.getmtime(DATAFILE) < os.path.getmtime(PARSE_SCRIPT):
        parse_subjects.run()
    reset_db()
    execute_from_command_line(['./manage.py', 'syncdb'])

if __name__ == '__main__':
    main()
