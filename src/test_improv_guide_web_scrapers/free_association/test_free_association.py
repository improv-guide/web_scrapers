from typing import Iterator

from improv_guide_web_scrapers.model.event import Event
from improv_guide_web_scrapers.scrapers.free_association import free_association_scraper
from test_improv_guide_web_scrapers.test_data import get_text

def test_0():
    results:Iterator[Event] = free_association_scraper(get_text("free_association.html"))
    for event in results:
        assert event.name
    
