def store_as_webp(sender, **kwargs):
    webp_path = sender.storage.path(".".join([sender.name, "webp"]))
    sender.image.save(webp_path, "webp")
