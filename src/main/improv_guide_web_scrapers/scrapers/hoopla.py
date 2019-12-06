from typing import Iterator

from improv_guide_web_scrapers.model.event import Event


def scraper(page_html: str, venue: str) -> Iterator[Event]:
    if False:
        yield Event()
