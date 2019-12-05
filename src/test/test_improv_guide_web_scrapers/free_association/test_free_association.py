from typing import Iterator

from improv_guide_web_scrapers.model.event import Event
from improv_guide_web_scrapers.scrapers.free_association import scraper
from test_improv_guide_web_scrapers.test_data import get_text

def test_0():
    results:Iterator[Event] = scraper(get_text("free_association.html"), venue="Free Association")
    for event in results:
        assert event.name

