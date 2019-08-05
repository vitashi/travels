#!/usr/bin/python
# -*- coding: utf-8 -*-

import logging
import os
import views

from webapp2 import WSGIApplication, Route
from webapp2_extras.routes import RedirectRoute

# Localhost timezone (datetime.now()) defaults to EAT (Computer Clocks timezone).
# This causes some issues since datastore auto_now is always on UTC
# E.g condition parser tests failing everyday between 0:00 and 3:00 EAT.
# The line below is a quick fix
os.environ['TZ'] = 'UTC'

logging.getLogger().setLevel(logging.DEBUG)


app = WSGIApplication(
      [
      Route(r'/', handler=views.MainApp, name="MainApp"),
      RedirectRoute(r'/<:.*>', redirect_to="/")
      ], debug=True
)
