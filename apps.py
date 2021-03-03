from django.apps import AppConfig

from images.signals import store_as_webp


class ImagesConfig(AppConfig):
    name = "images"

    def ready(self):
        from easy_thumbnails.signals import thumbnail_created

        thumbnail_created.connect(store_as_webp)
