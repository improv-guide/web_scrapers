from typing import Iterator

from improv_guide_web_scrapers.model.event import Event
from improv_guide_web_scrapers.scrapers.hoopla import scraper
from test_improv_guide_web_scrapers.test_data import get_text


def test_0():
    results: Iterator[Event] = scraper(
        get_text("hoopla.html"), venue="xxx"
    )
    first_event = next(results)

    assert first_event.name == "Foo"
