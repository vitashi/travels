import os
import urllib
from google.appengine.ext import blobstore
from google.appengine.ext import db
from google.appengine.api import images, modules
from google.appengine.ext.webapp import blobstore_handlers
import json
import re
import logging
import webapp2


class MainApp(webapp2.RequestHandler):

    def get(self, *args, **kwargs):
        print args, kwargs
        self.render_template("build/index.html")
